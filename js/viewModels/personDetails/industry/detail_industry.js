
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojaccordion', 'ojs/ojcollapsible', 'ojs/ojradioset', 'ojs/ojchart', 'ojs/ojtimeline', 'data/globalVars'],
        function (oj, ko, $)
        {
            function CustomerViewModel() {
                var self = this;
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
                    self.stackValue_sale_area_channel_customer_column = ko.observable('');
                    self.orientationValue_sale_area_channel_customer_column = ko.observable('');

                    var sale_area_channel_customer_columnSeries = [];
                    var sale_area_channel_customer_columnGroups = [];

                    self.comboSeriesValue_sale_area_channel_customer_column = ko.observableArray(sale_area_channel_customer_columnSeries);
                    self.comboGroupsValue_sale_area_channel_customer_column = ko.observableArray(sale_area_channel_customer_columnGroups);
                    self.yMax_sale_area_channel_customer_column = 10000;

                    var converterFactory_sale_area_channel_customer_column = oj.Validation.converterFactory('number');
                    var converterOptions_sale_area_channel_customer_column = {style: 'percent'};
                    self.y2Converter_sale_area_channel_customer_column = converterFactory_sale_area_channel_customer_column.createConverter(converterOptions_sale_area_channel_customer_column);

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
                    // 第三个柱形图开始

                    self.stackValue_sale_channel_customer_area_column = ko.observable('');
                    self.orientationValue_sale_channel_customer_area_column = ko.observable('');

                    var sale_channel_customer_area_columnSeries = [];
                    var sale_channel_customer_area_columnGroups = [];

                    self.comboSeriesValue_sale_channel_customer_area_column = ko.observableArray(sale_channel_customer_area_columnSeries);
                    self.comboGroupsValue_sale_channel_customer_area_column = ko.observableArray(sale_channel_customer_area_columnGroups);
                    self.yMax_sale_channel_customer_area_column = 10000;

                    var converterFactory_sale_channel_customer_area_column = oj.Validation.converterFactory('number');
                    var converterOptions_sale_channel_customer_area_column = {style: 'percent'};
                    self.y2Converter_sale_channel_customer_area_column = converterFactory_sale_channel_customer_area_column.createConverter(converterOptions_sale_channel_customer_area_column);

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
                    // 第四个柱形图开始

                    self.stackValue_income_channel_column = ko.observable('');
                    self.orientationValue_income_channel_column = ko.observable('');

                    var income_channel_columnSeries = [];
                    var income_channel_columnGroups = [];

                    self.comboSeriesValue_income_channel_column = ko.observableArray(income_channel_columnSeries);
                    self.comboGroupsValue_income_channel_column = ko.observableArray(income_channel_columnGroups);
                    self.yMax_income_channel_column = 10000;

                    var converterFactory_income_channel_column = oj.Validation.converterFactory('number');
                    var converterOptions_income_channel_column = {style: 'percent'};
                    self.y2Converter_income_channel_column = converterFactory_income_channel_column.createConverter(converterOptions_income_channel_column);

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
                    // 第五个柱形图开始

                    self.stackValue_income_area_channel_customer_column = ko.observable('');
                    self.orientationValue_income_area_channel_customer_column = ko.observable('');

                    var income_area_channel_customer_columnSeries = [];
                    var income_area_channel_customer_columnGroups = [];

                    self.comboSeriesValue_income_area_channel_customer_column = ko.observableArray(income_area_channel_customer_columnSeries);
                    self.comboGroupsValue_income_area_channel_customer_column = ko.observableArray(income_area_channel_customer_columnGroups);
                    self.yMax_income_area_channel_customer_column = 10000;

                    var converterFactory_income_area_channel_customer_column = oj.Validation.converterFactory('number');
                    var converterOptions_income_area_channel_customer_column = {style: 'percent'};
                    self.y2Converter_income_area_channel_customer_column = converterFactory_income_area_channel_customer_column.createConverter(converterOptions_income_area_channel_customer_column);

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
                    //
                    // 第六个柱形图开始

                    self.stackValue_income_channel_customer_area_column = ko.observable('');
                    self.orientationValue_income_channel_customer_area_column = ko.observable('');

                    var income_channel_customer_area_columnSeries = [];
                    var income_channel_customer_area_columnGroups = [];

                    self.comboSeriesValue_income_channel_customer_area_column = ko.observableArray(income_channel_customer_area_columnSeries);
                    self.comboGroupsValue_income_channel_customer_area_column = ko.observableArray(income_channel_customer_area_columnGroups);
                    self.yMax_income_channel_customer_area_column = 10000;

                    var converterFactory_income_channel_customer_area_column = oj.Validation.converterFactory('number');
                    var converterOptions_income_channel_customer_area_column = {style: 'percent'};
                    self.y2Converter_income_channel_customer_area_column = converterFactory_income_channel_customer_area_column.createConverter(converterOptions_income_channel_customer_area_column);

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

                    self.stackValue_profit_channel_column = ko.observable('');
                    self.orientationValue_profit_channel_column = ko.observable('');

                    var profit_channel_columnSeries = [];
                    var profit_channel_columnGroups = [];

                    self.comboSeriesValue_profit_channel_column = ko.observableArray(profit_channel_columnSeries);
                    self.comboGroupsValue_profit_channel_column = ko.observableArray(profit_channel_columnGroups);
                    self.yMax_profit_channel_column = 10000;

                    var converterFactory_profit_channel_column = oj.Validation.converterFactory('number');
                    var converterOptions_profit_channel_column = {style: 'percent'};
                    self.y2Converter_profit_channel_column = converterFactory_profit_channel_column.createConverter(converterOptions_profit_channel_column);

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
                    self.threeDValueChange = function(event, data) {
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
                    self.threeDValueChange = function(event, data) {
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
                        + "&channel_selection=" + filterData.firstArea
                        + "&customer_selection=" + filterData.secondArea
                            + "&change=" + filterData.change
                            + "&dataRoleId=" + chooseFilter.rowId

                    console.log(stringFilter);
                    $.ajax({
                        type: "GET",
                        //url: "http://"+baseUrl+"/channel/listCustomerData" + stringFilter,
						url: 'js/data/channel/customer.json',
                        dataType: "json",
                        success: function (resp) {
                            self.comboSeriesValue_sale_category_column( resp.sale.chart1.data.series);
                            self.comboGroupsValue_sale_category_column(resp.sale.chart1.data.groups);
                            self.label_sale_category_column(resp.sale.chart1.chartname);

                            self.pie_sale_category_value(resp.sale.chart2.data);
                            self.pie_sale_category_label(resp.sale.chart2.chartname);

                            //毛利
                            //
                            //
                            self.comboSeriesValue_profit_channel_column( resp.grossProfit.chart1.data.series);
                            self.comboGroupsValue_profit_channel_column(resp.grossProfit.chart1.data.groups);
                            //self.label_profit_channel_column(resp.grossProfit.chart1.chartname);

                            self.pie_profit_category_value(resp.grossProfit.chart2.data);
                            self.pie_profit_category_label(resp.grossProfit.chart2.chartname);

                            self.comboSeriesValue_income_channel_column( resp.grossProfit.chart3.data.series);
                            self.comboGroupsValue_income_channel_column(resp.grossProfit.chart3.data.groups);
                            //self.label_income_channel_column(resp.grossProfit.chart3.chartname);

                            self.comboSeriesValue_income_area_channel_customer_column( resp.grossProfit.chart4.data.series);
                            self.comboGroupsValue_income_area_channel_customer_column(resp.grossProfit.chart4.data.groups);
                            //self.label_income_area_channel_customer_column(resp.grossProfit.chart4.chartname);
                        },
                        error: function (e) {
                            alert('Error: ' + e + "load local value");
                            self.sale_channel_column();
                            self.sale_area_channel_customer_column();
                            self.sale_channel_customer_area_column();
                            self.income_channel_column();
                            self.income_area_channel_customer_column();
                            self.income_channel_customer_area_column();
                            self.profit_channel_column();
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

                };

                self.sale_channel_column = function () {
                    // Implement if needed
                    var serverURL = "data/sale_channel_column.txt"
                    $.get(serverURL, function (data) {
                        var obj = eval('(' + data + ')');
                        sale_channel_columnSeries = [];
                        sale_channel_columnGroups = [];
                        for (var i = 0; i < obj.groups.length; i++) {
                            sale_channel_columnGroups.push(obj.groups[i]);
                        }
                        for (var i = 0; i < obj.series.length; i++) {
                            sale_channel_columnSeries.push(obj.series[i]);
                        }
                        self.comboSeriesValue_sale_channel_column(sale_channel_columnSeries);
                        self.comboGroupsValue_sale_channel_column(sale_channel_columnGroups);
                    });
                };

                self.sale_area_channel_customer_column = function () {
                    // Implement if needed
                    var serverURL = "data/sale_area_channel_customer_column.txt"
                    $.get(serverURL, function (data) {
                        var obj = eval('(' + data + ')');
                        sale_area_channel_customer_columnSeries = [];
                        sale_area_channel_customer_columnGroups = [];
                        for (var i = 0; i < obj.groups.length; i++) {
                            sale_area_channel_customer_columnGroups.push(obj.groups[i]);
                        }
                        for (var i = 0; i < obj.series.length; i++) {
                            sale_area_channel_customer_columnSeries.push(obj.series[i]);
                        }
                        self.comboSeriesValue_sale_area_channel_customer_column(sale_area_channel_customer_columnSeries);
                        self.comboGroupsValue_sale_area_channel_customer_column(sale_area_channel_customer_columnGroups);
                    });
                };

                self.sale_channel_customer_area_column = function () {
                    // Implement if needed
                    var serverURL = "data/sale_channel_customer_area_column.txt"
                    $.get(serverURL, function (data) {
                        var obj = eval('(' + data + ')');
                        sale_channel_customer_area_columnSeries = [];
                        sale_channel_customer_area_columnGroups = [];
                        for (var i = 0; i < obj.groups.length; i++) {
                            sale_channel_customer_area_columnGroups.push(obj.groups[i]);
                        }
                        for (var i = 0; i < obj.series.length; i++) {
                            sale_channel_customer_area_columnSeries.push(obj.series[i]);
                        }
                        self.comboSeriesValue_sale_channel_customer_area_column(sale_channel_customer_area_columnSeries);
                        self.comboGroupsValue_sale_channel_customer_area_column(sale_channel_customer_area_columnGroups);
                    });
                };

                self.income_channel_column = function () {
                    // Implement if needed
                    var serverURL = "data/income_category_column.txt"
                    $.get(serverURL, function (data) {
                        var obj = eval('(' + data + ')');
                        income_channel_columnSeries = [];
                        income_channel_columnGroups = [];
                        for (var i = 0; i < obj.groups.length; i++) {
                            income_channel_columnGroups.push(obj.groups[i]);
                        }
                        for (var i = 0; i < obj.series.length; i++) {
                            income_channel_columnSeries.push(obj.series[i]);
                        }
                        self.comboSeriesValue_income_channel_column(income_channel_columnSeries);
                        self.comboGroupsValue_income_channel_column(income_channel_columnGroups);
                    });
                };

                self.income_area_channel_customer_column = function () {
                    // Implement if needed
                    var serverURL = "data/income_category_column.txt"
                    $.get(serverURL, function (data) {
                        var obj = eval('(' + data + ')');
                        income_area_channel_customer_columnSeries = [];
                        income_area_channel_customer_columnGroups = [];
                        for (var i = 0; i < obj.groups.length; i++) {
                            income_area_channel_customer_columnGroups.push(obj.groups[i]);
                        }
                        for (var i = 0; i < obj.series.length; i++) {
                            income_area_channel_customer_columnSeries.push(obj.series[i]);
                        }
                        self.comboSeriesValue_income_area_channel_customer_column(income_area_channel_customer_columnSeries);
                        self.comboGroupsValue_income_area_channel_customer_column(income_area_channel_customer_columnGroups);
                    });
                };

                self.income_channel_customer_area_column = function () {
                    // Implement if needed
                    var serverURL = "data/income_category_column.txt"
                    $.get(serverURL, function (data) {
                        var obj = eval('(' + data + ')');
                        income_channel_customer_area_columnSeries = [];
                        income_channel_customer_area_columnGroups = [];
                        for (var i = 0; i < obj.groups.length; i++) {
                            income_channel_customer_area_columnGroups.push(obj.groups[i]);
                        }
                        for (var i = 0; i < obj.series.length; i++) {
                            income_channel_customer_area_columnSeries.push(obj.series[i]);
                        }
                        self.comboSeriesValue_income_channel_customer_area_column(income_channel_customer_area_columnSeries);
                        self.comboGroupsValue_income_channel_customer_area_column(income_channel_customer_area_columnGroups);
                    });
                };
                self.profit_channel_column = function () {
                    // Implement if needed
                    var serverURL = "data/income_category_column.txt"
                    $.get(serverURL, function (data) {
                        var obj = eval('(' + data + ')');
                        profit_channel_columnSeries = [];
                        profit_channel_columnGroups = [];
                        for (var i = 0; i < obj.groups.length; i++) {
                            profit_channel_columnGroups.push(obj.groups[i]);
                        }
                        for (var i = 0; i < obj.series.length; i++) {
                            profit_channel_columnSeries.push(obj.series[i]);
                        }
                        self.comboSeriesValue_profit_channel_column(profit_channel_columnSeries);
                        self.comboGroupsValue_profit_channel_column(profit_channel_columnGroups);
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
