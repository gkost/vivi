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
/**
 * Created by go6 on 6/20/2016.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var navbar_component_1 = require("./navbar/navbar.component");
var error_component_1 = require('./errors/error.component');
var signin_component_1 = require("./authorization/signin.component");
var users_component_1 = require("./users/users.component");
var signup_component_1 = require("./authorization/signup.component");
var info_small_component_1 = require("./dialogs/info/info.small.component");
var confirmation_dialog_component_1 = require("./dialogs/confirmation/confirmation.dialog.component");
var viewall_machines_component_1 = require("./machines/viewall.machines.component");
var add_address_machines_component_1 = require("./machines/add.address.machines.component");
var products_company_component_1 = require("./products/products.company.component");
var add_product_component_1 = require("./products/add.product.component");
var view_machine_component_1 = require("./machines/view.machine.component");
var view_planograms_component_1 = require("./planograms/view.planograms.component");
var create_planogram_component_1 = require("./planograms/create.planogram.component");
var view_manual_service_machine_component_1 = require("./machines/view.manual.service.machine.component");
var analytics_machine_component_1 = require("./machines/analytics/analytics.machine.component");
var view_all_routes_component_1 = require("./routes/view.all.routes.component/view.all.routes.component");
var create_route_component_1 = require("./routes/create.route.component/create.route.component");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, navbar_component_1.NavBarComponent, error_component_1.ErrorComponent, info_small_component_1.InfoSmallComponent, confirmation_dialog_component_1.ConfirmationComponent]
        }),
        router_1.Routes([
            { path: '/', component: signin_component_1.SigninComponent },
            { path: '/users', component: users_component_1.UsersComponent },
            { path: '/signup', component: signup_component_1.SignupComponent },
            { path: '/signin', component: signin_component_1.SigninComponent },
            { path: '/viewallmachines', component: viewall_machines_component_1.ViewAllMachines },
            { path: '/addaddressmachines', component: add_address_machines_component_1.AddAddressMachines },
            { path: '/manageproducts', component: products_company_component_1.ProductsComponent },
            { path: '/addproduct/:id', component: add_product_component_1.AddProductComponent },
            { path: '/addproduct', component: add_product_component_1.AddProductComponent },
            { path: '/viewmachine', component: view_machine_component_1.ViewMachineComponent },
            { path: '/viewallplanograms', component: view_planograms_component_1.ViewPlanograms },
            { path: '/createplanogram/:id', component: create_planogram_component_1.CreatePlanogram },
            { path: '/createplanogram', component: create_planogram_component_1.CreatePlanogram },
            { path: '/viewplanogram', component: create_planogram_component_1.CreatePlanogram },
            { path: '/viewallroutes', component: view_all_routes_component_1.ViewAllRoutes },
            { path: '/createroute/:id', component: create_route_component_1.CreateRoute },
            { path: '/createroute', component: create_route_component_1.CreateRoute },
            // { path: '/viewroute', component: CreateRoute },
            { path: '/viewmachinemanualservice/:id', component: view_manual_service_machine_component_1.ViewMachineComponentManualService },
            { path: '/machineanalytics/:id/:name/:streetAddress', component: analytics_machine_component_1.MachineAnalyticsComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,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RUFBRSxvQ0FBVyxFQUFFO1lBQ2hELGtEQUFrRDtZQUNsRCxFQUFFLElBQUksRUFBRSwrQkFBK0IsRUFBRSxTQUFTLEVBQUUseUVBQWlDLEVBQUU7WUFDdkYsRUFBRSxJQUFJLEVBQUUsNENBQTRDLEVBQUUsU0FBUyxFQUFFLHVEQUF5QixFQUFFO1NBQy9GLENBQUM7O29CQUFBO0lBSUYsbUJBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLG9CQUFZLGVBRXhCLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGdvNiBvbiA2LzIwLzIwMTYuXHJcbiAqL1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVzLCBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBOYXZCYXJDb21wb25lbnQgfSBmcm9tIFwiLi9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBFcnJvckNvbXBvbmVudCB9IGZyb20gJy4vZXJyb3JzL2Vycm9yLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U2lnbmluQ29tcG9uZW50fSBmcm9tIFwiLi9hdXRob3JpemF0aW9uL3NpZ25pbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtVc2Vyc0NvbXBvbmVudH0gZnJvbSBcIi4vdXNlcnMvdXNlcnMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7QWRkVXNlckNvbXBvbmVudH0gZnJvbSBcIi4vdXNlcnMvYWRkLnVzZXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7U2lnbnVwQ29tcG9uZW50fSBmcm9tIFwiLi9hdXRob3JpemF0aW9uL3NpZ251cC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtJbmZvU21hbGxDb21wb25lbnR9IGZyb20gXCIuL2RpYWxvZ3MvaW5mby9pbmZvLnNtYWxsLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0NvbmZpcm1hdGlvbkNvbXBvbmVudH0gZnJvbSBcIi4vZGlhbG9ncy9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLmRpYWxvZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtWaWV3QWxsTWFjaGluZXN9IGZyb20gXCIuL21hY2hpbmVzL3ZpZXdhbGwubWFjaGluZXMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7QWRkQWRkcmVzc01hY2hpbmVzfSBmcm9tIFwiLi9tYWNoaW5lcy9hZGQuYWRkcmVzcy5tYWNoaW5lcy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtQcm9kdWN0c0NvbXBvbmVudH0gZnJvbSBcIi4vcHJvZHVjdHMvcHJvZHVjdHMuY29tcGFueS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtBZGRQcm9kdWN0Q29tcG9uZW50fSBmcm9tIFwiLi9wcm9kdWN0cy9hZGQucHJvZHVjdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtWaWV3TWFjaGluZUNvbXBvbmVudH0gZnJvbSBcIi4vbWFjaGluZXMvdmlldy5tYWNoaW5lLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1ZpZXdQbGFub2dyYW1zfSBmcm9tIFwiLi9wbGFub2dyYW1zL3ZpZXcucGxhbm9ncmFtcy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtDcmVhdGVQbGFub2dyYW19IGZyb20gXCIuL3BsYW5vZ3JhbXMvY3JlYXRlLnBsYW5vZ3JhbS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtWaWV3TWFjaGluZUNvbXBvbmVudE1hbnVhbFNlcnZpY2V9IGZyb20gXCIuL21hY2hpbmVzL3ZpZXcubWFudWFsLnNlcnZpY2UubWFjaGluZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtNYWNoaW5lQW5hbHl0aWNzQ29tcG9uZW50fSBmcm9tIFwiLi9tYWNoaW5lcy9hbmFseXRpY3MvYW5hbHl0aWNzLm1hY2hpbmUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Vmlld0FsbFJvdXRlc30gZnJvbSBcIi4vcm91dGVzL3ZpZXcuYWxsLnJvdXRlcy5jb21wb25lbnQvdmlldy5hbGwucm91dGVzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0NyZWF0ZVJvdXRlfSBmcm9tIFwiLi9yb3V0ZXMvY3JlYXRlLnJvdXRlLmNvbXBvbmVudC9jcmVhdGUucm91dGUuY29tcG9uZW50XCI7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBOYXZCYXJDb21wb25lbnQsIEVycm9yQ29tcG9uZW50LCBJbmZvU21hbGxDb21wb25lbnQsIENvbmZpcm1hdGlvbkNvbXBvbmVudF1cclxufSlcclxuXHJcbkBSb3V0ZXMoW1xyXG4gICAgeyBwYXRoOiAnLycsIGNvbXBvbmVudDogU2lnbmluQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6ICcvdXNlcnMnLCBjb21wb25lbnQ6IFVzZXJzQ29tcG9uZW50IH0sXHJcbiAgICB7IHBhdGg6ICcvc2lnbnVwJywgY29tcG9uZW50OiBTaWdudXBDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogJy9zaWduaW4nLCBjb21wb25lbnQ6IFNpZ25pbkNvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiAnL3ZpZXdhbGxtYWNoaW5lcycsIGNvbXBvbmVudDogVmlld0FsbE1hY2hpbmVzIH0sXHJcbiAgICB7IHBhdGg6ICcvYWRkYWRkcmVzc21hY2hpbmVzJywgY29tcG9uZW50OiBBZGRBZGRyZXNzTWFjaGluZXMgfSxcclxuICAgIHsgcGF0aDogJy9tYW5hZ2Vwcm9kdWN0cycsIGNvbXBvbmVudDogUHJvZHVjdHNDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogJy9hZGRwcm9kdWN0LzppZCcsIGNvbXBvbmVudDogQWRkUHJvZHVjdENvbXBvbmVudCB9LFxyXG4gICAgeyBwYXRoOiAnL2FkZHByb2R1Y3QnLCBjb21wb25lbnQ6IEFkZFByb2R1Y3RDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogJy92aWV3bWFjaGluZScsIGNvbXBvbmVudDogVmlld01hY2hpbmVDb21wb25lbnQgfSxcclxuICAgIHsgcGF0aDogJy92aWV3YWxscGxhbm9ncmFtcycsIGNvbXBvbmVudDogVmlld1BsYW5vZ3JhbXMgfSxcclxuICAgIHsgcGF0aDogJy9jcmVhdGVwbGFub2dyYW0vOmlkJywgY29tcG9uZW50OiBDcmVhdGVQbGFub2dyYW0gfSxcclxuICAgIHsgcGF0aDogJy9jcmVhdGVwbGFub2dyYW0nLCBjb21wb25lbnQ6IENyZWF0ZVBsYW5vZ3JhbSB9LFxyXG4gICAgeyBwYXRoOiAnL3ZpZXdwbGFub2dyYW0nLCBjb21wb25lbnQ6IENyZWF0ZVBsYW5vZ3JhbSB9LFxyXG4gICAgeyBwYXRoOiAnL3ZpZXdhbGxyb3V0ZXMnLCBjb21wb25lbnQ6IFZpZXdBbGxSb3V0ZXN9LFxyXG4gICAgeyBwYXRoOiAnL2NyZWF0ZXJvdXRlLzppZCcsIGNvbXBvbmVudDogQ3JlYXRlUm91dGUgfSxcclxuICAgIHsgcGF0aDogJy9jcmVhdGVyb3V0ZScsIGNvbXBvbmVudDogQ3JlYXRlUm91dGUgfSxcclxuICAgIC8vIHsgcGF0aDogJy92aWV3cm91dGUnLCBjb21wb25lbnQ6IENyZWF0ZVJvdXRlIH0sXHJcbiAgICB7IHBhdGg6ICcvdmlld21hY2hpbmVtYW51YWxzZXJ2aWNlLzppZCcsIGNvbXBvbmVudDogVmlld01hY2hpbmVDb21wb25lbnRNYW51YWxTZXJ2aWNlIH0sXHJcbiAgICB7IHBhdGg6ICcvbWFjaGluZWFuYWx5dGljcy86aWQvOm5hbWUvOnN0cmVldEFkZHJlc3MnLCBjb21wb25lbnQ6IE1hY2hpbmVBbmFseXRpY3NDb21wb25lbnQgfVxyXG5dKVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
