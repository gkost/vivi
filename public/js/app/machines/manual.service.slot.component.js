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
var machines_service_1 = require("./machines.service");
var error_service_1 = require("../errors/error.service");
var forms_1 = require('@angular/forms');
var SlotComponentManualService = (function () {
    function SlotComponentManualService(_fb, _machineService, _errorService) {
        this._fb = _fb;
        this._machineService = _machineService;
        this._errorService = _errorService;
        this.productQuantity = 0;
        this.machineIndex = -1;
        this.minimumCapacityReached = false;
        this.maxiumumCapacityReached = false;
    }
    SlotComponentManualService.prototype.ngOnInit = function () {
        if (this.machineId) {
            // Search for such a machine id in the slot
            var quantity = this.slot.quantity;
            var machineId = this.machineId;
            if (quantity && machineId) {
                var i = void 0;
                for (i = 0; i < quantity.length; i++) {
                    if (quantity[i].machineId == machineId) {
                        this.productQuantity = quantity[i].quantity;
                        this.machineIndex = i;
                        break;
                    }
                }
            }
            else {
                console.log('the other case');
            }
        }
        this.machineQuantityForm = this._fb.group({
            productQuantity: ['', forms_1.Validators.nullValidator]
        });
    };
    SlotComponentManualService.prototype.onIncreaseQuantity = function (slot) {
        var index = this.machineIndex;
        if (index == -1)
            return;
        if (slot.quantity[index].quantity < parseInt(slot.capacity)) {
            this.slot.quantity[index].quantity += 1;
            this.productQuantity = this.slot.quantity[index].quantity;
            this.minimumCapacityReached = false;
        }
        if (slot.quantity[index].quantity == slot.capacity) {
            // TODO: Inform the user for upper limit
            this.maxiumumCapacityReached = true;
        }
    };
    SlotComponentManualService.prototype.onDecreaseQuantity = function (slot) {
        var index = this.machineIndex;
        if (index == -1)
            return;
        if (slot.quantity[index].quantity > 0) {
            slot.quantity[index].quantity--;
            this.productQuantity = this.slot.quantity[index].quantity;
            this.maxiumumCapacityReached = false;
        }
        if (slot.quantity.quantity == 0) {
            // TODO: Inform the user for bottom limit
            this.minimumCapacityReached = true;
        }
    };
    SlotComponentManualService.prototype.onProductSell = function (slot) {
        var _this = this;
        console.log('On sell - ', slot);
        var index = this.machineIndex;
        if (index == -1)
            return;
        if (slot.quantity[index].quantity > 0) {
            slot.quantity[index].quantity--; // This is Optimistic Update
            var sellingProduct = {
                machineId: this.machineId,
                productId: this.slot.product._id,
                soldPrice: this.slot.price
            };
            console.log('Selling product', sellingProduct);
            this._machineService.sellProduct(sellingProduct).subscribe(function (data) {
                console.log('Response from Selling Product: ', data);
            }, function (error) { return _this._errorService.handleError(error); });
        }
    };
    SlotComponentManualService = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'vend-manual-service-slot',
            templateUrl: 'manual.service.slot.component.html',
            directives: [forms_1.FORM_DIRECTIVES,
                forms_1.REACTIVE_FORM_DIRECTIVES],
            providers: [forms_1.FormBuilder],
            styleUrls: ['manualSlot.css'],
            inputs: ['slot', 'machineId']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, machines_service_1.MachinesService, error_service_1.ErrorService])
    ], SlotComponentManualService);
    return SlotComponentManualService;
}());
exports.SlotComponentManualService = SlotComponentManualService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hY2hpbmVzL21hbnVhbC5zZXJ2aWNlLnNsb3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsaUNBQThCLG9CQUFvQixDQUFDLENBQUE7QUFDbkQsOEJBQTJCLHlCQUF5QixDQUFDLENBQUE7QUFDckQsc0JBQzJELGdCQUFnQixDQUFDLENBQUE7QUFhNUU7SUFXSSxvQ0FBcUIsR0FBZ0IsRUFDakIsZUFBZ0MsRUFDaEMsYUFBMkI7UUFGMUIsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUNqQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFUL0Msb0JBQWUsR0FBUSxDQUFDLENBQUM7UUFDekIsaUJBQVksR0FBVyxDQUFDLENBQUMsQ0FBQztRQUMxQiwyQkFBc0IsR0FBWSxLQUFLLENBQUM7UUFDeEMsNEJBQXVCLEdBQVksS0FBSyxDQUFDO0lBTVUsQ0FBQztJQUVwRCw2Q0FBUSxHQUFSO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDakIsMkNBQTJDO1lBQzNDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ2xDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDL0IsRUFBRSxDQUFDLENBQUMsUUFBUSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxTQUFBLENBQUM7Z0JBQ04sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO29CQUNuQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7d0JBQ3JDLElB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c0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtNYWNoaW5lc1NlcnZpY2V9IGZyb20gXCIuL21hY2hpbmVzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtFcnJvclNlcnZpY2V9IGZyb20gXCIuLi9lcnJvcnMvZXJyb3Iuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBGT1JNX0RJUkVDVElWRVMsIFJFQUNUSVZFX0ZPUk1fRElSRUNUSVZFUyxcclxuICAgIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICd2ZW5kLW1hbnVhbC1zZXJ2aWNlLXNsb3QnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdtYW51YWwuc2VydmljZS5zbG90LmNvbXBvbmVudC5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtGT1JNX0RJUkVDVElWRVMsXHJcbiAgICAgICAgICAgICAgICBSRUFDVElWRV9GT1JNX0RJUkVDVElWRVNdLFxyXG4gICAgcHJvdmlkZXJzOiBbRm9ybUJ1aWxkZXJdLFxyXG4gICAgc3R5bGVVcmxzOiBbJ21hbnVhbFNsb3QuY3NzJ10sXHJcbiAgICBpbnB1dHM6IFsnc2xvdCcsICdtYWNoaW5lSWQnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNsb3RDb21wb25lbnRNYW51YWxTZXJ2aWNlIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBzbG90OiBhbnk7XHJcbiAgICBtYWNoaW5lSWQ6IGFueTtcclxuICAgIHByb2R1Y3RRdWFudGl0eTogYW55ID0gMDtcclxuICAgIG1hY2hpbmVJbmRleDogbnVtYmVyID0gLTE7XHJcbiAgICBtaW5pbXVtQ2FwYWNpdHlSZWFjaGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBtYXhpdW11bUNhcGFjaXR5UmVhY2hlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIG1hY2hpbmVRdWFudGl0eUZvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciggcHJpdmF0ZSBfZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfbWFjaGluZVNlcnZpY2U6IE1hY2hpbmVzU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2Vycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlICkge31cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5tYWNoaW5lSWQpIHtcclxuICAgICAgICAgICAgLy8gU2VhcmNoIGZvciBzdWNoIGEgbWFjaGluZSBpZCBpbiB0aGUgc2xvdFxyXG4gICAgICAgICAgICBsZXQgcXVhbnRpdHkgPSB0aGlzLnNsb3QucXVhbnRpdHk7XHJcbiAgICAgICAgICAgIGxldCBtYWNoaW5lSWQgPSB0aGlzLm1hY2hpbmVJZDtcclxuICAgICAgICAgICAgaWYgKHF1YW50aXR5ICYmIG1hY2hpbmVJZCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcXVhbnRpdHkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocXVhbnRpdHlbaV0ubWFjaGluZUlkID09IG1hY2hpbmVJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RRdWFudGl0eSA9IHF1YW50aXR5W2ldLnF1YW50aXR5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hY2hpbmVJbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGUgb3RoZXIgY2FzZScpO1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLnNsb3QucXVhbnRpdHkgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubWFjaGluZVF1YW50aXR5Rm9ybSA9IHRoaXMuX2ZiLmdyb3VwKHtcclxuICAgICAgICAgICAgcHJvZHVjdFF1YW50aXR5OiBbJycsIFZhbGlkYXRvcnMubnVsbFZhbGlkYXRvcl1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkluY3JlYXNlUXVhbnRpdHkoc2xvdCkge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMubWFjaGluZUluZGV4O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAtMSkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChzbG90LnF1YW50aXR5W2luZGV4XS5xdWFudGl0eSA8IHBhcnNlSW50KHNsb3QuY2FwYWNpdHkpKSB7IC8vIFRPRE86IHF1YW50aXR5IG5vdCBpbmNyZWFzaW5nLCBmaXggdGhpc1xyXG4gICAgICAgICAgICB0aGlzLnNsb3QucXVhbnRpdHlbaW5kZXhdLnF1YW50aXR5ICs9IDE7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdFF1YW50aXR5ID0gdGhpcy5zbG90LnF1YW50aXR5W2luZGV4XS5xdWFudGl0eTtcclxuICAgICAgICAgICAgdGhpcy5taW5pbXVtQ2FwYWNpdHlSZWFjaGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzbG90LnF1YW50aXR5W2luZGV4XS5xdWFudGl0eSA9PSBzbG90LmNhcGFjaXR5KSB7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IEluZm9ybSB0aGUgdXNlciBmb3IgdXBwZXIgbGltaXRcclxuICAgICAgICAgICAgdGhpcy5tYXhpdW11bUNhcGFjaXR5UmVhY2hlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVjcmVhc2VRdWFudGl0eShzbG90KSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5tYWNoaW5lSW5kZXg7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IC0xKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHNsb3QucXVhbnRpdHlbaW5kZXhdLnF1YW50aXR5ID4gMCkge1xyXG4gICAgICAgICAgICBzbG90LnF1YW50aXR5W2luZGV4XS5xdWFudGl0eS0tO1xyXG4gICAgICAgICAgICB0aGlzLnByb2R1Y3RRdWFudGl0eSA9IHRoaXMuc2xvdC5xdWFudGl0eVtpbmRleF0ucXVhbnRpdHk7XHJcbiAgICAgICAgICAgIHRoaXMubWF4aXVtdW1DYXBhY2l0eVJlYWNoZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNsb3QucXVhbnRpdHkucXVhbnRpdHkgPT0gMCkge1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBJbmZvcm0gdGhlIHVzZXIgZm9yIGJvdHRvbSBsaW1pdFxyXG4gICAgICAgICAgICB0aGlzLm1pbmltdW1DYXBhY2l0eVJlYWNoZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblByb2R1Y3RTZWxsKHNsb3QpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnT24gc2VsbCAtICcsIHNsb3QpO1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMubWFjaGluZUluZGV4O1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAtMSkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChzbG90LnF1YW50aXR5W2luZGV4XS5xdWFudGl0eSA+IDApIHtcclxuICAgICAgICAgICAgc2xvdC5xdWFudGl0eVtpbmRleF0ucXVhbnRpdHktLTsgLy8gVGhpcyBpcyBPcHRpbWlzdGljIFVwZGF0ZVxyXG4gICAgICAgICAgICBsZXQgc2VsbGluZ1Byb2R1Y3QgPSB7XHJcbiAgICAgICAgICAgICAgICBtYWNoaW5lSWQ6IHRoaXMubWFjaGluZUlkLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdElkOiB0aGlzLnNsb3QucHJvZHVjdC5faWQsXHJcbiAgICAgICAgICAgICAgICBzb2xkUHJpY2U6IHRoaXMuc2xvdC5wcmljZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnU2VsbGluZyBwcm9kdWN0Jywgc2VsbGluZ1Byb2R1Y3QpO1xyXG4gICAgICAgICAgICB0aGlzLl9tYWNoaW5lU2VydmljZS5zZWxsUHJvZHVjdChzZWxsaW5nUHJvZHVjdCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1Jlc3BvbnNlIGZyb20gU2VsbGluZyBQcm9kdWN0OiAnLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
