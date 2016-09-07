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
var router_1 = require("@angular/router");
var products_service_1 = require("./products.service");
var error_service_1 = require("../errors/error.service");
var AddProductComponent = (function () {
    //constructor(private _fb: FormBuilder,
    //            private _curr: RouteSegment,
    //            private _router: Router,
    //            private _productsService: ProductsService,
    //            private _errorService: ErrorService,
    //            @Host() @Inject(forwardRef(() => ProductsComponent)) productsComponent: ProductsComponent) {
    //    this.productsComponent = productsComponent;
    //}
    function AddProductComponent(_fb, _productsService, _errorService, _router, _curr) {
        this._fb = _fb;
        this._productsService = _productsService;
        this._errorService = _errorService;
        this._router = _router;
        this._curr = _curr;
        this.productDeleted = false;
        this.products = _productsService.products;
    }
    AddProductComponent.prototype.ngOnInit = function () {
        console.log('Hi everybody');
        var id = this._curr.getParam('id');
        var product;
        var products;
        var emptyProduct = {
            name: '',
            description: '',
            imageUrl: ''
        };
        if (id) {
            console.log('Edit a product');
            this.editProduct = true;
            products = this.products.filter(function (obj) {
                return obj._id == id;
            });
            this.editProductId = id;
        }
        if (products && products.length > 0) {
            product = products[0];
            if (product.activeState == 2)
                this.productDeleted = true;
        }
        else {
            console.log('Add a product');
            this.editProduct = false;
            product = emptyProduct;
        }
        this.addProductForm = this._fb.group({
            name: [product.name, forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(3),
                    forms_1.Validators.maxLength(30),
                ])],
            description: [product.description, forms_1.Validators.maxLength(500)],
            imageUrl: [product.imageUrl, forms_1.Validators.nullValidator]
        });
    };
    AddProductComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('On submit product');
        if (this.editProduct) {
            var editedProduct = this.addProductForm.value;
            editedProduct._id = this.editProductId;
            this._productsService.editProduct(editedProduct)
                .subscribe(function (data) {
                // this.productsComponent.getProducts(); // TODO: temporary suspended
                _this._router.navigate(['/manageproducts']);
            }, function (error) { return _this._errorService.handleError(error); });
        }
        else {
            console.log('Adding a product');
            this._productsService.addProduct(this.addProductForm.value)
                .subscribe(function (data) {
                // this.productsComponent.getProducts(); // TODO: temporary suspended
                _this._router.navigate(['/manageproducts']);
            }, function (error) { return _this._errorService.handleError(error); });
        }
    };
    AddProductComponent.prototype.onCancel = function () {
        this._router.navigate(['/manageproducts']);
    };
    AddProductComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'vend-add-product',
            templateUrl: 'add.product.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, forms_1.FORM_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES],
            providers: [forms_1.FormBuilder],
            styles: ["\n\n    "]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, products_service_1.ProductsService, error_service_1.ErrorService, router_1.Router, router_1.RouteSegment])
    ], AddProductComponent);
    return AddProductComponent;
}());
exports.AddProductComponent = AddProductComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RzL2FkZC5wcm9kdWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTRELGVBQWUsQ0FBQyxDQUFBO0FBRTVFLHNCQUMyRCxnQkFBZ0IsQ0FBQyxDQUFBO0FBRTVFLHVCQUF3RCxpQkFBaUIsQ0FBQyxDQUFBO0FBQzFFLGlDQUE4QixvQkFBb0IsQ0FBQyxDQUFBO0FBQ25ELDhCQUEyQix5QkFBeUIsQ0FBQyxDQUFBO0FBYXJEO0lBU0ksdUNBQXVDO0lBQ3ZDLDBDQUEwQztJQUMxQyxzQ0FBc0M7SUFDdEMsd0RBQXdEO0lBQ3hELGtEQUFrRDtJQUNsRCwwR0FBMEc7SUFDMUcsaURBQWlEO0lBQ2pELEdBQUc7SUFFSCw2QkFBb0IsR0FBZ0IsRUFDaEIsZ0JBQWlDLEVBQ2pDLGFBQTJCLEVBQzNCLE9BQWUsRUFDZixLQUFtQjtRQUpuQixRQUFHLEdBQUgsR0FBRyxDQUFhO1FBQ2hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFDakMsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLFVBQUssR0FBTCxLQUFLLENBQWM7UUFoQnZDLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBaUJuQixJQUFJLENBQUMsUUFBUSxHQUFHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztJQUM5QyxDQUFDO0lBR0Qsc0NBQVEsR0FBUjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsSUFBSSxPQUFPLENBQUM7UUFDWixJQUFJLFFBQVEsQ0FBQztRQUNiLElBQUksWUFBWSxHQUFHO1lBQ2YsSUFBSSxFQUFFLEVBQUU7WUFDUixXQUFXLEVBQUUsRUFBRTtZQUNmLFFBQVEsRUFBRSxFQUFFO1NBQ2YsQ0FBQztRQUVGLEVBQUUs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SyxDQUFDLEVBQXJDLENBQXFDLENBQ2pELENBQUM7UUFDVixDQUFDO0lBQ0wsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUUvQyxDQUFDO0lBNUdMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsVUFBVSxFQUFFLENBQUMsMEJBQWlCLEVBQUUsdUJBQWUsRUFBRSxnQ0FBd0IsQ0FBQztZQUMxRSxTQUFTLEVBQUUsQ0FBQyxtQkFBVyxDQUFDO1lBQ3hCLE1BQU0sRUFBRSxDQUFDLFVBRVIsQ0FBQztTQUNMLENBQUM7OzJCQUFBO0lBc0dGLDBCQUFDO0FBQUQsQ0FwR0EsQUFvR0MsSUFBQTtBQXBHWSwyQkFBbUIsc0JBb0cvQixDQUFBIiwiZmlsZSI6InByb2R1Y3RzL2FkZC5wcm9kdWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBIb3N0LCBmb3J3YXJkUmVmLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEZPUk1fRElSRUNUSVZFUywgUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTLFxyXG4gICAgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBSb3V0ZXIsIFJPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZVNlZ21lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7UHJvZHVjdHNTZXJ2aWNlfSBmcm9tIFwiLi9wcm9kdWN0cy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7RXJyb3JTZXJ2aWNlfSBmcm9tIFwiLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAndmVuZC1hZGQtcHJvZHVjdCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2FkZC5wcm9kdWN0LmNvbXBvbmVudC5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgRk9STV9ESVJFQ1RJVkVTLCBSRUFDVElWRV9GT1JNX0RJUkVDVElWRVNdLFxyXG4gICAgcHJvdmlkZXJzOiBbRm9ybUJ1aWxkZXJdLFxyXG4gICAgc3R5bGVzOiBbYFxyXG5cclxuICAgIGBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQWRkUHJvZHVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgcHJpdmF0ZSBwcm9kdWN0czogW3Byb2R1Y3RdO1xyXG5cclxuICAgIGVkaXRQcm9kdWN0OiBib29sZWFuO1xyXG4gICAgZWRpdFByb2R1Y3RJZDogc3RyaW5nO1xyXG4gICAgcHJvZHVjdERlbGV0ZWQgPSBmYWxzZTtcclxuICAgIGFkZFByb2R1Y3RGb3JtOiBGb3JtR3JvdXA7XHJcblxyXG4gICAgLy9jb25zdHJ1Y3Rvcihwcml2YXRlIF9mYjogRm9ybUJ1aWxkZXIsXHJcbiAgICAvLyAgICAgICAgICAgIHByaXZhdGUgX2N1cnI6IFJvdXRlU2VnbWVudCxcclxuICAgIC8vICAgICAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAvLyAgICAgICAgICAgIHByaXZhdGUgX3Byb2R1Y3RzU2VydmljZTogUHJvZHVjdHNTZXJ2aWNlLFxyXG4gICAgLy8gICAgICAgICAgICBwcml2YXRlIF9lcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSxcclxuICAgIC8vICAgICAgICAgICAgQEhvc3QoKSBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gUHJvZHVjdHNDb21wb25lbnQpKSBwcm9kdWN0c0NvbXBvbmVudDogUHJvZHVjdHNDb21wb25lbnQpIHtcclxuICAgIC8vICAgIHRoaXMucHJvZHVjdHNDb21wb25lbnQgPSBwcm9kdWN0c0NvbXBvbmVudDtcclxuICAgIC8vfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZiOiBGb3JtQnVpbGRlcixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3Byb2R1Y3RzU2VydmljZTogUHJvZHVjdHNTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfZXJyb3JTZXJ2aWNlOiBFcnJvclNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2N1cnI6IFJvdXRlU2VnbWVudCkge1xyXG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSBfcHJvZHVjdHNTZXJ2aWNlLnByb2R1Y3RzO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnSGkgZXZlcnlib2R5Jyk7XHJcbiAgICAgICAgbGV0IGlkID0gdGhpcy5fY3Vyci5nZXRQYXJhbSgnaWQnKTtcclxuICAgICAgICBsZXQgcHJvZHVjdDtcclxuICAgICAgICBsZXQgcHJvZHVjdHM7XHJcbiAgICAgICAgbGV0IGVtcHR5UHJvZHVjdCA9IHtcclxuICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgICAgICAgaW1hZ2VVcmw6ICcnXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKGlkKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFZGl0IGEgcHJvZHVjdCcpO1xyXG4gICAgICAgICAgICB0aGlzLmVkaXRQcm9kdWN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgcHJvZHVjdHMgPSB0aGlzLnByb2R1Y3RzLmZpbHRlcihmdW5jdGlvbiAob2JqKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqLl9pZCA9PSBpZDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuZWRpdFByb2R1Y3RJZCA9IGlkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByb2R1Y3RzICYmIHByb2R1Y3RzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcHJvZHVjdCA9IHByb2R1Y3RzWzBdO1xyXG4gICAgICAgICAgICBpZiAocHJvZHVjdC5hY3RpdmVTdGF0ZSA9PSAyKSB0aGlzLnByb2R1Y3REZWxldGVkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQWRkIGEgcHJvZHVjdCcpO1xyXG4gICAgICAgICAgICB0aGlzLmVkaXRQcm9kdWN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHByb2R1Y3QgPSBlbXB0eVByb2R1Y3Q7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5hZGRQcm9kdWN0Rm9ybSA9IHRoaXMuX2ZiLmdyb3VwKHtcclxuICAgICAgICAgICAgbmFtZTogW3Byb2R1Y3QubmFtZSwgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLm1pbkxlbmd0aCgzKSxcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDMwKSxcclxuICAgICAgICAgICAgXSldLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogW3Byb2R1Y3QuZGVzY3JpcHRpb24sIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDUwMCldLFxyXG4gICAgICAgICAgICBpbWFnZVVybDogW3Byb2R1Y3QuaW1hZ2VVcmwsIFZhbGlkYXRvcnMubnVsbFZhbGlkYXRvcl1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnT24gc3VibWl0IHByb2R1Y3QnKTtcclxuICAgICAgICBpZiAodGhpcy5lZGl0UHJvZHVjdCkge1xyXG4gICAgICAgICAgICBsZXQgZWRpdGVkUHJvZHVjdCA9IHRoaXMuYWRkUHJvZHVjdEZvcm0udmFsdWU7XHJcbiAgICAgICAgICAgIGVkaXRlZFByb2R1Y3QuX2lkID0gdGhpcy5lZGl0UHJvZHVjdElkO1xyXG4gICAgICAgICAgICB0aGlzLl9wcm9kdWN0c1NlcnZpY2UuZWRpdFByb2R1Y3QoZWRpdGVkUHJvZHVjdClcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucHJvZHVjdHNDb21wb25lbnQuZ2V0UHJvZHVjdHMoKTsgLy8gVE9ETzogdGVtcG9yYXJ5IHN1c3BlbmRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvbWFuYWdlcHJvZHVjdHMnXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBZGRpbmcgYSBwcm9kdWN0Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2R1Y3RzU2VydmljZS5hZGRQcm9kdWN0KHRoaXMuYWRkUHJvZHVjdEZvcm0udmFsdWUpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnByb2R1Y3RzQ29tcG9uZW50LmdldFByb2R1Y3RzKCk7IC8vIFRPRE86IHRlbXBvcmFyeSBzdXNwZW5kZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL21hbmFnZXByb2R1Y3RzJ10pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DYW5jZWwoKSB7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL21hbmFnZXByb2R1Y3RzJ10pO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
