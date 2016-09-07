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
var products_service_1 = require("./products.service");
var error_service_1 = require("../errors/error.service");
var info_service_1 = require('../dialogs/info/info.service');
var confirmation_service_1 = require("../dialogs/confirmation/confirmation.service");
var ProductsComponent = (function () {
    function ProductsComponent(_router, _productService, _errorService, _infoService, _confirmationService) {
        this._router = _router;
        this._productService = _productService;
        this._errorService = _errorService;
        this._infoService = _infoService;
        this._confirmationService = _confirmationService;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getProducts();
        this._confirmationService.responseOccured
            .subscribe(function (data) {
            _this._callback(data);
        }, function (error) { return _this._errorService.handleError(error); });
    };
    ProductsComponent.prototype.onAddProduct = function () {
        this._router.navigate(['/addproduct']);
    };
    ProductsComponent.prototype.getProducts = function () {
        var _this = this;
        this._productService.getAllProducts()
            .subscribe(function (data) {
            // console.log(data);
            _this.products = data.obj.products;
            _this._productService.products = _this.products;
        }, function (error) { return _this._errorService.handleError(error); });
    };
    ProductsComponent.prototype.convertToState = function (value) {
        switch (value) {
            case 0:
                return 'acitve';
            case 1:
                return 'deactivated';
            case 2:
                return 'deleted';
        }
    };
    ProductsComponent.prototype.onEdit = function (product) {
        console.log('Edit: ', product);
        this._router.navigate(['/addproduct', product._id]);
    };
    ProductsComponent.prototype.onActivate = function (product) {
        if (product.activeState == 2) {
            // Inform the logged user that selected user is already deleted
            this._infoService.handleInfo({ 'title': 'Operation information', 'message': 'You cannot activate/deactivate already deleted products' });
            return;
        }
        this._confirmationService.handleInfo({ 'title': 'Operation information', 'message': 'trying to activate/deactivate id: ' + product._id });
        this._callback = function (responseValue) {
            var _this = this;
            if (responseValue.response == true) {
                // The logged user has agreed to delete the selected user from the list
                this._productService.updateProduct(product._id, 1)
                    .subscribe(function (data) {
                    product.activeState = data;
                }, function (error) { return _this._errorService.handleError(error); });
                if (product.activeState == 0)
                    product.activeState = 1;
                else if (product.activeState == 1)
                    product.activeState = 0;
            }
        };
    };
    ProductsComponent.prototype.onDelete = function (product) {
        if (product.activeState == 2) {
            // Inform the logged user that selected user is already deleted
            this._infoService.handleInfo({ 'title': 'Operation information', 'message': 'You cannot delete already deleted products' });
            return;
        }
        this._confirmationService.handleInfo({ 'title': 'Operation information', 'message': 'trying to delete id: ' + product._id });
        this._callback = function (responseValue) {
            var _this = this;
            if (responseValue.response == true) {
                // The logged user has agreed to delete the selected product from the list
                this._productService.updateProduct(product._id, 2)
                    .subscribe(function (data) {
                    product.activeState = data;
                }, function (error) { return _this._errorService.handleError(error); });
                product.activeState = 2;
            }
        };
    };
    ProductsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'vend-products',
            templateUrl: 'products.company.component.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            styles: ["\n\n    "]
        }), 
        __metadata('design:paramtypes', [router_1.Router, products_service_1.ProductsService, error_service_1.ErrorService, info_service_1.InfoService, confirmation_service_1.ConfirmationService])
    ], ProductsComponent);
    return ProductsComponent;
}());
exports.ProductsComponent = ProductsComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RzL3Byb2R1Y3RzLmNvbXBhbnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsdUJBQXdELGlCQUFpQixDQUFDLENBQUE7QUFDMUUsaUNBQThCLG9CQUFvQixDQUFDLENBQUE7QUFDbkQsOEJBQTJCLHlCQUF5QixDQUFDLENBQUE7QUFDckQsNkJBQTRCLDhCQUE4QixDQUFDLENBQUE7QUFDM0QscUNBQWtDLDhDQUE4QyxDQUFDLENBQUE7QUFZakY7SUFLSSwyQkFBb0IsT0FBZSxFQUNmLGVBQWdDLEVBQ2hDLGFBQTJCLEVBQzNCLFlBQXlCLEVBQ3pCLG9CQUF5QztRQUp6QyxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2Ysb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBcUI7SUFBRyxDQUFDO0lBRWpFLG9DQUFRLEdBQVI7UUFBQSxpQkFVQztRQVRHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVuQixJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZTthQUNwQyxTQUFTLENBQ04sVUFBQSxJQUFJO1lBQ0EsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBckMsQ0FBcUMsQ0FDakQsQ0FBQztJQUNWLENBQUM7SUFFRCx3Q0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCx1Q0FBVyxHQUFYO1FBQUEsaUJBVUM7UUFURyxJQUFJLENBQUMsZUFBZSxDQUFD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QyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsRUFBQyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDO1FBQzNILElBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxhQUFhO1lBQXZCLGlCQWNoQjtZQWJHLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDakMsMEVBQTBFO2dCQUMxRSxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztxQkFDN0MsU0FBUyxDQUNOLFVBQUEsSUFBSTtvQkFDQSxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztnQkFDL0IsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXJDLENBQXFDLENBQ2pELENBQUM7Z0JBRU4sT0FBTyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7WUFDNUIsQ0FBQztRQUVMLENBQUMsQ0FBQztJQUNOLENBQUM7SUFoSEw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7WUFDL0IsTUFBTSxFQUFFLENBQUMsVUFFUixDQUFDO1NBQ0wsQ0FBQzs7eUJBQUE7SUEwR0Ysd0JBQUM7QUFBRCxDQXhHQSxBQXdHQyxJQUFBO0FBeEdZLHlCQUFpQixvQkF3RzdCLENBQUEiLCJmaWxlIjoicHJvZHVjdHMvcHJvZHVjdHMuY29tcGFueS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIFJPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZVNlZ21lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7UHJvZHVjdHNTZXJ2aWNlfSBmcm9tIFwiLi9wcm9kdWN0cy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7RXJyb3JTZXJ2aWNlfSBmcm9tIFwiLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSW5mb1NlcnZpY2UgfSBmcm9tICcuLi9kaWFsb2dzL2luZm8vaW5mby5zZXJ2aWNlJztcclxuaW1wb3J0IHtDb25maXJtYXRpb25TZXJ2aWNlfSBmcm9tIFwiLi4vZGlhbG9ncy9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAndmVuZC1wcm9kdWN0cycsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3Byb2R1Y3RzLmNvbXBhbnkuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcclxuICAgIHN0eWxlczogW2BcclxuXHJcbiAgICBgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFByb2R1Y3RzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBwcml2YXRlIHByb2R1Y3RzOiBbcHJvZHVjdF07XHJcbiAgICBfY2FsbGJhY2s6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3Byb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0c1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9lcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2luZm9TZXJ2aWNlOiBJbmZvU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2NvbmZpcm1hdGlvblNlcnZpY2U6IENvbmZpcm1hdGlvblNlcnZpY2UpIHt9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRQcm9kdWN0cygpO1xyXG5cclxuICAgICAgICB0aGlzLl9jb25maXJtYXRpb25TZXJ2aWNlLnJlc3BvbnNlT2NjdXJlZFxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQWRkUHJvZHVjdCgpIHtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvYWRkcHJvZHVjdCddKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcm9kdWN0cygpIHtcclxuICAgICAgICB0aGlzLl9wcm9kdWN0U2VydmljZS5nZXRBbGxQcm9kdWN0cygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gZGF0YS5vYmoucHJvZHVjdHM7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHJvZHVjdFNlcnZpY2UucHJvZHVjdHMgPSB0aGlzLnByb2R1Y3RzO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb252ZXJ0VG9TdGF0ZSh2YWx1ZTogTnVtYmVyKSB7XHJcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2FjaXR2ZSc7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnZGVhY3RpdmF0ZWQnO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2RlbGV0ZWQnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkVkaXQocHJvZHVjdDogcHJvZHVjdCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdFZGl0OiAnLCBwcm9kdWN0KTtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvYWRkcHJvZHVjdCcsIHByb2R1Y3QuX2lkXSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uQWN0aXZhdGUocHJvZHVjdDogcHJvZHVjdCkge1xyXG5cclxuICAgICAgICBpZiAocHJvZHVjdC5hY3RpdmVTdGF0ZSA9PSAyKSB7XHJcbiAgICAgICAgICAgIC8vIEluZm9ybSB0aGUgbG9nZ2VkIHVzZXIgdGhhdCBzZWxlY3RlZCB1c2VyIGlzIGFscmVhZHkgZGVsZXRlZFxyXG4gICAgICAgICAgICB0aGlzLl9pbmZvU2VydmljZS5oYW5kbGVJbmZvKHsndGl0bGUnOiAnT3BlcmF0aW9uIGluZm9ybWF0aW9uJywgJ21lc3NhZ2UnOiAnWW91IGNhbm5vdCBhY3RpdmF0ZS9kZWFjdGl2YXRlIGFscmVhZHkgZGVsZXRlZCBwcm9kdWN0cyd9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jb25maXJtYXRpb25TZXJ2aWNlLmhhbmRsZUluZm8oeyd0aXRsZSc6ICdPcGVyYXRpb24gaW5mb3JtYXRpb24nLCAnbWVzc2FnZSc6ICd0cnlpbmcgdG8gYWN0aXZhdGUvZGVhY3RpdmF0ZSBpZDogJyArIHByb2R1Y3QuX2lkfSk7XHJcbiAgICAgICAgdGhpcy5fY2FsbGJhY2sgPSBmdW5jdGlvbiAocmVzcG9uc2VWYWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2VWYWx1ZS5yZXNwb25zZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGUgbG9nZ2VkIHVzZXIgaGFzIGFncmVlZCB0byBkZWxldGUgdGhlIHNlbGVjdGVkIHVzZXIgZnJvbSB0aGUgbGlzdFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvZHVjdFNlcnZpY2UudXBkYXRlUHJvZHVjdChwcm9kdWN0Ll9pZCwgMSlcclxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuYWN0aXZlU3RhdGUgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9kdWN0LmFjdGl2ZVN0YXRlID09IDApIHByb2R1Y3QuYWN0aXZlU3RhdGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvZHVjdC5hY3RpdmVTdGF0ZSA9PSAxKSBwcm9kdWN0LmFjdGl2ZVN0YXRlID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgb25EZWxldGUocHJvZHVjdDogcHJvZHVjdCkge1xyXG4gICAgICAgIGlmIChwcm9kdWN0LmFjdGl2ZVN0YXRlID09IDIpIHtcclxuICAgICAgICAgICAgLy8gSW5mb3JtIHRoZSBsb2dnZWQgdXNlciB0aGF0IHNlbGVjdGVkIHVzZXIgaXMgYWxyZWFkeSBkZWxldGVkXHJcbiAgICAgICAgICAgIHRoaXMuX2luZm9TZXJ2aWNlLmhhbmRsZUluZm8oeyd0aXRsZSc6ICdPcGVyYXRpb24gaW5mb3JtYXRpb24nLCAnbWVzc2FnZSc6ICdZb3UgY2Fubm90IGRlbGV0ZSBhbHJlYWR5IGRlbGV0ZWQgcHJvZHVjdHMnfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY29uZmlybWF0aW9uU2VydmljZS5oYW5kbGVJbmZvKHsndGl0bGUnOiAnT3BlcmF0aW9uIGluZm9ybWF0aW9uJywgJ21lc3NhZ2UnOiAndHJ5aW5nIHRvIGRlbGV0ZSBpZDogJyArIHByb2R1Y3QuX2lkfSk7XHJcbiAgICAgICAgdGhpcy5fY2FsbGJhY2sgPSBmdW5jdGlvbiAocmVzcG9uc2VWYWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2VWYWx1ZS5yZXNwb25zZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGUgbG9nZ2VkIHVzZXIgaGFzIGFncmVlZCB0byBkZWxldGUgdGhlIHNlbGVjdGVkIHByb2R1Y3QgZnJvbSB0aGUgbGlzdFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvZHVjdFNlcnZpY2UudXBkYXRlUHJvZHVjdChwcm9kdWN0Ll9pZCwgMilcclxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuYWN0aXZlU3RhdGUgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0LmFjdGl2ZVN0YXRlID0gMjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
