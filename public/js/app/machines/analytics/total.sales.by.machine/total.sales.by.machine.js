"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var error_service_1 = require("../../../errors/error.service");
var forms_1 = require('@angular/forms');
var analytics_service_1 = require("../analytics.service");
var zing_chart_component_1 = require("../zing.chart.component");
var chart_model_1 = require("../chartmodels/chart.model");
var analytics_machine_component_1 = require("../analytics.machine.component");
var TotalSalesByMachineComponent = (function () {
    function TotalSalesByMachineComponent(_fb, _errorService, _analyticsService, _parent) {
        this._fb = _fb;
        this._errorService = _errorService;
        this._analyticsService = _analyticsService;
        this.allSales = [];
        this.weekSales = [];
        this.cash = 0;
        this.dailyAvg = 0;
        this.chartConfig = {
            id: 'Chart-1',
            data: {
                "globals": {
                    "font-family": "Helvetica"
                },
                "type": "bar",
                "background-color": "white",
                "title": {
                    "color": "#606060",
                    "background-color": "white",
                    "text": "Total sales, 2016"
                },
                "subtitle": {
                    "color": "#606060",
                    "text": "Click the columns to view the amount."
                },
                "scale-y": {
                    "line-color": "none",
                    "tick": {
                        "line-color": "none"
                    },
                    "guide": {
                        "line-style": "solid"
                    },
                    "item": {
                        "color": "#606060"
                    }
                },
                "scale-x": {
                    "values": [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December"
                    ],
                    "line-color": "#C0D0E0",
                    "line-width": 1,
                    "tick": {
                        "line-width": 1,
                        "line-color": "#C0D0E0"
                    },
                    "guide": {
                        "visible": false
                    },
                    "item": {
                        "color": "#606060"
                    }
                },
                "crosshair-x": {
                    "marker": {
                        "visible": false
                    },
                    "line-color": "none",
                    "line-width": "0px",
                    "scale-label": {
                        "visible": false
                    },
                    "plot-label": {
                        "text": "%data-browser: $%v of total",
                        "multiple": true,
                        "font-size": "10px",
                        "color": "#606060",
                        "background-color": "white",
                        "border-width": 1,
                        "alpha": 0.8,
                        "callout": true,
                        "callout-position": "bottom",
                        "shadow": 0,
                        "placement": "node-top",
                        "border-radius": 4,
                        "padding": 6,
                        "rules": [
                            {
                                "rule": "%i==0",
                                "border-color": "#7CB5EC"
                            },
                            {
                                "rule": "%i==1",
                                "border-color": "#434348"
                            },
                            {
                                "rule": "%i==2",
                                "border-color": "#90ED7D"
                            },
                            {
                                "rule": "%i==3",
                                "border-color": "#F7A35C"
                            },
                            {
                                "rule": "%i==4",
                                "border-color": "#8085E9"
                            },
                            {
                                "rule": "%i==5",
                                "border-color": "#F9B6C6"
                            },
                            {
                                "rule": "%i==6",
                                "border-color": "#7CB5EC"
                            },
                            {
                                "rule": "%i==7",
                                "border-color": "#434348"
                            },
                            {
                                "rule": "%i==8",
                                "border-color": "#90ED7D"
                            },
                            {
                                "rule": "%i==9",
                                "border-color": "#F7A35C"
                            },
                            {
                                "rule": "%i==10",
                                "border-color": "#8085E9"
                            },
                            {
                                "rule": "%i==11",
                                "border-color": "#F9B6C6"
                            }
                        ]
                    }
                },
                "plot": {
                    "data-browser": [
                        "<span style='font-weight:bold;color:#56AEE2;'>January</span>",
                        "<span style='font-weight:bold;color:#5668E2;'>February</span>",
                        "<span style='font-weight:bold;color:#8A56E2;'>March</span>",
                        "<span style='font-weight:bold;color:#CF56E2;'>April</span>",
                        "<span style='font-weight:bold;color:#E256AE;'>May</span>",
                        "<span style='font-weight:bold;color:#E25668;'>June</span>",
                        "<span style='font-weight:bold;color:#E28956;'>July</span>",
                        "<span style='font-weight:bold;color:#E2CF56;'>August</span>",
                        "<span style='font-weight:bold;color:#AEE256;'>September</span>",
                        "<span style='font-weight:bold;color:#68E256;'>October</span>",
                        "<span style='font-weight:bold;color:#56E289;'>November</span>",
                        "<span style='font-weight:bold;color:#56E2CF;'>December</span>"
                    ],
                    "cursor": "hand",
                    "value-box": {
                        "text": "$%v",
                        "text-decoration": "underline",
                        "color": "#606060"
                    },
                    "tooltip": {
                        "visible": false
                    },
                    "animation": {
                        "effect": "7"
                    },
                    "rules": [
                        {
                            "rule": "%i==0",
                            "background-color": "#56AEE2"
                        },
                        {
                            "rule": "%i==1",
                            "background-color": "#5668E2"
                        },
                        {
                            "rule": "%i==2",
                            "background-color": "#8A56E2"
                        },
                        {
                            "rule": "%i==3",
                            "background-color": "#CF56E2"
                        },
                        {
                            "rule": "%i==4",
                            "background-color": "#E256AE"
                        },
                        {
                            "rule": "%i==5",
                            "background-color": "#E25668"
                        },
                        {
                            "rule": "%i==6",
                            "background-color": "#E28956"
                        },
                        {
                            "rule": "%i==7",
                            "background-color": "#E2CF56"
                        },
                        {
                            "rule": "%i==8",
                            "background-color": "#AEE256"
                        },
                        {
                            "rule": "%i==9",
                            "background-color": "#68E256"
                        },
                        {
                            "rule": "%i==10",
                            "background-color": "#56E289"
                        },
                        {
                            "rule": "%i==11",
                            "background-color": "#56E2CF"
                        }
                    ]
                },
                "series": [
                    {
                        "values": []
                    }
                ]
            },
            width: "100%",
            height: "100%"
        };
        // configChart2: Object = {};
        this.query = {
            machineId: this.machineId,
            fromDate: '2016-01-01',
            tillDate: '2017-01-01'
        };
        this.chart = new chart_model_1.Chart(this.chartConfig);
        this.parent = _parent;
    }
    TotalSalesByMachineComponent.prototype.ngOnInit = function () {
        // TODO: Get sales by machine from last month
        console.log('THE MACHINE ID: ', this.machineId);
        console.log('The query: ', this.query);
        this.query.machineId = this.machineId;
        this.getSalesByMachine(this.query);
    };
    TotalSalesByMachineComponent.prototype.getSalesByMachine = function (_query) {
        var _this = this;
        console.log('Trying to get sales by machine');
        this._analyticsService.getSalesByMachine(_query)
            .subscribe(function (data) {
            _this.allSales = data;
            _this.cash = _this.calculateCash(data);
            _this.parent.setCash(_this.cash);
            // this.dailyAvg = this.calculateDailyAverage(data);
            // this.parent.setDailyAvg(this.dailyAvg);
            // this.chart =
            // this.calculateSalesByProduct(data);
            _this.calculateSalesByMonth(data);
            // console.log('CASH: ', this.cash);
            // console.log('Daily average: ', this.dailyAvg);
            // console.log('Table data: ', this.allSales);
        }, function (error) { return _this._errorService.handleError(error); });
    };
    TotalSalesByMachineComponent.prototype.calculateSalesByMonth = function (sales) {
        var values = [];
        if (!sales || sales.length == 0) {
            this.chartConfig.data.series[0].values = values;
            this.chart.setData(this.chartConfig.data);
            // console.log('this.chartConfig', this.chartConfig);
            if (this.zingChartComponent2)
                this.zingChartComponent2.rerender();
            return;
        }
        // Create statistics
        var monthsDict = {};
        var i;
        for (i in sales) {
            var currentDate = new Date(sales[i].date);
            var key = currentDate.getMonth().toString();
            var keyExist = monthsDict.hasOwnProperty(key);
            if (keyExist) {
                var item = monthsDict[key];
                var quantity = item.quantity;
                var total = item.total;
                total += sales[i].soldPrice;
                quantity++;
                var obj = {
                    quantity: quantity,
                    total: total
                };
                monthsDict[key] = obj;
            }
            else {
                var obj = {
                    quantity: 1,
                    total: sales[i].soldPrice
                };
                monthsDict[key] = obj;
            }
        }
        var j;
        var january, february, march, april, may, june, july, august, september, october, november, december;
        if (monthsDict["0"])
            january = monthsDict["0"];
        else
            january = { quantity: 0, total: 0 };
        if (monthsDict["1"])
            february = monthsDict["1"];
        else
            february = { quantity: 0, total: 0 };
        if (monthsDict["2"])
            march = monthsDict["2"];
        else
            march = { quantity: 0, total: 0 };
        if (monthsDict["3"])
            april = monthsDict["3"];
        else
            april = { quantity: 0, total: 0 };
        if (monthsDict["4"])
            may = monthsDict["4"];
        else
            may = { quantity: 0, total: 0 };
        if (monthsDict["5"])
            june = monthsDict["5"];
        else
            june = { quantity: 0, total: 0 };
        if (monthsDict["6"])
            july = monthsDict["6"];
        else
            july = { quantity: 0, total: 0 };
        if (monthsDict["7"])
            august = monthsDict["7"];
        else
            august = { quantity: 0, total: 0 };
        if (monthsDict["8"])
            september = monthsDict["8"];
        else
            september = { quantity: 0, total: 0 };
        if (monthsDict["9"])
            october = monthsDict["9"];
        else
            october = { quantity: 0, total: 0 };
        if (monthsDict["10"])
            november = monthsDict["10"];
        else
            november = { quantity: 0, total: 0 };
        if (monthsDict["2"])
            december = monthsDict["2"];
        else
            december = { quantity: 0, total: 0 };
        values.push(january.total);
        values.push(february.total);
        values.push(march.total);
        values.push(april.total);
        values.push(may.total);
        values.push(june.total);
        values.push(july.total);
        values.push(august.total);
        values.push(september.total);
        values.push(october.total);
        values.push(november.total);
        values.push(december.total);
        console.log('Series', values);
        this.chartConfig.data.series[0].values = values;
        this.chart.setData(this.chartConfig.data);
        // console.log('this.chartConfig', this.chartConfig);
        if (this.zingChartComponent2)
            this.zingChartComponent2.rerender();
        // console.log('Zing chart component: ', this.zingChartComponent2);
    };
    TotalSalesByMachineComponent.prototype.calculateCash = function (sales) {
        var total = 0;
        if (sales) {
            var i = void 0;
            for (i in sales) {
                total += sales[i].soldPrice;
            }
        }
        return total;
    };
    TotalSalesByMachineComponent.prototype.onDateRefresh = function (selectedYear) {
        console.log('type of Selected YEAR: ', typeof selectedYear);
        if (typeof selectedYear == "string")
            selectedYear = parseInt(selectedYear);
        console.log('type of Selected YEAR: ', typeof selectedYear);
        console.log('selectedYear: ', selectedYear);
        var _from = selectedYear.toString();
        var _to = (selectedYear + 1).toString();
        this.query.fromDate = _from + '-01-01';
        this.query.tillDate = _to + '-01-01';
        console.log('QUERY: ', this.query);
        this.getSalesByMachine(this.query);
    };
    __decorate([
        core_1.ViewChild(zing_chart_component_1.ZingChart), 
        __metadata('design:type', zing_chart_component_1.ZingChart)
    ], TotalSalesByMachineComponent.prototype, "zingChartComponent2", void 0);
    TotalSalesByMachineComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'vend-total-sales-by-machine',
            templateUrl: 'total.sales.by.machine.html',
            directives: [
                forms_1.FORM_DIRECTIVES,
                forms_1.REACTIVE_FORM_DIRECTIVES,
                zing_chart_component_1.ZingChart],
            providers: [forms_1.FormBuilder],
            styleUrls: [],
            inputs: ['machineId']
        }),
        __param(3, core_1.Host()),
        __param(3, core_1.Inject(core_1.forwardRef(function () { return analytics_machine_component_1.MachineAnalyticsComponent; }))), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, error_service_1.ErrorService, analytics_service_1.AnalyticsService, analytics_machine_component_1.MachineAnalyticsComponent])
    ], TotalSalesByMachineComponent);
    return TotalSalesByMachineComponent;
}());
exports.TotalSalesByMachineComponent = TotalSalesByMachineComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hY2hpbmVzL2FuYWx5dGljcy90b3RhbC5zYWxlcy5ieS5tYWNoaW5lL3RvdGFsLnNhbGVzLmJ5Lm1hY2hpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHFCQUFzRSxlQUFlLENBQUMsQ0FBQTtBQUN0Riw4QkFBMkIsK0JBQStCLENBQUMsQ0FBQTtBQUUzRCxzQkFDMkQsZ0JBQWdCLENBQUMsQ0FBQTtBQUM1RSxrQ0FBK0Isc0JBQXNCLENBQUMsQ0FBQTtBQUN0RCxxQ0FBMEIseUJBQXlCLENBQUMsQ0FBQTtBQUNwRCw0QkFBb0IsNEJBQTRCLENBQUMsQ0FBQTtBQUNqRCw0Q0FBd0MsZ0NBQWdDLENBQUMsQ0FBQTtBQWV6RTtJQTZQSSxzQ0FBcUIsR0FBZ0IsRUFDaEIsYUFBMkIsRUFDM0IsaUJBQW1DLEVBQ2tCLE9BQWtDO1FBSHZGLFFBQUcsR0FBSCxHQUFHLENBQWE7UUFDaEIsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0Isc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQXhQeEQsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUNuQixjQUFTLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLFNBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUdyQixnQkFBVyxHQUFRO1lBQ2YsRUFBRSxFQUFFLFNBQVM7WUFDYixJQUFJLEVBQUU7Z0JBQ0YsU0FBUyxFQUFFO29CQUNQLGFBQWEsRUFBRSxXQUFXO2lCQUM3QjtnQkFDRCxNQUFNLEVBQUUsS0FBSztnQkFDYixrQkFBa0IsRUFBRSxPQUFPO2dCQUMzQixPQUFPLEVBQUU7b0JBQ0wsT0FBTyxFQUFFLFNBQVM7b0JBQ2xCLGtCQUFrQixFQUFFLE9BQU87b0JBQzNCLE1BQU0sRUFBRSxtQkFBbUI7aUJBQzlCO2dCQUNELFVBQVUsRUFBRTtvQkFDUixPQUFPLEVBQUUsU0FBUztvQkFDbEIsTUFBTSxFQUFFLHVDQUF1QztpQkFDbEQ7Z0JBQ0QsU0FB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QixFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7WUFBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLElBQUk7WUFBQyxPQUFPLEdBQUcsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUN6QyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7WUFBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hELElBQUk7WUFBQyxRQUFRLEdBQUcsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUMxQyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7WUFBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLElBQUk7WUFBQyxLQUFLLEdBQUcsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUN2QyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7WUFBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLElBQUk7WUFBQyxLQUFLLEdBQUcsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUN2QyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7WUFBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLElBQUk7WUFBQyxHQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNyQyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7WUFBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLElBQUk7WUFBQyxJQUFJLEdBQUcsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUN0QyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7WUFBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLElBQUk7WUFBQyxJQUFJLEdBQUcsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUN0QyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7WUFBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLElBQUk7WUFBQyxNQUFNLEdBQUcsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUN4QyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7WUFBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELElBQUk7WUFBQyxTQUFTLEdBQUcsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUMzQyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7WUFBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLElBQUk7WUFBQyxPQUFPLEdBQUcsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUN6QyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xELElBQUk7WUFBQyxRQUFRLEdBQUcsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUMxQyxFQUFFLENBQUMsQ0FBQyxV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QVEsQ0FBQztRQUN2QyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxHQUFHLEdBQUcsUUFBUSxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUE5WkQ7UUFBQyxnQkFBUyxDQUFDLGdDQUFTLENBQUM7OzZFQUFBO0lBZHpCO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsNkJBQTZCO1lBQ3ZDLFdBQVcsRUFBRSw2QkFBNkI7WUFDMUMsVUFBVSxFQUFFO2dCQUNSLHVCQUFlO2dCQUNmLGdDQUF3QjtnQkFDeEIsZ0NBQVMsQ0FBQztZQUNkLFNBQVMsRUFBRSxDQUFDLG1CQUFXLENBQUM7WUFDeEIsU0FBUyxFQUFFLEVBQUU7WUFDYixNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUM7U0FDeEIsQ0FBQzttQkFrUWdCLFdBQUksRUFBRTttQkFBRSxhQUFNLENBQUMsaUJBQVUsQ0FBQyxjQUFNLE9BQUEsdURBQXlCLEVBQXpCLENBQXlCLENBQUMsQ0FBQzs7b0NBbFEzRTtJQWthRixtQ0FBQztBQUFELENBaGFBLEFBZ2FDLElBQUE7QUFoYVksb0NBQTRCLCtCQWdheEMsQ0FBQSIsImZpbGUiOiJtYWNoaW5lcy9hbmFseXRpY3MvdG90YWwuc2FsZXMuYnkubWFjaGluZS90b3RhbC5zYWxlcy5ieS5tYWNoaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgSG9zdCwgZm9yd2FyZFJlZiwgSW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtFcnJvclNlcnZpY2V9IGZyb20gXCIuLi8uLi8uLi9lcnJvcnMvZXJyb3Iuc2VydmljZVwiO1xyXG5pbXBvcnQge01hY2hpbmVzU2VydmljZX0gZnJvbSBcIi4uLy4uL21hY2hpbmVzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRk9STV9ESVJFQ1RJVkVTLCBSRUFDVElWRV9GT1JNX0RJUkVDVElWRVMsXHJcbiAgICBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtBbmFseXRpY3NTZXJ2aWNlfSBmcm9tIFwiLi4vYW5hbHl0aWNzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgWmluZ0NoYXJ0IH0gZnJvbSBcIi4uL3ppbmcuY2hhcnQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Q2hhcnR9IGZyb20gXCIuLi9jaGFydG1vZGVscy9jaGFydC5tb2RlbFwiO1xyXG5pbXBvcnQge01hY2hpbmVBbmFseXRpY3NDb21wb25lbnR9IGZyb20gXCIuLi9hbmFseXRpY3MubWFjaGluZS5jb21wb25lbnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAndmVuZC10b3RhbC1zYWxlcy1ieS1tYWNoaW5lJyxcclxuICAgIHRlbXBsYXRlVXJsOiAndG90YWwuc2FsZXMuYnkubWFjaGluZS5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtcclxuICAgICAgICBGT1JNX0RJUkVDVElWRVMsXHJcbiAgICAgICAgUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTLFxyXG4gICAgICAgIFppbmdDaGFydF0sXHJcbiAgICBwcm92aWRlcnM6IFtGb3JtQnVpbGRlcl0sXHJcbiAgICBzdHlsZVVybHM6IFtdLFxyXG4gICAgaW5wdXRzOiBbJ21hY2hpbmVJZCddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVG90YWxTYWxlc0J5TWFjaGluZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBAVmlld0NoaWxkKFppbmdDaGFydClcclxuICAgIHByaXZhdGUgemluZ0NoYXJ0Q29tcG9uZW50MjogWmluZ0NoYXJ0O1xyXG5cclxuICAgIHByaXZhdGUgcGFyZW50OiBNYWNoaW5lQW5hbHl0aWNzQ29tcG9uZW50O1xyXG5cclxuICAgIG1hY2hpbmVJZDogYW55O1xyXG4gICAgYWxsU2FsZXM6IGFueSA9IFtdO1xyXG4gICAgd2Vla1NhbGVzOiBhbnkgPSBbXTtcclxuICAgIGNhc2g6IG51bWJlciA9IDA7XHJcbiAgICBkYWlseUF2ZzogbnVtYmVyID0gMDtcclxuICAgIGNoYXJ0OiBDaGFydDtcclxuXHJcbiAgICBjaGFydENvbmZpZzogYW55ID0ge1xyXG4gICAgICAgIGlkOiAnQ2hhcnQtMScsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBcImdsb2JhbHNcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJmb250LWZhbWlseVwiOiBcIkhlbHZldGljYVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwidHlwZVwiOiBcImJhclwiLFxyXG4gICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICBcInRpdGxlXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjNjA2MDYwXCIsXHJcbiAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiVG90YWwgc2FsZXMsIDIwMTZcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcInN1YnRpdGxlXCI6IHtcclxuICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjNjA2MDYwXCIsXHJcbiAgICAgICAgICAgICAgICBcInRleHRcIjogXCJDbGljayB0aGUgY29sdW1ucyB0byB2aWV3IHRoZSBhbW91bnQuXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJzY2FsZS15XCI6IHtcclxuICAgICAgICAgICAgICAgIFwibGluZS1jb2xvclwiOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgIFwidGlja1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJsaW5lLWNvbG9yXCI6IFwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJndWlkZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJsaW5lLXN0eWxlXCI6IFwic29saWRcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwiaXRlbVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiM2MDYwNjBcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcInNjYWxlLXhcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiSmFudWFyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRmVicnVhcnlcIixcclxuICAgICAgICAgICAgICAgICAgICBcIk1hcmNoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJBcHJpbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiTWF5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJKdW5lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJKdWx5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJBdWd1c3RcIixcclxuICAgICAgICAgICAgICAgICAgICBcIlNlcHRlbWJlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiT2N0b2JlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiTm92ZW1iZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBcIkRlY2VtYmVyXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBcImxpbmUtY29sb3JcIjogXCIjQzBEMEUwXCIsXHJcbiAgICAgICAgICAgICAgICBcImxpbmUtd2lkdGhcIjogMSxcclxuICAgICAgICAgICAgICAgIFwidGlja1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJsaW5lLXdpZHRoXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsaW5lLWNvbG9yXCI6IFwiI0MwRDBFMFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJndWlkZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJpdGVtXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzYwNjA2MFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwiY3Jvc3NoYWlyLXhcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJtYXJrZXJcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwidmlzaWJsZVwiOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwibGluZS1jb2xvclwiOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgIFwibGluZS13aWR0aFwiOiBcIjBweFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzY2FsZS1sYWJlbFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJwbG90LWxhYmVsXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCIlZGF0YS1icm93c2VyOiAkJXYgb2YgdG90YWxcIixcclxuICAgICAgICAgICAgICAgICAgICBcIm11bHRpcGxlXCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmb250LXNpemVcIjogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiM2MDYwNjBcIixcclxuICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYm9yZGVyLXdpZHRoXCI6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhbHBoYVwiOiAwLjgsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjYWxsb3V0XCI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJjYWxsb3V0LXBvc2l0aW9uXCI6IFwiYm90dG9tXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJzaGFkb3dcIjogMCxcclxuICAgICAgICAgICAgICAgICAgICBcInBsYWNlbWVudFwiOiBcIm5vZGUtdG9wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJib3JkZXItcmFkaXVzXCI6IDQsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJwYWRkaW5nXCI6IDYsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJydWxlc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicnVsZVwiOiBcIiVpPT0wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJvcmRlci1jb2xvclwiOiBcIiM3Q0I1RUNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJ1bGVcIjogXCIlaT09MVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3JkZXItY29sb3JcIjogXCIjNDM0MzQ4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJydWxlXCI6IFwiJWk9PTJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYm9yZGVyLWNvbG9yXCI6IFwiIzkwRUQ3RFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicnVsZVwiOiBcIiVpPT0zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJvcmRlci1jb2xvclwiOiBcIiNGN0EzNUNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJ1bGVcIjogXCIlaT09NFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3JkZXItY29sb3JcIjogXCIjODA4NUU5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJydWxlXCI6IFwiJWk9PTVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYm9yZGVyLWNvbG9yXCI6IFwiI0Y5QjZDNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicnVsZVwiOiBcIiVpPT02XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJvcmRlci1jb2xvclwiOiBcIiM3Q0I1RUNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJ1bGVcIjogXCIlaT09N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3JkZXItY29sb3JcIjogXCIjNDM0MzQ4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJydWxlXCI6IFwiJWk9PThcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYm9yZGVyLWNvbG9yXCI6IFwiIzkwRUQ3RFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicnVsZVwiOiBcIiVpPT05XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJvcmRlci1jb2xvclwiOiBcIiNGN0EzNUNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJ1bGVcIjogXCIlaT09MTBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYm9yZGVyLWNvbG9yXCI6IFwiIzgwODVFOVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicnVsZVwiOiBcIiVpPT0xMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3JkZXItY29sb3JcIjogXCIjRjlCNkM2XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXCJwbG90XCI6IHtcclxuICAgICAgICAgICAgICAgIFwiZGF0YS1icm93c2VyXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICBcIjxzcGFuIHN0eWxlPSdmb250LXdlaWdodDpib2xkO2NvbG9yOiM1NkFFRTI7Jz5KYW51YXJ5PC9zcGFuPlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiPHNwYW4gc3R5bGU9J2ZvbnQtd2VpZ2h0OmJvbGQ7Y29sb3I6IzU2NjhFMjsnPkZlYnJ1YXJ5PC9zcGFuPlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiPHNwYW4gc3R5bGU9J2ZvbnQtd2VpZ2h0OmJvbGQ7Y29sb3I6IzhBNTZFMjsnPk1hcmNoPC9zcGFuPlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiPHNwYW4gc3R5bGU9J2ZvbnQtd2VpZ2h0OmJvbGQ7Y29sb3I6I0NGNTZFMjsnPkFwcmlsPC9zcGFuPlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiPHNwYW4gc3R5bGU9J2ZvbnQtd2VpZ2h0OmJvbGQ7Y29sb3I6I0UyNTZBRTsnPk1heTwvc3Bhbj5cIixcclxuICAgICAgICAgICAgICAgICAgICBcIjxzcGFuIHN0eWxlPSdmb250LXdlaWdodDpib2xkO2NvbG9yOiNFMjU2Njg7Jz5KdW5lPC9zcGFuPlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiPHNwYW4gc3R5bGU9J2ZvbnQtd2VpZ2h0OmJvbGQ7Y29sb3I6I0UyODk1NjsnPkp1bHk8L3NwYW4+XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCI8c3BhbiBzdHlsZT0nZm9udC13ZWlnaHQ6Ym9sZDtjb2xvcjojRTJDRjU2Oyc+QXVndXN0PC9zcGFuPlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiPHNwYW4gc3R5bGU9J2ZvbnQtd2VpZ2h0OmJvbGQ7Y29sb3I6I0FFRTI1NjsnPlNlcHRlbWJlcjwvc3Bhbj5cIixcclxuICAgICAgICAgICAgICAgICAgICBcIjxzcGFuIHN0eWxlPSdmb250LXdlaWdodDpib2xkO2NvbG9yOiM2OEUyNTY7Jz5PY3RvYmVyPC9zcGFuPlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiPHNwYW4gc3R5bGU9J2ZvbnQtd2VpZ2h0OmJvbGQ7Y29sb3I6IzU2RTI4OTsnPk5vdmVtYmVyPC9zcGFuPlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiPHNwYW4gc3R5bGU9J2ZvbnQtd2VpZ2h0OmJvbGQ7Y29sb3I6IzU2RTJDRjsnPkRlY2VtYmVyPC9zcGFuPlwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgXCJjdXJzb3JcIjogXCJoYW5kXCIsXHJcbiAgICAgICAgICAgICAgICBcInZhbHVlLWJveFwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiJCV2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LWRlY29yYXRpb25cIjogXCJ1bmRlcmxpbmVcIixcclxuICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzYwNjA2MFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJ0b29sdGlwXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcInZpc2libGVcIjogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcImFuaW1hdGlvblwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJlZmZlY3RcIjogXCI3XCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcInJ1bGVzXCI6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicnVsZVwiOiBcIiVpPT0wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIiM1NkFFRTJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJ1bGVcIjogXCIlaT09MVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCIjNTY2OEUyXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJydWxlXCI6IFwiJWk9PTJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiIzhBNTZFMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicnVsZVwiOiBcIiVpPT0zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIiNDRjU2RTJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJ1bGVcIjogXCIlaT09NFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCIjRTI1NkFFXCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJydWxlXCI6IFwiJWk9PTVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiI0UyNTY2OFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicnVsZVwiOiBcIiVpPT02XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIiNFMjg5NTZcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJ1bGVcIjogXCIlaT09N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCIjRTJDRjU2XCJcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJydWxlXCI6IFwiJWk9PThcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiI0FFRTI1NlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicnVsZVwiOiBcIiVpPT05XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIiM2OEUyNTZcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJ1bGVcIjogXCIlaT09MTBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiIzU2RTI4OVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicnVsZVwiOiBcIiVpPT0xMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCIjNTZFMkNGXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFwic2VyaWVzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDU2LjMzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAyNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMTAuNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gNC44LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAwLjksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDAuMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gNTYuMzMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDI0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAxMC40LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA0LjgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDAuOSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMC4yXHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIlxyXG4gICAgfTtcclxuICAgIC8vIGNvbmZpZ0NoYXJ0MjogT2JqZWN0ID0ge307XHJcblxyXG4gICAgcXVlcnk6IGFueSA9IHtcclxuICAgICAgICBtYWNoaW5lSWQ6IHRoaXMubWFjaGluZUlkLFxyXG4gICAgICAgIGZyb21EYXRlOiAnMjAxNi0wMS0wMScsXHJcbiAgICAgICAgdGlsbERhdGU6ICcyMDE3LTAxLTAxJ1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBfZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgICAgICAgICAgICAgIHByaXZhdGUgX2Vycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgIHByaXZhdGUgX2FuYWx5dGljc1NlcnZpY2U6IEFuYWx5dGljc1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICAgQEhvc3QoKSBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gTWFjaGluZUFuYWx5dGljc0NvbXBvbmVudCkpIF9wYXJlbnQ6IE1hY2hpbmVBbmFseXRpY3NDb21wb25lbnQpIHtcclxuXHJcbiAgICAgICAgdGhpcy5jaGFydCA9IG5ldyBDaGFydCh0aGlzLmNoYXJ0Q29uZmlnKTtcclxuICAgICAgICB0aGlzLnBhcmVudCA9IF9wYXJlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgLy8gVE9ETzogR2V0IHNhbGVzIGJ5IG1hY2hpbmUgZnJvbSBsYXN0IG1vbnRoXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RIRSBNQUNISU5FIElEOiAnLCB0aGlzLm1hY2hpbmVJZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RoZSBxdWVyeTogJywgdGhpcy5xdWVyeSk7XHJcbiAgICAgICAgdGhpcy5xdWVyeS5tYWNoaW5lSWQgPSB0aGlzLm1hY2hpbmVJZDtcclxuICAgICAgICB0aGlzLmdldFNhbGVzQnlNYWNoaW5lKHRoaXMucXVlcnkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNhbGVzQnlNYWNoaW5lKF9xdWVyeTogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RyeWluZyB0byBnZXQgc2FsZXMgYnkgbWFjaGluZScpO1xyXG5cclxuICAgICAgICB0aGlzLl9hbmFseXRpY3NTZXJ2aWNlLmdldFNhbGVzQnlNYWNoaW5lKF9xdWVyeSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsU2FsZXMgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FzaCA9IHRoaXMuY2FsY3VsYXRlQ2FzaChkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5zZXRDYXNoKHRoaXMuY2FzaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5kYWlseUF2ZyA9IHRoaXMuY2FsY3VsYXRlRGFpbHlBdmVyYWdlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucGFyZW50LnNldERhaWx5QXZnKHRoaXMuZGFpbHlBdmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuY2hhcnQgPVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuY2FsY3VsYXRlU2FsZXNCeVByb2R1Y3QoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVTYWxlc0J5TW9udGgoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0NBU0g6ICcsIHRoaXMuY2FzaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0RhaWx5IGF2ZXJhZ2U6ICcsIHRoaXMuZGFpbHlBdmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdUYWJsZSBkYXRhOiAnLCB0aGlzLmFsbFNhbGVzKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsY3VsYXRlU2FsZXNCeU1vbnRoKHNhbGVzOiBhbnkpIHtcclxuICAgICAgICBsZXQgdmFsdWVzOiBhbnkgPSBbXTtcclxuICAgICAgICBpZiAoIXNhbGVzIHx8IHNhbGVzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhcnRDb25maWcuZGF0YS5zZXJpZXNbMF0udmFsdWVzID0gdmFsdWVzO1xyXG4gICAgICAgICAgICB0aGlzLmNoYXJ0LnNldERhdGEodGhpcy5jaGFydENvbmZpZy5kYXRhKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3RoaXMuY2hhcnRDb25maWcnLCB0aGlzLmNoYXJ0Q29uZmlnKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuemluZ0NoYXJ0Q29tcG9uZW50MilcclxuICAgICAgICAgICAgICAgIHRoaXMuemluZ0NoYXJ0Q29tcG9uZW50Mi5yZXJlbmRlcigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gQ3JlYXRlIHN0YXRpc3RpY3NcclxuICAgICAgICBsZXQgbW9udGhzRGljdDogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0ge307XHJcbiAgICAgICAgbGV0IGk7XHJcblxyXG4gICAgICAgIGZvciAoaSBpbiBzYWxlcykge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZShzYWxlc1tpXS5kYXRlKTtcclxuICAgICAgICAgICAgbGV0IGtleSA9IGN1cnJlbnREYXRlLmdldE1vbnRoKCkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgbGV0IGtleUV4aXN0ID0gbW9udGhzRGljdC5oYXNPd25Qcm9wZXJ0eShrZXkpO1xyXG4gICAgICAgICAgICBpZiAoa2V5RXhpc3QpIHtcclxuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gbW9udGhzRGljdFtrZXldO1xyXG4gICAgICAgICAgICAgICAgbGV0IHF1YW50aXR5ID0gaXRlbS5xdWFudGl0eTtcclxuICAgICAgICAgICAgICAgIGxldCB0b3RhbCA9IGl0ZW0udG90YWw7XHJcbiAgICAgICAgICAgICAgICB0b3RhbCArPSBzYWxlc1tpXS5zb2xkUHJpY2U7XHJcbiAgICAgICAgICAgICAgICBxdWFudGl0eSsrO1xyXG4gICAgICAgICAgICAgICAgbGV0IG9iajogYW55ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiBxdWFudGl0eSxcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbDogdG90YWxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBtb250aHNEaWN0W2tleV0gPSBvYmo7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2JqOiBhbnkgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWw6IHNhbGVzW2ldLnNvbGRQcmljZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIG1vbnRoc0RpY3Rba2V5XSA9IG9iajtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGo7XHJcbiAgICAgICAgICAgIGxldCBqYW51YXJ5OiBhbnksXHJcbiAgICAgICAgICAgICAgICBmZWJydWFyeTogYW55LFxyXG4gICAgICAgICAgICAgICAgbWFyY2g6IGFueSxcclxuICAgICAgICAgICAgICAgIGFwcmlsOiBhbnksXHJcbiAgICAgICAgICAgICAgICBtYXk6IGFueSxcclxuICAgICAgICAgICAgICAgIGp1bmU6IGFueSxcclxuICAgICAgICAgICAgICAgIGp1bHk6IGFueSxcclxuICAgICAgICAgICAgICAgIGF1Z3VzdDogYW55LFxyXG4gICAgICAgICAgICAgICAgc2VwdGVtYmVyOiBhbnksXHJcbiAgICAgICAgICAgICAgICBvY3RvYmVyOiBhbnksXHJcbiAgICAgICAgICAgICAgICBub3ZlbWJlcjogYW55LFxyXG4gICAgICAgICAgICAgICAgZGVjZW1iZXI6IGFueTtcclxuXHJcbiAgICAgICAgICAgIGlmIChtb250aHNEaWN0W1wiMFwiXSkgamFudWFyeSA9IG1vbnRoc0RpY3RbXCIwXCJdO1xyXG4gICAgICAgICAgICBlbHNlIGphbnVhcnkgPSB7IHF1YW50aXR5OiAwLCB0b3RhbDogMCB9O1xyXG4gICAgICAgICAgICBpZiAobW9udGhzRGljdFtcIjFcIl0pIGZlYnJ1YXJ5ID0gbW9udGhzRGljdFtcIjFcIl07XHJcbiAgICAgICAgICAgIGVsc2UgZmVicnVhcnkgPSB7IHF1YW50aXR5OiAwLCB0b3RhbDogMCB9O1xyXG4gICAgICAgICAgICBpZiAobW9udGhzRGljdFtcIjJcIl0pIG1hcmNoID0gbW9udGhzRGljdFtcIjJcIl07XHJcbiAgICAgICAgICAgIGVsc2UgbWFyY2ggPSB7IHF1YW50aXR5OiAwLCB0b3RhbDogMCB9O1xyXG4gICAgICAgICAgICBpZiAobW9udGhzRGljdFtcIjNcIl0pIGFwcmlsID0gbW9udGhzRGljdFtcIjNcIl07XHJcbiAgICAgICAgICAgIGVsc2UgYXByaWwgPSB7IHF1YW50aXR5OiAwLCB0b3RhbDogMCB9O1xyXG4gICAgICAgICAgICBpZiAobW9udGhzRGljdFtcIjRcIl0pIG1heSA9IG1vbnRoc0RpY3RbXCI0XCJdO1xyXG4gICAgICAgICAgICBlbHNlIG1heSA9IHsgcXVhbnRpdHk6IDAsIHRvdGFsOiAwIH07XHJcbiAgICAgICAgICAgIGlmIChtb250aHNEaWN0W1wiNVwiXSkganVuZSA9IG1vbnRoc0RpY3RbXCI1XCJdO1xyXG4gICAgICAgICAgICBlbHNlIGp1bmUgPSB7IHF1YW50aXR5OiAwLCB0b3RhbDogMCB9O1xyXG4gICAgICAgICAgICBpZiAobW9udGhzRGljdFtcIjZcIl0pIGp1bHkgPSBtb250aHNEaWN0W1wiNlwiXTtcclxuICAgICAgICAgICAgZWxzZSBqdWx5ID0geyBxdWFudGl0eTogMCwgdG90YWw6IDAgfTtcclxuICAgICAgICAgICAgaWYgKG1vbnRoc0RpY3RbXCI3XCJdKSBhdWd1c3QgPSBtb250aHNEaWN0W1wiN1wiXTtcclxuICAgICAgICAgICAgZWxzZSBhdWd1c3QgPSB7IHF1YW50aXR5OiAwLCB0b3RhbDogMCB9O1xyXG4gICAgICAgICAgICBpZiAobW9udGhzRGljdFtcIjhcIl0pIHNlcHRlbWJlciA9IG1vbnRoc0RpY3RbXCI4XCJdO1xyXG4gICAgICAgICAgICBlbHNlIHNlcHRlbWJlciA9IHsgcXVhbnRpdHk6IDAsIHRvdGFsOiAwIH07XHJcbiAgICAgICAgICAgIGlmIChtb250aHNEaWN0W1wiOVwiXSkgb2N0b2JlciA9IG1vbnRoc0RpY3RbXCI5XCJdO1xyXG4gICAgICAgICAgICBlbHNlIG9jdG9iZXIgPSB7IHF1YW50aXR5OiAwLCB0b3RhbDogMCB9O1xyXG4gICAgICAgICAgICBpZiAobW9udGhzRGljdFtcIjEwXCJdKSBub3ZlbWJlciA9IG1vbnRoc0RpY3RbXCIxMFwiXTtcclxuICAgICAgICAgICAgZWxzZSBub3ZlbWJlciA9IHsgcXVhbnRpdHk6IDAsIHRvdGFsOiAwIH07XHJcbiAgICAgICAgICAgIGlmIChtb250aHNEaWN0W1wiMlwiXSkgZGVjZW1iZXIgPSBtb250aHNEaWN0W1wiMlwiXTtcclxuICAgICAgICAgICAgZWxzZSBkZWNlbWJlciA9IHsgcXVhbnRpdHk6IDAsIHRvdGFsOiAwIH07XHJcblxyXG4gICAgICAgICAgICB2YWx1ZXMucHVzaChqYW51YXJ5LnRvdGFsKTtcclxuICAgICAgICAgICAgdmFsdWVzLnB1c2goZmVicnVhcnkudG90YWwpO1xyXG4gICAgICAgICAgICB2YWx1ZXMucHVzaChtYXJjaC50b3RhbCk7XHJcbiAgICAgICAgICAgIHZhbHVlcy5wdXNoKGFwcmlsLnRvdGFsKTtcclxuICAgICAgICAgICAgdmFsdWVzLnB1c2gobWF5LnRvdGFsKTtcclxuICAgICAgICAgICAgdmFsdWVzLnB1c2goanVuZS50b3RhbCk7XHJcbiAgICAgICAgICAgIHZhbHVlcy5wdXNoKGp1bHkudG90YWwpO1xyXG4gICAgICAgICAgICB2YWx1ZXMucHVzaChhdWd1c3QudG90YWwpO1xyXG4gICAgICAgICAgICB2YWx1ZXMucHVzaChzZXB0ZW1iZXIudG90YWwpO1xyXG4gICAgICAgICAgICB2YWx1ZXMucHVzaChvY3RvYmVyLnRvdGFsKTtcclxuICAgICAgICAgICAgdmFsdWVzLnB1c2gobm92ZW1iZXIudG90YWwpO1xyXG4gICAgICAgICAgICB2YWx1ZXMucHVzaChkZWNlbWJlci50b3RhbCk7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2VyaWVzJywgdmFsdWVzKTtcclxuICAgICAgICAgICAgdGhpcy5jaGFydENvbmZpZy5kYXRhLnNlcmllc1swXS52YWx1ZXMgPSB2YWx1ZXM7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhcnQuc2V0RGF0YSh0aGlzLmNoYXJ0Q29uZmlnLmRhdGEpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndGhpcy5jaGFydENvbmZpZycsIHRoaXMuY2hhcnRDb25maWcpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy56aW5nQ2hhcnRDb21wb25lbnQyKVxyXG4gICAgICAgICAgICAgICAgdGhpcy56aW5nQ2hhcnRDb21wb25lbnQyLnJlcmVuZGVyKCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ1ppbmcgY2hhcnQgY29tcG9uZW50OiAnLCB0aGlzLnppbmdDaGFydENvbXBvbmVudDIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGN1bGF0ZUNhc2goc2FsZXM6IGFueSkge1xyXG4gICAgICAgIGxldCB0b3RhbCA9IDA7XHJcbiAgICAgICAgaWYgKHNhbGVzKSB7XHJcbiAgICAgICAgICAgIGxldCBpO1xyXG4gICAgICAgICAgICBmb3IgKGkgaW4gc2FsZXMpIHtcclxuICAgICAgICAgICAgICAgIHRvdGFsICs9IHNhbGVzW2ldLnNvbGRQcmljZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdG90YWw7XHJcbiAgICB9XHJcblxyXG4gICAgb25EYXRlUmVmcmVzaChzZWxlY3RlZFllYXI6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0eXBlIG9mIFNlbGVjdGVkIFlFQVI6ICcsIHR5cGVvZiBzZWxlY3RlZFllYXIpO1xyXG4gICAgICAgIGlmICh0eXBlb2Ygc2VsZWN0ZWRZZWFyID09IFwic3RyaW5nXCIpIHNlbGVjdGVkWWVhciA9IHBhcnNlSW50KHNlbGVjdGVkWWVhcik7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3R5cGUgb2YgU2VsZWN0ZWQgWUVBUjogJywgdHlwZW9mIHNlbGVjdGVkWWVhcik7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NlbGVjdGVkWWVhcjogJywgc2VsZWN0ZWRZZWFyKTtcclxuICAgICAgICBsZXQgX2Zyb20gPSBzZWxlY3RlZFllYXIudG9TdHJpbmcoKTtcclxuICAgICAgICBsZXQgX3RvID0gKHNlbGVjdGVkWWVhciArIDEpLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgIHRoaXMucXVlcnkuZnJvbURhdGUgPSBfZnJvbSArICctMDEtMDEnO1xyXG4gICAgICAgIHRoaXMucXVlcnkudGlsbERhdGUgPSBfdG8gKyAnLTAxLTAxJztcclxuICAgICAgICBjb25zb2xlLmxvZygnUVVFUlk6ICcsIHRoaXMucXVlcnkpO1xyXG4gICAgICAgIHRoaXMuZ2V0U2FsZXNCeU1hY2hpbmUodGhpcy5xdWVyeSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
