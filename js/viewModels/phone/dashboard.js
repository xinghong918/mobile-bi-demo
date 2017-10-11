/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
define(['knockout', 'ojs/ojcore', 'data/data', 'ojs/ojknockout', 'ojs/ojchart', 'ojs/ojgauge', 'ojs/ojtabs', 'ojs/ojinputtext', 'ojs/ojchart',
    'ojs/ojselectcombobox', 'ojs/ojtabs', 'ojs/ojinputtext', 'ojs/ojinputnumber', 'ojs/ojgauge', 'ojs/ojaccordion', 'ojs/ojcollapsible', 'ojs/ojradioset'],
        function (ko, oj, data)
        {
            /*
             * Your application specific code will go here
             */

            function DashboardViewModel() {
                var self = this;
                self.thresholdValues = [{max: 75}, {max: 85}, {}];
                self.gauge4OptionChange = function (e, data) {
                    /*
                     if (data.option == "value") {
                     $("#gauge1").attr('title', "Value: " + Math.round(data['value']) + "<br>Thresholds: Low 33, Medium 67, High 100");
                     $("#gauge1").ojStatusMeterGauge('refresh');
                     }
                     */
                }

                self.isOverOne = function (aNum) {
                    if (aNum() > 100) {
						//console.log(msg + " " + aNum() )
                        return true;
                    } else {
                        return false;
                    }
                };

                self.isOverOneNum = function (aNum) {
                    if (aNum() > 100) {
						return (100 / aNum()) * 100
                        //return aNum() - 100;
                    } else {
                        return aNum();
                    }
                };

                self.total_val1_1_color = ko.observable("red");
                self.value1_3_color = ko.observable("red");
                self.value1_4_color = ko.observable("red");
                self.total_val2_1_color = ko.observable("red");
                self.value2_3_color = ko.observable("red");
                self.value2_4_color = ko.observable("red");
                self.total_val3_1_color = ko.observable("red");
                self.value3_3_color = ko.observable("red");
                self.value3_4_color = ko.observable("red");
                self.total_val4_1_color = ko.observable("red");
                self.value4_3_color = ko.observable("red");
                self.value4_4_color = ko.observable("red");
                self.total_val5_1_color = ko.observable("red");
                self.value5_3_color = ko.observable("red");
                self.value5_4_color = ko.observable("red");
                self.total_val6_1_color = ko.observable("red");
                self.value6_3_color = ko.observable("red");
                self.value6_4_color = ko.observable("red");



                //KPI
                self.kpi_value1_color = ko.observable("red");//kpi_value1);
                self.kpi_value1_2_color = ko.observable("red");//kpi_value1_2);
                self.kpi_value1_3_color = ko.observable("red");//kpi_value1_3);
                self.kpi_value1_4_color = ko.observable("red");//kpi_value1_4);

                self.kpi_value2_color = ko.observable("red");//kpi_value2);
                self.kpi_value2_2_color = ko.observable("red");//kpi_value2_2);
                self.kpi_value2_3_color = ko.observable("red");//kpi_value2_3);
                self.kpi_value2_4_color = ko.observable("red");//kpi_value2_4);

                self.kpi_value3_color = ko.observable("red");//kpi_value3);
                self.kpi_value3_2_color = ko.observable("red");//kpi_value3_2);
                self.kpi_value3_3_color = ko.observable("red");//kpi_value3_3);
                self.kpi_value3_4_color = ko.observable("red");//kpi_value3_4);

                self.kpi_value4_color = ko.observable("red");//kpi_value4);
                self.kpi_value4_2_color = ko.observable("red");//kpi_value4_2);
                self.kpi_value4_3_color = ko.observable("red");//kpi_value4_3);
                self.kpi_value4_4_color = ko.observable("red");//kpi_value4_4);

                self.zb_value1_1_color = ko.observable("red");//zb_value1_1);
                self.zb_value1_2_color = ko.observable("red");//zb_value1_2);
                self.zb_value1_3_color = ko.observable("red");//zb_value1_3);

                self.zb_value2_1_color = ko.observable("red");//zb_value2_1);
                self.zb_value2_2_color = ko.observable("red");//zb_value2_2);
                self.zb_value2_3_color = ko.observable("red");//zb_value2_3);

                self.zb_value3_1_color = ko.observable("red");//zb_value3_1);
                self.zb_value3_2_color = ko.observable("red");//zb_value3_2);
                self.zb_value3_3_color = ko.observable("red");//zb_value3_3);

                self.zb_value4_1_color = ko.observable("red");//zb_value4_1);
                self.zb_value4_2_color = ko.observable("red");//zb_value4_2);
                self.zb_value4_3_color = ko.observable("red");//zb_value4_3);

                self.zb_value5_1_color = ko.observable("red");//zb_value5_1);
                self.zb_value5_2_color = ko.observable("red");//zb_value5_2);
                self.zb_value5_3_color = ko.observable("red");//zb_value5_3);

                self.zb_value6_1_color = ko.observable("red");//zb_value6_1);
                self.zb_value6_2_color = ko.observable("red");//zb_value6_2);
                self.zb_value6_3_color = ko.observable("red");//zb_value6_3);

                self.zb_value7_1_color = ko.observable("red");//zb_value7_1);
                self.zb_value7_2_color = ko.observable("red");//zb_value7_2);
                self.zb_value7_3_color = ko.observable("red");//zb_value7_3);

                self.zb_value8_1_color = ko.observable("red");//zb_value8_1);
                self.zb_value8_2_color = ko.observable("red");//zb_value8_2);
                self.zb_value8_3_color = ko.observable("red");//zb_value8_3);

                self.zb_value9_1_color = ko.observable("red");//zb_value9_1);
                self.zb_value9_2_color = ko.observable("red");//zb_value9_2);
                self.zb_value9_3_color = ko.observable("red");//zb_value9_3);

                self.zb_value10_1_color = ko.observable("red");//zb_value10_1);
                self.zb_value10_2_color = ko.observable("red");//zb_value10_2);
                self.zb_value10_3_color = ko.observable("red");//zb_value10_3);

                //first part              
                self.value1_3 = ko.observable(70);
                self.value1_4 = ko.observable(80);
                self.total_val1_1 = ko.observable(450000);
                self.total_val1_3_perc = ko.computed(function () {
                    return parseFloat(self.value1_3()) + '%';
                });
                self.val1_4_perc = ko.computed(function () {
                    return parseFloat(self.value1_4()) + '%';
                });


                self.value2_3 = ko.observable(83);
                self.value2_4 = ko.observable(80);
                self.total_val2_1 = ko.observable(345222);
                self.total_val2_3_perc = ko.computed(function () {
                    return parseFloat(self.value2_3()) + '%';
                });
                self.val2_4_perc = ko.computed(function () {
                    return parseFloat(self.value2_4()) + '%';
                });

                self.value3_3 = ko.observable(63);
                self.value3_4 = ko.observable(80);
                self.total_val3_1 = ko.observable(4532);
                self.total_val3_3_perc = ko.computed(function () {
                    return parseFloat(self.value3_3()) + '%';
                });
                self.val3_4_perc = ko.computed(function () {
                    return parseFloat(self.value3_4()) + '%';
                });

                self.value4_3 = ko.observable(43);
                self.value4_4 = ko.observable(80);
                self.total_val4_1 = ko.observable(23124);
                self.total_val4_3_perc = ko.computed(function () {
                    return parseFloat(self.value4_3()) + '%';
                });
                self.val4_4_perc = ko.computed(function () {
                    return parseFloat(self.value4_4()) + '%';
                });

                self.value5_3 = ko.observable(93);
                self.value5_4 = ko.observable(80);
                self.total_val5_1 = ko.observable(43212);
                self.total_val5_3_perc = ko.computed(function () {
                    return parseFloat(self.value5_3()) + '%';
                });
                self.val5_4_perc = ko.computed(function () {
                    return parseFloat(self.value5_4()) + '%';
                });

                self.value6_3 = ko.observable(43);
                self.value6_4 = ko.observable(80);
                self.total_val6_1 = ko.observable(43212);
                self.total_val6_3_perc = ko.computed(function () {
                    return parseFloat(self.value6_3()) + '%';
                });
                self.val6_4_perc = ko.computed(function () {
                    return parseFloat(self.value6_4()) + '%';
                });

                //subs
                self.value1_3_1_color = ko.observable("red");
                self.value1_4_1_color = ko.observable("red");
                self.value1_3_2_color = ko.observable("red");
                self.value1_4_2_color = ko.observable("red");
                self.total_val1_1_1 = ko.observable(450000);
                self.total_val1_1_2 = ko.observable(450000);
                self.value1_3_1 = ko.observable(70);
                self.value1_4_1 = ko.observable(80);
                self.total_val1_3_1_perc = ko.computed(function () {
                    return parseFloat(self.value1_3_1()) + '%';
                });
                self.val1_4_1_perc = ko.computed(function () {
                    return parseFloat(self.value1_4_1()) + '%';
                });
                self.value1_3_2 = ko.observable(70);
                self.value1_4_2 = ko.observable(80);
                self.total_val1_3_2_perc = ko.computed(function () {
                    return parseFloat(self.value1_3_2()) + '%';
                });
                self.val1_4_2_perc = ko.computed(function () {
                    return parseFloat(self.value1_4_2()) + '%';
                });

                self.value2_3_1_color = ko.observable("red");
                self.value2_4_1_color = ko.observable("red");
                self.value2_3_2_color = ko.observable("red");
                self.value2_4_2_color = ko.observable("red");
                self.total_val2_1_1 = ko.observable(450000);
                self.total_val2_1_2 = ko.observable(450000);
                self.value2_3_1 = ko.observable(70);
                self.value2_4_1 = ko.observable(80);
                self.total_val2_3_1_perc = ko.computed(function () {
                    return parseFloat(self.value2_3_1()) + '%';
                });
                self.val2_4_1_perc = ko.computed(function () {
                    return parseFloat(self.value2_4_1()) + '%';
                });
                self.value2_3_2 = ko.observable(70);
                self.value2_4_2 = ko.observable(80);
                self.total_val2_3_2_perc = ko.computed(function () {
                    return parseFloat(self.value2_3_2()) + '%';
                });
                self.val2_4_2_perc = ko.computed(function () {
                    return parseFloat(self.value2_4_2()) + '%';
                });

                self.value3_3_1_color = ko.observable("red");
                self.value3_4_1_color = ko.observable("red");
                self.value3_3_2_color = ko.observable("red");
                self.value3_4_2_color = ko.observable("red");
                self.total_val3_1_1 = ko.observable(450000);
                self.total_val3_1_2 = ko.observable(450000);
                self.value3_3_1 = ko.observable(70);
                self.value3_4_1 = ko.observable(80);
                self.total_val3_3_1_perc = ko.computed(function () {
                    return parseFloat(self.value3_3_1()) + '%';
                });
                self.val3_4_1_perc = ko.computed(function () {
                    return parseFloat(self.value3_4_1()) + '%';
                });
                self.value3_3_2 = ko.observable(70);
                self.value3_4_2 = ko.observable(80);
                self.total_val3_3_2_perc = ko.computed(function () {
                    return parseFloat(self.value3_3_2()) + '%';
                });
                self.val3_4_2_perc = ko.computed(function () {
                    return parseFloat(self.value3_4_2()) + '%';
                });

                self.value4_3_1_color = ko.observable("red");
                self.value4_4_1_color = ko.observable("red");
                self.value4_3_2_color = ko.observable("red");
                self.value4_4_2_color = ko.observable("red");
                self.value4_3_3_color = ko.observable("red");
                self.value4_4_3_color = ko.observable("red");
                self.value4_3_4_color = ko.observable("red");
                self.value4_4_4_color = ko.observable("red");
                self.total_val4_1_1 = ko.observable(450000);
                self.total_val4_1_2 = ko.observable(450000);
                self.total_val4_1_3 = ko.observable(450000);
                self.total_val4_1_4 = ko.observable(450000);
                self.value4_3_1 = ko.observable(70);
                self.value4_4_1 = ko.observable(80);
                self.total_val4_3_1_perc = ko.computed(function () {
                    return parseFloat(self.value4_3_1()) + '%';
                });
                self.val4_4_1_perc = ko.computed(function () {
                    return parseFloat(self.value4_4_1()) + '%';
                });
                self.value4_3_2 = ko.observable(70);
                self.value4_4_2 = ko.observable(80);
                self.total_val4_3_2_perc = ko.computed(function () {
                    return parseFloat(self.value4_3_2()) + '%';
                });
                self.val4_4_2_perc = ko.computed(function () {
                    return parseFloat(self.value4_4_2()) + '%';
                });
                self.value4_3_3 = ko.observable(70);
                self.value4_4_3 = ko.observable(80);
                self.total_val4_3_3_perc = ko.computed(function () {
                    return parseFloat(self.value4_3_3()) + '%';
                });
                self.val4_4_3_perc = ko.computed(function () {
                    return parseFloat(self.value4_4_3()) + '%';
                });
                self.value4_3_4 = ko.observable(70);
                self.value4_4_4 = ko.observable(80);
                self.total_val4_3_4_perc = ko.computed(function () {
                    return parseFloat(self.value4_3_4()) + '%';
                });
                self.val4_4_4_perc = ko.computed(function () {
                    return parseFloat(self.value4_4_4()) + '%';
                });

                self.value5_3_1_color = ko.observable("red");
                self.value5_4_1_color = ko.observable("red");
                self.value5_3_2_color = ko.observable("red");
                self.value5_4_2_color = ko.observable("red");
                self.total_val5_1_1 = ko.observable(450000);
                self.total_val5_1_2 = ko.observable(450000);
                self.value5_3_1 = ko.observable(70);
                self.value5_3_2 = ko.observable(70);
                self.value5_4_1 = ko.observable(80);
                self.total_val5_3_1_perc = ko.computed(function () {
                    return parseFloat(self.value5_3_1()) + '%';
                });
                self.val5_4_1_perc = ko.computed(function () {
                    return parseFloat(self.value5_4_1()) + '%';
                });
                self.value5_1_2 = ko.observable(70);
                self.value5_4_2 = ko.observable(80);
                self.total_val5_3_2_perc = ko.computed(function () {
                    return parseFloat(self.value5_3_2()) + '%';
                });
                self.val5_4_2_perc = ko.computed(function () {
                    return parseFloat(self.value5_4_2()) + '%';
                });


                self.value6_3_1_color = ko.observable("red");
                self.value6_4_1_color = ko.observable("red");
                self.value6_3_2_color = ko.observable("red");
                self.value6_4_2_color = ko.observable("red");
                self.total_val6_1_1 = ko.observable(450000);
                self.total_val6_1_2 = ko.observable(450000);
                self.value6_3_1 = ko.observable(70);
                self.value6_3_2 = ko.observable(70);
                self.value6_4_1 = ko.observable(80);
                self.total_val6_3_1_perc = ko.computed(function () {
                    return parseFloat(self.value6_3_1()) + '%';
                });
                self.val6_4_1_perc = ko.computed(function () {
                    return parseFloat(self.value6_4_1()) + '%';
                });
                self.value6_1_2 = ko.observable(70);
                self.value6_4_2 = ko.observable(80);
                self.total_val6_3_2_perc = ko.computed(function () {
                    return parseFloat(self.value6_3_2()) + '%';
                });
                self.val6_4_2_perc = ko.computed(function () {
                    return parseFloat(self.value6_4_2()) + '%';
                });








                //second chart

                self.color1 = ko.observable('#267DB3');
                self.borderColor1 = ko.observable('#0F3248');
                self.pattern1 = ko.observableArray(['smallChecker']);
                self.markerShape1 = ko.observableArray(['auto']);

                self.plotAreaColor = ko.observable('#13152a');
                self.plotAreaBorderColor = ko.observable('#000000');
                self.plotAreaBorderWidth = ko.observable(0);

                self.plotArea = ko.pureComputed(function () {
                    return {
                        backgroundColor: self.plotAreaColor(),
                        borderColor: self.plotAreaBorderColor(),
                        borderWidth: self.plotAreaBorderWidth()
                    }
                });


                self.polylineSeriesValue = ko.observable([{name: "东北大区", items: [74, 38, 45, 32, 63]},
                    {name: "京津冀大区", items: [50, 45, 56, 54, 72]},
                    {name: "华北大区", items: [39, 62, 30, 66, 42]},
                    {name: "西北大区", items: [50, 55, 56, 14, 72]},
                    {name: "华中大区", items: [50, 35, 16, 54, 72]},
                    {name: "西南大区", items: [50, 55, 56, 54, 72]},
                    {name: "华南大区", items: [50, 85, 56, 54, 72]},
                    {name: "江泸大区", items: [50, 95, 56, 54, 72]},
                    {name: "浙江大区", items: [50, 15, 56, 54, 72]}]);
                /*
                 this.polylineSeriesValue = ko.computed(function () {
                 return self.polyseries;
                 });
                 */
                self.polylineGroupsValue = ko.observable(["销量", "收入", "毛利", "毛利率", "贡献"]);

                /* chart axes */
                self.xTitle = ko.observable('%');
                self.xStyle = ko.observable('font-style:italic;color:#13152a;');
                self.xMajorTickColor = ko.observable('#484a5f');
                self.xMajorTickWidth = ko.observable(0);
                self.xMajorTickStyle = ko.observableArray(['solid']);
                self.xAxisLineColor = ko.observable('#484a5f');
                self.xAxisLineWidth = ko.observable(1);

                self.yTitle = ko.observable('%');
                self.yStyle = ko.observable('font-style:italic;color:#6070C7;');
                self.yAxisLineColor = ko.observable('#484a5f');
                self.yAxisLineWidth = ko.observable(1);
                self.yMajorTickColor = ko.observable('#484a5f');
                self.yMajorTickWidth = ko.observable(0);
                self.yMajorTickStyle = ko.observableArray(['solid']);
                self.yTickLabelPosition = ko.observableArray(['outside']);
                self.salesRefX = ko.observable(80);
                self.salesRefY = ko.observable(90);
                self.xAxis = ko.pureComputed(function () {
                    return {
                        title: "销量预算达成率(%)",
                        titleStyle: self.xStyle(),
                        axisLine: {
                            lineColor: "#484a5f",
                            lineWidth: self.xAxisLineWidth()
                        },
                        majorTick: {
                            lineColor: "#484a5f",
                            lineWidth: self.xMajorTickWidth(),
                            lineStyle: self.xMajorTickStyle()[0]
                        }

                        ,
                        referenceObjects: [
                            {text: '参考均值', type: 'line', value: self.salesRefX(), color: '#FAD55C', displayInLegend: 'on', lineWidth: 1, location: 'back', shortDesc: 'Sample Reference Line'}
                        ]

                    };
                });

                self.yAxis = ko.pureComputed(function () {
                    return {
                        title: "毛利预算达成率(%)",
                        titleStyle: self.yStyle(),
                        axisLine: {
                            lineColor: "#484a5f",
                            lineWidth: self.yAxisLineWidth()
                        },
                        majorTick: {
                            lineColor: "#484a5f",
                            lineWidth: self.yMajorTickWidth(),
                            lineStyle: self.yMajorTickStyle()[0]
                        },
                        tickLabel: {
                            position: self.yTickLabelPosition()[0]
                        }

                        ,
                        referenceObjects: [
                            {text: '参考均值', type: 'line', value: self.salesRefY(), color: '#A0CEEC', displayInLegend: 'on', lineWidth: 1, location: 'back', shortDesc: 'Sample Reference Line'}
                        ]

                    };
                });

                /* basic chart data */
                self.bubbleSeriesValue = ko.observable([{name: "华中", items: [{x: 15, y: 25, z: 5, label: "华中", labelPosition: 'belowMarker'}]},
                    {name: "华北", label: "华北", items: [{x: 15, y: 15, z: 8, label: "华北", labelPosition: 'belowMarker'}]},
                    {name: "京津冀", label: "京津冀", items: [{x: 10, y: 10, z: 8, label: "京津冀", labelPosition: 'belowMarker'}]},
                    {name: "华南", label: "华南", items: [{x: 8, y: 20, z: 6, label: "华南", labelPosition: 'belowMarker'}]},
                    {name: "西北", label: "西北", items: [{x: 11, y: 30, z: 8, label: "西北", labelPosition: 'belowMarker'}]},
                    {name: "西南", label: "西南", items: [{x: 30, y: 40, z: 15, label: "西南", labelPosition: 'belowMarker'}]}
                ]);

                /*
                 self.bubbleSeriesValue = ko.computed(function () {
                 
                 self.series[0]['color'] = self.color1();
                 self.series[0]['borderColor'] = self.borderColor1();
                 self.series[0]['markerShape'] = self.markerShape1()[0];
                 self.series[0]['pattern'] = self.pattern1()[0];
                 
                 return  self.series;
                 });
                 */
                self.bubbleGroupsValue = ["Group A", "Group B", "Group C"];


                //KPI
                self.kpiChartt1_thresholdValues = [{max: 75}, {max: 85}, {}];

                self.kpi_chart1_title = ko.observable("市场占有率");
                self.kpi_value1 = ko.observable(80);
                self.kpi_value1_2 = ko.observable(40);
                self.kpi_value1_3 = ko.observable(45);
                self.kpi_value1_4 = ko.observable("+2%");

                self.kpi_chart2_title = ko.observable("非转销量达成率");
                self.kpi_value2 = ko.observable(75);
                self.kpi_value2_2 = ko.observable(40);
                self.kpi_value2_3 = ko.observable(45);
                self.kpi_value2_4 = ko.observable("+2%");

                self.kpi_chart3_title = ko.observable("应收账款周转率");
                self.kpi_value3 = ko.observable(80);
                self.kpi_value3_2 = ko.observable(30);
                self.kpi_value3_3 = ko.observable(45);
                self.kpi_value3_4 = ko.observable("+2%");

                self.kpi_chart4_title = ko.observable("存货周转率");
                self.kpi_value4 = ko.observable(40);
                self.kpi_value4_2 = ko.observable(92);
                self.kpi_value4_3 = ko.observable(45);
                self.kpi_value4_4 = ko.observable("+2%");


                //Zhi biao

                self.zb_value1_1 = ko.observable(3000);
                self.zb_value1_2 = ko.observable(80);
                self.zb_value1_3 = ko.observable(92);

                self.zb_value2_1 = ko.observable(3000);
                self.zb_value2_2 = ko.observable(80);
                self.zb_value2_3 = ko.observable(92);

                self.zb_value3_1 = ko.observable(3000);
                self.zb_value3_2 = ko.observable(80);
                self.zb_value3_3 = ko.observable(92);

                self.zb_value4_1 = ko.observable(3000);
                self.zb_value4_2 = ko.observable(80);
                self.zb_value4_3 = ko.observable(92);

                self.zb_value5_1 = ko.observable(3000);
                self.zb_value5_2 = ko.observable(80);
                self.zb_value5_3 = ko.observable(92);


                self.zb_value6_1 = ko.observable(3000);
                self.zb_value6_2 = ko.observable(80);
                self.zb_value6_3 = ko.observable(92);

                self.zb_value7_1 = ko.observable(3000);
                self.zb_value7_2 = ko.observable(80);
                self.zb_value7_3 = ko.observable(92);

                self.zb_value8_1 = ko.observable(3000);
                self.zb_value8_2 = ko.observable(80);
                self.zb_value8_3 = ko.observable(92);

                self.zb_value9_1 = ko.observable(3000);
                self.zb_value9_2 = ko.observable(80);
                self.zb_value9_3 = ko.observable(92);

                self.zb_value10_1 = ko.observable(3000);
                self.zb_value10_2 = ko.observable(80);
                self.zb_value10_3 = ko.observable(92);



                /********************  订单  ***************************/

                /* toggle button variables */
                self.orderBarStackValue = ko.observable('off');
                self.orderBarOrientationValue = ko.observable('vertical');


                /* chart data */
                // "原始订单总量", "关闭量", "库存未满足量", "客户延期发货量", "信用冻结量", "价格冻结量"
                var orderBarSeries = [
                    {
                        "name": "原始订单总量",
                        "items": [
                            500.00
                        ]
                    }
                ];

                var orderBarGroups = ["订单量"];

                self.orderBarSeriesValue = ko.observableArray([]);
                self.orderBarGroupsValue = ko.observableArray(orderBarGroups);

                /* toggle buttons*/
                self.orderBarOrientationOptions = [
                    {id: 'order-bar-vertical', label: 'vertical', value: 'vertical', icon: 'oj-icon demo-bar-vert'},
                    {id: 'order-bar-horizontal', label: 'horizontal', value: 'horizontal', icon: 'oj-icon demo-bar-horiz'}
                ];

                /********************  库存  ***************************/
                /* toggle button variables */
                self.stockBarStackValue = ko.observable('off');
                self.stockBarOrientationValue = ko.observable('vertical');
				self.showStock = ko.observable(true);


                /* chart data */
                var stockBarSeries = [{"name": "正常库存(0-3个月)", "items": [500.5268]}];

                var stockBarGroups = ["库存量"];

                self.stockBarSeriesValue = ko.observableArray([]);
                self.stockBarGroupsValue = ko.observableArray(stockBarGroups);

                /* toggle buttons*/
                self.stockBarOrientationOptions = [
                    {id: 'stock-bar-vertical', label: 'vertical', value: 'vertical', icon: 'oj-icon demo-bar-vert'},
                    {id: 'stock-bar-horizontal', label: 'horizontal', value: 'horizontal', icon: 'oj-icon demo-bar-horiz'}
                ];



                /********************  十大逾期客户 ***************************/
                /* toggle button variables */
                self.overdueBarStackValue = ko.observable('on');
                self.overdueBarOrientationValue = ko.observable('vertical');


                /* chart data */
                // "原始订单总量", "关闭量", "库存未满足量", "客户延期发货量", "信用冻结量", "价格冻结量"
                var overdueBarSeries = [
                    {
                        "name": "0-30",
                        "items": [30, 12, 43, 32, 26, 2, 32, 11, 17, 23]
                    },
                    {
                        "name": "30-60",
                        "items": [20, 15, 23, 23, 32, 16, 28, 18, 16, 54]
                    },
                    {
                        "name": "60-90",
                        "items": [18, 18, 22, 56, 13, 32, 26, 28, 15, 32]
                    },
                    {
                        "name": "90-120",
                        "items": [25, 19, 5, 31, 14, 11, 26, 23, 11, 43]
                    },
                    {
                        "name": "120+",
                        "items": [19, 33, 13, 32, 43, 26, 26, 36, 22, 48]
                    }
                ];

                var overdueBarGroups = [
                    "客户1",
                    "客户2",
                    "客户3",
                    "客户4",
                    "客户5",
                    "客户6",
                    "客户7",
                    "客户8",
                    "客户9",
                    "客户10"
                ];

                self.overdueBarSeriesValue = ko.observableArray(overdueBarSeries);
                self.overdueBarGroupsValue = ko.observableArray(overdueBarGroups);

                /* toggle buttons*/
                self.overdueBarOrientationOptions = [
                    {id: 'overdue-bar-vertical', label: 'vertical', value: 'vertical', icon: 'oj-icon demo-bar-vert'},
                    {id: 'overdue-bar-horizontal', label: 'horizontal', value: 'horizontal', icon: 'oj-icon demo-bar-horiz'}
                ];


                self.initView = function () {
                    self.getData('year');
                };

                // Media queries for repsonsive layouts
//                var smQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
//                self.smScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);

                $(window).resize(function () {
//                    var width = $(window).width();
//                    var height = $(window).height();
                    /*
                     $("#bubbleChart").ojChart("refresh");
                     $("#gauge1").ojStatusMeterGauge("refresh");
                     $("#gauge2").ojStatusMeterGauge("refresh");
                     $("#gauge3").ojStatusMeterGauge("refresh");
                     $("#gauge4").ojStatusMeterGauge("refresh");
                     $("#gauge5").ojStatusMeterGauge("refresh");
                     $("#gauge6").ojStatusMeterGauge("refresh");
                     */
                });

                self.handleActivated = function (info) {
                    // Implement if needed

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
                self.testConsole = function (str) {
                    //alert(str);
                }
                self.getData = function (str) {
//                    $.getJSON("js/data/home.json",
                    //$.getJSON("http://" + baseUrl + "/home/index?type=" + str + "&subjectSelect=" + chooseFilter.rowName,
                            //$.getJSON("http://mesh.artadv.cn/queryData?type=" + str,
							$.ajax({
								//url: "http://" + baseUrl + "/home/index?type=" + str + "&subjectSelect=" + chooseFilter.rowName,
								url: "js/data/home.json",
								type: 'GET',
								contentType: "application/json",
								dataType: 'json',
								error: function(err) {
									//console.log(err);
									
								},
								complete: function() {
									//console.log("complete");
									
								},
                                success: function (data)
                                    {
										
										var rotate = function(aNum, divId) {
											
											if (parseFloat(aNum()) > 100) {
												$(divId).css( 'transform', 'rotate(180deg)');
											}
										}
                                        self.total_val1_1(data.overall.total_val1_1);

                                        self.value1_3(data.overall.value1_3);
                                        self.value1_4(data.overall.value1_4);
										rotate(self.value1_4, '#gauge1');
                                        self.total_val2_1(data.overall.total_val2_1);
                                        self.value2_3(data.overall.value2_3);
                                        self.value2_4(data.overall.value2_4);
										rotate(self.value2_4, '#gauge2');
                                        self.total_val3_1(data.overall.total_val3_1);
                                        self.value3_3(data.overall.value3_3);
                                        self.value3_4(data.overall.value3_4);
										rotate(self.value3_4, '#gauge3');
                                        self.total_val4_1(data.overall.total_val4_1);
                                        self.value4_3(data.overall.value4_3);
                                        self.value4_4(data.overall.value4_4);
										rotate(self.value4_4, '#gauge4');
                                        self.total_val5_1(data.overall.total_val5_1);
                                        self.value5_3(data.overall.value5_3);
                                        self.value5_4(data.overall.value5_4);
										rotate(self.value5_4, '#gauge5');
                                        self.total_val6_1(data.overall.total_val6_1);
                                        self.value6_3(data.overall.value6_3);
                                        self.value6_4(data.overall.value6_4);
										rotate(self.value6_4, '#gauge6');

                                        self.total_val1_1_color(data.overall.value1_4_color);
                                        self.value1_3_color(data.overall.value1_3_color);
                                        self.value1_4_color(data.overall.value1_4_color);
                                        //self.total_val2_1_color(data.overall.total_val2_1_color);
                                        self.total_val2_1_color(data.overall.value2_4_color);
                                        self.value2_3_color(data.overall.value2_3_color);
                                        self.value2_4_color(data.overall.value2_4_color);
                                        //self.total_val3_1_color(data.overall.total_val3_1_color);
                                        self.total_val3_1_color(data.overall.value3_4_color);
                                        self.value3_3_color(data.overall.value3_3_color);
                                        self.value3_4_color(data.overall.value3_4_color);
                                        //self.total_val4_1_color(data.overall.total_val4_1_color);
                                        self.total_val4_1_color(data.overall.value4_4_color);
                                        self.value4_3_color(data.overall.value4_3_color);
                                        self.value4_4_color(data.overall.value4_4_color);
                                        //self.total_val5_1_color(data.overall.total_val5_1_color);
                                        self.total_val5_1_color(data.overall.value5_4_color);
                                        self.value5_3_color(data.overall.value5_3_color);
                                        self.value5_4_color(data.overall.value5_4_color);
                                        //self.total_val6_1_color(data.overall.total_val6_1_color);
                                        self.total_val6_1_color(data.overall.value6_4_color);
                                        self.value6_3_color(data.overall.value6_3_color);
                                        self.value6_4_color(data.overall.value6_4_color);
                                        //subs
                                        self.value1_3_1_color(data.overall.value1_3_1_color);
                                        self.value1_4_1_color(data.overall.value1_4_1_color);
                                        self.value1_3_2_color(data.overall.value1_3_2_color);
                                        self.value1_4_2_color(data.overall.value1_4_2_color);
                                        self.total_val1_1_1(data.overall.total_val1_1_1);
                                        self.total_val1_1_2(data.overall.total_val1_1_2);
                                        self.value1_3_1(data.overall.value1_3_1);
                                        self.value1_4_1(data.overall.value1_4_1);
										rotate(self.value1_4_1, '#gauge1_1');
                                        self.value1_3_2(data.overall.value1_3_2);
                                        self.value1_4_2(data.overall.value1_4_2);
										rotate(self.value1_4_2, '#gauge1_2');
                                        self.value2_3_1_color(data.overall.value2_3_1_color);
                                        self.value2_4_1_color(data.overall.value2_4_1_color);
                                        self.value2_3_2_color(data.overall.value2_3_2_color);
                                        self.value2_4_2_color(data.overall.value2_4_2_color);
                                        self.total_val2_1_1(data.overall.total_val2_1_1);
                                        self.total_val2_1_2(data.overall.total_val2_1_2);
                                        self.value2_3_1(data.overall.value2_3_1);
                                        self.value2_4_1(data.overall.value2_4_1);
										rotate(self.value2_4_1, '#gauge2_1');
                                        self.value2_3_2(data.overall.value2_3_2);
                                        self.value2_4_2(data.overall.value2_4_2);
										rotate(self.value2_4_2, '#gauge2_2');
                                        self.value3_3_1_color(data.overall.value3_3_1_color);
                                        self.value3_4_1_color(data.overall.value3_4_1_color);
                                        self.value3_3_2_color(data.overall.value3_3_2_color);
                                        self.value3_4_2_color(data.overall.value3_4_2_color);
                                        self.total_val3_1_1(data.overall.total_val3_1_1);
                                        self.total_val3_1_2(data.overall.total_val3_1_2);
                                        self.value3_3_1(data.overall.value3_3_1);
                                        self.value3_4_1(data.overall.value3_4_1);
										rotate(self.value3_4_1, '#gauge3_1');
                                        self.value3_3_2(data.overall.value3_3_2);
                                        self.value3_4_2(data.overall.value3_4_2);
										rotate(self.value3_4_2, '#gauge3_2');
                                        self.value4_3_1_color(data.overall.value4_3_1_color);
                                        self.value4_4_1_color(data.overall.value4_4_1_color);
                                        self.value4_3_2_color(data.overall.value4_3_2_color);
                                        self.value4_4_2_color(data.overall.value4_4_2_color);
                                        self.value4_3_3_color(data.overall.value4_3_3_color);
                                        self.value4_4_3_color(data.overall.value4_4_3_color);
                                        self.value4_3_4_color(data.overall.value4_3_4_color);
                                        self.value4_4_4_color(data.overall.value4_4_4_color);
                                        self.total_val4_1_1(data.overall.total_val4_1_1);
                                        self.total_val4_1_2(data.overall.total_val4_1_2);
                                        self.total_val4_1_3(data.overall.total_val4_1_3);
                                        self.total_val4_1_4(data.overall.total_val4_1_4);
                                        self.value4_3_1(data.overall.value4_3_1);
                                        self.value4_4_1(data.overall.value4_4_1);
										rotate(self.value4_4_1, '#gauge4_1');
                                        self.value4_3_2(data.overall.value4_3_2);
                                        self.value4_4_2(data.overall.value4_4_2);
										rotate(self.value4_4_2, '#gauge4_2');
                                        self.value4_3_3(data.overall.value4_3_3);
                                        self.value4_4_3(data.overall.value4_4_3);
										rotate(self.value4_4_3, '#gauge4_3');
                                        self.value4_3_4(data.overall.value4_3_4);
                                        self.value4_4_4(data.overall.value4_4_4);
										rotate(self.value4_4_4, '#gauge4_4');
                                        self.value5_3_1_color(data.overall.value5_3_1_color);
                                        self.value5_4_1_color(data.overall.value5_4_1_color);
                                        self.value5_3_2_color(data.overall.value5_3_2_color);
                                        self.value5_4_2_color(data.overall.value5_4_2_color);
                                        self.total_val5_1_1(data.overall.total_val5_1_1);
                                        self.total_val5_1_2(data.overall.total_val5_1_2);
                                        self.value5_3_1(data.overall.value5_3_1);
                                        self.value5_3_2(data.overall.value5_3_2);
                                        self.value5_4_1(data.overall.value5_4_1);
										rotate(self.value5_4_1, '#gauge5_1');
                                        self.value5_1_2(data.overall.value5_1_2);
                                        self.value5_4_2(data.overall.value5_4_2);
										rotate(self.value5_4_2, '#gauge5_2');

                                        self.value6_3_1_color(data.overall.value6_3_1_color);
                                        self.value6_4_1_color(data.overall.value6_4_1_color);
                                        self.value6_3_2_color(data.overall.value6_3_2_color);
                                        self.value6_4_2_color(data.overall.value6_4_2_color);
                                        self.total_val6_1_1(data.overall.total_val6_1_1);
                                        self.total_val6_1_2(data.overall.total_val6_1_2);
                                        self.value6_3_1(data.overall.value6_3_1);
                                        self.value6_3_2(data.overall.value6_3_2);
                                        self.value6_4_1(data.overall.value6_4_1);
										rotate(self.value6_4_1, '#gauge6_1');
                                        self.value6_1_2(data.overall.value6_1_2);
                                        self.value6_4_2(data.overall.value6_4_2);
										rotate(self.value6_4_2, '#gauge6_2');

                                        self.bubbleSeriesValue(data.sales);

                                        self.kpi_value1(data.KPI.kpi_value1);
                                        self.kpi_value1_2(data.KPI.kpi_value1_2);
                                        self.kpi_value1_3(data.KPI.kpi_value1_3);
                                        self.kpi_value1_4(data.KPI.kpi_value1_4);

                                        self.kpi_value2(data.KPI.kpi_value2);
                                        self.kpi_value2_2(data.KPI.kpi_value2_2);
                                        self.kpi_value2_3(data.KPI.kpi_value2_3);
                                        self.kpi_value2_4(data.KPI.kpi_value2_4);

                                        self.kpi_value3(data.KPI.kpi_value3);
                                        self.kpi_value3_2(data.KPI.kpi_value3_2);
                                        self.kpi_value3_3(data.KPI.kpi_value3_3);
                                        self.kpi_value3_4(data.KPI.kpi_value3_4 > 0 ? "+"+data.KPI.kpi_value3_4:data.KPI.kpi_value3_4);

                                        self.kpi_value4(data.KPI.kpi_value4);
                                        self.kpi_value4_2(data.KPI.kpi_value4_2);
                                        self.kpi_value4_3(data.KPI.kpi_value4_3);
                                        self.kpi_value4_4(data.KPI.kpi_value4_4 > 0 ? "+"+data.KPI.kpi_value4_4:data.KPI.kpi_value4_4);

                                        self.kpi_value1_color(data.KPI.kpi_value1_color);
                                        self.kpi_value1_2_color(data.KPI.kpi_value1_2_color);
                                        self.kpi_value1_3_color(data.KPI.kpi_value1_3_color);
                                        self.kpi_value1_4_color(data.KPI.kpi_value1_4_color);

                                        self.kpi_value2_color(data.KPI.kpi_value2_color);
                                        self.kpi_value2_2_color(data.KPI.kpi_value2_2_color);
                                        self.kpi_value2_3_color(data.KPI.kpi_value2_3_color);
                                        self.kpi_value2_4_color(data.KPI.kpi_value2_4_color);

                                        self.kpi_value3_color(data.KPI.kpi_value3_color);
                                        self.kpi_value3_2_color(data.KPI.kpi_value3_2_color);
                                        self.kpi_value3_3_color(data.KPI.kpi_value3_3_color);
                                        self.kpi_value3_4_color(data.KPI.kpi_value3_4_color);

                                        self.kpi_value4_color(data.KPI.kpi_value4_color);
                                        self.kpi_value4_2_color(data.KPI.kpi_value4_2_color);
                                        self.kpi_value4_3_color(data.KPI.kpi_value4_3_color);
                                        self.kpi_value4_4_color(data.KPI.kpi_value4_4_color);

                                        self.zb_value1_1(data.goals.zb_value1_1);
                                        self.zb_value1_2(data.goals.zb_value1_2);
                                        self.zb_value1_3(data.goals.zb_value1_3);

                                        self.zb_value2_1(data.goals.zb_value2_1);
                                        self.zb_value2_2(data.goals.zb_value2_2);
                                        self.zb_value2_3(data.goals.zb_value2_3);

                                        self.zb_value3_1(data.goals.zb_value3_1);
                                        self.zb_value3_2(data.goals.zb_value3_2);
                                        self.zb_value3_3(data.goals.zb_value3_3);

                                        self.zb_value4_1(data.goals.zb_value4_1);
                                        self.zb_value4_2(data.goals.zb_value4_2);
                                        self.zb_value4_3(data.goals.zb_value4_3);

                                        self.zb_value5_1(data.goals.zb_value5_1);
                                        self.zb_value5_2(data.goals.zb_value5_2);
                                        self.zb_value5_3(data.goals.zb_value5_3);

                                        self.zb_value6_1(data.goals.zb_value6_1);
                                        self.zb_value6_2(data.goals.zb_value6_2 > 0 ? "+" + data.goals.zb_value6_2 : data.goals.zb_value6_2);
                                        self.zb_value6_3(data.goals.zb_value6_3 > 0 ? "+" + data.goals.zb_value6_3 : data.goals.zb_value6_3);

                                        self.zb_value7_1(data.goals.zb_value7_1);
                                        self.zb_value7_2(data.goals.zb_value7_2);
                                        self.zb_value7_3(data.goals.zb_value7_3);

                                        self.zb_value8_1(data.goals.zb_value8_1);
                                        self.zb_value8_2(data.goals.zb_value8_2 > 0 ? "+"+data.goals.zb_value8_2 : data.goals.zb_value8_2);
                                        self.zb_value8_3(data.goals.zb_value8_3 > 0 ? "+"+data.goals.zb_value8_3 : data.goals.zb_value8_3);

                                        self.zb_value9_1(data.goals.zb_value9_1);
                                        self.zb_value9_2(data.goals.zb_value9_2);
                                        self.zb_value9_3(data.goals.zb_value9_3);

                                        self.zb_value10_1(data.goals.zb_value10_1);
                                        self.zb_value10_2(data.goals.zb_value10_2 > 0 ? "+"+data.goals.zb_value10_2 : data.goals.zb_value10_2);
                                        self.zb_value10_3(data.goals.zb_value10_3 > 0 ? "+"+data.goals.zb_value10_3 : data.goals.zb_value10_3);

                                        self.zb_value1_1_color(data.goals.zb_value1_1_color);
                                        self.zb_value1_2_color(data.goals.zb_value1_2_color);
                                        self.zb_value1_3_color(data.goals.zb_value1_3_color);

                                        self.zb_value2_1_color(data.goals.zb_value2_1_color);
                                        self.zb_value2_2_color(data.goals.zb_value2_2_color);
                                        self.zb_value2_3_color(data.goals.zb_value2_3_color);

                                        self.zb_value3_1_color(data.goals.zb_value3_1_color);
                                        self.zb_value3_2_color(data.goals.zb_value3_2_color);
                                        self.zb_value3_3_color(data.goals.zb_value3_3_color);

                                        self.zb_value4_1_color(data.goals.zb_value4_1_color);
                                        self.zb_value4_2_color(data.goals.zb_value4_2_color);
                                        self.zb_value4_3_color(data.goals.zb_value4_3_color);

                                        self.zb_value5_1_color(data.goals.zb_value5_1_color);
                                        self.zb_value5_2_color(data.goals.zb_value5_2_color);
                                        self.zb_value5_3_color(data.goals.zb_value5_3_color);

                                        self.zb_value6_1_color(data.goals.zb_value6_1_color);
                                        self.zb_value6_2_color(data.goals.zb_value6_2_color);
                                        self.zb_value6_3_color(data.goals.zb_value6_3_color);

                                        self.zb_value7_1_color(data.goals.zb_value7_1_color);
                                        self.zb_value7_2_color(data.goals.zb_value7_2_color);
                                        self.zb_value7_3_color(data.goals.zb_value7_3_color);

                                        self.zb_value8_1_color(data.goals.zb_value8_1_color);
                                        self.zb_value8_2_color(data.goals.zb_value8_2_color);
                                        self.zb_value8_3_color(data.goals.zb_value8_3_color);

                                        self.zb_value9_1_color(data.goals.zb_value9_1_color);
                                        self.zb_value9_2_color(data.goals.zb_value9_2_color);
                                        self.zb_value9_3_color(data.goals.zb_value9_3_color);

                                        self.zb_value10_1_color(data.goals.zb_value10_1_color);
                                        self.zb_value10_2_color(data.goals.zb_value10_2_color);
                                        self.zb_value10_3_color(data.goals.zb_value10_3_color);

                                        self.salesRefX(data.salesRef.xLine);
                                        self.salesRefY(data.salesRef.yLine);
                                        self.polylineSeriesValue(data.poly.polyseries);
                                        self.polylineGroupsValue(data.poly.polylineGroupsValue);

                                        var orderBarSeries = data.orderStatus.data.series;
										for (var i in orderBarSeries) {
											var val = orderBarSeries[i].items[0];
											orderBarSeries[i].items[0] = {y: val, label: val}
										}
										self.orderBarSeriesValue(orderBarSeries);

                                        var stockBarSeries = data.stockStatus.data.series;
										var stockBarSeriesColors = ['rgb(38, 125, 179)', 'rgb(250, 213, 92)', 'rgb(237, 102, 71)', 'red', 'rgb(133, 97, 200)'];
										//console.log(stockBarSeries)
										for (var i in stockBarSeries) {
											var val = stockBarSeries[i].items[0];
											stockBarSeries[i].items[0] = {y: val, label: val}
											stockBarSeries[i].color = stockBarSeriesColors[i]
										}
                                        self.stockBarSeriesValue(stockBarSeries);

                                        var overdueBarSeries = data.overdueCustomer.data.series;
                                        var overdueBarGroups = data.overdueCustomer.data.groups;
                                        self.overdueBarSeriesValue(overdueBarSeries);
                                        self.overdueBarGroupsValue(overdueBarGroups);

										$("#gauge1").ojStatusMeterGauge("refresh");
										/*
										if (window.chooseFilter.rowId.indexOf(":") != -1) {
											self.showStock(false);
										} else {
											self.showStock(true);
										}*/
                                    }
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

            return new DashboardViewModel;

        });
