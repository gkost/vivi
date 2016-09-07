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
var user_service_1 = require("./user.service");
var error_service_1 = require("../errors/error.service");
// import NumberFormat = Intl.NumberFormat;
var add_user_component_1 = require("./add.user.component");
var info_service_1 = require('../dialogs/info/info.service');
var confirmation_service_1 = require("../dialogs/confirmation/confirmation.service");
require('rxjs/Rx');
var utils_service_1 = require("../utils.service");
var UsersComponent = (function () {
    function UsersComponent(_router, _userService, _errorService, _infoService, _confirmationService, _utilsService) {
        this._router = _router;
        this._userService = _userService;
        this._errorService = _errorService;
        this._infoService = _infoService;
        this._confirmationService = _confirmationService;
        this._utilsService = _utilsService;
        this.alreadyServed = false;
    }
    UsersComponent.prototype.onAddUser = function () {
        console.log('Trying to navigate');
        // this._router.navigateByUrl('/users/adduser');
        this._router.navigate(['/users/adduser']);
    };
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("On init Hook working...");
        this.getUsers();
        this.alreadyServed = true;
        this._confirmationService.responseOccured
            .subscribe(function (data) {
            _this._callback(data);
        }, function (error) { return _this._errorService.handleError(error); });
    };
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this._userService.getAllUsers()
            .subscribe(function (data) {
            //console.log('Subscribed data: ');
            console.log(data);
            _this.users = data.obj;
            // this._router.navigate['/users'];
        }, function (error) { return _this._errorService.handleError(error); });
    };
    UsersComponent.prototype.convertToState = function (value) {
        return this._utilsService.convertToState(value);
    };
    UsersComponent.prototype.convertToRole = function (value) {
        return this._utilsService.convertToRole(value);
    };
    UsersComponent.prototype.onEdit = function (user) {
        console.log("On edit, id: " + user._id);
        this._router.navigate(['/users/adduser', user._id]);
    };
    UsersComponent.prototype.onActivate = function (user) {
        var loggedUserId = localStorage.getItem('userId');
        if (user._id == loggedUserId) {
            this._infoService.handleInfo({ 'title': 'Operation information', 'message': 'You cannot activate/deactivate your own profile' });
            return;
        }
        if (user.activeState == 2) {
            // Inform the logged user that selected user is already deleted
            this._infoService.handleInfo({ 'title': 'Operation information', 'message': 'You cannot activate/deactivate already deleted profiles' });
            return;
        }
        this._confirmationService.handleInfo({ 'title': 'Operation information', 'message': 'trying to activate/deactivate id: ' + user._id });
        this._callback = function (responseValue) {
            var _this = this;
            if (responseValue.response == true) {
                // The logged user has agreed to delete the selected user from the list
                this._userService.updateUser(user._id, 1)
                    .subscribe(function (data) {
                    user.activeState = data;
                }, function (error) { return _this._errorService.handleError(error); });
                if (user.activeState == 0)
                    user.activeState = 1;
                else if (user.activeState == 1)
                    user.activeState = 0;
            }
        };
    };
    UsersComponent.prototype.onDelete = function (user) {
        // Check if you are trying to delete your own profile
        var loggedUserId = localStorage.getItem('userId');
        if (user._id == loggedUserId) {
            this._infoService.handleInfo({ 'title': 'Operation information', 'message': 'You cannot delete your own profile' });
            return;
        }
        if (user.activeState == 2) {
            // Inform the logged user that selected user is already deleted
            this._infoService.handleInfo({ 'title': 'Operation information', 'message': 'You cannot delete already deleted profiles' });
            return;
        }
        this._confirmationService.handleInfo({ 'title': 'Operation information', 'message': 'trying to delete id: ' + user._id });
        this._callback = function (responseValue) {
            var _this = this;
            if (responseValue.response == true) {
                // The logged user has agreed to delete the selected user from the list
                this._userService.updateUser(user._id, 2)
                    .subscribe(function (data) {
                    user.activeState = data;
                }, function (error) { return _this._errorService.handleError(error); });
                user.activeState = 2;
            }
        };
    };
    UsersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'vend-users',
            templateUrl: 'users.component.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            styles: ["\n\n    "]
        }),
        router_1.Routes([
            { path: 'adduser/:id', component: add_user_component_1.AddUserComponent },
            { path: 'adduser', component: add_user_component_1.AddUserComponent }
        ]), 
        __metadata('design:paramtypes', [router_1.Router, user_service_1.UserService, error_service_1.ErrorService, info_service_1.InfoService, confirmation_service_1.ConfirmationService, utils_service_1.UtilsService])
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;

//# sourceMappingURL=data:application/json;base64,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QkFjaEI7WUFiRyxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2pDLHVFQUF1RTtnQkFDdkUsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7cUJBQ3BDLFNBQVMsQ0FDTixVQUFBLElBQUk7b0JBQ0EsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Z0JBQzVCLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFyQyxDQUFxQyxDQUNqRCxDQUFDO2dCQUVOLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1lBQ3pCLENBQUM7UUFFTCxDQUFDLENBQUM7SUFDTixDQUFDO0lBeklMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsc0JBQXNCO1lBQ25DLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO1lBQy9CLE1BQU0sRUFBRSxDQUFDLFVBRVIsQ0FBQztTQUNMLENBQUM7UUFFRCxlQUFNLENBQUM7WUFDSixFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLHFDQUFnQixFQUFFO1lBQ3BELEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUscUNBQWdCLEVBQUU7U0FFbkQsQ0FBQzs7c0JBQUE7SUE4SEYscUJBQUM7QUFBRCxDQTVIQSxBQTRIQyxJQUFBO0FBNUhZLHNCQUFjLGlCQTRIMUIsQ0FBQSIsImZpbGUiOiJ1c2Vycy91c2Vycy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIFJPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtVc2VyU2VydmljZX0gZnJvbSBcIi4vdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4uL2F1dGhvcml6YXRpb24vdXNlclwiO1xyXG5pbXBvcnQge0Vycm9yU2VydmljZX0gZnJvbSBcIi4uL2Vycm9ycy9lcnJvci5zZXJ2aWNlXCI7XHJcbi8vIGltcG9ydCBOdW1iZXJGb3JtYXQgPSBJbnRsLk51bWJlckZvcm1hdDtcclxuaW1wb3J0IHtBZGRVc2VyQ29tcG9uZW50fSBmcm9tIFwiLi9hZGQudXNlci5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSW5mb1NlcnZpY2UgfSBmcm9tICcuLi9kaWFsb2dzL2luZm8vaW5mby5zZXJ2aWNlJztcclxuaW1wb3J0IHtDb25maXJtYXRpb25TZXJ2aWNlfSBmcm9tIFwiLi4vZGlhbG9ncy9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0ICdyeGpzL1J4JztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHtVdGlsc1NlcnZpY2V9IGZyb20gXCIuLi91dGlscy5zZXJ2aWNlXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICd2ZW5kLXVzZXJzJyxcclxuICAgIHRlbXBsYXRlVXJsOiAndXNlcnMuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcclxuICAgIHN0eWxlczogW2BcclxuXHJcbiAgICBgXVxyXG59KVxyXG5cclxuQFJvdXRlcyhbXHJcbiAgICB7IHBhdGg6ICdhZGR1c2VyLzppZCcsIGNvbXBvbmVudDogQWRkVXNlckNvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiAnYWRkdXNlcicsIGNvbXBvbmVudDogQWRkVXNlckNvbXBvbmVudCB9XHJcblxyXG5dKVxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBhbHJlYWR5U2VydmVkID0gZmFsc2U7XHJcblxyXG4gICAgX2NhbGxiYWNrOiBhbnk7XHJcblxyXG4gICAgcHVibGljIHVzZXJzOiBbVXNlcl07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIF91c2VyU2VydmljZTogVXNlclNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9lcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2luZm9TZXJ2aWNlOiBJbmZvU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2NvbmZpcm1hdGlvblNlcnZpY2U6IENvbmZpcm1hdGlvblNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIF91dGlsc1NlcnZpY2U6IFV0aWxzU2VydmljZSkge31cclxuICAgIG9uQWRkVXNlcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnVHJ5aW5nIHRvIG5hdmlnYXRlJyk7XHJcbiAgICAgICAgLy8gdGhpcy5fcm91dGVyLm5hdmlnYXRlQnlVcmwoJy91c2Vycy9hZGR1c2VyJyk7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL3VzZXJzL2FkZHVzZXInXSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJPbiBpbml0IEhvb2sgd29ya2luZy4uLlwiKTtcclxuICAgICAgICB0aGlzLmdldFVzZXJzKCk7XHJcbiAgICAgICAgdGhpcy5hbHJlYWR5U2VydmVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5fY29uZmlybWF0aW9uU2VydmljZS5yZXNwb25zZU9jY3VyZWRcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXNlcnMoKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlclNlcnZpY2UuZ2V0QWxsVXNlcnMoKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnU3Vic2NyaWJlZCBkYXRhOiAnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJzID0gZGF0YS5vYmo7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5fcm91dGVyLm5hdmlnYXRlWycvdXNlcnMnXTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29udmVydFRvU3RhdGUodmFsdWU6IE51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91dGlsc1NlcnZpY2UuY29udmVydFRvU3RhdGUodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnZlcnRUb1JvbGUodmFsdWU6IE51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91dGlsc1NlcnZpY2UuY29udmVydFRvUm9sZSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FZGl0KHVzZXI6IFVzZXIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk9uIGVkaXQsIGlkOiBcIiArIHVzZXIuX2lkKTtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvdXNlcnMvYWRkdXNlcicsIHVzZXIuX2lkXSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25BY3RpdmF0ZSh1c2VyOiBVc2VyKSB7XHJcblxyXG4gICAgICAgIGxldCBsb2dnZWRVc2VySWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcklkJyk7XHJcbiAgICAgICAgaWYgKHVzZXIuX2lkID09IGxvZ2dlZFVzZXJJZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbmZvU2VydmljZS5oYW5kbGVJbmZvKHsndGl0bGUnOiAnT3BlcmF0aW9uIGluZm9ybWF0aW9uJywgJ21lc3NhZ2UnOiAnWW91IGNhbm5vdCBhY3RpdmF0ZS9kZWFjdGl2YXRlIHlvdXIgb3duIHByb2ZpbGUnfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1c2VyLmFjdGl2ZVN0YXRlID09IDIpIHtcclxuICAgICAgICAgICAgLy8gSW5mb3JtIHRoZSBsb2dnZWQgdXNlciB0aGF0IHNlbGVjdGVkIHVzZXIgaXMgYWxyZWFkeSBkZWxldGVkXHJcbiAgICAgICAgICAgIHRoaXMuX2luZm9TZXJ2aWNlLmhhbmRsZUluZm8oeyd0aXRsZSc6ICdPcGVyYXRpb24gaW5mb3JtYXRpb24nLCAnbWVzc2FnZSc6ICdZb3UgY2Fubm90IGFjdGl2YXRlL2RlYWN0aXZhdGUgYWxyZWFkeSBkZWxldGVkIHByb2ZpbGVzJ30pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2NvbmZpcm1hdGlvblNlcnZpY2UuaGFuZGxlSW5mbyh7J3RpdGxlJzogJ09wZXJhdGlvbiBpbmZvcm1hdGlvbicsICdtZXNzYWdlJzogJ3RyeWluZyB0byBhY3RpdmF0ZS9kZWFjdGl2YXRlIGlkOiAnICsgdXNlci5faWR9KTtcclxuICAgICAgICB0aGlzLl9jYWxsYmFjayA9IGZ1bmN0aW9uIChyZXNwb25zZVZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZVZhbHVlLnJlc3BvbnNlID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIC8vIFRoZSBsb2dnZWQgdXNlciBoYXMgYWdyZWVkIHRvIGRlbGV0ZSB0aGUgc2VsZWN0ZWQgdXNlciBmcm9tIHRoZSBsaXN0XHJcbiAgICAgICAgICAgICAgICB0aGlzLl91c2VyU2VydmljZS51cGRhdGVVc2VyKHVzZXIuX2lkLCAxKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlci5hY3RpdmVTdGF0ZSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgaWYgKHVzZXIuYWN0aXZlU3RhdGUgPT0gMCkgdXNlci5hY3RpdmVTdGF0ZSA9IDE7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh1c2VyLmFjdGl2ZVN0YXRlID09IDEpIHVzZXIuYWN0aXZlU3RhdGUgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlbGV0ZSh1c2VyOiBVc2VyKSB7XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGlmIHlvdSBhcmUgdHJ5aW5nIHRvIGRlbGV0ZSB5b3VyIG93biBwcm9maWxlXHJcbiAgICAgICAgbGV0IGxvZ2dlZFVzZXJJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKTtcclxuICAgICAgICBpZiAodXNlci5faWQgPT0gbG9nZ2VkVXNlcklkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luZm9TZXJ2aWNlLmhhbmRsZUluZm8oeyd0aXRsZSc6ICdPcGVyYXRpb24gaW5mb3JtYXRpb24nLCAnbWVzc2FnZSc6ICdZb3UgY2Fubm90IGRlbGV0ZSB5b3VyIG93biBwcm9maWxlJ30pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodXNlci5hY3RpdmVTdGF0ZSA9PSAyKSB7XHJcbiAgICAgICAgICAgIC8vIEluZm9ybSB0aGUgbG9nZ2VkIHVzZXIgdGhhdCBzZWxlY3RlZCB1c2VyIGlzIGFscmVhZHkgZGVsZXRlZFxyXG4gICAgICAgICAgICB0aGlzLl9pbmZvU2VydmljZS5oYW5kbGVJbmZvKHsndGl0bGUnOiAnT3BlcmF0aW9uIGluZm9ybWF0aW9uJywgJ21lc3NhZ2UnOiAnWW91IGNhbm5vdCBkZWxldGUgYWxyZWFkeSBkZWxldGVkIHByb2ZpbGVzJ30pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2NvbmZpcm1hdGlvblNlcnZpY2UuaGFuZGxlSW5mbyh7J3RpdGxlJzogJ09wZXJhdGlvbiBpbmZvcm1hdGlvbicsICdtZXNzYWdlJzogJ3RyeWluZyB0byBkZWxldGUgaWQ6ICcgKyB1c2VyLl9pZH0pO1xyXG4gICAgICAgIHRoaXMuX2NhbGxiYWNrID0gZnVuY3Rpb24gKHJlc3BvbnNlVmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlVmFsdWUucmVzcG9uc2UgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gVGhlIGxvZ2dlZCB1c2VyIGhhcyBhZ3JlZWQgdG8gZGVsZXRlIHRoZSBzZWxlY3RlZCB1c2VyIGZyb20gdGhlIGxpc3RcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VzZXJTZXJ2aWNlLnVwZGF0ZVVzZXIodXNlci5faWQsIDIpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyLmFjdGl2ZVN0YXRlID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgdXNlci5hY3RpdmVTdGF0ZSA9IDI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
