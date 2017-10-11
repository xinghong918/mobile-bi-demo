/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * test module
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'promise',
    'ojs/ojdatagrid', 'ojs/ojrowexpander', 'ojs/ojflattenedtreedatagriddatasource', 'ojs/ojjsontreedatasource'
], function (oj, ko, $) {
    /**
     * The view model for the main content view template
     */
    function testContentViewModel() {
        var self = this;
        self.dataSource = ko.observable();
        
         self.updateoption = function (event, data)
        {
            if (data.option === "currentCell") {
                if (undefined !== data.value) {
                    var tempVar = data.value.indexes.row;
                    console.log("choose ： ", tempVar);

                    oj.Router.rootInstance.go('dashboard');
                }
            }
        };

        $.getJSON("js/data/testJSON.json",
                function (data)
                {
                    var options = {
                        'rowHeader': 'name',
                        'columns': ['resource', 'start', 'end']
                    };
                    var flattenedData = new oj.FlattenedTreeDataGridDataSource(
                            new oj.JsonTreeDataSource(data), options);
                    self.dataSource(flattenedData);
                }
        );
    }

    return testContentViewModel;
});
