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
var error_service_1 = require("../../errors/error.service");
var all_sales_table_component_1 = require("./all.sales.table.component");
var forms_1 = require('@angular/forms');
var analytics_service_1 = require("./analytics.service");
var zing_chart_component_1 = require("./zing.chart.component");
var chart_model_1 = require("./chartmodels/chart.model");
var analytics_machine_component_1 = require("./analytics.machine.component");
var day_of_the_week_component_1 = require("./tables/day.of.the.week.component");
var SalesByMachineComponent = (function () {
    function SalesByMachineComponent(_fb, _errorService, _analyticsService, _parent) {
        this._fb = _fb;
        this._errorService = _errorService;
        this._analyticsService = _analyticsService;
        this.allSales = [];
        this.weekSales = [];
        this.cash = 0;
        this.dailyAvg = 0;
        this.tableType = 1;
        this.chartConfig = {
            id: 'Chart-1',
            data: {
                type: "pie",
                backgroundColor: "transparent",
                plot: {
                    borderColor: "transparent",
                    borderWidth: 5,
                    // slice: 90,
                    valueBox: {
                        placement: 'out',
                        text: '%t\n%npv%',
                        fontFamily: "Open Sans"
                    },
                    tooltip: {
                        fontSize: '18',
                        fontFamily: "Open Sans",
                        padding: "5 10",
                        text: "%npv%"
                    },
                    animation: {
                        effect: 2,
                        method: 5,
                        speed: 500,
                        sequence: 1
                    }
                },
                // source: {
                //     text: 'gs.statcounter.com',
                //     fontColor: "#8e99a9",
                //     fontFamily: "Open Sans"
                // },
                title: {
                    fontColor: "#000000",
                    text: 'Sales by product',
                    align: "left",
                    offsetX: 10,
                    fontFamily: "Open Sans",
                    fontSize: 25
                },
                subtitle: {
                    offsetX: 10,
                    offsetY: 10,
                    fontColor: "#8e99a9",
                    fontFamily: "Open Sans",
                    fontSize: "16",
                    text: '',
                    align: "left"
                },
                plotarea: {
                    margin: "20 0 0 0"
                },
                series: []
            },
            width: 500,
            height: 500
        };
        this.configChart2 = {};
        this.query = {
            machineId: this.machineId,
            fromDate: '',
            tillDate: ''
        };
        this.chart = new chart_model_1.Chart(this.chartConfig);
        this.parent = _parent;
    }
    SalesByMachineComponent.prototype.ngOnInit = function () {
        // TODO: Get sales by machine from last month
        console.log('THE MACHINE ID: ', this.machineId);
        console.log('The query: ', this.query);
        this.query.machineId = this.machineId;
        this.getSalesByMachine(this.query);
    };
    SalesByMachineComponent.prototype.getSalesByMachine = function (_query) {
        var _this = this;
        console.log('Trying to get sales by machine');
        this._analyticsService.getSalesByMachine(_query)
            .subscribe(function (data) {
            _this.allSales = data;
            _this.cash = _this.calculateCash(data);
            _this.parent.setCash(_this.cash);
            _this.dailyAvg = _this.calculateDailyAverage(data);
            _this.parent.setDailyAvg(_this.dailyAvg);
            // this.chart =
            _this.calculateSalesByProduct(data);
            console.log('CASH: ', _this.cash);
            console.log('Daily average: ', _this.dailyAvg);
            console.log('Table data: ', _this.allSales);
        }, function (error) { return _this._errorService.handleError(error); });
    };
    SalesByMachineComponent.prototype.calculateCash = function (sales) {
        var total = 0;
        if (sales) {
            var i = void 0;
            for (i in sales) {
                total += sales[i].soldPrice;
            }
        }
        return total;
    };
    SalesByMachineComponent.prototype.calculateSalesByProduct = function (sales) {
        if (!sales || sales.length == 0)
            return;
        var series = [];
        // Create statistics
        var productDict = {};
        var i;
        for (i in sales) {
            var key = sales[i].product._id;
            var keyExist = productDict.hasOwnProperty(key);
            if (keyExist) {
                var item = productDict[key];
                var quantity = item.quantity;
                var total = item.total;
                total += sales[i].soldPrice;
                quantity++;
                var obj = {
                    quantity: quantity,
                    total: total,
                    productName: sales[i].product.name
                };
                productDict[key] = obj;
            }
            else {
                var obj = {
                    quantity: 1,
                    total: sales[i].soldPrice,
                    productName: sales[i].product.name
                };
                productDict[key] = obj;
            }
        }
        // Series template
        // {
        //     values : [11.38],
        //     text: "Internet Explorer",
        //     backgroundColor: '#50ADF5',
        // }
        var j;
        var colorCounter = 0;
        var predefinedColors = ['#56AEE2', '#5668E2', '#8A56E2', '#CF56E2',
            '#E256AE', '#E25668', '#E28956', '#E2CF56', '#AEE256',
            '#68E256', '#56E289', '#56E2CF'];
        for (j in productDict) {
            var item = productDict[j];
            series.push({
                values: [item.total],
                text: item.productName + ', $' + item.total,
                backgroundColor: predefinedColors[colorCounter]
            });
            colorCounter++;
            if (colorCounter >= predefinedColors.length)
                colorCounter = 0;
        }
        console.log('Series', series);
        this.chartConfig.data.series = series;
        this.chart.setData(this.chartConfig.data);
        if (this.zingChartComponent)
            this.zingChartComponent.rerender();
    };
    SalesByMachineComponent.prototype.calculateDailyAverage = function (sales) {
        var avgDict = {};
        var i;
        for (i in sales) {
            var _dateStr = sales[i].date;
            var _date = new Date(_dateStr);
            var day = _date.getDate();
            var month = _date.getMonth();
            var year = _date.getFullYear();
            var key = day.toString() + month.toString() + year.toString();
            var keyExist = avgDict.hasOwnProperty(key);
            if (keyExist) {
                var item = avgDict[key];
                var total = item.total;
                total += sales[i].soldPrice;
                var obj = {
                    total: total,
                };
                avgDict[key] = obj;
            }
            else {
                var obj = {
                    total: sales[i].soldPrice,
                };
                avgDict[key] = obj;
            }
        }
        // Okay, make the average
        var j;
        var totalAvg = 0;
        var divider = 1;
        for (j in avgDict) {
            var item = avgDict[j];
            totalAvg += item.total;
            divider++;
        }
        var average = totalAvg / divider;
        return average;
    };
    SalesByMachineComponent.prototype.onDateRefresh = function (_from, _to) {
        console.log('FROM date: ', _from);
        console.log('TO date:', _to);
        this.query.fromDate = _from;
        this.query.tillDate = _to;
        this.getSalesByMachine(this.query);
    };
    SalesByMachineComponent.prototype.switchToSalesByHour = function () {
        this.tableType = 1;
    };
    SalesByMachineComponent.prototype.switchToWeeklySales = function () {
        this.tableType = 2;
    };
    SalesByMachineComponent.prototype.switchToDayOfTheWeek = function () {
        this.calculateDateOfTheWeekSales();
        this.tableType = 3;
    };
    SalesByMachineComponent.prototype.calculateDateOfTheWeekSales = function () {
        var weekDict = {};
        var i;
        var sales = this.allSales;
        for (i in sales) {
            var _dateStr = sales[i].date;
            var _date = new Date(_dateStr);
            var day = _date.getDate();
            var month = _date.getMonth();
            var year = _date.getFullYear();
            var key = day.toString() + month.toString() + year.toString();
            var keyExist = weekDict.hasOwnProperty(key);
            if (keyExist) {
                var item = weekDict[key];
                item.cash += sales[i].soldPrice;
                item.items += 1;
                var obj = {
                    time: item.time,
                    date: item.date,
                    dayOfTheWeek: item.dayOfTheWeek,
                    cash: item.cash,
                    items: item.items
                };
                weekDict[key] = obj;
            }
            else {
                var obj = {
                    time: this._analyticsService.getTime(sales[i].date),
                    date: this._analyticsService.getDate(sales[i].date),
                    dayOfTheWeek: this._analyticsService.getDayOfTheWeek(sales[i].date),
                    cash: sales[i].soldPrice,
                    items: 1
                };
                weekDict[key] = obj;
            }
        }
        // Okay, construct the weekSales
        this.weekSales = [];
        var j;
        for (j in weekDict) {
            var item = weekDict[j];
            this.weekSales.push(item);
        }
        console.log('Weekly sales: ', this.weekSales);
    };
    __decorate([
        core_1.ViewChild(zing_chart_component_1.ZingChart), 
        __metadata('design:type', zing_chart_component_1.ZingChart)
    ], SalesByMachineComponent.prototype, "zingChartComponent", void 0);
    SalesByMachineComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'vend-sales-by-machine',
            templateUrl: 'sales.by.machine.component.html',
            directives: [all_sales_table_component_1.TableAllSalesComponent,
                day_of_the_week_component_1.TableDayOfTheWeekSalesComponent,
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
    ], SalesByMachineComponent);
    return SalesByMachineComponent;
}());
exports.SalesByMachineComponent = SalesByMachineComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hY2hpbmVzL2FuYWx5dGljcy9zYWxlcy5ieS5tYWNoaW5lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEscUJBQXNFLGVBQWUsQ0FBQyxDQUFBO0FBQ3RGLDhCQUEyQiw0QkFBNEIsQ0FBQyxDQUFBO0FBRXhELDBDQUFxQyw2QkFBNkIsQ0FBQyxDQUFBO0FBQ25FLHNCQUMyRCxnQkFBZ0IsQ0FBQyxDQUFBO0FBQzVFLGtDQUErQixxQkFBcUIsQ0FBQyxDQUFBO0FBQ3JELHFDQUEwQix3QkFBd0IsQ0FBQyxDQUFBO0FBQ25ELDRCQUFvQiwyQkFBMkIsQ0FBQyxDQUFBO0FBQ2hELDRDQUF3QywrQkFBK0IsQ0FBQyxDQUFBO0FBQ3hFLDBDQUE4QyxvQ0FBb0MsQ0FBQyxDQUFBO0FBZ0JuRjtJQWdGSSxpQ0FBcUIsR0FBZ0IsRUFDaEIsYUFBMkIsRUFDM0IsaUJBQW1DLEVBQ2tCLE9BQWtDO1FBSHZGLFFBQUcsR0FBSCxHQUFHLENBQWE7UUFDaEIsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0Isc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQTNFeEQsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUNuQixjQUFTLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLFNBQUksR0FBVyxDQUFDLENBQUM7UUFDakIsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUVyQixjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBRXRCLGdCQUFXLEdBQVE7WUFDZixFQUFFLEVBQUUsU0FBUztZQUNiLElBQUksRUFBRTtnQkFDRixJQUFJLEVBQUUsS0FBSztnQkFDWCxlQUFlLEVBQUUsYUFBYTtnQkFDOUIsSUFBSSxFQUFFO29CQUNGLFdBQVcsRUFBRSxhQUFhO29CQUMxQixXQUFXLEVBQUUsQ0FBQztvQkFDZCxhQUFhO29CQUNiLFFBQVEsRUFBRTt3QkFDTixTQUFTLEVBQUUsS0FBSzt3QkFDaEIsSUFBSSxFQUFFLFdBQVc7d0JBQ2pCLFVBQVUsRUFBRSxX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QUFXLENBQUM7WUFDeEIsU0FBUyxFQUFFLEVBQUU7WUFDYixNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUM7U0FDeEIsQ0FBQzttQkFxRmdCLFdBQUksRUFBRTttQkFBRSxhQUFNLENBQUMsaUJBQVUsQ0FBQyxjQUFNLE9BQUEsdURBQXlCLEVBQXpCLENBQXlCLENBQUMsQ0FBQzs7K0JBckYzRTtJQTZTRiw4QkFBQztBQUFELENBM1NBLEFBMlNDLElBQUE7QUEzU1ksK0JBQXVCLDBCQTJTbkMsQ0FBQSIsImZpbGUiOiJtYWNoaW5lcy9hbmFseXRpY3Mvc2FsZXMuYnkubWFjaGluZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBIb3N0LCBmb3J3YXJkUmVmLCBJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Vycm9yU2VydmljZX0gZnJvbSBcIi4uLy4uL2Vycm9ycy9lcnJvci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7TWFjaGluZXNTZXJ2aWNlfSBmcm9tIFwiLi4vbWFjaGluZXMuc2VydmljZVwiO1xyXG5pbXBvcnQge1RhYmxlQWxsU2FsZXNDb21wb25lbnR9IGZyb20gXCIuL2FsbC5zYWxlcy50YWJsZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRk9STV9ESVJFQ1RJVkVTLCBSRUFDVElWRV9GT1JNX0RJUkVDVElWRVMsXHJcbiAgICBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtBbmFseXRpY3NTZXJ2aWNlfSBmcm9tIFwiLi9hbmFseXRpY3Muc2VydmljZVwiO1xyXG5pbXBvcnQgeyBaaW5nQ2hhcnQgfSBmcm9tIFwiLi96aW5nLmNoYXJ0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0NoYXJ0fSBmcm9tIFwiLi9jaGFydG1vZGVscy9jaGFydC5tb2RlbFwiO1xyXG5pbXBvcnQge01hY2hpbmVBbmFseXRpY3NDb21wb25lbnR9IGZyb20gXCIuL2FuYWx5dGljcy5tYWNoaW5lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1RhYmxlRGF5T2ZUaGVXZWVrU2FsZXNDb21wb25lbnR9IGZyb20gXCIuL3RhYmxlcy9kYXkub2YudGhlLndlZWsuY29tcG9uZW50XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ3ZlbmQtc2FsZXMtYnktbWFjaGluZScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3NhbGVzLmJ5Lm1hY2hpbmUuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczogW1RhYmxlQWxsU2FsZXNDb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICBUYWJsZURheU9mVGhlV2Vla1NhbGVzQ29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgRk9STV9ESVJFQ1RJVkVTLFxyXG4gICAgICAgICAgICAgICAgUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTLFxyXG4gICAgICAgICAgICAgICAgWmluZ0NoYXJ0XSxcclxuICAgIHByb3ZpZGVyczogW0Zvcm1CdWlsZGVyXSxcclxuICAgIHN0eWxlVXJsczogW10sXHJcbiAgICBpbnB1dHM6IFsnbWFjaGluZUlkJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTYWxlc0J5TWFjaGluZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBAVmlld0NoaWxkKFppbmdDaGFydClcclxuICAgIHByaXZhdGUgemluZ0NoYXJ0Q29tcG9uZW50OiBaaW5nQ2hhcnQ7XHJcblxyXG4gICAgcHJpdmF0ZSBwYXJlbnQ6IE1hY2hpbmVBbmFseXRpY3NDb21wb25lbnQ7XHJcblxyXG4gICAgbWFjaGluZUlkOiBhbnk7XHJcbiAgICBhbGxTYWxlczogYW55ID0gW107XHJcbiAgICB3ZWVrU2FsZXM6IGFueSA9IFtdO1xyXG4gICAgY2FzaDogbnVtYmVyID0gMDtcclxuICAgIGRhaWx5QXZnOiBudW1iZXIgPSAwO1xyXG4gICAgY2hhcnQ6IENoYXJ0O1xyXG4gICAgdGFibGVUeXBlOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIGNoYXJ0Q29uZmlnOiBhbnkgPSB7XHJcbiAgICAgICAgaWQ6ICdDaGFydC0xJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwicGllXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgICAgICBwbG90OiB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDUsXHJcbiAgICAgICAgICAgICAgICAvLyBzbGljZTogOTAsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZUJveDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudDogJ291dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJyV0XFxuJW5wdiUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiT3BlbiBTYW5zXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0b29sdGlwOntcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogJzE4JyxcclxuICAgICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIk9wZW4gU2Fuc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiNSAxMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiJW5wdiVcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjp7XHJcbiAgICAgICAgICAgICAgICAgICAgZWZmZWN0OiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogNSxcclxuICAgICAgICAgICAgICAgICAgICBzcGVlZDogNTAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlcXVlbmNlOiAxXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIHNvdXJjZToge1xyXG4gICAgICAgICAgICAvLyAgICAgdGV4dDogJ2dzLnN0YXRjb3VudGVyLmNvbScsXHJcbiAgICAgICAgICAgIC8vICAgICBmb250Q29sb3I6IFwiIzhlOTlhOVwiLFxyXG4gICAgICAgICAgICAvLyAgICAgZm9udEZhbWlseTogXCJPcGVuIFNhbnNcIlxyXG4gICAgICAgICAgICAvLyB9LFxyXG4gICAgICAgICAgICB0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgZm9udENvbG9yOiBcIiMwMDAwMDBcIixcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdTYWxlcyBieSBwcm9kdWN0JyxcclxuICAgICAgICAgICAgICAgIGFsaWduOiBcImxlZnRcIixcclxuICAgICAgICAgICAgICAgIG9mZnNldFg6IDEwLFxyXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJPcGVuIFNhbnNcIixcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAyNVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWJ0aXRsZToge1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0WDogMTAsXHJcbiAgICAgICAgICAgICAgICBvZmZzZXRZOiAxMCxcclxuICAgICAgICAgICAgICAgIGZvbnRDb2xvcjogXCIjOGU5OWE5XCIsXHJcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIk9wZW4gU2Fuc1wiLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTZcIixcclxuICAgICAgICAgICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgYWxpZ246IFwibGVmdFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBsb3RhcmVhOiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IFwiMjAgMCAwIDBcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXJpZXMgOiBbXHJcbiAgICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB3aWR0aDogNTAwLFxyXG4gICAgICAgIGhlaWdodDogNTAwXHJcbiAgICB9O1xyXG4gICAgY29uZmlnQ2hhcnQyOiBPYmplY3QgPSB7fTtcclxuXHJcbiAgICBxdWVyeTogYW55ID0ge1xyXG4gICAgICAgIG1hY2hpbmVJZDogdGhpcy5tYWNoaW5lSWQsXHJcbiAgICAgICAgZnJvbURhdGU6ICcnLFxyXG4gICAgICAgIHRpbGxEYXRlOiAnJ1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBfZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgICAgICAgICAgICAgIHByaXZhdGUgX2Vycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgIHByaXZhdGUgX2FuYWx5dGljc1NlcnZpY2U6IEFuYWx5dGljc1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICAgQEhvc3QoKSBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gTWFjaGluZUFuYWx5dGljc0NvbXBvbmVudCkpIF9wYXJlbnQ6IE1hY2hpbmVBbmFseXRpY3NDb21wb25lbnQpIHtcclxuXHJcbiAgICAgICAgdGhpcy5jaGFydCA9IG5ldyBDaGFydCh0aGlzLmNoYXJ0Q29uZmlnKTtcclxuICAgICAgICB0aGlzLnBhcmVudCA9IF9wYXJlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgLy8gVE9ETzogR2V0IHNhbGVzIGJ5IG1hY2hpbmUgZnJvbSBsYXN0IG1vbnRoXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RIRSBNQUNISU5FIElEOiAnLCB0aGlzLm1hY2hpbmVJZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RoZSBxdWVyeTogJywgdGhpcy5xdWVyeSk7XHJcbiAgICAgICAgdGhpcy5xdWVyeS5tYWNoaW5lSWQgPSB0aGlzLm1hY2hpbmVJZDtcclxuICAgICAgICB0aGlzLmdldFNhbGVzQnlNYWNoaW5lKHRoaXMucXVlcnkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNhbGVzQnlNYWNoaW5lKF9xdWVyeTogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RyeWluZyB0byBnZXQgc2FsZXMgYnkgbWFjaGluZScpO1xyXG5cclxuICAgICAgICB0aGlzLl9hbmFseXRpY3NTZXJ2aWNlLmdldFNhbGVzQnlNYWNoaW5lKF9xdWVyeSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsU2FsZXMgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FzaCA9IHRoaXMuY2FsY3VsYXRlQ2FzaChkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5zZXRDYXNoKHRoaXMuY2FzaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYWlseUF2ZyA9IHRoaXMuY2FsY3VsYXRlRGFpbHlBdmVyYWdlKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LnNldERhaWx5QXZnKHRoaXMuZGFpbHlBdmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuY2hhcnQgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZVNhbGVzQnlQcm9kdWN0KGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdDQVNIOiAnLCB0aGlzLmNhc2gpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEYWlseSBhdmVyYWdlOiAnLCB0aGlzLmRhaWx5QXZnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVGFibGUgZGF0YTogJywgdGhpcy5hbGxTYWxlcyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGN1bGF0ZUNhc2goc2FsZXM6IGFueSkge1xyXG4gICAgICAgIGxldCB0b3RhbCA9IDA7XHJcbiAgICAgICAgaWYgKHNhbGVzKSB7XHJcbiAgICAgICAgICAgIGxldCBpO1xyXG4gICAgICAgICAgICBmb3IgKGkgaW4gc2FsZXMpIHtcclxuICAgICAgICAgICAgICAgIHRvdGFsICs9IHNhbGVzW2ldLnNvbGRQcmljZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdG90YWw7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBjYWxjdWxhdGVTYWxlc0J5UHJvZHVjdChzYWxlczogYW55KSB7XHJcbiAgICAgICAgaWYgKCFzYWxlcyB8fCBzYWxlcy5sZW5ndGggPT0gMCkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBzZXJpZXM6IGFueSA9IFtdO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgc3RhdGlzdGljc1xyXG4gICAgICAgIGxldCBwcm9kdWN0RGljdDogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0ge307XHJcbiAgICAgICAgbGV0IGk7XHJcblxyXG4gICAgICAgIGZvciAoaSBpbiBzYWxlcykge1xyXG4gICAgICAgICAgICBsZXQga2V5ID0gc2FsZXNbaV0ucHJvZHVjdC5faWQ7XHJcbiAgICAgICAgICAgIGxldCBrZXlFeGlzdCA9IHByb2R1Y3REaWN0Lmhhc093blByb3BlcnR5KGtleSk7XHJcbiAgICAgICAgICAgIGlmIChrZXlFeGlzdCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBwcm9kdWN0RGljdFtrZXldO1xyXG4gICAgICAgICAgICAgICAgbGV0IHF1YW50aXR5ID0gaXRlbS5xdWFudGl0eTtcclxuICAgICAgICAgICAgICAgIGxldCB0b3RhbCA9IGl0ZW0udG90YWw7XHJcbiAgICAgICAgICAgICAgICB0b3RhbCArPSBzYWxlc1tpXS5zb2xkUHJpY2U7XHJcbiAgICAgICAgICAgICAgICBxdWFudGl0eSsrO1xyXG4gICAgICAgICAgICAgICAgbGV0IG9iajogYW55ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHF1YW50aXR5OiBxdWFudGl0eSxcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbDogdG90YWwsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdE5hbWU6IHNhbGVzW2ldLnByb2R1Y3QubmFtZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3REaWN0W2tleV0gPSBvYmo7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2JqOiBhbnkgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWw6IHNhbGVzW2ldLnNvbGRQcmljZSxcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0TmFtZTogc2FsZXNbaV0ucHJvZHVjdC5uYW1lXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdERpY3Rba2V5XSA9IG9iajtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTZXJpZXMgdGVtcGxhdGVcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIHZhbHVlcyA6IFsxMS4zOF0sXHJcbiAgICAgICAgLy8gICAgIHRleHQ6IFwiSW50ZXJuZXQgRXhwbG9yZXJcIixcclxuICAgICAgICAvLyAgICAgYmFja2dyb3VuZENvbG9yOiAnIzUwQURGNScsXHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICBsZXQgajtcclxuICAgICAgICBsZXQgY29sb3JDb3VudGVyOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGxldCBwcmVkZWZpbmVkQ29sb3JzOiBhbnkgPSBbJyM1NkFFRTInLCAnIzU2NjhFMicsICcjOEE1NkUyJywgJyNDRjU2RTInLFxyXG4gICAgICAgICAgICAnI0UyNTZBRScsICcjRTI1NjY4JywgJyNFMjg5NTYnLCAnI0UyQ0Y1NicsICcjQUVFMjU2JyxcclxuICAgICAgICAgICAgJyM2OEUyNTYnLCAnIzU2RTI4OScsICcjNTZFMkNGJ107XHJcbiAgICAgICAgZm9yIChqIGluIHByb2R1Y3REaWN0KSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gcHJvZHVjdERpY3Rbal07XHJcbiAgICAgICAgICAgIHNlcmllcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHZhbHVlczogW2l0ZW0udG90YWxdLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogaXRlbS5wcm9kdWN0TmFtZSArICcsICQnICsgaXRlbS50b3RhbCxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogcHJlZGVmaW5lZENvbG9yc1tjb2xvckNvdW50ZXJdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb2xvckNvdW50ZXIrKztcclxuICAgICAgICAgICAgaWYgKGNvbG9yQ291bnRlciA+PSBwcmVkZWZpbmVkQ29sb3JzLmxlbmd0aCkgY29sb3JDb3VudGVyID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTZXJpZXMnLCBzZXJpZXMpO1xyXG4gICAgICAgIHRoaXMuY2hhcnRDb25maWcuZGF0YS5zZXJpZXMgPSBzZXJpZXM7XHJcbiAgICAgICAgdGhpcy5jaGFydC5zZXREYXRhKHRoaXMuY2hhcnRDb25maWcuZGF0YSk7XHJcbiAgICAgICAgaWYgKHRoaXMuemluZ0NoYXJ0Q29tcG9uZW50KVxyXG4gICAgICAgICAgICB0aGlzLnppbmdDaGFydENvbXBvbmVudC5yZXJlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGN1bGF0ZURhaWx5QXZlcmFnZShzYWxlczogYW55KSB7XHJcbiAgICAgICAgbGV0IGF2Z0RpY3Q6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xyXG4gICAgICAgIGxldCBpO1xyXG4gICAgICAgIGZvciAoaSBpbiBzYWxlcykge1xyXG4gICAgICAgICAgICBsZXQgX2RhdGVTdHIgPSBzYWxlc1tpXS5kYXRlO1xyXG4gICAgICAgICAgICBsZXQgX2RhdGUgPSBuZXcgRGF0ZShfZGF0ZVN0cik7XHJcbiAgICAgICAgICAgIGxldCBkYXkgPSBfZGF0ZS5nZXREYXRlKCk7XHJcbiAgICAgICAgICAgIGxldCBtb250aCA9IF9kYXRlLmdldE1vbnRoKCk7XHJcbiAgICAgICAgICAgIGxldCB5ZWFyID0gX2RhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICAgICAgbGV0IGtleSA9IGRheS50b1N0cmluZygpICsgbW9udGgudG9TdHJpbmcoKSArIHllYXIudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgbGV0IGtleUV4aXN0ID0gYXZnRGljdC5oYXNPd25Qcm9wZXJ0eShrZXkpO1xyXG4gICAgICAgICAgICBpZiAoa2V5RXhpc3QpIHtcclxuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gYXZnRGljdFtrZXldO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRvdGFsID0gaXRlbS50b3RhbDtcclxuICAgICAgICAgICAgICAgIHRvdGFsICs9IHNhbGVzW2ldLnNvbGRQcmljZTtcclxuICAgICAgICAgICAgICAgIGxldCBvYmo6IGFueSA9IHtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbDogdG90YWwsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgYXZnRGljdFtrZXldID0gb2JqO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IG9iajogYW55ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsOiBzYWxlc1tpXS5zb2xkUHJpY2UsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgYXZnRGljdFtrZXldID0gb2JqO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIE9rYXksIG1ha2UgdGhlIGF2ZXJhZ2VcclxuICAgICAgICBsZXQgajtcclxuICAgICAgICBsZXQgdG90YWxBdmc6IG51bWJlciA9IDA7XHJcbiAgICAgICAgbGV0IGRpdmlkZXI6IG51bWJlciA9IDE7XHJcbiAgICAgICAgZm9yIChqIGluIGF2Z0RpY3QpIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSBhdmdEaWN0W2pdO1xyXG4gICAgICAgICAgICB0b3RhbEF2ZyArPSBpdGVtLnRvdGFsO1xyXG4gICAgICAgICAgICBkaXZpZGVyKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBhdmVyYWdlID0gdG90YWxBdmcgLyBkaXZpZGVyO1xyXG4gICAgICAgIHJldHVybiBhdmVyYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGF0ZVJlZnJlc2goX2Zyb206IGFueSwgX3RvOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRlJPTSBkYXRlOiAnLCBfZnJvbSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RPIGRhdGU6JywgX3RvKTtcclxuICAgICAgICB0aGlzLnF1ZXJ5LmZyb21EYXRlID0gX2Zyb207XHJcbiAgICAgICAgdGhpcy5xdWVyeS50aWxsRGF0ZSA9IF90bztcclxuICAgICAgICB0aGlzLmdldFNhbGVzQnlNYWNoaW5lKHRoaXMucXVlcnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaFRvU2FsZXNCeUhvdXIoKSB7XHJcbiAgICAgICAgdGhpcy50YWJsZVR5cGUgPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaFRvV2Vla2x5U2FsZXMoKSB7XHJcbiAgICAgICAgdGhpcy50YWJsZVR5cGUgPSAyO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaFRvRGF5T2ZUaGVXZWVrKCkge1xyXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlRGF0ZU9mVGhlV2Vla1NhbGVzKCk7XHJcbiAgICAgICAgdGhpcy50YWJsZVR5cGUgPSAzO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGN1bGF0ZURhdGVPZlRoZVdlZWtTYWxlcygpIHtcclxuICAgICAgICBsZXQgd2Vla0RpY3Q6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xyXG4gICAgICAgIGxldCBpO1xyXG4gICAgICAgIGxldCBzYWxlcyA9IHRoaXMuYWxsU2FsZXM7XHJcbiAgICAgICAgZm9yIChpIGluIHNhbGVzKSB7XHJcbiAgICAgICAgICAgIGxldCBfZGF0ZVN0ciA9IHNhbGVzW2ldLmRhdGU7XHJcbiAgICAgICAgICAgIGxldCBfZGF0ZSA9IG5ldyBEYXRlKF9kYXRlU3RyKTtcclxuICAgICAgICAgICAgbGV0IGRheSA9IF9kYXRlLmdldERhdGUoKTtcclxuICAgICAgICAgICAgbGV0IG1vbnRoID0gX2RhdGUuZ2V0TW9udGgoKTtcclxuICAgICAgICAgICAgbGV0IHllYXIgPSBfZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgICAgICBsZXQga2V5ID0gZGF5LnRvU3RyaW5nKCkgKyBtb250aC50b1N0cmluZygpICsgeWVhci50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBsZXQga2V5RXhpc3QgPSB3ZWVrRGljdC5oYXNPd25Qcm9wZXJ0eShrZXkpO1xyXG4gICAgICAgICAgICBpZiAoa2V5RXhpc3QpIHtcclxuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gd2Vla0RpY3Rba2V5XTtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2FzaCArPSBzYWxlc1tpXS5zb2xkUHJpY2U7XHJcbiAgICAgICAgICAgICAgICBpdGVtLml0ZW1zICs9IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG9iajogYW55ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6IGl0ZW0udGltZSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiBpdGVtLmRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF5T2ZUaGVXZWVrOiBpdGVtLmRheU9mVGhlV2VlayxcclxuICAgICAgICAgICAgICAgICAgICBjYXNoOiBpdGVtLmNhc2gsXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IGl0ZW0uaXRlbXNcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB3ZWVrRGljdFtrZXldID0gb2JqO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IG9iajogYW55ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6IHRoaXMuX2FuYWx5dGljc1NlcnZpY2UuZ2V0VGltZShzYWxlc1tpXS5kYXRlKSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRlOiB0aGlzLl9hbmFseXRpY3NTZXJ2aWNlLmdldERhdGUoc2FsZXNbaV0uZGF0ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgZGF5T2ZUaGVXZWVrOiB0aGlzLl9hbmFseXRpY3NTZXJ2aWNlLmdldERheU9mVGhlV2VlayhzYWxlc1tpXS5kYXRlKSxcclxuICAgICAgICAgICAgICAgICAgICBjYXNoOiBzYWxlc1tpXS5zb2xkUHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM6IDFcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB3ZWVrRGljdFtrZXldID0gb2JqO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIE9rYXksIGNvbnN0cnVjdCB0aGUgd2Vla1NhbGVzXHJcbiAgICAgICAgdGhpcy53ZWVrU2FsZXMgPSBbXTtcclxuICAgICAgICBsZXQgajtcclxuICAgICAgICBmb3IgKGogaW4gd2Vla0RpY3QpIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSB3ZWVrRGljdFtqXTtcclxuICAgICAgICAgICAgdGhpcy53ZWVrU2FsZXMucHVzaChpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1dlZWtseSBzYWxlczogJywgdGhpcy53ZWVrU2FsZXMpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
