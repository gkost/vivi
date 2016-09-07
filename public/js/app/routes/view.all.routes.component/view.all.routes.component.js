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
var error_service_1 = require("../../errors/error.service");
var info_service_1 = require("../../dialogs/info/info.service");
var confirmation_service_1 = require("../../dialogs/confirmation/confirmation.service");
var routes_service_1 = require("../routes.service");
var utils_service_1 = require("../../utils.service");
var ViewAllRoutes = (function () {
    function ViewAllRoutes(_router, _routesService, _errorService, _utilsService, _infoService, _confirmationService) {
        this._router = _router;
        this._routesService = _routesService;
        this._errorService = _errorService;
        this._utilsService = _utilsService;
        this._infoService = _infoService;
        this._confirmationService = _confirmationService;
    }
    ViewAllRoutes.prototype.ngOnInit = function () {
        this.getRoutes();
        // this._confirmationService.responseOccured
        //     .subscribe(
        //         data => {
        //             this._callback(data);
        //         },
        //         error => this._errorService.handleError(error)
        //     );
    };
    ViewAllRoutes.prototype.getRoutes = function () {
        var _this = this;
        this._routesService.getAllRoutes()
            .subscribe(function (data) {
            // console.log(data);
            _this.routes = data.obj;
            _this._routesService.routes = _this.routes;
            console.log('Routes: ', _this.routes);
        }, function (error) { return _this._errorService.handleError(error); });
    };
    ViewAllRoutes.prototype.onEdit = function (route) {
        console.log('Edit route:', route);
        //this._router.navigate(['/createplanogram', planogram._id]);
    };
    ViewAllRoutes.prototype.onActivate = function (route) {
        console.log('Edit route:', route);
        // if (planogram.activeState == 2) {
        //     // Inform the logged user that selected user is already deleted
        //     this._infoService.handleInfo({'title': 'Operation information', 'message': 'You cannot activate/deactivate already deleted planogram'});
        //     return;
        // }
        // this._confirmationService.handleInfo({'title': 'Operation information', 'message': 'trying to activate/deactivate id: ' + planogram._id});
        // this._callback = function (responseValue) {
        //     if (responseValue.response == true) {
        //         // The logged user has agreed to activate/deactivate the selected planogram from the list
        //         this._planogramsService.updatePlanogram(planogram._id, 1)
        //             .subscribe(
        //                 data => {
        //                     planogram.activeState = data;
        //                 },
        //                 error => this._errorService.handleError(error)
        //             );
        //         if (planogram.activeState == 0) planogram.activeState = 1;
        //         else if (planogram.activeState == 1) planogram.activeState = 0;
        //     }
        // };
    };
    ViewAllRoutes.prototype.onDelete = function (route) {
        console.log('Edit route:', route);
        // if (planogram.activeState == 2) {
        //     // Inform the logged user that selected user is already deleted
        //     this._infoService.handleInfo({'title': 'Operation information', 'message': 'You cannot delete already deleted planogram'});
        //     return;
        // }
        // this._confirmationService.handleInfo({'title': 'Operation information', 'message': 'trying to delete id: ' + planogram._id});
        // this._callback = function (responseValue) {
        //     if (responseValue.response == true) {
        //         // The logged user has agreed to delete the selected planogram from the list
        //         this._planogramsService.updatePlanogram(planogram._id, 2)
        //             .subscribe(
        //                 data => {
        //                     planogram.activeState = data;
        //                 },
        //                 error => this._errorService.handleError(error)
        //             );
        //
        //         planogram.activeState = 2;
        //     }
        //
        // };
    };
    ViewAllRoutes.prototype.convertToState = function (value) {
        return this._utilsService.convertToState(value);
    };
    ViewAllRoutes.prototype.onCreateRoute = function () {
        this._router.navigate(['/createroute']);
    };
    ViewAllRoutes = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'vend-view-all-routes',
            templateUrl: 'view.all.routes.component.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            styles: ["\n\n    "]
        }), 
        __metadata('design:paramtypes', [router_1.Router, routes_service_1.RoutesService, error_service_1.ErrorService, utils_service_1.UtilsService, info_service_1.InfoService, confirmation_service_1.ConfirmationService])
    ], ViewAllRoutes);
    return ViewAllRoutes;
}());
exports.ViewAllRoutes = ViewAllRoutes;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy92aWV3LmFsbC5yb3V0ZXMuY29tcG9uZW50L3ZpZXcuYWxsLnJvdXRlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCx1QkFBaUQsaUJBQWlCLENBQUMsQ0FBQTtBQUVuRSw4QkFBMkIsNEJBQTRCLENBQUMsQ0FBQTtBQUN4RCw2QkFBMEIsaUNBQWlDLENBQUMsQ0FBQTtBQUM1RCxxQ0FBa0MsaURBQWlELENBQUMsQ0FBQTtBQUNwRiwrQkFBNEIsbUJBQW1CLENBQUMsQ0FBQTtBQUNoRCw4QkFBMkIscUJBQXFCLENBQUMsQ0FBQTtBQVlqRDtJQUtJLHVCQUFvQixPQUFlLEVBQ2YsY0FBNkIsRUFDN0IsYUFBMkIsRUFDM0IsYUFBMkIsRUFDM0IsWUFBeUIsRUFDekIsb0JBQXlDO1FBTHpDLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3QixrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUMzQixrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUMzQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXFCO0lBQUcsQ0FBQztJQUdqRSxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLDRDQUE0QztRQUM1QyxrQkFBa0I7UUFDbEIsb0JBQW9CO1FBQ3BCLG9DQUFvQztRQUNwQyxhQUFhO1FBQ2IseURBQXlEO1FBQ3pELFNBQVM7SUFDYixDQUFDO0lBRUQsaUNBQVMsR0FBVDtRQUFBLGlCQVdDO1FBVkcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUU7YUFDN0IsU0FBUyxDQUNOLFVBQUEsSUFBSTtZQUNBLHFCQUFxQjtZQUNyQixLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDdkIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQztZQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekMsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXJDLENBQXFDLENBQ2pELENBQUM7SUFDVixDQUFDO0lBRUQsOEJBQU0sR0FBTixVQUFPLEtBQVU7UUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNsQyw2REFBNkQ7SUFDakUsQ0FBQztJQUVELGtDQUFVLEdBQVYsVUFBVyxLQUFVO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLG9DQUFvQztRQUNwQyxzRUFBc0U7UUFDdEUsK0lBQStJO1FBQy9JLGNBQWM7UUFDZCxJQUFJO1FBQ0osNklBQTZJO1FBQzdJLDhDQUE4QztRQUM5Qyw0Q0FBNEM7UUFDNUMsb0dBQW9HO1FBQ3BHLG9FQUFvRTtRQUNwRSwwQkFBMEI7UUFDMUIsNEJBQTRCO1FBQzVCLG9EQUFvRDtRQUNwRCxxQkFBcUI7UUFDckIsaUVBQWlFO1FBQ2pFLGlCQUFpQjtRQUNqQixxRUFBcUU7UUFDckUsMEVBQTBFO1FBQzFFLFFBQVE7UUFDUixLQUFLO0lBQ1QsQ0FBQztJQUVELGdDQUFRLEdBQVIsVUFBUyxLQUFVO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbEMsb0NBQW9DO1FBQ3BDLHNFQUFzRTtRQUN0RSxrSUFBa0k7UUFDbEksY0FBYztRQUNkLElBQUk7UUFDSixnSUFBZ0k7UUFDaEksOENBQThDO1FBQzlDLDRDQUE0QztRQUM1Qyx1RkFBdUY7UUFDdkYsb0VBQW9FO1FBQ3BFLDBCQUEwQjtRQUMxQiw0QkFBNEI7UUFDNUIsb0RBQW9EO1FBQ3BELHFCQUFxQjtRQUNyQixpRUFBaUU7UUFDakUsaUJBQWlCO1FBQ2pCLEVBQUU7UUFDRixxQ0FBcUM7UUFDckMsUUFBUTtRQUNSLEVBQUU7UUFDRixLQUFLO0lBQ1QsQ0FBQztJQUVELHNDQUFjLEdBQWQsVUFBZSxLQUFhO1FBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQscUNBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBM0dMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLFdBQVcsRUFBRSxnQ0FBZ0M7WUFDN0MsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7WUFDL0IsTUFBTSxFQUFFLENBQUMsVUFFUixDQUFDO1NBQ0wsQ0FBQzs7cUJBQUE7SUFzR0Ysb0JBQUM7QUFBRCxDQXBHQSxBQW9HQyxJQUFBO0FBcEdZLHFCQUFhLGdCQW9HekIsQ0FBQSIsImZpbGUiOiJyb3V0ZXMvdmlldy5hbGwucm91dGVzLmNvbXBvbmVudC92aWV3LmFsbC5yb3V0ZXMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyLCBST1VURVJfRElSRUNUSVZFUywgUm91dGVzfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQge0Vycm9yU2VydmljZX0gZnJvbSBcIi4uLy4uL2Vycm9ycy9lcnJvci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7SW5mb1NlcnZpY2V9IGZyb20gXCIuLi8uLi9kaWFsb2dzL2luZm8vaW5mby5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Q29uZmlybWF0aW9uU2VydmljZX0gZnJvbSBcIi4uLy4uL2RpYWxvZ3MvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Um91dGVzU2VydmljZX0gZnJvbSBcIi4uL3JvdXRlcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7VXRpbHNTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vdXRpbHMuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICd2ZW5kLXZpZXctYWxsLXJvdXRlcycsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ3ZpZXcuYWxsLnJvdXRlcy5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdLFxyXG4gICAgc3R5bGVzOiBbYFxyXG5cclxuICAgIGBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVmlld0FsbFJvdXRlcyBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHJcbiAgICBwcml2YXRlIHJvdXRlczogW2FueV07XHJcbiAgICBfY2FsbGJhY2s6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3JvdXRlc1NlcnZpY2U6IFJvdXRlc1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9lcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3V0aWxzU2VydmljZTogVXRpbHNTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfaW5mb1NlcnZpY2U6IEluZm9TZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfY29uZmlybWF0aW9uU2VydmljZTogQ29uZmlybWF0aW9uU2VydmljZSkge31cclxuXHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRSb3V0ZXMoKTtcclxuICAgICAgICAvLyB0aGlzLl9jb25maXJtYXRpb25TZXJ2aWNlLnJlc3BvbnNlT2NjdXJlZFxyXG4gICAgICAgIC8vICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgIC8vICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgLy8gICAgICAgICB9LFxyXG4gICAgICAgIC8vICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxyXG4gICAgICAgIC8vICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJvdXRlcygpIHtcclxuICAgICAgICB0aGlzLl9yb3V0ZXNTZXJ2aWNlLmdldEFsbFJvdXRlcygpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlcyA9IGRhdGEub2JqO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlc1NlcnZpY2Uucm91dGVzID0gdGhpcy5yb3V0ZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1JvdXRlczogJywgdGhpcy5yb3V0ZXMpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVkaXQocm91dGU6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdFZGl0IHJvdXRlOicsIHJvdXRlKTtcclxuICAgICAgICAvL3RoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9jcmVhdGVwbGFub2dyYW0nLCBwbGFub2dyYW0uX2lkXSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25BY3RpdmF0ZShyb3V0ZTogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0VkaXQgcm91dGU6Jywgcm91dGUpO1xyXG4gICAgICAgIC8vIGlmIChwbGFub2dyYW0uYWN0aXZlU3RhdGUgPT0gMikge1xyXG4gICAgICAgIC8vICAgICAvLyBJbmZvcm0gdGhlIGxvZ2dlZCB1c2VyIHRoYXQgc2VsZWN0ZWQgdXNlciBpcyBhbHJlYWR5IGRlbGV0ZWRcclxuICAgICAgICAvLyAgICAgdGhpcy5faW5mb1NlcnZpY2UuaGFuZGxlSW5mbyh7J3RpdGxlJzogJ09wZXJhdGlvbiBpbmZvcm1hdGlvbicsICdtZXNzYWdlJzogJ1lvdSBjYW5ub3QgYWN0aXZhdGUvZGVhY3RpdmF0ZSBhbHJlYWR5IGRlbGV0ZWQgcGxhbm9ncmFtJ30pO1xyXG4gICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHRoaXMuX2NvbmZpcm1hdGlvblNlcnZpY2UuaGFuZGxlSW5mbyh7J3RpdGxlJzogJ09wZXJhdGlvbiBpbmZvcm1hdGlvbicsICdtZXNzYWdlJzogJ3RyeWluZyB0byBhY3RpdmF0ZS9kZWFjdGl2YXRlIGlkOiAnICsgcGxhbm9ncmFtLl9pZH0pO1xyXG4gICAgICAgIC8vIHRoaXMuX2NhbGxiYWNrID0gZnVuY3Rpb24gKHJlc3BvbnNlVmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgaWYgKHJlc3BvbnNlVmFsdWUucmVzcG9uc2UgPT0gdHJ1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gVGhlIGxvZ2dlZCB1c2VyIGhhcyBhZ3JlZWQgdG8gYWN0aXZhdGUvZGVhY3RpdmF0ZSB0aGUgc2VsZWN0ZWQgcGxhbm9ncmFtIGZyb20gdGhlIGxpc3RcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX3BsYW5vZ3JhbXNTZXJ2aWNlLnVwZGF0ZVBsYW5vZ3JhbShwbGFub2dyYW0uX2lkLCAxKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgcGxhbm9ncmFtLmFjdGl2ZVN0YXRlID0gZGF0YTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgICk7XHJcbiAgICAgICAgLy8gICAgICAgICBpZiAocGxhbm9ncmFtLmFjdGl2ZVN0YXRlID09IDApIHBsYW5vZ3JhbS5hY3RpdmVTdGF0ZSA9IDE7XHJcbiAgICAgICAgLy8gICAgICAgICBlbHNlIGlmIChwbGFub2dyYW0uYWN0aXZlU3RhdGUgPT0gMSkgcGxhbm9ncmFtLmFjdGl2ZVN0YXRlID0gMDtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH07XHJcbiAgICB9XHJcblxyXG4gICAgb25EZWxldGUocm91dGU6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdFZGl0IHJvdXRlOicsIHJvdXRlKTtcclxuICAgICAgICAvLyBpZiAocGxhbm9ncmFtLmFjdGl2ZVN0YXRlID09IDIpIHtcclxuICAgICAgICAvLyAgICAgLy8gSW5mb3JtIHRoZSBsb2dnZWQgdXNlciB0aGF0IHNlbGVjdGVkIHVzZXIgaXMgYWxyZWFkeSBkZWxldGVkXHJcbiAgICAgICAgLy8gICAgIHRoaXMuX2luZm9TZXJ2aWNlLmhhbmRsZUluZm8oeyd0aXRsZSc6ICdPcGVyYXRpb24gaW5mb3JtYXRpb24nLCAnbWVzc2FnZSc6ICdZb3UgY2Fubm90IGRlbGV0ZSBhbHJlYWR5IGRlbGV0ZWQgcGxhbm9ncmFtJ30pO1xyXG4gICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHRoaXMuX2NvbmZpcm1hdGlvblNlcnZpY2UuaGFuZGxlSW5mbyh7J3RpdGxlJzogJ09wZXJhdGlvbiBpbmZvcm1hdGlvbicsICdtZXNzYWdlJzogJ3RyeWluZyB0byBkZWxldGUgaWQ6ICcgKyBwbGFub2dyYW0uX2lkfSk7XHJcbiAgICAgICAgLy8gdGhpcy5fY2FsbGJhY2sgPSBmdW5jdGlvbiAocmVzcG9uc2VWYWx1ZSkge1xyXG4gICAgICAgIC8vICAgICBpZiAocmVzcG9uc2VWYWx1ZS5yZXNwb25zZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyBUaGUgbG9nZ2VkIHVzZXIgaGFzIGFncmVlZCB0byBkZWxldGUgdGhlIHNlbGVjdGVkIHBsYW5vZ3JhbSBmcm9tIHRoZSBsaXN0XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9wbGFub2dyYW1zU2VydmljZS51cGRhdGVQbGFub2dyYW0ocGxhbm9ncmFtLl9pZCwgMilcclxuICAgICAgICAvLyAgICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHBsYW5vZ3JhbS5hY3RpdmVTdGF0ZSA9IGRhdGE7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcclxuICAgICAgICAvLyAgICAgICAgICAgICApO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgICAgICBwbGFub2dyYW0uYWN0aXZlU3RhdGUgPSAyO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnZlcnRUb1N0YXRlKHZhbHVlOiBOdW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdXRpbHNTZXJ2aWNlLmNvbnZlcnRUb1N0YXRlKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNyZWF0ZVJvdXRlKCkge1xyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9jcmVhdGVyb3V0ZSddKTtcclxuICAgIH1cclxuXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
