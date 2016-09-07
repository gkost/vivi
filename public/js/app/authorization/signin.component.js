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
// import { ControlGroup, FormBuilder, Validators } from "@angular/common";
var forms_1 = require('@angular/forms');
var router_1 = require("@angular/router");
// import { User } from "./user";
var auth_service_1 = require("./auth.service");
var error_service_1 = require("../errors/error.service");
var user_login_1 = require("./user.login");
var SigninComponent = (function () {
    function SigninComponent(_fb, _authService, _router, _errorService) {
        this._fb = _fb;
        this._authService = _authService;
        this._router = _router;
        this._errorService = _errorService;
    }
    SigninComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = new user_login_1.UserLogIn(this.myForm.value.username, this.myForm.value.password);
        this._authService.signin(user)
            .subscribe(function (data) {
            localStorage.setItem('vendingToken', data.token);
            localStorage.setItem('userId', data.userId);
            _this._router.navigateByUrl('/');
        }, function (error) { return _this._errorService.handleError(error); });
    };
    SigninComponent.prototype.ngOnInit = function () {
        this.myForm = this._fb.group({
            username: [''],
            password: ['']
        });
    };
    SigninComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-signin',
            templateUrl: 'signin.component.html',
            styleUrls: ['signin.component.css'],
            directives: [forms_1.FORM_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES],
            providers: [forms_1.FormBuilder]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, auth_service_1.AuthService, router_1.Router, error_service_1.ErrorService])
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhvcml6YXRpb24vc2lnbmluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELDJFQUEyRTtBQUMzRSxzQkFDbUQsZ0JBQWdCLENBQUMsQ0FBQTtBQUNwRSx1QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQUV6QyxpQ0FBaUM7QUFDakMsNkJBQTRCLGdCQUFnQixDQUFDLENBQUE7QUFDN0MsOEJBQTZCLHlCQUF5QixDQUFDLENBQUE7QUFDdkQsMkJBQXdCLGNBQWMsQ0FBQyxDQUFBO0FBVXZDO0lBR0kseUJBQW9CLEdBQWdCLEVBQ2hCLFlBQXlCLEVBQ3pCLE9BQWUsRUFDZixhQUEyQjtRQUgzQixRQUFHLEdBQUgsR0FBRyxDQUFhO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixrQkFBYSxHQUFiLGFBQWEsQ0FBYztJQUFHLENBQUM7SUFJbkQsa0NBQVEsR0FBUjtRQUFBLGlCQVdDO1FBVkcsSUFBTSxJQUFJLEdBQUcsSUFBSSxzQkFBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuRixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7YUFDekIsU0FBUyxDQUNOLFVBQUEsSUFBSTtZQUNBLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqRCxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXJDLENBQXFDLENBQ2pELENBQUM7SUFDVixDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDekIsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ2QsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDO1NBQ2pCLENBQUMsQ0FBQztJQUNQLENBQUM7SUFyQ0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7WUFDbkMsVUFBVSxFQUFFLENBQUMsdUJBQWUsRUFBRSxnQ0FBd0IsQ0FBQztZQUN2RCxTQUFTLEVBQUUsQ0FBQyxtQkFBVyxDQUFDO1NBQzNCLENBQUM7O3VCQUFBO0lBZ0NGLHNCQUFDO0FBQUQsQ0E5QkEsQUE4QkMsSUFBQTtBQTlCWSx1QkFBZSxrQkE4QjNCLENBQUEiLCJmaWxlIjoiYXV0aG9yaXphdGlvbi9zaWduaW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG4vLyBpbXBvcnQgeyBDb250cm9sR3JvdXAsIEZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBGT1JNX0RJUkVDVElWRVMsIFJFQUNUSVZFX0ZPUk1fRElSRUNUSVZFUyxcclxuICAgICAgICAgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuLy8gaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3VzZXJcIjtcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tIFwiLi9hdXRoLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRXJyb3JTZXJ2aWNlIH0gZnJvbSBcIi4uL2Vycm9ycy9lcnJvci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7VXNlckxvZ0lufSBmcm9tIFwiLi91c2VyLmxvZ2luXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnbXktc2lnbmluJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnc2lnbmluLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWydzaWduaW4uY29tcG9uZW50LmNzcyddLFxyXG4gICAgZGlyZWN0aXZlczogW0ZPUk1fRElSRUNUSVZFUywgUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTXSxcclxuICAgIHByb3ZpZGVyczogW0Zvcm1CdWlsZGVyXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZ25pbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBteUZvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mYjogRm9ybUJ1aWxkZXIsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2Vycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlKSB7fVxyXG5cclxuXHJcblxyXG4gICAgb25TdWJtaXQoKSB7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IG5ldyBVc2VyTG9nSW4odGhpcy5teUZvcm0udmFsdWUudXNlcm5hbWUsIHRoaXMubXlGb3JtLnZhbHVlLnBhc3N3b3JkKTtcclxuICAgICAgICB0aGlzLl9hdXRoU2VydmljZS5zaWduaW4odXNlcilcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd2ZW5kaW5nVG9rZW4nLCBkYXRhLnRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcklkJywgZGF0YS51c2VySWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMubXlGb3JtID0gdGhpcy5fZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgICB1c2VybmFtZTogWycnXSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IFsnJ11cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
