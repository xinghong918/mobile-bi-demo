/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * catalog module
 */


define(['ojs/ojcore', 'knockout', 'data/data', 'moment', 'ojs/ojknockout', 'ojs/ojvalidation-datetime', 'ojs/ojtagcloud', 'ojs/ojchart', 'ojs/ojnavigationlist', 'ojs/ojconveyorbelt', 'ojs/ojdatacollection-common', 'ojs/ojdatetimepicker',
    'ojs/ojselectcombobox', 'ojs/ojtimezonedata', 'ojs/ojswitch'],
        function (oj, ko, jsonData, moment)
        {
            /**
             * The view model for the main content view template
             */
            function catalogContentViewModel() {
                var self = this;
                self.infoTiles = ko.observableArray();
                self.detailsContentTemplate = ko.observable('personDetails/catalog/detail_catalog');
                self.datavalue = ko.observable(oj.IntlConverterUtils.dateToLocalIso(new Date(2014, 1, 1)));
                self.isChecked = ko.observable(true);
                self.selectedTab = ko.observable(1);
                self.orientationValue = ko.observable('vertical');
                self.personProfile = ko.observableArray([]);

                self.val1 = ko.observable(["year0"]);
                self.val2 = ko.observable(["session0"]);
                self.val3 = ko.observable(["month0"]);
                self.val4 = ko.observable(["cat0"]);
                self.val5 = ko.observable(["type0"]);

                self.infoTiles([
                    {"sid": "1", "name": "Item1", "title": "品类", "infolable2": "Tenure"},
                    {"sid": "2", "name": "Item2", "title": "区域", "infolable2": "Potential"},
                    {"sid": "3", "name": "Item3", "title": "渠道", "infolable2": "Ratio"},
                    {"sid": "4", "name": "Item4", "title": "客户系统", "infolable2": "Directs"}
                ]);
                
                

//                self.handleActivated = function (info) {
//                    var parentRouter = info.valueAccessor().params['ojRouter']['parentRouter'];
//
//                    // Retrieve the childRouter instance created in main.js
//                    self.empRouter = parentRouter.currentState().value;
//
//                    self.empRouter.configure(function (stateId) {
//                        var state;
//                        if (stateId) {
//                            var data = stateId.toString();
//                            state = new oj.RouterState(data, {
//                                value: data,
//                                // For each state, before entering the state,
//                                // make sure the data for it is loaded.
//                                canEnter: function () {
//                                    // The state transition will be on hold
//                                    // until loadData is resolved.
//                                    return self.loadData(data);
//                                }
//                            });
//                        }
//                        return state;
//                    });
//
//                    // Returns the sync promise to handleActivated. The next
//                    // phase of the ojModule lifecycle (attached) will not be
//                    // executed until sync is resolved.
//                    return oj.Router.sync();
//                };


                self.optionChangedHandler2 = function (event, data)
                {
                    self.filterObj = {
                        year: self.val1()[0],
                        session: self.val2()[0],
                        month: self.val3()[0],
                        catalog: self.val4()[0],
                        oil: self.val5()[0],
                        cusCheck: self.isChecked()
                    };
                    console.log(self.filterObj);
                };
                
                self.currentModule = ko.observable("detail_catalog");
                self.modulePath = ko.pureComputed(
                        function ()
                        {
                            return {name: 'personDetails/catalog/' + self.currentModule(), animation: oj.ModuleAnimations['fade']};
                        }
                );

                self.personClickHandler = function (data) {
                    self.selectedTab(data.sid);
                    ko.utils.arrayForEach(self.personProfile().comps, function (item) {
                    });
                    
                    self.currentModule(data.title.toLowerCase());
                    return true;
                };
            }

            return new catalogContentViewModel;
        });
