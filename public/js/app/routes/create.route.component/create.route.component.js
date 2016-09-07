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
 * Created by Georgi Kostadinov on 8/20/2016.
 */
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var forms_1 = require('@angular/forms');
var error_service_1 = require("../../errors/error.service");
var routes_service_1 = require("../routes.service");
var info_service_1 = require("../../dialogs/info/info.service");
var google_map_component_1 = require("../../machines/google.map.component/google.map.component");
var machines_service_1 = require("../../machines/machines.service");
var CreateRoute = (function () {
    // planogramDeleted = false;
    function CreateRoute(_fb, _errorService, _router, _routesService, _infoService, _curr, _machinesService) {
        this._fb = _fb;
        this._errorService = _errorService;
        this._router = _router;
        this._routesService = _routesService;
        this._infoService = _infoService;
        this._curr = _curr;
        this._machinesService = _machinesService;
        this.possibleDrivers = [];
        this.markers = [];
        this.selectedMarkers = [];
        this.addressesMachines = [];
        this.editRoute = false;
        this.createRoute = true;
    }
    CreateRoute.prototype.ngOnInit = function () {
        console.log('On init - Create Route');
        var id = this._curr.getParam('id');
        var view = this._curr.getParam('view');
        var planogram;
        var planogramName = '';
        if (id) {
            this.getRoute(id);
            console.log('View a planogram');
            this.editRouteId = id;
            this.createRoute = false;
        }
        else {
            this.createRoute = true;
        }
        this.routeForm = this._fb.group({
            routeName: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(3),
                    forms_1.Validators.maxLength(30)])],
            driver: ['', forms_1.Validators.nullValidator]
        });
        this.subscribeToMarkerClick();
        this.getPossibleDrivers();
        this.getMarkers();
    };
    CreateRoute.prototype.doesMarkerInTheList = function (data) {
        var i;
        var result = false;
        for (i in this.selectedMarkers) {
            if (data._id == this.selectedMarkers[i]._id) {
                result = true;
                break;
            }
        }
        return result;
    };
    CreateRoute.prototype.subscribeToMarkerClick = function () {
        var _this = this;
        this._callback = function (data) {
            // first check if the marker id is already in list
            if (!this.doesMarkerInTheList(data)) {
                // Okay, we can add the marker
                this.selectedMarkers.push(data);
            }
        };
        this._machinesService.responseOccured
            .subscribe(function (data) {
            _this._callback(data);
        }, function (error) { return _this._errorService.handleError(error); });
    };
    CreateRoute.prototype.removeMarker = function (marker) {
        console.log('Removing marker: ', marker);
        var i;
        for (i in this.selectedMarkers) {
            if (marker._id == this.selectedMarkers[i]._id) {
                this.selectedMarkers.splice(i, 1);
            }
        }
    };
    CreateRoute.prototype.getMarkers = function () {
        var _this = this;
        this._machinesService.getMachines().subscribe(function (data) {
            //console.log('Subscribed data: ');
            console.log(data);
            _this.addressesMachines = data;
            var i;
            for (i = 0; i < data.length; i++) {
                var marker = {
                    _id: data[i]._id,
                    lat: data[i].latitude,
                    lng: data[i].longitude,
                    name: data[i].name,
                    streetAddress: data[i].streetAddress,
                    draggable: false
                };
                _this.markers.push(marker);
            }
        }, function (error) { return _this._errorService.handleError(error); });
    };
    CreateRoute.prototype.getPossibleDrivers = function () {
        var _this = this;
        this._routesService.getPossibleDrivers()
            .subscribe(function (data) {
            _this.possibleDrivers = data.obj.users;
            console.log('Possible drivers: ', _this.possibleDrivers);
        }, function (error) { return _this._errorService.handleError(error); });
    };
    CreateRoute.prototype.getRoute = function (routeId) {
        var _this = this;
        console.log('Get Route triggered: ', routeId);
        this._routesService.getRoute(routeId)
            .subscribe(function (data) {
            _this.route = data.obj;
            console.log('Edit Route: ', _this.route);
            if (_this.route) {
                _this.routeForm.controls['routeName'].updateValue(_this.route.name);
                _this.routeForm.controls['driver'].updateValue(_this.route.driver._id);
                _this.currentDriverId = _this.route.driver._id;
                _this.selectedMarkers = _this.route.addressMachines;
            }
        }, function (error) { return _this._errorService.handleError(error); });
    };
    CreateRoute.prototype.onCancelCreate = function () {
        this._router.navigate(['/viewallroutes']);
    };
    CreateRoute.prototype.extractAddressesIds = function () {
        var result = [];
        var i;
        for (i in this.selectedMarkers) {
            result.push(this.selectedMarkers[i]._id);
        }
        return result;
    };
    CreateRoute.prototype.onSaveRoute = function () {
        var _this = this;
        console.log('On save Route');
        // Check if all slots are assigned to products
        var extractedIds = this.extractAddressesIds();
        var route = {
            _id: this.editRouteId,
            name: this.routeForm.value.routeName,
            driver: this.routeForm.value.driver,
            addressMachines: extractedIds
        };
        console.log('This Will Be Saved: ', route);
        if (!this.createRoute) {
            this._routesService.editRoute(route)
                .subscribe(function (data) {
                console.log('DATA+++:', data);
                _this._router.navigate(['/viewallroutes']);
            }, function (error) { return _this._errorService.handleError(error); });
        }
        else {
            console.log('Adding a planogram');
            this._routesService.addRoute(route)
                .subscribe(function (data) {
                _this._router.navigate(['/viewallroutes']);
            }, function (error) { return _this._errorService.handleError(error); });
        }
    };
    CreateRoute = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'vend-create-route',
            templateUrl: 'create.route.component.html',
            directives: [
                router_1.ROUTER_DIRECTIVES,
                forms_1.FORM_DIRECTIVES,
                forms_1.REACTIVE_FORM_DIRECTIVES,
                google_map_component_1.GoogleMapComponent],
            providers: [forms_1.FormBuilder],
            styleUrls: ['create.route.component.css']
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, error_service_1.ErrorService, router_1.Router, routes_service_1.RoutesService, info_service_1.InfoService, router_1.RouteSegment, machines_service_1.MachinesService])
    ], CreateRoute);
    return CreateRoute;
}());
exports.CreateRoute = CreateRoute;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy9jcmVhdGUucm91dGUuY29tcG9uZW50L2NyZWF0ZS5yb3V0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztHQUVHO0FBQ0gscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHVCQUF3RCxpQkFBaUIsQ0FBQyxDQUFBO0FBQzFFLHNCQUMyRCxnQkFBZ0IsQ0FBQyxDQUFBO0FBQzVFLDhCQUE2Qiw0QkFBNEIsQ0FBQyxDQUFBO0FBQzFELCtCQUE0QixtQkFBbUIsQ0FBQyxDQUFBO0FBQ2hELDZCQUEwQixpQ0FBaUMsQ0FBQyxDQUFBO0FBQzVELHFDQUFpQywwREFBMEQsQ0FBQyxDQUFBO0FBQzVGLGlDQUE4QixpQ0FBaUMsQ0FBQyxDQUFBO0FBZWhFO0lBYUksNEJBQTRCO0lBRTVCLHFCQUFvQixHQUFnQixFQUNoQixhQUEyQixFQUMzQixPQUFlLEVBQ2YsY0FBNkIsRUFDN0IsWUFBeUIsRUFDekIsS0FBbUIsRUFDbkIsZ0JBQWlDO1FBTmpDLFFBQUcsR0FBSCxHQUFHLENBQWE7UUFDaEIsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBQzdCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLFVBQUssR0FBTCxLQUFLLENBQWM7UUFDbkIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQXBCckQsb0JBQWUsR0FBUSxFQUFFLENBQUM7UUFHMUIsWUFBTyxHQUFVLEVBQUUsQ0FBQztRQUNwQixvQkFBZSxHQUFVLEVBQUUsQ0FBQztRQUM1QixzQkFBaUIsR0FBVSxFQUFFLENBQUM7UUFFdEIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixnQkFBVyxHQUFZLElBQUksQ0FBQztJQWVwQyxDQUFDO0lBRUQsOEJBQVEsR0FBUjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUV0QyxJ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QztZQUN4QixTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUM1QyxDQUFDOzttQkFBQTtJQTZNRixrQkFBQztBQUFELENBM01BLEFBMk1DLElBQUE7QUEzTVksbUJBQVcsY0EyTXZCLENBQUEiLCJmaWxlIjoicm91dGVzL2NyZWF0ZS5yb3V0ZS5jb21wb25lbnQvY3JlYXRlLnJvdXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEdlb3JnaSBLb3N0YWRpbm92IG9uIDgvMjAvMjAxNi5cclxuICovXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgUk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlU2VnbWVudCB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRk9STV9ESVJFQ1RJVkVTLCBSRUFDVElWRV9GT1JNX0RJUkVDVElWRVMsXHJcbiAgICBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0ICB7RXJyb3JTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL2Vycm9ycy9lcnJvci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Um91dGVzU2VydmljZX0gZnJvbSBcIi4uL3JvdXRlcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7SW5mb1NlcnZpY2V9IGZyb20gXCIuLi8uLi9kaWFsb2dzL2luZm8vaW5mby5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7R29vZ2xlTWFwQ29tcG9uZW50fSBmcm9tIFwiLi4vLi4vbWFjaGluZXMvZ29vZ2xlLm1hcC5jb21wb25lbnQvZ29vZ2xlLm1hcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtNYWNoaW5lc1NlcnZpY2V9IGZyb20gXCIuLi8uLi9tYWNoaW5lcy9tYWNoaW5lcy5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ3ZlbmQtY3JlYXRlLXJvdXRlJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnY3JlYXRlLnJvdXRlLmNvbXBvbmVudC5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtcclxuICAgICAgICBST1VURVJfRElSRUNUSVZFUyxcclxuICAgICAgICBGT1JNX0RJUkVDVElWRVMsXHJcbiAgICAgICAgUkVBQ1RJVkVfRk9STV9ESVJFQ1RJVkVTLFxyXG4gICAgICAgIEdvb2dsZU1hcENvbXBvbmVudF0sXHJcbiAgICBwcm92aWRlcnM6IFtGb3JtQnVpbGRlcl0sXHJcbiAgICBzdHlsZVVybHM6IFsnY3JlYXRlLnJvdXRlLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENyZWF0ZVJvdXRlIGltcGxlbWVudHMgT25Jbml0e1xyXG4gICAgcG9zc2libGVEcml2ZXJzOiBhbnkgPSBbXTtcclxuXHJcbiAgICByb3V0ZUZvcm06IEZvcm1Hcm91cDtcclxuICAgIG1hcmtlcnM6IGFueVtdID0gW107XHJcbiAgICBzZWxlY3RlZE1hcmtlcnM6IGFueVtdID0gW107XHJcbiAgICBhZGRyZXNzZXNNYWNoaW5lczogYW55W10gPSBbXTtcclxuICAgIF9jYWxsYmFjazogYW55O1xyXG4gICAgcHJpdmF0ZSBlZGl0Um91dGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgY3JlYXRlUm91dGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcm91dGU6IGFueTtcclxuICAgIGVkaXRSb3V0ZUlkOiBhbnk7XHJcbiAgICBjdXJyZW50RHJpdmVySWQ6IGFueTtcclxuICAgIC8vIHBsYW5vZ3JhbURlbGV0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mYjogRm9ybUJ1aWxkZXIsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9lcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfcm91dGVzU2VydmljZTogUm91dGVzU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2luZm9TZXJ2aWNlOiBJbmZvU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2N1cnI6IFJvdXRlU2VnbWVudCxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX21hY2hpbmVzU2VydmljZTogTWFjaGluZXNTZXJ2aWNlXHJcbiAgICApIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ09uIGluaXQgLSBDcmVhdGUgUm91dGUnKTtcclxuXHJcbiAgICAgICAgbGV0IGlkID0gdGhpcy5fY3Vyci5nZXRQYXJhbSgnaWQnKTtcclxuICAgICAgICBsZXQgdmlldyA9IHRoaXMuX2N1cnIuZ2V0UGFyYW0oJ3ZpZXcnKTtcclxuICAgICAgICBsZXQgcGxhbm9ncmFtOiBhbnk7XHJcbiAgICAgICAgbGV0IHBsYW5vZ3JhbU5hbWU6IHN0cmluZyA9ICcnO1xyXG5cclxuICAgICAgICBpZiAoaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRSb3V0ZShpZCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdWaWV3IGEgcGxhbm9ncmFtJyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVkaXRSb3V0ZUlkID0gaWQ7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlUm91dGUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVJvdXRlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucm91dGVGb3JtID0gdGhpcy5fZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgICByb3V0ZU5hbWU6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLm1pbkxlbmd0aCgzKSxcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDMwKV0pXSxcclxuICAgICAgICAgICAgZHJpdmVyOiBbJycsIFZhbGlkYXRvcnMubnVsbFZhbGlkYXRvcl1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnN1YnNjcmliZVRvTWFya2VyQ2xpY2soKTtcclxuICAgICAgICB0aGlzLmdldFBvc3NpYmxlRHJpdmVycygpO1xyXG4gICAgICAgIHRoaXMuZ2V0TWFya2VycygpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvZXNNYXJrZXJJblRoZUxpc3QoZGF0YTogYW55KSB7XHJcbiAgICAgICAgbGV0IGk7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAoaSBpbiB0aGlzLnNlbGVjdGVkTWFya2Vycykge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5faWQgPT0gdGhpcy5zZWxlY3RlZE1hcmtlcnNbaV0uX2lkKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBzdWJzY3JpYmVUb01hcmtlckNsaWNrKCkge1xyXG4gICAgICAgIHRoaXMuX2NhbGxiYWNrID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgLy8gZmlyc3QgY2hlY2sgaWYgdGhlIG1hcmtlciBpZCBpcyBhbHJlYWR5IGluIGxpc3RcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmRvZXNNYXJrZXJJblRoZUxpc3QoZGF0YSkpIHtcclxuICAgICAgICAgICAgICAgIC8vIE9rYXksIHdlIGNhbiBhZGQgdGhlIG1hcmtlclxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE1hcmtlcnMucHVzaChkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fbWFjaGluZXNTZXJ2aWNlLnJlc3BvbnNlT2NjdXJlZFxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZU1hcmtlcihtYXJrZXI6IGFueSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdSZW1vdmluZyBtYXJrZXI6ICcsIG1hcmtlcik7XHJcbiAgICAgICAgbGV0IGk7XHJcbiAgICAgICAgZm9yIChpIGluIHRoaXMuc2VsZWN0ZWRNYXJrZXJzKSB7XHJcbiAgICAgICAgICAgIGlmIChtYXJrZXIuX2lkID09IHRoaXMuc2VsZWN0ZWRNYXJrZXJzW2ldLl9pZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE1hcmtlcnMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldE1hcmtlcnMoKSB7XHJcbiAgICAgICAgdGhpcy5fbWFjaGluZXNTZXJ2aWNlLmdldE1hY2hpbmVzKCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ1N1YnNjcmliZWQgZGF0YTogJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkcmVzc2VzTWFjaGluZXMgPSBkYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbWFya2VyID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfaWQ6IGRhdGFbaV0uX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXQ6IGRhdGFbaV0ubGF0aXR1ZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxuZzogZGF0YVtpXS5sb25naXR1ZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGRhdGFbaV0ubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyZWV0QWRkcmVzczogZGF0YVtpXS5zdHJlZXRBZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcmtlcnMucHVzaChtYXJrZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0UG9zc2libGVEcml2ZXJzKCkge1xyXG4gICAgICAgIHRoaXMuX3JvdXRlc1NlcnZpY2UuZ2V0UG9zc2libGVEcml2ZXJzKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zc2libGVEcml2ZXJzID0gZGF0YS5vYmoudXNlcnM7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1Bvc3NpYmxlIGRyaXZlcnM6ICcsIHRoaXMucG9zc2libGVEcml2ZXJzKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Um91dGUocm91dGVJZDogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0dldCBSb3V0ZSB0cmlnZ2VyZWQ6ICcsIHJvdXRlSWQpO1xyXG4gICAgICAgIHRoaXMuX3JvdXRlc1NlcnZpY2UuZ2V0Um91dGUocm91dGVJZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlID0gZGF0YS5vYmo7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VkaXQgUm91dGU6ICcsIHRoaXMucm91dGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yb3V0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoPEZvcm1Db250cm9sPnRoaXMucm91dGVGb3JtLmNvbnRyb2xzWydyb3V0ZU5hbWUnXSkudXBkYXRlVmFsdWUodGhpcy5yb3V0ZS5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKDxGb3JtQ29udHJvbD50aGlzLnJvdXRlRm9ybS5jb250cm9sc1snZHJpdmVyJ10pLnVwZGF0ZVZhbHVlKHRoaXMucm91dGUuZHJpdmVyLl9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudERyaXZlcklkID0gdGhpcy5yb3V0ZS5kcml2ZXIuX2lkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkTWFya2VycyA9IHRoaXMucm91dGUuYWRkcmVzc01hY2hpbmVzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DYW5jZWxDcmVhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL3ZpZXdhbGxyb3V0ZXMnXSk7XHJcbiAgICB9XHJcblxyXG4gICAgZXh0cmFjdEFkZHJlc3Nlc0lkcygpIHtcclxuICAgICAgICBsZXQgcmVzdWx0OiBhbnlbXSA9IFtdO1xyXG4gICAgICAgIGxldCBpO1xyXG4gICAgICAgIGZvciAoaSBpbiB0aGlzLnNlbGVjdGVkTWFya2Vycykge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLnNlbGVjdGVkTWFya2Vyc1tpXS5faWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvblNhdmVSb3V0ZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnT24gc2F2ZSBSb3V0ZScpO1xyXG5cclxuICAgICAgICAvLyBDaGVjayBpZiBhbGwgc2xvdHMgYXJlIGFzc2lnbmVkIHRvIHByb2R1Y3RzXHJcblxyXG4gICAgICAgIGxldCBleHRyYWN0ZWRJZHMgPSB0aGlzLmV4dHJhY3RBZGRyZXNzZXNJZHMoKTtcclxuICAgICAgICBsZXQgcm91dGU6YW55ID0ge1xyXG4gICAgICAgICAgICBfaWQ6IHRoaXMuZWRpdFJvdXRlSWQsXHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMucm91dGVGb3JtLnZhbHVlLnJvdXRlTmFtZSxcclxuICAgICAgICAgICAgZHJpdmVyOiB0aGlzLnJvdXRlRm9ybS52YWx1ZS5kcml2ZXIsXHJcbiAgICAgICAgICAgIGFkZHJlc3NNYWNoaW5lczogZXh0cmFjdGVkSWRzXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1RoaXMgV2lsbCBCZSBTYXZlZDogJywgcm91dGUpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuY3JlYXRlUm91dGUpIHtcclxuICAgICAgICAgICAgdGhpcy5fcm91dGVzU2VydmljZS5lZGl0Um91dGUocm91dGUpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnREFUQSsrKzonLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL3ZpZXdhbGxyb3V0ZXMnXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBZGRpbmcgYSBwbGFub2dyYW0nKTtcclxuICAgICAgICAgICAgdGhpcy5fcm91dGVzU2VydmljZS5hZGRSb3V0ZShyb3V0ZSlcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy92aWV3YWxscm91dGVzJ10pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
