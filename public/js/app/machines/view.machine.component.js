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
var machines_service_1 = require("./machines.service");
var error_service_1 = require("../errors/error.service");
var forms_1 = require('@angular/forms');
var tray_component_1 = require("./tray.component");
var slot_component_1 = require("./slot.component");
var planograms_service_1 = require("../planograms/planograms.service");
var planogram_quantity_1 = require("./planogram.quantity");
var ViewMachineComponent = (function () {
    function ViewMachineComponent(_fb, _machineService, _errorService, _router, _curr, _planogramsService) {
        this._fb = _fb;
        this._machineService = _machineService;
        this._errorService = _errorService;
        this._router = _router;
        this._curr = _curr;
        this._planogramsService = _planogramsService;
        this.editMode = false;
        this.planogramChaned = false;
        this.machineTypes = _machineService.machineTypes;
    }
    ViewMachineComponent.prototype.ngOnInit = function () {
        this.machineId = this._curr.getParam('id');
        console.log('Hi everybody Id: ', this.machineId);
        this.machine = {
            _id: this.machineId,
            name: '',
            serialNumber: '',
            deleted: false,
            type: 0,
            soldOuts: 0,
            status: 0,
            planogram: {},
            planogramQuantities: []
        };
        this.machineForm = this._fb.group({
            name: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(3),
                    forms_1.Validators.maxLength(30)])],
            serialNumber: ['', forms_1.Validators.nullValidator],
            model: ['', forms_1.Validators.nullValidator],
            type: [0, forms_1.Validators.nullValidator]
        });
        this.machineOptionsForm = this._fb.group({
            offlineMachine: ['', forms_1.Validators.nullValidator],
            disconnectedMachine: ['', forms_1.Validators.nullValidator],
            newPlanogram: ['', forms_1.Validators.nullValidator]
        });
        if (this.machineId) {
            this.getPlanograms();
        }
    };
    ViewMachineComponent.prototype.getMachine = function (machineId) {
        var _this = this;
        console.log('Trying to get a machine');
        this._machineService.getMachine(machineId)
            .subscribe(function (data) {
            // console.log(data);
            _this.machine = data;
            console.log('Machine: ', _this.machine);
            if (_this.machine) {
                _this.currentPlanogramId = _this.machine.planogram;
                _this.machineForm.controls['name'].updateValue(_this.machine.name);
                _this.machineForm.controls['serialNumber'].updateValue(_this.machine.serialNumber);
                _this.machineForm.controls['model'].updateValue(_this.machine.model);
                _this.machineOptionsForm.controls['offlineMachine'].updateValue(_this.machine.offlineMachine);
                _this.machineOptionsForm.controls['disconnectedMachine'].updateValue(_this.machine.disconnectedMachine);
                // (<Control>this.machineForm.controls['type']).updateValue(this.machine.type);
                _this.loadCurrentPlanogram();
            }
        }, function (error) { return _this._errorService.handleError(error); });
    };
    ViewMachineComponent.prototype.getPlanograms = function () {
        var _this = this;
        this._planogramsService.getAllPlanogramsAndProducts()
            .subscribe(function (data) {
            console.log(data);
            _this.planograms = data.obj;
            _this._planogramsService.planograms = _this.planograms; // TODO: this can be removed if not use further
            console.log('Planograms: ', _this.planograms);
            _this.getMachine(_this.machineId);
        }, function (error) { return _this._errorService.handleError(error); });
    };
    ViewMachineComponent.prototype.loadCurrentPlanogram = function () {
        console.log('Planogram ID: ', this.currentPlanogramId);
        var planogramId = this.currentPlanogramId;
        console.log('Planograms::', this.planograms);
        for (var plgr in this.planograms) {
            if (planogramId == this.planograms[plgr]._id) {
                this.currentPlanogram = this.planograms[plgr];
                console.log('Current planogram loaded: ', this.currentPlanogram);
                break;
            }
        }
    };
    ViewMachineComponent.prototype.onSave = function () {
        var _this = this;
        this.editMode = false;
        this.machine.disconnectedMachine = this.machineOptionsForm.value.disconnectedMachine;
        this.machine.offlineMachine = this.machineOptionsForm.value.offlineMachine;
        this.machine.model = this.machineForm.value.model;
        this.machine.serialNumber = this.machineForm.value.serialNumber;
        this.machine.name = this.machineForm.value.name;
        this.machine.type = this.machineForm.value.type;
        // console.log('test type: ', this.machineForm.value.type);
        this._machineService.updateMachine(this.machine)
            .subscribe(function (data) {
            console.log('Response from Save machine: ', data);
            // Okay, now update planogram if needed
            if (_this.planogramChaned) {
                console.log('Updating current PLANOGRAM:::', _this.currentPlanogram);
                _this._planogramsService.editPlanogramQuantities(_this.currentPlanogram).subscribe(function (data2) {
                    console.log('Response from Edit planogram quantities: ', data2);
                }, function (error2) { return _this._errorService.handleError(error2); });
            }
        }, function (error) { return _this._errorService.handleError(error); });
    };
    ViewMachineComponent.prototype.resetPlanogramQuantities = function () {
        // TODO: this function will make all product quantities zero of the selected planogram
        console.log('RESET CURRENT PLANOGRAM');
        var i, j, k;
        for (i = 0; i < this.currentPlanogram.trays.length; i++) {
            for (j = 0; j < this.currentPlanogram.trays[i].slots.length; j++) {
                var quantity = this.currentPlanogram.trays[i].slots[j].quantity;
                if (this.currentPlanogram.trays[i].slots[j].quantity) {
                    var machineIdFound = false;
                    for (k = 0; k < this.currentPlanogram.trays[i].slots[j].quantity.length; k++) {
                        if (this.currentPlanogram.trays[i].slots[j].quantity[k].machineId = this.machineId) {
                            // reset quantity
                            this.currentPlanogram.trays[i].slots[j].quantity[k].quantity = 0;
                            machineIdFound = true;
                            break;
                        }
                    }
                    if (!machineIdFound) {
                        this.currentPlanogram.trays[i].slots[j].quantity.push(new planogram_quantity_1.PlanogramQuantity(this.machineId, 0));
                    }
                }
                else {
                    this.currentPlanogram.trays[i].slots[j].quantity = [];
                    this.currentPlanogram.trays[i].slots[j].quantity.push(new planogram_quantity_1.PlanogramQuantity(this.machineId, 0));
                }
            }
        }
        console.log('AND this is the new Reset planogram', this.currentPlanogram);
    };
    ViewMachineComponent.prototype.onChange = function (selectValue) {
        console.log(selectValue);
        this.planogramChaned = true;
        for (var i in this.planograms) {
            if (this.planograms[i]._id == selectValue) {
                this.currentPlanogram = this.planograms[i];
                this.machine.planogram = this.currentPlanogram._id;
                this.resetPlanogramQuantities();
                break;
            }
        }
    };
    ViewMachineComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'vend-view-machine',
            templateUrl: 'view.machine.component.html',
            directives: [router_1.ROUTER_DIRECTIVES,
                tray_component_1.TrayComponent,
                slot_component_1.SlotComponent,
                forms_1.FORM_DIRECTIVES,
                forms_1.REACTIVE_FORM_DIRECTIVES],
            styles: ["\n\n    "],
            providers: [forms_1.FormBuilder]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, machines_service_1.MachinesService, error_service_1.ErrorService, router_1.Router, router_1.RouteSegment, planograms_service_1.PlanogramsService])
    ], ViewMachineComponent);
    return ViewMachineComponent;
}());
exports.ViewMachineComponent = ViewMachineComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hY2hpbmVzL3ZpZXcubWFjaGluZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCx1QkFBdUQsaUJBQWlCLENBQUMsQ0FBQTtBQUN6RSxpQ0FBOEIsb0JBQW9CLENBQUMsQ0FBQTtBQUNuRCw4QkFBMkIseUJBQXlCLENBQUMsQ0FBQTtBQUNyRCxzQkFDMkQsZ0JBQWdCLENBQUMsQ0FBQTtBQUM1RSwrQkFBNEIsa0JBQWtCLENBQUMsQ0FBQTtBQUMvQywrQkFBNEIsa0JBQWtCLENBQUMsQ0FBQTtBQUMvQyxtQ0FBZ0Msa0NBQWtDLENBQUMsQ0FBQTtBQUNuRSxtQ0FBZ0Msc0JBQXNCLENBQUMsQ0FBQTtBQWlCdkQ7SUFjSSw4QkFBb0IsR0FBZ0IsRUFDaEIsZUFBZ0MsRUFDaEMsYUFBMkIsRUFDM0IsT0FBZSxFQUNmLEtBQW1CLEVBQ25CLGtCQUFxQztRQUxyQyxRQUFHLEdBQUgsR0FBRyxDQUFhO1FBQ2hCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUMzQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUNuQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBYnpELGFBQVEsR0FBWSxLQUFLLENBQUM7UUFNMUIsb0JBQWUsR0FBWSxLQUFLLENBQUM7UUFTN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxlQUFlLENBQUMsWUFBWSxDQUFDO0lBQ3JELENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBRUksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVqRCxJQUFJLENBQUMsT0FBTyxHQUFHO1lBQ1gs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VixDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUExTUw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxVQUFVLEVBQUUsQ0FBQywwQkFBaUI7Z0JBQzFCLDhCQUFhO2dCQUNiLDhCQUFhO2dCQUNiLHVCQUFlO2dCQUNmLGdDQUF3QixDQUFDO1lBQzdCLE1BQU0sRUFBRSxDQUFDLFVBRVIsQ0FBQztZQUNGLFNBQVMsRUFBRSxDQUFDLG1CQUFXLENBQUM7U0FDM0IsQ0FBQzs7NEJBQUE7SUE4TEYsMkJBQUM7QUFBRCxDQTVMQSxBQTRMQyxJQUFBO0FBNUxZLDRCQUFvQix1QkE0TGhDLENBQUEiLCJmaWxlIjoibWFjaGluZXMvdmlldy5tYWNoaW5lLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgUk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlU2VnbWVudH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge01hY2hpbmVzU2VydmljZX0gZnJvbSBcIi4vbWFjaGluZXMuc2VydmljZVwiO1xyXG5pbXBvcnQge0Vycm9yU2VydmljZX0gZnJvbSBcIi4uL2Vycm9ycy9lcnJvci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEZPUk1fRElSRUNUSVZFUywgUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTLFxyXG4gICAgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7VHJheUNvbXBvbmVudH0gZnJvbSBcIi4vdHJheS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtTbG90Q29tcG9uZW50fSBmcm9tIFwiLi9zbG90LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1BsYW5vZ3JhbXNTZXJ2aWNlfSBmcm9tIFwiLi4vcGxhbm9ncmFtcy9wbGFub2dyYW1zLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtQbGFub2dyYW1RdWFudGl0eX0gZnJvbSBcIi4vcGxhbm9ncmFtLnF1YW50aXR5XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ3ZlbmQtdmlldy1tYWNoaW5lJyxcclxuICAgIHRlbXBsYXRlVXJsOiAndmlldy5tYWNoaW5lLmNvbXBvbmVudC5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUyxcclxuICAgICAgICBUcmF5Q29tcG9uZW50LFxyXG4gICAgICAgIFNsb3RDb21wb25lbnQsXHJcbiAgICAgICAgRk9STV9ESVJFQ1RJVkVTLFxyXG4gICAgICAgIFJFQUNUSVZFX0ZPUk1fRElSRUNUSVZFU10sXHJcbiAgICBzdHlsZXM6IFtgXHJcblxyXG4gICAgYF0sXHJcbiAgICBwcm92aWRlcnM6IFtGb3JtQnVpbGRlcl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBWaWV3TWFjaGluZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBwbGFub2dyYW1zOiBbYW55XTtcclxuICAgIGN1cnJlbnRQbGFub2dyYW06IGFueTtcclxuICAgIGN1cnJlbnRQbGFub2dyYW1JZDogYW55O1xyXG4gICAgbWFjaGluZTogYW55O1xyXG4gICAgbWFjaGluZUlkOiBhbnk7XHJcbiAgICBlZGl0TW9kZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIG1hY2hpbmVGb3JtOiBGb3JtR3JvdXA7XHJcbiAgICBtYWNoaW5lT3B0aW9uc0Zvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgICBtYWNoaW5lVHlwZXM6IGFueTtcclxuICAgIHBsYW5vZ3JhbUNoYW5lZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZiOiBGb3JtQnVpbGRlcixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX21hY2hpbmVTZXJ2aWNlOiBNYWNoaW5lc1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9lcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfY3VycjogUm91dGVTZWdtZW50LFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfcGxhbm9ncmFtc1NlcnZpY2U6IFBsYW5vZ3JhbXNTZXJ2aWNlKSB7XHJcblxyXG4gICAgICAgIHRoaXMubWFjaGluZVR5cGVzID0gX21hY2hpbmVTZXJ2aWNlLm1hY2hpbmVUeXBlcztcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5tYWNoaW5lSWQgPSB0aGlzLl9jdXJyLmdldFBhcmFtKCdpZCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdIaSBldmVyeWJvZHkgSWQ6ICcsIHRoaXMubWFjaGluZUlkKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYWNoaW5lID0ge1xyXG4gICAgICAgICAgICBfaWQ6IHRoaXMubWFjaGluZUlkLFxyXG4gICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgc2VyaWFsTnVtYmVyOiAnJyxcclxuICAgICAgICAgICAgZGVsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHR5cGU6IDAsXHJcbiAgICAgICAgICAgIHNvbGRPdXRzOiAwLFxyXG4gICAgICAgICAgICBzdGF0dXM6IDAsXHJcbiAgICAgICAgICAgIHBsYW5vZ3JhbToge30sXHJcbiAgICAgICAgICAgIHBsYW5vZ3JhbVF1YW50aXRpZXM6IFtdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5tYWNoaW5lRm9ybSA9IHRoaXMuX2ZiLmdyb3VwKHtcclxuICAgICAgICAgICAgbmFtZTogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMubWluTGVuZ3RoKDMpLFxyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMzApXSldLFxyXG4gICAgICAgICAgICBzZXJpYWxOdW1iZXI6IFsnJywgVmFsaWRhdG9ycy5udWxsVmFsaWRhdG9yXSxcclxuICAgICAgICAgICAgbW9kZWw6IFsnJywgVmFsaWRhdG9ycy5udWxsVmFsaWRhdG9yXSxcclxuICAgICAgICAgICAgdHlwZTogWzAsIFZhbGlkYXRvcnMubnVsbFZhbGlkYXRvcl1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5tYWNoaW5lT3B0aW9uc0Zvcm0gPSB0aGlzLl9mYi5ncm91cCh7XHJcbiAgICAgICAgICAgIG9mZmxpbmVNYWNoaW5lOiBbJycsIFZhbGlkYXRvcnMubnVsbFZhbGlkYXRvcl0sXHJcbiAgICAgICAgICAgIGRpc2Nvbm5lY3RlZE1hY2hpbmU6IFsnJywgVmFsaWRhdG9ycy5udWxsVmFsaWRhdG9yXSxcclxuICAgICAgICAgICAgbmV3UGxhbm9ncmFtOiBbJycsIFZhbGlkYXRvcnMubnVsbFZhbGlkYXRvcl1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy5tYWNoaW5lSWQpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRQbGFub2dyYW1zKCk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuZ2V0TWFjaGluZSh0aGlzLm1hY2hpbmVJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldE1hY2hpbmUobWFjaGluZUlkOiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVHJ5aW5nIHRvIGdldCBhIG1hY2hpbmUnKTtcclxuICAgICAgICB0aGlzLl9tYWNoaW5lU2VydmljZS5nZXRNYWNoaW5lKG1hY2hpbmVJZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFjaGluZSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ01hY2hpbmU6ICcsIHRoaXMubWFjaGluZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubWFjaGluZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGFub2dyYW1JZCA9IHRoaXMubWFjaGluZS5wbGFub2dyYW07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoPEZvcm1Db250cm9sPnRoaXMubWFjaGluZUZvcm0uY29udHJvbHNbJ25hbWUnXSkudXBkYXRlVmFsdWUodGhpcy5tYWNoaW5lLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoPEZvcm1Db250cm9sPnRoaXMubWFjaGluZUZvcm0uY29udHJvbHNbJ3NlcmlhbE51bWJlciddKS51cGRhdGVWYWx1ZSh0aGlzLm1hY2hpbmUuc2VyaWFsTnVtYmVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKDxGb3JtQ29udHJvbD50aGlzLm1hY2hpbmVGb3JtLmNvbnRyb2xzWydtb2RlbCddKS51cGRhdGVWYWx1ZSh0aGlzLm1hY2hpbmUubW9kZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoPEZvcm1Db250cm9sPnRoaXMubWFjaGluZU9wdGlvbnNGb3JtLmNvbnRyb2xzWydvZmZsaW5lTWFjaGluZSddKS51cGRhdGVWYWx1ZSh0aGlzLm1hY2hpbmUub2ZmbGluZU1hY2hpbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoPEZvcm1Db250cm9sPnRoaXMubWFjaGluZU9wdGlvbnNGb3JtLmNvbnRyb2xzWydkaXNjb25uZWN0ZWRNYWNoaW5lJ10pLnVwZGF0ZVZhbHVlKHRoaXMubWFjaGluZS5kaXNjb25uZWN0ZWRNYWNoaW5lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gKDxDb250cm9sPnRoaXMubWFjaGluZUZvcm0uY29udHJvbHNbJ3R5cGUnXSkudXBkYXRlVmFsdWUodGhpcy5tYWNoaW5lLnR5cGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQ3VycmVudFBsYW5vZ3JhbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGxhbm9ncmFtcygpIHtcclxuICAgICAgICB0aGlzLl9wbGFub2dyYW1zU2VydmljZS5nZXRBbGxQbGFub2dyYW1zQW5kUHJvZHVjdHMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGFub2dyYW1zID0gZGF0YS5vYmo7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGxhbm9ncmFtc1NlcnZpY2UucGxhbm9ncmFtcyA9IHRoaXMucGxhbm9ncmFtczsgLy8gVE9ETzogdGhpcyBjYW4gYmUgcmVtb3ZlZCBpZiBub3QgdXNlIGZ1cnRoZXJcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUGxhbm9ncmFtczogJywgdGhpcy5wbGFub2dyYW1zKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldE1hY2hpbmUodGhpcy5tYWNoaW5lSWQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbG9hZEN1cnJlbnRQbGFub2dyYW0oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1BsYW5vZ3JhbSBJRDogJywgdGhpcy5jdXJyZW50UGxhbm9ncmFtSWQpO1xyXG4gICAgICAgIGxldCBwbGFub2dyYW1JZCA9IHRoaXMuY3VycmVudFBsYW5vZ3JhbUlkO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdQbGFub2dyYW1zOjonLCB0aGlzLnBsYW5vZ3JhbXMpO1xyXG4gICAgICAgIGZvciAobGV0IHBsZ3IgaW4gdGhpcy5wbGFub2dyYW1zKSB7XHJcbiAgICAgICAgICAgIGlmIChwbGFub2dyYW1JZCA9PSB0aGlzLnBsYW5vZ3JhbXNbcGxncl0uX2lkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGFub2dyYW0gPSB0aGlzLnBsYW5vZ3JhbXNbcGxncl07XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQ3VycmVudCBwbGFub2dyYW0gbG9hZGVkOiAnLCB0aGlzLmN1cnJlbnRQbGFub2dyYW0pXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblNhdmUoKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0TW9kZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLm1hY2hpbmUuZGlzY29ubmVjdGVkTWFjaGluZSA9IHRoaXMubWFjaGluZU9wdGlvbnNGb3JtLnZhbHVlLmRpc2Nvbm5lY3RlZE1hY2hpbmU7XHJcbiAgICAgICAgdGhpcy5tYWNoaW5lLm9mZmxpbmVNYWNoaW5lID0gdGhpcy5tYWNoaW5lT3B0aW9uc0Zvcm0udmFsdWUub2ZmbGluZU1hY2hpbmU7XHJcbiAgICAgICAgdGhpcy5tYWNoaW5lLm1vZGVsID0gdGhpcy5tYWNoaW5lRm9ybS52YWx1ZS5tb2RlbDtcclxuICAgICAgICB0aGlzLm1hY2hpbmUuc2VyaWFsTnVtYmVyID0gdGhpcy5tYWNoaW5lRm9ybS52YWx1ZS5zZXJpYWxOdW1iZXI7XHJcbiAgICAgICAgdGhpcy5tYWNoaW5lLm5hbWUgPSB0aGlzLm1hY2hpbmVGb3JtLnZhbHVlLm5hbWU7XHJcbiAgICAgICAgdGhpcy5tYWNoaW5lLnR5cGUgPSB0aGlzLm1hY2hpbmVGb3JtLnZhbHVlLnR5cGU7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3Rlc3QgdHlwZTogJywgdGhpcy5tYWNoaW5lRm9ybS52YWx1ZS50eXBlKTtcclxuXHJcbiAgICAgICAgdGhpcy5fbWFjaGluZVNlcnZpY2UudXBkYXRlTWFjaGluZSh0aGlzLm1hY2hpbmUpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmVzcG9uc2UgZnJvbSBTYXZlIG1hY2hpbmU6ICcsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIE9rYXksIG5vdyB1cGRhdGUgcGxhbm9ncmFtIGlmIG5lZWRlZFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBsYW5vZ3JhbUNoYW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVXBkYXRpbmcgY3VycmVudCBQTEFOT0dSQU06OjonLCB0aGlzLmN1cnJlbnRQbGFub2dyYW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wbGFub2dyYW1zU2VydmljZS5lZGl0UGxhbm9ncmFtUXVhbnRpdGllcyh0aGlzLmN1cnJlbnRQbGFub2dyYW0pLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmVzcG9uc2UgZnJvbSBFZGl0IHBsYW5vZ3JhbSBxdWFudGl0aWVzOiAnLCBkYXRhMik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yMiA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRQbGFub2dyYW1RdWFudGl0aWVzKCkge1xyXG4gICAgICAgIC8vIFRPRE86IHRoaXMgZnVuY3Rpb24gd2lsbCBtYWtlIGFsbCBwcm9kdWN0IHF1YW50aXRpZXMgemVybyBvZiB0aGUgc2VsZWN0ZWQgcGxhbm9ncmFtXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1JFU0VUIENVUlJFTlQgUExBTk9HUkFNJyk7XHJcblxyXG4gICAgICAgIGxldCBpLCBqLCBrO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmN1cnJlbnRQbGFub2dyYW0udHJheXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IHRoaXMuY3VycmVudFBsYW5vZ3JhbS50cmF5c1tpXS5zbG90cy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHF1YW50aXR5ID0gdGhpcy5jdXJyZW50UGxhbm9ncmFtLnRyYXlzW2ldLnNsb3RzW2pdLnF1YW50aXR5O1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFBsYW5vZ3JhbS50cmF5c1tpXS5zbG90c1tqXS5xdWFudGl0eSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtYWNoaW5lSWRGb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCB0aGlzLmN1cnJlbnRQbGFub2dyYW0udHJheXNbaV0uc2xvdHNbal0ucXVhbnRpdHkubGVuZ3RoOyBrKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFBsYW5vZ3JhbS50cmF5c1tpXS5zbG90c1tqXS5xdWFudGl0eVtrXS5tYWNoaW5lSWQgPSB0aGlzLm1hY2hpbmVJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVzZXQgcXVhbnRpdHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYW5vZ3JhbS50cmF5c1tpXS5zbG90c1tqXS5xdWFudGl0eVtrXS5xdWFudGl0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWNoaW5lSWRGb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIW1hY2hpbmVJZEZvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYW5vZ3JhbS50cmF5c1tpXS5zbG90c1tqXS5xdWFudGl0eS5wdXNoKG5ldyBQbGFub2dyYW1RdWFudGl0eSh0aGlzLm1hY2hpbmVJZCwgMCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxhbm9ncmFtLnRyYXlzW2ldLnNsb3RzW2pdLnF1YW50aXR5ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxhbm9ncmFtLnRyYXlzW2ldLnNsb3RzW2pdLnF1YW50aXR5LnB1c2gobmV3IFBsYW5vZ3JhbVF1YW50aXR5KHRoaXMubWFjaGluZUlkLCAwKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0FORCB0aGlzIGlzIHRoZSBuZXcgUmVzZXQgcGxhbm9ncmFtJywgdGhpcy5jdXJyZW50UGxhbm9ncmFtKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZShzZWxlY3RWYWx1ZTogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coc2VsZWN0VmFsdWUpO1xyXG4gICAgICAgIHRoaXMucGxhbm9ncmFtQ2hhbmVkID0gdHJ1ZTtcclxuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMucGxhbm9ncmFtcykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wbGFub2dyYW1zW2ldLl9pZCA9PSBzZWxlY3RWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxhbm9ncmFtID0gdGhpcy5wbGFub2dyYW1zW2ldO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWNoaW5lLnBsYW5vZ3JhbSA9IHRoaXMuY3VycmVudFBsYW5vZ3JhbS5faWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0UGxhbm9ncmFtUXVhbnRpdGllcygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
