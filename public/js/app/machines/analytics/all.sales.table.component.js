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
var analytics_service_1 = require("./analytics.service");
var TableAllSalesComponent = (function () {
    function TableAllSalesComponent(_analyticsService) {
        this._analyticsService = _analyticsService;
        this.allSales = [];
    }
    TableAllSalesComponent.prototype.ngOnInit = function () {
        console.log('Hello from sales by machine table component');
        console.log('All sales', this.allSales);
    };
    TableAllSalesComponent.prototype.getDate = function (date) {
        return this._analyticsService.getDate(date);
    };
    TableAllSalesComponent.prototype.getTime = function (date) {
        return this._analyticsService.getTime(date);
    };
    TableAllSalesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'table-all-sales',
            templateUrl: 'all.sales.table.component.html',
            directives: [],
            styleUrls: ['all.sales.table.component.css'],
            inputs: ['allSales']
        }), 
        __metadata('design:paramtypes', [analytics_service_1.AnalyticsService])
    ], TableAllSalesComponent);
    return TableAllSalesComponent;
}());
exports.TableAllSalesComponent = TableAllSalesComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hY2hpbmVzL2FuYWx5dGljcy9hbGwuc2FsZXMudGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBdUMsZUFBZSxDQUFDLENBQUE7QUFDdkQsa0NBQStCLHFCQUFxQixDQUFDLENBQUE7QUFhckQ7SUFHSSxnQ0FBb0IsaUJBQW1DO1FBQW5DLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFGdkQsYUFBUSxHQUFRLEVBQUUsQ0FBQztJQUV1QyxDQUFDO0lBRXBELHlDQUFRLEdBQWY7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7UUFDM0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCx3Q0FBTyxHQUFQLFVBQVEsSUFBUztRQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCx3Q0FBTyxHQUFQLFVBQVEsSUFBUztRQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUExQkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsV0FBVyxFQUFFLGdDQUFnQztZQUM3QyxVQUFVLEVBQUUsRUFBRTtZQUNkLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO1lBQzVDLE1BQU0sRUFBRSxDQUFDLFVBQVUsQ0FBQztTQUN2QixDQUFDOzs4QkFBQTtJQXNCRiw2QkFBQztBQUFELENBbkJBLEFBbUJDLElBQUE7QUFuQlksOEJBQXNCLHlCQW1CbEMsQ0FBQSIsImZpbGUiOiJtYWNoaW5lcy9hbmFseXRpY3MvYWxsLnNhbGVzLnRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtBbmFseXRpY3NTZXJ2aWNlfSBmcm9tIFwiLi9hbmFseXRpY3Muc2VydmljZVwiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAndGFibGUtYWxsLXNhbGVzJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnYWxsLnNhbGVzLnRhYmxlLmNvbXBvbmVudC5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtdLFxyXG4gICAgc3R5bGVVcmxzOiBbJ2FsbC5zYWxlcy50YWJsZS5jb21wb25lbnQuY3NzJ10sXHJcbiAgICBpbnB1dHM6IFsnYWxsU2FsZXMnXVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZUFsbFNhbGVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGFsbFNhbGVzOiBhbnkgPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hbmFseXRpY3NTZXJ2aWNlOiBBbmFseXRpY3NTZXJ2aWNlKSB7fVxyXG5cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpOnZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdIZWxsbyBmcm9tIHNhbGVzIGJ5IG1hY2hpbmUgdGFibGUgY29tcG9uZW50Jyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0FsbCBzYWxlcycsIHRoaXMuYWxsU2FsZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERhdGUoZGF0ZTogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FuYWx5dGljc1NlcnZpY2UuZ2V0RGF0ZShkYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUaW1lKGRhdGU6IGFueSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hbmFseXRpY3NTZXJ2aWNlLmdldFRpbWUoZGF0ZSk7XHJcbiAgICB9XHJcblxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
