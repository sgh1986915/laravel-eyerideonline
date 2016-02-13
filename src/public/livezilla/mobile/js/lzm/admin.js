var lzm_inputControls = {};
var lzm_translations = {};
var lzm_layout = {};
var lzm_userManagement = {};
var lzm_pollServer = {};
var lzm_commonTools = {};
var lzm_commonPermissions = {};
var lzm_serverEvaluation = {};
var lzm_commonDialog = {};
var userLanguage = 'en';

var sha256 = function(str) {
    str = (typeof str == 'undefined') ? 'undefined' : (str == null) ? 'null' : str.toString();
    return CryptoJS.SHA256(str).toString();
};

var sha1 = function(str) {
    str = (typeof str == 'undefined') ? 'undefined' : (str == null) ? 'null' : str.toString();
    return CryptoJS.SHA1(str).toString();
};

var md5 = function(str) {
    str = (typeof str == 'undefined') ? 'undefined' : (str == null) ? 'null' : str.toString();
    return CryptoJS.MD5(str).toString();
};

var t = function(translatableString, replacementArray) {
    return lzm_translations.translate(translatableString, replacementArray);
};

var loadUserManagement = function() {
    lzm_inputControls = new CommonInputControlsClass();
    lzm_translations = new CommonTranslationClass('', '', '', false, language);
    lzm_translations.setTranslationData(translationData);
    lzm_layout = new AdminDisplayLayoutClass();
    lzm_userManagement = new AdminUserManagementClass();
    lzm_pollServer = new AdminPollServerClass();
    lzm_commonTools = new CommonToolsClass();
    lzm_commonPermissions = new CommonPermissionClass();
    lzm_commonDialog = new CommonDialogClass();
    lzm_serverEvaluation = new CommonServerEvaluationClass();

    setUserManagementData();

    lzm_userManagement.createListView('', '', 'user');

    $('body').click(function() {
        removeUmgContextMenu();
        removeCreateButtonMenu();
        removeSignaturePlaceholderMenu();
        removeTextEmailsPlaceholderMenu();
    });

    $(window).resize(function() {
        lzm_layout.resizeAll();
    });
};

var setUserManagementData = function() {
    var operators = window.parent.lzm_chatServerEvaluation.operators.getOperatorList('', '', true);
    var groups = window.parent.lzm_chatServerEvaluation.groups.getGroupList('', true, false);
    var inputs = window.parent.lzm_chatServerEvaluation.inputList.getCustomInputList('full');
    var i = 0;
    for (i=0; i<operators.length; i++) {
        lzm_userManagement.operators.copyOperator(operators[i]);
    }
    for (i=0; i<groups.length; i++) {
        lzm_userManagement.groups.copyGroup(groups[i]);
    }
    for (i=0; i<inputs.length; i++) {
        lzm_userManagement.inputList.copyCustomInput(inputs[i]);
    }
    lzm_pollServer.loginData = {login: window.parent.lzm_chatPollServer.chosenProfile.login_name,
        passwd: window.parent.lzm_chatPollServer.chosenProfile.login_passwd,
        id: window.parent.lzm_chatPollServer.chosenProfile.login_id,
        version: window.parent.lzm_commonConfig.lz_version};
    lzm_pollServer.serverUrl = window.parent.lzm_chatPollServer.chosenProfile.server_protocol +
        window.parent.lzm_chatPollServer.chosenProfile.server_url;
    lzm_userManagement.defaultLanguage = window.parent.lzm_chatServerEvaluation.defaultLanguage;
    lzm_serverEvaluation.setLanguages(window.parent.lzm_chatServerEvaluation.userLanguage, window.parent.lzm_chatServerEvaluation.defaultLanguage);
    lzm_userManagement.availableLanguages = lzm_commonTools.clone(window.parent.lzm_chatDisplay.availableLanguages);

    lzm_pollServer.pollServerAdminLogin();
};

var selectTableLine = function(myId) {
    $('#umg-edit-btn').removeClass('ui-disabled');
    $('#umg-rm-btn').removeClass('ui-disabled');
    if (lzm_userManagement.selectedListTab == 'user') {
        lzm_userManagement.selectedUser = myId;
        $('.operator-list-line').removeClass('selected-table-line');
        $('#operator-list-line-' + myId).addClass('selected-table-line');
    } else {
        lzm_userManagement.selectedGroup = myId;
        $('.group-list-line').removeClass('selected-table-line');
        $('#group-list-line-' + myId).addClass('selected-table-line');
    }
};

var editListObject = function (myId, e) {
    removeUmgContextMenu();
    myId = (myId == null) ? (lzm_userManagement.selectedListTab == 'user') ? lzm_userManagement.selectedUser : lzm_userManagement.selectedGroup : myId;
    selectTableLine(myId);
    if (lzm_userManagement.selectedListTab == 'user') {
        var operator = lzm_userManagement.operators.getOperator(myId);
        if (operator != null && operator.isbot == 1) {
            lzm_userManagement.createBotConfiguration(operator);
        } else if (operator != null) {
            lzm_userManagement.createOperatorConfiguration(operator);
        }
    } else {
        var group = lzm_userManagement.groups.getGroup(myId);
        if (group != null) {
            lzm_userManagement.createGroupConfiguration(group);
        }
    }
};

var copyOperator = function(myId, e) {
    removeUmgContextMenu();
    selectTableLine('');
    var operator = lzm_userManagement.operators.getOperator(myId);
    if (operator != null) {
        operator.is_copy = true;
        operator.id = '';
        operator.userid = '';
        operator.name = '';
        operator.email = '';
        operator.desc = '';
        operator.is_active = true;
        operator.pass = '';
        operator.groups = [];
        operator.groupsHidden = [];
        if (operator.isbot == '1') {
            operator.pp = lzm_userManagement.newBotPic;
            lzm_userManagement.createBotConfiguration(operator);
        } else {
            operator.pp = '';
            lzm_userManagement.createOperatorConfiguration(operator);
        }
    }
};

var copyOpPermsFrom = function(myId, opId, e) {
    removeUmgContextMenu();
    selectTableLine(myId);
    var myOperator = lzm_userManagement.operators.getOperator(myId);
    var otherOperator = lzm_userManagement.operators.getOperator(opId);
    if (myOperator != null && otherOperator != null) {
        myOperator.perms = lzm_commonTools.clone(otherOperator.perms);
        lzm_userManagement.createOperatorConfiguration(myOperator);
    }
};

var showUmgContextMenu = function(myId, e) {
    e.preventDefault();
    selectTableLine(myId);
    removeCreateButtonMenu();
    if (!lzm_userManagement.contextMenuIsVisible) {
        var myObject = null;
        if (lzm_userManagement.selectedListTab == 'user') {
            myObject = lzm_userManagement.operators.getOperator(myId);
        } else {
            myObject = lzm_userManagement.groups.getGroup(myId);
        }
        if (myObject != null) {
            var scrolledDownY = $('#umg-content').scrollTop();
            var scrolledDownX = $('#umg-content').scrollLeft();
            var parentOffset = $('#umg-content').offset();
            var yValue = e.pageY - parentOffset.top + scrolledDownY + 36;
            var xValue = e.pageX - parentOffset.left + scrolledDownX;
            lzm_userManagement.showContextMenu(lzm_userManagement.selectedListTab, myObject, xValue, yValue, '');
            lzm_userManagement.contextMenuIsVisible = true;
        }
    } else {
        removeUmgContextMenu();
    }
};

var showSubMenu = function(place, objectId, contextX, contextY, menuWidth, menuHeight) {
    lzm_userManagement.showSubMenu(place, objectId, contextX, contextY, menuWidth, menuHeight);
};

var showSuperMenu = function(place, contextX, contextY, menuWidth, menuHeight) {
    lzm_userManagement.showSuperMenu(place, contextX, contextY, menuWidth, menuHeight);
};

var removeUmgContextMenu = function() {
    $('#user-context').remove();
    $('#group-context').remove();
    lzm_userManagement.contextMenuIsVisible = false;
};

var removeListObject = function(myId, e) {
    removeUmgContextMenu();
    myId = (myId == null) ? (lzm_userManagement.selectedListTab == 'user') ? lzm_userManagement.selectedUser : lzm_userManagement.selectedGroup : myId;
    lzm_userManagement.removeUserOrGroup(myId);
};

var createListObject = function(type) {
    removeCreateButtonMenu();
    removeUmgContextMenu();
    type = (type == null) ? lzm_userManagement.selectedListTab : type;
    switch (type) {
        case 'user':
            $('#umg-list-placeholder-tab-0').click();
            lzm_userManagement.newUser = lzm_userManagement.createEmptyUser('operator');
            lzm_userManagement.selectedUser = '';
            lzm_userManagement.createOperatorConfiguration(null);
            break;
        case 'bot':
            $('#umg-list-placeholder-tab-0').click();
            lzm_userManagement.newUser = lzm_userManagement.createEmptyUser('bot');
            lzm_userManagement.selectedUser = '';
            lzm_userManagement.createBotConfiguration(null);
            break;
        case 'group':
            $('#umg-list-placeholder-tab-1').click();
            lzm_userManagement.newGroup = lzm_userManagement.createEmptyGroup();
            lzm_userManagement.selectedGroup = '';
            lzm_userManagement.createGroupConfiguration(null);
            break;
    }
};

var showCreateButtonMenu = function(e) {
    e.stopPropagation();
    removeUmgContextMenu();
    if (!lzm_userManagement.createButtonMenuIsVisible) {
        lzm_userManagement.showContextMenu('new-btn', {}, 7, 31, 'umg-new-btn');
        lzm_userManagement.createButtonMenuIsVisible = true;
    } else {
        removeCreateButtonMenu();
    }
};

var removeCreateButtonMenu = function() {
    $('#new-btn-context').remove();
    lzm_userManagement.createButtonMenuIsVisible = false;
};

var createSignature = function() {
    selectSignature(-1);
    lzm_userManagement.createSignatureInput(null);
};

var editSignature = function(signatureNo) {
    if (typeof signatureNo != 'undefined') {
        selectSignature(signatureNo);
    }
    var signature = {};
    if (lzm_userManagement.selectedListTab == 'user') {
        var operator = lzm_commonTools.clone(lzm_userManagement.loadedUser);
        operator = (operator != null) ? operator : lzm_userManagement.newUser;
        signature = lzm_commonTools.clone(operator.sig[lzm_userManagement.selectedSignatureNo]);
        lzm_userManagement.createSignatureInput(signature);
    } else {
        var group = lzm_commonTools.clone(lzm_userManagement.loadedGroup);
        group = (group != null) ? group : lzm_userManagement.newGroup;
        signature = lzm_commonTools.clone(group.sig[lzm_userManagement.selectedSignatureNo]);
        lzm_userManagement.createSignatureInput(signature);
    }
};

var removeSignature = function() {
    var operator = null, group = null, signatureList = [];
    if (lzm_userManagement.selectedListTab == 'user') {
        operator = lzm_commonTools.clone(lzm_userManagement.loadedUser);
        operator = (operator != null) ? operator : lzm_userManagement.newUser;
        signatureList = (operator != null && typeof operator.sig != 'undefined') ? operator.sig : [];
    } else {
        group = lzm_commonTools.clone(lzm_userManagement.loadedGroup);
        group = (group != null) ? group : lzm_userManagement.newGroup;
        signatureList = (group != null && typeof group.sig != 'undefined') ? group.sig : [];
    }
    var tmpArray = [];
    for (var i=0; i<signatureList.length; i++) {
        if (i != lzm_userManagement.selectedSignatureNo) {
            tmpArray.push(signatureList[i]);
        } else {
            var deletedSignature = lzm_commonTools.clone(signatureList[i]);
            deletedSignature.deleted = true;
            tmpArray.push(deletedSignature);
        }
    }
    if (lzm_userManagement.selectedListTab == 'user') {
        if (lzm_userManagement.selectedUser != '') {
            lzm_userManagement.loadedUser.sig = lzm_commonTools.clone(tmpArray);
            operator = lzm_commonTools.clone(lzm_userManagement.loadedUser);
        } else {
            lzm_userManagement.newUser.sig = tmpArray;
            operator = lzm_commonTools.clone(lzm_userManagement.newUser);
        }
        $('.umg-edit-placeholder-content').each(function() {
            if ($(this).data('hash') == 'signatures') {
                $(this).html(lzm_userManagement.createSignatureConfiguration(operator));
            }
        });
    } else {
        if (lzm_userManagement.selectedGroup != '') {
            lzm_userManagement.loadedGroup.sig = lzm_commonTools.clone(tmpArray);
            group = lzm_commonTools.clone(lzm_userManagement.loadedGroup);
        } else {
            lzm_userManagement.newGroup.sig = tmpArray;
            group = lzm_commonTools.clone(lzm_userManagement.newGroup);
        }
        $('.umg-edit-placeholder-content').each(function() {
            if ($(this).data('hash') == 'signatures') {
                $(this).html(lzm_userManagement.createSignatureConfiguration(group));
            }
        });
    }
    lzm_layout.resizeAll();
};

var setSignatureAsDefault = function() {
    var signatureList = [], operator = null, group = null;
    if (lzm_userManagement.selectedListTab == 'user') {
        operator = lzm_commonTools.clone(lzm_userManagement.loadedUser);
        operator = (operator != null) ? operator : lzm_commonTools.clone(lzm_userManagement.newUser);
        signatureList = (operator != null && typeof operator.sig != 'undefined') ? operator.sig : [];
    } else {
        group = lzm_commonTools.clone(lzm_userManagement.loadedGroup);
        group = (group != null) ? group : lzm_commonTools.clone(lzm_userManagement.newGroup);
        signatureList = (group != null && typeof group.sig != 'undefined') ? group.sig : [];
    }
    for (var i=0; i<signatureList.length; i++) {
        if (i == lzm_userManagement.selectedSignatureNo) {
            signatureList[i].d = '1';
        } else {
            signatureList[i].d = '0';
        }
    }
    lzm_userManagement.selectedSignatureNo = -1;
    if (lzm_userManagement.selectedListTab == 'user') {
        if (lzm_userManagement.selectedUser != '') {
            lzm_userManagement.loadedUser.sig = lzm_commonTools.clone(signatureList);
            operator = lzm_commonTools.clone(lzm_userManagement.loadedUser);
        } else {
            lzm_userManagement.newUser.sig = signatureList;
            operator = lzm_commonTools.clone(lzm_userManagement.newUser);
        }
        $('.umg-edit-placeholder-content').each(function() {
            if ($(this).data('hash') == 'signatures') {
                $(this).html(lzm_userManagement.createSignatureConfiguration(operator));
            }
        });
    } else {
        if (lzm_userManagement.selectedGroup != '') {
            lzm_userManagement.loadedGroup.sig = lzm_commonTools.clone(signatureList);
            group = lzm_commonTools.clone(lzm_userManagement.loadedGroup);
        } else {
            lzm_userManagement.newGroup.sig = signatureList;
            group = lzm_commonTools.clone(lzm_userManagement.newGroup);
        }
        $('.umg-edit-placeholder-content').each(function() {
            if ($(this).data('hash') == 'signatures') {
                $(this).html(lzm_userManagement.createSignatureConfiguration(group));
            }
        });
    }
    lzm_layout.resizeAll();
};

var selectSignature = function(signatureNo) {
    lzm_userManagement.selectedSignatureNo = signatureNo;
    $('.sig-edit-btns').removeClass('ui-disabled');
    $('.signature-list-line').removeClass('selected-table-line');
    $('#signature-list-line-' + signatureNo).addClass('selected-table-line');
};

var showSignaturePlaceholderMenu = function(e) {
    e.stopPropagation();
    e.preventDefault();
    var scrolledDownY = $('#signature-inner-div').scrollTop();
    var scrolledDownX = $('#signature-inner-div').scrollLeft();
    var parentOffset = $('#signature-inner-div').offset();
    var xValue = e.pageX - parentOffset.left + scrolledDownX;
    var yValue = e.pageY - parentOffset.top + scrolledDownY;
    lzm_userManagement.showContextMenu('signature-inner-div', {}, xValue, yValue);
};

var removeSignaturePlaceholderMenu = function() {
    $('#signature-inner-div-context').remove();
};

var createTextEmails = function() {
    selectTextEmails(-1);
    var aw = ($('#tae-auto-send-wel').prop('checked')) ? 1 : 0;
    var edit = ($('#tae-wel-edit').prop('checked')) ? 1 : 0;
    lzm_userManagement.createTextEmailsInput(null, aw, edit);
};

var editTextEmails = function(textEmailsNo) {
    if (typeof textEmailsNo != 'undefined') {
        selectTextEmails(textEmailsNo);
    } else {
        textEmailsNo = lzm_userManagement.selectedTextEmailsNo;
    }
    var textEmails = null;
    if (lzm_userManagement.selectedListTab == 'user') {
        var operator = lzm_commonTools.clone(lzm_userManagement.loadedUser);
        operator = (operator != null) ? operator : lzm_commonTools.clone(lzm_userManagement.newUser);
        if (operator != null && typeof operator.pm != 'undefined' && operator.pm.length > textEmailsNo) {
            textEmails = operator.pm[textEmailsNo];
        }
    } else {
        var group = lzm_commonTools.clone(lzm_userManagement.loadedGroup);
        group = (group != null) ? group : lzm_commonTools.clone(lzm_userManagement.newGroup);
        if (group != null && typeof group.pm != 'undefined' && group.pm.length > textEmailsNo) {
            textEmails = group.pm[textEmailsNo];
        }
    }
    if (textEmails != null) {
        var aw = textEmails.aw;
        var edit = textEmails.edit;
        lzm_userManagement.createTextEmailsInput(textEmails, aw, edit);
    }
};

var removeTextEmails = function() {
    var textEmailsNo = lzm_userManagement.selectedTextEmailsNo;
    var textEmails = null, myPm = [];
    if (lzm_userManagement.selectedListTab == 'user') {
        var operator = lzm_commonTools.clone(lzm_userManagement.loadedUser);
        operator = (operator != null) ? operator : lzm_commonTools.clone(lzm_userManagement.newUser);
        if (operator != null && typeof operator.pm != 'undefined' && operator.pm.length > textEmailsNo) {
            myPm = lzm_commonTools.clone(operator.pm);
        }
    } else {
        var group = lzm_commonTools.clone(lzm_userManagement.loadedGroup);
        group = (group != null) ? group : lzm_commonTools.clone(lzm_userManagement.newGroup);
        if (group != null && typeof group.pm != 'undefined' && group.pm.length > textEmailsNo) {
            myPm = lzm_commonTools.clone(group.pm);
        }
    }
    myPm[textEmailsNo].deleted = true;

    if (lzm_userManagement.selectedListTab == 'user') {
        if (lzm_userManagement.selectedUser != '') {
            lzm_userManagement.loadedUser['pm'] = lzm_commonTools.clone(myPm);
            operator = lzm_commonTools.clone(lzm_userManagement.loadedUser);
        } else {
            lzm_userManagement.newUser.pm = lzm_commonTools.clone(myPm);
            operator = lzm_commonTools.clone(lzm_userManagement.newUser);
        }
        $('.umg-edit-placeholder-content').each(function() {
            if ($(this).data('hash') == 'text-and-emails') {
                $(this).html(lzm_userManagement.createTextAndEmailsConfiguration(operator));
            }
        });
    } else {
        if (lzm_userManagement.selectedGroup != '') {
            lzm_userManagement.loadedGroup['pm'] = lzm_commonTools.clone(myPm);
            group = lzm_commonTools.clone(lzm_userManagement.loadedGroup);
        } else {
            lzm_userManagement.newGroup.pm = lzm_commonTools.clone(myPm);
            group = lzm_commonTools.clone(lzm_userManagement.newGroup);
        }
        $('.umg-edit-placeholder-content').each(function() {
            if ($(this).data('hash') == 'text-and-emails') {
                $(this).html(lzm_userManagement.createTextAndEmailsConfiguration(group));
            }
        });
    }
    lzm_layout.resizeEditUserConfiguration();
};

var setTextEmailsAsDefault = function() {
    var textEmailsNo = lzm_userManagement.selectedTextEmailsNo;
    var textEmails = null, myPm = [], tmpPm = [];
    if (lzm_userManagement.selectedListTab == 'user') {
        var operator = lzm_commonTools.clone(lzm_userManagement.loadedUser);
        operator = (operator != null) ? operator : lzm_commonTools.clone(lzm_userManagement.newUser);
        if (operator != null && typeof operator.pm != 'undefined' && operator.pm.length > textEmailsNo) {
            myPm = lzm_commonTools.clone(operator.pm);
        }
    } else {
        var group = lzm_commonTools.clone(lzm_userManagement.loadedGroup);
        group = (group != null) ? group : lzm_commonTools.clone(lzm_userManagement.newGroup);
        if (group != null && typeof group.pm != 'undefined' && group.pm.length > textEmailsNo) {
            myPm = lzm_commonTools.clone(group.pm);
        }
    }
    for (var i=0; i<myPm.length; i++) {
        if (i == textEmailsNo) {
            myPm[i].def = '1';
        } else {
            myPm[i].def = '';
        }
    }

    if (lzm_userManagement.selectedListTab == 'user') {
        if (lzm_userManagement.selectedUser != '') {
            lzm_userManagement.loadedUser.pm = lzm_commonTools.clone(myPm);
            operator = lzm_commonTools.clone(lzm_userManagement.loadedUser);
        } else {
            lzm_userManagement.newUser.pm = lzm_commonTools.clone(myPm);
            operator = lzm_commonTools.clone(lzm_userManagement.newUser);
        }
        $('.umg-edit-placeholder-content').each(function() {
            if ($(this).data('hash') == 'text-and-emails') {
                $(this).html(lzm_userManagement.createTextAndEmailsConfiguration(operator));
            }
        });
    } else {
        if (lzm_userManagement.selectedGroup != '') {
            lzm_userManagement.loadedGroup.pm = lzm_commonTools.clone(myPm);
            group = lzm_commonTools.clone(lzm_userManagement.loadedGroup);
        } else {
            lzm_userManagement.newGroup.pm = lzm_commonTools.clone(myPm);
            group = lzm_commonTools.clone(lzm_userManagement.newGroup);
        }
        $('.umg-edit-placeholder-content').each(function() {
            if ($(this).data('hash') == 'text-and-emails') {
                $(this).html(lzm_userManagement.createTextAndEmailsConfiguration(group));
            }
        });
    }
    lzm_layout.resizeEditUserConfiguration();
};

var selectTextEmails = function(textEmailsNo) {
    lzm_userManagement.selectedTextEmailsNo = textEmailsNo;
    $('.text-emails-edit-btns').removeClass('ui-disabled');
    $('.text-emails-list-line').removeClass('selected-table-line');
    $('#text-emails-list-line-' + textEmailsNo).addClass('selected-table-line');
};

var showTextEmailsPlaceholderMenu = function(e, taIdPrefix, taId) {
    e.stopPropagation();
    e.preventDefault();
    var scrolledDownY = $('#text-emails-inner-div').scrollTop();
    var scrolledDownX = $('#text-emails-inner-div').scrollLeft();
    var parentOffset = $('#text-emails-inner-div').offset();
    var xValue = e.pageX - parentOffset.left + scrolledDownX;
    var yValue = e.pageY - parentOffset.top + scrolledDownY;
    lzm_userManagement.showContextMenu('text-emails-inner-div', {taIdPrefix: taIdPrefix, taId: taId}, xValue, yValue);
};

var removeTextEmailsPlaceholderMenu = function() {
    $('#text-emails-inner-div-context').remove();
};

var addPlaceholder = function(target, placeholder) {
    var cursorPos, v;
    if (target == 'signature') {
        cursorPos = $('#signature-text').prop('selectionStart');
        v = $('#signature-text').val();
    } else {
        cursorPos = $('#' + target).prop('selectionStart');
        v = $('#' + target).val();
    }
    var textBefore = v.substring(0,  cursorPos );
    var textAfter  = v.substring( cursorPos, v.length );
    if (target == 'signature') {
        $('#signature-text').val(textBefore + placeholder + textAfter);
        removeSignaturePlaceholderMenu();
    } else {
        $('#' + target).val(textBefore + placeholder + textAfter);
        removeTextEmailsPlaceholderMenu();
    }
};

var selectGroupTitle = function(titleLang) {

    lzm_userManagement.selectedGroupTitleLang = titleLang;
    if (titleLang != '') {
        $('.title-edit-btns').removeClass('ui-disabled');
    } else {
        $('.title-edit-btns').addClass('ui-disabled');
    }
    $('.group-title-line').removeClass('selected-table-line');
    $('#group-title-line-' + titleLang).addClass('selected-table-line');
};

var createGroupTitle = function() {
    selectGroupTitle('');
    var group = lzm_commonTools.clone(lzm_userManagement.loadedGroup), titles = {};
    if (group != null) {
        titles = lzm_commonTools.clone(group.humanReadableDescription);
    } else {
        titles = lzm_commonTools.clone(lzm_userManagement.newGroup.humanReadableDescription);
    }
    lzm_userManagement.createGroupTitleInput(titles, '');
};

var editGroupTitle = function(titleLang) {
    if (typeof titleLang != 'undefined') {
        selectGroupTitle(titleLang);
    } else  {
        titleLang = lzm_userManagement.selectedGroupTitleLang;
    }
    var group = lzm_commonTools.clone(lzm_userManagement.loadedGroup);
    group = (group != null) ? group : lzm_commonTools.clone(lzm_userManagement.newGroup);
    lzm_userManagement.createGroupTitleInput(lzm_commonTools.clone(group.humanReadableDescription), titleLang);
};

var removeGroupTitle = function() {
    var group = lzm_commonTools.clone(lzm_userManagement.loadedGroup), titleList = {};
    if (group != null) {
        titleList = lzm_commonTools.clone(group.humanReadableDescription);
        delete titleList[lzm_userManagement.selectedGroupTitleLang];
        lzm_userManagement.loadedGroup.humanReadableDescription = lzm_commonTools.clone(titleList);
        $('#group-title-table').html(lzm_userManagement.createGroupTitleList(titleList));
    } else {
        titleList = lzm_commonTools.clone(lzm_userManagement.newGroup.humanReadableDescription);
        delete titleList[lzm_userManagement.selectedGroupTitleLang];
        lzm_userManagement.newGroup.humanReadableDescription = lzm_commonTools.clone(titleList);
        $('#group-title-table').html(lzm_userManagement.createGroupTitleList(titleList));
    }
};

var selectSocialMedia = function(mediaNo) {
    lzm_userManagement.selectedSocialMediaNo = mediaNo;
    if (mediaNo != -1) {
        $('.smc-edit-btns').removeClass('ui-disabled');
    } else {
        $('.smc-edit-btns').addClass('ui-disabled');
    }
    $('.social-media-list-line').removeClass('selected-table-line');
    $('#social-media-list-line-' + mediaNo).addClass('selected-table-line');
};

var createSocialMedia = function() {
    selectSocialMedia(-1);
    lzm_userManagement.createSocialMediaChannel(null);
};

var editSocialMedia = function(mediaNo) {
    mediaNo = (typeof mediaNo != 'undefined') ? mediaNo : lzm_userManagement.selectedSocialMediaNo;
    selectSocialMedia(mediaNo);
    var smc = null;
    var group = lzm_commonTools.clone(lzm_userManagement.loadedGroup);

    group = (group != null) ? group : lzm_commonTools.clone(lzm_userManagement.newGroup);
    for (var i=0; i<group.f.length; i++) {
        if (group.f[i].key == 'c_smc') {
            smc = lzm_commonTools.clone(group.f[i].values[mediaNo]);
        }
    }
    if (smc != null) {
        lzm_userManagement.createSocialMediaChannel(smc);
    }
};

var createSmcAccessToken = function() {
    var type = $('#smc-type').val();
};

var removeSocialMedia = function() {
    var mediaNo = lzm_userManagement.selectedSocialMediaNo;
    selectSocialMedia(-1);
    var group = lzm_commonTools.clone(lzm_userManagement.loadedGroup);
    var myF = (group != null) ? lzm_commonTools.clone(group.f) : lzm_commonTools.clone(lzm_userManagement.newGroup.f);
    for (var i=0; i<myF.length; i++) {
        if (myF[i].key == 'c_smc') {
            var newF = lzm_commonTools.clone(myF[i].values);
            newF.splice(mediaNo, 1);
            myF[i].values = newF;
        }
    }
    if (group != null) {
        lzm_userManagement.loadedGroup.f = lzm_commonTools.clone(myF);
        group = lzm_commonTools.clone(lzm_userManagement.loadedGroup);
    } else {
        lzm_userManagement.newGroup.f = lzm_commonTools.clone(myF);
        group = lzm_commonTools.clone(lzm_userManagement.newGroup);
    }
    var socialMediaList = [];
    for (i=0; i<group.f.length; i++) {
        if (group.f[i].key == 'c_smc') {
            socialMediaList = lzm_commonTools.clone(group.f[i].values);
        }
    }
    $('#gr-tickets-placeholder-content-1').html(lzm_userManagement.createGroupTicketsSocialMediaTab(socialMediaList));
    lzm_layout.resizeEditUserConfiguration();
};

var selectOpeningHour = function(ohNo) {
    lzm_userManagement.selectedOpeningHoursNo = ohNo;
    if (ohNo != -1) {
        $('.oh-edit-btns').removeClass('ui-disabled');
    } else {
        $('.oh-edit-btns').addClass('ui-disabled');
    }
    $('.gr-oh-list-line').removeClass('selected-table-line');
    $('#gr-oh-list-line-' + ohNo).addClass('selected-table-line');
};

var createOpeningHour = function() {
    selectOpeningHour(-1);
    try {
    lzm_userManagement.createOpeningHours(null);
    } catch(e) {logit(e.stack);}
};

var clearOpeningHours = function() {
    selectOpeningHour(-1);
    var group = lzm_commonTools.clone(lzm_userManagement.loadedGroup);
    if (group != null) {
        lzm_userManagement.loadedGroup.ohs = [];
        group = lzm_commonTools.clone(lzm_userManagement.loadedGroup);
    } else {
        lzm_userManagement.newGroup.ohs = [];
        group = lzm_commonTools.clone(lzm_userManagement.newGroup);
    }
    $('.umg-edit-placeholder-content').each(function() {
        if ($(this).data('hash') == 'opening-hours') {
            $(this).html(lzm_userManagement.createGroupHoursConfiguration(group));
        }
    });
    lzm_layout.resizeEditUserConfiguration();
};

var removeOpeningHour = function() {
    var group = lzm_commonTools.clone(lzm_userManagement.loadedGroup), ohs = [];
    if (group != null) {
        ohs = lzm_commonTools.clone(group.ohs);
        ohs.splice(lzm_userManagement.selectedOpeningHoursNo, 1);
        ohs.sort(lzm_userManagement.sortOhs);
        lzm_userManagement.loadedGroup.ohs = lzm_commonTools.clone(ohs);
        group = lzm_commonTools.clone(lzm_userManagement.loadedGroup);
    } else {
        ohs = lzm_commonTools.clone(lzm_userManagement.newGroup.ohs);
        ohs.splice(lzm_userManagement.selectedOpeningHoursNo, 1);
        ohs.sort(lzm_userManagement.sortOhs);
        lzm_userManagement.newGroup.ohs = lzm_commonTools.clone(ohs);
        group = lzm_commonTools.clone(lzm_userManagement.newGroup);
    }
    selectOpeningHour(-1);
    $('.umg-edit-placeholder-content').each(function() {
        if ($(this).data('hash') == 'opening-hours') {
            $(this).html(lzm_userManagement.createGroupHoursConfiguration(group));
        }
    });
    lzm_layout.resizeEditUserConfiguration();
};

var handleContextMenuClick = function(e) {
    e.stopPropagation();
};
