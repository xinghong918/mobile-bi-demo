/**
 * Copyright © 2016, Oracle and/or its affiliates. All rights reserved.
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'hammerjs', 'promise', 'ojs/ojdialog', 'jqueryui-amd/widgets/dialog'
], function (oj, ko, $, Hammer) {
    'use strict';

    var busy = null;
    var toastDialogID = "#toastDialog";
    var toastDialogWrapperID = "#ojDialogWrapper-toastDialog";

    var jqDialogID = "#dialog-message";

    function AppUIHelper() {
        var self = this;

        function init() {
            self.msgBoxModel = new MessageBoxModel();
            ko.applyBindings(self.msgBoxModel, document.getElementById('toastDialogWrapper'));

            self.jqDialog = new jqDialog();
            ko.applyBindings(self.jqDialog, document.getElementById('jqDialogWrapper'));
        }


        self.hideBusy = function () {
            if (busy == null) {
                busy = $("#busy");
            }
            var defer = $.Deferred();
            if (busy.is(":visible")) {
                busy.fadeOut(300, defer.resolve);
            }
            return $.when(defer);
        };

        self.showMessageBox = function (titleText, messageText) {
            self.showDialog(messageText,
                    '',
                    null,
                    titleText,
                    true);
        }

        self.showErrorDialog = function (messageText) {
            self.showDialog(messageText, 'toast-bg-cross', 2000);
        };

        self.toast = function (messageText, headerClass, timeout) {
            if (!!timeout) {
                timeout = 2000; //default 2 seconds before fade out
            }

            self.showDialog(messageText, headerClass, timeout);
        };

        self.showDialog = function (messageText, headerClass, timeout, titleText, showOK) {
            self.msgBoxModel.updateModel(messageText, headerClass, titleText, showOK);
            self.msgBoxModel.open(timeout);
        }

        self.showJQDialog = function (messageText, headerClass, timeout, titleText, modal, showOK) {
            self.jqDialog.updateModel(messageText, headerClass, titleText, modal, showOK);
            return self.jqDialog.open(timeout, showOK);
        }

        self.addSwipeActionsToList = function (listSelector, listItemSelector, viewModel) {
            // setup swipe-to-reveal actions for all list items
            var list = $(listSelector);
            list.find(listItemSelector).each(function (index, listItem) {
                var id = $(this).prop("id");
                var li = $(listItem);
                var startOffCanvas = li.find(".oj-offcanvas-start").first();
                var endOffCanvas = li.find(".oj-offcanvas-end").first();

                // Note: when user is swiping left on already swiped list item
                // only the drawer is closing and list item remains open, to
                // avoid this situation we listen for drawer's ojlclose and 
                // remove the translation of list item if it is not moved back 
                // to it's original place
                // iife is rerquired since liParam is used from an event that in
                // a loop
                (function (liParam, drawer) {

                    if (drawer) {

                        var ojCloseDrawerFn = function () {

                            var wrapper = liParam.find('.oj-offcanvas-inner-wrapper').first();

                            if (wrapper) {
                                setTimeout(function () {
                                    // make sure to have the rigt animation while closing
                                    wrapper.addClass(oj.OffcanvasUtils.TRANSITION_SELECTOR);
                                    oj.OffcanvasUtils._setTransform(wrapper, '');
                                }, 0);
                            }
                        };

                        drawer.on('ojclose', ojCloseDrawerFn);

                        // store the function so we can remove this event while
                        // tearing down
                        liParam.data('ojCloseDrawerFn', ojCloseDrawerFn);
                    }

                })(li, endOffCanvas);


                // setup swipe actions
                oj.SwipeToRevealUtils.setupSwipeActions(startOffCanvas);
                oj.SwipeToRevealUtils.setupSwipeActions(endOffCanvas);

                // make sure listener only registered once
                endOffCanvas.off("ojdefaultaction");
                endOffCanvas.on("ojdefaultaction", function () {
                    viewModel.handleDefaultAction({"id": id});
                });
            });
        };

        self.removeSwipeActionsFromList = function (listSelector, listItemSelector) {
            // remove swipe-to-reveal actions from all list items
            var list = $(listSelector);
            list.find(listItemSelector).each(function (index, listItem) {
                var li = $(listItem);
                var startOffCanvas = li.find(".oj-offcanvas-start").first();
                var endOffCanvas = li.find(".oj-offcanvas-end").first();

                // unregister the event ojclose that listened from addSwipeActionsToList
                var ojCloseDrawerFn = li.data('ojCloseDrawerFn');
                if (ojCloseDrawerFn) {
                    endOffCanvas.off('ojclose', ojCloseDrawerFn);
                    li.removeData('ojCloseDrawerFn');
                }

                // tear down swipe actions
                oj.SwipeToRevealUtils.tearDownSwipeActions(startOffCanvas);
                oj.SwipeToRevealUtils.tearDownSwipeActions(endOffCanvas);
            });
        };

        self.hideSwipeCanvas = function (selector) {
            // hide the swipe-to-reveal canvas
            oj.OffcanvasUtils.close({
                "displayMode": "push",
                "selector": selector
            });
        };

        //Utility functions for getting/setting local storage values
        self.getLocalStorage = function (key) {
            var storage = window.localStorage;
            var localVal = storage.getItem(key);
            if (localVal == null || localVal === "undefined") {
                localVal = null;
            }
            return localVal;
        };

        self.setLocalStorage = function (key, value) {
            var storage = window.localStorage;
            storage.setItem(key, value);
        };

        init();
    }

    function MessageBoxModel() {
        var mbSelf = this;
        var getTranslation = oj.Translations.getTranslatedString;
        var dialog = $(toastDialogID);

        mbSelf.messageText = ko.observable();
        mbSelf.headerIcon = ko.observable();
        mbSelf.titleText = ko.observable();
        mbSelf.showOK = ko.observable(false);
        mbSelf.modality = ko.observable();
        mbSelf.okText = getTranslation('OK');

        mbSelf.updateModel = function (messageText, headerIcon, titleText, showOK) {
            mbSelf.messageText(messageText);
            mbSelf.headerIcon(headerIcon ? 'placeholder ' + headerIcon : '');
            mbSelf.titleText(titleText);
            mbSelf.showOK(showOK);
            mbSelf.modality(showOK ? 'modal' : 'modeless');

            // As per the UI, modal dialog is showing in the native dialog color, 
            // so we are generalizing it here instead of passing one more param
            if (showOK) {
                dialog.ojDialog("widget").removeClass('darkTheme');
            } else {
                dialog.ojDialog("widget").addClass('darkTheme');
            }
        }

        mbSelf.handleOKClose = function () {
            mbSelf.close();
        };

        mbSelf.close = function () {
            dialog.ojDialog('');
        }

        mbSelf.open = function (closeTimeout) {
            dialog.ojDialog('open');

            // Workaround. ojDialog gives focus to the dialog and alta adds a
            // border. Blur to remove. 
            document.activeElement.blur();

            if (closeTimeout) {
                var dlg = $(toastDialogWrapperID);
                setTimeout(function () {
                    dlg.fadeOut("slow", function () {
                        // Note: needed to call show() after the fadeOut call
                        // otherwise display: none is set after the fadeout
                        dlg.show();
                        mbSelf.close();
                    });
                }, closeTimeout);
            }
        }
    }
    ;

    function jqDialog() {
        var mbSelf = this;
        var getTranslation = oj.Translations.getTranslatedString;
        var dialog = $(jqDialogID);

        mbSelf.dialogMsg = ko.observable();
        mbSelf.headerIcon = ko.observable("ui-icon ui-icon-circle-check no-close");
        mbSelf.dialogClass = ko.observable("no-close");
        mbSelf.titleText = ko.observable();
        mbSelf.showOK = ko.observable(false);
        mbSelf.modal = ko.observable(true);
        mbSelf.okText = getTranslation('ok');
        mbSelf.cancelText = getTranslation('dialog.cancel');

        mbSelf.updateModel = function (messageText, headerIcon, titleText, modal) {
            mbSelf.dialogMsg(messageText);
            if (headerIcon != null && headerIcon.length > 0)
                mbSelf.headerIcon(headerIcon);
            mbSelf.titleText(titleText);
            mbSelf.modal(modal);
        };

        mbSelf.open = function (closeTimeout, showOK) {
            var ifConfirmMB = false;
            if (showOK)
                ifConfirmMB = true;
            
            dialog.siblings(".ui-dialog-titlebar").children("span.ui-dialog-title").html(mbSelf.titleText());

            var promise = new Promise(function (resolve, reject) {
                if (ifConfirmMB) {
                    dialog.dialog({
                        dialogClass: mbSelf.dialogClass(),
                        modal: mbSelf.modal(),
                        buttons: [{
                                text: mbSelf.okText,
                                icons: {
                                    primary: "ui-icon-check"
                                },
                                click: function () {
                                    $(this).dialog("close");
                                    resolve();
                                }
                            }, {
                                text: mbSelf.cancelText,
                                click: function () {
                                    $(this).dialog("close");
                                    reject();
                                }
                            }]
                    });
                } else {
                    dialog.dialog({
                        dialogClass: mbSelf.dialogClass(),
                        modal: mbSelf.modal(),
                        buttons: [{
                                text: mbSelf.okText,
                                click: function () {
                                    $(this).dialog("close");
                                    resolve();
                                }
                            }]
                    });
                }
            });

            return promise;

        };

    }
    ;

    return new AppUIHelper();
});
