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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var forms_1 = require('@angular/forms');
// import { User } from "../authorization/user";
var auth_service_1 = require("../authorization/auth.service");
var error_service_1 = require("../errors/error.service");
var usernameValidators_1 = require('../validators/usernameValidators');
var emailValidators_1 = require('../validators/emailValidators');
var user_service_1 = require('./user.service');
// import { Location } from '@angular/common';
var users_component_1 = require("./users.component");
// import { UserLogIn } from "../authorization/user.login";
var AddUserComponent = (function () {
    function AddUserComponent(_fb, _authService, _userService, _errorService, _router, _curr, users) {
        this._fb = _fb;
        this._authService = _authService;
        this._userService = _userService;
        this._errorService = _errorService;
        this._router = _router;
        this._curr = _curr;
        this.userDeleted = false;
        this.sameUser = false;
        this.usersComponent = users;
    }
    AddUserComponent.prototype.ngOnInit = function () {
        var id = this._curr.getParam('id');
        var user;
        var users;
        var passwordValidators;
        var emptyUser = {
            username: '',
            password: '',
            userRole: 0,
            email: '',
            firstName: '',
            lastName: '',
            activeState: 0,
            notes: ''
        };
        if (id) {
            console.log(this.usersComponent.users);
            users = this.usersComponent.users.filter(function (obj) {
                return obj._id == id;
            });
            this.editUserId = id;
        }
        if (users && users.length > 0) {
            user = users[0];
            if (user.activeState == 2)
                this.userDeleted = true;
            var loggedUserId = localStorage.getItem('userId');
            if (user._id == loggedUserId)
                this.sameUser = true;
            this.editUser = true;
            passwordValidators = forms_1.Validators.nullValidator;
        }
        else {
            this.editUser = false;
            user = emptyUser;
            passwordValidators = forms_1.Validators.compose([
                forms_1.Validators.required,
                forms_1.Validators.minLength(4),
                forms_1.Validators.maxLength(24)
            ]);
        }
        this.myForm = this._fb.group({
            username: [user.username, forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(3),
                    forms_1.Validators.maxLength(30),
                    usernameValidators_1.UsernameValidators.cannotContainSpace
                ]), usernameValidators_1.UsernameValidators.shouldBeUnique],
            password: ['', passwordValidators],
            userRole: [user.userRole, forms_1.Validators.required],
            email: [user.email, forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.maxLength(250),
                    emailValidators_1.EmailValidators.isEmail
                ])],
            firstName: [user.firstName, forms_1.Validators.maxLength(30)],
            lastName: [user.lastName, forms_1.Validators.maxLength(30)],
            activeState: [user.activeState, forms_1.Validators.required],
            notes: [user.notes, forms_1.Validators.maxLength(500)]
        });
    };
    AddUserComponent.prototype.onSubmit = function (value) {
        var _this = this;
        if (this.editUser) {
            var editedUser = this.myForm.value;
            editedUser._id = this.editUserId;
            this._userService.editUser(editedUser)
                .subscribe(function (data) {
                _this.usersComponent.getUsers();
                _this._router.navigate(['/users']);
            }, function (error) { return _this._errorService.handleError(error); });
        }
        else {
            this._userService.addUser(this.myForm.value)
                .subscribe(function (data) {
                _this.usersComponent.getUsers();
                _this._router.navigate(['/users']);
            }, function (error) { return _this._errorService.handleError(error); });
        }
    };
    AddUserComponent.prototype.onCancel = function () {
        console.log('On Cancel');
        this._router.navigateByUrl('/users');
    };
    AddUserComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'vend-add-user',
            templateUrl: 'add.user.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, forms_1.FORM_DIRECTIVES, forms_1.REACTIVE_FORM_DIRECTIVES],
            providers: [forms_1.FormBuilder],
            styles: ["\n        .backdrop {\n            background-color: rgba(0,0,0,0.6);\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100vh;\n        }\n    "]
        }),
        __param(6, core_1.Host()),
        __param(6, core_1.Inject(core_1.forwardRef(function () { return users_component_1.UsersComponent; }))), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, auth_service_1.AuthService, user_service_1.UserService, error_service_1.ErrorService, router_1.Router, router_1.RouteSegment, users_component_1.UsersComponent])
    ], AddUserComponent);
    return AddUserComponent;
}());
exports.AddUserComponent = AddUserComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzL2FkZC51c2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEscUJBQTRELGVBQWUsQ0FBQyxDQUFBO0FBRTVFLHVCQUF3RCxpQkFBaUIsQ0FBQyxDQUFBO0FBRTFFLHNCQUMyRCxnQkFBZ0IsQ0FBQyxDQUFBO0FBRTVFLGdEQUFnRDtBQUNoRCw2QkFBNEIsK0JBQStCLENBQUMsQ0FBQTtBQUM1RCw4QkFBNkIseUJBQXlCLENBQUMsQ0FBQTtBQUN2RCxtQ0FBbUMsa0NBQWtDLENBQUMsQ0FBQTtBQUN0RSxnQ0FBZ0MsK0JBQStCLENBQUMsQ0FBQTtBQUNoRSw2QkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUM3Qyw4Q0FBOEM7QUFDOUMsZ0NBQStCLG1CQUFtQixDQUFDLENBQUE7QUFDbkQsMkRBQTJEO0FBcUIzRDtJQVdJLDBCQUFvQixHQUFnQixFQUNoQixZQUF5QixFQUN6QixZQUF5QixFQUN6QixhQUEyQixFQUMzQixPQUFlLEVBQ2YsS0FBbUIsRUFDdUIsS0FBcUI7UUFOL0QsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUNoQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUMzQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsVUFBSyxHQUFMLEtBQUssQ0FBYztRQVR2QyxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBVVQsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDcEMsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFDSSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxJQUFJLElBQUksQ0FBQztRQUNULElBQUksS0FBSyxDQUFDO1FBQ1YsSUFBSSxrQkFBa0IsQ0FBQztRQUN2QixJ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LEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBckMsQ0FBcUMsQ0FDakQsQ0FBQztRQUNWLENBQUM7SUFDTCxDQUFDO0lBRUQsbUNBQVEsR0FBUjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQWhJTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsRUFBRSx1QkFBZSxFQUFFLGdDQUF3QixDQUFDO1lBQzFFLFNBQVMsRUFBRSxDQUFDLG1CQUFXLENBQUM7WUFDeEIsTUFBTSxFQUFFLENBQUMsdU5BU1IsQ0FBQztTQUNMLENBQUM7bUJBb0JlLFdBQUksRUFBRTttQkFBRSxhQUFNLENBQUMsaUJBQVUsQ0FBQyxjQUFNLE9BQUEsZ0NBQWMsRUFBZCxDQUFjLENBQUMsQ0FBQzs7d0JBcEIvRDtJQW1IRix1QkFBQztBQUFELENBaEhBLEFBZ0hDLElBQUE7QUFoSFksd0JBQWdCLG1CQWdINUIsQ0FBQSIsImZpbGUiOiJ1c2Vycy9hZGQudXNlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSG9zdCwgZm9yd2FyZFJlZiwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBSb3V0ZXIsIFJPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZVNlZ21lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBGT1JNX0RJUkVDVElWRVMsIFJFQUNUSVZFX0ZPUk1fRElSRUNUSVZFUyxcclxuICAgIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuLy8gaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9hdXRob3JpemF0aW9uL3VzZXJcIjtcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tIFwiLi4vYXV0aG9yaXphdGlvbi9hdXRoLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRXJyb3JTZXJ2aWNlIH0gZnJvbSBcIi4uL2Vycm9ycy9lcnJvci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFVzZXJuYW1lVmFsaWRhdG9ycyB9IGZyb20gJy4uL3ZhbGlkYXRvcnMvdXNlcm5hbWVWYWxpZGF0b3JzJztcclxuaW1wb3J0IHsgRW1haWxWYWxpZGF0b3JzIH0gZnJvbSAnLi4vdmFsaWRhdG9ycy9lbWFpbFZhbGlkYXRvcnMnO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vdXNlci5zZXJ2aWNlJztcclxuLy8gaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBVc2Vyc0NvbXBvbmVudCB9IGZyb20gXCIuL3VzZXJzLmNvbXBvbmVudFwiO1xyXG4vLyBpbXBvcnQgeyBVc2VyTG9nSW4gfSBmcm9tIFwiLi4vYXV0aG9yaXphdGlvbi91c2VyLmxvZ2luXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ3ZlbmQtYWRkLXVzZXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhZGQudXNlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFUywgUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTXSxcclxuICAgIHByb3ZpZGVyczogW0Zvcm1CdWlsZGVyXSxcclxuICAgIHN0eWxlczogW2BcclxuICAgICAgICAuYmFja2Ryb3Age1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNik7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICB9XHJcbiAgICBgXVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBBZGRVc2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0XHJcbntcclxuICAgIHVzZXJzQ29tcG9uZW50OiBVc2Vyc0NvbXBvbmVudDtcclxuXHJcbiAgICBlZGl0VXNlcjogYm9vbGVhbjtcclxuICAgIGVkaXRVc2VySWQ6IHN0cmluZztcclxuXHJcbiAgICB1c2VyRGVsZXRlZCA9IGZhbHNlO1xyXG4gICAgc2FtZVVzZXIgPSBmYWxzZTtcclxuXHJcbiAgICBteUZvcm06IEZvcm1Hcm91cDtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZiOiBGb3JtQnVpbGRlcixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3VzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2Vycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9jdXJyOiBSb3V0ZVNlZ21lbnQsXHJcbiAgICAgICAgICAgICAgICBASG9zdCgpIEBJbmplY3QoZm9yd2FyZFJlZigoKSA9PiBVc2Vyc0NvbXBvbmVudCkpIHVzZXJzOiBVc2Vyc0NvbXBvbmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJzQ29tcG9uZW50ID0gdXNlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgbGV0IGlkID0gdGhpcy5fY3Vyci5nZXRQYXJhbSgnaWQnKTtcclxuICAgICAgICBsZXQgdXNlcjtcclxuICAgICAgICBsZXQgdXNlcnM7XHJcbiAgICAgICAgbGV0IHBhc3N3b3JkVmFsaWRhdG9ycztcclxuICAgICAgICBsZXQgZW1wdHlVc2VyID0ge1xyXG4gICAgICAgICAgICB1c2VybmFtZTogJycsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJyxcclxuICAgICAgICAgICAgdXNlclJvbGU6IDAsXHJcbiAgICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgICAgZmlyc3ROYW1lOiAnJyxcclxuICAgICAgICAgICAgbGFzdE5hbWU6ICcnLFxyXG4gICAgICAgICAgICBhY3RpdmVTdGF0ZTogMCxcclxuICAgICAgICAgICAgbm90ZXM6ICcnXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoaWQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy51c2Vyc0NvbXBvbmVudC51c2Vycyk7XHJcbiAgICAgICAgICAgIHVzZXJzID0gdGhpcy51c2Vyc0NvbXBvbmVudC51c2Vycy5maWx0ZXIoZnVuY3Rpb24gKG9iaikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iai5faWQgPT0gaWQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmVkaXRVc2VySWQgPSBpZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHVzZXJzICYmIHVzZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdXNlciA9IHVzZXJzWzBdO1xyXG4gICAgICAgICAgICBpZiAodXNlci5hY3RpdmVTdGF0ZSA9PSAyKSB0aGlzLnVzZXJEZWxldGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgbGV0IGxvZ2dlZFVzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh1c2VyLl9pZCA9PSBsb2dnZWRVc2VySWQpIHRoaXMuc2FtZVVzZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmVkaXRVc2VyID0gdHJ1ZTtcclxuICAgICAgICAgICAgcGFzc3dvcmRWYWxpZGF0b3JzID0gVmFsaWRhdG9ycy5udWxsVmFsaWRhdG9yO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWRpdFVzZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgdXNlciA9IGVtcHR5VXNlcjtcclxuICAgICAgICAgICAgcGFzc3dvcmRWYWxpZGF0b3JzID0gVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLm1pbkxlbmd0aCg0KSxcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDI0KVxyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubXlGb3JtID0gdGhpcy5fZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgICB1c2VybmFtZTogW3VzZXIudXNlcm5hbWUsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5taW5MZW5ndGgoMyksXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLm1heExlbmd0aCgzMCksXHJcbiAgICAgICAgICAgICAgICBVc2VybmFtZVZhbGlkYXRvcnMuY2Fubm90Q29udGFpblNwYWNlXHJcbiAgICAgICAgICAgIF0pLCBVc2VybmFtZVZhbGlkYXRvcnMuc2hvdWxkQmVVbmlxdWVdLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogWycnLCBwYXNzd29yZFZhbGlkYXRvcnNdLFxyXG4gICAgICAgICAgICB1c2VyUm9sZTogW3VzZXIudXNlclJvbGUsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxyXG4gICAgICAgICAgICBlbWFpbDogW3VzZXIuZW1haWwsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMjUwKSxcclxuICAgICAgICAgICAgICAgIEVtYWlsVmFsaWRhdG9ycy5pc0VtYWlsXHJcbiAgICAgICAgICAgIF0pXSxcclxuICAgICAgICAgICAgZmlyc3ROYW1lOiBbdXNlci5maXJzdE5hbWUsIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDMwKV0sXHJcbiAgICAgICAgICAgIGxhc3ROYW1lOiBbdXNlci5sYXN0TmFtZSwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMzApXSxcclxuICAgICAgICAgICAgYWN0aXZlU3RhdGU6IFt1c2VyLmFjdGl2ZVN0YXRlLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuICAgICAgICAgICAgbm90ZXM6IFt1c2VyLm5vdGVzLCBWYWxpZGF0b3JzLm1heExlbmd0aCg1MDApXVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3VibWl0KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5lZGl0VXNlcikge1xyXG4gICAgICAgICAgICBsZXQgZWRpdGVkVXNlciA9IHRoaXMubXlGb3JtLnZhbHVlO1xyXG4gICAgICAgICAgICBlZGl0ZWRVc2VyLl9pZCA9IHRoaXMuZWRpdFVzZXJJZDtcclxuICAgICAgICAgICAgdGhpcy5fdXNlclNlcnZpY2UuZWRpdFVzZXIoZWRpdGVkVXNlcilcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXNlcnNDb21wb25lbnQuZ2V0VXNlcnMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL3VzZXJzJ10pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl91c2VyU2VydmljZS5hZGRVc2VyKHRoaXMubXlGb3JtLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51c2Vyc0NvbXBvbmVudC5nZXRVc2VycygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvdXNlcnMnXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNhbmNlbCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnT24gQ2FuY2VsJyk7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoJy91c2VycycpO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
