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
var core_1 = require("@angular/core");
var forms_1 = require('@angular/forms');
var user_1 = require("./user");
var auth_service_1 = require("./auth.service");
var error_service_1 = require("../errors/error.service");
var emailValidators_1 = require('../validators/emailValidators');
var SignupComponent = (function () {
    function SignupComponent(_fb, _authService, _errorService) {
        this._fb = _fb;
        this._authService = _authService;
        this._errorService = _errorService;
    }
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        var date = new Date(); // TODO: time should be UTC, this date will be ignored for now, it will be generated at the time of creating on the server
        var user = new user_1.User('', this.myForm.value.username, this.myForm.value.password, this.myForm.value.email, 0, // User role,
        0, // Active state,
        date, date, false, // deleted
        this.myForm.value.companyName, this.myForm.value.firstName, this.myForm.value.lastName, this.myForm.value.companyAddress, '');
        console.log(user);
        this._authService.signup(user)
            .subscribe(function (data) { return console.log(data); }, function (error) { return _this._errorService.handleError(error); });
    };
    SignupComponent.prototype.ngOnInit = function () {
        this.myForm = this._fb.group({
            username: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    emailValidators_1.EmailValidators.isEmail
                ])],
            companyName: ['', forms_1.Validators.required],
            firstName: ['', forms_1.Validators.nullValidator],
            lastName: ['', forms_1.Validators.nullValidator],
            companyAddress: ['', forms_1.Validators.nullValidator]
        });
    };
    SignupComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-signup',
            templateUrl: 'signup.component.html',
            styleUrls: ['signup.component.css'],
            directives: [forms_1.FORM_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES],
            providers: [forms_1.FormBuilder]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, auth_service_1.AuthService, error_service_1.ErrorService])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhvcml6YXRpb24vc2lnbnVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHNCQUM4QyxnQkFBZ0IsQ0FBQyxDQUFBO0FBQy9ELHFCQUFxQixRQUFRLENBQUMsQ0FBQTtBQUM5Qiw2QkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUM3Qyw4QkFBNkIseUJBQXlCLENBQUMsQ0FBQTtBQUN2RCxnQ0FBZ0MsK0JBQStCLENBQUMsQ0FBQTtBQVVoRTtJQUdJLHlCQUFvQixHQUFlLEVBQVUsWUFBeUIsRUFBVSxhQUEyQjtRQUF2RixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBYztJQUFHLENBQUM7SUFFL0csa0NBQVEsR0FBUjtRQUFBLGlCQXNCQztRQXJCRCxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsMEhBQTBIO1FBQzdJLElBQU0sSUFBSSxHQUFHLElBQUksV0FBSSxDQUFHLEVBQUUsRUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUN2QixDQUFDLEVBQUUsYUFBYTtRQUNoQixDQUFDLEVBQUUsZ0JBQWdCO1FBQ25CLElBQUksRUFDSixJQUFJLEVBQ0osS0FBSyxFQUFFLFVBQVU7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUNoQyxFQUFFLENBQUMsQ0FBQztRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzthQUN6QixTQUFTLENBQ04sVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFqQixDQUFpQixFQUN6QixVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFyQyxDQUFxQyxDQUNqRCxDQUFBO0lBQ1QsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ3pCLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNuQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDbkMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsT0FBTyxDQUFDO29CQUMzQixrQkFBVSxDQUFDLFFBQVE7b0JBQ25CLGlDQUFlLENBQUMsT0FBTztpQkFDMUIsQ0FBQyxDQUFDO1lBQ0gsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLGFBQWEsQ0FBQztZQUN6QyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsa0JBQVUsQ0FBQyxhQUFhLENBQUM7WUFDeEMsY0FBYyxFQUFFLENBQUMsRUFBRSxFQUFFLGtCQUFVLENBQUMsYUFBYSxDQUFDO1NBQ2pELENBQUMsQ0FBQztJQUNQLENBQUM7SUFsREw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7WUFDbkMsVUFBVSxFQUFFLENBQUMsdUJBQWUsRUFBRSxnQ0FBd0IsQ0FBQztZQUN2RCxTQUFTLEVBQUUsQ0FBQyxtQkFBVyxDQUFDO1NBQzNCLENBQUM7O3VCQUFBO0lBNENGLHNCQUFDO0FBQUQsQ0EzQ0EsQUEyQ0MsSUFBQTtBQTNDWSx1QkFBZSxrQkEyQzNCLENBQUEiLCJmaWxlIjoiYXV0aG9yaXphdGlvbi9zaWdudXAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBGT1JNX0RJUkVDVElWRVMsIFJFQUNUSVZFX0ZPUk1fRElSRUNUSVZFUyxcclxuICAgIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi91c2VyXCI7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIi4vYXV0aC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gXCIuLi9lcnJvcnMvZXJyb3Iuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBFbWFpbFZhbGlkYXRvcnMgfSBmcm9tICcuLi92YWxpZGF0b3JzL2VtYWlsVmFsaWRhdG9ycyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ215LXNpZ251cCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3NpZ251cC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnc2lnbnVwLmNvbXBvbmVudC5jc3MnXSxcclxuICAgIGRpcmVjdGl2ZXM6IFtGT1JNX0RJUkVDVElWRVMsIFJFQUNUSVZFX0ZPUk1fRElSRUNUSVZFU10sXHJcbiAgICBwcm92aWRlcnM6IFtGb3JtQnVpbGRlcl1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZ251cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBteUZvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mYjpGb3JtQnVpbGRlciwgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIF9lcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSkge31cclxuXHJcbiAgICBvblN1Ym1pdCgpIHtcclxuICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTsgLy8gVE9ETzogdGltZSBzaG91bGQgYmUgVVRDLCB0aGlzIGRhdGUgd2lsbCBiZSBpZ25vcmVkIGZvciBub3csIGl0IHdpbGwgYmUgZ2VuZXJhdGVkIGF0IHRoZSB0aW1lIG9mIGNyZWF0aW5nIG9uIHRoZSBzZXJ2ZXJcclxuICAgICAgICBjb25zdCB1c2VyID0gbmV3IFVzZXIoICAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybS52YWx1ZS51c2VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybS52YWx1ZS5wYXNzd29yZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybS52YWx1ZS5lbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLCAvLyBVc2VyIHJvbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCwgLy8gQWN0aXZlIHN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSwgLy8gZGVsZXRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLmNvbXBhbnlOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLmZpcnN0TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybS52YWx1ZS5sYXN0TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15Rm9ybS52YWx1ZS5jb21wYW55QWRkcmVzcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcik7XHJcbiAgICAgICAgdGhpcy5fYXV0aFNlcnZpY2Uuc2lnbnVwKHVzZXIpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxyXG4gICAgICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5teUZvcm0gPSB0aGlzLl9mYi5ncm91cCh7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXHJcbiAgICAgICAgICAgICAgICBFbWFpbFZhbGlkYXRvcnMuaXNFbWFpbFxyXG4gICAgICAgICAgICBdKV0sXHJcbiAgICAgICAgICAgIGNvbXBhbnlOYW1lOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBmaXJzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5udWxsVmFsaWRhdG9yXSxcclxuICAgICAgICAgICAgbGFzdE5hbWU6IFsnJywgVmFsaWRhdG9ycy5udWxsVmFsaWRhdG9yXSxcclxuICAgICAgICAgICAgY29tcGFueUFkZHJlc3M6IFsnJywgVmFsaWRhdG9ycy5udWxsVmFsaWRhdG9yXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
