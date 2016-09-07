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
var forms_1 = require('@angular/forms');
var error_service_1 = require("../errors/error.service");
var slot_1 = require('./slot');
var products_service_1 = require("../products/products.service");
var planograms_service_1 = require("./planograms.service");
var info_service_1 = require("../dialogs/info/info.service");
var tray_1 = require("./tray");
var CreatePlanogram = (function () {
    function CreatePlanogram(_fb, _errorService, _router, _planogramsService, _productsService, _infoService, _curr) {
        this._fb = _fb;
        this._errorService = _errorService;
        this._router = _router;
        this._planogramsService = _planogramsService;
        this._productsService = _productsService;
        this._infoService = _infoService;
        this._curr = _curr;
        this.trays = [];
        this.traysSize = 1;
        this.slotsSize = 1;
        this.editPlanogram = false;
        this.createPlanogram = true;
        this.planogramDeleted = false;
    }
    CreatePlanogram.prototype.ngOnInit = function () {
        // this.trays[0] = [];
        var slots = [];
        var slot = new slot_1.Slot('A0', -1, 0, 0);
        slots.push(slot);
        var tray = new tray_1.Tray(slots);
        this.trays.push(tray);
        console.log('Initial tray:', this.trays);
        // this.trays[0][0] = new Slot('A0', -1, 0, 0);
        this.getProducts();
        var id = this._curr.getParam('id');
        var view = this._curr.getParam('view');
        var planogram;
        var planogramName = '';
        if (id) {
            this.getPlanogram(id);
            console.log('View a planogram');
            // if (view) {
            //     this.editPlanogram = false;
            // } else {
            //     this.editPlanogram = true;
            // }
            // if (planograms)
            //     planograms = this.planograms.filter(function (obj) {
            //         return obj._id == id;
            //     });
            this.editPlanogramId = id;
            this.createPlanogram = false;
        }
        else {
            this.createPlanogram = true;
        }
        // if (planograms && planograms.length > 0) {
        //     planogram = planograms[0];
        //     console.log('PLANOGRAM: ', planogram);
        //     if (planogram.activeState == 2) this.planogramDeleted = true;
        //     planogramName = planogram.name;
        //     this.trays = planogram.trays;
        //     console.log('TRAYS: ', this.trays);
        // } else {
        //     console.log('Add a planogram');
        //     this.editPlanogram = false;
        // }
        this.planogramForm = this._fb.group({
            name: [planogramName, forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(3),
                    forms_1.Validators.maxLength(30)])]
        });
        this.slotForm = this._fb.group({
            name: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(3),
                    forms_1.Validators.maxLength(30)])],
            slotCapacity: [0, forms_1.Validators.nullValidator],
            productPrice: ['', forms_1.Validators.nullValidator],
            slotName: ['', forms_1.Validators.nullValidator]
        });
        console.log('This Trays: ', this.trays);
    };
    CreatePlanogram.prototype.getPlanogram = function (planogramId) {
        var _this = this;
        this._planogramsService.getPlanogram(planogramId)
            .subscribe(function (data) {
            _this.planogram = data.obj;
            _this.trays = _this.planogram.trays;
            _this.traysSize = _this.trays.length;
            _this.slotsSize = _this.trays[0].slots.length;
            console.log('Edit Planogram: ', _this.planogram);
            if (_this.planogram) {
                _this.planogramForm.controls['name'].updateValue(_this.planogram.name);
            }
        }, function (error) { return _this._errorService.handleError(error); });
    };
    CreatePlanogram.prototype.getProducts = function () {
        var _this = this;
        this._productsService.getAllProducts()
            .subscribe(function (data) {
            // console.log(data);
            _this.products = data.obj.products;
            // this._productService.products = this.products;
        }, function (error) { return _this._errorService.handleError(error); });
    };
    CreatePlanogram.prototype.getLetter = function (index) {
        var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        while (index > letters.length - 1) {
            index -= letters.length - 1;
        }
        return letters[index];
    };
    CreatePlanogram.prototype.onAddSlot = function () {
        var traysSize = this.trays.length;
        var i;
        for (i = 0; i < traysSize; i = i + 1) {
            var newName = this.getLetter(i) + this.trays[i].slots.length.toString();
            var newSlot = new slot_1.Slot(newName, -1, 0, 0);
            this.trays[i].slots.push(newSlot);
        }
        this.slotsSize = this.trays[0].slots.length;
    };
    CreatePlanogram.prototype.onAddTray = function () {
        var slotsSize = this.trays[0].slots.length;
        var j;
        var slots = [];
        var letter = this.getLetter(this.trays.length);
        for (j = 0; j < slotsSize; j = j + 1) {
            var newName = letter + j.toString();
            var slot = new slot_1.Slot(newName, -1, 0, 0);
            slots.push(slot);
        }
        var tray = new tray_1.Tray(slots);
        this.trays.push(tray);
        this.traysSize = this.trays.length;
    };
    CreatePlanogram.prototype.onSlotClicked = function (slot) {
        console.log('SLOT CLICKED:', slot);
        this.selectedSlot = slot;
        this.slotForm.controls['slotName'].updateValue(slot.name);
        this.slotForm.controls['slotCapacity'].updateValue(slot.capacity);
        this.slotForm.controls['productPrice'].updateValue(slot.price);
        if (slot.product != -1) {
            this.slotForm.controls['name'].updateValue(this.getProductName(slot.product));
        }
        this.selectedProductId = slot.product;
    };
    CreatePlanogram.prototype.getProductName = function (id) {
        var result = '';
        var products = this.products;
        if (products && id) {
            var prdct = products.filter(function (obj) {
                return obj._id == id.toString();
            });
            if (prdct && prdct.length > 0) {
                result = prdct[0].name;
            }
        }
        return result;
    };
    CreatePlanogram.prototype.onProductClicked = function (product) {
        console.log(product);
        this.selectedProduct = product;
        this.slotForm.controls['name'].updateValue(product.name);
        // (<Control>this.slotForm.controls['price']).updateValue(product.price);
    };
    CreatePlanogram.prototype.onAssign = function () {
        if (this.selectedSlot && this.selectedProduct) {
            this.selectedSlot.product = this.selectedProduct._id;
            this.selectedSlot.capacity = this.slotForm.value.slotCapacity;
            this.selectedSlot.price = this.slotForm.value.productPrice;
            this.selectedSlot.name = this.slotForm.value.slotName;
        }
        else {
            if (!this.selectedSlot && !this.selectedProduct) {
                // Please select a Slot and a Product in order to assign
                this._infoService.handleInfo({
                    title: 'Selection missing!',
                    message: 'Please select a Slot and a Product in order to assign'
                });
            }
            else if (!this.selectedSlot) {
                // Please select a Slot to assign the selected Product
                this._infoService.handleInfo({
                    title: 'Selection missing!',
                    message: 'Please select a Slot to assign the selected Product'
                });
            }
            else if (!this.selectedProduct) {
                // Please select a Product to assign to the selected Slot
                this._infoService.handleInfo({
                    title: 'Selection missing!',
                    message: 'Please select a Product to assign to the selected Slot'
                });
            }
        }
    };
    CreatePlanogram.prototype.onSavePlanogram = function () {
        var _this = this;
        console.log('On save planogram');
        // Check if all slots are assigned to products
        var i, j;
        var unassignedSlotFound = false;
        var traysSize = this.trays.length;
        for (i = 0; i < traysSize; i = i + 1) {
            for (j = 0; j < this.trays[i].slots.length; j++) {
                if (this.trays[i].slots[j].product == -1) {
                    unassignedSlotFound = true;
                }
            }
        }
        if (unassignedSlotFound) {
            this._infoService.handleInfo({
                title: "Unassigned product",
                message: "There is unassigned slot. Please,\nassign all slots before save!" });
            return;
        }
        var planogram = {
            _id: this.editPlanogramId,
            name: this.planogramForm.value.name,
            trays: this.trays
        };
        if (!this.createPlanogram) {
            this._planogramsService.editPlanogram(planogram)
                .subscribe(function (data) {
                console.log('DATA+++:', data);
                _this._router.navigate(['/viewallplanograms']);
            }, function (error) { return _this._errorService.handleError(error); });
        }
        else {
            console.log('Adding a planogram');
            this._planogramsService.addPlanogram(planogram)
                .subscribe(function (data) {
                // this.productsComponent.getProducts(); // TODO: temporary suspended
                _this._router.navigate(['/viewallplanograms']);
            }, function (error) { return _this._errorService.handleError(error); });
        }
    };
    CreatePlanogram.prototype.onRemoveTray = function () {
        if (this.trays.length > 1) {
            this.trays.splice(-1, 1);
            this.traysSize = this.trays.length;
        }
        else {
            this._infoService.handleInfo({ title: 'Remove unsuccessful', message: 'You can not remove the first tray' });
        }
    };
    CreatePlanogram.prototype.onRemoveSlot = function () {
        var i;
        for (i = 0; i < this.trays.length; i++) {
            if (this.trays[i].slots.length > 1) {
                this.trays[i].slots.splice(-1, 1);
                this.slotsSize = this.trays[0].slots.length;
            }
            else {
                this._infoService.handleInfo({ title: 'Remove unsuccessful', message: 'You can not remove the first slots' });
            }
        }
    };
    CreatePlanogram = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'vend-viewall-planograms',
            templateUrl: 'create.planogram.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, forms_1.FORM_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES],
            providers: [forms_1.FormBuilder],
            styles: ["\n        .label {\n            margin: 4px 4px 4px 4px;\n        }\n        .trayLabel {\n            font-size: 1.2em;\n        }\n        #tray {\n            margin-bottom: 8px;\n        }\n        #slot {\n            width: 38px !important;\n            max-width: 38px;\n            display: inline-block;\n        }\n\n    "]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, error_service_1.ErrorService, router_1.Router, planograms_service_1.PlanogramsService, products_service_1.ProductsService, info_service_1.InfoService, router_1.RouteSegment])
    ], CreatePlanogram);
    return CreatePlanogram;
}());
exports.CreatePlanogram = CreatePlanogram;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYW5vZ3JhbXMvY3JlYXRlLnBsYW5vZ3JhbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCx1QkFBd0QsaUJBQWlCLENBQUMsQ0FBQTtBQUMxRSxzQkFDMkQsZ0JBQWdCLENBQUMsQ0FBQTtBQUM1RSw4QkFBNkIseUJBQXlCLENBQUMsQ0FBQTtBQUN2RCxxQkFBcUIsUUFBUSxDQUFDLENBQUE7QUFDOUIsaUNBQThCLDhCQUE4QixDQUFDLENBQUE7QUFDN0QsbUNBQWdDLHNCQUFzQixDQUFDLENBQUE7QUFDdkQsNkJBQTBCLDhCQUE4QixDQUFDLENBQUE7QUFDekQscUJBQW1CLFFBQVEsQ0FBQyxDQUFBO0FBMkI1QjtJQXNCSSx5QkFBb0IsR0FBZ0IsRUFDaEIsYUFBMkIsRUFDM0IsT0FBZSxFQUNmLGtCQUFxQyxFQUNyQyxnQkFBaUMsRUFDakMsWUFBeUIsRUFDekIsS0FBbUI7UUFObkIsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUNoQixrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUMzQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQ2pDLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLFVBQUssR0FBTCxLQUFLLENBQWM7UUF2Qi9CLFVBQUssR0FBUSxFQUFFLENBQUM7UUFDaEIsY0FBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBTXRCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBSS9CLHFCQUFnQixHQUFHLEtBQUssQ0FBQztJQWF6QixDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLHNCQUFzQjtRQUN0QixJQUFJLEtBQUssR0FBUSxFQUFFLENBQUM7UUFDcEIsSUFBSSxJ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QkFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDaEQsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEVBQUMsS0FBSyxFQUFFLHFCQUFxQixFQUFFLE9BQU8sRUFBRSxvQ0FBb0MsRUFBQyxDQUFDLENBQUM7WUFDaEgsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0lBN1VMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUseUJBQXlCO1lBQ25DLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsVUFBVSxFQUFFLENBQUMsMEJBQWlCLEVBQUUsdUJBQWUsRUFBRSxnQ0FBd0IsQ0FBQztZQUMxRSxTQUFTLEVBQUUsQ0FBQyxtQkFBVyxDQUFDO1lBQ3hCLE1BQU0sRUFBRSxDQUFDLDZVQWdCUixDQUFDO1NBQ0wsQ0FBQzs7dUJBQUE7SUF3VEYsc0JBQUM7QUFBRCxDQXRUQSxBQXNUQyxJQUFBO0FBdFRZLHVCQUFlLGtCQXNUM0IsQ0FBQSIsImZpbGUiOiJwbGFub2dyYW1zL2NyZWF0ZS5wbGFub2dyYW0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyLCBST1VURVJfRElSRUNUSVZFUywgUm91dGVTZWdtZW50IH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGT1JNX0RJUkVDVElWRVMsIFJFQUNUSVZFX0ZPUk1fRElSRUNUSVZFUyxcclxuICAgIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgIHtFcnJvclNlcnZpY2UgfSBmcm9tIFwiLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU2xvdCB9IGZyb20gJy4vc2xvdCc7XHJcbmltcG9ydCB7UHJvZHVjdHNTZXJ2aWNlfSBmcm9tIFwiLi4vcHJvZHVjdHMvcHJvZHVjdHMuc2VydmljZVwiO1xyXG5pbXBvcnQge1BsYW5vZ3JhbXNTZXJ2aWNlfSBmcm9tIFwiLi9wbGFub2dyYW1zLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtJbmZvU2VydmljZX0gZnJvbSBcIi4uL2RpYWxvZ3MvaW5mby9pbmZvLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtUcmF5fSBmcm9tIFwiLi90cmF5XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ3ZlbmQtdmlld2FsbC1wbGFub2dyYW1zJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnY3JlYXRlLnBsYW5vZ3JhbS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFUywgUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTXSxcclxuICAgIHByb3ZpZGVyczogW0Zvcm1CdWlsZGVyXSxcclxuICAgIHN0eWxlczogW2BcclxuICAgICAgICAubGFiZWwge1xyXG4gICAgICAgICAgICBtYXJnaW46IDRweCA0cHggNHB4IDRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRyYXlMYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgICN0cmF5IHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAjc2xvdCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMzhweDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICBgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENyZWF0ZVBsYW5vZ3JhbSBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHJcbiAgICBwbGFub2dyYW1Gb3JtOiBGb3JtR3JvdXA7XHJcbiAgICBzbG90Rm9ybTogRm9ybUdyb3VwO1xyXG5cclxuICAgIHByaXZhdGUgdHJheXM6IGFueSA9IFtdO1xyXG4gICAgcHJpdmF0ZSB0cmF5c1NpemU6IG51bWJlciA9IDE7XHJcbiAgICBwcml2YXRlIHNsb3RzU2l6ZTogbnVtYmVyID0gMTtcclxuICAgIHByaXZhdGUgcHJvZHVjdHM6IFtwcm9kdWN0XTtcclxuXHJcbiAgICBwcml2YXRlIHNlbGVjdGVkU2xvdDogU2xvdDtcclxuICAgIHByaXZhdGUgc2VsZWN0ZWRQcm9kdWN0OiBhbnk7XHJcblxyXG4gICAgcHJpdmF0ZSBlZGl0UGxhbm9ncmFtID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGNyZWF0ZVBsYW5vZ3JhbSA9IHRydWU7XHJcblxyXG4gICAgcGxhbm9ncmFtOiBhbnk7XHJcbiAgICBlZGl0UGxhbm9ncmFtSWQ6IGFueTtcclxuICAgIHBsYW5vZ3JhbURlbGV0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIHNlbGVjdGVkUHJvZHVjdElkOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3BsYW5vZ3JhbXNTZXJ2aWNlOiBQbGFub2dyYW1zU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3Byb2R1Y3RzU2VydmljZTogUHJvZHVjdHNTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfaW5mb1NlcnZpY2U6IEluZm9TZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfY3VycjogUm91dGVTZWdtZW50XHJcbiAgICApIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgLy8gdGhpcy50cmF5c1swXSA9IFtdO1xyXG4gICAgICAgIGxldCBzbG90czogYW55ID0gW107XHJcbiAgICAgICAgbGV0IHNsb3QgPSBuZXcgU2xvdCgnQTAnLCAtMSwgMCwgMCk7XHJcbiAgICAgICAgc2xvdHMucHVzaChzbG90KTtcclxuICAgICAgICBsZXQgdHJheSA9IG5ldyBUcmF5KHNsb3RzKTtcclxuXHJcbiAgICAgICAgdGhpcy50cmF5cy5wdXNoKHRyYXkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdJbml0aWFsIHRyYXk6JywgdGhpcy50cmF5cyk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMudHJheXNbMF1bMF0gPSBuZXcgU2xvdCgnQTAnLCAtMSwgMCwgMCk7XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0UHJvZHVjdHMoKTtcclxuXHJcblxyXG4gICAgICAgIGxldCBpZCA9IHRoaXMuX2N1cnIuZ2V0UGFyYW0oJ2lkJyk7XHJcbiAgICAgICAgbGV0IHZpZXcgPSB0aGlzLl9jdXJyLmdldFBhcmFtKCd2aWV3Jyk7XHJcbiAgICAgICAgbGV0IHBsYW5vZ3JhbTogYW55O1xyXG4gICAgICAgIGxldCBwbGFub2dyYW1OYW1lOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICAgICAgaWYgKGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UGxhbm9ncmFtKGlkKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1ZpZXcgYSBwbGFub2dyYW0nKTtcclxuICAgICAgICAgICAgLy8gaWYgKHZpZXcpIHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuZWRpdFBsYW5vZ3JhbSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5lZGl0UGxhbm9ncmFtID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyBpZiAocGxhbm9ncmFtcylcclxuICAgICAgICAgICAgLy8gICAgIHBsYW5vZ3JhbXMgPSB0aGlzLnBsYW5vZ3JhbXMuZmlsdGVyKGZ1bmN0aW9uIChvYmopIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICByZXR1cm4gb2JqLl9pZCA9PSBpZDtcclxuICAgICAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmVkaXRQbGFub2dyYW1JZCA9IGlkO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVBsYW5vZ3JhbSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUGxhbm9ncmFtID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmIChwbGFub2dyYW1zICYmIHBsYW5vZ3JhbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIC8vICAgICBwbGFub2dyYW0gPSBwbGFub2dyYW1zWzBdO1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnUExBTk9HUkFNOiAnLCBwbGFub2dyYW0pO1xyXG4gICAgICAgIC8vICAgICBpZiAocGxhbm9ncmFtLmFjdGl2ZVN0YXRlID09IDIpIHRoaXMucGxhbm9ncmFtRGVsZXRlZCA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgIHBsYW5vZ3JhbU5hbWUgPSBwbGFub2dyYW0ubmFtZTtcclxuICAgICAgICAvLyAgICAgdGhpcy50cmF5cyA9IHBsYW5vZ3JhbS50cmF5cztcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ1RSQVlTOiAnLCB0aGlzLnRyYXlzKTtcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnQWRkIGEgcGxhbm9ncmFtJyk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZWRpdFBsYW5vZ3JhbSA9IGZhbHNlO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgdGhpcy5wbGFub2dyYW1Gb3JtID0gdGhpcy5fZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBuYW1lOiBbcGxhbm9ncmFtTmFtZSwgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLm1pbkxlbmd0aCgzKSxcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDMwKV0pXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNsb3RGb3JtID0gdGhpcy5fZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBuYW1lOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5taW5MZW5ndGgoMyksXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLm1heExlbmd0aCgzMCldKV0sXHJcbiAgICAgICAgICAgIHNsb3RDYXBhY2l0eTogWzAsIFZhbGlkYXRvcnMubnVsbFZhbGlkYXRvcl0sXHJcbiAgICAgICAgICAgIHByb2R1Y3RQcmljZTogWycnLCBWYWxpZGF0b3JzLm51bGxWYWxpZGF0b3JdLFxyXG4gICAgICAgICAgICBzbG90TmFtZTogWycnLCBWYWxpZGF0b3JzLm51bGxWYWxpZGF0b3JdXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgVHJheXM6ICcsIHRoaXMudHJheXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBsYW5vZ3JhbShwbGFub2dyYW1JZDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fcGxhbm9ncmFtc1NlcnZpY2UuZ2V0UGxhbm9ncmFtKHBsYW5vZ3JhbUlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhbm9ncmFtID0gZGF0YS5vYmo7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmF5cyA9IHRoaXMucGxhbm9ncmFtLnRyYXlzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJheXNTaXplID0gdGhpcy50cmF5cy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zbG90c1NpemUgPSB0aGlzLnRyYXlzWzBdLnNsb3RzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VkaXQgUGxhbm9ncmFtOiAnLCB0aGlzLnBsYW5vZ3JhbSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBsYW5vZ3JhbSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKDxGb3JtQ29udHJvbD50aGlzLnBsYW5vZ3JhbUZvcm0uY29udHJvbHNbJ25hbWUnXSkudXBkYXRlVmFsdWUodGhpcy5wbGFub2dyYW0ubmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UHJvZHVjdHMoKSB7XHJcbiAgICAgICAgdGhpcy5fcHJvZHVjdHNTZXJ2aWNlLmdldEFsbFByb2R1Y3RzKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdHMgPSBkYXRhLm9iai5wcm9kdWN0cztcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLl9wcm9kdWN0U2VydmljZS5wcm9kdWN0cyA9IHRoaXMucHJvZHVjdHM7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRMZXR0ZXIoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBsZXR0ZXJzOiBzdHJpbmcgW10gPSBbJ0EnLCAnQicsICdDJywgJ0QnLCAnRScsICdGJywgJ0cnLCAnSCcsICdJJywgJ0onLCAnSycsICdMJywgJ00nLCAnTicsICdPJywgJ1AnLCAnUScsICdSJywgJ1MnLCAnVCcsICdVJywgJ1YnLCAnVycsICdYJywgJ1knLCAnWiddO1xyXG4gICAgICAgIHdoaWxlIChpbmRleCA+IGxldHRlcnMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICBpbmRleCAtPSBsZXR0ZXJzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsZXR0ZXJzW2luZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICBvbkFkZFNsb3QoKSB7XHJcbiAgICAgICAgbGV0IHRyYXlzU2l6ZSA9IHRoaXMudHJheXMubGVuZ3RoO1xyXG4gICAgICAgIGxldCBpO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0cmF5c1NpemU7IGk9aSsxKSB7XHJcbiAgICAgICAgICAgIHZhciBuZXdOYW1lID0gdGhpcy5nZXRMZXR0ZXIoaSkgKyB0aGlzLnRyYXlzW2ldLnNsb3RzLmxlbmd0aC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB2YXIgbmV3U2xvdCA9IG5ldyBTbG90KG5ld05hbWUsIC0xLCAwLCAwKTtcclxuICAgICAgICAgICAgdGhpcy50cmF5c1tpXS5zbG90cy5wdXNoKG5ld1Nsb3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNsb3RzU2l6ZSA9IHRoaXMudHJheXNbMF0uc2xvdHMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQWRkVHJheSgpIHtcclxuXHJcbiAgICAgICAgbGV0IHNsb3RzU2l6ZSA9IHRoaXMudHJheXNbMF0uc2xvdHMubGVuZ3RoO1xyXG4gICAgICAgIGxldCBqO1xyXG5cclxuICAgICAgICBsZXQgc2xvdHM6IGFueSA9IFtdO1xyXG5cclxuICAgICAgICBsZXQgbGV0dGVyID0gdGhpcy5nZXRMZXR0ZXIodGhpcy50cmF5cy5sZW5ndGgpO1xyXG4gICAgICAgIGZvciAoaiA9IDA7IGogPCBzbG90c1NpemU7IGogPSBqKyAxKSB7XHJcbiAgICAgICAgICAgIHZhciBuZXdOYW1lID0gbGV0dGVyICsgai50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBsZXQgc2xvdCA9IG5ldyBTbG90KG5ld05hbWUsIC0xLCAwLCAwKTtcclxuICAgICAgICAgICAgc2xvdHMucHVzaChzbG90KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRyYXkgPSBuZXcgVHJheShzbG90cyk7XHJcbiAgICAgICAgdGhpcy50cmF5cy5wdXNoKHRyYXkpO1xyXG5cclxuICAgICAgICB0aGlzLnRyYXlzU2l6ZSA9IHRoaXMudHJheXMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgb25TbG90Q2xpY2tlZChzbG90OiBhbnkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnU0xPVCBDTElDS0VEOicsIHNsb3QpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRTbG90ID0gc2xvdDtcclxuICAgICAgICAoPEZvcm1Db250cm9sPnRoaXMuc2xvdEZvcm0uY29udHJvbHNbJ3Nsb3ROYW1lJ10pLnVwZGF0ZVZhbHVlKHNsb3QubmFtZSk7XHJcbiAgICAgICAgKDxGb3JtQ29udHJvbD50aGlzLnNsb3RGb3JtLmNvbnRyb2xzWydzbG90Q2FwYWNpdHknXSkudXBkYXRlVmFsdWUoc2xvdC5jYXBhY2l0eSk7XHJcbiAgICAgICAgKDxGb3JtQ29udHJvbD50aGlzLnNsb3RGb3JtLmNvbnRyb2xzWydwcm9kdWN0UHJpY2UnXSkudXBkYXRlVmFsdWUoc2xvdC5wcmljZSk7XHJcbiAgICAgICAgaWYgKHNsb3QucHJvZHVjdCAhPSAtMSkge1xyXG4gICAgICAgICAgICAoPEZvcm1Db250cm9sPnRoaXMuc2xvdEZvcm0uY29udHJvbHNbJ25hbWUnXSkudXBkYXRlVmFsdWUodGhpcy5nZXRQcm9kdWN0TmFtZShzbG90LnByb2R1Y3QpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFByb2R1Y3RJZCA9IHNsb3QucHJvZHVjdDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcm9kdWN0TmFtZShpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9ICcnO1xyXG4gICAgICAgIGxldCBwcm9kdWN0cyA9IHRoaXMucHJvZHVjdHM7XHJcbiAgICAgICAgaWYgKHByb2R1Y3RzICYmIGlkKSB7XHJcbiAgICAgICAgICAgIGxldCBwcmRjdCA9IHByb2R1Y3RzLmZpbHRlcihmdW5jdGlvbiAob2JqKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqLl9pZCA9PSBpZC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHByZGN0ICYmIHByZGN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHByZGN0WzBdLm5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBvblByb2R1Y3RDbGlja2VkKHByb2R1Y3Q6IHByb2R1Y3QpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9kdWN0KTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkUHJvZHVjdCA9IHByb2R1Y3Q7XHJcblxyXG4gICAgICAgICg8Rm9ybUNvbnRyb2w+dGhpcy5zbG90Rm9ybS5jb250cm9sc1snbmFtZSddKS51cGRhdGVWYWx1ZShwcm9kdWN0Lm5hbWUpO1xyXG4gICAgICAgIC8vICg8Q29udHJvbD50aGlzLnNsb3RGb3JtLmNvbnRyb2xzWydwcmljZSddKS51cGRhdGVWYWx1ZShwcm9kdWN0LnByaWNlKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkFzc2lnbigpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRTbG90ICYmIHRoaXMuc2VsZWN0ZWRQcm9kdWN0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU2xvdC5wcm9kdWN0ID0gdGhpcy5zZWxlY3RlZFByb2R1Y3QuX2lkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFNsb3QuY2FwYWNpdHkgPSB0aGlzLnNsb3RGb3JtLnZhbHVlLnNsb3RDYXBhY2l0eTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRTbG90LnByaWNlID0gdGhpcy5zbG90Rm9ybS52YWx1ZS5wcm9kdWN0UHJpY2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkU2xvdC5uYW1lID0gdGhpcy5zbG90Rm9ybS52YWx1ZS5zbG90TmFtZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zZWxlY3RlZFNsb3QgJiYgIXRoaXMuc2VsZWN0ZWRQcm9kdWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUGxlYXNlIHNlbGVjdCBhIFNsb3QgYW5kIGEgUHJvZHVjdCBpbiBvcmRlciB0byBhc3NpZ25cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbmZvU2VydmljZS5oYW5kbGVJbmZvKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdTZWxlY3Rpb24gbWlzc2luZyEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUGxlYXNlIHNlbGVjdCBhIFNsb3QgYW5kIGEgUHJvZHVjdCBpbiBvcmRlciB0byBhc3NpZ24nXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnNlbGVjdGVkU2xvdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFBsZWFzZSBzZWxlY3QgYSBTbG90IHRvIGFzc2lnbiB0aGUgc2VsZWN0ZWQgUHJvZHVjdFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2luZm9TZXJ2aWNlLmhhbmRsZUluZm8oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1NlbGVjdGlvbiBtaXNzaW5nIScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdQbGVhc2Ugc2VsZWN0IGEgU2xvdCB0byBhc3NpZ24gdGhlIHNlbGVjdGVkIFByb2R1Y3QnXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoIXRoaXMuc2VsZWN0ZWRQcm9kdWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUGxlYXNlIHNlbGVjdCBhIFByb2R1Y3QgdG8gYXNzaWduIHRvIHRoZSBzZWxlY3RlZCBTbG90XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5mb1NlcnZpY2UuaGFuZGxlSW5mbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnU2VsZWN0aW9uIG1pc3NpbmchJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1BsZWFzZSBzZWxlY3QgYSBQcm9kdWN0IHRvIGFzc2lnbiB0byB0aGUgc2VsZWN0ZWQgU2xvdCdcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2F2ZVBsYW5vZ3JhbSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnT24gc2F2ZSBwbGFub2dyYW0nKTtcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgYWxsIHNsb3RzIGFyZSBhc3NpZ25lZCB0byBwcm9kdWN0c1xyXG4gICAgICAgIGxldCBpLCBqO1xyXG4gICAgICAgIGxldCB1bmFzc2lnbmVkU2xvdEZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IHRyYXlzU2l6ZSA9IHRoaXMudHJheXMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0cmF5c1NpemU7IGk9aSsxKSB7XHJcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCB0aGlzLnRyYXlzW2ldLnNsb3RzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50cmF5c1tpXS5zbG90c1tqXS5wcm9kdWN0ID09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5hc3NpZ25lZFNsb3RGb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHVuYXNzaWduZWRTbG90Rm91bmQpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5mb1NlcnZpY2UuaGFuZGxlSW5mbyh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJVbmFzc2lnbmVkIHByb2R1Y3RcIixcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiVGhlcmUgaXMgdW5hc3NpZ25lZCBzbG90LiBQbGVhc2UsXFxuYXNzaWduIGFsbCBzbG90cyBiZWZvcmUgc2F2ZSFcIiB9KVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgcGxhbm9ncmFtOiBhbnkgPSB7XHJcbiAgICAgICAgICAgIF9pZDogdGhpcy5lZGl0UGxhbm9ncmFtSWQsXHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMucGxhbm9ncmFtRm9ybS52YWx1ZS5uYW1lLFxyXG4gICAgICAgICAgICB0cmF5czogdGhpcy50cmF5c1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5jcmVhdGVQbGFub2dyYW0pIHtcclxuICAgICAgICAgICAgdGhpcy5fcGxhbm9ncmFtc1NlcnZpY2UuZWRpdFBsYW5vZ3JhbShwbGFub2dyYW0pXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnREFUQSsrKzonLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL3ZpZXdhbGxwbGFub2dyYW1zJ10pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQWRkaW5nIGEgcGxhbm9ncmFtJyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3BsYW5vZ3JhbXNTZXJ2aWNlLmFkZFBsYW5vZ3JhbShwbGFub2dyYW0pXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnByb2R1Y3RzQ29tcG9uZW50LmdldFByb2R1Y3RzKCk7IC8vIFRPRE86IHRlbXBvcmFyeSBzdXNwZW5kZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL3ZpZXdhbGxwbGFub2dyYW1zJ10pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25SZW1vdmVUcmF5KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRyYXlzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgdGhpcy50cmF5cy5zcGxpY2UoLTEsIDEpO1xyXG4gICAgICAgICAgICB0aGlzLnRyYXlzU2l6ZSA9IHRoaXMudHJheXMubGVuZ3RoO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luZm9TZXJ2aWNlLmhhbmRsZUluZm8oe3RpdGxlOiAnUmVtb3ZlIHVuc3VjY2Vzc2Z1bCcsIG1lc3NhZ2U6ICdZb3UgY2FuIG5vdCByZW1vdmUgdGhlIGZpcnN0IHRyYXknfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uUmVtb3ZlU2xvdCgpIHtcclxuICAgICAgICBsZXQgaTtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy50cmF5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50cmF5c1tpXS5zbG90cy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyYXlzW2ldLnNsb3RzLnNwbGljZSgtMSwgMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsb3RzU2l6ZSA9IHRoaXMudHJheXNbMF0uc2xvdHMubGVuZ3RoO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faW5mb1NlcnZpY2UuaGFuZGxlSW5mbyh7dGl0bGU6ICdSZW1vdmUgdW5zdWNjZXNzZnVsJywgbWVzc2FnZTogJ1lvdSBjYW4gbm90IHJlbW92ZSB0aGUgZmlyc3Qgc2xvdHMnfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
