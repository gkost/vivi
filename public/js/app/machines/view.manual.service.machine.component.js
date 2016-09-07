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
var manual_service_tray_component_1 = require("./manual.service.tray.component");
var manual_service_slot_component_1 = require("./manual.service.slot.component");
var forms_1 = require('@angular/forms');
var machines_service_1 = require("./machines.service");
var error_service_1 = require("../errors/error.service");
var planograms_service_1 = require("../planograms/planograms.service");
var ViewMachineComponentManualService = (function () {
    function ViewMachineComponentManualService(_fb, _machineService, _errorService, 
        //private _router:Router,
        _curr, _planogramsService) {
        this._fb = _fb;
        this._machineService = _machineService;
        this._errorService = _errorService;
        this._curr = _curr;
        this._planogramsService = _planogramsService;
        this.editMode = false;
        this.planogramChaned = false;
        this.machineTypes = _machineService.machineTypes;
    }
    ViewMachineComponentManualService.prototype.ngOnInit = function () {
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
        if (this.machineId) {
            this.getMachine(this.machineId);
        }
    };
    ViewMachineComponentManualService.prototype.getMachine = function (machineId) {
        var _this = this;
        console.log('Trying to get a machine');
        this._machineService.getMachine(machineId)
            .subscribe(function (data) {
            // console.log(data);
            _this.machine = data;
            console.log('Machine: ', _this.machine);
            if (_this.machine) {
                _this.currentPlanogramId = _this.machine.planogram;
                // (<Control>this.machineForm.controls['name']).updateValue(this.machine.name);
                // (<Control>this.machineForm.controls['serialNumber']).updateValue(this.machine.serialNumber);
                // (<Control>this.machineForm.controls['model']).updateValue(this.machine.model);
                // (<Control>this.machineOptionsForm.controls['offlineMachine']).updateValue(this.machine.offlineMachine);
                // (<Control>this.machineOptionsForm.controls['disconnectedMachine']).updateValue(this.machine.disconnectedMachine);
                // (<Control>this.machineForm.controls['type']).updateValue(this.machine.type);
                if (_this.currentPlanogramId)
                    _this.getPlanogram();
            }
        }, function (error) { return _this._errorService.handleError(error); });
    };
    ViewMachineComponentManualService.prototype.getPlanogram = function () {
        var _this = this;
        this._planogramsService.getPlanogramAndProducts(this.currentPlanogramId)
            .subscribe(function (data) {
            console.log(data);
            _this.currentPlanogram = data.obj;
            console.log('Planogram: ', _this.currentPlanogram);
        }, function (error) { return _this._errorService.handleError(error); });
    };
    ViewMachineComponentManualService.prototype.onUpdate = function () {
        var _this = this;
        console.log('Update');
        if (this.currentPlanogram) {
            console.log('Updating current PLANOGRAM:::', this.currentPlanogram);
            this._planogramsService.editPlanogramQuantities(this.currentPlanogram).subscribe(function (data2) {
                console.log('Response from Edit planogram quantities: ', data2);
            }, function (error2) { return _this._errorService.handleError(error2); });
        }
    };
    ViewMachineComponentManualService.prototype.onUndo = function () {
        console.log('On Undo');
    };
    ViewMachineComponentManualService = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'vend-view-machine-manual-service',
            templateUrl: 'view.manual.service.machine.component.html',
            directives: [router_1.ROUTER_DIRECTIVES,
                manual_service_tray_component_1.TrayComponentManualService,
                manual_service_slot_component_1.SlotComponentManualService,
                forms_1.FORM_DIRECTIVES,
                forms_1.REACTIVE_FORM_DIRECTIVES],
            styles: ["\n\n    "],
            providers: [forms_1.FormBuilder]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, machines_service_1.MachinesService, error_service_1.ErrorService, router_1.RouteSegment, planograms_service_1.PlanogramsService])
    ], ViewMachineComponentManualService);
    return ViewMachineComponentManualService;
}());
exports.ViewMachineComponentManualService = ViewMachineComponentManualService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hY2hpbmVzL3ZpZXcubWFudWFsLnNlcnZpY2UubWFjaGluZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCx1QkFBdUQsaUJBQWlCLENBQUMsQ0FBQTtBQUN6RSw4Q0FBeUMsaUNBQWlDLENBQUMsQ0FBQTtBQUMzRSw4Q0FBeUMsaUNBQWlDLENBQUMsQ0FBQTtBQUMzRSxzQkFDOEMsZ0JBQWdCLENBQUMsQ0FBQTtBQUMvRCxpQ0FBZ0Msb0JBQW9CLENBQUMsQ0FBQTtBQUNyRCw4QkFBNkIseUJBQXlCLENBQUMsQ0FBQTtBQUN2RCxtQ0FBa0Msa0NBQWtDLENBQUMsQ0FBQTtBQWlCckU7SUFlSSwyQ0FBb0IsR0FBZSxFQUNmLGVBQStCLEVBQy9CLGFBQTBCO1FBQ2xDLHlCQUF5QjtRQUNqQixLQUFrQixFQUNsQixrQkFBb0M7UUFMcEMsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUMvQixrQkFBYSxHQUFiLGFBQWEsQ0FBYTtRQUUxQixVQUFLLEdBQUwsS0FBSyxDQUFhO1FBQ2xCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBa0I7UUFkeEQsYUFBUSxHQUFXLEtBQUssQ0FBQztRQU16QixvQkFBZSxHQUFXLEtBQUssQ0FBQztRQVU1QixJQUFJLENBQUMsWUFBWSxHQUFHLGVBQWUsQ0FBQyxZQUFZLENBQUM7SUFDckQsQ0FBQztJQUVELG9EQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRWpELElBQUksQ0FBQyxPQUFPLEdBQUc7WUFDWCxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDbkIsSUFBSSxFQUFF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QUMsQ0FBQztJQUMzQixDQUFDO0lBeEhMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsa0NBQWtDO1lBQzVDLFdBQVcsRUFBRSw0Q0FBNEM7WUFDekQsVUFBVSxFQUFFLENBQUMsMEJBQWlCO2dCQUMxQiwwREFBMEI7Z0JBQzFCLDBEQUEwQjtnQkFDMUIsdUJBQWU7Z0JBQ2YsZ0NBQXdCLENBQUM7WUFDN0IsTUFBTSxFQUFFLENBQUMsVUFFUixDQUFDO1lBQ0YsU0FBUyxFQUFFLENBQUMsbUJBQVcsQ0FBQztTQUMzQixDQUFDOzt5Q0FBQTtJQTZHRix3Q0FBQztBQUFELENBM0dBLEFBMkdDLElBQUE7QUEzR1kseUNBQWlDLG9DQTJHN0MsQ0FBQSIsImZpbGUiOiJtYWNoaW5lcy92aWV3Lm1hbnVhbC5zZXJ2aWNlLm1hY2hpbmUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyLCBST1VURVJfRElSRUNUSVZFUywgUm91dGVTZWdtZW50fSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7VHJheUNvbXBvbmVudE1hbnVhbFNlcnZpY2V9IGZyb20gXCIuL21hbnVhbC5zZXJ2aWNlLnRyYXkuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7U2xvdENvbXBvbmVudE1hbnVhbFNlcnZpY2V9IGZyb20gXCIuL21hbnVhbC5zZXJ2aWNlLnNsb3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEZPUk1fRElSRUNUSVZFUywgUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTLFxyXG4gICAgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTWFjaGluZXNTZXJ2aWNlIH0gZnJvbSBcIi4vbWFjaGluZXMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBFcnJvclNlcnZpY2UgfSBmcm9tIFwiLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgUGxhbm9ncmFtc1NlcnZpY2UgfSBmcm9tIFwiLi4vcGxhbm9ncmFtcy9wbGFub2dyYW1zLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAndmVuZC12aWV3LW1hY2hpbmUtbWFudWFsLXNlcnZpY2UnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICd2aWV3Lm1hbnVhbC5zZXJ2aWNlLm1hY2hpbmUuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLFxyXG4gICAgICAgIFRyYXlDb21wb25lbnRNYW51YWxTZXJ2aWNlLFxyXG4gICAgICAgIFNsb3RDb21wb25lbnRNYW51YWxTZXJ2aWNlLFxyXG4gICAgICAgIEZPUk1fRElSRUNUSVZFUyxcclxuICAgICAgICBSRUFDVElWRV9GT1JNX0RJUkVDVElWRVNdLFxyXG4gICAgc3R5bGVzOiBbYFxyXG5cclxuICAgIGBdLFxyXG4gICAgcHJvdmlkZXJzOiBbRm9ybUJ1aWxkZXJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVmlld01hY2hpbmVDb21wb25lbnRNYW51YWxTZXJ2aWNlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHBsYW5vZ3JhbXM6W2FueV07XHJcbiAgICBjdXJyZW50UGxhbm9ncmFtOmFueTtcclxuICAgIGN1cnJlbnRQbGFub2dyYW1JZDphbnk7XHJcbiAgICBtYWNoaW5lOmFueTtcclxuICAgIG1hY2hpbmVJZDphbnk7XHJcbiAgICBlZGl0TW9kZTpib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLy8gbWFjaGluZUZvcm06Q29udHJvbEdyb3VwO1xyXG4gICAgLy8gbWFjaGluZU9wdGlvbnNGb3JtOkNvbnRyb2xHcm91cDtcclxuXHJcbiAgICBtYWNoaW5lVHlwZXM6YW55O1xyXG4gICAgcGxhbm9ncmFtQ2hhbmVkOmJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZmI6Rm9ybUJ1aWxkZXIsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9tYWNoaW5lU2VydmljZTpNYWNoaW5lc1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9lcnJvclNlcnZpY2U6RXJyb3JTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgLy9wcml2YXRlIF9yb3V0ZXI6Um91dGVyLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfY3VycjpSb3V0ZVNlZ21lbnQsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9wbGFub2dyYW1zU2VydmljZTpQbGFub2dyYW1zU2VydmljZSkge1xyXG5cclxuICAgICAgICB0aGlzLm1hY2hpbmVUeXBlcyA9IF9tYWNoaW5lU2VydmljZS5tYWNoaW5lVHlwZXM7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5tYWNoaW5lSWQgPSB0aGlzLl9jdXJyLmdldFBhcmFtKCdpZCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdIaSBldmVyeWJvZHkgSWQ6ICcsIHRoaXMubWFjaGluZUlkKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYWNoaW5lID0ge1xyXG4gICAgICAgICAgICBfaWQ6IHRoaXMubWFjaGluZUlkLFxyXG4gICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgc2VyaWFsTnVtYmVyOiAnJyxcclxuICAgICAgICAgICAgZGVsZXRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIHR5cGU6IDAsXHJcbiAgICAgICAgICAgIHNvbGRPdXRzOiAwLFxyXG4gICAgICAgICAgICBzdGF0dXM6IDAsXHJcbiAgICAgICAgICAgIHBsYW5vZ3JhbToge30sXHJcbiAgICAgICAgICAgIHBsYW5vZ3JhbVF1YW50aXRpZXM6IFtdXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG5cclxuICAgICAgICBpZiAodGhpcy5tYWNoaW5lSWQpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRNYWNoaW5lKHRoaXMubWFjaGluZUlkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRNYWNoaW5lKG1hY2hpbmVJZDogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RyeWluZyB0byBnZXQgYSBtYWNoaW5lJyk7XHJcbiAgICAgICAgdGhpcy5fbWFjaGluZVNlcnZpY2UuZ2V0TWFjaGluZShtYWNoaW5lSWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hY2hpbmUgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNYWNoaW5lOiAnLCB0aGlzLm1hY2hpbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hY2hpbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxhbm9ncmFtSWQgPSB0aGlzLm1hY2hpbmUucGxhbm9ncmFtO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gKDxDb250cm9sPnRoaXMubWFjaGluZUZvcm0uY29udHJvbHNbJ25hbWUnXSkudXBkYXRlVmFsdWUodGhpcy5tYWNoaW5lLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAoPENvbnRyb2w+dGhpcy5tYWNoaW5lRm9ybS5jb250cm9sc1snc2VyaWFsTnVtYmVyJ10pLnVwZGF0ZVZhbHVlKHRoaXMubWFjaGluZS5zZXJpYWxOdW1iZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAoPENvbnRyb2w+dGhpcy5tYWNoaW5lRm9ybS5jb250cm9sc1snbW9kZWwnXSkudXBkYXRlVmFsdWUodGhpcy5tYWNoaW5lLm1vZGVsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gKDxDb250cm9sPnRoaXMubWFjaGluZU9wdGlvbnNGb3JtLmNvbnRyb2xzWydvZmZsaW5lTWFjaGluZSddKS51cGRhdGVWYWx1ZSh0aGlzLm1hY2hpbmUub2ZmbGluZU1hY2hpbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAoPENvbnRyb2w+dGhpcy5tYWNoaW5lT3B0aW9uc0Zvcm0uY29udHJvbHNbJ2Rpc2Nvbm5lY3RlZE1hY2hpbmUnXSkudXBkYXRlVmFsdWUodGhpcy5tYWNoaW5lLmRpc2Nvbm5lY3RlZE1hY2hpbmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAoPENvbnRyb2w+dGhpcy5tYWNoaW5lRm9ybS5jb250cm9sc1sndHlwZSddKS51cGRhdGVWYWx1ZSh0aGlzLm1hY2hpbmUudHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRQbGFub2dyYW1JZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGxhbm9ncmFtKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQbGFub2dyYW0oKSB7XHJcbiAgICAgICAgdGhpcy5fcGxhbm9ncmFtc1NlcnZpY2UuZ2V0UGxhbm9ncmFtQW5kUHJvZHVjdHModGhpcy5jdXJyZW50UGxhbm9ncmFtSWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGFub2dyYW0gPSBkYXRhLm9iajtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUGxhbm9ncmFtOiAnLCB0aGlzLmN1cnJlbnRQbGFub2dyYW0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvblVwZGF0ZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVXBkYXRlJyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQbGFub2dyYW0pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1VwZGF0aW5nIGN1cnJlbnQgUExBTk9HUkFNOjo6JywgdGhpcy5jdXJyZW50UGxhbm9ncmFtKTtcclxuICAgICAgICAgICAgdGhpcy5fcGxhbm9ncmFtc1NlcnZpY2UuZWRpdFBsYW5vZ3JhbVF1YW50aXRpZXModGhpcy5jdXJyZW50UGxhbm9ncmFtKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhMiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1Jlc3BvbnNlIGZyb20gRWRpdCBwbGFub2dyYW0gcXVhbnRpdGllczogJywgZGF0YTIpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvcjIgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yMilcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uVW5kbygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnT24gVW5kbycpO1xyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
