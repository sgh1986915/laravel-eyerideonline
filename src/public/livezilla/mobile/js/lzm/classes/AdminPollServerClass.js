function AdminPollServerClass() {
    this.serverUrl = '';
    this.globalConfig = {};
    this.loginData = {};
}

AdminPollServerClass.prototype.pollServerAdminLogin = function() {
    var that = this;
    var acid = md5(Math.random().toString()).substr(0,5);
    var pacid = md5(Math.random().toString()).substr(0,5);
    var postUrl = that.serverUrl + '/server.php?acid=' + acid;
    var loginDataObject = {
        p_ext_u: '',
        p_int_r: '',
        p_ext_b: '',
        p_int_t: '',
        p_int_d: '',
        p_int_v: '',
        p_int_wp: '',
        p_gl_t: '',
        p_int_ev: '',
        p_gl_c: '',
        p_gl_e: '',
        p_gl_a: '',
        p_acid: pacid,
        p_user: that.loginData.login,
        p_pass: that.loginData.passwd,
        p_request:'intern',
        p_action:'login',
        p_administrate: '1',
        p_get_management: '1',
        p_loginid: that.loginData.id,
        p_version: that.loginData.version,
        p_clienttime: Math.round($.now() / 1000)
    };
    $.ajax({
        type: "POST",
        url: postUrl,
        data: loginDataObject,
        dataType: 'text'
    }).done(function(data) {
        that.evaluateServerResponse(data);
    }).fail(function() {
        logit('Failed polling admin data.')
    });
};

AdminPollServerClass.prototype.checkXmlIsValid = function(xmlString) {
    try {
        xmlString = xmlString.replace(/\r/g, '').replace(/\n/g, '');
        var xmlDoc = $.parseXML(xmlString);
        var xmlIsLiveZillaXml = false, rtValue = null;
        $(xmlDoc).find('livezilla_xml').each(function() {
            xmlIsLiveZillaXml = true;
        });
        if (xmlIsLiveZillaXml) {
            rtValue = xmlDoc;
        } else {
            rtValue = {error: 'NO_LZ_XML'}
        }
    } catch(ex) {
        rtValue = {error: '', stack: ex.stack}
    }
    return rtValue;
};

AdminPollServerClass.prototype.evaluateServerResponse = function(xmlString) {
    var that = this;
    var xmlDoc = that.checkXmlIsValid(xmlString);
    if (typeof xmlDoc.error == 'undefined') {
        that.readGlobalConfiguration(xmlDoc);
        lzm_serverEvaluation.readGroupData(xmlDoc);
        lzm_serverEvaluation.readUserData(xmlDoc);
        $('#umg-list-placeholder-content-0').html(lzm_userManagement.createOperatorList());
        $('#umg-list-placeholder-content-1').html(lzm_userManagement.createGroupList());
    } else {
        switch (xmlDoc.error) {
            case 'NO_LZ_XML':
                logit('No LiveZilla XML');
                break;
            case 'PARSE_ERROR':
                logit(xmlDoc.stack);
                break;
        }
    }
};

AdminPollServerClass.prototype.readGlobalConfiguration = function(xmlDoc) {
    var that = this, globalConfig = {site: {}};
    try {
        $(xmlDoc).find('gl_c').each(function() {
            var glC = $(this);
            glC.children('conf').each(function() {
                var confObj = {value: lz_global_base64_url_decode($(this).attr('value')), sub: []};
                var confKey = lz_global_base64_url_decode($(this).attr('key'));
                var conf = $(this);
                conf.children('sub').each(function() {
                    var subObj = {};
                    var subKey = lz_global_base64_url_decode($(this).attr('key'));
                    subObj[subKey] = lz_global_base64_url_decode($(this).text());
                    confObj.sub.push(subObj);
                });
                globalConfig[confKey] = confObj;
            });
            glC.children('site').each(function() {
                var siteObj = {dbconf: {}};
                var siteIndex = lz_global_base64_url_decode($(this).attr('index'));
                var site = $(this);
                site.children('conf').each(function() {
                    var confObj = {value: lz_global_base64_url_decode($(this).attr('value')), sub: []};
                    var confKey = lz_global_base64_url_decode($(this).attr('key'));
                    var conf = $(this);
                    conf.children('sub').each(function() {
                        var subObj = {};
                        var subKey = lz_global_base64_url_decode($(this).attr('key'));
                        subObj[subKey] = lz_global_base64_url_decode($(this).text());
                        confObj.sub.push(subObj);
                    });
                    siteObj[confKey] = confObj;
                });
                site.children('db_conf').each(function() {
                    var dbconfObj = {glEmail: {}};
                    var dbconf = $(this);
                    dbconf.children('gl_email').each(function() {
                        var emObj = {};
                        var em = $(this);
                        em.children('tes').each(function() {
                            var tesObj = {};
                            var myAttributes = $(this)[0].attributes;
                            for (var attrIndex = 0; attrIndex < myAttributes.length; attrIndex++) {
                                tesObj[myAttributes[attrIndex].name] = lz_global_base64_url_decode(myAttributes[attrIndex].value);
                            }
                            emObj[tesObj.i] = tesObj;
                        });
                        dbconfObj.glEmail = emObj;
                    });
                    siteObj.dbconf = dbconfObj;
                });
                globalConfig.site[siteIndex] = siteObj;
            });
        });
        that.globalConfig = globalConfig;
    } catch(ex) {
        logit(ex.stack);
    }
};

AdminPollServerClass.prototype.pollSave = function(myType, myObject) {
    var that = this;
    var setIdle = function(idleState) {
        var acid = md5(Math.random().toString()).substr(0,5);
        var pacid = md5(Math.random().toString()).substr(0,5);
        var postUrl = that.serverUrl + '/server.php?acid=' + acid;
        var loginDataObject = {
            p_acid: pacid,
            p_user: that.loginData.login,
            p_pass: that.loginData.passwd,
            p_request: 'intern',
            p_action: 'set_idle',
            p_administrate: '1',
            p_get_management: '1',
            p_loginid: that.loginData.id,
            p_idle: idleState.toString()
        };
        $.ajax({
            type: "POST",
            url: postUrl,
            data: loginDataObject,
            dataType: 'text'
        }).done(function(data) {
            if (checkServerResponse(data, 'idle')) {
                if (idleState == 1) {
                    doPoll();
                } else {
                    logit('Finished polling');
                }
            }
        }).fail(function() {
            logit('Failed polling idle state.');
        });
    };

    var doPoll = function() {
        var acid = md5(Math.random().toString()).substr(0,5);
        var postUrl = that.serverUrl + '/server.php?acid=' + acid;
        var dataObject = that.createSaveDataObject(myType, myObject);
        $.ajax({
            type: "POST",
            url: postUrl,
            data: dataObject,
            dataType: 'text'
        }).done(function(data) {
            if (checkServerResponse(data, 'data')) {
                setIdle(0);
            }
        }).fail(function() {
            logit('Failed saving admin data.');
        });
    };

    var checkServerResponse = function(xmlString, type) {
        var xmlIsValid = that.checkXmlIsValid(xmlString), rt = false;
        if (typeof xmlIsValid.error == 'undefined') {
            if (type == 'data') {
                $(xmlIsValid).find('livezilla_xml').each(function() {
                    $(this).find('value').each(function() {
                        if (lz_global_base64_decode($(this).attr('id')) == 1) {
                            rt = true;
                        }
                    });
                });
            } else if (type == 'idle') {
                $(xmlIsValid).find('livezilla_xml').each(function() {
                    rt = true;
                });
            }
            if (!rt) {
                logit(xmlIsValid);
            }
        } else {
            logit(xmlIsValid.error);
        }

        return rt;
    };

    setIdle(1);
};

AdminPollServerClass.prototype.createSaveDataObject = function(myType, myObject) {
    var that = this, i = 0, j = 0, myKey = '', myValue = '', myMode = 'save';
    var deleteSignature = '0';
    if (myType.indexOf('~') != -1) {
        myMode = myType.split('~')[1];
        myType = myType.split('~')[0];
    }
    var pacid = md5(Math.random().toString()).substr(0,5);
    var myDataObject = {
        p_acid: pacid,
        p_user: that.loginData.login,
        p_pass: that.loginData.passwd,
        p_request: 'intern',
        p_action: 'update_management',
        p_administrate: '1',
        p_get_management: '1',
        p_loginid: that.loginData.id,
        p_upload_value: ''
};
    switch (myType) {
        case 'group':
            var group = lzm_commonTools.clone(myObject);
            var desc = {}, encGId = lz_global_base64_encode(group.id);
            for (myKey in myObject.humanReadableDescription) {
                if (myObject.humanReadableDescription.hasOwnProperty(myKey)) {
                    desc[myKey.toUpperCase()] = myObject.humanReadableDescription[myKey];
                }
            }
            var ohs = [];
            for (i=0; i<myObject.ohs.length; i++) {
                ohs.push([myObject.ohs[i].text, myObject.ohs[i].open, myObject.ohs[i].close]);
            }
            var tiAssign = {}, ciHidden = [], tiHidden = [], ciRequired = [], tiRequired = [], ciMasked = {}, tiMasked = {};
            var cPriorities = {}, ciCap = {}, tiCap = {}, cSmc = [];
            for (i=0; i<group.f.length; i++) {
                switch (group.f[i].key) {
                    case 'ti_assign':
                        for (j=0; j<group.f[i].values.length; j++) {
                            tiAssign[group.f[i].values[j].key] = group.f[i].values[j].text;
                        }
                        break;
                    case 'c_prio':
                        for (j=0; j<group.f[i].values.length; j++) {
                            cPriorities[group.f[i].values[j].key] = group.f[i].values[j].text;
                        }
                        break;
                    case 'ci_hidden':
                        for (j=0; j<group.f[i].values.length; j++) {
                            ciHidden.push(group.f[i].values[j].text);
                        }
                        break;
                    case 'ti_hidden':
                        for (j=0; j<group.f[i].values.length; j++) {
                            tiHidden.push(group.f[i].values[j].text);
                        }
                        break;
                    case 'ci_mandatory':
                        for (j=0; j<group.f[i].values.length; j++) {
                            ciRequired.push(group.f[i].values[j].text);
                        }
                        break;
                    case 'ti_mandatory':
                        for (j=0; j<group.f[i].values.length; j++) {
                            tiRequired.push(group.f[i].values[j].text);
                        }
                        break;
                    case 'ci_masked':
                        for (j=0; j<group.f[i].values.length; j++) {
                            ciMasked[group.f[i].values[j].key] = group.f[i].values[j].text;
                        }
                        break;
                    case 'ti_masked':
                        for (j=0; j<group.f[i].values.length; j++) {
                            tiMasked[group.f[i].values[j].key] = group.f[i].values[j].text;
                        }
                        break;
                    case 'ci_cap':
                        for (j=0; j<group.f[i].values.length; j++) {
                            ciCap[group.f[i].values[j].key] = group.f[i].values[j].text;
                        }
                        break;
                    case 'ti_cap':
                        for (j=0; j<group.f[i].values.length; j++) {
                            tiCap[group.f[i].values[j].key] = group.f[i].values[j].text;
                        }
                        break;
                    case 'c_smc':
                        cSmc = lzm_commonTools.clone(group.f[i].values);
                        break;
                }
            }
            var emIn = [];
            for (i=0; i<group.tei.length; i++) {
                emIn.push(group.tei[i].id);
            }
            var pmGeneral = '', filters = {};
            if (typeof group.filters != 'undefined') {
                for (i=0; i<group.filters.length; i++) {
                    filters[lz_global_base64_encode(group.filters[i].text)] = group.filters[i].ex
                }
            }
            var vouchers = [];
            if (typeof group.vouchers != 'undefined') {
                for (i=0; i<group.vouchers.length; i++) {
                    vouchers.push(group.vouchers[i].id);
                }
            }

            myDataObject.p_groups_0_id = myObject.id;
            myDataObject.p_groups_0_external = myObject.external;
            myDataObject.p_groups_0_internal = myObject.internal;
            myDataObject.p_groups_0_description = lzm_commonTools.phpSerialize(desc, true);
            myDataObject.p_groups_0_visitor_filters = lzm_commonTools.phpSerialize(filters, false);
            myDataObject.p_groups_0_email = myObject.email;
            myDataObject.p_groups_0_standard = myObject.standard;
            myDataObject.p_groups_0_ps = myObject.ps;
            myDataObject.p_groups_0_opening_hours = lzm_commonTools.phpSerialize(ohs, false);
            myDataObject.p_groups_0_ticket_assign = lzm_commonTools.phpSerialize(tiAssign, false);
            myDataObject.p_groups_0_priorities = lzm_commonTools.phpSerialize(cPriorities, false);
            myDataObject.p_groups_0_ticket_email_out = myObject.teo;
            myDataObject.p_groups_0_chat_email_out = myObject.ceo;
            myDataObject.p_groups_0_ticket_email_in = lzm_commonTools.phpSerialize(emIn, false);
            myDataObject.p_groups_0_ticket_email_handling = group.thue;
            myDataObject.p_groups_0_chat_inputs_hidden = lzm_commonTools.phpSerialize(ciHidden, false);
            myDataObject.p_groups_0_ticket_inputs_hidden = lzm_commonTools.phpSerialize(tiHidden, false);
            myDataObject.p_groups_0_chat_inputs_required = lzm_commonTools.phpSerialize(ciRequired, false);
            myDataObject.p_groups_0_ticket_inputs_required = lzm_commonTools.phpSerialize(tiRequired, false);
            myDataObject.p_groups_0_chat_inputs_masked = lzm_commonTools.phpSerialize(ciMasked, false);
            myDataObject.p_groups_0_ticket_inputs_masked = lzm_commonTools.phpSerialize(tiMasked, false);
            myDataObject.p_groups_0_chat_inputs_cap = lzm_commonTools.phpSerialize(ciCap, false);
            myDataObject.p_groups_0_ticket_inputs_cap = lzm_commonTools.phpSerialize(tiCap, false);
            myDataObject.p_groups_0_max_chats = group.mc;
            myDataObject.p_groups_0_chat_vouchers_required = lzm_commonTools.phpSerialize(vouchers, false);
            myDataObject.p_groups_0_pre_js = (typeof group.prcjs != 'undefined') ? group.prcjs : '';
            myDataObject.p_groups_0_post_js = (typeof group.pocjs != 'undefined') ? group.pocjs : '';
            if (myMode == 'remove') {
                myDataObject.p_groups_0_delete = '1';
            }
            if (typeof group.sig != 'undefined') {
                for (i=0; i<group.sig.length; i++) {
                    deleteSignature = (typeof group.sig[i].deleted == 'undefined' || !group.sig[i].deleted) ? '0' : '1';
                    myDataObject['p_db_sig_g_' + encGId + '_' + i + '_a'] = group.sig[i].i;
                    myDataObject['p_db_sig_g_' + encGId + '_' + i + '_b'] = group.sig[i].d;
                    myDataObject['p_db_sig_g_' + encGId + '_' + i + '_c'] = deleteSignature;
                    myDataObject['p_db_sig_g_' + encGId + '_' + i + '_d'] = group.sig[i].n;
                    myDataObject['p_db_sig_g_' + encGId + '_' + i + '_e'] = group.sig[i].text;
                }
            }
            for (i=0; i<cSmc.length; i++) {
                myDataObject['p_db_smc_g_' + encGId + '_' + i + '_sm_a'] = cSmc[i].p;
                myDataObject['p_db_smc_g_' + encGId + '_' + i + '_sm_b'] = cSmc[i].text;
                myDataObject['p_db_smc_g_' + encGId + '_' + i + '_sm_c'] = cSmc[i].c;
                myDataObject['p_db_smc_g_' + encGId + '_' + i + '_sm_d'] = cSmc[i].n;
                myDataObject['p_db_smc_g_' + encGId + '_' + i + '_sm_e'] = (cSmc[i].d != '') ? cSmc[i].d : '0';
                myDataObject['p_db_smc_g_' + encGId + '_' + i + '_sm_g'] = cSmc[i].i;
                myDataObject['p_db_smc_g_' + encGId + '_' + i + '_sm_h'] = cSmc[i].s;
                myDataObject['p_db_smc_g_' + encGId + '_' + i + '_sm_i'] = cSmc[i].t;
                myDataObject['p_db_smc_g_' + encGId + '_' + i + '_sm_j'] = lz_global_base64_encode(cSmc[i].tr);
            }
            if (typeof group.pm != 'undefined') {
                for (i=0; i<group.pm.length; i++) {
                    if (typeof group.pm[i].deleted == 'undefined' || !group.pm[i].deleted) {
                        pmGeneral += (pmGeneral != '') ? ',1' : '1';
                        if (typeof group.pm[i].lang != 'undefined' && group.pm[i].lang != '') {
                            group.pm[i].lang = group.pm[i].lang.toUpperCase();
                            if (typeof group.autoSendChatWelcome != 'undefined')
                                group.pm[i].aw = group.autoSendChatWelcome;
                            if (typeof group.chatWelcomeIsEditable != 'undefined')
                                group.pm[i].edit = group.chatWelcomeIsEditable;
                            for (myKey in group.pm[i]) {
                                if (group.pm[i].hasOwnProperty(myKey)) {
                                    if ($.inArray(myKey, ['gid', 'invm', 'inva', 'wpm', 'wpa', 'wel', 'welcmb', 'ci', 'ccmbi',
                                        'ti', 'ect', 'et', 'qm', 'st', 'sct', 'str', 'etr', 'hct', 'ht', 'htr', 'qmt', 'edit',
                                        'bi', 'def', 'aw']) != -1) {
                                        myValue = (typeof group.pm[i][myKey] != 'undefined') ? group.pm[i][myKey] : '';
                                        myValue = ($.inArray(myKey, ['gid', 'qmt', 'edit', 'bi', 'def', 'aw']) == -1) ? lz_global_base64_encode(myValue) : myValue;
                                        myDataObject['p_db_pm_g_' + encGId + '_' + group.pm[i].lang + '_' + myKey] = myValue;
                                    }
                                }
                            }
                            lzm_userManagement.groups.setGroupProperty(group.id, 'pm', group.pm);
                            var test = lzm_userManagement.groups.getGroup(group.id);
                        }
                    } else {
                        myDataObject['p_db_pm_g_' + encGId + '_' + group.pm[i].lang + '_gid'] = group.pm[i]['gid'];
                        myDataObject['p_db_pm_g_' + encGId + '_' + group.pm[i].lang + '_del'] = 1;
                    }
                }
            }
            myDataObject.p_db_pm = pmGeneral;
            break;
        case 'user':
        case 'bot':
            var operator = lzm_commonTools.clone(myObject);
            var encUid = lz_global_base64_encode(operator.id);
            var isBot = (typeof operator.isbot != 'undefined') ? operator.isbot.toString() :
                (lzm_userManagement.editType == 'bot') ? '1' : '0';
            var opPasswd = (isBot == '1') ? md5(Math.random().toString()) :
                (operator.passwd != operator.pass) ? md5(operator.passwd) : operator.passwd;
            var editUser = operator.id + ',';
            editUser += (operator.passwd != operator.pass) ? md5(operator.passwd) + ',' : ',';
            editUser += ($('#operator-force-pwd-change').prop('checked')) ? '1' : '0';
            myDataObject['p_operators_0_id'] = operator.userid;
            myDataObject['p_operators_0_system_id'] = operator.id;
            if (typeof operator.level != 'undefined') {
                myDataObject['p_operators_0_level'] = operator.level;
            } else {
                myDataObject['p_operators_0_level'] ='0';
            }
            myDataObject['p_operators_0_groups'] = lz_global_base64_encode(lzm_commonTools.phpSerialize(operator.groups, true));
            myDataObject['p_operators_0_groups_hidden'] = lz_global_base64_encode(lzm_commonTools.phpSerialize(operator.groupsHidden, true));
            var wsConfig = (typeof operator.ws_config == 'object' && operator.ws_config instanceof Array) ? operator.ws_config : [];
            var wsUsers = (typeof operator.ws_users == 'object' && operator.ws_users instanceof Array) ? operator.ws_users : [];
            myDataObject['p_operators_0_websites_config'] = lz_global_base64_encode(lzm_commonTools.phpSerialize(wsConfig, true));
            myDataObject['p_operators_0_websites_users'] = lz_global_base64_encode(lzm_commonTools.phpSerialize(wsUsers, true));
            myDataObject['p_operators_0_fullname'] = operator.name;
            myDataObject['p_operators_0_description'] = operator.desc;
            if (typeof operator.mc != 'undefined')
                myDataObject['p_operators_0_max_chats'] = operator.mc;
            var mobileEx = (typeof operator.mobileAlternatives != 'undefined') ? operator.mobileAlternatives : [];
            myDataObject['p_operators_0_mobile_ex'] = lzm_commonTools.phpSerialize(mobileEx);
            myDataObject['p_operators_0_email'] = operator.email;
            myDataObject['p_operators_0_deac'] = (operator.is_active) ? '0' : '1';
            if (typeof operator.websp != 'undefined') {
                myDataObject['p_operators_0_webspace'] = operator.websp;
            } else {
                myDataObject['p_operators_0_webspace'] = '0';
            }
            if (myMode != 'remove') {
                myDataObject['p_operators_0_password'] = opPasswd;
            }
            myDataObject['p_operators_0_permissions'] = operator.perms;
            myDataObject['p_operators_0_languages'] = operator.lang;
            if (typeof operator.lipr != 'undefined') {
                myDataObject['p_operators_0_lipr'] = operator.lipr;
            } else {
                myDataObject['p_operators_0_lipr'] = '';
            }
            myDataObject['p_operators_0_bot'] = isBot;
            myDataObject['p_operators_0_wm'] = (typeof operator.wm != 'undefined') ? operator.wm : '0';
            myDataObject['p_operators_0_wmohca'] = (typeof operator.wmohca != 'undefined') ? operator.wmohca : '0';
            if (myMode == 'remove') {
                myDataObject['p_operators_0_delete'] = '1';
            }
            if (isBot == '0' && myMode != 'remove') {
                myDataObject['p_edit_user'] = editUser;
            }
            var pp = (typeof operator.pp != 'undefined') ? operator.pp : lzm_userManagement.newOpPic;
            pp = (pp.indexOf('data') == 0) ? pp.split(',')[1] : pp;
            myDataObject['p_operators_0_pp'] = pp;
            if (typeof operator.sig != 'undefined') {
                for (i=0; i<operator.sig.length; i++) {
                    deleteSignature = (typeof operator.sig[i].deleted == 'undefined' || !operator.sig[i].deleted) ? '0' : '1';
                    myDataObject['p_db_sig_u_' + encUid + '_' + i + '_a'] = operator.sig[i].i;
                    myDataObject['p_db_sig_u_' + encUid + '_' + i + '_b'] = operator.sig[i].d;
                    myDataObject['p_db_sig_u_' + encUid + '_' + i + '_c'] = deleteSignature;
                    myDataObject['p_db_sig_u_' + encUid + '_' + i + '_d'] = operator.sig[i].n;
                    myDataObject['p_db_sig_u_' + encUid + '_' + i + '_e'] = operator.sig[i].text;
                }
            }
            if (typeof operator.pm != 'undefined') {
                for (i=0; i<operator.pm.length; i++) {
                    if (typeof operator.pm[i].lang != 'undefined' && operator.pm[i].lang != '') {
                        operator.pm[i].lang = operator.pm[i].lang.toUpperCase();

                        for (myKey in operator.pm[i]) {
                            if (operator.pm[i].hasOwnProperty(myKey)) {
                                if ($.inArray(myKey, ['uid', 'inva', 'invm', 'wpm', 'wpa', 'wel', 'welcmb', 'edit', 'bi',
                                    'def', 'aw']) != -1) {
                                    myValue = (typeof operator.pm[i][myKey] != 'undefined') ? operator.pm[i][myKey] : '';
                                    myValue = ($.inArray(myKey, ['uid', 'edit', 'bi', 'def', 'aw']) == -1) ? lz_global_base64_encode(myValue) : myValue;
                                    myDataObject['p_db_pm_u_' + encUid + '_' + operator.pm[i].lang + '_' + myKey] = myValue;
                                }
                            }
                        }

                    }
                }
            }
            break;
    }

    return myDataObject;
};
