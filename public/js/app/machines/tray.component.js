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
var slot_component_1 = require("./slot.component");
var TrayComponent = (function () {
    function TrayComponent() {
    }
    TrayComponent.prototype.ngOnInit = function () {
    };
    TrayComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'vend-tray',
            templateUrl: 'tray.component.html',
            directives: [slot_component_1.SlotComponent],
            styleUrls: ['tray.css'],
            inputs: ['tray', 'machineId']
        }), 
        __metadata('design:paramtypes', [])
    ], TrayComponent);
    return TrayComponent;
}());
exports.TrayComponent = TrayComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hY2hpbmVzL3RyYXkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsK0JBQTRCLGtCQUFrQixDQUFDLENBQUE7QUFXL0M7SUFBQTtJQU9BLENBQUM7SUFIRyxnQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQWZMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUscUJBQXFCO1lBQ2xDLFVBQVUsRUFBRSxDQUFDLDhCQUFhLENBQUM7WUFDM0IsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ3ZCLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUM7U0FDaEMsQ0FBQzs7cUJBQUE7SUFTRixvQkFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFkscUJBQWEsZ0JBT3pCLENBQUEiLCJmaWxlIjoibWFjaGluZXMvdHJheS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1Nsb3RDb21wb25lbnR9IGZyb20gXCIuL3Nsb3QuY29tcG9uZW50XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ3ZlbmQtdHJheScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3RyYXkuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczogW1Nsb3RDb21wb25lbnRdLFxyXG4gICAgc3R5bGVVcmxzOiBbJ3RyYXkuY3NzJ10sXHJcbiAgICBpbnB1dHM6IFsndHJheScsICdtYWNoaW5lSWQnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRyYXlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgdHJheTogYW55O1xyXG4gICAgbWFjaGluZUlkOiBhbnk7XHJcbiAgICBcclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
