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
var SlotComponent = (function () {
    function SlotComponent() {
        this.productQuantity = 0;
    }
    SlotComponent.prototype.ngOnInit = function () {
        if (this.machineId) {
            // Search for such a machine id in the slot
            var quantity = this.slot.quantity;
            var machineId = this.machineId;
            if (quantity && machineId) {
                var i = void 0;
                for (i = 0; i < quantity.length; i++) {
                    if (quantity[i].machineId == machineId) {
                        this.productQuantity = quantity[i].quantity;
                        break;
                    }
                }
            }
        }
    };
    SlotComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'vend-slot',
            templateUrl: 'slot.component.html',
            directives: [],
            styleUrls: ['slot.css'],
            inputs: ['slot', 'machineId']
        }), 
        __metadata('design:paramtypes', [])
    ], SlotComponent);
    return SlotComponent;
}());
exports.SlotComponent = SlotComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hY2hpbmVzL3Nsb3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFXbEQ7SUFBQTtRQUlJLG9CQUFlLEdBQVEsQ0FBQyxDQUFDO0lBa0I3QixDQUFDO0lBaEJHLGdDQUFRLEdBQVI7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNqQiwyQ0FBMkM7WUFDM0MsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDbEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUMvQixFQUFFLENBQUMsQ0FBQyxRQUFRLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLFNBQUEsQ0FBQztnQkFDTixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7b0JBQ25DLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQzt3QkFDckMsSUFBSSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO3dCQUM1QyxLQUFLLENBQUM7b0JBQ1YsQ0FBQztnQkFDTCxDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0lBOUJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUscUJBQXFCO1lBQ2xDLFVBQVUsRUFBRSxFQUFFO1lBQ2QsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ3ZCLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUM7U0FDaEMsQ0FBQzs7cUJBQUE7SUF3QkYsb0JBQUM7QUFBRCxDQXRCQSxBQXNCQyxJQUFBO0FBdEJZLHFCQUFhLGdCQXNCekIsQ0FBQSIsImZpbGUiOiJtYWNoaW5lcy9zbG90LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ3ZlbmQtc2xvdCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3Nsb3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczogW10sXHJcbiAgICBzdHlsZVVybHM6IFsnc2xvdC5jc3MnXSxcclxuICAgIGlucHV0czogWydzbG90JywgJ21hY2hpbmVJZCddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2xvdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgc2xvdDogYW55O1xyXG4gICAgbWFjaGluZUlkOiBhbnk7XHJcbiAgICBwcm9kdWN0UXVhbnRpdHk6IGFueSA9IDA7XHJcbiAgICBcclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1hY2hpbmVJZCkge1xyXG4gICAgICAgICAgICAvLyBTZWFyY2ggZm9yIHN1Y2ggYSBtYWNoaW5lIGlkIGluIHRoZSBzbG90XHJcbiAgICAgICAgICAgIGxldCBxdWFudGl0eSA9IHRoaXMuc2xvdC5xdWFudGl0eTtcclxuICAgICAgICAgICAgbGV0IG1hY2hpbmVJZCA9IHRoaXMubWFjaGluZUlkO1xyXG4gICAgICAgICAgICBpZiAocXVhbnRpdHkgJiYgbWFjaGluZUlkKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaTtcclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBxdWFudGl0eS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChxdWFudGl0eVtpXS5tYWNoaW5lSWQgPT0gbWFjaGluZUlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdFF1YW50aXR5ID0gcXVhbnRpdHlbaV0ucXVhbnRpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
