
define(['ojs/ojcore', 'knockout', 'jquery', 'viewModels/phone/dashboard',
        'ojs/ojknockout', 'ojs/ojaccordion', 'ojs/ojcollapsible', 'ojs/ojradioset', 'ojs/ojchart', 'ojs/ojtimeline', 'data/globalVars'],
        function (oj, ko, $, dashboard)
        {
            function CustomerViewModel() {
                var self = this;

                self.init = function (input) {

                    if (input) {

                        console.log("filter object is :" + JSON.stringify(input));
                    }
                    
                    self.drillDown = function(event,data){
                        dashboard.onSecondDrillDown(event,data);
                    };
                    
                    // 第一个柱形图开始
                    /* toggle button variables */
                    self.stackValue_sale_category_column = ko.observable('');
                    self.orientationValue_sale_category_column = ko.observable('');
                    /* chart data */
                    var sale_category_columnSeries = [];
                    var sale_category_columnGroups = [];
                    /*
                     var comboSeries1 = [{name: "销量", type: "bar", items: [{y: 4808.22}, 2644.01, 825.63, 2033.3, {y: 49.8, color: 'red', label: '最低', labelPosition: 'auto'}, 43.12, 6052.43, {y: 8089.22, color: 'green', label: '最高', labelPosition: 'auto'}, 1.56]},
                     {name: "同比", type: "line", items: [-0.6419, -0.3625, -0.6105, -0.5945, -0.4296, -0.6056, -0.5605, -0.4634, -0.8292], assignedToY2: "on"},
                     {name: "达成率", type: "line", items: [0.6419, {y: 0.3625, color: 'red', label: '最低:36%', labelPosition: 'auto'}, 0.6105, 0.5945, 0.4296, 0.6056, 0.5605, 0.4634, 0.8292], assignedToY2: "on"}
                     ];
                     var comboGroups1 = ["调和油", "玉米油", "花生油", "葵花籽油", "芝麻油", "精品油", "菜籽油", "大豆油", "稻米油"];
                     */
                    self.label_sale_category_column = ko.observable("销量-品类口径柱形");
                    self.comboSeriesValue_sale_category_column = ko.observable(sale_category_columnSeries);
                    self.comboGroupsValue_sale_category_column = ko.observable(sale_category_columnGroups);
                    self.yMax_sale_category_column = 10000;

                    var converterFactory_sale_category_column = oj.Validation.converterFactory('number');
                    var converterOptions_sale_category_column = {style: 'percent'};
                    self.y2Converter_sale_category_column = converterFactory_sale_category_column.createConverter(converterOptions_sale_category_column);

                    /* toggle buttons*/
                    self.stackOptions = [
                        {id: 'unstacked', label: 'unstacked', value: 'off', icon: 'oj-icon demo-bar-unstack'},
                        {id: 'stacked', label: 'stacked', value: 'on', icon: 'oj-icon demo-bar-stack'}
                    ];
                    self.orientationOptions = [
                        {id: 'vertical', label: 'vertical', value: 'vertical', icon: 'oj-icon demo-bar-vert'},
                        {id: 'horizontal', label: 'horizontal', value: 'horizontal', icon: 'oj-icon demo-bar-horiz'}
                    ];
                    self.menuItemSelect = function (event, ui) {
                        self.selectedMenuItem(ui.item.children("a").text());
                    };
                    self.selectedMenuItem = ko.observable("(None selected yet)");
                    self.val = ko.observableArray(["2015"]);
                    // 第一个柱形图结束


//============================================================================饼图开始======================================================
                    // 第一个饼图开始
                    self.pie_sale_category_label = ko.observable('');
                    self.pie_sale_category_value = ko.observable([]);
                    self.effectValue = ko.observable('highlightAndExplode');
                    self.threeDValue = ko.observable('off');
                    self.threeDOptions = [
                        {id: '2D', label: '2D', value: 'off', icon: 'oj-icon demo-2d'},
                        {id: '3D', label: '3D', value: 'on', icon: 'oj-icon demo-3d'}
                    ];
                    self.threeDValueChange = function (event, data) {
                        self.threeDValue(data.value);
                        return true;
                    }
                    //销量第一个饼图结束
                    //销量第二个饼图开始
                    self.pie_profit_category_label = ko.observable('');
                    self.pie_profit_category_value = ko.observable([]);
                    self.effectValue = ko.observable('highlightAndExplode');
                    self.threeDValue = ko.observable('off');
                    self.threeDOptions = [
                        {id: '2D', label: '2D', value: 'off', icon: 'oj-icon demo-2d'},
                        {id: '3D', label: '3D', value: 'on', icon: 'oj-icon demo-3d'}
                    ];
                    self.threeDValueChange = function (event, data) {
                        self.threeDValue(data.value);
                        return true;
                    }


                    // 第一个饼图结束



                }
                self.init();

                self.refreshView = function () {
                    //console.log("refreshing");
                    $("#sale_category_column").ojChart("refresh");
                };

                self.reInitView = function () {
                    if (!filterData) {
                    }

                    var stringFilter = "?" + "primarySelection=" + (filterData.primarySelection).toUpperCase()
                            + "&secondSelection=" + filterData.secondSelection
                            + "&year=" + filterData.year
                            + "&quarter=" + filterData.quarter
                            + "&month=" + filterData.month
                            + "&category_1_selection=" + filterData.firstArea
                            + "&category_2_selection=" + filterData.secondArea
                            + "&change=" + filterData.change
                            + "&dataRoleId=" + chooseFilter.rowId
                    // primarySelection=AREA
                    //&secondSelection=area
                    //&year=2017
                    //&quarter=3
                    //&month=7
                    //&area_1_selection=华北大区
                    //&area_2_selection=所有
                    //&dataRoleId

                    console.log('reInitView=' + servURL + stringFilter);
                    $.ajax({
                        type: "GET",
                        //url: "http://" + baseUrl + "/category/listCategoryData" + stringFilter,
                        url: "js/data/category/category.json",
                        dataType: "json",
                        success: function (resp) {
                            console.log(resp);
                            if (resp.sale) {
                                self.comboSeriesValue_sale_category_column(resp.sale.chart1.data.series);
                                self.comboGroupsValue_sale_category_column(resp.sale.chart1.data.groups);
                                self.label_sale_category_column(resp.sale.chart1.chartname);
                            }



                            //self.label_income_area_category_column(resp.grossProfit.chart4.chartname);


                            //console.log(resp.grossProfit.chart1.data.series)
                            spindleChartGroups = resp.sale.chart1.data.groups;
                            spindleChartSeries = [];

                            spindleChartSeriesTop = [];
                            spindleChartSeriesBot = [];
                            for (var y in resp.sale.chart1.data.series) {
                                if (resp.sale.chart1.data.series[y].name == '销量') {
                                    for (var i in resp.sale.chart1.data.series[y].items) {
                                        var itemData = resp.sale.chart1.data.series[y].items[i]
                                        spindleChartSeries.push({name: spindleChartGroups[i], value: itemData.y});
                                    }
                                }
                            }
                            spindleChartSeries.sort(function (o1, o2) {
                                if (o1.value > o2.value)
                                    return 1;
                                else if (o1.value == o2.value)
                                    return 0;
                                else
                                    return -1;
                            })


                            spindleChartSeriesArr = [[], []];
                            //console.log(spindleChartSeries);
                            spindleChartColors = ['#267DB3', '#68c182', '#fad55c', '#ed6647', '#8561c8', '#6ddbdb', '#ffb54d', '#e371b2', '#47bdef', '#a2bf39', '#a75dba']
                            for (var i in spindleChartSeries) {
                                spindleChartSeries[i].color = spindleChartColors[i]
                                if (i % 2 == 0)
                                    spindleChartSeriesArr[0].push(spindleChartSeries[i])
                                else
                                    spindleChartSeriesArr[1].unshift(spindleChartSeries[i])
                            }

                            var len = spindleChartSeries.length;
                            $("#spindle").html("")
                            for (var j in spindleChartSeriesArr) {
                                var spindleChartSeriesPart = spindleChartSeriesArr[j];
                                for (var i in spindleChartSeriesPart) {
                                    var width = spindleChartSeriesPart[i].value / spindleChartSeries[len - 1].value * 100
                                    var html = "<tr>" +
                                            "<td class='spindle-ledgend'>" + spindleChartSeriesPart[i].name + "</td>" +
                                            "<td class='spindle-chart' align='middle'>" +
                                            "<div class='spindle-bar' style='width:" + width + "%; background:" + spindleChartSeriesPart[i].color + "; height: 20px; display: block'>" +
                                            "<span>" + spindleChartSeriesPart[i].value + "</span></div></td></tr>"
                                    $("#spindle").append(html)
                                    //console.log(html)
                                }

                            }



                            self.refreshView();
                        },
                        error: function (e) {
                            alert('Error: ' + e + "load local value");
                            self.sale_category_column();
                        }
                    });
                };
                // Below are a subset of the ViewModel methods invoked by the ojModule binding
                // Please reference the ojModule jsDoc for additionaly available methods.

                /**
                 * Optional ViewModel method invoked when this ViewModel is about to be
                 * used for the View transition.  The application can put data fetch logic
                 * here that can return a Promise which will delay the handleAttached function
                 * call below until the Promise is resolved.
                 * @param {Object} info - An object with the following key-value pairs:
                 * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
                 * @param {Function} info.valueAccessor - The binding's value accessor.
                 * @return {Promise|undefined} - If the callback returns a Promise, the next phase (attaching DOM) will be delayed until
                 * the promise is resolved
                 */
                self.handleActivated = function (info) {
                    // Implement if needed
                    setTimeout(function () {
                        self.refreshView();
                        self.reInitView();
                    }, 1000);

                };

                /**
                 * Optional ViewModel method invoked after the View is inserted into the
                 * document DOM.  The application can put logic that requires the DOM being
                 * attached here.
                 * @param {Object} info - An object with the following key-value pairs:
                 * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
                 * @param {Function} info.valueAccessor - The binding's value accessor.
                 * @param {boolean} info.fromCache - A boolean indicating whether the module was retrieved from cache.
                 */
                self.handleAttached = function (info) {
                    // Implement if needed

                };

                self.sale_category_column = function () {
                    // Implement if needed
                    var serverURL = "data/sale_category_column.txt"
                    $.get(serverURL, function (data) {
                        var obj = eval('(' + data + ')');
                        sale_category_columnSeries = [];
                        sale_category_columnGroups = [];
                        for (var i = 0; i < obj.groups.length; i++) {
                            sale_category_columnGroups.push(obj.groups[i]);
                        }
                        for (var i = 0; i < obj.series.length; i++) {
                            sale_category_columnSeries.push(obj.series[i]);
                        }
                        self.comboSeriesValue_sale_category_column(sale_category_columnSeries);
                        self.comboGroupsValue_sale_category_column(sale_category_columnGroups);
                        console.log(self.comboSeriesValue_sale_category_column());
                    });
                };

                /**
                 * Optional ViewModel method invoked after the bindings are applied on this View.
                 * If the current View is retrieved from cache, the bindings will not be re-applied
                 * and this callback will not be invoked.
                 * @param {Object} info - An object with the following key-value pairs:
                 * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
                 * @param {Function} info.valueAccessor - The binding's value accessor.
                 */
                self.handleBindingsApplied = function (info) {
                    // Implement if needed

                };

                /*
                 * Optional ViewModel method invoked after the View is removed from the
                 * document DOM.
                 * @param {Object} info - An object with the following key-value pairs:
                 * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
                 * @param {Function} info.valueAccessor - The binding's value accessor.
                 * @param {Array} info.cachedNodes - An Array containing cached nodes for the View if the cache is enabled.
                 */
                self.handleDetached = function (info) {
                    // Implement if needed
                };
            }

            /*
             * Returns a constructor for the ViewModel so that the ViewModel is constrcuted
             * each time the view is displayed.  Return an instance of the ViewModel if
             * only one instance of the ViewModel is needed.
             */
            var model = new CustomerViewModel();
            //model.updateTimelineSeriesValue();
            return model;


        });
