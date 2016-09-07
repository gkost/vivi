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
var core_1 = require('@angular/core');
var analytics_service_1 = require("../analytics.service");
var TableDayOfTheWeekSalesComponent = (function () {
    function TableDayOfTheWeekSalesComponent(_analyticsService) {
        this._analyticsService = _analyticsService;
        this.weekSales = [];
    }
    TableDayOfTheWeekSalesComponent.prototype.ngOnInit = function () {
        console.log('Hello from sales by machine table component');
        console.log('Week sales', this.weekSales);
    };
    TableDayOfTheWeekSalesComponent.prototype.getDate = function (date) {
        return this._analyticsService.getDate(date);
    };
    TableDayOfTheWeekSalesComponent.prototype.getTime = function (date) {
        return this._analyticsService.getTime(date);
    };
    TableDayOfTheWeekSalesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'table-day-of-the-week',
            templateUrl: 'day.of.the.week.component.html',
            directives: [],
            styleUrls: [''],
            inputs: ['weekSales']
        }), 
        __metadata('design:paramtypes', [analytics_service_1.AnalyticsService])
    ], TableDayOfTheWeekSalesComponent);
    return TableDayOfTheWeekSalesComponent;
}());
exports.TableDayOfTheWeekSalesComponent = TableDayOfTheWeekSalesComponent;
// day.of.the.week.component 

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hY2hpbmVzL2FuYWx5dGljcy90YWJsZXMvZGF5Lm9mLnRoZS53ZWVrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EscUJBQXVDLGVBQWUsQ0FBQyxDQUFBO0FBQ3ZELGtDQUErQixzQkFBc0IsQ0FBQyxDQUFBO0FBYXREO0lBR0kseUNBQW9CLGlCQUFtQztRQUFuQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBRnZELGNBQVMsR0FBUSxFQUFFLENBQUM7SUFFc0MsQ0FBQztJQUVwRCxrREFBUSxHQUFmO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO1FBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsaURBQU8sR0FBUCxVQUFRLElBQVM7UUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsaURBQU8sR0FBUCxVQUFRLElBQVM7UUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBMUJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLFdBQVcsRUFBRSxnQ0FBZ0M7WUFDN0MsVUFBVSxFQUFFLEVBQUU7WUFDZCxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUM7WUFDZixNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUM7U0FDeEIsQ0FBQzs7dUNBQUE7SUFzQkYsc0NBQUM7QUFBRCxDQW5CQSxBQW1CQyxJQUFBO0FBbkJZLHVDQUErQixrQ0FtQjNDLENBQUE7QUFDRCw0QkFBNEIiLCJmaWxlIjoibWFjaGluZXMvYW5hbHl0aWNzL3RhYmxlcy9kYXkub2YudGhlLndlZWsuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtBbmFseXRpY3NTZXJ2aWNlfSBmcm9tIFwiLi4vYW5hbHl0aWNzLnNlcnZpY2VcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ3RhYmxlLWRheS1vZi10aGUtd2VlaycsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2RheS5vZi50aGUud2Vlay5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOiBbXSxcclxuICAgIHN0eWxlVXJsczogWycnXSxcclxuICAgIGlucHV0czogWyd3ZWVrU2FsZXMnXVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZURheU9mVGhlV2Vla1NhbGVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHdlZWtTYWxlczogYW55ID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYW5hbHl0aWNzU2VydmljZTogQW5hbHl0aWNzU2VydmljZSkge31cclxuXHJcbiAgICBwdWJsaWMgbmdPbkluaXQoKTp2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnSGVsbG8gZnJvbSBzYWxlcyBieSBtYWNoaW5lIHRhYmxlIGNvbXBvbmVudCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdXZWVrIHNhbGVzJywgdGhpcy53ZWVrU2FsZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERhdGUoZGF0ZTogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FuYWx5dGljc1NlcnZpY2UuZ2V0RGF0ZShkYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUaW1lKGRhdGU6IGFueSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hbmFseXRpY3NTZXJ2aWNlLmdldFRpbWUoZGF0ZSk7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4vLyBkYXkub2YudGhlLndlZWsuY29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
