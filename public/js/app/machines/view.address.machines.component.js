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
var router_1 = require("@angular/router");
var google_map_component_1 = require("./google.map.component/google.map.component");
var forms_1 = require('@angular/forms');
var error_service_1 = require("../errors/error.service");
var machines_service_1 = require("./machines.service");
var ViewAddressMachines = (function () {
    function ViewAddressMachines(_fb, _errorService, _machineService, _router) {
        this._fb = _fb;
        this._errorService = _errorService;
        this._machineService = _machineService;
        this._router = _router;
        this.editMode = false;
        this.name = '';
        this.streetAddress = '';
        this.addressId = '';
        this.machines = [];
        this.address = {
            name: 'Picadilly Park'
        };
        this.machineTypes = _machineService.machineTypes;
    }
    ViewAddressMachines.prototype.ngOnInit = function () {
        this.machineForm = this._fb.group({
            machineName: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(3),
                    forms_1.Validators.maxLength(30)])],
            machineType: [0, forms_1.Validators.required],
            serialNumber: ['', forms_1.Validators.nullValidator]
        });
    };
    ViewAddressMachines.prototype.onAddMachine = function () {
        console.log('On add Machine - pressed!');
        this.editMode = true;
    };
    ViewAddressMachines.prototype.onCancelEdit = function () {
        console.log('On cancel edit');
        this.editMode = false;
    };
    ViewAddressMachines.prototype.onSaveMachine = function () {
        var _this = this;
        console.log('On save machine');
        if (!this.machineForm.valid) {
            this._errorService.handleError({ title: 'Invalid data', error: { message: 'Please, provide a valid data for the machine' } });
            return;
        }
        console.log(this.addressId);
        // TODO: Expand this object
        var machine = {
            addressId: this.addressId,
            name: this.machineForm.value.machineName,
            serialNumber: this.machineForm.value.serialNumber,
            type: parseInt(this.machineForm.value.machineType),
            planogram: '',
            planogramQuantities: [],
            soldOuts: 0,
            status: 0 // 0 - means N/A
        };
        // this.machines.push(machine);
        console.log('Big machine: ', machine);
        console.log('Machines', this.machines);
        this._machineService.addMachine(machine).subscribe(function (data) {
            console.log(data);
            // this.machineForm.value.machineName = '';
            // this.machineForm.value.serialNumber = '';
            _this.machines.push(data);
            _this.editMode = false;
            // this._router.navigate(['/viewallmachines']);
        }, function (error) { return _this._errorService.handleError(error); });
        // TODO: add machine to this address and clear the form with name and serial number
        this.editMode = false;
    };
    ViewAddressMachines.prototype.onSupplyManual = function (machineId) {
        console.log('On supply manual', machineId);
        this._router.navigate(['/viewmachinemanualservice', machineId]);
    };
    ViewAddressMachines.prototype.onAnalytics = function (machine, streetAddress) {
        this._router.navigate(['/machineanalytics', machine._id, machine.name, streetAddress]);
    };
    ViewAddressMachines = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'vend-view-address-machines',
            templateUrl: 'view.address.machines.component.html',
            directives: [router_1.ROUTER_DIRECTIVES,
                google_map_component_1.GoogleMapComponent,
                forms_1.FORM_DIRECTIVES,
                forms_1.REACTIVE_FORM_DIRECTIVES],
            providers: [forms_1.FormBuilder],
            styles: ["\n\n    "],
            inputs: ['name', 'streetAddress', 'addressId', 'machines']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, error_service_1.ErrorService, machines_service_1.MachinesService, router_1.Router])
    ], ViewAddressMachines);
    return ViewAddressMachines;
}());
exports.ViewAddressMachines = ViewAddressMachines;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hY2hpbmVzL3ZpZXcuYWRkcmVzcy5tYWNoaW5lcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCx1QkFBaUQsaUJBQWlCLENBQUMsQ0FBQTtBQUNuRSxxQ0FBaUMsNkNBQTZDLENBQUMsQ0FBQTtBQUMvRSxzQkFDMkQsZ0JBQWdCLENBQUMsQ0FBQTtBQUM1RSw4QkFBMkIseUJBQXlCLENBQUMsQ0FBQTtBQUNyRCxpQ0FBOEIsb0JBQW9CLENBQUMsQ0FBQTtBQWtCbkQ7SUFVSSw2QkFBb0IsR0FBZ0IsRUFDaEIsYUFBMkIsRUFDM0IsZUFBZ0MsRUFDaEMsT0FBZTtRQUhmLFFBQUcsR0FBSCxHQUFHLENBQWE7UUFDaEIsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0Isb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFabkMsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQXVCbkIsWUFBTyxHQUFHO1lBQ04sSUFBSSxFQUFFLGdCQUFnQjtTQUN6QixDQUFDO1FBakJFLElBQUksQ0FBQyxZQUFZLEdBQUcsZUFBZSxDQUFDLFlBQVksQ0FBQztJQUNyRCxDQUFDO0lBRUQsc0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDOUIsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsT0FBTyxDQUFDO29CQUNqQyxrQkFBVSxDQUFDLFFBQVE7b0JBQ25CLGtCQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDdkIsa0JBQVUsQ0FBQyxTQUFTLENBQUMsRUFB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T0FBTyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDM0YsQ0FBQztJQTFHTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLDRCQUE0QjtZQUN0QyxXQUFXLEVBQUUsc0NBQXNDO1lBQ25ELFVBQVUsRUFBRSxDQUFDLDBCQUFpQjtnQkFDbEIseUNBQWtCO2dCQUNsQix1QkFBZTtnQkFDZixnQ0FBd0IsQ0FBQztZQUNyQyxTQUFTLEVBQUUsQ0FBQyxtQkFBVyxDQUFDO1lBQ3hCLE1BQU0sRUFBRSxDQUFDLFVBRVIsQ0FBQztZQUNGLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQztTQUM3RCxDQUFDOzsyQkFBQTtJQStGRiwwQkFBQztBQUFELENBNUZBLEFBNEZDLElBQUE7QUE1RlksMkJBQW1CLHNCQTRGL0IsQ0FBQSIsImZpbGUiOiJtYWNoaW5lcy92aWV3LmFkZHJlc3MubWFjaGluZXMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyLCBST1VURVJfRElSRUNUSVZFUywgUm91dGVzfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7R29vZ2xlTWFwQ29tcG9uZW50fSBmcm9tIFwiLi9nb29nbGUubWFwLmNvbXBvbmVudC9nb29nbGUubWFwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGT1JNX0RJUkVDVElWRVMsIFJFQUNUSVZFX0ZPUk1fRElSRUNUSVZFUyxcclxuICAgIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge0Vycm9yU2VydmljZX0gZnJvbSBcIi4uL2Vycm9ycy9lcnJvci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7TWFjaGluZXNTZXJ2aWNlfSBmcm9tIFwiLi9tYWNoaW5lcy5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ3ZlbmQtdmlldy1hZGRyZXNzLW1hY2hpbmVzJyxcclxuICAgIHRlbXBsYXRlVXJsOiAndmlldy5hZGRyZXNzLm1hY2hpbmVzLmNvbXBvbmVudC5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUyxcclxuICAgICAgICAgICAgICAgIEdvb2dsZU1hcENvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgIEZPUk1fRElSRUNUSVZFUyxcclxuICAgICAgICAgICAgICAgIFJFQUNUSVZFX0ZPUk1fRElSRUNUSVZFU10sXHJcbiAgICBwcm92aWRlcnM6IFtGb3JtQnVpbGRlcl0sXHJcbiAgICBzdHlsZXM6IFtgXHJcblxyXG4gICAgYF0sXHJcbiAgICBpbnB1dHM6IFsnbmFtZScsICdzdHJlZXRBZGRyZXNzJywgJ2FkZHJlc3NJZCcsICdtYWNoaW5lcyddXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFZpZXdBZGRyZXNzTWFjaGluZXMgaW1wbGVtZW50cyBPbkluaXR7XHJcbiAgICBlZGl0TW9kZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgbWFjaGluZUZvcm06IEZvcm1Hcm91cDtcclxuICAgIG5hbWU6IHN0cmluZyA9ICcnO1xyXG4gICAgc3RyZWV0QWRkcmVzczogc3RyaW5nID0gJyc7XHJcbiAgICBhZGRyZXNzSWQ6IHN0cmluZyA9ICcnO1xyXG4gICAgbWFjaGluZXM6IGFueSA9IFtdO1xyXG5cclxuICAgIG1hY2hpbmVUeXBlczogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZiOiBGb3JtQnVpbGRlcixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2Vycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfbWFjaGluZVNlcnZpY2U6IE1hY2hpbmVzU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgdGhpcy5tYWNoaW5lVHlwZXMgPSBfbWFjaGluZVNlcnZpY2UubWFjaGluZVR5cGVzO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMubWFjaGluZUZvcm0gPSB0aGlzLl9mYi5ncm91cCh7XHJcbiAgICAgICAgICAgIG1hY2hpbmVOYW1lOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5taW5MZW5ndGgoMyksXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLm1heExlbmd0aCgzMCldKV0sXHJcbiAgICAgICAgICAgIG1hY2hpbmVUeXBlOiBbIDAsIFZhbGlkYXRvcnMucmVxdWlyZWQgXSxcclxuICAgICAgICAgICAgc2VyaWFsTnVtYmVyOiBbJycsIFZhbGlkYXRvcnMubnVsbFZhbGlkYXRvcl1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYWRkcmVzcyA9IHtcclxuICAgICAgICBuYW1lOiAnUGljYWRpbGx5IFBhcmsnXHJcbiAgICB9O1xyXG5cclxuICAgIG9uQWRkTWFjaGluZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnT24gYWRkIE1hY2hpbmUgLSBwcmVzc2VkIScpO1xyXG4gICAgICAgIHRoaXMuZWRpdE1vZGUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2FuY2VsRWRpdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnT24gY2FuY2VsIGVkaXQnKTtcclxuICAgICAgICB0aGlzLmVkaXRNb2RlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgb25TYXZlTWFjaGluZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnT24gc2F2ZSBtYWNoaW5lJyk7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1hY2hpbmVGb3JtLnZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcih7dGl0bGU6ICdJbnZhbGlkIGRhdGEnLCBlcnJvcjogeyBtZXNzYWdlOiAnUGxlYXNlLCBwcm92aWRlIGEgdmFsaWQgZGF0YSBmb3IgdGhlIG1hY2hpbmUnIH19KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFkZHJlc3NJZCk7XHJcblxyXG4gICAgICAgIC8vIFRPRE86IEV4cGFuZCB0aGlzIG9iamVjdFxyXG4gICAgICAgIGxldCBtYWNoaW5lID0ge1xyXG4gICAgICAgICAgICBhZGRyZXNzSWQ6IHRoaXMuYWRkcmVzc0lkLFxyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm1hY2hpbmVGb3JtLnZhbHVlLm1hY2hpbmVOYW1lLFxyXG4gICAgICAgICAgICBzZXJpYWxOdW1iZXI6IHRoaXMubWFjaGluZUZvcm0udmFsdWUuc2VyaWFsTnVtYmVyLFxyXG4gICAgICAgICAgICB0eXBlOiBwYXJzZUludCh0aGlzLm1hY2hpbmVGb3JtLnZhbHVlLm1hY2hpbmVUeXBlKSxcclxuICAgICAgICAgICAgcGxhbm9ncmFtOiAnJyxcclxuICAgICAgICAgICAgcGxhbm9ncmFtUXVhbnRpdGllczogW10sXHJcbiAgICAgICAgICAgIHNvbGRPdXRzOiAwLFxyXG4gICAgICAgICAgICBzdGF0dXM6IDAgLy8gMCAtIG1lYW5zIE4vQVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gdGhpcy5tYWNoaW5lcy5wdXNoKG1hY2hpbmUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdCaWcgbWFjaGluZTogJywgbWFjaGluZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ01hY2hpbmVzJywgdGhpcy5tYWNoaW5lcyk7XHJcbiAgICAgICAgdGhpcy5fbWFjaGluZVNlcnZpY2UuYWRkTWFjaGluZShtYWNoaW5lKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5tYWNoaW5lRm9ybS52YWx1ZS5tYWNoaW5lTmFtZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5tYWNoaW5lRm9ybS52YWx1ZS5zZXJpYWxOdW1iZXIgPSAnJztcclxuICAgICAgICAgICAgICAgIHRoaXMubWFjaGluZXMucHVzaChkYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWRpdE1vZGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy92aWV3YWxsbWFjaGluZXMnXSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBUT0RPOiBhZGQgbWFjaGluZSB0byB0aGlzIGFkZHJlc3MgYW5kIGNsZWFyIHRoZSBmb3JtIHdpdGggbmFtZSBhbmQgc2VyaWFsIG51bWJlclxyXG5cclxuICAgICAgICB0aGlzLmVkaXRNb2RlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdXBwbHlNYW51YWwobWFjaGluZUlkOiBhbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKCdPbiBzdXBwbHkgbWFudWFsJywgbWFjaGluZUlkKTtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvdmlld21hY2hpbmVtYW51YWxzZXJ2aWNlJywgbWFjaGluZUlkXSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25BbmFseXRpY3MobWFjaGluZTogYW55LCBzdHJlZXRBZGRyZXNzOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvbWFjaGluZWFuYWx5dGljcycsIG1hY2hpbmUuX2lkLCBtYWNoaW5lLm5hbWUsIHN0cmVldEFkZHJlc3NdKTtcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
