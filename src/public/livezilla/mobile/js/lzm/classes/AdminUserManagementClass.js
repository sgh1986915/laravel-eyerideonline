function AdminUserManagementClass() {
    this.operators = new LzmOperators();
    this.groups = new LzmGroups();
    this.inputList = new LzmCustomInputs();
    this.defaultLanguage = 'en';
    this.availableLanguages = {};
    this.permissions = {};

    this.selectedUser = '';
    this.selectedGroup = '';
    this.selectedListTab = 'user';
    this.editType = '';

    this.newGroup = this.createEmptyGroup();
    this.newUser = this.createEmptyUser();
    this.loadedUser = null;
    this.loadedGroup = null;
    this.newOpPerms = '11212021010002101111011111111111110111110110110';
    this.newBotPic = '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';
    this.newOpPic = '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';
    this.newPm = [{
        et:'Hi %external_name%,\r\n\r\nThank you for getting in touch with us. \r\n\r\nWe have received your message and will be responding to your enquiry as soon as possible.\r\n\r\n-------------------------------------------------------------\r\nDate: %localdate%\r\n-------------------------------------------------------------\r\nName: %external_name%\r\nEmail: %external_email%\r\nGroup: %group_description%\r\n-------------------------------------------------------------\r\n%mailtext%\r\n\r\n%ticket_hash%',
        etr:'%mailtext%\r\n\r\n-------------------------------------------------------------\r\nPrevious Message:\r\n\r\n%quote%\r\n-------------------------------------------------------------\r\n\r\nWould you like to give feedback?\r\n%feedback_link%',
        ect:'Hi %external_name%,\r\n\r\nThank you for chatting with us. Please find your chat transcript below.\r\n\r\n%website_name% / %group_description%\r\n\r\nDate: %localdate%\r\n-------------------------------------------------------------\r\nName: %external_name%\r\nEmail: %external_email%\r\n\r\nChat reference number: %chat_id%\r\n-------------------------------------------------------------\r\n%transcript%\r\n-------------------------------------------------------------\r\n\r\nWould you like to give feedback?\r\n%feedback_link%',
        ti:'',
        ci:'',
        st:'%ticket_hash% %website_name% - Your message',
        str:'%ticket_hash% %website_name% - Your message',
        sct:'%website_name% - Chat Transcript',
        ccmbi:'',
        lang:'EN',
        invm:'Hello, my name is %operator_name%.<br><br>Do you need help?<br><br>Start Live-Chat now to get assistance.',
        inva:'Hello, my name is %operator_name%.<br><br>Do you need help?<br><br>Start Live-Chat now to get assistance.',
        wel:'Hello %external_name%, my name is %operator_name%, how may I help you?',
        welcmb:'Hello, my name is %operator_name%. Please expect my telephone call in the next few seconds. During our telephone conversation, feel free to pass me information and files through this chat.',
        wpa:'Website Operator %operator_name% would like to redirect you to this URL:\r\n\r\n%target_url%',
        wpm:'Website Operator %operator_name% would like to redirect you to this URL:\r\n\r\n%target_url%',
        bi:'1',
        def:'1',
        aw:'1',
        edit:'1',
        qm:'',
        qmt:'120',
        hct:'',
        ht:'',
        htr:'',
        shortlang:'EN'
    },{
        'et':'Guten Tag %external_name%,\r\n\r\nvielen Dank für Ihre Anfrage. \r\n\r\nWir haben Ihre Nachricht erhalten und werden uns in Kürze mit Ihnen in Verbindung setzen.\r\n\r\n-------------------------------------------------------------\r\nDatum: %localdate%\r\n-------------------------------------------------------------\r\nName: %external_name%\r\nE-Mail: %external_email%\r\nGruppe: %group_description%\r\n-------------------------------------------------------------\r\n%mailtext%\r\n\r\n%ticket_hash%',
        'etr':'%mailtext%\r\n\r\n-------------------------------------------------------------\r\nVorherige Nachricht:\r\n\r\n%quote%\r\n-------------------------------------------------------------\r\n\r\nSind Sie zufrieden? Bewerten Sie uns:\r\n%feedback_link%',
        'ect':'Guten Tag %external_name%,\r\n\r\nvielen Dank für unser Gespräch per Chat. Eine Mitschrift erhalten Sie mit dieser E-Mail.\r\n\r\n%website_name% / %group_description%\r\n\r\nDatum: %localdate%\r\n-------------------------------------------------------------\r\nName: %external_name%\r\nE-Mail: %external_email%\r\n\r\nChat Referenz-Code: %chat_id%\r\n-------------------------------------------------------------\r\n%transcript%\r\n-------------------------------------------------------------\r\n\r\nSind Sie zufrieden? Bewerten Sie uns:\r\n%feedback_link%',
        'ti':'',
        'ci':'',
        'st':'%ticket_hash% %website_name% - Ihre Nachricht',
        'str':'%ticket_hash% %website_name% - Ihre Nachricht',
        'sct':'%website_name% - Mitschrift Ihres Chats',
        'ccmbi':'',
        'lang':'DE',
        'invm':'Guten Tag, mein Name ist %operator_name%. Benötigen Sie Hilfe? Gerne berate ich Sie in einem Live-Chat.',
        'inva':'Guten Tag, mein Name ist %operator_name%. Benötigen Sie Hilfe? Gerne berate ich Sie in einem Live-Chat.',
        'wel':'Guten Tag %external_name%, mein Name ist %operator_name%. Wie kann ich Ihnen helfen?',
        'welcmb':'Guten Tag, meine Name ist %operator_name%. Sie werden in den nächsten Sekunden einen Anruf von mir erhalten. Während unseres Telefonats können Sie mir bei Bedarf Informationen und Dateien auch über diesen Chat zukommen lassen.',
        'wpa':'Ein Betreuer dieser Webseite (%operator_name%) möchte Sie auf einen anderen Bereich weiterleiten:\r\n\r\n%target_url%',
        'wpm':'Ein Betreuer dieser Webseite (%operator_name%) möchte Sie auf einen anderen Bereich weiterleiten:\r\n\r\n%target_url%',
        'bi':'1',
        'def':'',
        'aw':'1',
        'edit':'1',
        'qm':'',
        'qmt':'120',
        'hct':'',
        'ht':'',
        'htr':'',
        'shortlang':'DE'
    }];

    this.selectedSignatureNo = -1;
    this.selectedTextEmailsNo = -1;
    this.selectedGroupTitleLang = '';
    this.selectedSocialMediaNo = -1;
    this.selectedOpeningHoursNo = -1;

    this.contextMenuIsVisible = false;
    this.createButtonMenuIsVisible = false;

    this.dialogTitle = '';

    this.storedSuperMenu = null;
}

AdminUserManagementClass.prototype.createListView = function(uid, gid, tab) {
    var that = this;
    var tabNo = (tab == 'user') ? 0 : 1;
    that.selectedListTab = tab;
    that.selectedUser = uid;
    that.selectedGroup = gid;
    var disabledClass = ((tab == 'user' && that.selectedUser != '') || (tab == 'group' && that.selectedGroup != '')) ? '' : 'ui-disabled';
    var panelHtml = lzm_inputControls.createButton('umg-new-btn', '', 'showCreateButtonMenu(event)', t('New'), '<i class="fa fa-plus"></i>', 'lr', {}, t('Create new operator'), 'a') +
        lzm_inputControls.createButton('umg-edit-btn', disabledClass, 'editListObject(null)', t('Edit'), '<i class="fa fa-edit"></i>', 'lr', {'margin-left': '10px'}, t('Edit the selected operator'), 'a') +
        lzm_inputControls.createButton('umg-rm-btn', disabledClass, 'removeListObject(null)', t('Remove'), '<i class="fa fa-remove"></i>', 'lr', {'margin-left': '10px'}, t('Remove the selected operator'), 'a');
    $('#umg-control-panel').html(panelHtml);
    var tabList = [
        {name: t('Operators'), content: that.createOperatorList()},
        {name: t('Groups'), content: that.createGroupList()}
    ];
    lzm_inputControls.createTabControl('umg-list-placeholder', tabList, tabNo, 0 , 'b');
    lzm_layout.resizeUserManagement();

    $('#umg-list-placeholder-tab-0').click(function() {
        removeUmgContextMenu();
        if (that.selectedUser == '') {
            $('#umg-edit-btn').addClass('ui-disabled');
            $('#umg-rm-btn').addClass('ui-disabled');
        } else {
            $('#umg-edit-btn').removeClass('ui-disabled');
            $('#umg-rm-btn').removeClass('ui-disabled');
        }
        that.selectedListTab = 'user';
    });
    $('#umg-list-placeholder-tab-1').click(function() {
        removeUmgContextMenu();
        if (that.selectedGroup == '') {
            $('#umg-edit-btn').addClass('ui-disabled');
            $('#umg-rm-btn').addClass('ui-disabled');
        } else {
            $('#umg-edit-btn').removeClass('ui-disabled');
            $('#umg-rm-btn').removeClass('ui-disabled');
        }
        that.selectedListTab = 'group';
    });
};

AdminUserManagementClass.prototype.createOperatorList = function() {
    var that = this;
    var operators = this.operators.getOperatorList('userid', '', true);
    var opListHtml = '<fieldset id="operator-list-fieldset" class="lzm-fieldset">' +
        '<legend>' + t('Operators') + '</legend>' +
        '<table class="visitor-list-table alternating-rows-table lzm-unselectable" id="operator-list" style="width: 100%;">' +
        '<thead><tr>' +
        '<th>' + t('Username') + '</th>' +
        '<th>' + t('Fullname') + '</th>' +
        '<th>' + t('Groups') + '</th>' +
        '<th>' + t('Type') + '</th>' +
        '<th>' + t('Description') + '</th>' +
        '</tr></thead><tbody>';
    for (var i=0; i<operators.length; i++) {
        var opType = (operators[i].level == 1) ? t('Administrator') : t('User');
        var opDescription = (operators[i].desc.length > 50) ? operators[i].desc.substr(0, 47) + '...' : operators[i].desc;
        var selectedLineClass = (that.selectedUser == operators[i].id) ? ' selected-table-line' : '';
        var opGroups = [];
        var groups = that.groups.getGroupList('', false, false);
        for (var j=0; j<groups.length; j++) {
            if ($.inArray(groups[j].id, operators[i].groups) != -1) {
                opGroups.push(groups[j].id);
            }
        }
        opListHtml += '<tr class="operator-list-line lzm-unselectable' + selectedLineClass + '" id="operator-list-line-' + operators[i].id + '"' +
            ' onclick="selectTableLine(\'' + operators[i].id + '\');" ondblclick="editListObject(\'' + operators[i].id + '\');"' +
            ' oncontextmenu="showUmgContextMenu(\'' + operators[i].id + '\', event);">' +
            '<td>' + operators[i].userid + '</td>' +
            '<td>' + operators[i].name + '</td>' +
            '<td>' + opGroups.join(', ') + '</td>' +
            '<td>' + opType + '</td>' +
            '<td>' + opDescription + '</td>' +
            '</tr>';
    }
    opListHtml += '</tbody></table></fieldset>';

    return opListHtml
};

AdminUserManagementClass.prototype.createGroupList = function() {
    var that = this;
    var operators = this.operators.getOperatorList('', '', true);
    var grMemberCount = {}, i = 0;
    for (i=0; i<operators.length; i++) {
        for (var j=0; j<operators[i].groups.length; j++) {
            if (typeof grMemberCount[operators[i].groups[j]] == 'undefined') {
                grMemberCount[operators[i].groups[j]] = 1;
            } else {
                grMemberCount[operators[i].groups[j]] += 1;
            }
        }
    }
    var groups = this.groups.getGroupList('id', true, false);
    var grListHtml = '<fieldset id="group-list-fieldset" class="lzm-fieldset">' +
        '<legend>' + t('Groups') + '</legend>' +
        '<table class="visitor-list-table alternating-rows-table lzm-unselectable" id="operator-list" style="width: 100%;">' +
        '<thead><tr>' +
        '<th>' + t('Group Name') + '</th>' +
        '<th>' + t('Members') + '</th>' +
        '<th>' + t('Default') + '</th>' +
        '<th>' + t('Email') + '</th>' +
        '<th>' + t('Description') + '</th>' +
        '</tr></thead><tbody>';
    for (i=0; i<groups.length; i++) {
        var members = (typeof grMemberCount[groups[i].id] != 'undefined') ? grMemberCount[groups[i].id] : 0;
        var isDefault = (groups[i].standard == 1) ? t('Yes') : t('No');
        var description = '';
        for (var lang in groups[i].humanReadableDescription) {
            if (groups[i].humanReadableDescription.hasOwnProperty(lang)) {
                description += '[' + lang.toUpperCase() + '] => ' + groups[i].humanReadableDescription[lang] + ', ';
            }
        }
        description = description.replace(/, $/, '');
        description = (description.length > 50) ? description.substr(0, 47) + '...' : description;
        var selectedLineClass = (that.selectedGroup == groups[i].id) ? ' selected-table-line' : '';
        grListHtml += '<tr class="group-list-line lzm-unselectable' + selectedLineClass + '" id="group-list-line-' + groups[i].id + '"' +
            ' onclick="selectTableLine(\'' + groups[i].id + '\');" ondblclick="editListObject(\'' + groups[i].id + '\');"' +
            ' oncontextmenu="showUmgContextMenu(\'' + groups[i].id + '\', event);">' +
            '<td>' + groups[i].id + '</td>' +
            '<td>' + members + '</td>' +
            '<td>' + isDefault + '</td>' +
            '<td>' + groups[i].email + '</td>' +
            '<td>' + description + '</td>' +
            '</tr>';
    }
    grListHtml += '</tbody></table></fieldset>';

    return grListHtml;
};

/********** Create / Edit configurations **********/
AdminUserManagementClass.prototype.createBotConfiguration = function(bot) {
    var that = this, oldTitle = ''; // Huhu
    window.parent.lzm_chatDisplay.settingsDisplay.userManagementAction = 'bot';
    that.editType = 'bot';
    $('.umg-views').css({display: 'none'});
    $('#umg-edit-view').css({'display': 'block'});
    if (bot == null) {
        oldTitle = window.parent.setUserManagementTitle(t('New Operator'));
    } else {
        oldTitle = window.parent.setUserManagementTitle(bot.name);
    }
    if (window.parent.lzm_chatDisplay.settingsDisplay.userManagementDialogTitle == '') {
        window.parent.lzm_chatDisplay.settingsDisplay.userManagementDialogTitle = oldTitle;
    }
    if (bot != null) {
        that.loadedUser = lzm_commonTools.clone(bot);
    }

    var tabList = [
        {name: t('Account'), content: that.createAccountConfiguration(bot, 'bot'), hash: 'account'},
        {name: t('Picture'), content: that.createPictureConfiguration(bot), hash: 'picture'},
        {name: t('Bot Mode'), content: that.createBotModeConfiguration(bot), hash: 'bot-mode'}
    ];
    lzm_inputControls.createTabControl('umg-edit-placeholder', tabList, 0, 0 , 'b');
    that.fillCanvasAndResize();
    lzm_layout.resizeEditUserConfiguration();

    $('#operator-pic-icon').click(function() {
        $('#operator-pic').val('');
        $('#operator-pic-b64').val('DEFAULT');
        that.fillCanvasAndResize();
    });

    $('.bot-mode-radio').change(function() {
        if ($('#operator-bot-mode-wmm').prop('checked')) {
            $('#wmm-subconfig').removeClass('ui-disabled');
            $('#om-explanation').addClass('ui-disabled');
        } else {
            $('#wmm-subconfig').addClass('ui-disabled');
            $('#om-explanation').removeClass('ui-disabled');
        }
    });
    $('#wmm-fwd-after').change(function() {
        $('#wmm-fwd-after-inner-text').html($("#wmm-fwd-after option:selected").text());
    });
    $('#operator-pic').change(function(e) {
        var input = e.target;

        var reader = new FileReader();
        reader.onload = function(){
            var dataURL = reader.result;
            $('#operator-pic-b64').val(dataURL);
            that.fillCanvasAndResize();
        };
        reader.readAsDataURL(input.files[0]);
    });
    $('#operator-pic-img').click(function() {
        $('#operator-pic').click();
    });
};

AdminUserManagementClass.prototype.createOperatorConfiguration = function(operator) {
    var that = this, oldTitle = '';
    window.parent.lzm_chatDisplay.settingsDisplay.userManagementAction = 'operator';
    that.editType = 'operator';
    $('.umg-views').css({display: 'none'});
    $('#umg-edit-view').css({'display': 'block'});
    if (operator == null || typeof operator.is_copy != 'undefined') {
        oldTitle = window.parent.setUserManagementTitle(t('New Operator'));
        if (operator == null) {
            that.permissions = lzm_commonPermissions.getUserPermissions(false, '', that.newOpPerms);
        } else {
            that.permissions = lzm_commonPermissions.getUserPermissions(false, '', operator.perms);
        }
    } else {
        oldTitle = window.parent.setUserManagementTitle(operator.name);
        that.permissions = lzm_commonPermissions.getUserPermissions(false, '', operator.perms);
    }
    if (window.parent.lzm_chatDisplay.settingsDisplay.userManagementDialogTitle == '') {
        window.parent.lzm_chatDisplay.settingsDisplay.userManagementDialogTitle = oldTitle;
    }
    if (operator != null) {
        that.loadedUser = lzm_commonTools.clone(operator);
    }

    var permissionSelectLists = {
        chats: {general: [
            {value: '2', text: t('Operator can see all chats')},
            {value: '1', text: t('Operator can see chats of his group')},
            {value: '0', text: t('Operator can see his own chats')}
        ]}, tickets: {general: [
            {value: '2', text: t('Operator can see and review all tickets')},
            {value: '1', text: t('Operator can see and review tickets addressed to one of his groups')},
            {value: '0', text: t('Operator can\'t see or review any tickets')}
        ]}, ratings: {general: [
            {value: '2', text: t('Operator can see all ratings')},
            {value: '1', text: t('Operator can see ratings referring to him')},
            {value: '0', text: t('Operator can\'t see any ratings')}
        ]}, profiles: {general: [
            {value: '2', text: t('Operator can edit all profiles and visitcards')},
            {value: '1', text: t('Operator can edit his own profile / visitcard')},
            {value: '0', text: t('Operator can\'t edit profiles / visitcards')}
        ]}, resources: {general: [
            {value: '2', text: t('Operator can see and edit all public resources')},
            {value: '1', text: t('Operator can see all and edit his own public resources')},
            {value: '0', text: t('Operator can\'t create, see or edit public resources')}
        ]}, events: {general: [
            {value: '2', text: t('Operator can edit all events')},
            {value: '1', text: t('Operator can edit his own events')},
            {value: '0', text: t('Operator can\'t edit events')}
        ]}, reports: {general: [
            {value: '2', text: t('Operator can download and update (incl. recalculation) reports')},
            {value: '1', text: t('Operator can download reports')},
            {value: '0', text: t('Operator can\'t download reports')}
        ]}, archives: {external: [
            {value: '2', text: t('Operator can see all archived chats')},
            {value: '1', text: t('Operator can see archived chats of his groups')},
            {value: '0', text: t('Operator can only see his own archived chats')}
        ], internal: [
            {value: '2', text: t('Operator can see archived chats of all operators and groups')},
            {value: '1', text: t('Operator can only see his own archived chats')}
        ]}, monitoring: {general: [
            {value: '2', text: t('Operator can see all visitors on website')},
            {value: '1', text: t('Operator can see visitors he is chatting with')}
        ]}, groups: {general: [
            {value: '2', text: t('Operator can perform actions on all Dynamic Groups')},
            {value: '1', text: t('Operator can perform actions on his own Dynamic Groups')},
            {value: '0', text: t('Operator can\'t perform actions on any Dynamic Groups')}
        ]}, replies: {general: [
            {value: '2', text: t('Operator can configure auto replies of all operators/bots/groups')},
            {value: '1', text: t('Operator can configure auto replies of his groups and of all operators/bots within his groups')},
            {value: '0', text: t('Operator can\'t configure auto replies')}
        ]}
    };
    var permissionContents = that.createOperatorPermissionsConfiguration(operator, permissionSelectLists);
    var tabList = [
        {name: t('Account'), content: that.createAccountConfiguration(operator, 'operator'), hash: 'account'},
        {name: t('Chats'), content: that.createOperatorChatsConfiguration(operator), hash: 'chats'},
        {name: t('Permissions'), content: permissionContents.html, hash: 'permissions'},
        /*{name: t('Text and Emails'), content: that.createTextAndEmailsConfiguration(operator), hash: 'text-and-emails'},*/
        {name: t('Security'), content: that.createOperatorSecurityConfiguration(operator), hash: 'security'},
        {name: t('Picture'), content: that.createPictureConfiguration(operator), hash: 'picture'},
        {name: t('Signatures'), content: that.createSignatureConfiguration(operator), hash: 'signatures'},
        {name: t('Mobile Account'), content: that.createOperatorMobileAccountConfiguration(operator), hash: 'mobile-account'}
    ];
    lzm_inputControls.createTabControl('umg-edit-placeholder', tabList, 0, 0 , 'b');

    lzm_inputControls.createTabControl('permissions-placeholder', permissionContents.tabs, 0, $('#umg-edit-view').width() - 44, 'b');
    that.fillCanvasAndResize();
    lzm_layout.resizeEditUserConfiguration();

    $('#operator-pic-icon').click(function() {
        $('#operator-pic').val('');
        $('#operator-pic-b64').val('DEFAULT');
        that.fillCanvasAndResize();
    });

    $('#operator-limit-chats').change(function() {
       if ($('#operator-limit-chats').prop('checked')) {
           $('#op-limit-chats-subconfig').removeClass('ui-disabled');
       } else {
           $('#op-limit-chats-subconfig').addClass('ui-disabled');
       }
    });
    $('#op-limit-action').change(function() {
        $('#op-limit-action-inner-text').html($("#op-limit-action option:selected").text());
    });
    $('#operator-chat-number').change(function() {
        var chatLimit =  parseInt($('#operator-chat-number').val());
        if (isNaN(chatLimit) || chatLimit <= 0) {
            chatLimit = 1;
        } else if (chatLimit >= 9) {
            chatLimit = 9;
        }

        $('#operator-chat-number').val(chatLimit.toString());
    });
    $('#operator-account-is-mobile').change(function() {
        if ($('#operator-account-is-mobile').prop('checked')) {
            $('#mobile-account-subconfig').removeClass('ui-disabled');
        } else {
            $('#mobile-account-subconfig').addClass('ui-disabled');
        }
    });
    $('#operator-lng').change(function() {
        $('#operator-lng-inner-text').html($("#operator-lng option:selected").text());
    });
    lzm_inputControls.createSelectChangeHandler('permtab-chats-select-general', permissionSelectLists.chats.general);
    lzm_inputControls.createSelectChangeHandler('permtab-tickets-select-general', permissionSelectLists.tickets.general);
    lzm_inputControls.createSelectChangeHandler('permtab-ratings-select-general', permissionSelectLists.ratings.general);
    lzm_inputControls.createSelectChangeHandler('permtab-profiles-select-general', permissionSelectLists.profiles.general);
    lzm_inputControls.createSelectChangeHandler('permtab-resources-select-general', permissionSelectLists.resources.general);
    lzm_inputControls.createSelectChangeHandler('permtab-events-select-general', permissionSelectLists.events.general);
    lzm_inputControls.createSelectChangeHandler('permtab-reports-select-general', permissionSelectLists.reports.general);
    lzm_inputControls.createSelectChangeHandler('permtab-archives-select-external', permissionSelectLists.archives.external);
    lzm_inputControls.createSelectChangeHandler('permtab-archives-select-internal', permissionSelectLists.archives.internal);
    lzm_inputControls.createSelectChangeHandler('permtab-monitoring-select-general', permissionSelectLists.monitoring.general);
    lzm_inputControls.createSelectChangeHandler('permtab-groups-select-general', permissionSelectLists.groups.general);
    lzm_inputControls.createSelectChangeHandler('permtab-replies-select-general', permissionSelectLists.replies.general);
    $('#operator-pic-img').click(function() {
        $('#operator-pic').click();
    });

    $('#permtab-chats-checkbox-join').change(function() {
        if ($('#permtab-chats-checkbox-join').prop('checked')) {
            $('#permtab-chats-checkbox-join-invisible').parent().removeClass('ui-disabled');
            $('#permtab-chats-checkbox-join-after-invitation').parent().removeClass('ui-disabled');
        } else {
            $('#permtab-chats-checkbox-join-invisible').parent().addClass('ui-disabled');
            $('#permtab-chats-checkbox-join-invisible').prop('checked', false);
            $('#permtab-chats-checkbox-join-after-invitation').parent().addClass('ui-disabled');
            $('#permtab-chats-checkbox-join-after-invitation').prop('checked', false);
        }
    });
    $('#permtab-chats-checkbox-join-invisible').change(function() {
        if ($('#permtab-chats-checkbox-join-invisible').prop('checked')) {
            $('#permtab-chats-checkbox-join-after-invitation').prop('checked', false);
        }
    });
    $('#permtab-chats-checkbox-join-after-invitation').change(function() {
        if ($('#permtab-chats-checkbox-join-after-invitation').prop('checked')) {
            $('#permtab-chats-checkbox-join-invisible').prop('checked', false);
        }
    });
    $('#permtab-chats-checkbox-cancel-invites').change(function() {
        if ($('#permtab-chats-checkbox-cancel-invites').prop('checked')) {
            $('#permtab-chats-checkbox-cancel-invites-others').parent().removeClass('ui-disabled');
        } else {
            $('#permtab-chats-checkbox-cancel-invites-others').parent().addClass('ui-disabled');
            $('#permtab-chats-checkbox-cancel-invites-others').prop('checked', false);
        }
    });
    $('#permtab-chats-checkbox-can-auto-accept').change(function() {
        if ($('#permtab-chats-checkbox-can-auto-accept').prop('checked')) {
            $('#permtab-chats-checkbox-must-auto-accept').parent().removeClass('ui-disabled');
        } else {
            $('#permtab-chats-checkbox-must-auto-accept').parent().addClass('ui-disabled');
            $('#permtab-chats-checkbox-must-auto-accept').prop('checked', false);
        }
    });
    $('#permtab-tickets-checkbox-review-emails').change(function() {
        if ($('#permtab-tickets-checkbox-review-emails').prop('checked')) {
            $('#permtab-tickets-checkbox-delete-emails').parent().removeClass('ui-disabled');
        } else {
            $('#permtab-tickets-checkbox-delete-emails').parent().addClass('ui-disabled');
            $('#permtab-tickets-checkbox-delete-emails').prop('checked', false);
        }
    });
    $('#permtab-tickets-checkbox-change-status').change(function() {
        if ($('#permtab-tickets-checkbox-change-status').prop('checked')) {
            $('#permtab-tickets-checkbox-status-open').parent().removeClass('ui-disabled');
            $('#permtab-tickets-checkbox-status-progress').parent().removeClass('ui-disabled');
            $('#permtab-tickets-checkbox-status-deleted').parent().removeClass('ui-disabled');
            $('#permtab-tickets-checkbox-status-closed').parent().removeClass('ui-disabled');
        } else {
            $('#permtab-tickets-checkbox-status-open').parent().addClass('ui-disabled');
            $('#permtab-tickets-checkbox-status-open').prop('checked', false);
            $('#permtab-tickets-checkbox-status-progress').parent().addClass('ui-disabled');
            $('#permtab-tickets-checkbox-status-progress').prop('checked', false);
            $('#permtab-tickets-checkbox-status-deleted').parent().addClass('ui-disabled');
            $('#permtab-tickets-checkbox-status-deleted').prop('checked', false);
            $('#permtab-tickets-checkbox-status-closed').parent().addClass('ui-disabled');
            $('#permtab-tickets-checkbox-status-closed').prop('checked', false);
        }
    });
    $('#permtab-files-can-upload').change(function() {
        if ($('#permtab-files-can-upload').prop('checked')) {
            $('#permtab-files-size-container').removeClass('ui-disabled');
        } else {
            $('#permtab-files-size-container').addClass('ui-disabled');
            $('#permtab-files-size').val('0');
        }
    });
    $('#operator-pic').change(function(e) {
        var input = e.target;

        var reader = new FileReader();
        reader.onload = function(){
            var dataURL = reader.result;
            $('#operator-pic-b64').val(dataURL);
            that.fillCanvasAndResize();
        };
        reader.readAsDataURL(input.files[0]);
    });
};

AdminUserManagementClass.prototype.fillCanvasAndResize = function() {
    var c = $('#operator-pic-canvas')[0], ctx = c.getContext("2d"), imgData = '';
    var img = new Image();
    img.onload = function () {
        try {
            ctx.clearRect (0 , 0 , 80, 60);
            ctx.drawImage(this, 0, 0, 80, 60);
            ctx.drawImage(c,0,0,80,60,0,0,80,60);
            imgData = c.toDataURL();
            $('#operator-pic-img').attr('src', imgData);
            imgData = (b64ImageValue == 'DEFAULT') ? b64ImageValue : imgData;
            $('#operator-pic-b64').val(imgData);
        } catch(ex) {}
    };
    var b64ImageValue = $('#operator-pic-b64').val(), picSrc;
    if (b64ImageValue == 'DEFAULT') {
        picSrc = '../images/avatar.png';
    } else {
        picSrc = b64ImageValue;
    }
    img.src = picSrc;
};

AdminUserManagementClass.prototype.createGroupConfiguration = function(group) {
    var that = this, oldTitle = '';
    window.parent.lzm_chatDisplay.settingsDisplay.userManagementAction = 'group';
    that.editType = 'group';
    $('.umg-views').css({display: 'none'});
    $('#umg-edit-view').css({'display': 'block'});
    if (group == null) {
        oldTitle = window.parent.setUserManagementTitle(t('New Group'));
    } else {
        oldTitle = window.parent.setUserManagementTitle(group.name + ' (' + group.id + ')');
    }
    if (window.parent.lzm_chatDisplay.settingsDisplay.userManagementDialogTitle == '') {
        window.parent.lzm_chatDisplay.settingsDisplay.userManagementDialogTitle = oldTitle;
    }
    if (group != null) {
        that.loadedGroup = lzm_commonTools.clone(group);
    }

    var inputFieldsConfData = that.createGroupInputFieldConfiguration(group);
    var ticketsConfData = that.createGroupTicketsConfiguration(group);
    var tabList = [
        {name: t('Details'), content: that.createGroupDetailsConfiguration(group), hash: 'details'},
        {name: t('Chats'), content: that.createGroupChatsConfiguration(group), hash: 'chats'},
        /*{name: t('Filters'), content: '', hash: 'filters'},*/
        {name: t('Text and Emails'), content: that.createTextAndEmailsConfiguration(group), hash: 'text-and-emails'},
        {name: t('Input Fields'), content: inputFieldsConfData.html, hash: 'input-fields'},
        {name: t('Tickets'), content: ticketsConfData.html, hash: 'tickets'},
        /*{name: t('Chat Functions'), content: '', hash: 'chat-functions'},*/
        {name: t('Opening Hours'), content: that.createGroupHoursConfiguration(group), hash: 'opening-hours'},
        {name: t('Signatures'), content: that.createSignatureConfiguration(group), hash: 'signatures'}
    ];
    lzm_inputControls.createTabControl('umg-edit-placeholder', tabList, 0, 0, 'b');
    lzm_inputControls.createTabControl('gr-input-fields-placeholder', inputFieldsConfData.tabs, 0, $(window).width() - 145, 'b');
    lzm_inputControls.createTabControl('gr-tickets-placeholder', ticketsConfData.tabs, 0, $(window).width() - 145, 'b');


    $('#gr-limit-chat-amount').change(function() {
        if ($('#gr-limit-chat-amount').prop('checked')) {
            $('#gr-limit-amount-inner').removeClass('ui-disabled');
        } else {
            $('#gr-limit-amount-inner').addClass('ui-disabled');
        }

    });
    $('#gr-limit-action').change(function() {
        $('#gr-limit-action-inner-text').html($('#gr-limit-action option:selected').text());
    });
    $('#gr-limit-amount-to').change(function() {
        var chatLimit =  parseInt($('#gr-limit-amount-to').val());
        if (isNaN(chatLimit) || chatLimit <= 0) {
            chatLimit = 1;
        } else if (chatLimit >= 9) {
            chatLimit = 9;
        }

        $('#gr-limit-amount-to').val(chatLimit.toString());
    });
    $('.operator-priority-input').change(function() {
        var thisOpPrio = parseInt($(this).val());
        if (isNaN(thisOpPrio) || thisOpPrio < 1) {
            thisOpPrio = 1;
        } else if (thisOpPrio > 10) {
            thisOpPrio = 10;
        }
        $(this).val(thisOpPrio);
    });
    $('.gr-input-field-select').find('select.lzm-select-select-a').change(function() {
        var myId = $(this).attr('id');
        var myText = $(this).children('option:selected').text();
        $('#' + myId + '-inner-text').html(myText);
    });
    $('.gr-ticket-assign-select').find('select.lzm-select-select-a').change(function() {
        var myId = $(this).attr('id');
        var myText = $(this).children('option:selected').text();
        $('#' + myId + '-inner-text').html(myText);
    });
    $('#gr-ticket-auto-assign').change(function() {
        if ($('#gr-ticket-auto-assign').prop('checked')) {
            $('#gr-ticket-assign-list-div').removeClass('ui-disabled');
        } else {
            $('#gr-ticket-assign-list-div').addClass('ui-disabled');
        }
    });
    $('#gr-ticket-in-action').change(function() {
        $('#gr-ticket-in-action-inner-text').html($('#gr-ticket-in-action option:selected').text());
    });
    $('#gr-transcript-email').change(function() {
        $('#gr-transcript-email-inner-text').html($('#gr-transcript-email option:selected').text());
    });
    $('#gr-tickets-out-mb').change(function() {
        $('#gr-tickets-out-mb-inner-text').html($('#gr-tickets-out-mb option:selected').text());
    });
    $('#tae-auto-send-wel').change(function() {
        if ($('#tae-auto-send-wel').prop('checked')) {
            $('#tae-wel-edit').parent().removeClass('ui-disabled');
        } else {
            $('#tae-wel-edit').parent().addClass('ui-disabled');
            $('#tae-wel-edit').prop('checked', false);
        }
    });

    lzm_layout.resizeEditUserConfiguration();
};

AdminUserManagementClass.prototype.hideEditDialog = function() {
    $('.umg-views').css({display: 'none'});
    $('#umg-list-view').css({'display': 'block'});
    this.loadedUser = null;
    this.loadedGroup = null;
    this.createListView(this.selectedUser, this.selectedGroup, this.selectedListTab);
};

AdminUserManagementClass.prototype.saveUserOrGroup = function() {
    if (this.selectedListTab == 'user') {
        if (this.editType == 'bot') {
            this.saveBot();
        } else {
            this.saveUser();
        }
    } else {
        this.saveGroup();
    }
};

AdminUserManagementClass.prototype.saveUser = function() {
    var operator = this.operators.getOperator(this.selectedUser);
    var groups = this.groups.getGroupList('', true, false), i = 0;
    operator = (operator != null) ? operator : lzm_commonTools.clone(this.newUser);
    var opId = this.createUserId();

    operator.id = (this.selectedUser == '' || typeof operator.is_copy != 'undefined') ? opId : operator.id;
    operator.userid = (this.selectedUser == '' || typeof operator.is_copy != 'undefined') ? $('#operator-uid').val() : operator.userid;
    operator.userid = operator.userid.replace(/^ +/, '').replace(/ +$/, '');
    operator.name = $('#operator-fn').val();
    operator.email = $('#operator-em').val();
    operator.desc = $('#operator-desc').val();
    operator.lang = $('#operator-lng').val().toUpperCase();
    operator.is_active = ($('#operator-inactive').prop('checked')) ? false : true;
    operator.passwd = $('#operator-pwd').val();
    operator.passwd_repeat = $('#operator-repeat-pwd').val();
    operator.passwd_change = $('#operator-force-pwd-change').prop('checked');
    var opMemberGroups = [], opHiddenGroups = [];
    for (i=0; i<groups.length; i++) {
        var groupHtmlId = lz_global_base64_url_encode(groups[i].id);
        if ($('#group-member-' + groupHtmlId).prop('checked')) {
            opMemberGroups.push(groups[i].id);
        }
        if ($('#group-hidden-' + groupHtmlId).prop('checked')) {
            opHiddenGroups.push(groups[i].id);
        }
    }
    operator.groups = opMemberGroups;
    operator.groupsHidden = opHiddenGroups;

    var chatAmountLimit = parseInt($('#operator-chat-number').val());
    var chatLimitAction = $('#op-limit-action').val();
    var opMc = -1;
    if ($('#operator-limit-chats').prop('checked') && !isNaN(chatAmountLimit)) {
        if (chatLimitAction == 1) {
            opMc = 30 + chatAmountLimit;
        } else {
            opMc = chatAmountLimit;
        }
    }
    operator.mc = opMc;

    operator.level = ($('#permtab-general-is-server-admin').prop('checked') || operator.userid == lzm_pollServer.loginData.login) ? '1' : '0';
    var opPermissions = [];
    for (i=0; i<47; i++) {
        opPermissions.push('0');
    }
    opPermissions[0] = $('#permtab-tickets-select-general').val();
    opPermissions[1] = $('#permtab-ratings-select-general').val();
    opPermissions[2] = $('#permtab-archives-select-external').val();
    opPermissions[3] = $('#permtab-resources-select-general').val();
    opPermissions[4] = $('#permtab-events-select-general').val();
    opPermissions[6] = $('#permtab-monitoring-select-general').val();
    opPermissions[5] = $('#permtab-reports-select-general').val();
    opPermissions[7] = $('#permtab-chats-checkbox-join').prop('checked') ? '1' : '0';
    opPermissions[8] = $('#permtab-chats-checkbox-join-invisible').prop('checked') ? '1' : '0';
    opPermissions[9] = $('#permtab-chats-checkbox-take-over').prop('checked') ? '1' : '0';

    opPermissions[10] = $('#permtab-chats-checkbox-change-priority').prop('checked') ? '1' : '0';
    opPermissions[11] = $('#permtab-chats-checkbox-change-target-group').prop('checked') ? '1' : '0';
    opPermissions[12] = $('#permtab-chats-checkbox-change-target-operator').prop('checked') ? '1' : '0';
    opPermissions[13] = $('#permtab-chats-select-general').val();
    opPermissions[14] = $('#permtab-chats-checkbox-send-invites').prop('checked') ? '1' : '0';
    opPermissions[15] = $('#permtab-chats-checkbox-delete-text').prop('checked') ? '1' : '0';
    opPermissions[16] = $('#permtab-chats-checkbox-forward').prop('checked') ? '1' : '0';
    opPermissions[17] = $('#permtab-chats-checkbox-join-after-invitation').prop('checked') ? '1' : '0';
    opPermissions[18] = $('#permtab-groups-select-general').val();
    opPermissions[19] = $('#permtab-chats-checkbox-create-filter').prop('checked') ? '1' : '0';

    opPermissions[20] = $('#permtab-replies-select-general').val();
    opPermissions[21] = $('#operator-allowed-change-pic').prop('checked') ? '1' : '0';
    opPermissions[22] = $('#permtab-tickets-checkbox-review-emails').prop('checked') ? '1' : '0';
    opPermissions[23] = $('#permtab-tickets-checkbox-create-new').prop('checked') ? '1' : '0';
    opPermissions[24] = $('#permtab-tickets-checkbox-change-signature').prop('checked') ? '1' : '0';
    opPermissions[25] = $('#permtab-tickets-checkbox-delete-emails').prop('checked') ? '1' : '0';
    opPermissions[26] = $('#permtab-tickets-checkbox-change-status').prop('checked') ? '1' : '0';
    opPermissions[27] = $('#permtab-tickets-checkbox-status-open').prop('checked') ? '1' : '0';
    opPermissions[28] = $('#permtab-tickets-checkbox-status-progress').prop('checked') ? '1' : '0';
    opPermissions[29] = $('#permtab-tickets-checkbox-status-closed').prop('checked') ? '1' : '0';

    opPermissions[30] = $('#permtab-tickets-checkbox-assign-operator').prop('checked') ? '1' : '0';
    opPermissions[31] = $('#permtab-tickets-checkbox-assign-group').prop('checked') ? '1' : '0';
    opPermissions[34] = $('#permtab-tickets-checkbox-delete-ticket').prop('checked') ? '1' : '0';
    opPermissions[35] = $('#permtab-profiles-select-general').val();
    opPermissions[36] = $('#permtab-archives-select-internal').val();
    opPermissions[37] = $('#permtab-tickets-checkbox-status-deleted').prop('checked') ? '1' : '0';
    opPermissions[38] = $('#permtab-chats-checkbox-start-new').prop('checked') ? '1' : '0';
    opPermissions[39] = $('#permtab-chats-checkbox-cancel-invites').prop('checked') ? '1' : '0';

    opPermissions[40] = $('#permtab-chats-checkbox-cancel-invites-others').prop('checked') ? '1' : '0';
    opPermissions[41] = $('#permtab-tickets-checkbox-edit-messages').prop('checked') ? '1' : '0';
    opPermissions[42] = $('#permtab-chats-checkbox-can-auto-accept').prop('checked') ? '1' : '0';
    opPermissions[43] = $('#permtab-chats-checkbox-must-auto-accept').prop('checked') ? '1' : '0';
    opPermissions[44] = $('#permtab-chats-checkbox-can-reject').prop('checked') ? '1' : '0';
    opPermissions[45] = $('#permtab-general-use-mobile').prop('checked') ? '1' : '0';
    opPermissions[46] = $('#permtab-general-use-api').prop('checked') ? '1' : '0';
    operator.perms = opPermissions.join('');
    var opWebSp = parseInt($('#permtab-files-size').val());
    if (!($('#permtab-files-can-upload').prop('checked')) || isNaN(opWebSp)) {
        opWebSp = 0;
    }
    operator.websp = opWebSp;

    operator.lipr = $('#operator-ip-range').val();

    var opPicture = $('#operator-pic-b64').val();
    operator.pp = (opPicture != '' || typeof operator.pp == 'undefined') ? opPicture : operator.pp;

    operator.mobileAccount = $('#operator-account-is-mobile').prop('checked');
    var opMobAlt = [];
    $('.op-pref-account').each(function() {
        if ($(this).prop('checked')) {
            opMobAlt.push($(this).data('op-id'))
        }
    });
    operator.mobileAlternatives = opMobAlt;

    delete operator['is_copy'];
    this.validateConfigForm('user', operator);
};

AdminUserManagementClass.prototype.saveBot = function() {
    var operator = this.operators.getOperator(this.selectedUser);
    var groups = this.groups.getGroupList('', true, false), i = 0;
    operator = (operator != null) ? operator : lzm_commonTools.clone(this.newUser);
    var opId = this.createUserId();


    operator.id = (this.selectedUser == '' || typeof operator.is_copy != 'undefined') ? opId : operator.id;
    operator.userid = (this.selectedUser == '' || typeof operator.is_copy != 'undefined') ? $('#operator-uid').val() : operator.userid;
    operator.name = $('#operator-fn').val();
    operator.email = $('#operator-em').val();
    operator.desc = $('#operator-desc').val();
    operator.lang = $('#operator-lng').val().toUpperCase();
    operator.is_active = ($('#operator-inactive').prop('checked')) ? false : true;
    operator.isbot = '1';
    var opMemberGroups = [], opHiddenGroups = [];
    for (i=0; i<groups.length; i++) {
        var groupHtmlId = lz_global_base64_url_encode(groups[i].id);
        if ($('#group-member-' + groupHtmlId).prop('checked')) {
            opMemberGroups.push(groups[i].id);
        }
        if ($('#group-hidden-' + groupHtmlId).prop('checked')) {
            opHiddenGroups.push(groups[i].id);
        }
    }
    operator.groups = opMemberGroups;
    operator.groupsHidden = opHiddenGroups;

    var opPicture = $('#operator-pic-b64').val();
    operator.pp = (opPicture != '' || typeof operator.pp == 'undefined') ? opPicture : operator.pp;

    operator.wm = ($('#operator-bot-mode-wmm').prop('checked')) ? '1' : '0';
    operator.wmohca = $('#wmm-fwd-after').val();

    this.validateConfigForm('bot', operator);
};

AdminUserManagementClass.prototype.createUserId = function() {
    var uid = '', counter = 0;
    var operators = this.operators.getOperatorList('', '', true);
    while (uid == '' && counter < 1000) {
        uid = md5(Math.random().toString()).substr(0, 15);
        for (var i=0; i<operators.length; i++) {
            if (operators[i].id == uid) {
                uid = '';
            }
        }
        counter++;
    }
    return uid;
};

AdminUserManagementClass.prototype.saveGroup = function() {
    var group = this.groups.getGroup(this.selectedGroup);
    group = (group != null) ? group : lzm_commonTools.clone(this.newGroup);

    group.id = (this.selectedGroup == '') ? $('#group-id').val() : group.id;
    group.id = group.id.replace(/^ +/, '').replace(/ +$/, '');
    group.email = $('#group-email').val();
    group.standard = ($('#group-is-default').prop('checked')) ? '1' : '';
    group.external = ($('#group-interactions-visitors').prop('checked')) ? '1' : '';
    group.internal = ($('#group-interactions-operators').prop('checked')) ? '1' : '';

    var grChatAmountLimitAction = $('#gr-limit-action').val();
    var grLimitChatAmount = parseInt($('#gr-limit-amount-to').val());
    grLimitChatAmount = ($('#gr-limit-chat-amount').prop('checked') && !isNaN(grLimitChatAmount) && grLimitChatAmount > 0) ?
        (grChatAmountLimitAction == '1') ? grLimitChatAmount + 30 : grLimitChatAmount % 10 : -1;
    group.mc = grLimitChatAmount;
    group.ceo = $('#gr-transcript-email').val();
    group.ps = $('#gr-op-prio-active').prop('checked') ? '1' : '0';
    var grOpPrioObject = {key: 'c_prio', text: '', values: []};
    $('.operator-priority-input').each(function() {
        var prio = parseInt($(this).val());
        prio = (!isNaN(prio) && prio >= 1 && prio <= 10) ? prio - 1 : 0;
        grOpPrioObject.values.push({key: $(this).data('op-id'), text: prio});
        grOpPrioObject.text += prio.toString();
    });

    var inputs = this.inputList.getCustomInputList('full', true);
    var grChatInputHiddenObject = {key: 'ci_hidden', text: '', values: []};
    var grChatInputMaskedObject = {key: 'ci_masked', text: '', values: []};
    var grChatInputMandatoryObject = {key: 'ci_mandatory', text: '', values: []};
    var grChatInputCapitalizeObject = {key: 'ci_cap', text: '', values: []};
    var grTicketInputHiddenObject = {key: 'ti_hidden', text: '', values: []};
    var grTicketInputMaskedObject = {key: 'ti_masked', text: '', values: []};
    var grTicketInputMandatoryObject = {key: 'ti_mandatory', text: '', values: []};
    var grTicketInputCapitalizeObject = {key: 'ti_cap', text: '', values: []};
    for (var i=0; i<inputs.length; i++) {
        if ($('#gr-ift-hidden-chat-' + inputs[i].id).prop('checked')) {
            grChatInputHiddenObject.values.push({text: inputs[i].id});
            grChatInputHiddenObject.text += inputs[i].id;
        }
        if ($('#gr-ift-hidden-ticket-' + inputs[i].id).prop('checked')) {
            grTicketInputHiddenObject.values.push({text: inputs[i].id});
            grTicketInputHiddenObject.text += inputs[i].id;
        }
        if ($('#gr-ift-mandatory-chat-' + inputs[i].id).prop('checked')) {
            grChatInputMandatoryObject.values.push({text: inputs[i].id});
            grChatInputMandatoryObject.text += inputs[i].id;
        }
        if ($('#gr-ift-mandatory-ticket-' + inputs[i].id).prop('checked')) {
            grTicketInputMandatoryObject.values.push({text: inputs[i].id});
            grTicketInputMandatoryObject.text += inputs[i].id;
        }
        if ($('#gr-ift-cap-chat-' + inputs[i].id).prop('checked')) {
            grChatInputCapitalizeObject.values.push({key: inputs[i].id, text: '1'});
            grChatInputCapitalizeObject.text += '1';
        }
        if ($('#gr-ift-cap-ticket-' + inputs[i].id).prop('checked')) {
            grTicketInputCapitalizeObject.values.push({key: inputs[i].id, text: '1'});
            grTicketInputCapitalizeObject.text += '1';
        }
        var ciMasked = $('#gr-ift-masked-chat-' + inputs[i].id).val();
        grChatInputMaskedObject.values.push({key: inputs[i].id, text: ciMasked});
        grChatInputMaskedObject.text += ciMasked;
        var tiMasked = $('#gr-ift-masked-ticket-' + inputs[i].id).val();
        grTicketInputMaskedObject.values.push({key: inputs[i].id, text: tiMasked});
        grTicketInputMaskedObject.text += tiMasked;
    }

    if ($('#gr-tickets-out-client').prop('checked')) {
        group.teo = 'CLIENT';
    } else {
        group.teo = $('#gr-tickets-out-mb').val();
    }
    group.tei = [];
    $('.ticket-in-mb-input').each(function() {
        if ($(this).prop('checked')) {
            group.tei.push({id: $(this).data('in-mb-id'), innerText: ''});
        }
    });
    group.thue = $('#gr-ticket-in-action').val();
    var grTicketAutoAssignObject = {key: 'ti_assign', text: '', values: []};
    var operators = this.operators.getOperatorList('id', '', true);
    for (i=0; i<operators.length; i++) {
        if ($.inArray(group.id, operators[i].groups) != -1 && $('#gr-ticket-auto-assign').prop('checked')) {
            grTicketAutoAssignObject.values.push({key: operators[i].id, text: $('#gr-taa-' + operators[i].id).val()});
            grTicketAutoAssignObject.text += $('#gr-taa-' + operators[i].id).val();
        }
    }
    for (i=0; i<group.f.length; i++) {
        switch(group.f[i].key) {
            case 'ti_assign':
                group.f[i] = lzm_commonTools.clone(grTicketAutoAssignObject);
                break;
            case 'ci_hidden':
                group.f[i] = lzm_commonTools.clone(grChatInputHiddenObject);
                break;
            case 'ci_mandatory':
                group.f[i] = lzm_commonTools.clone(grChatInputMandatoryObject);
                break;
            case 'ci_cap':
                group.f[i] = lzm_commonTools.clone(grChatInputCapitalizeObject);
                break;
            case 'ci_masked':
                group.f[i] = lzm_commonTools.clone(grChatInputMaskedObject);
                break;
            case 'ti_hidden':
                group.f[i] = lzm_commonTools.clone(grTicketInputHiddenObject);
                break;
            case 'ti_mandatory':
                group.f[i] = lzm_commonTools.clone(grTicketInputMandatoryObject);
                break;
            case 'ti_cap':
                group.f[i] = lzm_commonTools.clone(grTicketInputCapitalizeObject);
                break;
            case 'ti_masked':
                group.f[i] = lzm_commonTools.clone(grTicketInputMaskedObject);
                break;
            case 'c_prio':
                group.f[i] = lzm_commonTools.clone(grOpPrioObject);
                break;
        }
    }
    group.autoSendChatWelcome = ($('#tae-auto-send-wel').prop('checked')) ? '1' : '0';
    group.chatWelcomeIsEditable = ($('#tae-wel-edit').prop('checked')) ? '1' : '0';

    this.validateConfigForm('group', group);
};

AdminUserManagementClass.prototype.removeUserOrGroup = function(myId) {
    var that = this, alertMessage = '';
    var removeObject = function() {};
    var groupIsEmpty = true;
    if (that.selectedListTab == 'user') {
        removeObject = function() {
            lzm_pollServer.pollSave('user~remove', operator);
            that.operators.removeOperator(myId);
            that.selectedUser = '';
        };
        var operator = that.operators.getOperator(myId);
        if (operator != null && operator.level == 1) {
            alertMessage = t('The Administrator Account cannot be removed.');
            lzm_commonDialog.createAlertDialog(alertMessage, [{id: 'ok', name: t('Ok')}]);
            $('#alert-btn-ok').click(function() {
                lzm_commonDialog.removeAlertDialog();
            });
        } else if (operator != null) {
            removeObject();
        }
    } else {
        removeObject = function() {
            lzm_pollServer.pollSave('group~remove', group);
            that.groups.removeGroup(myId, true);
            that.selectedGroup = '';
        };
        var group = that.groups.getGroup(myId);
        var operators = that.operators.getOperatorList('', '', true);
        for (i=0; i<operators.length; i++) {
            if ($.inArray(myId, operators[i].groups) != -1) {
                groupIsEmpty = false;
            }
        }
        if (!groupIsEmpty) {
            alertMessage = t('The group you try to delete contains one or more operators. Move all operators to another group and try again.');
            lzm_commonDialog.createAlertDialog(alertMessage, [{id: 'ok', name: t('Ok')}]);
            $('#alert-btn-ok').click(function() {
                lzm_commonDialog.removeAlertDialog();
            });
        } else if (group != null) {
            removeObject();
        }
    }
    that.createListView(that.selectedUser, that.selectedGroup, that.selectedListTab);
};

AdminUserManagementClass.prototype.validateConfigForm = function(type, opOrGr) {
    var that = this, i = 0, j = 0, formIsValid = true, passwordIsWeak = false, alertMessage = '', groupIsEmpty = true;
    var saveObject = function() {};
    if (type == 'group') {
        saveObject = function () {
		console.log(opOrGr);
            lzm_pollServer.pollSave('group~save', opOrGr);
            that.loadedGroup = null;
            window.parent.closeOperatorGroupConfiguration();
        };
        var group = that.groups.getGroup(opOrGr.id);
        if (group == null && opOrGr.id == '') {
            alertMessage = t('Please enter a group id.');
            formIsValid = false;
        } else if (that.selectedGroup == '' && group != null) {
            alertMessage = t('A group with this id does already exist. Please enter another group id.');
            formIsValid = false;
        } else if (opOrGr.email.indexOf('@') == -1) {
            alertMessage = t('Please enter a valid email address.');
            formIsValid = false;
        } else if (Object.keys(opOrGr.humanReadableDescription).length == 0) {
            alertMessage = t('Please create at least one title for this group.');
            formIsValid = false;
        }
    } else if (type == 'user') {
        saveObject = function () {
            lzm_pollServer.pollSave('user~save', opOrGr);
            that.loadedUser = null;
            window.parent.closeOperatorGroupConfiguration();
        };
        var operator = that.operators.getOperator(opOrGr.id);
        if (operator == null && opOrGr.userid == '') {
            alertMessage = t('Please enter a valid username.');
            formIsValid = false;
        } else if (that.selectedUser == '' && operator != null) {
            alertMessage = t('An operator with this id does already exist. Please enter another username.');
            formIsValid = false;
        } else if (opOrGr.name == '') {
            alertMessage = t('Please enter the full name.');
            formIsValid = false;
        } else if (opOrGr.passwd.length < 10) {
            alertMessage = t('Your password is weak or very weak, we highly recommend to use a strong alphanumeric password.') + '\r\n' +
            t('The password should include both upper and lowercase letters, numbers and should be at least 10 chars long.') + '\r\n' +
            t('Do you want to set a strong password?');
            passwordIsWeak = true;
        } else if (opOrGr.passwd != opOrGr.passwd_repeat) {
            alertMessage = t('Password and password repetition do not match.');
            formIsValid = false;
        }
    } else if (type == 'bot') {
        saveObject = function () {
            lzm_pollServer.pollSave('bot~save', opOrGr);
            that.loadedUser = null;
            window.parent.closeOperatorGroupConfiguration();
        };
        var bot = that.operators.getOperator(opOrGr.id);
        if (opOrGr.name == '') {
            alertMessage = t('Please enter the full name.');
            formIsValid = false;
        } else if (that.selectedUser == '' && bot != null) {
            alertMessage = t('An operator with this id does already exist. Please enter another username.');
            formIsValid = false;
        }
    }
    if (!formIsValid) {
        lzm_commonDialog.createAlertDialog(alertMessage, [{id: 'ok', name: t('Ok')}]);
        $('#alert-btn-ok').click(function() {
            lzm_commonDialog.removeAlertDialog();
        });
    } else if (passwordIsWeak) {
        lzm_commonDialog.createAlertDialog(alertMessage, [{id: 'yes', name: t('Yes')}, {id: 'no', name: t('No')}]);
        $('#alert-btn-yes').click(function() {
            lzm_commonDialog.removeAlertDialog();
        });
        $('#alert-btn-no').click(function() {
            saveObject();
            lzm_commonDialog.removeAlertDialog();
        });
    } else {
        if (that.selectedListTab == 'user' && that.editType != 'bot') {
            lzm_userManagement.operators.copyOperator(opOrGr);
            var tmpUser = (that.loadedUser != null) ? lzm_commonTools.clone(that.loadedUser) : lzm_commonTools.clone(that.newUser);
            var tmpUserId = (that.selectedUser != '') ? that.selectedUser : opOrGr.id;
            if (typeof tmpUser.sig != 'undefined')
                opOrGr = that.operators.setOperatorProperty(tmpUserId, 'sig', tmpUser.sig);
            if (typeof tmpUser.pm != 'undefined')
                opOrGr = that.operators.setOperatorProperty(tmpUserId, 'pm', tmpUser.pm);
        } else if (that.selectedListTab == 'user' && that.editType == 'bot') {
            lzm_userManagement.operators.copyOperator(opOrGr);
        } else if (that.selectedListTab != 'user') {
            lzm_userManagement.groups.copyGroup(opOrGr);
            var tmpGroup = (that.loadedGroup != null) ? lzm_commonTools.clone(that.loadedGroup) : lzm_commonTools.clone(that.newGroup);
            var tmpGroupId = (that.selectedGroup != '') ? that.selectedGroup : opOrGr.id;
            if (typeof tmpGroup.sig != 'undefined')
                opOrGr = that.groups.setGroupProperty(tmpGroupId, 'sig', tmpGroup.sig);
            if (typeof tmpGroup.pm != 'undefined')
                opOrGr = that.groups.setGroupProperty(tmpGroupId, 'pm', tmpGroup.pm);
            if (typeof tmpGroup.ohs != 'undefined')
                opOrGr = that.groups.setGroupProperty(tmpGroupId, 'ohs', tmpGroup.ohs);
            if (typeof tmpGroup.humanReadableDescription != 'undefined')
                opOrGr = that.groups.setGroupProperty(tmpGroupId, 'humanReadableDescription', tmpGroup.humanReadableDescription);
            if (typeof tmpGroup.name != 'undefined')
                opOrGr = that.groups.setGroupProperty(tmpGroupId, 'name', tmpGroup.name);
            //if (typeof tmpGroup.f != 'undefined')
              //  opOrGr = that.groups.setGroupProperty(tmpGroupId, 'f', tmpGroup.f);
        }
        saveObject();
    }
};

/********** Create configuration tab contents **********/
AdminUserManagementClass.prototype.createAccountConfiguration = function(operator, type) {
    var that = this;
    var groups = that.groups.getGroupList('name', true, false), i = 0;
    var opUid = (operator != null && operator.userid != '') ? operator.userid : (type == 'bot') ? md5(Math.random().toString()).substr(0,8).toUpperCase() : '';
    var opUidDisabled = ((operator != null && typeof operator.is_copy == 'undefined') || type == 'bot') ? ' ui-disabled' : '';
    var opName = (operator != null) ? operator.name : '';
    var opEmail = (operator != null) ? operator.email : '';
    var opDescription = (operator != null) ? operator.desc : '';
    var opLanguage = (operator != null) ? operator.lang : that.defaultLanguage;
    var langDisabled = (((operator != null && operator.isbot == 1) || type == 'bot') && false) ? ' ui-disabled' : '';
    var forceOpPasswordChange = (operator != null && operator.cponl == '1') ? ' checked="checked"' : '';
    var langArray = [], langCodeArray = Object.keys(that.availableLanguages);
    for (i=0; i<langCodeArray.length; i++) {
        langArray.push({value: langCodeArray[i], text: langCodeArray[i].toUpperCase() + ' - ' + that.availableLanguages[langCodeArray[i]]});
    }
    var opIsInactive = (operator != null && !operator.is_active) ? ' checked="checked"' : '';
    var opGroups = (operator != null) ? operator.groups : [];
    var opHiddenGroups = (operator != null) ? operator.groupsHidden : [];
    var contentHtml = '<fieldset id="op-account-details" class="lzm-fieldset">' +
        '<legend>' + t('User Details') + '</legend>';
    contentHtml += lzm_inputControls.createInput('operator-uid', 'umg-edit-text-input' + opUidDisabled, opUid, t('Username (ID)'), '', 'text', 'a');
    contentHtml += lzm_inputControls.createInput('operator-fn', 'umg-edit-text-input', opName, t('Full Name'), '', 'text', 'a');
    contentHtml += lzm_inputControls.createInput('operator-em', 'umg-edit-text-input', opEmail, t('Email'), '', 'text', 'a');
    contentHtml += lzm_inputControls.createInput('operator-desc', 'umg-edit-text-input', opDescription, t('Description'), '', 'text', 'a');
    contentHtml += '<div style="padding: 2px 0px 4px 2px;"><label for="operator-lng" style="font-size: 11px; font-weight: bold;">' + t('Native Language') + '</label></div>' +
        lzm_inputControls.createSelect('operator-lng', 'umg-edit-select' + langDisabled, '', true, {position: 'right', gap: '0px'}, {}, '', langArray,
            opLanguage.toLowerCase(), 'a');
    contentHtml += '<div style="margin-top: 10px;"><input type="checkbox" id="operator-inactive"' + opIsInactive + ' style="margin-right: 10px;" />' +
        '<label for="operator-inactive">' + t('Deactivate account') + '</label></div>';
    contentHtml += '</fieldset>';
    if ((operator != null && operator.isbot != 1) || type != 'bot') {
        var oldPasswd = (operator != null) ? operator.pass : '';
        contentHtml += '<fieldset id="op-account-password" class="lzm-fieldset" style="margin-top: 5px;">' +
            '<legend>' + t('Password') + '</legend>' +
            lzm_inputControls.createInput('operator-pwd', 'umg-edit-text-input', oldPasswd, t('Password'), '', 'password', 'a') +
            lzm_inputControls.createInput('operator-repeat-pwd', 'umg-edit-text-input', oldPasswd, t('Repeat'), '', 'password', 'a') +
            '<div style="margin-top: 10px;"><input' + forceOpPasswordChange + ' type="checkbox" id="operator-force-pwd-change" style="margin-right: 10px;" />' +
            '<label for="operator-force-pwd-change">' + t('User has to change his password on next logon') + '</label></div>' +
            '</fieldset>';
    }
    contentHtml += '<fieldset id="op-account-groups" class="lzm-fieldset" style="margin-top: 5px;">' +
        '<legend>' + t('Groups') + '</legend>' +
        '<table class="visitor-list-table alternating-rows-table" style="width: 100%;"><thead><tr>' +
        '<th>' + t('Group') + '</th>' +
        '<th>' + t('Member') + '</th>' +
        '<th>' + t('Hidden') + '</th>' +
        '</tr></thead><tbody>';
    for (i=0; i<groups.length; i++) {
        var memberChecked = ($.inArray(groups[i].id, opGroups) != -1) ? ' checked="checked"' : '';
        var hiddenChecked = ($.inArray(groups[i].id, opHiddenGroups) != -1) ? ' checked="checked"' : '';
        var groupHtmlId = lz_global_base64_url_encode(groups[i].id);
        contentHtml += '<tr>' +
            '<td>' + groups[i].name + '</td>' +
            '<td><input type="checkbox" id="group-member-' + groupHtmlId + '"' + memberChecked + ' /></td>' +
            '<td><input type="checkbox" id="group-hidden-' + groupHtmlId + '"' + hiddenChecked + ' /></td>' +
            '</tr>'
    }
    contentHtml += '</tbody></table>';
    contentHtml += '</fieldset>';

    return contentHtml;
};

AdminUserManagementClass.prototype.createPictureConfiguration = function(operator) {
    var opAllowedChangePic = (this.permissions.picture_change == '1') ? ' checked="checked"' : '';
    var pp = (operator != null && typeof operator.pp != 'undefined') ? operator.pp : 'DEFAULT';
    pp = (pp.indexOf('data') == 0 || pp == 'DEFAULT') ? pp : 'data:image/png;base64,' + pp;
    var opPicture = (pp != '') ? '<div><img id="operator-pic-img" alt="Embedded Image" src=""' +
        ' style="border: 1px solid #ccc; padding: 5px; background: #ffffff;" /><br />' +
        '<canvas id="operator-pic-canvas" width="80" height="60" style="position: absolute; top: -1000px; left: -1000px;"></canvas> ' +
        '</div>' : '';
    var contentHtml = '<fieldset class="lzm-fieldset op-config-fs" id="op-picture-configuration"><legend>' + t('Picture') + '</legend>' + opPicture +
        lzm_inputControls.createInput('operator-pic', 'umg-edit-text-input', '', t('From file'), '<i class="fa fa-remove"></i>', 'file', 'c') +
        '<input type="hidden" value="' + pp + '" id="operator-pic-b64" />' +
        '<div style="font-size: 11px; padding-left: 2px; font-style: italic;">' + t('Aspect ratio 4:3') + '</div>' +
        '<div style="margin-top: 15px;"><input type="checkbox" id="operator-allowed-change-pic"' + opAllowedChangePic + ' style="margin-right: 10px;" />' +
        '<label for="operator-allowed-change-pic">' + t('Operator is allowed to change his picture') + '</label></div>' +
        '</fieldset>';

    return contentHtml;
};

AdminUserManagementClass.prototype.createBotModeConfiguration = function(operator) {
    var wmmChecked = (operator != null && operator.wm == 1) ? ' checked="checked"' : '';
    var wmmSubConfDisabled = (operator != null && operator.wm == 0) ? ' class="ui-disabled"' : '';
    var omExplDisabled = (operator != null && operator.wm == 1) ? ' class="ui-disabled"' : '';
    var omChecked = (operator == null || operator.wm == 0) ? ' checked="checked"' : '';
    var fwdArray = [{value: '0', text: t('Always')}, {value: '1', text: t('After first question')},
        {value: '2', text: t('After second question')}, {value: '3', text: t('After third question')},
        {value: '4', text: t('After fourth question')}, {value: '5', text: t('After fifth question')}];
    var wmohca = (operator != null) ? operator.wmohca : -1;
    var contentHtml = '<fieldset class="lzm-fieldset op-config-fs" id="op-bot-mode-configuration"><legend>' + t('Bot Mode') + '</legend>' +
        '<div style="margin-top: 15px;"><input type="radio" name="bot-mode-radio" class="bot-mode-radio" id="operator-bot-mode-wmm"' + wmmChecked +
        ' style="margin-right: 10px;" />' +
        '<label for="operator-bot-mode-wmm">' + t('Welcome Manager Mode') + '</label></div>' +
        '<div id="wmm-subconfig"' + wmmSubConfDisabled + ' style="margin-bottom: 15px;"><div id="wmm-explanation" style="margin: 5px 10px;">' +
        t('When Welcome Manager Mode is activated, this bot will receive all chats targeting one of his groups first.') + '<br />' +
        t('However, he can offer to forward to a human operator or to leave a message.') + '</div>' +
        '<div style="padding: 2px 0px 4px 2px;"><label for="wmm-fwd-after" style="font-size: 11px; font-weight: bold;">' +
        t('Bot offers to forward to a human operator...') + '</label></div>' +
        lzm_inputControls.createSelect('wmm-fwd-after', 'umg-edit-select', '', true, {position: 'right', gap: '0px'}, {}, '', fwdArray,
            wmohca, 'a') + '</div><hr />' +
        '<div style="margin-top: 25px;"><input type="radio" name="bot-mode-radio" class="bot-mode-radio" id="operator-bot-mode-om"' + omChecked +
        ' style="margin-right: 10px;" />' +
        '<label for="operator-bot-mode-om">' + t('Offline Mode') + '</label></div>' +
        '<div id="om-explanation"' + omExplDisabled + ' style="margin: 5px 10px;">' +
        t('In Offline Mode this bot will only receive chats, when all human operators are offline or away.') + '<br />' +
        t('Chats with this bot will be interrupted instantly, when a human operator comes online.') + '</div>' +
        '</fieldset>';

    return contentHtml;
};

AdminUserManagementClass.prototype.createOperatorChatsConfiguration = function(operator) {
    var chatsAreLimited = (operator != null && operator.mc != -1) ? ' checked="checked"' : '';
    var limitChatsSubConfDisabled = (operator != null && operator.mc != -1) ? '' : ' class="ui-disabled"';
    var chatLimit = (operator != null) ? parseInt(operator.mc) : -1, selectedLimitAction = 0;
    if (isNaN(chatLimit) || chatLimit <= 0)  {
        chatLimit = 2;
    } else if (chatLimit > 9) {
        selectedLimitAction = 1;
        chatLimit = chatLimit % 10;
    }
    var limitActionsArray = [{value: 0, text: t('Held in queue (similar to operator status "Busy")')},
        {value: 1, text: t('Rejected (similar to operator status "Away")')}];
    var contentHtml = '<fieldset class="lzm-fieldset op-config-fs" id="op-chats-configuration"><legend>' + t('Chats') + '</legend>' +
        '<div style="margin: 10px 0px;"><input type="checkbox" id="operator-limit-chats"' + chatsAreLimited + ' style="margin-right: 10px;" />' +
        '<label for="operator-limit-chats">' + t('Limit Concurrent Chat Amount') + '</label></div>' +
        '<div id="op-limit-chats-subconfig"' + limitChatsSubConfDisabled + '>' +
        lzm_inputControls.createInput('operator-chat-number', 'umg-edit-text-input', chatLimit, t('Maximum number of concurrent chats'), '', 'number', 'a') +
        '<div style="padding: 2px 0px 4px 2px;"><label for="wmm-fwd-after" style="font-size: 11px; font-weight: bold;">' +
        t('Incoming chats exceeding this limitation will be...') + '</label></div>' +
        lzm_inputControls.createSelect('op-limit-action', 'umg-edit-select', '', true, {position: 'right', gap: '0px'}, {}, '', limitActionsArray,
            selectedLimitAction, 'a') + '</div>' +
        '</div>' +
        '</fieldset>';

    return contentHtml;
};

AdminUserManagementClass.prototype.createOperatorSecurityConfiguration =  function(operator) {
    var lipr = (operator != null) ? operator.lipr : '';
    var contentHtml = '<fieldset class="lzm-fieldset op-config-fs" id="op-security-configuration"><legend>' + t('IP Address Range for Logins') + '</legend>' +
        '<p>' + t('If specified, only computers with an IP address within the given IP range are allowed to login.') + '</p>' +
        '<p>' + t('WARNING: Use with care. It\'s possible to lock out yourself easily.') + '</p>' +
        '<p>' + t('Possible formats:') + '</p>' +
        '<table style="border:0;">' +
        '<tr><td>1.</td><td>' + t('Single IP:') + '</td><td>1.2.3.4</td></tr>' +
        '<tr><td>2.</td><td>' + t('Wildcard:') + '</td><td>1.2.3.*</td></tr>' +
        '<tr><td>3.</td><td>' + t('Start-End IP:') + '</td><td>1.2.3.0-1.2.3.255</td></tr>' +
        '<tr><td>4.</td><td>' + t('Deactivated:') + '</td><td>' + t('Blank') + '</td></tr>' +
        '</table>' +
        '<p>' + t('You can combine multiple expressions using the comma separator.') + '</p>' +
        lzm_inputControls.createInput('operator-ip-range', 'umg-edit-text-input', lipr, t('IP or IP-Range (blank = deactivated)'), '', 'text', 'a') +
        '</fieldset>';

    return contentHtml;
};

AdminUserManagementClass.prototype.createOperatorMobileAccountConfiguration = function(operator) {
    var that = this;
    var accountIsMobile = (operator != null && operator.mobileAccount) ? ' checked="checked"' : '';
    var tableIsDisabled = (operator != null && operator.mobileAccount) ? '' : ' class="ui-disabled"';
    var contentHtml = '<fieldset class="lzm-fieldset op-config-fs" id="op-mobile-account-configuration"><legend>' + t('Mobile Account') + '</legend>' +
        '<div style="margin: 10px 0px;"><input type="checkbox" id="operator-account-is-mobile"' + accountIsMobile + ' style="margin-right: 10px;" />' +
        '<label for="operator-limit-chats">' + t('This is a mobile account') +
        '</label></div>' +
        '<div style="margin: 5px 10px;">' + t('This account only receives chats, when the operators/accounts selected below are signed off (status offline).') + '<br />' +
            t('This allows operators to be connected from different devices (mobile and desktop) concurrently without having to manage their connections manually when leaving the office.') +
        '</div>' +
        '<div id="mobile-account-subconfig" style="margin: 5px 10px; border: 1px solid #ccc; padding: 5px;"' + tableIsDisabled + '>' +
        '<table style="width: 100%;" class="alternating-rows-table"><tbody>';
    var opList = that.operators.getOperatorList();
        for (var i=0; i<opList.length; i++) {
            if (opList[i].isbot != 1 && (operator == null || operator.id != opList[i].id)) {
                var mobileAlternatives = (operator != null) ? operator.mobileAlternatives : [];
                var opIsPreffered = ($.inArray(opList[i].id, mobileAlternatives) != -1) ? ' checked="checked"' : '';
                contentHtml += '<tr><td style="width: 1px !important;"><input type="checkbox" class="op-pref-account" data-op-id="' + opList[i].id + '"' +
                    ' id="op-pref-account-' + opList[i].id + '"' + opIsPreffered + ' /></td>' +
                    '<td>' + opList[i].name + ' (' + opList[i].userid + ')</td></tr>';
            }
        }
    contentHtml += '</tbody></table></div>' +
        '</fieldset>';

    return contentHtml;
};

AdminUserManagementClass.prototype.createOperatorPermissionsConfiguration = function(operator, selectLists) {
    var that = this;
    var contentHtml = '<fieldset class="lzm-fieldset op-config-fs" id="op-permissions-configuration"><legend>' + t('Permissions') + '</legend>' +
        '<div id="permissions-placeholder"></div>' +
        '</fieldset>';
    var permissionTabs = [{id: 'general', name: t('General'), perms: [
        {id: 'mobile_access', setting: that.permissions.mobile_access},
        {id: 'api_access', setting: that.permissions.api_access}
        ]},
        {id: 'chats', name: t('Chats'), perms: [
            {id: 'general', text: t('General permissions'), type: 'select', setting: that.permissions.chats, options: selectLists.chats.general},
            {id: 'create-filter', type: 'checkbox', setting: that.permissions.chats_create_filter, text: t('Operator is allowed to create filters (ban users)'), level: 1},
            {id: 'take-over', type: 'checkbox', setting: that.permissions.chats_take_over, text: t('Operator is allowed to take chats'), level: 1},
            {id: 'change-priority', type: 'checkbox', setting: that.permissions.chats_change_priority, text: t('Operator is allowed to change chat priority'), level: 1},
            {id: 'change-target-operator', type: 'checkbox', setting: that.permissions.chats_change_target_operator, text: t('Operator is allowed to change target operator'), level: 1},
            {id: 'change-target-group', type: 'checkbox', setting: that.permissions.chats_change_target_group, text: t('Operator is allowed to change target group'), level: 1},
            {id: 'send-invites', type: 'checkbox', setting: that.permissions.chats_send_invites, text: t('Operator is allowed to send chat invitations'), level: 1},
            {id: 'start-new', type: 'checkbox', setting: that.permissions.chats_start_new, text: t('Operator is allowed to start chats with website visitors'), level: 1},
            {id: 'delete-text', type: 'checkbox', setting: that.permissions.chats_delete_text, text: t('Operator is allowed to clear text of chat'), level: 1},
            {id: 'forward', type: 'checkbox', setting: that.permissions.chats_forward, text: t('Operator is allowed to forward chats'), level: 1},
            {id: 'can-reject', type: 'checkbox', setting: that.permissions.chats_can_reject, text: t('Operator is allowed to decline chats'), level: 1},
            {id: 'join', type: 'checkbox', setting: that.permissions.chats_join, text: t('Operator is allowed to join chats...'), level: 1},
            {id: 'join-invisible', type: 'checkbox', setting: that.permissions.chats_join_invisible, text: t('...invisibly'), level: 2},
            {id: 'join-after-invitation', type: 'checkbox', setting: that.permissions.chats_join_after_invitation, text: t('...when invited'), level: 2},
            {id: 'cancel-invites', type: 'checkbox', setting: that.permissions.chats_cancel_invites, text: t('Operator is allowed to cancel chat invitations'), level: 1},
            {id: 'cancel-invites-others', type: 'checkbox', setting: that.permissions.chats_cancel_invites_others, text: t('Operator is allowed to cancel chat invitations sent by others'), level: 2},
            {id: 'can-auto-accept', type: 'checkbox', setting: that.permissions.chats_can_auto_accept, text: t('Operator is allowed to auto accept chats'), level: 1},
            {id: 'must-auto-accept', type: 'checkbox', setting: that.permissions.chats_must_auto_accept, text: t('Operator must auto accept chats'), level: 2}
        ]},
        {id: 'tickets', name: t('Tickets'), perms: [
            {id: 'general', text: t('General permissions'), type: 'select', setting: that.permissions.tickets, options: selectLists.tickets.general},
            {id: 'change-signature', type: 'checkbox', setting: that.permissions.tickets_change_signature, text: t('Operator can change his signature'), level: 1},
            {id: 'review-emails', type: 'checkbox', setting: that.permissions.tickets_review_emails, text: t('Operator can review emails'), level: 1},
            {id: 'delete-emails', type: 'checkbox', setting: that.permissions.tickets_delete_emails, text: t('Operator can delete emails'), level: 2},
            {id: 'create-new', type: 'checkbox', setting: that.permissions.tickets_create_new, text: t('Operator can create new Tickets'), level: 1},
            {id: 'change-status', type: 'checkbox', setting: that.permissions.tickets_change_status, text: t('Operator can change ticket status'), level: 1},
            {id: 'status-open', type: 'checkbox', setting: that.permissions.tickets_status_open, text: t('Open'), level: 2},
            {id: 'status-progress', type: 'checkbox', setting: that.permissions.tickets_status_progress, text: t('In Progress'), level: 2},
            {id: 'status-closed', type: 'checkbox', setting: that.permissions.tickets_status_closed, text: t('Closed'), level: 2},
            {id: 'status-deleted', type: 'checkbox', setting: that.permissions.tickets_status_deleted, text: t('Deleted'), level: 2},
            {id: 'assign-operator', type: 'checkbox', setting: that.permissions.tickets_assign_operators, text: t('Operator can assign Tickets to Operators'), level: 1},
            {id: 'assign-group', type: 'checkbox', setting: that.permissions.tickets_assign_groups, text: t('Operator can assign Tickets to Groups'), level: 1},
            {id: 'delete-ticket', type: 'checkbox', setting: that.permissions.tickets_delete_ticket, text: t('Operator can delete Tickets from Server'), level: 1},
            {id: 'edit-messages', type: 'checkbox', setting: that.permissions.tickets_edit_messages, text: t('Operator can edit message values / fields'), level: 1}
        ]},
        {id: 'ratings', name: t('Ratings'), perms: [
            {id: 'general', text: t('General permissions'), type: 'select', setting: that.permissions.ratings, options: selectLists.ratings.general}
        ]},
        {id: 'profiles', name: t('Profiles'), perms: [
            {id: 'general', text: t('General permissions'), type: 'select', setting: that.permissions.profiles, options: selectLists.profiles.general}
        ]},
        {id: 'resources', name: t('Knowledgebase'), perms: [
            {id: 'general', text: t('General permissions'), type: 'select', setting: that.permissions.resources, options: selectLists.resources.general}
        ]},
        {id: 'events', name: t('Events'), perms: [
            {id: 'general', text: t('General permissions'), type: 'select', setting: that.permissions.events, options: selectLists.events.general}
        ]},
        {id: 'reports', name: t('Reports'), perms: [
            {id: 'general', text: t('General permissions'), type: 'select', setting: that.permissions.reports, options: selectLists.reports.general}
        ]},
        {id: 'archives', name: t('Archives'), perms: [
            {id: 'external', text: t('External Chat Archives (Visitors / Customers)'), type: 'select', setting: that.permissions.archives_external, options: selectLists.archives.external},
            {id: 'internal', text: t('Internal Chat Archives (Operators / Groups)'), type: 'select', setting: that.permissions.archives_internal, options: selectLists.archives.internal}
        ]},
        {id: 'monitoring', name: t('Monitoring'), perms: [
            {id: 'general', text: t('General permissions'), type: 'select', setting: that.permissions.monitoring, options: selectLists.monitoring.general}
        ]},
        {id: 'groups', name: t('(Dynamic) Groups'), perms: [
            {id: 'general', text: t('General permissions'), type: 'select', setting: that.permissions.groups_dynamic, options: selectLists.groups.general}
        ]},
        {id: 'replies', name: t('Auto Replies'), perms: [
            {id: 'general', text: t('General permissions'), type: 'select', setting: that.permissions.auto_replies, options: selectLists.replies.general}
        ]},
        {id: 'files', name: t('Files'), perms: null}];

    var permissionTabHtmlArray = [];
    for (var thisTab in permissionTabs) {
        if (permissionTabs.hasOwnProperty(thisTab)) {
            permissionTabHtmlArray.push(that.createPermissionTab(permissionTabs[thisTab], operator));
        }
    }

    return {html: contentHtml, tabs: permissionTabHtmlArray};
};

AdminUserManagementClass.prototype.createPermissionTab = function (thisTab, operator) {
    var that = this, tab = {name: thisTab.name, content: ''};
    if (thisTab.id == 'general') {
        tab.content = that.createGeneralPermissionTab(operator, thisTab.perms);
    } else if (thisTab.id == 'files') {
        tab.content = that.createFilesPermissionTab(operator, thisTab.perms);
    } else {
        tab.content = '<fieldset class="lzm-fieldset perm-inner-fs" id="permtab-' + thisTab.id + '-inner">' +
            '<legend>' + thisTab.name + '</legend>';
        if (thisTab.perms != null) {
            var lastLevelOnePermWasChecked = true;
            for (var i=0; i<thisTab.perms.length; i++) {
                if (thisTab.perms[i].type == 'select') {
                    var selectedText = thisTab.perms[i].options[0].text;
                    for (var j=0; j<thisTab.perms[i].options.length; j++) {
                        if (thisTab.perms[i].options[j].value == thisTab.perms[i].setting) {
                            selectedText = thisTab.perms[i].options[j].text
                        }
                    }

                    tab.content += '<div style="padding: 2px 0px 4px 2px;"><label for="permtab-' + thisTab.id + '-select-' + thisTab.perms[i].id + '"' +
                        ' style="font-size: 11px; font-weight: bold;">' + thisTab.perms[i].text + '</label></div>' +
                        lzm_inputControls.createSelect('permtab-' + thisTab.id + '-select-' + thisTab.perms[i].id, '', '',
                        selectedText, {position: 'right', gap: '0px'}, {'margin-bottom': '20px'}, '', thisTab.perms[i].options, thisTab.perms[i].setting, 'a');
                } else if (thisTab.perms[i].type == 'checkbox') {
                    var permIsChecked = (thisTab.perms[i].setting == 1) ? ' checked="checked"' : '';
                    if (thisTab.perms[i].setting == 1 && thisTab.perms[i].level == 1) {
                        lastLevelOnePermWasChecked = true;
                    } else if (thisTab.perms[i].setting == 0 && thisTab.perms[i].level == 1) {
                        lastLevelOnePermWasChecked = false;
                    }
                    var checkboxLeftMargin = (thisTab.perms[i].level == 1) ? '0px' : '20px';
                    var settingIsDisabled = (thisTab.perms[i].level == 2 && !lastLevelOnePermWasChecked) ? ' class="ui-disabled"' : '';
                    tab.content += '<div' + settingIsDisabled + ' style="margin: 10px 0px 10px ' + checkboxLeftMargin + ';">' +
                        '<input type="checkbox" id="permtab-' + thisTab.id + '-checkbox-' + thisTab.perms[i].id + '"' + permIsChecked + ' style="margin-right: 10px;" />' +
                        '<label for="checkbox" id="permtab-' + thisTab.id + '-checkbox-' + thisTab.perms[i].id + '">' + thisTab.perms[i].text + '</label>' +
                        '</div>';
                }
            }
        }
        tab.content += '</fieldset>';
    }

    return tab;
};

AdminUserManagementClass.prototype.createGeneralPermissionTab = function(operator, perms) {
    var canUseMobile = '', canUseApi = '';
    for (var i=0; i<perms.length; i++) {
        if (perms[i].id == 'mobile_access' && perms[i].setting == 1) {
            canUseMobile = ' checked="checked"';
        }
        if (perms[i].id == 'api_access' && perms[i].setting == 1) {
            canUseApi = ' checked="checked"';
        }
    }
    var adminIsDisabled = (operator == null || operator.userid == lzm_pollServer.loginData.login) ? ' class="ui-disabled"' : '';
    var isServerAdmin = (operator != null && operator.level == 1) ? ' checked="checked"' : '';
    var tabContent = '<fieldset class="lzm-fieldset" id="permtab-general-inner-general" style="height: 110px;">' +
        '<legend>' + t('General') + '</legend>' +
        '<div style="margin: 10px 0px;"><input type="checkbox" id="permtab-general-use-mobile"' + canUseMobile + ' style="margin-right: 10px;" />' +
        '<label for="permtab-general-use-mobile">' + t('This user is allowed to sign on using the mobile APP or web based client') +
        '</label></div>' +
        '<div style="margin: 10px 0px;"><input type="checkbox" id="permtab-general-use-api"' + canUseApi + ' style="margin-right: 10px;" />' +
        '<label for="permtab-general-use-api">' + t('This user is allowed to make API calls') +
        '</label></div>' +
        '</fieldset>' +
        '<fieldset class="lzm-fieldset" id="permtab-general-inner-admin" style="margin-top: 10px;">' +
        '<legend>' + t('Administrator') + '</legend>' +
        '<div' + adminIsDisabled + ' style="margin: 10px 0px;"><input type="checkbox" id="permtab-general-is-server-admin"' + isServerAdmin + ' style="margin-right: 10px;" />' +
        '<label for="permtab-general-is-server-admin">' + t('This user is Server Administrator') +
        '</label></div>' +
        '</fieldset>';

    return tabContent;
};

AdminUserManagementClass.prototype.createFilesPermissionTab = function(operator) {
    var canUploadFiles = (operator == null || operator.websp != 0) ? ' checked="checked"' : '';
    var filesSize = (operator != null) ? operator.websp : 5;
    var tabContent = '<fieldset class="lzm-fieldset perm-inner-fs" id="permtab-files-inner">' +
        '<legend>' + t('Files') + '</legend>' +
        '<div style="margin: 10px 0px;"><input type="checkbox" id="permtab-files-can-upload"' + canUploadFiles + ' style="margin-right: 10px;" />' +
        '<label for="permtab-files-can-upload">' + t('Operator is allowed to upload files') +
        '</label></div>' +
        lzm_inputControls.createInput('permtab-files-size', '', filesSize, t('Webspace max (MB)'), '', 'number', 'a') +
        '</fieldset>';

    return tabContent
};

AdminUserManagementClass.prototype.createSignatureConfiguration = function(opOrGr) {
    var contentHtml = '<fieldset class="lzm-fieldset op-config-fs" id="op-signatures-configuration">' +
        '<legend>' + t('Signatures') + '</legend>' +
        '<div id="signature-list-div"><table style="width: 100%;" class="visitor-list-table alternating-rows-table" id="signature-list-table">' +
        '<tbody>';
    if (opOrGr != null && typeof opOrGr.sig != 'undefined') {
        for (var i=0; i<opOrGr.sig.length; i++) {
            if (typeof opOrGr.sig[i].deleted == 'undefined' || !opOrGr.sig[i].deleted) {
                var signatureText = (opOrGr.sig[i].d == 0) ? opOrGr.sig[i].n : opOrGr.sig[i].n + ' ' + t('(Default)');
                contentHtml += '<tr id="signature-list-line-' + i + '" class="signature-list-line lzm-unselectable"' +
                    ' onclick="selectSignature(' + i + ');" ondblclick="editSignature(' + i + ');"><td>' + signatureText + '</td></tr>';
            }
        }
    }
    contentHtml += '</tbody>' +
        '</table></div><div style="margin-top: 15px; margin-bottom: 5px; text-align: right;">';
    contentHtml += lzm_inputControls.createButton('new-signature-btn', '', 'createSignature()', t('New'), '', 'lr',
        {'margin-right': '5px', 'padding-left': '12px', 'padding-right': '12px'}, t('Create new signature'), 20, 'b');
    contentHtml += lzm_inputControls.createButton('edit-signature-btn', 'ui-disabled sig-edit-btns', 'editSignature()', t('Edit'), '', 'lr',
        {'margin-right': '5px', 'padding-left': '12px', 'padding-right': '12px'}, t('Edit selected signature'), 20, 'b');
    contentHtml += lzm_inputControls.createButton('rm-signature-btn', 'ui-disabled sig-edit-btns', 'removeSignature()', t('Remove'), '', 'lr',
        {'margin-right': '5px', 'padding-left': '12px', 'padding-right': '12px'}, t('Remove selected signature'), 20, 'b');
    contentHtml += lzm_inputControls.createButton('def-signature-btn', 'ui-disabled sig-edit-btns', 'setSignatureAsDefault()', t('Set as default'), '', 'lr',
        {'margin-right': '10px', 'padding-left': '12px', 'padding-right': '12px'}, t('Set selected signature as default'), 20, 'b');
    contentHtml += '</div>' +
        '</fieldset>';

    return contentHtml;
};

AdminUserManagementClass.prototype.createSignatureInput = function(signature) {
    var signatureName = (signature != null) ? signature.n : '';
    var signatureText = (signature != null) ? signature.text : '';
    var signatureIsDefault = (signature != null && signature.d == 1) ? ' checked="checked"' : '';
    var inputForm = '<div id="signature-inner-div"><fieldset class="lzm-fieldset input-fs" id="signature-inner-fs">' +
        '<legend>' + t('Signature') + '</legend>' +
        lzm_inputControls.createInput('signature-name', '', signatureName, t('Name'), '', 'text', 'a') +
        '<div style="margin-top: 40px;">' +
        '<div style="margin-bottom: 5px;"><label for="signature-text" style="font-size: 11px; font-weight: bold;">' + t('Signature') + '</label></div>' +
        '<div><textarea id="signature-text" onclick="removeSignaturePlaceholderMenu();"' +
        ' oncontextmenu="showSignaturePlaceholderMenu(event);">' + signatureText + '</textarea></div></div>' +
        '<div style="margin: 10px 0px;"><input type="checkbox" id="signature-as-default"' + signatureIsDefault + ' style="margin-right: 10px;" />' +
        '<label for="signature-as-default">' + t('Default Signature') + '</label></div>' +
        '<div><span style="background: #FFFFE1; padding: 5px; display: inline-block;">' +
        t('Please right click on a text field to add a placeholder') +
        '</span></div></fieldset></div>';

    window.parent.lzm_chatDisplay.settingsDisplay.userManagementAction = 'signature';
    $('.umg-views').css({display: 'none'});
    $('#umg-input-view').css({'display': 'block'});
    $('#umg-input-view').html(inputForm);
    lzm_layout.resizeSignatureInput();
};

AdminUserManagementClass.prototype.saveSignature = function() {
    var that = this, signatureList = [], operator = null, group = null, signature = {}, i = 0;
    if (this.selectedListTab == 'user') {
        operator = lzm_commonTools.clone(that.loadedUser);
        operator = (operator != null) ? operator : that.newUser;
        signatureList = (operator != null && typeof operator.sig != 'undefined') ? operator.sig : [];
        signature = (operator != null && typeof operator.sig != 'undefined' && this.selectedSignatureNo != -1) ?
            operator.sig[this.selectedSignatureNo] : {i: '', g: '', o: this.selectedUser};
    } else {
        group = lzm_commonTools.clone(that.loadedGroup);
        group = (group != null) ? group : that.newGroup;
        signatureList = (group != null && typeof group.sig != 'undefined') ? group.sig : [];
        signature = (group != null && typeof group.sig != 'undefined' && this.selectedSignatureNo != -1) ?
            group.sig[this.selectedSignatureNo] : {i: '', g: this.selectedGroup, o: ''};
    }
    signature.n = $('#signature-name').val();
    signature.text = $('#signature-text').val();
    signature.d = ($('#signature-as-default').prop('checked')) ? '1' : '0';
    if (signature.i != '') {
        for (i=0; i<signatureList.length; i++) {
            if (signatureList[i].i == signature.i) {
                signatureList[i] = signature;
            } else if (signature.d == 1) {
                signatureList[i].d = '0';
            }
        }
    } else {
        for (i=0; i<signatureList.length; i++) {
            if (signature.d == 1) {
                signatureList[i].d = '0';
            }
        }
        signature.i = md5(Math.random().toString());
        signatureList.push(signature);
    }
    lzm_userManagement.selectedSignatureNo = -1;
    if (this.selectedListTab == 'user') {
        if (that.selectedUser != '') {
            that.loadedUser['sig'] = lzm_commonTools.clone(signatureList);
            operator = lzm_commonTools.clone(that.loadedUser);
        } else {
            that.newUser.sig = lzm_commonTools.clone(signatureList);
            operator = lzm_commonTools.clone(that.newUser);
        }
        $('.umg-edit-placeholder-content').each(function() {
            if ($(this).data('hash') == 'signatures') {
                $(this).html(that.createSignatureConfiguration(operator));
            }
        });
    } else {
        if (that.selectedGroup != '') {
            that.loadedGroup['sig'] = lzm_commonTools.clone(signatureList);
            group = lzm_commonTools.clone(that.loadedGroup);
        } else {
            that.newGroup.sig = lzm_commonTools.clone(signatureList);
            group = lzm_commonTools.clone(that.newGroup);
        }
        $('.umg-edit-placeholder-content').each(function() {
            if ($(this).data('hash') == 'signatures') {
                $(this).html(that.createSignatureConfiguration(group));
            }
        });
    }
};

AdminUserManagementClass.prototype.createTextAndEmailsConfiguration = function(opOrGr) {
    var autoSendChatWelcome = ' checked="checked"';
    var chatWelcomeIsEditable = ' checked="checked"';
    var editableDisabled = '';
    var contentHtml = '<fieldset class="lzm-fieldset op-config-fs" id="op-text-emails-configuration">' +
        '<legend>' + t('Text and Emails') + '</legend>' +
        '<div id="text-emails-list-div"><table style="width: 100%;" class="visitor-list-table alternating-rows-table" id="text-emails-list-table">' +
        '<tbody>';
    opOrGr = (opOrGr != null) ? opOrGr : (this.selectedListTab != 'user') ? this.newGroup : this.newUser;
    if (opOrGr != null && typeof opOrGr.pm != 'undefined') {
        for (var i=0; i<opOrGr.pm.length; i++) {
            if (typeof opOrGr.pm[i].deleted == 'undefined' || !opOrGr.pm[i].deleted) {
                var langName = opOrGr.pm[i].lang + ' - ' + this.availableLanguages[opOrGr.pm[i].lang.toLowerCase()];
                if (opOrGr.pm[i].def == 1) {
                    langName += ' (' + t('Default') + ')';
                }
                contentHtml += '<tr id="text-emails-list-line-' + i + '" class="text-emails-list-line lzm-unselectable"' +
                    ' onclick="selectTextEmails(' + i + ');" ondblclick="editTextEmails(' + i + ');"><td>' + langName + '</td></tr>';
                if (opOrGr.pm[i].aw != '1') {
                    autoSendChatWelcome = '';
                    editableDisabled = ' class="ui-disabled"';
                }
                if (opOrGr.pm[i].edit != '1') {
                    chatWelcomeIsEditable = '';
                }
            }
        }
    }
    contentHtml += '</tbody>' +
        '</table></div><div style="margin-top: 15px; margin-bottom: 5px; text-align: right;">';
    contentHtml += lzm_inputControls.createButton('new-text-emails-btn', '', 'createTextEmails()', t('New'), '', 'lr',
        {'margin-right': '5px', 'padding-left': '12px', 'padding-right': '12px'}, t('Create new texts'), 20, 'b');
    contentHtml += lzm_inputControls.createButton('edit-text-emails-btn', 'ui-disabled text-emails-edit-btns', 'editTextEmails()', t('Edit'), '', 'lr',
        {'margin-right': '5px', 'padding-left': '12px', 'padding-right': '12px'}, t('Edit selected texts'), 20, 'b');
    contentHtml += lzm_inputControls.createButton('rm-text-emails-btn', 'ui-disabled text-emails-edit-btns', 'removeTextEmails()', t('Remove'), '', 'lr',
        {'margin-right': '5px', 'padding-left': '12px', 'padding-right': '12px'}, t('Remove selected texts'), 20, 'b');
    contentHtml += lzm_inputControls.createButton('def-text-emails-btn', 'ui-disabled text-emails-edit-btns', 'setTextEmailsAsDefault()', t('Set as default'), '', 'lr',
        {'margin-right': '10px', 'padding-left': '12px', 'padding-right': '12px'}, t('Set selected texts as default'), 20, 'b');
    contentHtml += '</div>' +
        '<div style="margin-left: 10px;"><div>' +
        '<input type="checkbox" id="tae-auto-send-wel"' + autoSendChatWelcome + ' style="margin-right: 10px;" />' +
        '<label for="checkbox" id="tae-auto-send-wel">' + t('Auto send Chat Welcome Message') + '</label>' +
        '</div><div style="margin-left: 20px;"' + editableDisabled + '>' +
        '<input type="checkbox" id="tae-wel-edit"' + chatWelcomeIsEditable + ' style="margin-right: 10px;" />' +
        '<label for="checkbox" id="tae-wel-edit">' + t('Chat Welcome Message is editable') + '</label>' +
        '</div></div>' +
        '</fieldset>';

    return contentHtml;
};

AdminUserManagementClass.prototype.createTextEmailsInput = function(textAndEmails, aw, edit) {
    var that = this, langCodes = Object.keys(this.availableLanguages);
    var disabledClass = (textAndEmails != null) ? 'ui-disabled' : '';
    var selectedLanguage = (textAndEmails != null) ? textAndEmails.lang : langCodes[0].toUpperCase();
    var selectText = selectedLanguage + ' - ' + this.availableLanguages[selectedLanguage.toLowerCase()];
    var optionList = [], existingLangList = [];
    for (var i=0; i<langCodes.length; i++) {
        var opOrGr = (that.selectedListTab == 'user') ?
            (that.selectedUser != '') ? lzm_commonTools.clone(that.loadedUser) :lzm_commonTools.clone(that.newUser) :
            (that.selectedGroup != '') ? lzm_commonTools.clone(that.loadedGroup) : lzm_commonTools.clone(that.newGroup);
        if (opOrGr != null && typeof opOrGr.pm != 'undefined') {
            for (var j=0; j<opOrGr.pm.length; j++) {
                if (typeof opOrGr.pm[j].deleted == 'undefined' || !opOrGr.pm[j].deleted) {
                    existingLangList.push(opOrGr.pm[j].lang.toLowerCase());
                }
            }
        }
        if ($.inArray(langCodes[i], existingLangList) == -1 || textAndEmails != null) {
            optionList.push({value: langCodes[i],
                text: langCodes[i].toUpperCase() + ' - ' + this.availableLanguages[langCodes[i]]});
        }
    }
    var inputForm = '<div id="text-emails-inner-div" data-aw="' + aw + '" data-edit="' + edit + '">' +
        '<fieldset class="lzm-fieldset input-fs" id="text-emails-inner-lang-fs">' +
        '<legend>' + t('Language') + '</legend>' +
        lzm_inputControls.createSelect('text-emails-lang-select', disabledClass, '', selectText, {position: 'right', gap: '0px'}, {},
            '', optionList, selectedLanguage.toLowerCase(), 'a') +
        '</fieldset>' +
        '<div id="text-emails-edit-placeholder" style="margin: 15px 2px 0px 2px;"></div>' +
        '<div style="margin: 8px 0px 0px 3px;"><span style="background: #FFFFE1; padding: 5px; display: inline-block;">' +
        t('Please right click on a text field to add a placeholder') +
        '</span></div></div>';

    var textTabContent = '<div id="text-emails-inner-text-placeholder" style="margin-top: 5px;"></div>' +
        '</fieldset>';
    var tabList = [{name: t('Text'), content: textTabContent}];
    var textTabList = [that.createTextEmailsTab('text~welcome', textAndEmails),
        that.createTextEmailsTab('text~invite', textAndEmails),
        that.createTextEmailsTab('text~push', textAndEmails)];
    var emailTabList = [];
    if (this.selectedListTab == 'group') {
        var emailTabContent = '<div id="text-emails-inner-emails-placeholder" style="margin-top: 5px;"></div>' +
            '</fieldset>';
        tabList.push({name: t('Emails'), content: emailTabContent});
        textTabList.push(that.createTextEmailsTab('text~callback', textAndEmails));
        textTabList.push(that.createTextEmailsTab('text~queue', textAndEmails));
        textTabList.push(that.createTextEmailsTab('text~ticket', textAndEmails));
        emailTabList.push(that.createTextEmailsTab('email-transcript', textAndEmails));
        emailTabList.push(that.createTextEmailsTab('email-autoresponder', textAndEmails));
        emailTabList.push(that.createTextEmailsTab('email-operator-reply', textAndEmails));
    }

    window.parent.lzm_chatDisplay.settingsDisplay.userManagementAction = 'text';
    $('.umg-views').css({display: 'none'});
    $('#umg-input-view').css({'display': 'block'});
    $('#umg-input-view').html(inputForm);

    lzm_inputControls.createTabControl('text-emails-edit-placeholder', tabList, 0, 0, 'b');

    lzm_inputControls.createTabControl('text-emails-inner-text-placeholder', textTabList, 0, $(window).width() - 58, 'b');
    if (this.selectedListTab == 'group') {
        lzm_inputControls.createTabControl('text-emails-inner-emails-placeholder', emailTabList, 0, $(window).width() - 58, 'b');
        var cteTabList = [{name: t('Plaintext'), content: that.createEmailInnerTabContent(textAndEmails, 'ect')},
            {name: t('HTML'), content: that.createEmailInnerTabContent(textAndEmails, 'hct')}];
        var taeTabList = [{name: t('Plaintext'), content: that.createEmailInnerTabContent(textAndEmails, 'et')},
            {name: t('HTML'), content: that.createEmailInnerTabContent(textAndEmails, 'ht')}];
        var toreTabList = [{name: t('Plaintext'), content: that.createEmailInnerTabContent(textAndEmails, 'etr')},
            {name: t('HTML'), content: that.createEmailInnerTabContent(textAndEmails, 'htr')}];
        lzm_inputControls.createTabControl('tae-inner-tab-email-cte-tabs-placeholder', cteTabList, 0, $(window).width() - 100, 'b');
        lzm_inputControls.createTabControl('tae-inner-tab-email-tae-tabs-placeholder', taeTabList, 0, $(window).width() - 100, 'b');
        lzm_inputControls.createTabControl('tae-inner-tab-email-tore-tabs-placeholder', toreTabList, 0, $(window).width() - 100, 'b');
    }

    lzm_inputControls.createSelectChangeHandler('text-emails-lang-select', optionList);

    $('#tae-inner-tab-email-sct').click(function() {
        removeTextEmailsPlaceholderMenu();
    });
    $('#tae-inner-tab-email-sct').on('contextmenu', function(e) {
        showTextEmailsPlaceholderMenu(e, 'tae-inner-tab-email', 'sct');
    });
    $('#tae-inner-tab-email-st').click(function() {
        removeTextEmailsPlaceholderMenu();
    });
    $('#tae-inner-tab-email-st').on('contextmenu', function(e) {
        showTextEmailsPlaceholderMenu(e, 'tae-inner-tab-email', 'st');
    });
    $('#tae-inner-tab-email-str').click(function() {
        removeTextEmailsPlaceholderMenu();
    });
    $('#tae-inner-tab-email-str').on('contextmenu', function(e) {
        showTextEmailsPlaceholderMenu(e, 'tae-inner-tab-email', 'str');
    });

    lzm_layout.resizeTextEmailsInput();
};

AdminUserManagementClass.prototype.createTextEmailsTab = function(tab, textAndEmails) {
    var that = this, tabName = '', tabContent = '';
    var leaveBlankForStandard = t('(leave blank to show standard text)');
    var leaveBlankForNone = t('(leave blank for none)');
    var htmlEnabled = t('(HTML enabled)');
    var htmlDisabled = t('(HTML disabled)');
    switch(tab) {
        case 'text~welcome':
            tabName = t('Chat Welcome Message');
            tabContent = that.createTextEmailsTabContent([
                {type: 'textarea', size: 'a', id: 'text-wel', label: t('Welcome Message for Chats <!--html_enabled-->',
                    [['<!--html_enabled-->', htmlEnabled]]), info: '', value: 'wel'},
                {type: 'textarea', size: 'a', id: 'text-welcmb', label: t('Welcome Message for Instant Callback Chats <!--html_enabled-->',
                    [['<!--html_enabled-->', htmlEnabled]]), info: '', value: 'welcmb'}
            ], textAndEmails);
            break;
        case 'text~invite':
            tabName = t('Chat Invitation');
            tabContent = that.createTextEmailsTabContent([
                {type: 'textarea', size: 'a', id: 'text-invm', label: t('Manual Chat Invite Text <!--html_enabled-->',
                    [['<!--html_enabled-->', htmlEnabled]]), info: '', value: 'invm'},
                {type: 'textarea', size: 'a', id: 'text-inva', label: t('Auto (event) Chat Invite Text <!--html_enabled-->',
                    [['<!--html_enabled-->', htmlEnabled]]), info: '', value: 'inva'}
            ], textAndEmails);
            break;
        case 'text~push':
            tabName = t('Website Push');
            tabContent = that.createTextEmailsTabContent([
                {type: 'textarea', size: 'a', id: 'text-wpm', label: t('Manual Website Push Text <!--html_disabled-->',
                    [['<!--html_disabled-->', htmlDisabled]]), info: '', value: 'wpm'},
                {type: 'textarea', size: 'a', id: 'text-wpa', label: t('Auto (event) Website Push Text <!--html_disabled-->',
                    [['<!--html_disabled-->', htmlDisabled]]), info: '', value: 'wpa'}
            ], textAndEmails);
            break;
        case 'text~callback':
            tabName = t('Chat / Callback Information');
            tabContent = that.createTextEmailsTabContent([
                {type: 'textarea', size: 'b', id: 'text-ci', label: t('Chat Information <!--html_enabled-->',
                    [['<!--html_enabled-->', htmlEnabled]]),
                    info: t('This text will be displayed to the visitor above the chat login form <!--blank_for_standard-->',
                        [['<!--blank_for_standard-->', leaveBlankForStandard]]), value: 'ci'},
                {type: 'textarea', size: 'b', id: 'text-ccmbi', label: t('Instant Callback Information <!--html_enabled-->',
                    [['<!--html_enabled-->', htmlEnabled]]),
                    info: t('This text will be displayed to the visitor above the instant callback form <!--blank_for_standard-->',
                        [['<!--blank_for_standard-->', leaveBlankForStandard]]), value: 'ccmbi'}
            ], textAndEmails);
            break;
        case 'text~queue':
            tabName = t('Queue Message');
            tabContent = that.createTextEmailsTabContent([
                {type: 'textarea', size: 'c', id: 'text-qm', label: t('Queue waiting message <!--html_enabled-->',
                    [['<!--html_enabled-->', htmlEnabled]]),
                    info: t('Display this text in queued chats <!--blank_for_none-->',
                        [['<!--blank_for_none-->', leaveBlankForNone]]), value: 'qm'},
                {type: 'number', size: 'c', id: 'text-qmt', label: t('Display message after (in seconds)'),
                    info: '', value: 'qmt'}
            ], textAndEmails);
            break;
        case 'text~ticket':
            tabName = t('Ticket Information');
            tabContent = that.createTextEmailsTabContent([
                {type: 'textarea', size: 'd', id: 'text-ti', label: t('Ticket Information <!--html_enabled-->',
                    [['<!--html_enabled-->', htmlEnabled]]),
                    info: t('This message will be displayed to the visitor above the leave message form <!--blank_for_standard-->',
                        [['<!--blank_for_standard-->', leaveBlankForStandard]]), value: 'ti'}
            ], textAndEmails);
            break;
        case 'email-transcript':
            tabName = t('Chat Transcript Email');
            tabContent = that.createTextEmailsTabContent([
                {type: 'text', size: 'e', id: 'email-sct', label: t('Subject'), info: '', value: 'sct'},
                {type: 'tabs', id: 'email-cte-tabs', margin: '5px'}], textAndEmails);
            break;
        case 'email-autoresponder':
            tabName = t('Ticket Autoresponder Email');
            tabContent = that.createTextEmailsTabContent([
                {type: 'text', size: 'e', id: 'email-st', label: t('Subject'), info: '', value: 'st'},
                {type: 'tabs', id: 'email-tae-tabs', margin: '5px'}], textAndEmails);
            break;
        case 'email-operator-reply':
            tabName = t('Ticket Operator Reply Email');
            tabContent = that.createTextEmailsTabContent([
                {type: 'text', size: 'e', id: 'email-str', label: t('Subject'), info: '', value: 'str'},
                {type: 'tabs', id: 'email-tore-tabs', margin: '5px'}], textAndEmails);
            break;
    }

    return {
        name: tabName,
        content: '<fieldset class="lzm-fieldset text-emails-inner-tab-fs"><legend>' + tabName + '</legend>' + tabContent + '</fieldset>'
    };
};

AdminUserManagementClass.prototype.createTextEmailsTabContent = function(contentArray, textAndEmails) {
    var that = this, contentHtml = '', label = '', value = '', infoText = '', i = 0;
    if (textAndEmails == null) {
        for (i=0; i<that.newPm.length; i++) {
            if (that.newPm[i].lang.toLowerCase() == 'en') {
                textAndEmails = that.newPm[i];
            }
        }
    }
    for (i=0; i<contentArray.length; i++) {
        if (contentArray[i].type == 'textarea') {
            label = '<label style="font-size: 11px; font-weight: bold;" for="tae-inner-tab-' + contentArray[i].id + '">' + contentArray[i].label + '</label>';
            value = (textAndEmails != null) ? textAndEmails[contentArray[i].value] : '';
            infoText = (contentArray[i].info != '') ? '<div style="font-size: 11px; margin-left: 2px;">' + contentArray[i].info + '</div>' : '';
            var marginTop = (i > 0) ? ' style="margin-top: 10px;"' : '';
            contentHtml += '<div' + marginTop + '>' +
                '<div style="margin-left: 2px;">' + label + '</div>' +
                infoText +
                '<div style="margin-top: 4px;">' +
                '<textarea id="tae-inner-tab-' + contentArray[i].id + '" class="tae-inner-tab-textarea-' + contentArray[i].size + '"' +
                ' onclick="removeTextEmailsPlaceholderMenu();"' +
                ' oncontextmenu="showTextEmailsPlaceholderMenu(event, \'tae-inner-tab\', \'' + contentArray[i].id + '\');">' +
                value + '</textarea>' +
                '</div>' +
                '</div>';
        } else if (contentArray[i].type == 'number') {
            value = (textAndEmails != null) ? textAndEmails[contentArray[i].value] : '';
            contentHtml += lzm_inputControls.createInput('tae-inner-tab-' + contentArray[i].id, '', value, contentArray[i].label, '', 'number', 'a')
        } else if (contentArray[i].type == 'text') {
            value = (textAndEmails != null) ? textAndEmails[contentArray[i].value] : '';
            contentHtml += lzm_inputControls.createInput('tae-inner-tab-' + contentArray[i].id, 'umg-edit-text-input', value, contentArray[i].label, '', 'text', 'a')
        } else if (contentArray[i].type == 'tabs') {
            contentHtml += '<div id="tae-inner-tab-' + contentArray[i].id + '-placeholder" style="margin-top: ' + contentArray[i].margin + ';"></div>';
        }
    }

    return contentHtml;
};

AdminUserManagementClass.prototype.createEmailInnerTabContent = function(textAndEmails, key) {
    var that = this, i = 0;
    if (textAndEmails == null) {
        for (i=0; i<that.newPm.length; i++) {
            if (that.newPm[i].lang.toLowerCase() == 'en') {
                textAndEmails = that.newPm[i];
            }
        }
    }
    var myText = (textAndEmails != null) ? textAndEmails[key] : '';
    var contentHtml = '<textarea id="tae-email-textarea-' + key + '" class="tae-email-textarea"' +
        ' onclick="removeTextEmailsPlaceholderMenu();"' +
        ' oncontextmenu="showTextEmailsPlaceholderMenu(event, \'tae-email-textarea\', \'' + key + '\');">' +
        myText + '</textarea>';

    return contentHtml;
};

AdminUserManagementClass.prototype.saveText = function() {
    var that = this, textList = [], operator = null, group = null, text = {}, i = 0;
    var getValueFromForm = function(myId, existingValue) {
        var myTextValue = $('#tae-inner-tab-text-' + myId).val();
        var myEmailHeaderValue = $('#tae-inner-tab-email-' + myId).val();
        var myEmailValue = $('#tae-email-textarea-' + myId).val();
        var myValue = (typeof myTextValue != 'undefined') ? myTextValue :
            (typeof myEmailValue != 'undefined') ? myEmailValue :
            (typeof myEmailHeaderValue != 'undefined') ? myEmailHeaderValue :
            (typeof existingValue != 'undefined') ? existingValue : '';
        return myValue;
    };
    if (this.selectedListTab == 'user') {
        operator = lzm_commonTools.clone(that.loadedUser);
        operator = (operator != null) ? operator : lzm_commonTools.clone(that.newUser);
        textList = (operator != null && typeof operator.pm != 'undefined') ? operator.pm : [];
        text = (operator != null && this.selectedTextEmailsNo != -1) ? operator.pm[this.selectedTextEmailsNo] : {};
    } else {
        group = lzm_commonTools.clone(that.loadedGroup);
        group = (group != null) ? group : lzm_commonTools.clone(that.newGroup);
        textList = (group != null && typeof group.pm != 'undefined') ? group.pm : [];
        text = (group != null && this.selectedTextEmailsNo != -1) ? group.pm[this.selectedTextEmailsNo] : {};
    }
    text.lang = $('#text-emails-lang-select').val().toUpperCase();
    text.shortlang = text.lang.split('-')[0];
    var textIds = ['et', 'etr', 'ect', 'ti', 'ci', 'st', 'str', 'sct', 'ccmbi',
        'invm', 'inva', 'wel', 'welcmb', 'wpa', 'wpm', 'bi', 'def', 'aw',
        'edit', 'qm', 'qmt', 'hct', 'ht', 'htr'];
    for (i = 0; i<textIds.length; i++) {
        text[textIds[i]] = getValueFromForm(textIds[i], text[textIds[i]]);
    }
    text.aw = $('#text-emails-inner-div').data('aw');
    text.edit = $('#text-emails-inner-div').data('edit');
    var textIsNew = true;
    for (i=0; i<textList.length; i++) {
        if (textList[i].lang == text.lang) {
            textList[i] = lzm_commonTools.clone(text);
            textIsNew = false;
        }
    }
    if (textIsNew) {
        textList.push(lzm_commonTools.clone(text));
    }

    if (this.selectedListTab == 'user') {
        if (that.selectedUser != '') {
            that.loadedUser['pm'] = lzm_commonTools.clone(textList);
            operator = lzm_commonTools.clone(that.loadedUser);
        } else {
            that.newUser.pm = lzm_commonTools.clone(textList);
            operator = lzm_commonTools.clone(that.newUser);
        }
        $('.umg-edit-placeholder-content').each(function() {
            if ($(this).data('hash') == 'text-and-emails') {
                $(this).html(that.createTextAndEmailsConfiguration(operator));
            }
        });
    } else {
        if (that.selectedGroup != '') {
            that.loadedGroup['pm'] = lzm_commonTools.clone(textList);
            group = lzm_commonTools.clone(that.loadedGroup);
        } else {
            that.newGroup.pm = lzm_commonTools.clone(textList);
            group = lzm_commonTools.clone(that.newGroup);
        }
        $('.umg-edit-placeholder-content').each(function() {
            if ($(this).data('hash') == 'text-and-emails') {
                $(this).html(that.createTextAndEmailsConfiguration(group));
            }
        });
    }
    lzm_layout.resizeEditUserConfiguration();
};

AdminUserManagementClass.prototype.createGroupDetailsConfiguration = function(group) {
    var groupId = (group != null) ? group.id : '';
    var idDisabled = (group != null) ? ' ui-disabled' : '';
    var groupEmail = (group != null) ? group.email : '';
    var defaultIsChecked = (group != null && group.standard == 1) ? ' checked="checked"' : '';
    var interactionsWithVisitors = (group == null || group.external == 1) ? ' checked="checked"' : '';
    var interactionsWithOperators = (group == null || group.internal == 1) ? ' checked="checked"' : '';
    var contentHtml = '<fieldset class="lzm-fieldset">' +
        '<legend>' + t('Group Details') + '</legend>' +
        lzm_inputControls.createInput('group-id', 'umg-edit-text-input' + idDisabled, groupId, t('Group-ID'), '', 'text', 'a') +
        lzm_inputControls.createInput('group-email', 'umg-edit-text-input', groupEmail, t('Group-Email (visible to all users)'), '', 'text', 'a') +
        '<div style="margin: 10px 0px 0px 0px;">' +
        '<input type="checkbox" id="group-is-default"' + defaultIsChecked + ' style="margin-right: 10px;" />' +
        '<label for="checkbox" id="group-is-default">' + t('Default Group') + '</label>' +
        '</div><div style="margin: 0px 0px 10px 30px; font-style: italic;">' +
        t('The default group will be pre-selected in the chat window. This can be overwritten by script / link preferences.') +
        '</div>' +
        '<div style="margin: 10px 0px 0px 0px;">' +
        '<input type="checkbox" id="group-interactions-visitors"' + interactionsWithVisitors + ' style="margin-right: 10px;" />' +
        '<label for="checkbox" id="group-interactions-visitors">' + t('Allow Interactions with Visitors / Customers') + '</label>' +
        '</div><div style="margin: 0px 0px 10px 30px; font-style: italic;">' +
        t('This group will be offered to your website visitors, when they start a chat. Operators of this group will receive external chats.') +
        '</div>' +
        '<div style="margin: 10px 0px 0px 0px;">' +
        '<input type="checkbox" id="group-interactions-operators"' + interactionsWithOperators + ' style="margin-right: 10px;" />' +
        '<label for="checkbox" id="group-interactions-operators">' + t('Allow Interactions with Operators / Groups') + '</label>' +
        '</div><div style="margin: 0px 0px 10px 30px; font-style: italic;">' +
        t('Operators of this group will see other operators and are allowed to chat among each other.') +
        '</div>' +
        '</fieldset>' +
        '<fieldset class="lzm-fieldset" style="margin-top: 10px;">' +
        '<legend>' + t('Titles (visible to all users)') + '</legend>' +
        t('Translate the title of your group into the most common languages.') + '<br />' +
        t('These titles will be shown to the operators and website visitors depending on their computer or browser localization settings.') +
        '<div id="group-title-div"><table style="width: 100%;" class="visitor-list-table alternating-rows-table" id="group-title-table">';
    if (group != null && typeof group.humanReadableDescription != 'undefined') {
        contentHtml += this.createGroupTitleList(group.humanReadableDescription);
    } else {
        contentHtml += '<tbody></tbody>';
    }
    contentHtml += '</table></div><div style="margin-top: 15px; margin-bottom: 5px; text-align: right;">';
    contentHtml += lzm_inputControls.createButton('new-title-btn', '', 'createGroupTitle()', t('New'), '', 'lr',
        {'margin-right': '5px', 'padding-left': '12px', 'padding-right': '12px'}, t('Create new signature'), 20, 'b');
    contentHtml += lzm_inputControls.createButton('edit-title-btn', 'ui-disabled title-edit-btns', 'editGroupTitle()', t('Edit'), '', 'lr',
        {'margin-right': '5px', 'padding-left': '12px', 'padding-right': '12px'}, t('Edit selected signature'), 20, 'b');
    contentHtml += lzm_inputControls.createButton('rm-title-btn', 'ui-disabled title-edit-btns', 'removeGroupTitle()', t('Remove'), '', 'lr',
        {'margin-right': '5px', 'padding-left': '12px', 'padding-right': '12px'}, t('Remove selected signature'), 20, 'b');
    contentHtml += '</div>' +
        '</fieldset>';

    return contentHtml;
};

AdminUserManagementClass.prototype.createGroupTitleList = function(titleList) {
    var listHtml = '<tbody>';
    for (var lang in titleList) {
        if (titleList.hasOwnProperty(lang)) {
            listHtml += '<tr id="group-title-line-' + lang + '" class="group-title-line"' +
                ' onclick="selectGroupTitle(\'' + lang + '\');" ondblclick="editGroupTitle(\'' + lang + '\');">' +
                '<td>' + lang.toUpperCase() + ' - ' + titleList[lang] + '</td></tr>';
        }
    }
    listHtml += '</tbody>';

    return listHtml;
};

AdminUserManagementClass.prototype.createGroupTitleInput = function(titles, lang) {
    var that = this, langCodeArray = Object.keys(that.availableLanguages), langList = [];
    var givenLang = lang;
    lang = (lang != '' && typeof that.availableLanguages[lang] != 'undefined') ? lang :
        (typeof that.availableLanguages[that.defaultLanguage] != 'undefined') ? that.defaultLanguage :
        langCodeArray[0];
    for (var i=0; i<langCodeArray.length; i++) {
        if ($.inArray(langCodeArray[i], Object.keys(titles)) == -1 || langCodeArray[i] == givenLang) {
            langList.push({value: langCodeArray[i], text: langCodeArray[i].toUpperCase() + ' - ' + that.availableLanguages[langCodeArray[i]]});
        }
    }
    var langDisabled = (givenLang != '') ? 'ui-disabled' : '';
    var langText = lang.toUpperCase() + ' - ' + that.availableLanguages[lang];
    var titleText = (typeof titles[givenLang] != 'undefined') ? titles[givenLang] : '';
    var inputForm = '<div id="group-title-inner-div"><fieldset class="lzm-fieldset input-fs" id="group-title-inner-fs">' +
        '<legend>' + t('Group Title (visible to all users)') + '</legend>' +
        '<div style="margin-bottom: 10px;">' +
        '<div style="margin: 0px 0px 4px 2px;"><label for="gr-title-lang" style="font-size: 11px; font-weight: bold;">' + t('Language') + '</label></div><div>' +
        lzm_inputControls.createSelect('gr-title-lang', langDisabled, '', langText, {position: 'right', gap: '0px'}, {}, '', langList, lang, 'a') +
        '</div></div>' +
        lzm_inputControls.createInput('gr-title-text', 'umg-edit-text-input', titleText, t('Title'), '', 'text', 'a') +
        '</fieldset></div>';

    window.parent.lzm_chatDisplay.settingsDisplay.userManagementAction = 'title';
    $('.umg-views').css({display: 'none'});
    $('#umg-input-view').css({'display': 'block'});
    $('#umg-input-view').html(inputForm);

    lzm_inputControls.createSelectChangeHandler('gr-title-lang', langList);
    lzm_layout.resizeGroupTitleInput();
};

AdminUserManagementClass.prototype.saveGroupTitle = function() {
    var that = this;
    var group = lzm_commonTools.clone(that.loadedGroup);
    group = (group != null) ? group : lzm_commonTools.clone(lzm_userManagement.newGroup);
    var titleList = lzm_commonTools.clone(group.humanReadableDescription);
    titleList[$('#gr-title-lang').val()] = $('#gr-title-text').val();
    var groupName = (typeof titleList[userLanguage] != 'undefined') ? titleList[userLanguage] :
        (typeof titleList[that.defaultLanguage] != 'undefined') ? titleList[that.defaultLanguage] :
            titleList[Object.keys(titleList)[0]];
    if (this.selectedGroup != '') {
        that.loadedGroup['humanReadableDescription'] = lzm_commonTools.clone(titleList);
        that.loadedGroup['name'] = groupName;
    } else {
        this.newGroup.humanReadableDescription = lzm_commonTools.clone(titleList);
        this.newGroup.name = groupName;
    }

    $('#group-title-table').html(this.createGroupTitleList(titleList));
};

AdminUserManagementClass.prototype.createGroupChatsConfiguration = function(group) {
    var limitAmountIsChecked = (group != null && group.mc != -1) ? ' checked="checked"' : '';
    var limitAmountDisabled = (group != null && group.mc != -1) ? '' : 'ui-disabled';
    var amountLimit = (group != null && group.mc != -1) ? group.mc : '2';
    var limitActionList = [{value: 0, text: t('Held in queue (similar to operator status "Busy")')},
        {value: 1, text: t('Rejected (similar to operator status "Away")')}];
    var selectedLimitAction = amountLimit < 10 ? 0 : 1;
    amountLimit = amountLimit % 10;
    var limitActionText = limitActionList[selectedLimitAction];
    var transcriptEmailList = [], firstTranscriptMb = '';
    for (var emailId in lzm_pollServer.globalConfig.site[0].dbconf.glEmail) {
        if (lzm_pollServer.globalConfig.site[0].dbconf.glEmail.hasOwnProperty(emailId)) {
            var email = lzm_pollServer.globalConfig.site[0].dbconf.glEmail[emailId];
            if (email.t == 'SMTP' || email.t == 'PHPMail') {
                firstTranscriptMb = (firstTranscriptMb == '') ? email.e : firstTranscriptMb;
                transcriptEmailList.push({value: emailId, text: email.e});
            }
        }
    }
    var selectedTranscriptEmail = (group != null) ? group.ceo : (transcriptEmailList.length > 0) ? transcriptEmailList[0].value : '';
    var transcriptEmailText = (typeof lzm_pollServer.globalConfig.site[0].dbconf.glEmail[selectedTranscriptEmail] != 'undefined') ?
        lzm_pollServer.globalConfig.site[0].dbconf.glEmail[selectedTranscriptEmail].e : firstTranscriptMb;
    var operators = this.operators.getOperatorList('name', '', true);
    var groupId = (group != null) ? group.id : '';
    var prioIsActive = (group != null && group.ps == 1) ? ' checked="checked"' : '';
    var contentHtml = '<fieldset class="lzm-fieldset"><legend>' + t('Concurrent Chat Amount') + '</legend>' +
        '<div style="margin: 10px 0px 10px 0px;">' +
        '<input type="checkbox" id="gr-limit-chat-amount"' + limitAmountIsChecked + ' style="margin-right: 10px;" />' +
        '<label for="checkbox" id="gr-limit-chat-amount">' + t('Limit Concurrent Chat Amount') + '</label>' +
        '</div><div id="gr-limit-amount-inner" class="' + limitAmountDisabled + '">' +
        lzm_inputControls.createInput('gr-limit-amount-to', 'umg-edit-text-input', amountLimit, t('Maximum number of concurrent chats per operator'), '', 'number', 'a') +
        '<div style="margin-bottom: 10px;">' +
        '<div style="margin: 0px 0px 4px 2px;"><label for="gr-limit-action" style="font-size: 11px; font-weight: bold;">' +
        t('Incoming chats exceeding this limitation will be...') + '</label></div><div>' +
        lzm_inputControls.createSelect('gr-limit-action', '', '', limitActionText, {position: 'right', gap: '0px'}, {}, '', limitActionList, selectedLimitAction, 'a') +
        '</div></div></div>' +
        '</fieldset>' +
        '<fieldset class="lzm-fieldset" style="margin-top: 10px;"><legend>' + t('Chat Transcript Emails') + '</legend>' +
        '<div style="margin-bottom: 10px;">' +
        '<div style="margin: 0px 0px 4px 2px;"><label for="gr-transcript-email" style="font-size: 11px; font-weight: bold;">' +
        t('Chat Transcript Emails will be sent through this mailbox...') + '</label></div><div>' +
        lzm_inputControls.createSelect('gr-transcript-email', '', '', transcriptEmailText, {position: 'right', gap: '0px'}, {}, '', transcriptEmailList, selectedTranscriptEmail, 'a') +
        '</div></div>' +
        '</fieldset>' +
        '<fieldset class="lzm-fieldset" style="margin-top: 10px;"><legend>' + t('Operator Priority') + '</legend>' +
        '<div style="border:1px solid #cccccc; padding: 5px; margin-bottom: 10px;">' +
        '<table class="visitor-list-table alternating-rows-table" style="width: 100%;"><thead>' +
        '<tr><th>' + t('Operator') + '</th><th style="width: 50px !important;">' + t('Priority (10 = highest)') + '</th></tr>' +
        '</thead><tbody>';
    var opPrioList = [], i = 0;
    var groupF = (group != null) ? group.f : [];
    for (i=0; i<groupF.length; i++) {
        if (groupF[i].key == 'c_prio') {
            opPrioList = lzm_commonTools.clone(groupF[i].values);
        }
    }
    for (i=0; i<operators.length; i++) {
        if ($.inArray(groupId, operators[i].groups) != -1 && operators[i].isbot != 1) {
            var opPrio = 1;
            for (var j=0; j<opPrioList.length; j++) {
                if (opPrioList[j].key == operators[i].id) {
                    opPrio = parseInt(opPrioList[j].text) + 1;
                }
            }
            contentHtml += '<tr><td>' + operators[i].userid + '</td>' +
                '<td style="text-align: right;">' +
                '<input type="number" id="op-prio-' + operators[i].id + '" data-op-id="' + operators[i].id + '" class="operator-priority-input" value="' + opPrio + '" />' +
                '</td></tr>';
        }
    }
    contentHtml += '</tbody></table>' +
        '</div><div style="margin: 10px 0px 0px 0px;">' +
        '<input type="checkbox" id="gr-op-prio-active"' + prioIsActive + ' style="margin-right: 10px;" />' +
        '<label for="checkbox" id="gr-op-prio-active">' + t('Operators with a lower priority only receive chats, when all operators with a higher priority are offline') + '</label>' +
        '</div>' +
        '</fieldset>';

    return contentHtml;
};

AdminUserManagementClass.prototype.createGroupInputFieldConfiguration = function(group) {
    var groupF = (group != null) ? group.f : [];
    var contentHtml = '<div id="gr-input-fields-placeholder" style="margin-top: 10px;"></div>';
    var createContentTable = function(cot, tableData) {
        var tableHtml = '<table class="visitor-list-table alternating-rows-table" style="width: 100%;"><thead>' +
            '<tr><th>' + t('Input') + '</th>' +
            '<th style="width: 10px !important;">' + t('Hidden') + '</th>' +
            '<th style="width: 10px !important;">' + t('Required') + '</th>' +
            '<th style="width: 10px !important;">' + t('Capitalize') + '</th>' +
            '<th style="width: 10px !important;">' + t('Masked (for Operators)') + '</th></tr>' +
            '</thead><tbody>';
        var confPrefix = (cot == 'chat') ? 'ci_' : 'ti_';
        for (var i=0; i<tableData.length; i++) {
            var hiddenChecked = '', requiredChecked = '', capitalizeChecked = '', k = 0;
            var maskList = [{value: '0', text: t('None')}, {value: '1', text: t('Completely (*********)')},
                {value: '2', text: t('Partly (P*a*n*e*t)')}, {value: '3', text: t('Partly (*****text)')},
                {value: '4', text: t('Partly (Plain****)')}];
            var selMask = 0;
            for (var j=0; j<groupF.length; j++) {
                if (groupF[j].key == confPrefix + 'hidden') {
                    for (k=0; k<groupF[j].values.length; k++) {
                        if (groupF[j].values[k].text == tableData[i].id) {
                            hiddenChecked = ' checked="checked"';
                        }
                    }
                }
                if (groupF[j].key == confPrefix + 'mandatory') {
                    for (k=0; k<groupF[j].values.length; k++) {
                        if (groupF[j].values[k].text == tableData[i].id) {
                            requiredChecked = ' checked="checked"';
                        }
                    }
                }
                if (groupF[j].key == confPrefix + 'cap') {
                    for (k=0; k<groupF[j].values.length; k++) {
                        if (groupF[j].values[k].key == tableData[i].id && groupF[j].values[k].text == 1) {
                            capitalizeChecked = ' checked="checked"';
                        }
                    }
                }
                if (groupF[j].key == confPrefix + 'masked') {
                    for (k=0; k<groupF[j].values.length; k++) {
                        if (groupF[j].values[k].key == tableData[i].id) {
                            selMask = parseInt(groupF[j].values[k].text);
                        }
                    }
                }
            }
            var selText = maskList[selMask];
            tableHtml += '<tr>' +
                '<td>' + tableData[i].name + '</td>' +
                '<td style="text-align: center;">' +
                '<input type="checkbox" id="gr-ift-hidden-' + cot + '-' + tableData[i].id + '" data-input-id="' + tableData[i].id + '"' +
                ' style="vertical-align: middle;"' + hiddenChecked + ' />' +
                '</td>' +
                '<td style="text-align: center;">' +
                '<input type="checkbox" id="gr-ift-mandatory-' + cot + '-' + tableData[i].id + '" data-input-id="' + tableData[i].id + '"' +
                ' style="vertical-align: middle;"' + requiredChecked + ' />' +
                '</td>' +
                '<td style="text-align: center;">' +
                '<input type="checkbox" id="gr-ift-cap-' + cot + '-' + tableData[i].id + '" data-input-id="' + tableData[i].id + '"' +
                ' style="vertical-align: middle;"' + capitalizeChecked + ' />' +
                '</td>' +
                '<td style="text-align: center;">' +
                lzm_inputControls.createSelect('gr-ift-masked-' + cot + '-' + tableData[i].id, 'gr-input-field-select', '', selText,
                    {position: 'right', gap: '0px'}, {}, '', maskList, selMask, 'a',  {'input-id': tableData[i].id}) +
                '</td>' +
                '</tr>';
        }
        tableHtml += '</tbody></table>';

        return tableHtml;
    };
    var inputList = this.inputList.getCustomInputList('full', true);
    var inputSort = function(a, b) {
        var rt = 0;
        if (parseInt(a.id) >= 111 && parseInt(b.id) < 111) {
            rt = -1;
        } else if (parseInt(a.id) < 111 && parseInt(b.id) >= 111) {
            rt = 1;
        }
        return rt;
    };
    inputList.sort(inputSort);
    var chatTabContent = '<fieldset class="lzm-fieldset" id="gr-input-fields-chat-fs"><legend>' + t('Chat / Callback Login Inputs') + '</legend>' +
        createContentTable('chat', inputList) +
        '</fieldset>';
    var ticketTabContent = '<fieldset class="lzm-fieldset" id="gr-input-fields-ticket-fs"><legend>' + t('Ticket Inputs') + '</legend>' +
        createContentTable('ticket', inputList) +
        '</fieldset>';
    var tabArray = [{name: t('Chat'), content: chatTabContent}, {name: t('Ticket'), content: ticketTabContent}];

    return {html: contentHtml, tabs: tabArray};
};

AdminUserManagementClass.prototype.createGroupTicketsConfiguration = function(group, selectedTab) {
    selectedTab = (typeof selectedTab != 'undefined') ? selectedTab : 0;
    var contentHtml = '<div id="gr-tickets-placeholder" style="margin-top: 10px;"></div>';
    var outMbList = [], inMbList = [], i = 0, firstOutMb = '';
    for (var emailId in lzm_pollServer.globalConfig.site[0].dbconf.glEmail) {
        if (lzm_pollServer.globalConfig.site[0].dbconf.glEmail.hasOwnProperty(emailId)) {
            var email = lzm_pollServer.globalConfig.site[0].dbconf.glEmail[emailId];
            if (email.t == 'SMTP' || email.t == 'PHPMail') {
                outMbList.push({value: emailId, text: email.e});
                firstOutMb = (firstOutMb == '') ? email.e : firstOutMb;
            } else if (email.t == 'POP' || email.t == 'IMAP') {
                inMbList.push({value: emailId, text: email.e});
            }
        }
    }
    var selOutMb = (group != null && typeof group.teo != 'undefined' && group.teo != 'CLIENT') ? group.teo : (outMbList.length > 0) ? outMbList[0].value : '';
    var outMbText = (typeof lzm_pollServer.globalConfig.site[0].dbconf.glEmail[selOutMb] != 'undefined') ?
        lzm_pollServer.globalConfig.site[0].dbconf.glEmail[selOutMb].e : firstOutMb;
    var inActionList = [{value: 0, text: t('Raise new ticket automatically')}, {value: 1, text: t('Review manually')},
        {value: 2, text: t('Ignore')}];
    var selInAction = (group != null) ? parseInt(group.thue) : 1;
    var inActionText = inActionList[selInAction].text;
    var socialMediaList = [], autoAssignList = [];
    var groupF = (group != null) ? group.f : [];
    for (i=0; i<groupF.length; i++) {
        if (groupF[i].key == 'c_smc') {
            socialMediaList = lzm_commonTools.clone(groupF[i].values);
        }
        if (groupF[i].key == 'ti_assign') {
            autoAssignList = lzm_commonTools.clone(groupF[i].values);
        }
    }
    var incomingMailList = [];
    var groupTei = (group != null) ? group.tei : [];
    for (i=0; i<groupTei.length; i++) {
        incomingMailList.push(groupTei[i].id);
    }
    var operators = this.operators.getOperatorList('name', '', true);
    var groupId = (group != null) ? group.id : '';
    var assList = [{value: 0, text: t('No Assignment')}, {value: 1, text: t('<!--number-->%', [['<!--number-->', '10']])},
        {value: 2, text: t('<!--number-->%', [['<!--number-->', '20']])}, {value: 3, text: t('<!--number-->%', [['<!--number-->', '30']])},
        {value: 4, text: t('<!--number-->%', [['<!--number-->', '40']])}, {value: 5, text: t('<!--number-->%', [['<!--number-->', '50']])},
        {value: 6, text: t('<!--number-->%', [['<!--number-->', '60']])}, {value: 7, text: t('<!--number-->%', [['<!--number-->', '70']])},
        {value: 8, text: t('<!--number-->%', [['<!--number-->', '80']])}, {value: 9, text: t('<!--number-->%', [['<!--number-->', '90']])},
        {value: 10, text: t('<!--number-->%', [['<!--number-->', '100']])}];
    var clientChecked = (group != null && group.teo == 'CLIENT') ? ' checked="checked"' : '';
    var lzChecked = (group == null || group.teo != 'CLIENT') ? ' checked="checked"' : '';

    var emailTabContent = '<fieldset class="lzm-fieldset" id="gr-tickets-email-out-fs"><legend>' + t('Outgoing Emails') + '</legend>' +
        '<div style="margin-top: 15px;"><input type="radio" name="gr-tickets-out-mta" class="gr-tickets-out-mta-radio" id="gr-tickets-out-client"' + clientChecked +
        ' style="margin-right: 10px;" />' +
        '<label for="gr-tickets-out-client">' + t('Operators will send emails through the local email client (Outlook, Thunderbird etc)') + '</label></div>' +
        '<div style="margin-top: 15px;"><input type="radio" name="gr-tickets-out-mta" class="gr-tickets-out-mta-radio" id="gr-tickets-out-lz"' + lzChecked +
        ' style="margin-right: 10px;" />' +
        '<label for="gr-tickets-out-lz">' + t('Operators will send emails through LiveZilla') + '</label></div>' +
        '<div style="margin: 10px 0px 10px 30px;">' +
        lzm_inputControls.createSelect('gr-tickets-out-mb', '', '', outMbText, {position: 'right', gap: '0px'}, {}, '', outMbList, selOutMb, 'a') +
        '</div>' +
        '</fieldset>' +
        '<fieldset class="lzm-fieldset" id="gr-tickets-email-in-fs" style="margin-top: 10px;"><legend>' + t('Incoming Emails') + '</legend>' +
        '<div id="gr-ticket-in-mb-div" style="border: 1px solid #cccccc; padding: 10px; margin: 10px 0px 15px;">' +
        '<table class="visitor-list-table alternating-rows-table" style="width: 100%;"><tbody>';
    for (i=0; i<inMbList.length; i++) {
        var inMbIsChecked = ($.inArray(inMbList[i].value, incomingMailList) != -1) ? ' checked="checked"' : '';
        emailTabContent += '<tr class="gr-ticket-in-mb-line" id="gr-ticket-in-mb-line-' + inMbList[i].value + '">' +
            '<td style="width: 1px !important;" class="icon-column"><input type="checkbox" class="ticket-in-mb-input"' +
            ' data-in-mb-id="' + inMbList[i].value + '" style="vertical-align: middle;"' + inMbIsChecked + ' /></td>' +
            '<td>' + inMbList[i].text + '</td>' +
            '</tr>';
    }
    emailTabContent += '</tbody></table>' +
        '</div>' +
        '<div style="margin-bottom: 10px;">' +
        '<div style="margin: 0px 0px 4px 2px;"><label for="gr-ticket-in-action" style="font-size: 11px; font-weight: bold;">' +
        t('Emails that can\'t be assigned to an existing ticket will be handled like this...') + '</label></div><div>' +
        lzm_inputControls.createSelect('gr-ticket-in-action', '', '', inActionText, {position: 'right', gap: '0px'}, {}, '', inActionList, selInAction, 'a') +
        '</div></div>' +
        '</fieldset>';

    var socialTabContent = this.createGroupTicketsSocialMediaTab(socialMediaList);

    var autoAssignChecked = (autoAssignList.length > 0) ? ' checked="checked"' : '';
    var routingDisabled = (autoAssignList.length == 0) ? 'ui-disabled' : '';
    var routingTabContent = '<fieldset class="lzm-fieldset" id="gr-tickets-routing-fs"><legend>' + t('Assign Tickets') + '</legend>' +
        '<div style="margin-top: 15px;"><input type="checkbox" id="gr-ticket-auto-assign"' + autoAssignChecked +
        ' style="margin-right: 10px;" />' +
        '<label for="gr-ticket-auto-assign">' + t('Auto assign new tickets to operators') + '</label></div>' +
        '<div id="gr-ticket-assign-list-div" style="margin: 10px 0px 0px 0px;" class="' + routingDisabled + '">' +
        '<table style="width: 100%;" class="visitor-list-table alternating-rows-table" id="gr-ticket-assign-list-table">' +
        '<thead><th>' + t('Operator') + '</th><th style="width: 1px !important;">' + t('Balancing') + '</th></thead><tbody>';
    for (i=0; i<operators.length; i++) {
        if ($.inArray(groupId, operators[i].groups) != -1) {
            var selAss = 0;
            for (var j=0; j<autoAssignList.length; j++) {
                if (autoAssignList[j].key == operators[i].id) {
                    selAss = parseInt(autoAssignList[j].text);
                }
            }
            var assText = assList[selAss];
            routingTabContent += '<tr id="gr-ticket-assign-list-line-' + operators[i].id + '" class="gr-ticket-assign-list-line lzm-unselectable">' +
                '<td>' + operators[i].userid + '</td>' +
                '<td>' + lzm_inputControls.createSelect('gr-taa-' + operators[i].id, 'gr-ticket-assign-select',
                '', assText, {position: 'right', gap: '0px'}, {}, '', assList, selAss, 'a') + '</td>' +
                '</tr>';
        }
    }
    routingTabContent += '</tbody>' +
        '</table></div>' +
        '</fieldset>';
    var tabArray = [{name: t('Emails'), content: emailTabContent}, {name: t('Social Media'), content: socialTabContent},
        {name: t('Routing'), content: routingTabContent}];

    return {html: contentHtml, tabs: tabArray};
};

AdminUserManagementClass.prototype.createGroupTicketsSocialMediaTab = function(socialMediaList) {
    var socialTabContent = '<fieldset class="lzm-fieldset" id="gr-tickets-social-fs"><legend>' + t('Social Media Channels') + '</legend>' +
        '<div id="gr-ticket-social-list-div" style="margin: 10px 5px;">' +
        '<table style="width: 100%;" class="visitor-list-table alternating-rows-table" id="gr-ticket-social-list-table">' +
        '<tbody>';
    for (i=0; i<socialMediaList.length; i++) {
        socialTabContent += '<tr id="social-media-list-line-' + i + '" class="social-media-list-line lzm-unselectable"' +
            ' onclick="selectSocialMedia(' + i + ');" ondblclick="editSocialMedia(' + i + ');"><td>' + socialMediaList[i].n + '</td></tr>';
    }
    socialTabContent += '</tbody>' +
        '</table></div><div style="margin-top: 15px; margin-bottom: 5px; text-align: right;">';
    /*socialTabContent += lzm_inputControls.createButton('new-social-media-btn', '', 'createSocialMedia()', t('Add Channel'), '', 'lr',
        {'margin-right': '5px', 'padding-left': '12px', 'padding-right': '12px'}, t('Create new Social Media Channel'), 20, 'b');*/
    socialTabContent += lzm_inputControls.createButton('edit-social-media-btn', 'ui-disabled smc-edit-btns', 'editSocialMedia()', t('Edit'), '', 'lr',
        {'margin-right': '5px', 'padding-left': '12px', 'padding-right': '12px'}, t('Edit selected Social Media Channel'), 20, 'b');
    socialTabContent += lzm_inputControls.createButton('rm-social-media-btn', 'ui-disabled smc-edit-btns', 'removeSocialMedia()', t('Remove'), '', 'lr',
        {'margin-right': '5px', 'padding-left': '12px', 'padding-right': '12px'}, t('Remove selected Social Media Channel'), 20, 'b');
    socialTabContent += '</div>' +
        '</fieldset>';
    return socialTabContent;
};

AdminUserManagementClass.prototype.createSocialMediaChannel = function(smc) {
    var that = this;
    var typeSelectDisabled = (smc != null) ? 'ui-disabled' : '';
    var typeList = [{value: '0', text: t('Facebook')}, {value: '1', text: t('Twitter')}];
    var selType = (smc != null) ? parseInt(smc.t) - 6 : 0;
    var smcName = (smc != null) ? smc.n : '';
    var smcId = (smc != null) ? smc.i : md5(Math.random().toString());
    var smcAccountId = (smc != null) ? smc.p : '';
    var typeIdLabel = (smc != null && smc.t == 7) ? t('Twitter Account ID') : t('Facebook Page ID');
    var contentTypeList = [{value: '0', text: t('Private Messages / Conversations')}, {value: '1', text: t('Public Feeds and Comments')}];
    var selContentType = (smc != null) ? smc.s : 0;
    var smcAccessToken = (smc != null) ? smc.text : '';
    var smcInterval = (smc != null) ? parseInt(smc.c) : 15;
    var useTrack = (smc != null && typeof smc.tr != 'undefined' && smc.tr != '') ? ' checked="checked"' : '';
    var trackDisabled = (smc != null && typeof smc.tr != 'undefined' && smc.tr != '') ? '' : 'ui-disabled';
    var smcTrack = (smc != null && typeof smc.tr != 'undefined') ? smc.tr : '';

    var inputForm = '<div id="social-media-inner-div"><fieldset class="lzm-fieldset input-fs" id="social-media-inner-fs">' +
        '<legend>' + t('Social Media Channel') + '</legend>' +
        '<input type="hidden" id="smc-id" value="' + smcId + '" />' +
        '<div style="margin-bottom: 10px;">' +
        '<div style="margin: 0px 0px 4px 2px;"><label for="smc-type" style="font-size: 11px; font-weight: bold;">' + t('Language') + '</label></div><div>' +
        lzm_inputControls.createSelect('smc-type', typeSelectDisabled, '', typeList[selType], {position: 'right', gap: '0px'}, {}, '', typeList, selType, 'a') +
        '</div></div>' +
        lzm_inputControls.createInput('smc-name', 'umg-edit-text-input', smcName, t('Name'), '', 'text', 'a') +
        lzm_inputControls.createInput('smc-account-id', 'umg-edit-text-input', smcAccountId, typeIdLabel, '', 'text', 'a') +
        '<div style="margin-bottom: 10px;">' +
        '<div style="margin: 0px 0px 4px 2px;"><label for="smc-content-type" style="font-size: 11px; font-weight: bold;">' + t('Language') + '</label></div><div>' +
        lzm_inputControls.createSelect('smc-content-type', typeSelectDisabled, '', contentTypeList[selContentType], {position: 'right', gap: '0px'}, {}, '',
            contentTypeList, selContentType, 'a') +
        '</div></div>'/*<table style="width: 100%;"><tr><td>'*/ +
        lzm_inputControls.createInput('smc-access-token', 'umg-edit-text-input ui-disabled', smcAccessToken, t('Access Token (required)'), '', 'text', 'a') +
        /*'</td><td style="width: 1px !important; padding-top: 10px;">' +
        lzm_inputControls.createButton('smc-create-token', '', 'createSmcAccessToken()', t('Create / Renew'), '', 'lr', {}, t('Create / Renew the access token'), '25', 'a') +
        '</td></tr></table>' +*/
        lzm_inputControls.createInput('smc-check-interval', '', smcInterval, t('Check for new messages every... (minutes)'), '', 'number', 'a');
    if (smc != null && smc.t == 7) {
        inputForm += '<fieldset class="lzm-fieldset"><legend>' + t('Tweets') + '</legend>' +
            '<div style="margin-top: 10px;" class="ui-disabled"><input type="checkbox" id="smc-use-me" checked="checked" style="margin-right: 10px;" />' +
            '<label for="smc-use-me">' + t('Create tickets from every tweet mentioning me') + '</label></div>' +
            '<div style="margin-top: 10px;"><input type="checkbox" id="smc-use-track"' + useTrack + ' style="margin-right: 10px;" />' +
            '<label for="smc-use-track">' + t('Create tickets from tweets containing one of these hashtags (comma separated)') + '</label></div>' +
            lzm_inputControls.createInput('smc-track', trackDisabled, smcTrack, t('Hashtags'), '', 'text', 'a') +
            '</fieldset>';
    }
    inputForm += '</fieldset>';

    window.parent.lzm_chatDisplay.settingsDisplay.userManagementAction = 'smc';
    $('.umg-views').css({display: 'none'});
    $('#umg-input-view').css({'display': 'block'});
    $('#umg-input-view').html(inputForm);

    lzm_layout.resizeSocialMediaInput();

    $('#smc-check-interval').change(function() {
        var interval = parseInt($('#smc-check-interval').val());
        if (isNaN(interval) || interval < 15) {
            interval = 15;
        } else if (interval > 65535) {
            interval = 65535;
        }
        $('#smc-check-interval').val(interval)
    });
    $('#smc-type').change(function() {
        $('#smc-type-inner-text').html($('#smc-type option:selected').text());
        if ($('#smc-type').val() == 0) {
            $('#smc-account-id-label').html(t('Facebook Page ID'));
        } else {
            $('#smc-account-id-label').html(t('Twitter Account ID'));
        }
    });
    $('#smc-content-type').change(function() {
        $('#smc-content-type-inner-text').html($('#smc-content-type option:selected').text());
    });
};

AdminUserManagementClass.prototype.saveSocialMediaChannel = function() {
    var that = this;
    var smcId = $('#smc-id').val();
    var smcName = $('#smc-name').val();
    var smcAccountId = $('#smc-account-id').val();
    var smcType = parseInt($('#smc-type').val()) + 6;
    var smcContentType = $('#smc-content-type').val();
    var smcAccessToken = $('#smc-access-token').val();
    var smcCheckInterval = $('#smc-check-interval').val();
    var smcTrack = ($('#smc-use-track').prop('checked')) ? $('#smc-track').val() : '';

    var smc = {i: smcId, n: smcName, t: smcType.toString(), s: smcContentType, p: smcAccountId, text: smcAccessToken, c: smcCheckInterval, d: '', tr: smcTrack};
    var group = lzm_commonTools.clone(that.loadedGroup);
    var myF = (group != null) ? lzm_commonTools.clone(group.f) : lzm_commonTools.clone(that.newGroup.f);

    for (var i=0; i<myF.length; i++) {
        if (myF[i].key == 'c_smc') {
            var isNewSmc = true;
            var smcText = '';
            for (var j=0; j<myF[i].values.length; j++) {
                if (myF[i].values[j].i == smcId) {
                    smcText += smcAccessToken;
                    isNewSmc = false;
                    myF[i].values[j] = smc;
                } else {
                    smcText += myF[i].values[j].text;
                }
            }
            if (isNewSmc) {
                myF[i].values.push(smc);
                smcText += smcAccessToken;
            }
            myF[i].text = smcText;
            if (group != null) {
                that.loadedGroup['f'] = lzm_commonTools.clone(myF);
                group = lzm_commonTools.clone(that.loadedGroup);
            } else {
                lzm_userManagement.newGroup.f = myF;
                group = lzm_commonTools.clone(lzm_userManagement.newGroup);
            }
        }
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

AdminUserManagementClass.prototype.createGroupHoursConfiguration = function(group) {
    var that = this, ohs = (group != null) ? lzm_commonTools.clone(group.ohs) : [];
    var getHumanTime = function (timeString) {
        var seconds = parseInt(timeString) % 60;
        var rest = (parseInt(timeString) - seconds) / 60;
        var minutes = rest % 60;
        var hours = (rest - minutes) / 60;
        return lzm_commonTools.pad(hours, 2) + ':' + lzm_commonTools.pad(minutes, 2);
    };
    ohs.sort(that.sortOhs);
    var contentHtml = '<fieldset class="lzm-fieldset"><legend>' + t('Schedule (Opening Hours)') + '</legend>' +
        '<div>' + t('Operators of this group will not receive any chats outside of the chat opening times.') +
        ' ' + t('If no opening hours are specified, then chats are always possible.') + '</div>' +
        '<div id="gr-oh-list-div" style="border: 1px solid #cccccc; padding: 10px; margin: 10px 0px;">' +
        '<table class="visitor-list-table alternating-rows-table" style="width: 100%"><thead>' +
        '<tr><th style="text-align: center;">' + t('Monday') + '</th><th style="text-align: center;">' + t('Tuesday') + '</th>' +
        '<th style="text-align: center;">' + t('Wednesday') + '</th><th style="text-align: center;">' + t('Thursday') + '</th>' +
        '<th style="text-align: center;">' + t('Friday') + '</th><th style="text-align: center;">' + t('Saturday') + '</th>' +
        '<th style="text-align: center;">' + t('Sunday') + '</th></tr>' +
        '</thead><tbody>';
    for (var i=0; i<ohs.length; i++) {
        var lineHtml = '<tr class="gr-oh-list-line lzm-unselectable" id="gr-oh-list-line-' + i + '" onclick="selectOpeningHour(' + i + ');">';
        for (j=0; j<7; j++) {
            if (parseInt(ohs[i].text) - 1 == j) {
                var ohO = getHumanTime(ohs[i].open);
                var ohC = getHumanTime(ohs[i].close);
                lineHtml += '<td style="text-align: center; background: #FFFFE1;">' + ohO + ' - ' + ohC + '</td>';
            } else {
                lineHtml += '<td>&nbsp;</td>';
            }
        }
        lineHtml += '</tr>';
        contentHtml += lineHtml;
    }
    contentHtml += '</tbody></table>' +
        '</div><div style="margin-top: 15px; margin-bottom: 5px; text-align: right;">';
    contentHtml += lzm_inputControls.createButton('new-group-oh-btn', '', 'createOpeningHour()', t('Add Hours'), '', 'lr',
        {'margin-right': '5px', 'padding-left': '12px', 'padding-right': '12px'}, '', 20, 'b');
    contentHtml += lzm_inputControls.createButton('clear-group-oh-btn', '', 'clearOpeningHours()', t('Clear Hours'), '', 'lr',
        {'margin-right': '5px', 'padding-left': '12px', 'padding-right': '12px'}, '', 20, 'b');
    contentHtml += lzm_inputControls.createButton('rm-group-oh-btn', 'ui-disabled oh-edit-btns', 'removeOpeningHour()', t('Remove'), '', 'lr',
        {'margin-right': '0px', 'padding-left': '12px', 'padding-right': '12px'}, '', 20, 'b');
    contentHtml += '</div>' +
        '</fieldset>';
    return contentHtml;
};

AdminUserManagementClass.prototype.sortOhs = function(a, b) {
    var aDay = parseInt(a.text), bDay = parseInt(b.text);
    var aOpen = parseInt(a.open), bOpen = parseInt(b.open);
    var rt = 0;
    if (aDay > bDay) {
        rt = 1;
    } else if (aDay < bDay) {
        rt = -1;
    } else {
        if (aOpen > bOpen) {
            rt = 1;
        } else if (aOpen < bOpen) {
            rt = -1;
        }
    }
    return rt;
};

AdminUserManagementClass.prototype.createOpeningHours = function(oh) {
    var that = this;
    var weekDayList = [{value: '0', text: t('Monday')}, {value: '1', text: t('Tuesday')}, {value: '2', text: t('Wednesday')},
        {value: '3', text: t('Thursday')}, {value: '4', text: t('Friday')}, {value: '5', text: t('Saturday')}, {value: '6', text: t('Sunday')}];

    var inputForm = '<div id="opening-hours-inner-div"><fieldset class="lzm-fieldset input-fs" id="opening-hours-inner-fs">' +
        '<legend>' + t('Add Hours (24-hour clock)') + '</legend>' +
        lzm_inputControls.createSelect('oh-weekday', '', '', weekDayList[0].text, {position: 'right', gap: '0px'}, {}, '', weekDayList, 0, 'a') +
        '<table style="width: 400px; margin-top: 10px;"><tr><td style="text-align: left;">' +
        lzm_inputControls.createInput('oh-open', 'umg-edit-text-input oh-time', '08:00', t('Open at (hh:mm)'), '', 'time', 'a') +
        '</td><td style="text-align: left;">' +
        lzm_inputControls.createInput('oh-close', 'umg-edit-text-input oh-time', '17:00', t('Close at (hh:mm)'), '', 'time', 'a') +
        '</td></tr></table>' +
        '</fieldset></div>';

    window.parent.lzm_chatDisplay.settingsDisplay.userManagementAction = 'oh';
    $('.umg-views').css({display: 'none'});
    $('#umg-input-view').css({'display': 'block'});
    $('#umg-input-view').html(inputForm);

    $('.oh-time').change(function() {
        var myVal = $(this).val();
        var isTimeStamp = false;
        if (myVal.indexOf(':') != -1) {
            var hours = parseInt(myVal.split(':')[0]);
            var minutes = parseInt(myVal.split(':')[1]);
            if (!isNaN(hours) && hours >= 0 && hours <= 23 && !isNaN(minutes) && minutes >= 0 && minutes <= 59) {
                isTimeStamp = true;
            }
        }
        if (!isTimeStamp) {
            if ($(this).attr('id') == 'oh-open') {
                myVal = '08:00';
            } else {
                myVal = '17:00';
            }
        }
        $(this).val(myVal);
    });
    $('#oh-weekday').change(function() {
        $('#oh-weekday-inner-text').html($('#oh-weekday option:selected').text());
    });
    lzm_layout.resizeOpeningHoursInput();
};

AdminUserManagementClass.prototype.saveOpeningHours = function() {
    var that = this;
    var ohDay = parseInt($('#oh-weekday').val()) + 1;
    var ohOpen = $('#oh-open').val();
    var ohClose = $('#oh-close').val();
    var calcTimeStampFromInput = function(inputString) {
        var timeStamp = 0;
        var hours = inputString.split(':')[0];
        var minutes = inputString.split(':')[1];
        timeStamp = parseInt(hours) * 3600 + parseInt(minutes * 60);
        return timeStamp;
    };

    var oh={text: ohDay.toString(), open: calcTimeStampFromInput(ohOpen), close: calcTimeStampFromInput(ohClose)};
    var group = lzm_commonTools.clone(that.loadedGroup), ohs = [];
    if (oh.open < oh.close) {
        if (group != null) {
            ohs = lzm_commonTools.clone(group.ohs);
            ohs.push(oh);
            ohs.sort(that.sortOhs);
            that.loadedGroup['ohs'] = lzm_commonTools.clone(ohs);
            group = lzm_commonTools.clone(that.loadedGroup);
        } else {
            ohs = lzm_commonTools.clone(that.newGroup.ohs);
            ohs.push(oh);
            ohs.sort(that.sortOhs);
            that.newGroup.ohs = lzm_commonTools.clone(ohs);
            group = lzm_commonTools.clone(that.newGroup);
        }
        $('.umg-edit-placeholder-content').each(function() {
            if ($(this).data('hash') == 'opening-hours') {
                $(this).html(that.createGroupHoursConfiguration(group));
            }
        });
    }
};

AdminUserManagementClass.prototype.hideInputDialog = function() {
    $('.umg-views').css({display: 'none'});
    $('#umg-edit-view').css({'display': 'block'});
    $('#umg-input-view').html('');
    lzm_layout.resizeAll();
};

/********** Helper function ***********/
AdminUserManagementClass.prototype.createEmptyUser = function(userType) {
    var emptyUser = {perms: this.newOpPerms, pp: ''};
    if (typeof userType != 'undefined' && userType == 'bot') {
        emptyUser.pp = this.newBotPic;
    }

    return emptyUser;
};

AdminUserManagementClass.prototype.createEmptyGroup = function() {
    var that = this;
    var ciMaskedText = '', ciMaskedValues = [], tiMaskedText = '', tiMaskedValues = [];
    var inputs = that.inputList.getCustomInputList('full', true);
    for (var i=0; i<inputs.length; i++) {
        ciMaskedText += '0';
        tiMaskedText += '0';
        ciMaskedValues.push({text: '0', key: inputs[i].id});
        tiMaskedValues.push({text: '0', key: inputs[i].id});
    }
    var emptyGroup = {
        ohs: [],
        f: [{text: '1',values:[], key: 'gr_ex_sm'},
            {text: '1',values:[], key: 'gr_ex_so'},
            {text: '1',values:[], key: 'gr_ex_pr'},
            {text: '1',values:[], key: 'gr_ex_ra'},
            {text: '0',values:[], key: 'gr_ex_fv'},
            {text: '1',values:[], key: 'gr_ex_fu'},
            {text: '',values:[], key: 'ci_hidden'},
            {text: '',values:[], key: 'ti_hidden'},
            {text: '',values:[], key: 'ci_mandatory'},
            {text: '',values:[], key: 'ti_mandatory'},
            {text: ciMaskedText, values: ciMaskedValues, key: 'ci_masked'},
            {text: tiMaskedText, values: tiMaskedValues, key: 'ti_masked'},
            {text: '',values:[], key: 'ti_cap'},
            {text: '',values:[], key: 'ci_cap'},
            {text: '',values:[], key: 'ti_assign'},
            {text: '',values:[], key: 'c_prio'},
            {text: '',values:[], key: 'c_smc'}
        ],
        humanReadableDescription: {},
        pm : that.newPm
    };

    return emptyGroup;
};

/********** Context menus **********/
AdminUserManagementClass.prototype.showContextMenu = function(place, myObject, mouseX, mouseY, button) {
    var that = this;
    button = (typeof button != 'undefined') ? button : '';
    var myHeight = 200, contextX = mouseX + 'px', contextY = mouseY + 'px', contextMenuName = place;
    var filterList, i, myVisibility;
    $('#' + place + '-context').remove();

    var contextMenuHtml = '<div class="lzm-unselectable" id="' + contextMenuName + '-context" style="position: absolute; background-color: #f1f1f1;' +
        ' padding: 5px; border: 1px solid #ccc; border-radius: 2px; z-index: 10; overflow-y: auto; overflow-x: hidden;"' +
        ' onclick="handleContextMenuClick(event);">';
    if (place == 'signature-inner-div') {
        contextMenuHtml += that.createSignatureContextMenuHtml();
    } else if (place == 'text-emails-inner-div') {
        contextMenuHtml += that.createTextAndEmailsContextMenuHtml(myObject.taIdPrefix, myObject.taId);
    } else if (place != 'new-btn') {
        contextMenuHtml += that.createContextMenuContent(place, myObject);
    } else {
        contextMenuHtml += that.createNewObjectMenu();
    }
    contextMenuHtml += '</div>';

    var myParent = 'body';
    var checkSizeDivHtml = '<div id="context-menu-check-size-div" style="position:absolute; left: -1000px; top: -1000px;' +
        ' width: 800px; height: 800px;"></div>';
    $('body').append(checkSizeDivHtml);
    $('#context-menu-check-size-div').html(contextMenuHtml);
    var parentWidth = $(myParent).width();
    var parentHeight = $(myParent).height();
    var contextWidth = $('#' + contextMenuName + '-context').width() + 20;
    var contextHeight = Math.min(parentHeight - 24, $('#' + contextMenuName + '-context').height());

    if (parentHeight != null && parentWidth != null) {
        var remainingHeight = parentHeight - mouseY;
        var remainigWidth = parentWidth - mouseX;
        var widthDiff = remainigWidth - contextWidth - 12;
        var heightDiff = remainingHeight - contextHeight - 12;
        if (widthDiff < 0) {
            contextX = Math.max((mouseX - contextWidth - 12), 5) + 'px';
        }
        if (heightDiff < 0) {
            contextY = Math.max((mouseY - contextHeight - 12), 5) + 'px';
        }
    }

    $('#context-menu-check-size-div').remove();
    contextMenuHtml = contextMenuHtml.replace(/%CONTEXTX%/g, parseInt(contextX)).replace(/%CONTEXTY%/g, parseInt(contextY))
        .replace(/%MYWIDTH%/g, parseInt(contextWidth)).replace(/%MYHEIGHT%/g, parseInt(contextHeight));
    $(myParent).append(contextMenuHtml);
    var myStyleObject = {left: contextX, width: contextWidth+'px', height: contextHeight+'px'};
    if (button == 'ticket-message-actions') {
        myStyleObject.bottom = '30px';
    } else if (button == 'chat-actions' && myObject.button == 'actions') {
        myStyleObject.bottom = '77px';
    } else {
        myStyleObject.top = contextY;
    }
    $('#' + contextMenuName + '-context').css(myStyleObject);
};

AdminUserManagementClass.prototype.createContextMenuContent = function(tab, myObject) {
    var disabledClass = '', contextMenuHtml = '';
    disabledClass= (false) ? ' class="ui-disabled"' : '';
    contextMenuHtml += '<div' + disabledClass + ' style="margin: 0px 0px 8px 0px; text-align: left; white-space: nowrap;">' +
        '<i class="fa fa-plus" style="padding-left: 4px;"></i>' +
        '<span id="umg-ctxt-new" class="cm-line cm-click" style=\'margin-left: 5px;' +
        ' padding: 1px 15px 1px 7px; cursor:pointer;\' onclick="createListObject(null);">' +
        t('New') + '</span></div><hr />';
    disabledClass= (false) ? ' class="ui-disabled"' : '';
    contextMenuHtml += '<div' + disabledClass + ' style="margin: 0px 0px 8px 0px; text-align: left; white-space: nowrap;">' +
        '<i class="fa fa-edit" style="padding-left: 4px;"></i>' +
        '<span id="umg-ctxt-edit" class="cm-line cm-click" style=\'margin-left: 5px;' +
        ' padding: 1px 15px 1px 4px; cursor:pointer;\' onclick="editListObject(\'' + myObject.id + '\', event);">' +
        t('Edit') + '</span></div>';
    disabledClass= (false) ? ' class="ui-disabled"' : '';
    contextMenuHtml += '<div' + disabledClass + ' style="margin: 0px 0px 8px 0px; text-align: left; white-space: nowrap;">' +
        '<i class="fa fa-remove" style="padding-left: 4px;"></i>' +
        '<span id="umg-ctxt-rm" class="cm-line cm-click" style=\'margin-left: 5px;' +
        ' padding: 1px 15px 1px 7px; cursor:pointer;\' onclick="removeListObject(\'' + myObject.id + '\', event);">' +
        t('Remove') + '</span></div><hr />';
    if (this.selectedListTab == 'user') {
        contextMenuHtml += '<div' + disabledClass + ' style="margin: 0px 0px 8px 0px; text-align: left; white-space: nowrap;">' +
            '<span id="umg-ctxt-edit" class="cm-line cm-click" style=\'margin-left: 5px;' +
            ' padding: 1px 15px 1px 20px; cursor:pointer;\' onclick="copyOperator(\'' + myObject.id + '\', event);">' +
            t('Copy this operator') + '</span></div>';
        contextMenuHtml += '<div' + disabledClass + ' style="margin: 0px 0px 8px 0px; text-align: left; white-space: nowrap;">' +
            '<span id="umg-ctxt-edit" class="cm-line cm-click" style=\'margin-left: 5px;' +
            ' padding: 1px 15px 1px 20px; cursor:pointer;\' onclick="showSubMenu(\'user\', \'' + myObject.id + '\', %CONTEXTX%, %CONTEXTY%, %MYWIDTH%, %MYHEIGHT%)">' +
            t('Copy permissions from') + '</span><i class="fa fa-chevron-right lzm-ctxt-right-fa"></i></div>';
    }

    return contextMenuHtml;
};

AdminUserManagementClass.prototype.showSubMenu = function(place, objectId, contextX, contextY, menuWidth, menuHeight) {
    var that = this, i = 0;
    var getScrollBarWidth = function() {
        var htmlString = '<div id="get-scrollbar-width-div" style="position: absolute; left: 0px; top: -9999px;' +
            'width: 100px; height:100px; overflow-y:scroll;"></div>';
        $('body').append(htmlString).trigger('create');
        var getScrollbarWidthDiv = $('#get-scrollbar-width-div');
        var scrollbarWidth = getScrollbarWidthDiv[0].offsetWidth - getScrollbarWidthDiv[0].clientWidth;
        getScrollbarWidthDiv.remove();

        return scrollbarWidth;
    };
    var contextMenuHtml = '<div class="lzm-unselectable" id="' + place + '-context" style="position: absolute; background-color: #f1f1f1;' +
        ' padding: 5px; border: 1px solid #ccc; border-radius: 4px; overflow-x: hidden; overflow-y: auto;"' +
        ' onclick="handleContextMenuClick(event);">';
    contextMenuHtml += '<div style="margin: 0px 0px 4px 0px; text-align: left; white-space: nowrap;">' +
        '<i class="fa fa-chevron-left lzm-ctxt-left-fa"></i>' +
        '<span id="show-super-menu" class="cm-line cm-click" style=\'margin-left: 5px;' +
        ' padding: 1px 15px 1px 7px; cursor:pointer;\'' +
        ' onclick="showSuperMenu(\'' + place + '\', ' + contextX + ', ' + contextY + ', ' + menuWidth + ', ' + menuHeight + ')">' +
        t('Back') + '</span></div><hr />';
    switch(place) {
        case 'user':
            var operators = that.operators.getOperatorList('', '', true);
            for (i=0; i<operators.length; i++) {
                if (operators[i].id != objectId) {
                    contextMenuHtml += '<div style="margin: 0px 0px 8px 0px; text-align: left; white-space: nowrap;">' +
                        '<span id="umg-ctxt-edit" class="cm-line cm-click" style=\'margin-left: 5px;' +
                        ' padding: 1px 15px 1px 20px; cursor:pointer;\' onclick="copyOpPermsFrom(\'' + objectId + '\', \'' + operators[i].id + '\', event);">' +
                        operators[i].name + '</span></div>';
                }
            }
            break;
    }
    contextMenuHtml += '</div>';

    var myParent = 'body';
    if (place != 'body' && place != 'ticket-details' && place != 'visitor-list-table-div') {
        myParent = '#' + place + '-body';
    } else if (place != 'body') {
        myParent = '#' + place;
    }
    var checkSizeDivHtml = '<div id="context-menu-check-size-div" style="position:absolute; left: -3000px; top: -3000px;' +
        ' width: 2500px; height: 2500px;"></div>';
    $('body').append(checkSizeDivHtml);
    var testContextMenuHtml = contextMenuHtml.replace(/id="/g, 'id="test-');
    $('#context-menu-check-size-div').html(testContextMenuHtml);
    var contextWidth = $('#test-' + place + '-context').width();
    var contextHeight = $('#test-' + place + '-context').height();
    contextWidth = (contextHeight > menuHeight) ? menuWidth + getScrollBarWidth() : menuWidth;
    contextHeight = Math.min(contextHeight, menuHeight);
    var contextTop = (contextHeight >= menuHeight) ? contextY : contextY + Math.round((menuHeight - contextHeight) / 2);

    $('#context-menu-check-size-div').remove();
    this.storedSuperMenu = $('#' + place + '-context').html();
    $('#' + place + '-context').replaceWith(contextMenuHtml);
    var myStyleObject = {left: contextX, width: contextWidth+'px', height: contextHeight+'px', top: contextTop};
    $('#' + place + '-context').css(myStyleObject);
};

AdminUserManagementClass.prototype.showSuperMenu = function(place, contextX, contextY, menuWidth, menuHeight) {
    var contextMenuHtml = '<div class="lzm-unselectable" id="' + place + '-context" style="position: absolute; background-color: #f1f1f1;' +
        ' padding: 5px; border: 1px solid #ccc; border-radius: 4px; overflow-x: hidden; overflow-y: auto;"' +
        ' onclick="handleContextMenuClick(event);">' + this.storedSuperMenu + '</div>';
    $('#' + place + '-context').replaceWith(contextMenuHtml);
    var myStyleObject = {left: contextX+'px', width: menuWidth+'px', height: menuHeight+'px', top: contextY+'px'};
    $('#' + place + '-context').css(myStyleObject);
};

AdminUserManagementClass.prototype.createNewObjectMenu = function() {
    var contextMenuHtml = '';
    contextMenuHtml += '<div style="margin: 0px 0px 8px 0px; text-align: left; white-space: nowrap;">' +
        '<i class="fa fa-user" style="padding-left: 4px;"></i>' +
        '<span id="umg-new-btn-op" class="cm-line cm-click" style=\'margin-left: 5px;' +
        ' padding: 1px 15px 1px 7px; cursor:pointer;\' onclick="createListObject(\'user\');">' +
        t('Operator') + '</span></div>';
    contextMenuHtml += '<div style="margin: 0px 0px 8px 0px; text-align: left; white-space: nowrap;">' +
        '<span id="umg-new-btn-bot" class="cm-line cm-click" style=\'margin-left: 5px;' +
        ' padding: 1px 15px 1px 20px; cursor:pointer;\' onclick="createListObject(\'bot\');">' +
        t('Chat Bot (Virtual Assistant)') + '</span></div><hr />';
    contextMenuHtml += '<div style="margin: 0px 0px 8px 0px; text-align: left; white-space: nowrap;">' +
        '<i class="fa fa-users" style="padding-left: 4px;"></i>' +
        '<span id="umg-new-btn-gr" class="cm-line cm-click" style=\'margin-left: 5px;' +
        ' padding: 1px 15px 1px 3px; cursor:pointer;\' onclick="createListObject(\'group\');">' +
        t('Group') + '</span></div>';
    return contextMenuHtml;
};

AdminUserManagementClass.prototype.createSignatureContextMenuHtml = function() {
    var contextMenuHtml = '';
    contextMenuHtml += '<div style="margin: 0px 0px 8px 0px; text-align: left; white-space: nowrap;">' +
        '<span id="sig-add-placeholder" class="cm-line" style=\'margin-left: 5px;' +
        ' padding: 1px 15px 1px 0px; cursor:pointer;\'>' +
        t('Add Placeholder:') + '</span></div><hr />';
    contextMenuHtml += '<div style="margin: 0px 0px 8px 0px; text-align: left; white-space: nowrap;">' +
        '<span id="sig-add-op-name" class="cm-line cm-click" style=\'margin-left: 5px;' +
        ' padding: 1px 15px 1px 20px; cursor:pointer;\' onclick="addPlaceholder(\'signature\', \'%operator_name%\');">' +
        t('Operator Name') + '</span></div>';
    contextMenuHtml += '<div style="margin: 0px 0px 8px 0px; text-align: left; white-space: nowrap;">' +
        '<span id="sig-add-op-id" class="cm-line cm-click" style=\'margin-left: 5px;' +
        ' padding: 1px 15px 1px 20px; cursor:pointer;\' onclick="addPlaceholder(\'signature\', \'%operator_id%\');">' +
        t('Operator Id') + '</span></div>';
    contextMenuHtml += '<div style="margin: 0px 0px 8px 0px; text-align: left; white-space: nowrap;">' +
        '<span id="sig-add-op-email" class="cm-line cm-click" style=\'margin-left: 5px;' +
        ' padding: 1px 15px 1px 20px; cursor:pointer;\' onclick="addPlaceholder(\'signature\', \'%operator_email%\');">' +
        t('Operator Email') + '</span></div>';
    contextMenuHtml += '<div style="margin: 0px 0px 8px 0px; text-align: left; white-space: nowrap;">' +
        '<span id="sig-add-gr-title" class="cm-line cm-click" style=\'margin-left: 5px;' +
        ' padding: 1px 15px 1px 20px; cursor:pointer;\' onclick="addPlaceholder(\'signature\', \'%group_title%\');">' +
        t('Group Title') + '</span></div>';
    contextMenuHtml += '<div style="margin: 0px 0px 8px 0px; text-align: left; white-space: nowrap;">' +
        '<span id="sig-add-gr-id" class="cm-line cm-click" style=\'margin-left: 5px;' +
        ' padding: 1px 15px 1px 20px; cursor:pointer;\' onclick="addPlaceholder(\'signature\', \'%group_id%\');">' +
        t('Group Id') + '</span></div>';

    return contextMenuHtml;
};

AdminUserManagementClass.prototype.createTextAndEmailsContextMenuHtml = function(taIdPrefix, taId) {
    var createPlaceholderMenuEntries = function(plA) {
        var plEntry = '';
        for (var i=0; i<plA.length; i++) {
            var plO = lzm_commonTools.clone(plA[i]);
            plEntry += '<div style="margin: 0px 0px 8px 0px; text-align: left; white-space: nowrap;">' +
                '<span id="tae-add-' + plO.id + '" class="cm-line cm-click" style=\'margin-left: 5px; padding: 1px 15px 1px 20px;' +
                ' cursor:pointer;\' onclick="addPlaceholder(\'' + taIdPrefix + '-' + taId + '\', \'' + plO.pl + '\');">' +
                plO.text + '</span></div>';
        }
        return plEntry;
    };
    var opGroupArray = ['text-wel', 'text-welcmb', 'text-invm', 'text-wpm', 'text-qm', 'ect', 'hct', 'et', 'ht', 'etr', 'htr', 'sct', 'st', 'str'];
    var opOpArray = ['text-wel', 'text-welcmb', 'text-invm', 'text-wpm', 'etr', 'htr', 'str'];
    var visNameArray = ['text-wel', 'text-welcmb'];
    var visGeneralArray = ['text-wel', 'text-welcmb', 'text-invm', 'text-wpm', 'text-inva', 'text-wpa', 'text-qm', 'ect', 'hct', 'et', 'ht', 'etr', 'htr', 'sct', 'st', 'str'];
    var visQuestionArray = ['text-wel', 'text-welcmb', 'ect', 'hct', 'sct'];
    var visDetailsArray = ['ect', 'hct', 'et', 'ht'];
    var visLocationArray = ['text-invm', 'text-inva', 'et', 'ht'];
    var wsNameArray = ['text-wel', 'text-welcmb', 'text-invm', 'text-inva', 'text-wpm', 'text-wpa', 'text-qm', 'ect', 'hct', 'et', 'ht', 'etr', 'htr', 'sct', 'st', 'str'];
    var wsDetailsArray = ['text-wel', 'text-welcmb', 'text-invm', 'text-inva', 'text-wpm', 'text-wpa', 'text-qm'];
    var wsSearchArray = ['text-wel', 'text-welcmb', 'text-invm', 'text-inva', 'text-wpm', 'text-wpa', 'text-qm'];
    var wsChatArray = ['text-wel', 'text-welcmb', 'ect', 'hct', 'sct'];
    var wsTimeArray = ['text-wel', 'text-welcmb', 'text-invm', 'text-wpm', 'et', 'ht', 'etr', 'htr', 'st', 'str'];
    var wsTargetArray = ['text-wpm', 'text-wpa'];
    var tiIdArray = ['et', 'ht', 'st'];
    var tiSubjArray = ['et', 'ht', 'etr', 'htr', 'st', 'str'];
    var tiTextArray = ['et', 'ht', 'st', 'str'];
    var tiQuoteArray = ['etr', 'htr'];
    var tiHashArray = ['et', 'ht', 'etr', 'htr', 'st'];
    var customArray = ['text-wel', 'text-welcmb', 'text-invm', 'text-wpm', 'text-qm', 'ect', 'hct', 'et', 'ht', 'sct', 'st', 'str'];
    var emFeArray = ['ect', 'hct', 'et', 'ht', 'etr', 'htr'];

    var opPlArrayOp = [{id: 'op-name', pl: '%operator_name%', text: t('Operator Name')},
        {id: 'op-id', pl: '%operator_id%', text: t('Operator Id')},
        {id: 'op-email', pl: '%operator_email%', text: t('Operator Email')}];
    var opPlArrayGr = [{id: 'op-gr-id', pl: '%group_id%', text: t('Operator Group')},
        {id: 'op-gr-desc', pl: '%group_description%', text: t('Operator Group Description')}];
    var visPlArrayName = [{id: 'vis-lastname', pl: '%external_lastname%', text: t('Visitor Lastname')},
        {id: 'vis-firstname', pl: '%external_firstname%', text: t('Visitor Firstname')}];
    var visPlArrayGeneral = [{id: 'vis-fullname', pl: '%external_name%', text: t('Visitor Fullname')},
        {id: 'vis-email', pl: '%external_email%', text: t('Visitor Email')},
        {id: 'vis-company', pl: '%external_company%', text: t('Visitor Company')},
        {id: 'vis-phone', pl: '%external_phone%', text: t('Visitor Phone')},
        {id: 'vis-ip', pl: '%external_ip%', text: t('Visitor IP')}];
    var visPlArrayQuestion = [{id: 'vis-question', pl: '%question%', text: t('Visitor Question')}];
    var visPlArrayDetails = [{id: 'vis-details', pl: '%details%', text: t('Visitor Details')}];
    var visPlArrayLocation = [{id: 'vis-country', pl: '%location_country%', text: t('Visitor Country <!--geo_tracking-->', [['<!--geo_tracking-->', t('(Geo Tracking)')]])},
        {id: 'vis-country-iso', pl: '%location_country_iso%', text: t('Visitor Country ISO <!--geo_tracking-->', [['<!--geo_tracking-->', t('(Geo Tracking)')]])},
        {id: 'vis-region', pl: '%location_region%', text: t('Visitor Region <!--geo_tracking-->', [['<!--geo_tracking-->', t('(Geo Tracking)')]])},
        {id: 'vis-city', pl: '%location_city%', text: t('Visitor City <!--geo_tracking-->', [['<!--geo_tracking-->', t('(Geo Tracking)')]])}];
    var wsPlArrayName = [{id: 'ws-name', pl: '%website_name%', text: t('Website Name')}];
    var wsPlArrayDetails = [{id: 'ws-page-title', pl: '%page_title%', text: t('Website Page Title')},
        {id: 'ws-page-url', pl: '%url%', text: t('Website Page URL')}];
    var wsPlArraySearch = [{id: 'ws-search-query', pl: '%searchstring%', text: t('Search Query')}];
    var wsPlArrayChat = [{id: 'ws-chat-id', pl: '%chat_id%', text: t('Chat ID')}];
    var wsPlArrayTime = [{id: 'ws-time', pl: '%localtime%', text: t('Local Time')},
        {id: 'ws-date', pl: '%localdate%', text: t('Local Date')}];
    var wsPlArrayTarget = [{id: 'ws-target-url', pl: '%target_url%', text: t('Target URL')}];
    var tiPlArrayId = [{id: 'ti-id', pl: '%ticket_id%', text: t('Ticket ID')}];
    var tiPlArraySubject = [{id: 'ti-subject', pl: '%subject%', text: t('Ticket Subject / URL')}];
    var tiPlArrayText = [{id: 'ti-text', pl: '%mailtext%', text: t('Ticket Text')}];
    var tiPlArrayQuote = [{id: 'ti-quote', pl: '%quote%', text: t('Ticket Quote')}];
    var tiPlArrayHash = [{id: 'ti-hash', pl: '%ticket_hash%', text: t('Ticket Hash')}];
    var emFeArrayLink = [{id: 'em-feedback', pl: '%feedback_link%', text: t('Feedback Link')}];
    var customPlArray = [];
    var inputs = this.inputList.getCustomInputList('custom', true);
    for (var i=0; i<inputs.length; i++) {
        customPlArray.push({id: 'cu-' + inputs[i].id, pl: '%custom' + inputs[i].id + '%', text: inputs[i].name});
    }

    var contextMenuHtml = '';
    var disabledClass = ($.inArray(taId, ['text-ti', 'text-ci', 'text-ccmbi']) != -1) ? ' class="ui-disabled"' : '';
    contextMenuHtml += '<div' + disabledClass + ' style="margin: 0px 0px 8px 0px; text-align: left;">' +
        '<span id="sig-add-placeholder" class="cm-line" style=\'margin-left: 5px;' +
        ' padding: 1px 15px 1px 0px; cursor:pointer;\'>' +
        t('Add Placeholder:') + '</span></div>';
    if ($.inArray(taId, ['text-ti', 'text-ci', 'text-ccmbi']) == -1) {
        contextMenuHtml += '<hr />';
    }
    if ($.inArray(taId, opOpArray) != -1) {
        contextMenuHtml += createPlaceholderMenuEntries(opPlArrayOp);
    }
    if ($.inArray(taId, opGroupArray) != -1) {
        contextMenuHtml += createPlaceholderMenuEntries(opPlArrayGr);
    }
    if ($.inArray(taId, opGroupArray.concat(opOpArray)) != -1) {
        contextMenuHtml += '<hr />';
    }
    if ($.inArray(taId, visNameArray) != -1) {
        contextMenuHtml += createPlaceholderMenuEntries(visPlArrayName);
    }
    if ($.inArray(taId, visGeneralArray) != -1) {
        contextMenuHtml += createPlaceholderMenuEntries(visPlArrayGeneral);
    }
    if ($.inArray(taId, visQuestionArray) != -1) {
        contextMenuHtml += createPlaceholderMenuEntries(visPlArrayQuestion);
    }
    if ($.inArray(taId, visDetailsArray) != -1) {
        contextMenuHtml += createPlaceholderMenuEntries(visPlArrayDetails);
    }
    if ($.inArray(taId, visLocationArray) != -1) {
        contextMenuHtml += createPlaceholderMenuEntries(visPlArrayLocation);
    }
    if ($.inArray(taId, visGeneralArray) != -1) {
        contextMenuHtml += '<hr />';
    }
    if ($.inArray(taId, wsNameArray) != -1) {
        contextMenuHtml += createPlaceholderMenuEntries(wsPlArrayName);
    }
    if ($.inArray(taId, wsDetailsArray) != -1) {
        contextMenuHtml += createPlaceholderMenuEntries(wsPlArrayDetails);
    }
    if ($.inArray(taId, wsSearchArray) != -1) {
        contextMenuHtml += createPlaceholderMenuEntries(wsPlArraySearch);
    }
    if ($.inArray(taId, wsChatArray) != -1) {
        contextMenuHtml += createPlaceholderMenuEntries(wsPlArrayChat);
    }
    if ($.inArray(taId, wsTimeArray) != -1) {
        contextMenuHtml += createPlaceholderMenuEntries(wsPlArrayTime);
    }
    if ($.inArray(taId, wsTargetArray) != -1) {
        contextMenuHtml += createPlaceholderMenuEntries(wsPlArrayTarget);
    }
    if ($.inArray(taId, tiIdArray) != -1) {
        contextMenuHtml += createPlaceholderMenuEntries(tiPlArrayId);
    }
    if ($.inArray(taId, tiSubjArray) != -1) {
        contextMenuHtml += createPlaceholderMenuEntries(tiPlArraySubject);
    }
    if ($.inArray(taId, tiTextArray) != -1) {
        contextMenuHtml += createPlaceholderMenuEntries(tiPlArrayText);
    }
    if ($.inArray(taId, tiQuoteArray) != -1) {
        contextMenuHtml += createPlaceholderMenuEntries(tiPlArrayQuote);
    }
    if ($.inArray(taId, tiHashArray) != -1) {
        contextMenuHtml += createPlaceholderMenuEntries(tiPlArrayHash);
    }
    if ($.inArray(taId, emFeArray) != -1) {
        contextMenuHtml += createPlaceholderMenuEntries(emFeArrayLink);
    }
    if ($.inArray(taId, customArray) != -1 && customPlArray.length > 0) {
        contextMenuHtml += '<hr />';
        contextMenuHtml += createPlaceholderMenuEntries(customPlArray);
    }

    return contextMenuHtml;
};
