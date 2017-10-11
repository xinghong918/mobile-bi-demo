
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojaccordion', 'ojs/ojcollapsible', 'ojs/ojradioset', 'ojs/ojchart', 'ojs/ojtimeline'],
        function (oj, ko, $)
        {
            function CustomerViewModel() {
                var self = this;
                self.pie_income_category_value = ko.observable([]);
                self.pie_income_category_label = ko.observable([]);
                self.init = function (input) {
                    if (input) {

                        console.log("filter object is :" + JSON.stringify(input));
                    }
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
                    // 第二个柱形图开始

                    self.stackValue_sale_area_category_column = ko.observable('');
                    self.orientationValue_sale_area_category_column = ko.observable('');

                    var sale_area_category_columnSeries = [];
                    var sale_area_category_columnGroups = [];

                    self.comboSeriesValue_sale_area_category_column = ko.observableArray(sale_area_category_columnSeries);
                    self.comboGroupsValue_sale_area_category_column = ko.observableArray(sale_area_category_columnGroups);
                    self.yMax_sale_area_category_column = 10000;

                    var converterFactory_sale_area_category_column = oj.Validation.converterFactory('number');
                    var converterOptions_sale_area_category_column = {style: 'percent'};
                    self.y2Converter_sale_area_category_column = converterFactory_sale_area_category_column.createConverter(converterOptions_sale_area_category_column);

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
                    // 第二个柱形图结束
                    //
                    // 第三个柱形图开始

                    self.stackValue_income_category_column = ko.observable('');
                    self.orientationValue_income_category_column = ko.observable('');

                    var income_category_columnSeries = [];
                    var income_category_columnGroups = [];

                    self.comboSeriesValue_income_category_column = ko.observableArray(income_category_columnSeries);
                    self.comboGroupsValue_income_category_column = ko.observableArray(income_category_columnGroups);
                    self.yMax_income_category_column = 10000;

                    var converterFactory_income_category_column = oj.Validation.converterFactory('number');
                    var converterOptions_income_category_column = {style: 'percent'};
                    self.y2Converter_income_category_column = converterFactory_income_category_column.createConverter(converterOptions_income_category_column);

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
                    // 第三个柱形图结束
                    //
                    // 第四个柱形图开始

                    self.stackValue_income_area_category_column = ko.observable('');
                    self.orientationValue_income_area_category_column = ko.observable('');

                    var income_area_category_columnSeries = [];
                    var income_area_category_columnGroups = [];

                    self.comboSeriesValue_income_area_category_column = ko.observableArray(income_area_category_columnSeries);
                    self.comboGroupsValue_income_area_category_column = ko.observableArray(income_area_category_columnGroups);
                    self.yMax_income_area_category_column = 10000;

                    var converterFactory_income_area_category_column = oj.Validation.converterFactory('number');
                    var converterOptions_income_area_category_column = {style: 'percent'};
                    self.y2Converter_income_area_category_column = converterFactory_income_area_category_column.createConverter(converterOptions_income_area_category_column);

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
                    // 第四个柱形图结束
                    //
                    // 第五个柱形图开始

                    self.stackValue_profit_category_column = ko.observable('');
                    self.orientationValue_profit_category_column = ko.observable('');

                    var profit_category_columnSeries = [];
                    var profit_category_columnGroups = [];

                    self.comboSeriesValue_profit_category_column = ko.observableArray(profit_category_columnSeries);
                    self.comboGroupsValue_profit_category_column = ko.observableArray(profit_category_columnGroups);
                    self.yMax_profit_category_column = 10000;

                    var converterFactory_profit_category_column = oj.Validation.converterFactory('number');
                    var converterOptions_profit_category_column = {style: 'percent'};
                    self.y2Converter_profit_category_column = converterFactory_profit_category_column.createConverter(converterOptions_profit_category_column);

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
                    // 第五个柱形图结束
                    // 第六个柱形图开始

                    self.stackValue_stock_catetory_column = ko.observable('');
                    self.orientationValue_stock_catetory_column = ko.observable('');

                    var stock_catetory_columnSeries = [];
                    var stock_catetory_columnGroups = [];

                    self.comboSeriesValue_stock_catetory_column = ko.observableArray(stock_catetory_columnSeries);
                    self.comboGroupsValue_stock_catetory_column = ko.observableArray(stock_catetory_columnGroups);
                    self.yMax_stock_catetory_column = 10000;

                    var converterFactory_stock_catetory_column = oj.Validation.converterFactory('number');
                    var converterOptions_stock_catetory_column = {style: 'percent'};
                    self.y2Converter_stock_catetory_column = converterFactory_stock_catetory_column.createConverter(converterOptions_stock_catetory_column);

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
                    // 第六个柱形图结束
                    //
                    // 第七个柱形图开始

                    self.stackValue_stock_alert_catetory_column = ko.observable('');
                    self.orientationValue_stock_alert_catetory_column = ko.observable('');

                    var stock_alert_catetory_columnSeries = [];
                    var stock_alert_catetory_columnGroups = [];

                    self.comboSeriesValue_stock_alert_catetory_column = ko.observableArray(stock_alert_catetory_columnSeries);
                    self.comboGroupsValue_stock_alert_catetory_column = ko.observableArray(stock_alert_catetory_columnGroups);
                    self.yMax_stock_alert_catetory_column = 10000;

                    var converterFactory_stock_alert_catetory_column = oj.Validation.converterFactory('number');
                    var converterOptions_stock_alert_catetory_column = {style: 'percent'};
                    self.y2Converter_stock_alert_catetory_column = converterFactory_stock_alert_catetory_column.createConverter(converterOptions_stock_alert_catetory_column);

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
                    // 第七个柱形图结束
                    //
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
                    //第二个饼图开始
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

                
                self.reInitView = function () {
                    var stringFilter = "?" + "primarySelection=" + (filterData.primarySelection).toUpperCase()
                            + "&secondSelection=" + filterData.secondSelection
                            + "&year=" + filterData.year
                            + "&quarter=" + filterData.quarter
                            + "&month=" + filterData.month
                            + "&area_1_selection=" + filterData.firstArea
                            + "&area_2_selection=" + filterData.secondArea
                            + "&change=" + filterData.change
                            + "&dataRoleId=" + chooseFilter.rowId;

                    console.log(stringFilter);
                    $.ajax({
                        type: "GET",
                        //url: "http://" + baseUrl + "/Area/listCategoryData" + stringFilter,
						url: 'js/data/area/category.json',
                        dataType: "json",
                        success: function (resp) {
                            console.log(resp);
                            // we have the response
                            //alert("detail_area_" + JSON.stringify(resp));
                            if (resp.sale) {
                            //get details like
                            self.comboSeriesValue_sale_category_column(resp.sale.chart1.data.series);
                            self.comboGroupsValue_sale_category_column(resp.sale.chart1.data.groups);
                            self.label_sale_category_column(resp.sale.chart1.chartname);

                            self.pie_sale_category_value(resp.sale.chart2.data);
                            self.pie_sale_category_label(resp.sale.chart2.chartname);
                            }

                            //毛利
                            //
                            //
                            self.comboSeriesValue_profit_category_column(resp.grossProfit.chart1.data.series);
                            self.comboGroupsValue_profit_category_column(resp.grossProfit.chart1.data.groups);
                            //self.label_profit_category_column(resp.grossProfit.chart1.chartname);

                            self.pie_profit_category_value(resp.grossProfit.chart2.data);
                            self.pie_profit_category_label(resp.grossProfit.chart2.chartname);

                            self.comboSeriesValue_income_category_column(resp.grossProfit.chart3.data.series);
                            self.comboGroupsValue_income_category_column(resp.grossProfit.chart3.data.groups);
                            //self.label_income_category_column(resp.grossProfit.chart3.chartname);

                            self.comboSeriesValue_income_area_category_column(resp.grossProfit.chart4.data.series);
                            self.comboGroupsValue_income_area_category_column(resp.grossProfit.chart4.data.groups);
                            //self.label_income_area_category_column(resp.grossProfit.chart4.chartname);

                        },
                        error: function (e) {
                            alert('Error: ' + e + "load local value");
                            self.sale_category_column();
                            self.sale_area_category_column();
                            self.income_category_column();
                            self.income_area_category_column();
                            self.profit_category_column();
                            self.stock_catetory_column();
                            self.stock_alert_catetory_column();
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
                    self.reInitView();
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
                    self.reInitView();
                };

                self.sale_category_column = function () {
                    // Implement if needed
                    var serverURL = "data/sale_category_column.txt";
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
                    });
                };

                self.sale_area_category_column = function () {
                    // Implement if needed
                    var serverURL = "data/sale_area_category_column.txt"
                    $.get(serverURL, function (data) {
                        var obj = eval('(' + data + ')');
                        sale_area_category_columnSeries = [];
                        sale_area_category_columnGroups = [];
                        for (var i = 0; i < obj.groups.length; i++) {
                            sale_area_category_columnGroups.push(obj.groups[i]);
                        }
                        for (var i = 0; i < obj.series.length; i++) {
                            sale_area_category_columnSeries.push(obj.series[i]);
                        }
                        self.comboSeriesValue_sale_area_category_column(sale_area_category_columnSeries);
                        self.comboGroupsValue_sale_area_category_column(sale_area_category_columnGroups);
                    });
                };

                self.income_category_column = function () {
                    // Implement if needed
                    var serverURL = "data/income_category_column.txt"
                    $.get(serverURL, function (data) {
                        var obj = eval('(' + data + ')');
                        income_category_columnSeries = [];
                        income_category_columnGroups = [];
                        for (var i = 0; i < obj.groups.length; i++) {
                            income_category_columnGroups.push(obj.groups[i]);
                        }
                        for (var i = 0; i < obj.series.length; i++) {
                            income_category_columnSeries.push(obj.series[i]);
                        }
                        self.comboSeriesValue_income_category_column(income_category_columnSeries);
                        self.comboGroupsValue_income_category_column(income_category_columnGroups);
                    });
                };

                self.income_area_category_column = function () {
                    // Implement if needed
                    var serverURL = "data/income_area_category_column.txt"
                    $.get(serverURL, function (data) {
                        var obj = eval('(' + data + ')');
                        income_area_category_columnSeries = [];
                        income_area_category_columnGroups = [];
                        for (var i = 0; i < obj.groups.length; i++) {
                            income_area_category_columnGroups.push(obj.groups[i]);
                        }
                        for (var i = 0; i < obj.series.length; i++) {
                            income_area_category_columnSeries.push(obj.series[i]);
                        }
                        self.comboSeriesValue_income_area_category_column(income_area_category_columnSeries);
                        self.comboGroupsValue_income_area_category_column(income_area_category_columnGroups);
                    });
                };

                self.profit_category_column = function () {
                    var serverURL = "data/profit_category_column.txt"
                    $.get(serverURL, function (data) {
                        var obj = eval('(' + data + ')');
                        profit_category_columnSeries = [];
                        profit_category_columnGroups = [];
                        for (var i = 0; i < obj.groups.length; i++) {
                            profit_category_columnGroups.push(obj.groups[i]);
                        }
                        for (var i = 0; i < obj.series.length; i++) {
                            profit_category_columnSeries.push(obj.series[i]);
                        }
                        self.comboSeriesValue_profit_category_column(profit_category_columnSeries);
                        self.comboGroupsValue_profit_category_column(profit_category_columnGroups);
                    });
                };

                self.stock_catetory_column = function () {
                    var serverURL = "data/stock_catetory_column.txt"
                    $.get(serverURL, function (data) {
                        var obj = eval('(' + data + ')');
                        stock_catetory_columnSeries = [];
                        stock_catetory_columnGroups = [];
                        for (var i = 0; i < obj.groups.length; i++) {
                            stock_catetory_columnGroups.push(obj.groups[i]);
                        }
                        for (var i = 0; i < obj.series.length; i++) {
                            stock_catetory_columnSeries.push(obj.series[i]);
                        }
                        self.comboSeriesValue_stock_catetory_column(stock_catetory_columnSeries);
                        self.comboGroupsValue_stock_catetory_column(stock_catetory_columnGroups);
                    });
                };

                self.stock_alert_catetory_column = function () {
                    var serverURL = "data/stock_alert_catetory_column.txt"
                    $.get(serverURL, function (data) {
                        var obj = eval('(' + data + ')');
                        stock_alert_catetory_columnSeries = [];
                        stock_alert_catetory_columnGroups = [];
                        for (var i = 0; i < obj.groups.length; i++) {
                            stock_alert_catetory_columnGroups.push(obj.groups[i]);
                        }
                        for (var i = 0; i < obj.series.length; i++) {
                            stock_alert_catetory_columnSeries.push(obj.series[i]);
                        }
                        self.comboSeriesValue_stock_alert_catetory_column(stock_alert_catetory_columnSeries);
                        self.comboGroupsValue_stock_alert_catetory_column(stock_alert_catetory_columnGroups);
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
