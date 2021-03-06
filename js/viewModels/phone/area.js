/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * catalog module
 */


define(['ojs/ojcore', 'knockout', 'data/data', 'moment', 'viewModels/personDetails/area/detail_area', 'viewModels/personDetails/area/detail_catalog', 'viewModels/personDetails/area/detail_industry', 'viewModels/personDetails/area/detail_system'
            , 'ojs/ojknockout', 'ojs/ojvalidation-datetime', 'ojs/ojtagcloud',
    'ojs/ojchart', 'ojs/ojnavigationlist', 'ojs/ojconveyorbelt', 'ojs/ojdatacollection-common', 'ojs/ojdatetimepicker',
    'ojs/ojselectcombobox', 'ojs/ojtimezonedata', 'ojs/ojswitch', 'data/globalVars'],
        function (oj, ko, jsonData, moment, areaAre, areaCat, areaInd, areaSys)
        {
            /**
             * The view model for the main content view template
             */
            function areaContentViewModel() {
                var self = this;
                self.infoTiles = ko.observableArray();
                self.detailsContentTemplate = ko.observable('personDetails/catalog/detail_area');
                self.datavalue = ko.observable(oj.IntlConverterUtils.dateToLocalIso(new Date(2014, 1, 1)));
                self.isChecked = ko.observable(true);
                self.selectedTab = ko.observable(1);
                self.orientationValue = ko.observable('vertical');
                self.personProfile = ko.observableArray([]);
                self.infoTilesDataSource = ko.observable();
                self.navListDataReady = ko.observable(false);
                self.area = ko.observableArray([]);
                self.tabSelect =  ko.observable('1');
                self.areaArray = ko.observableArray([]);
                self.val1 = ko.observable([""]);
                var totalObject = new Array;
                self.areaChild = ko.observableArray([]);

                //set up selecets
                var date = new Date();
                var currYear = date.getFullYear();
                var currMonth = (date.getMonth() + 1);
                var currQuarter = Math.floor((currMonth % 3 == 0 ? (currMonth / 3) : (currMonth / 3 + 1)));
                //alert(currYear)
                //alert(currQuarter)
                //alert(currMonth)
                self.year = ko.observable(currYear + "");
                self.session = ko.observable(currQuarter + "");
                self.month = ko.observable(currMonth + "");


                self.firstArea = ko.observable("所有");
                self.secondArea = ko.observable("所有");
                self.JYchange = ko.observable("所有");
                filterData.year = self.year();
                filterData.quarter = self.session();
                filterData.month = self.month();
                filterData.firstArea = self.firstArea();
                filterData.secondArea = self.secondArea();
                filterData.change = self.JYchange();
                filterData.primarySelection = "area";
                filterData.secondSelection = "catalog";
                self.localTab = "catalog";
                
                self.infoTiles([
                    {"sid": "1", "name": "Item1", "title": "品类", "html": "detail_catalog"},
                    {"sid": "2", "name": "Item2", "title": "区域", "html": "detail_area"},
                    {"sid": "3", "name": "Item3", "title": "渠道", "html": "detail_industry"},
                    {"sid": "4", "name": "Item4", "title": "客户系统", "html": "detail_system"}
                ]);


                self.infoTilesDataSource = new oj.ArrayTableDataSource(self.infoTiles(), {idAttribute: 'sid'});
                self.navListDataReady(true);

                self.optionChangedHandler = function (event, data) {

                    if (data.option === "value") {
                        var tempArray = new Array();
                        if (totalObject) {
                            for (var k = 0; k < totalObject.length; k++) {
                                if (data.value[0] === totalObject[k].label) {
                                    for (var m = 0; m < totalObject[k].child.length; m++) {
                                        var tempVar = {value: totalObject[k].child[m], label: totalObject[k].child[m]};
                                        tempArray.push(tempVar);
                                    }
                                    self.areaChild(tempArray);
                                    $('.changableSelect2').ojSelect("refresh");
                                }
                            }
                        }
                    } else {
                        var tempArray = new Array();
                        var newObj = {value: "所有", label: "所有"};
                        tempArray.push(newObj);
                        self.areaChild(tempArray);
                    }

                    filterData.year = self.year();
                    filterData.quarter = self.session();
                    filterData.month = self.month();
                    filterData.firstArea = self.firstArea();
                    filterData.secondArea = self.secondArea();
                    filterData.change = self.JYchange();
                };


                self.handleActivated = function (info) {
                    filterData.year = self.year();
                    filterData.quarter = self.session();
                    filterData.month = self.month();
                    filterData.firstArea = self.firstArea();
                    filterData.secondArea = self.secondArea();
                    filterData.change = self.JYchange();
                    filterData.primarySelection = "area";
                    filterData.secondSelection = self.localTab;
                    console.log(self.localTab);
                    console.log(chooseFilter);
                };

                self.handleAttached = function (info) {
                    //$.getJSON("js/data/AreaSelection.json",
					// localhost:8080/cofcoc4irest/Area/getRoleSelection?dataRoleId=
					$.getJSON("http://" + baseUrl + "/Area/getRoleSelection?dataRoleId=" + chooseFilter.rowId,
                            function (data)
                            {
                                var object = data.ary;
                                totalObject = object;
                                self.areaArray([]);

                                for (var i = 0; i < object.length; i++) {

                                    var tempVar = {value: object[i].label, label: object[i].label};
                                    self.areaArray.push(tempVar);
                                    var tempvar = object[i].label;
                                }
                                $('.changableSelect1').ojSelect("refresh");
                            });
                };

                self.ArrayToSendString = function (obj) {

                };

                self.filterAction = function () {
                    filterData.year = self.year();
                    filterData.quarter = self.session();
                    filterData.month = self.month();
                    filterData.firstArea = self.firstArea();
                    filterData.secondArea = self.secondArea();
                    filterData.change = self.JYchange();
                    filterData.primarySelection = "area";

                    switch (filterData.secondSelection) {
                        case "catalog":
                            areaCat.reInitView();
                            break;
                        case "area":
                            areaAre.reInitView();
                            break;
                        case "industry":
                            areaInd.reInitView();
                            break;
                        case "system":
                            areaSys.reInitView();
                            break;
                    }
                };

                self.updateoption = function (event, data)
                {
                    if (data.option == "value") {
                        filterData.year = self.year();
                        filterData.quarter = self.session();
                        filterData.month = self.month();
                        filterData.firstArea = self.firstArea();
                        filterData.secondArea = self.secondArea();
                        filterData.change = self.JYchange();
                    }
                };

                self.optionChangedHandler3 = function (event, data)
                {

                };

                self.navListOptionChangeHandler = function (event, data) {
                    self.selectedTab(data.value);
                    var newPage = "";
                    switch (data.value) {
                        case "1":
                            newPage = "detail_catalog";
                            filterData.secondSelection = "catalog";
                            self.tabSelect("1");
                            self.localTab = "catalog";
                            break;
                        case "2":
                            newPage = "detail_area";
                            filterData.secondSelection = "area";
                            self.tabSelect("2");
                            self.localTab = "area";
                            break;
                        case "3":
                            newPage = "detail_industry";
                            filterData.secondSelection = "industry";
                            self.tabSelect("3");
                            self.localTab = "industry";
                            break;
                        case "4":
                            newPage = "detail_system";
                            filterData.secondSelection = "system";
                            self.tabSelect("4");
                            self.localTab = "system";
                            break;
                    }
                    self.currentModule(newPage);
                    return true;
                };

                self.personClickHandler = function (data) {
                    self.selectedTab(data.sid);
                    var newPage = "personDetails/area/" + data.html.toLowerCase();
                    self.currentModule(newPage);
                    return true;
                };

                self.currentModule = ko.observable("detail_area");
                self.modulePath = ko.pureComputed(
                        function ()
                        {
                            return {name: 'personDetails/area/' + self.currentModule()};
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

            return new areaContentViewModel;
        });
