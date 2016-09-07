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
var forms_1 = require('@angular/forms');
var error_service_1 = require("../../errors/error.service");
var machines_service_1 = require("../machines.service");
var router_1 = require("@angular/router");
var sales_by_machine_component_1 = require("./sales.by.machine.component");
var total_sales_by_machine_1 = require("./total.sales.by.machine/total.sales.by.machine");
var MachineAnalyticsComponent = (function () {
    function MachineAnalyticsComponent(_fb, _machineService, _errorService, _curr) {
        this._fb = _fb;
        this._machineService = _machineService;
        this._errorService = _errorService;
        this._curr = _curr;
        this.machineName = '';
        this.addressName = '';
        this.streetAddress = '';
        this.cash = '0.00';
        this.dailyAvg = '0.00';
        this.option = 1; // 1 - Sales by machine, 2 - Total sales by machine
        this.currentYear = 2000;
        this.startYear = 2015; // This is constant
        this.possibleYears = [];
    }
    MachineAnalyticsComponent.prototype.ngOnInit = function () {
        this.machineId = this._curr.getParam('id');
        this.machineName = this._curr.getParam('name');
        this.streetAddress = this._curr.getParam('streetAddress');
        console.log('Machine Id: ', this.machineId);
        console.log('Machine Name: ', this.machineName);
        this.dateForm = this._fb.group({
            fromDate: ['', forms_1.Validators.required],
            toDate: ['', forms_1.Validators.required],
            year: [this.startYear, forms_1.Validators.required]
        });
        this.currentYear = new Date().getFullYear();
        var i;
        for (i = this.startYear; i <= this.currentYear; i++) {
            this.possibleYears.push(i);
        }
    };
    MachineAnalyticsComponent.prototype.onDateRefresh = function () {
        switch (this.option) {
            case 1:
                var _from = this.dateForm.value.fromDate;
                var _to = this.dateForm.value.toDate;
                this.salesByMachineComponent.onDateRefresh(_from, _to);
                break;
            case 2:
                var selectedYear = this.dateForm.value.year; // ... to be continue, this is not working, can't take the selected year option value'
                console.log('selectedYear: ', selectedYear);
                this.totalSalesByMachineComponent.onDateRefresh(selectedYear);
                break;
        }
    };
    MachineAnalyticsComponent.prototype.setCash = function (value) {
        this.cash = value.toFixed(2);
    };
    MachineAnalyticsComponent.prototype.setDailyAvg = function (value) {
        this.dailyAvg = value.toFixed(2);
    };
    MachineAnalyticsComponent.prototype.onSalesByHour = function () {
        this.salesByMachineComponent.switchToSalesByHour();
    };
    MachineAnalyticsComponent.prototype.onWeeklySales = function () {
        this.salesByMachineComponent.switchToWeeklySales();
    };
    MachineAnalyticsComponent.prototype.onDayOfTheWeekSales = function () {
        this.salesByMachineComponent.switchToDayOfTheWeek();
    };
    MachineAnalyticsComponent.prototype.onTotalSales = function () {
        console.log('On total sales');
        this.option = 2;
    };
    MachineAnalyticsComponent.prototype.onSales = function () {
        console.log('On sales');
        this.option = 1;
    };
    __decorate([
        core_1.ViewChild(sales_by_machine_component_1.SalesByMachineComponent), 
        __metadata('design:type', sales_by_machine_component_1.SalesByMachineComponent)
    ], MachineAnalyticsComponent.prototype, "salesByMachineComponent", void 0);
    __decorate([
        core_1.ViewChild(total_sales_by_machine_1.TotalSalesByMachineComponent), 
        __metadata('design:type', total_sales_by_machine_1.TotalSalesByMachineComponent)
    ], MachineAnalyticsComponent.prototype, "totalSalesByMachineComponent", void 0);
    MachineAnalyticsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'analytics-machine',
            templateUrl: 'analytics.machine.component.html',
            directives: [sales_by_machine_component_1.SalesByMachineComponent,
                total_sales_by_machine_1.TotalSalesByMachineComponent,
                forms_1.FORM_DIRECTIVES,
                forms_1.REACTIVE_FORM_DIRECTIVES],
            providers: [forms_1.FormBuilder],
            styleUrls: ['analytics.machine.component.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, machines_service_1.MachinesService, error_service_1.ErrorService, router_1.RouteSegment])
    ], MachineAnalyticsComponent);
    return MachineAnalyticsComponent;
}());
exports.MachineAnalyticsComponent = MachineAnalyticsComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hY2hpbmVzL2FuYWx5dGljcy9hbmFseXRpY3MubWFjaGluZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE2QyxlQUFlLENBQUMsQ0FBQTtBQUM3RCxzQkFDMkQsZ0JBQWdCLENBQUMsQ0FBQTtBQUM1RSw4QkFBNkIsNEJBQTRCLENBQUMsQ0FBQTtBQUMxRCxpQ0FBZ0MscUJBQXFCLENBQUMsQ0FBQTtBQUN0RCx1QkFBNEIsaUJBQWlCLENBQUMsQ0FBQTtBQUM5QywyQ0FBd0MsOEJBQThCLENBQUMsQ0FBQTtBQUN2RSx1Q0FBNkMsaURBQWlELENBQUMsQ0FBQTtBQWUvRjtJQW1CSSxtQ0FBcUIsR0FBZ0IsRUFDaEIsZUFBZ0MsRUFDaEMsYUFBMkIsRUFDM0IsS0FBbUI7UUFIbkIsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUNoQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IsVUFBSyxHQUFMLEtBQUssQ0FBYztRQWR4QyxnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixrQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUUzQixTQUFJLEdBQVcsTUFBTSxDQUFDO1FBQ3RCLGFBQVEsR0FBVyxNQUFNLENBQUM7UUFDMUIsV0FBTSxHQUFXLENBQUMsQ0FBQyxDQUFDLG1EQUFtRDtRQUN2RSxnQkFBVyxHQUFXLElBQUksQ0FBQztRQUMzQixjQUFTLEdBQVcsSUFBSSxDQUFDLENBQUMsbUJBQW1CO1FBQzdDLGtCQUFhLEdBQWMsRUFBRSxDQUFDO0lBS2EsQ0FBQztJQUU1Qyw0Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7UUFFMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRWhELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDM0IsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ25DLE1BQU0sRUFBRSxDQUFFLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBRTtZQUNuQyxJQUFJLEVBQUUsQ0FBRSxJQUFJLENBQUMsU0FBUyxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFFO1NBQ2hELENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsQ0FBQztRQUNOLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDbEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0IsQ0FBQztJQUNMLENBQUM7SUFFRCxpREFBYSxHQUFiO1FBQ0ksTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDbEIsS0FBSyxDQUFDO2dCQUNOLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztnQkFDekMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO2dCQUNyQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDbkQsS0FBSyxDQUFDO1lBRVYsS0FBSyxDQUFDO2dCQUNOLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLHNGQUFzRjtnQkFDL0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxZQUFZLENBQUMsQ0FBQztnQkFDNUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDOUQsS0FBSyxDQUFDO1FBQ2QsQ0FBQztJQUVMLENBQUM7SUFFTSwyQ0FBTyxHQUFkLFVBQWUsS0FBYTtRQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVNLCtDQUFXLEdBQWxCLFVBQW1CLEtBQWE7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDRCxpREFBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLHVCQUF1QixDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDdkQsQ0FBQztJQUNELGlEQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsdUJBQXVCLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUN2RCxDQUFDO0lBQ0QsdURBQW1CLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLHVCQUF1QixDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDeEQsQ0FBQztJQUNELGdEQUFZLEdBQVo7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUNELDJDQUFPLEdBQVA7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFwRkQ7UUFBQyxnQkFBUyxDQUFDLG9EQUF1QixDQUFDOzs4RUFBQTtJQUduQztRQUFDLGdCQUFTLENBQUMscURBQTRCLENBQUM7O21GQUFBO0lBakI1QztRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixXQUFXLEVBQUUsa0NBQWtDO1lBQy9DLFVBQVUsRUFBRSxDQUFDLG9EQUF1QjtnQkFDeEIscURBQTRCO2dCQUM1Qix1QkFBZTtnQkFDZixnQ0FBd0IsQ0FBQztZQUNyQyxTQUFTLEVBQUUsQ0FBQyxtQkFBVyxDQUFDO1lBQ3hCLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO1NBQ2pELENBQUM7O2lDQUFBO0lBeUZGLGdDQUFDO0FBQUQsQ0F0RkEsQUFzRkMsSUFBQTtBQXRGWSxpQ0FBeUIsNEJBc0ZyQyxDQUFBIiwiZmlsZSI6Im1hY2hpbmVzL2FuYWx5dGljcy9hbmFseXRpY3MubWFjaGluZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZPUk1fRElSRUNUSVZFUywgUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTLFxyXG4gICAgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gXCIuLi8uLi9lcnJvcnMvZXJyb3Iuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBNYWNoaW5lc1NlcnZpY2UgfSBmcm9tIFwiLi4vbWFjaGluZXMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZVNlZ21lbnR9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU2FsZXNCeU1hY2hpbmVDb21wb25lbnQgfSBmcm9tIFwiLi9zYWxlcy5ieS5tYWNoaW5lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBUb3RhbFNhbGVzQnlNYWNoaW5lQ29tcG9uZW50IH0gZnJvbSBcIi4vdG90YWwuc2FsZXMuYnkubWFjaGluZS90b3RhbC5zYWxlcy5ieS5tYWNoaW5lXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ2FuYWx5dGljcy1tYWNoaW5lJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnYW5hbHl0aWNzLm1hY2hpbmUuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczogW1NhbGVzQnlNYWNoaW5lQ29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgVG90YWxTYWxlc0J5TWFjaGluZUNvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgIEZPUk1fRElSRUNUSVZFUyxcclxuICAgICAgICAgICAgICAgIFJFQUNUSVZFX0ZPUk1fRElSRUNUSVZFU10sXHJcbiAgICBwcm92aWRlcnM6IFtGb3JtQnVpbGRlcl0sXHJcbiAgICBzdHlsZVVybHM6IFsnYW5hbHl0aWNzLm1hY2hpbmUuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE1hY2hpbmVBbmFseXRpY3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQFZpZXdDaGlsZChTYWxlc0J5TWFjaGluZUNvbXBvbmVudClcclxuICAgIHByaXZhdGUgc2FsZXNCeU1hY2hpbmVDb21wb25lbnQ6IFNhbGVzQnlNYWNoaW5lQ29tcG9uZW50O1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoVG90YWxTYWxlc0J5TWFjaGluZUNvbXBvbmVudClcclxuICAgIHByaXZhdGUgdG90YWxTYWxlc0J5TWFjaGluZUNvbXBvbmVudDogVG90YWxTYWxlc0J5TWFjaGluZUNvbXBvbmVudDtcclxuXHJcbiAgICBtYWNoaW5lSWQ6IGFueTtcclxuICAgIG1hY2hpbmVOYW1lOiBzdHJpbmcgPSAnJztcclxuICAgIGFkZHJlc3NOYW1lOiBzdHJpbmcgPSAnJztcclxuICAgIHN0cmVldEFkZHJlc3M6IHN0cmluZyA9ICcnO1xyXG4gICAgZGF0ZUZvcm06IEZvcm1Hcm91cDtcclxuICAgIGNhc2g6IHN0cmluZyA9ICcwLjAwJztcclxuICAgIGRhaWx5QXZnOiBzdHJpbmcgPSAnMC4wMCc7XHJcbiAgICBvcHRpb246IG51bWJlciA9IDE7IC8vIDEgLSBTYWxlcyBieSBtYWNoaW5lLCAyIC0gVG90YWwgc2FsZXMgYnkgbWFjaGluZVxyXG4gICAgY3VycmVudFllYXI6IG51bWJlciA9IDIwMDA7XHJcbiAgICBzdGFydFllYXI6IG51bWJlciA9IDIwMTU7IC8vIFRoaXMgaXMgY29uc3RhbnRcclxuICAgIHBvc3NpYmxlWWVhcnM6IG51bWJlciBbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIF9mYjogRm9ybUJ1aWxkZXIsXHJcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSBfbWFjaGluZVNlcnZpY2U6IE1hY2hpbmVzU2VydmljZSxcclxuICAgICAgICAgICAgICAgICBwcml2YXRlIF9lcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSxcclxuICAgICAgICAgICAgICAgICBwcml2YXRlIF9jdXJyOiBSb3V0ZVNlZ21lbnQpIHt9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5tYWNoaW5lSWQgPSB0aGlzLl9jdXJyLmdldFBhcmFtKCdpZCcpO1xyXG4gICAgICAgIHRoaXMubWFjaGluZU5hbWUgPSB0aGlzLl9jdXJyLmdldFBhcmFtKCduYW1lJyk7XHJcbiAgICAgICAgdGhpcy5zdHJlZXRBZGRyZXNzID0gdGhpcy5fY3Vyci5nZXRQYXJhbSgnc3RyZWV0QWRkcmVzcycpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnTWFjaGluZSBJZDogJywgdGhpcy5tYWNoaW5lSWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdNYWNoaW5lIE5hbWU6ICcsIHRoaXMubWFjaGluZU5hbWUpO1xyXG5cclxuICAgICAgICB0aGlzLmRhdGVGb3JtID0gdGhpcy5fZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBmcm9tRGF0ZTogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgdG9EYXRlOiBbICcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkIF0sXHJcbiAgICAgICAgICAgIHllYXI6IFsgdGhpcy5zdGFydFllYXIsIFZhbGlkYXRvcnMucmVxdWlyZWQgXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIGxldCBpO1xyXG4gICAgICAgIGZvciAoaSA9IHRoaXMuc3RhcnRZZWFyOyBpIDw9IHRoaXMuY3VycmVudFllYXI7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnBvc3NpYmxlWWVhcnMucHVzaChpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25EYXRlUmVmcmVzaCgpIHtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMub3B0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgbGV0IF9mcm9tID0gdGhpcy5kYXRlRm9ybS52YWx1ZS5mcm9tRGF0ZTtcclxuICAgICAgICAgICAgbGV0IF90byA9IHRoaXMuZGF0ZUZvcm0udmFsdWUudG9EYXRlO1xyXG4gICAgICAgICAgICB0aGlzLnNhbGVzQnlNYWNoaW5lQ29tcG9uZW50Lm9uRGF0ZVJlZnJlc2goX2Zyb20sIF90byk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgbGV0IHNlbGVjdGVkWWVhciA9IHRoaXMuZGF0ZUZvcm0udmFsdWUueWVhcjsgLy8gLi4uIHRvIGJlIGNvbnRpbnVlLCB0aGlzIGlzIG5vdCB3b3JraW5nLCBjYW4ndCB0YWtlIHRoZSBzZWxlY3RlZCB5ZWFyIG9wdGlvbiB2YWx1ZSdcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZWxlY3RlZFllYXI6ICcsIHNlbGVjdGVkWWVhcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvdGFsU2FsZXNCeU1hY2hpbmVDb21wb25lbnQub25EYXRlUmVmcmVzaChzZWxlY3RlZFllYXIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0Q2FzaCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jYXNoID0gdmFsdWUudG9GaXhlZCgyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0RGFpbHlBdmcodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZGFpbHlBdmcgPSB2YWx1ZS50b0ZpeGVkKDIpO1xyXG4gICAgfVxyXG4gICAgb25TYWxlc0J5SG91cigpIHtcclxuICAgICAgICB0aGlzLnNhbGVzQnlNYWNoaW5lQ29tcG9uZW50LnN3aXRjaFRvU2FsZXNCeUhvdXIoKTtcclxuICAgIH1cclxuICAgIG9uV2Vla2x5U2FsZXMoKSB7XHJcbiAgICAgICAgdGhpcy5zYWxlc0J5TWFjaGluZUNvbXBvbmVudC5zd2l0Y2hUb1dlZWtseVNhbGVzKCk7XHJcbiAgICB9XHJcbiAgICBvbkRheU9mVGhlV2Vla1NhbGVzKCkge1xyXG4gICAgICAgIHRoaXMuc2FsZXNCeU1hY2hpbmVDb21wb25lbnQuc3dpdGNoVG9EYXlPZlRoZVdlZWsoKTtcclxuICAgIH1cclxuICAgIG9uVG90YWxTYWxlcygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnT24gdG90YWwgc2FsZXMnKTtcclxuICAgICAgICB0aGlzLm9wdGlvbiA9IDI7XHJcbiAgICB9XHJcbiAgICBvblNhbGVzKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdPbiBzYWxlcycpO1xyXG4gICAgICAgIHRoaXMub3B0aW9uID0gMTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
