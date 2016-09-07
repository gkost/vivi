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
var manual_service_slot_component_1 = require("./manual.service.slot.component");
var TrayComponentManualService = (function () {
    function TrayComponentManualService() {
    }
    TrayComponentManualService.prototype.ngOnInit = function () {
    };
    TrayComponentManualService = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'vend-manual-service-tray',
            templateUrl: 'manual.service.tray.component.html',
            directives: [manual_service_slot_component_1.SlotComponentManualService],
            styleUrls: ['manualTray.css'],
            inputs: ['tray', 'machineId']
        }), 
        __metadata('design:paramtypes', [])
    ], TrayComponentManualService);
    return TrayComponentManualService;
}());
exports.TrayComponentManualService = TrayComponentManualService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hY2hpbmVzL21hbnVhbC5zZXJ2aWNlLnRyYXkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsOENBQXlDLGlDQUFpQyxDQUFDLENBQUE7QUFXM0U7SUFBQTtJQU9BLENBQUM7SUFIRyw2Q0FBUSxHQUFSO0lBRUEsQ0FBQztJQWZMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsMEJBQTBCO1lBQ3BDLFdBQVcsRUFBRSxvQ0FBb0M7WUFDakQsVUFBVSxFQUFFLENBQUMsMERBQTBCLENBQUM7WUFDeEMsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7WUFDN0IsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQztTQUNoQyxDQUFDOztrQ0FBQTtJQVNGLGlDQUFDO0FBQUQsQ0FQQSxBQU9DLElBQUE7QUFQWSxrQ0FBMEIsNkJBT3RDLENBQUEiLCJmaWxlIjoibWFjaGluZXMvbWFudWFsLnNlcnZpY2UudHJheS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1Nsb3RDb21wb25lbnRNYW51YWxTZXJ2aWNlfSBmcm9tIFwiLi9tYW51YWwuc2VydmljZS5zbG90LmNvbXBvbmVudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICd2ZW5kLW1hbnVhbC1zZXJ2aWNlLXRyYXknLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdtYW51YWwuc2VydmljZS50cmF5LmNvbXBvbmVudC5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtTbG90Q29tcG9uZW50TWFudWFsU2VydmljZV0sXHJcbiAgICBzdHlsZVVybHM6IFsnbWFudWFsVHJheS5jc3MnXSxcclxuICAgIGlucHV0czogWyd0cmF5JywgJ21hY2hpbmVJZCddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVHJheUNvbXBvbmVudE1hbnVhbFNlcnZpY2UgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgdHJheTogYW55O1xyXG4gICAgbWFjaGluZUlkOiBhbnk7XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
