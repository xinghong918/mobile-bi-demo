/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * filterWindow module
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'viewModels/header', 'viewModels/phone/dashboard',  'ojs/ojknockout', 'promise', 'data/globalVars',
    'ojs/ojdatagrid', 'ojs/ojrowexpander', 'ojs/ojflattenedtreedatagriddatasource', 'ojs/ojjsontreedatasource'
], function (oj, ko, $, header, dash) {
    /**
     * The view model for the main content view template
     */
    function filterWindowContentViewModel() {
        var self = this;
        self.dataSource = ko.observable();
        self.dataArray = new Array();


        self.cancelIt = function () {
            oj.Router.rootInstance.go('dashboard');
        };

        self.updateoption = function (event, data)
        {
            if (data.option === "currentCell") {
                if (undefined !== data.value) {
		if (undefined !== data.value.indexes) {
                    var tempVar = data.value.keys.row;
//					console.log(data.value)
//                    console.log("choose ： ", self.dataArray[tempVar]);
                    header.presentTitle(self.dataMap[tempVar]);
                    //chooseFilter = self.dataArray[tempVar];
					chooseFilter = {}
					chooseFilter.rowId = data.value.keys.row;
					chooseFilter.rowName = self.dataMap[tempVar];
                    oj.Router.rootInstance.go('dashboard');
					dash.initView();
		    }
                }
            }
        };

        self.handleActivated = function (attr) {
            $('#grid_window').ojDataGrid("refresh");
        };
		
		self.buildMap = function(node, map) {
			if (!node)
				return;
			map[node.attr.id] = node.attr.name;
			for (var x in node.children) {
				self.buildMap(node.children[x], map);
			}
		}
        self.handleAttached = function (info) {
            //$.getJSON("http://"+baseUrl+"/user/privilege?loginName="+sessionStorage.getItem('loginName')+"&token="+sessionStorage.getItem("token"),
			$.getJSON("js/data/AreaSelection.json",
                    function (data)
                    {
						self.dataMap = [];
						for (var x in data) {
							self.buildMap(data[x], self.dataMap);
						}
						
                        self.dataArray = new Array();
                        self.dataSource();

                        var options = {
                            'expanded': '',
                            'rowHeader': 'name',
                            'columns': ['btn']
                        };
                         var arr = new Array();
                        for (var i = 0; i < data.length; i++) {
                            arr.push(data[i].attr.id);
                            self.dataArray.push(data[i].attr.name);
                            if (data[i].children) {
                                var lvOne = data[i].children;
                                for (var k = 0; k < lvOne.length; k++) {
                                    self.dataArray.push(lvOne[k].attr.name);
                                    if (lvOne[k].children) {
                                        var lvTwo = lvOne[k].children;
                                        for (var m = 0; m < lvTwo.length; m++) {
                                            self.dataArray.push(lvTwo[m].attr.name);
                                            if (lvTwo[m].children) {
                                                var lvThree = lvTwo[m].children;
                                                for (var n = 0; n < lvThree.length; n++) {
                                                    self.dataArray.push(lvThree[n].attr.name);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
//                        console.log(self.dataArray);
                        options.expanded=arr;
                        var flattenedData = new oj.FlattenedTreeDataGridDataSource(
                                new oj.JsonTreeDataSource(data), options);

                        self.dataSource(flattenedData);
//                        console.log(flattenedData);
                    }
            );
        };
        self.handleBindingsApplied = function (info) {

        };
        self.handleDetached = function (info) {
            self.dataSource();
        };
    }

    return filterWindowContentViewModel;
});
