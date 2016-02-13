/****************************************************************************************
 * LiveZilla ChatTranslationEditorClass.js
 *
 * Copyright 2014 LiveZilla GmbH
 * All rights reserved.
 * LiveZilla is a registered trademark.
 *
 ***************************************************************************************/
function ChatTranslationEditorClass() {
    this.languageCode = '';
    this.languageName = '';
    this.languageStrings = '';
    this.languages = [];
    this.saveTranslations = {};
    this.translationServerUrl = '';
    this.selectedTranslationTab = '';

    this.defaultLanguages = ['en', 'de'];
    this.newTranslationLanguages = [];
    this.removedTranslationLanguages = [];
    this.serverStrings = [];
    this.serverStringsLoaded = false;
    this.origStringLanguage = '';
    this.selectedLanguages = {mobile: '', server: ''};

    this.lastSearchCharacterTyped = 0;
}

ChatTranslationEditorClass.prototype.showTranslationEditor = function(languages) {
    var that = this;
    lzm_chatDisplay.showUsersettingsHtml = false;
    $('#usersettings-menu').css({'display': 'none'});
    that.languages = languages;

    var headerString = t('Translation Editor');
    var footerString = lzm_displayHelper.createButton('save-translation-editor', 'ui-disabled', '', t('Save'), '', 'lr',
        {'margin-left': '6px'}) +
        lzm_displayHelper.createButton('cancel-translation-editor', '', '', t('Cancel'), '', 'lr',
            {'margin-left': '6px'});
    var bodyString = '<div id="translation-editor-placeholder" style="margin-top: 5px;"></div>';
    var dialogData = {};

    lzm_displayHelper.createDialogWindow(headerString, bodyString, footerString, 'translation-editor', {}, {}, {}, {}, '', dialogData, true, true, 'translation_editor');
    var tabsArray = [{name: t('Mobile Client'), content: that.createTranslationEditorHtml('mobile_client')}, {name: t('Server'), content: that.createTranslationEditorHtml('server')}];
    lzm_displayHelper.createTabControl('translation-editor-placeholder', tabsArray, 0);
    lzm_displayLayout.resizeTranslationEditor();

    $('.translation-editor-placeholder-tab').click(function() {
        selectTranslationLine('');
        that.languageCode = '';
        that.languageName = '';
        that.languageStrings = [];
        $('#translation-search-string').val('');
        $('#translation-search-string').addClass('ui-disabled');
        $('#srv-translation-search-string').val('');
        $('#srv-translation-search-string').addClass('ui-disabled');
        var langCode, langName, langEdit, changed, translationTab, i;
        if ($(this).data('tab-no') == 0 && that.selectedLanguages.mobile == '' || $(this).data('tab-no') == 1 && that.selectedLanguages.server == '') {
            selectTranslationLanguage('');
        } else if ($(this).data('tab-no') == 0 && that.selectedLanguages.mobile != '') {
            translationTab = 'mobile_client';
            for (i=0; i<that.languages.mobile.length; i++) {
                if (that.languages.mobile[i].code == that.selectedLanguages.mobile) {
                    langCode = that.languages.mobile[i].code;
                    langName = that.languages.mobile[i].name;
                    langEdit = that.languages.mobile[i].edit;
                }
            }
            if (typeof that.saveTranslations[langCode] != 'undefined') {
                changed = that.saveTranslations[langCode].edit;
                selectTranslationLanguage(langCode, langName, langEdit, changed, translationTab, false);
            } else {
                selectTranslationLanguage('');
            }
        } else if ($(this).data('tab-no') == 1 && that.selectedLanguages.server != '') {
            translationTab = 'server';
            for (i=0; i<that.languages.server.length; i++) {
                if (that.languages.server[i].code == that.selectedLanguages.server) {
                    langCode = that.languages.server[i].code;
                    langName = that.languages.server[i].name;
                    langEdit = that.languages.server[i].edit;
                }
            }
            if (typeof that.saveTranslations['srv-' + langCode] != 'undefined') {
                changed = that.saveTranslations['srv-' + langCode].edit;
                selectTranslationLanguage(langCode, langName, langEdit, changed, translationTab, false);
            } else {
                selectTranslationLanguage('');
            }
        }
        lzm_displayLayout.resizeTranslationEditor();
    });

    $('#save-translation-editor').click(function() {
        saveTranslations();
        $('#cancel-translation-editor').click();
    });

    $('#cancel-translation-editor').click(function() {
        that.languageCode = '';
        that.languageName = '';
        that.languageStrings = [];
        that.languages = [];
        that.saveTranslations = {};
        that.newTranslationLanguages = [];
        that.removedTranslationLanguages = [];
        that.selectedLanguages = {mobile: '', server: ''};
        lzm_displayHelper.removeDialogWindow('translation-editor');
        var activeUserChat = lzm_chatServerEvaluation.userChats.getUserChat(lzm_chatDisplay.active_chat_reco);
        if (lzm_chatDisplay.selected_view == 'mychats' && activeUserChat != null) {
            var myText = loadChatInput(lzm_chatDisplay.active_chat_reco);
            initEditor(myText, 'CancelFilterCreation', lzm_chatDisplay.active_chat_reco);
        }
    });
};

ChatTranslationEditorClass.prototype.showTranslationStrings = function(searchString) {
    if(this.languageCode != '') {
        searchString = (typeof searchString != 'undefined') ? searchString : '';
        if (this.selectedTranslationTab != 'server') {
            $('#translation-search-string').val(searchString);
            $('#translation-search-string').removeClass('ui-disabled');
        } else {
            $('#srv-translation-search-string').val(searchString);
            $('#srv-translation-search-string').removeClass('ui-disabled');
        }
    }
    if (typeof searchString != 'undefined') {
        searchString = searchString.replace(/^ +/g, '').replace(/ +$/g, '');
    }
    var idPrefix = (this.selectedTranslationTab == 'server') ? 'srv-' : '';
    $('#' + idPrefix + 'translation-values-top').html(this.createTranslationStringsHtml(this.selectedTranslationTab, searchString)).trigger('create');
    lzm_displayLayout.resizeTranslationEditor();
};

ChatTranslationEditorClass.prototype.addTranslationLanguage = function(type, myTab) {
    var that = this, languages = lzm_commonTools.clone(that.languages);
    that.selectedTranslationTab = myTab;
    var headerString = t('Translation Editor');
    var footerString = lzm_displayHelper.createButton('save-translation-language-add', '', '', t('Save'), '', 'lr',
        {'margin-left': '6px'}) +
        lzm_displayHelper.createButton('cancel-translation-language-add', '', '', t('Cancel'), '', 'lr',
            {'margin-left': '6px'});
    var bodyString = this.createTranslationLanguageEditorHtml(languages, type);
    var dialogData = {};
    lzm_displayHelper.minimizeDialogWindow('translation_editor', 'translation-editor', dialogData, '', false);
    lzm_displayHelper.createDialogWindow(headerString, bodyString, footerString, 'translation-editor', {}, {}, {}, {}, '',
        dialogData, true, true, 'translation_editor_add_language');
    lzm_displayLayout.resizeTranslationEditor();

    $('#save-translation-language-add').click(function() {
        var newLangCode =  $('#language-selection').val(), newLangName = lzm_chatDisplay.availableLanguages[newLangCode];
        that.newTranslationLanguages.push({code: newLangCode, type: (myTab == 'server') ? 'server' : 'mobile'});
        var langCodePrefix = (myTab == 'server') ? 'srv-' : '', i = 0;
        $('#cancel-translation-language-add').click();
        if (typeof that.saveTranslations[langCodePrefix + newLangCode] == 'undefined') {
            that.saveTranslations[langCodePrefix + newLangCode] = {strings: []};
        }
        that.saveTranslations[langCodePrefix + newLangCode].code = newLangCode;
        that.saveTranslations[langCodePrefix + newLangCode].name = newLangName;
        that.saveTranslations[langCodePrefix + newLangCode].edit = 1;
        that.saveTranslations[langCodePrefix + newLangCode].delete = 0;
        if (myTab == 'server') {
            that.languages.server.push({code: newLangCode, edit: 1, name: newLangName});
            for (i=0; i<that.serverStrings.length; i++) {
                that.saveTranslations[langCodePrefix + newLangCode].strings.push({
                    key: that.serverStrings[i].key, orig: that.serverStrings[i].orig,
                    editedValue: that.serverStrings[i].orig, savedValue: that.serverStrings[i].orig
                });
            }
        } else {
            that.languages.mobile.push({code: newLangCode, edit: 1, name: newLangName});
            for (i=0; i<translationData.length; i++) {
                that.saveTranslations[langCodePrefix + newLangCode].strings.push({
                    key: translationData[i].key, orig: translationData[i].orig,
                    editedValue: translationData[i].orig, savedValue: translationData[i].orig
                });
            }
        }
        $('#save-translation-editor').removeClass('ui-disabled');
        that.updateTranslationLanguages();
        newLangName = (newLangName != '') ? newLangName : newLangCode;
        selectTranslationLanguage(newLangCode, newLangName, 1, 1, myTab, true);
    });

    $('#cancel-translation-language-add').click(function() {
        lzm_displayHelper.removeDialogWindow('translation-editor');
        lzm_displayHelper.maximizeDialogWindow('translation_editor');
    });
};

ChatTranslationEditorClass.prototype.deleteTranslationLanguage = function(myTab) {
    var that = this;
    that.removedTranslationLanguages.push({code: that.languageCode, type: (myTab == 'server') ? 'server' : 'mobile'});
    var langCodePrefix = (myTab == 'server') ? 'srv-' : '', i = 0;
    that.saveTranslations[langCodePrefix + that.languageCode] = {
        code: that.languageCode,
        name: that.languageName,
        strings: [],
        edit: 1,
        delete: 1
    };
    that.languageCode = '';
    that.languageName = '';
    that.languageStrings = [];
    for (i=0; i<that.languages.mobile.length; i++) {
        if (typeof that.saveTranslations[langCodePrefix + that.languages.mobile[i].code] != 'undefined' &&
            that.saveTranslations[langCodePrefix + that.languages.mobile[i].code].delete == 1 &&
            $.inArray(langCodePrefix + that.languages.mobile[i].code, that.defaultLanguages) != -1) {
                that.languages.mobile[i].edit = 0;
        }
    }

    that.updateTranslationLanguages();
    $('#save-translation-editor').removeClass('ui-disabled');
};

ChatTranslationEditorClass.prototype.updateTranslationLanguages = function() {
    $('#translation-editor-placeholder-content-0').html(this.createTranslationEditorHtml('mobile_client')).trigger('create');
    $('#translation-editor-placeholder-content-1').html(this.createTranslationEditorHtml('server')).trigger('create');
    setTimeout(function() {
        lzm_displayLayout.resizeTranslationEditor();
        setTimeout(function() {
            lzm_displayLayout.resizeTranslationEditor();
            setTimeout(function() {
                lzm_displayLayout.resizeTranslationEditor();
            }, 50);
        }, 20);
    }, 10);
};

ChatTranslationEditorClass.prototype.createTranslationEditorHtml = function(myTab) {
    var idPrefix = (myTab == 'server') ? 'srv-' : '';
    var languages = (myTab == 'server') ? lzm_commonTools.clone(this.languages.server) : lzm_commonTools.clone(this.languages.mobile);
    var langSort = function(a, b) {
        return (a.code > b.code);
    };
    languages.sort(langSort);
    var langSelHtml = '<fieldset id="' + idPrefix + 'translation-language-selection-inner" class="lzm-fieldset" data-role="none">' +
        '<legend>' + t('Languages') + '</legend>' +
        '<div id="' + idPrefix + 'translation-languages-top">' +
        '<table class="visitor-list-table alternating-rows-table lzm-unselectable" id="' + idPrefix + 'translation-language-table">' +
        '<thead><tr><th>' + t('Language') + '</th></tr></thead>' +
        '<tbody>';
    for (var i=0; i<languages.length; i++) {
        if (typeof this.saveTranslations[idPrefix + languages[i].code] == 'undefined' || typeof this.saveTranslations[idPrefix + languages[i].code].delete == 'undefined' ||
            this.saveTranslations[idPrefix + languages[i].code].delete != 1 || languages[i].edit == 0) {
            var selectedLine = (languages[i].code == this.languageCode) ? ' selected-table-line' : '';
            var langName = (languages[i].name != '') ? languages[i].name : languages[i].code;
            var langDisplayName = (languages[i].name != '') ? languages[i].code.toUpperCase() + ' - ' + languages[i].name : languages[i].code.toUpperCase();
            languages[i].name = langName;
            langSelHtml += '<tr id="' + idPrefix + 'translation-language-line-' + languages[i].code + '" class="translation-language-line' + selectedLine + '"' +
                ' onclick="selectTranslationLanguage(\'' + languages[i].code + '\', \'' + langName + '\', \'' + languages[i].edit + '\', 0, \'' + myTab + '\');" style="cursor: pointer;">' +
                '<td style="text-overflow: ellipsis;">' + langDisplayName + '</td>' +
                '</tr>';
        }
    }
    langSelHtml += '</tbody></table>' +
        '</div><div id="' + idPrefix + 'translation-languages-bottom">' +
        '<div style="margin: 14px 0px;">' + lzm_displayHelper.createButton(idPrefix + 'translation-language-new', 'translation-lang-btn', 'addTranslationLanguage(\'' + myTab + '\')',
        t('Add'), '', 'lr', {}, t('Add Language')) + '</div>' +
        '<div style="margin: 14px 0px;">' + lzm_displayHelper.createButton(idPrefix + 'translation-language-delete', 'translation-lang-btn ui-disabled',
            'deleteTranslationLanguage(\'' + myTab + '\')', t('Delete'), '', 'lr', {}, t('Delete Language')) + '</div>';
    langSelHtml += '<div style="margin: 14px 0px;">' + lzm_displayHelper.createButton(idPrefix + 'translation-language-suggest',
        'translation-lang-btn', 'suggestTranslationLanguage(\'' + myTab + '\')', t('Suggest as default'), '', 'lr',
        {}, t('Suggest translation as default')) + '</div>' +
        '<div style="margin: 14px 0px;">' + lzm_displayHelper.createButton(idPrefix + 'translation-language-download',
        'translation-lang-btn', 'downloadTranslationLanguage(\'' + myTab + '\')', t('Download default'), '', 'lr',
        {}, t('Download default translation')) + '</div>';
    langSelHtml += '</fieldset>';
    var translationHtml = '<fieldset id="' + idPrefix + 'translation-string-editor-inner" class="lzm-fieldset" data-role="none">' +
        '<legend>' + t('Translation Values') + '</legend>' +
        '<div id="' + idPrefix + 'translation-values-top">' + this.createTranslationStringsHtml(myTab) + '</div>' +
        '<div id="' + idPrefix + 'translation-values-bottom" style="margin: 8px 0px;">' +
        t('Search:') + '&nbsp;<input type="text" class="lzm-text-input ui-disabled" data-role="none" id="' + idPrefix + 'translation-search-string"' +
        ' onkeyup="translationSearchFieldKeyUp(\'' + myTab + '\');" />' +
        '</div>' +
        '</fieldset>';
    var myHtml = '<div id="' + idPrefix + 'translation-language-selection">' + langSelHtml + '</div>' +
        '<div id="' + idPrefix + 'translation-string-editor">' + translationHtml + '</div>';

    return myHtml;
};

ChatTranslationEditorClass.prototype.createTranslationStringsHtml = function(myTab, searchString) {
    var that = this, idPrefix = (myTab == 'server') ? 'srv-' : '';
    var translationStringHtml = '<table id="translation-string-table" class="visitor-list-table alternating-rows-table lzm-unselectable" style="width: 100%;">' +
        '<thead><tr><th id="translation-status-column" style="width: 20px !important;"><span style="padding: 0px 10px;"></span></th>' +
        '<th id="' + idPrefix + 'translation-orig-column" style="width: 35%;">' + t('Original string') + '</th>' +
        '<th id="' + idPrefix + 'translation-translated-column" style="width: 35%;">' + t('Translated string') + '</th>' +
        '<th id="' + idPrefix + 'translation-key-column">' + t('Key') + '</th></tr></thead><tbody>';
    var languageCode = (this.selectedTranslationTab == 'mobile_client') ? this.languageCode : 'srv-' + this.languageCode;
    if (this.languageCode != '' && typeof this.saveTranslations[languageCode].strings != 'undefined') {
        var languageStrings = this.saveTranslations[languageCode].strings;
        var translationSort = function(a,b) {
            var aOrig = a.orig.replace(/^ */, ''), bOrig = b.orig.replace(/^ */, ''), rt = 0;
            if (aOrig == '' && bOrig != '') {
                rt = 1;
            } else if (bOrig == '' && aOrig != '') {
                rt = -1;
            } else if (a.key > b.key) {
                rt = 1;
            } else if (a.key < b.key) {
                rt = -1;
            }
            return rt;
        };
        languageStrings.sort(translationSort);
        var errorArray = [];
        for (var i=0; i<languageStrings.length; i++) {
            try {
            var origString = (that.origStringLanguage == 'en' || myTab != 'server') ? languageStrings[i].orig.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') : '';
            var translatedString = languageStrings[i].editedValue.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
            var translationStatusIcon = (languageCode == 'en' || languageCode == 'srv-en' ||
                languageStrings[i].orig != languageStrings[i].editedValue) ?
                '<i class="fa fa-check-circle" style="color: #73be28;"></i>' : '<i class="fa fa-warning" style="color: #e34e4e;"></i>';
            if (typeof searchString == 'undefined' || searchString == '' || origString.toLowerCase().indexOf(searchString.toLowerCase()) != -1 ||
                languageStrings[i].key.toLowerCase().indexOf(searchString.toLowerCase()) != -1 ||
                translatedString.toLowerCase().indexOf(searchString.toLowerCase()) != -1) {
                translationStringHtml += '<tr class="translation-line" id="translation-line-' + languageStrings[i].key + '"' +
                    ' onclick="selectTranslationLine(\'' + languageStrings[i].key + '\');" style="cursor: pointer;">' +
                    '<td id="translation-icon-' + languageStrings[i].key + '">' + translationStatusIcon + '</td>' +
                    '<td style="white-space: normal;">' + origString + '</td>' +
                    '<td style="white-space: normal;" id="translation-translated-string-' + languageStrings[i].key + '"' +
                    ' ondblclick="editTranslationString(\'' + languageStrings[i].key + '\', event)">' + translatedString + '</td>' +
                    '<td>' + languageStrings[i].key + '</td>' +
                    '</tr>';
            }
            } catch(ex) {
                errorArray.push(languageStrings[i]);
            }
        }
    }
    translationStringHtml += '</tbody></table>';

    return translationStringHtml;
};

ChatTranslationEditorClass.prototype.createTranslationLanguageEditorHtml = function() {
    var myHtml = '<fieldset id="translation-string-add-language" class="lzm-fieldset" data-role="none">';
    var langCodeHtml = '', langNameValue = '';
    myHtml += '<select id="language-selection" class="lzm-select" data-role="none">' +
        '<option value="">' + t('--- Choose a language ---') + '</option>';
    var availLangCodes = Object.keys(lzm_chatDisplay.availableLanguages);
    availLangCodes.sort();
    var existingLangCodes = [], langArrayName = (this.selectedTranslationTab == 'mobile_client') ? 'mobile' : 'server', i = 0;
    for (i=0; i<this.languages[langArrayName].length; i++) {
        existingLangCodes.push(this.languages[langArrayName][i].code);
    }
    for (i=0; i<availLangCodes.length; i++) {
        if ($.inArray(availLangCodes[i], existingLangCodes) == -1) {
            myHtml += '<option value="' + availLangCodes[i] + '">' + availLangCodes[i].toUpperCase() + ' - ' +
                lzm_chatDisplay.availableLanguages[availLangCodes[i]] + '</option>';
        }
    }
    myHtml += '</select>';
    var langName = (typeof lzm_chatDisplay.availableLanguages[lzm_t.language.toLowerCase()] != 'undefined') ?
        lzm_t.language.toUpperCase() + ' (' + lzm_chatDisplay.availableLanguages[lzm_t.language.toLowerCase()] + ')' :
        (typeof lzm_chatDisplay.availableLanguages[lzm_t.language.toLowerCase().split('-')[0]] != 'undefined') ?
            lzm_t.language.toUpperCase() + ' (' + lzm_chatDisplay.availableLanguages[lzm_t.language.toLowerCase().split('-')[0]] + ')' :
            lzm_t.language.toUpperCase();
    myHtml += '<p>' + t('Your browser\'s current default language is "<!--browserLanguage-->"', [['<!--browserLanguage-->', langName]]) + '</p>';
    myHtml += '<p>' + t('The LiveZilla mobile client does always use the browser\'s default language.') +'</p>';
    myHtml += '<p>' + t('You can change that language in your browser settings.') +'</p>';
    return myHtml;
};

ChatTranslationEditorClass.prototype.loadTranslationStrings = function(langCode, langName, langChanged) {
    var that = this;
    if (that.serverStringsLoaded) {
        langName = (typeof langName != 'undefined') ? langName :
            (typeof lzm_chatDisplay.availableLanguages[langCode] != 'undefined') ? lzm_chatDisplay.availableLanguages[langCode] : langCode;
        langChanged = (typeof langChanged != 'undefined') ? langChanged : 0;
        var translationStrings = [], i = 0, trlStringObject = {};
        if (that.selectedTranslationTab == 'mobile_client') {
            var editdelete = (typeof that.saveTranslations[langCode] != 'undefined' && that.saveTranslations[langCode].edit == 1 && that.saveTranslations[langCode].delete == 1);
            that.saveTranslations[langCode] = {code: langCode, name: langName, edit: langChanged, delete: 0, strings: []};
            if (editdelete) {
                that.saveTranslations[langCode].edit = 1;
                that.saveTranslations[langCode].delete = 1;
            }

            for (i=0; i<translationData.length; i++) {
                trlStringObject = {key: translationData[i].key, orig: translationData[i].orig};
                if (typeof lzm_chatServerEvaluation.translationStrings.strings[translationData[i].key] != 'undefined' &&
                    lzm_chatServerEvaluation.translationStrings.strings[translationData[i].key] != '') {
                    trlStringObject[langCode] = lzm_chatServerEvaluation.translationStrings.strings[translationData[i].key];
                } else {
                    trlStringObject[langCode] = translationData[i].orig
                }
                translationStrings.push(trlStringObject);
                that.saveTranslations[langCode].strings.push({
                    key: trlStringObject.key,
                    orig: trlStringObject.orig,
                    editedValue: trlStringObject[langCode],
                    savedValue: trlStringObject[langCode]
                });
            }
        } else {
            that.saveTranslations['srv-' + langCode] = {code: langCode, name: langName, edit: langChanged, delete: 0, strings: []};
            for (i=0; i<that.serverStrings.length; i++) {
                trlStringObject = {key: that.serverStrings[i].key, orig: that.serverStrings[i].orig};
                if (typeof lzm_chatServerEvaluation.translationStrings.strings[that.serverStrings[i].key] != 'undefined' &&
                    lzm_chatServerEvaluation.translationStrings.strings[that.serverStrings[i].key] != '') {
                    trlStringObject[langCode] = lzm_chatServerEvaluation.translationStrings.strings[that.serverStrings[i].key];
                } else {
                    trlStringObject[langCode] = that.serverStrings[i].orig
                }
                translationStrings.push(trlStringObject);
                that.saveTranslations['srv-' + langCode].strings.push({
                    key: trlStringObject.key,
                    orig: trlStringObject.orig,
                    editedValue: trlStringObject[langCode],
                    savedValue: trlStringObject[langCode]
                });
            }
        }

        that.languageStrings = lzm_commonTools.clone(translationStrings);
        lzm_chatServerEvaluation.translationStrings = {key: '', strings: {}};

        $('#translation-strings-loading').remove();
        that.showTranslationStrings();
    } else {
        that.origStringLanguage = lzm_chatServerEvaluation.translationStrings.key;
        langName = (typeof lzm_chatDisplay.availableLanguages[that.origStringLanguage] != 'undefined') ?
            lzm_chatDisplay.availableLanguages[that.origStringLanguage] : that.origStringLanguage;
        that.saveTranslations['srv-' + that.origStringLanguage] = {code: that.origStringLanguage, edit: 0, delete: 0, name: langName, strings: []};
        for (var translationKey in lzm_chatServerEvaluation.translationStrings.strings) {
            if (lzm_chatServerEvaluation.translationStrings.strings.hasOwnProperty(translationKey)) {
                var myString = lzm_chatServerEvaluation.translationStrings.strings[translationKey];
                that.serverStrings.push({key: translationKey, orig: myString});
                that.saveTranslations['srv-' + that.origStringLanguage].strings.push({orig: myString, key: translationKey, editedValue: myString, savedValue: myString});
            }
        }
        that.serverStringsLoaded = true;
        lzm_chatServerEvaluation.translationStrings = {key: '', strings: {}};
        $('#translation-strings-loading').remove();
    }
};

ChatTranslationEditorClass.prototype.loadTranslationLanguages = function() {
    var that = this;
    var languages = {mobile: [], server: []}, showEnglish = true, showGerman = true;
    for (var i=0; i<lzm_chatServerEvaluation.translationLanguages.length; i++) {
        if (lzm_chatServerEvaluation.translationLanguages[i].m == 0 && lzm_chatServerEvaluation.translationLanguages[i].blocked == 0) {
            languages.server.push({
                code: lzm_chatServerEvaluation.translationLanguages[i].key,
                edit: 1,
                name: lzm_chatDisplay.availableLanguages[lzm_chatServerEvaluation.translationLanguages[i].key]
            });
        } else if (lzm_chatServerEvaluation.translationLanguages[i].m == 1 && lzm_chatServerEvaluation.translationLanguages[i].blocked == 0) {
            languages.mobile.push({
                code: lzm_chatServerEvaluation.translationLanguages[i].key,
                edit: 1,
                name: lzm_chatDisplay.availableLanguages[lzm_chatServerEvaluation.translationLanguages[i].key]
            });
        }
        if (lzm_chatServerEvaluation.translationLanguages[i].m == 1 && lzm_chatServerEvaluation.translationLanguages[i].key == 'en') {
            showEnglish = false;
        } else if (lzm_chatServerEvaluation.translationLanguages[i].m == 1 && lzm_chatServerEvaluation.translationLanguages[i].key == 'de') {
            showGerman = false;
        }
    }
    if (showEnglish) {
        languages.mobile.push({
            code: 'en',
            edit: 0,
            name: lzm_chatDisplay.availableLanguages['en']
        });
    }
    if (showGerman) {
        languages.mobile.push({
            code: 'de',
            edit: 0,
            name: lzm_chatDisplay.availableLanguages['de']
        });
    }
    that.showTranslationEditor(languages);
};

ChatTranslationEditorClass.prototype.saveTranslationFiles = function() {
    var that = this, changedStrings = {}, langCodes = [], langKey = '', i = 0, j = 0;
    var saveTranslations = lzm_commonTools.clone(that.saveTranslations);
    var myDataObject = {};
    for (langKey in saveTranslations) {
        if (saveTranslations.hasOwnProperty(langKey)) {
            if (saveTranslations[langKey].edit == 1) {
                var contentString = '', langFileString = '';
                for (i=0; i<saveTranslations[langKey].strings.length; i++) {
                    var translatedString = saveTranslations[langKey].strings[i].editedValue.replace(/\\/g, '\\\\').replace(/'/g, '\\\'').replace(/\n/g, '\\n').replace(/\r/g, '\\r');
                    contentString += '$LZLANG["' + saveTranslations[langKey].strings[i].key + '"] = \'' + translatedString + '\';\r\n';
                }
                if (saveTranslations[langKey].delete != 1) {
                    var mobilePart = (langKey.indexOf('srv-') == -1) ? 'mobile' : '';
                    langFileString = langFileTemplate.replace(/%%CONTENT%%/, contentString).replace(/%%LINE_BREAK%%/g, '\r\n')
                        .replace(/%%PHP_BEGINN%%/, '<?php').replace(/%%PHP_END%%/, '?>')
                        .replace(/%%LANGUAGE_CODE%%/, saveTranslations[langKey].code.toLowerCase())
                        .replace(/%%MOBILE_PART%%/, mobilePart);
                } else {
                    langFileString = '';
                }
                myDataObject[langKey] = {
                    i: saveTranslations[langKey].code.toLowerCase(),
                    c: langFileString,
                    m: (langKey.indexOf('srv-') == -1) ? 1 : 0,
                    d: saveTranslations[langKey].delete
                };
                if ($.inArray(langKey, that.defaultLanguages) != -1) {
                    that.newTranslationLanguages.push({code: langKey, type: 'mobile'});
                }
                for (j=0; j<lzm_chatServerEvaluation.translationLanguages.length; j++) {
                    var fileType = (langKey.indexOf('srv-') == -1) ? 'mobile' : 'server';
                    if (lzm_chatServerEvaluation.translationLanguages[j].key == saveTranslations[langKey].code.toLowerCase() &&
                        ((lzm_chatServerEvaluation.translationLanguages[j].m == 1 && fileType == 'mobile') ||
                            lzm_chatServerEvaluation.translationLanguages[j].m == 0 && fileType == 'server')) {
                        if (multiServerId != '') {
                            lzm_chatServerEvaluation.translationLanguages[j].derived = 0;
                        }
                    }
                }
            }
        }
    }
    for (i=0; i<that.newTranslationLanguages.length; i++) {
        var addThisLanguage = true;
        for (j=0; j<lzm_chatServerEvaluation.translationLanguages.length; j++) {
            if (lzm_chatServerEvaluation.translationLanguages[j].key == that.newTranslationLanguages[i].code &&
                ((lzm_chatServerEvaluation.translationLanguages[j].m == 1 && that.newTranslationLanguages[i].type == 'mobile') ||
                    lzm_chatServerEvaluation.translationLanguages[j].m == 0 && that.newTranslationLanguages[i].type == 'server')) {
                addThisLanguage = false;
            }
        }
        if (addThisLanguage) {
            var thisLanguage = {blocked: 0, key: that.newTranslationLanguages[i].code, m: (that.newTranslationLanguages[i].type == 'mobile') ? 1 : 0, derived: 0};
            lzm_chatServerEvaluation.translationLanguages.push(thisLanguage);
        }
    }
    var tmpTranslationLanguages = [];
    for (i=0; i<lzm_chatServerEvaluation.translationLanguages.length; i++) {
        var deleteThisLanguage = false;
        for (j=0; j<that.removedTranslationLanguages.length; j++) {
            if (lzm_chatServerEvaluation.translationLanguages[i].key == that.removedTranslationLanguages[j].code &&
                ((lzm_chatServerEvaluation.translationLanguages[i].m == 1 && that.removedTranslationLanguages[j].type == 'mobile') ||
                    lzm_chatServerEvaluation.translationLanguages[i].m == 0 && that.removedTranslationLanguages[j].type == 'server')) {
                deleteThisLanguage = true;
            }
        }
        if (!deleteThisLanguage) {
            tmpTranslationLanguages.push(lzm_chatServerEvaluation.translationLanguages[i]);
        }
    }
    lzm_chatServerEvaluation.translationLanguages = tmpTranslationLanguages;
    lzm_chatPollServer.pollServerSpecial(myDataObject, 'save-translation');
};

ChatTranslationEditorClass.prototype.contactLzTranslationServer = function(myTab, action, postParams) {
    var that = this;
    var translationServerUrl = 'http://translate.livezilla.info/com/translation.php?' +
        'product_version=' + lzm_commonConfig.lz_version;
    if (action == 'download')
        showTranslationStringsLoadingDiv();
    $.ajax({
        type: "POST",
        url: translationServerUrl,
        data: postParams,
        timeout: lzm_commonConfig.pollTimeout,
        dataType: 'text'
    }).done(function(data) {
        if (action == 'download') {
            if (data != '') {
                try {
                    var xmlDoc = $.parseXML(data);
                    $(xmlDoc).find('values').each(function() {
                        var translationValues = {};
                        var values = $(this);
                        values.children('value').each(function() {
                            var myKey = $(this).attr('key');
                            var myValue = lz_global_base64_url_decode($(this).text());
                            translationValues[myKey] = myValue;
                        });
                        var idPrefix = (myTab == 'server') ? 'srv-' : '', langKey = postParams.iso.toLowerCase(), savedKey = '', savedValue = '', i = 0;
                        var doFillLanguageStrings = (that.languageStrings.length == 0);
                        for (i=0; i<that.saveTranslations[idPrefix + langKey].strings.length; i++) {
                            savedKey = that.saveTranslations[idPrefix + langKey].strings[i].key;
                            savedValue = (typeof translationValues[savedKey] != 'undefined') ? translationValues[savedKey] :
                                that.saveTranslations[idPrefix + langKey].strings[i].editedValue;
                            that.saveTranslations[idPrefix + langKey].strings[i].editedValue = savedValue;
                            that.saveTranslations[idPrefix + langKey].strings[i].savedValue = savedValue;
                            if (doFillLanguageStrings) {
                                var langStringObj = {key: savedKey, orig: that.saveTranslations[idPrefix + langKey].strings[i].orig};
                                langStringObj[langKey] = translationValues[savedKey];
                                that.languageStrings.push(langStringObj);
                            }
                        }
                        that.saveTranslations[idPrefix + langKey].edit = 1;
                        that.saveTranslations[idPrefix + langKey].delete = 0;
                        for (i=0; i<that.languageStrings.length; i++) {
                            savedKey = that.languageStrings[i].key;
                            savedValue = (typeof translationValues[savedKey] != 'undefined') ? translationValues[savedKey] :
                                that.saveTranslations[idPrefix + langKey].strings[i].editedValue;
                            that.languageStrings[i][langKey] = savedValue;
                        }
                        that.showTranslationStrings();
                    });
                } catch(ex) {
                    logit(ex.stack);
                }
            } else {
                that.showTranslationStrings();
            }
            removeTranslationStringsLoadingDiv();
            $('#save-translation-editor').removeClass('ui-disabled');
        }
        var myAction = (action == 'download') ? t('downloading') : t('uploading');
        var dialogText = t('Finished <!--server_action--> your translations.', [['<!--server_action-->', myAction]]);
        lzm_commonDialog.createAlertDialog(dialogText, [{id: 'ok', name: t('Ok')}]);
        $('#alert-btn-ok').click(function() {
            lzm_commonDialog.removeAlertDialog();
        });
    }).fail(function(jqXHR, textStatus, errorThrown) {
        var myAction = (action == 'download') ? t('downloading') : t('uploading');
        var errorText = t('An error occured while <!--server_action--> translations.', [['<!--server_action-->', myAction]]);
        lzm_commonDialog.createAlertDialog(errorText, [{id: 'ok', name: t('Ok')}]);
        $('#alert-btn-ok').click(function() {
            lzm_commonDialog.removeAlertDialog();
        });
        logit(jqXHR);
        logit(textStatus);
        logit(errorThrown);
    });
};
