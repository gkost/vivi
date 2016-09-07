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
// <reference path="./typings/googlemaps/google.maps.d.ts" />
// <reference path="./typings/markerclustererplus/markerclustererplus.d.ts" />
var core_1 = require('@angular/core');
var router_1 = require("@angular/router");
var view_address_machines_component_1 = require("./view.address.machines.component");
var google_map_component_1 = require("./google.map.component/google.map.component");
var machines_service_1 = require("./machines.service");
var error_service_1 = require("../errors/error.service");
var ViewAllMachines = (function () {
    function ViewAllMachines(_router, _machineService, _errorService) {
        this._router = _router;
        this._machineService = _machineService;
        this._errorService = _errorService;
        this.addressesMachines = [];
        this.markers = [];
    }
    ViewAllMachines.prototype.onAddAddress = function () {
        console.log('On add address');
        this._router.navigate(['/addaddressmachines']);
    };
    ViewAllMachines.prototype.ngOnInit = function () {
        var _this = this;
        this._machineService.getMachines().subscribe(function (data) {
            //console.log('Subscribed data: ');
            console.log(data);
            _this.addressesMachines = data;
            var i;
            for (i = 0; i < data.length; i++) {
                var marker = {
                    lat: data[i].latitude,
                    lng: data[i].longitude,
                    name: data[i].name,
                    draggable: false
                };
                _this.markers.push(marker);
            }
            // this._router.navigate['/users'];
        }, function (error) { return _this._errorService.handleError(error); });
    };
    ViewAllMachines = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'vend-viewall-machines',
            templateUrl: 'viewall.machines.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, view_address_machines_component_1.ViewAddressMachines, google_map_component_1.GoogleMapComponent],
            styles: ["\n\n    "]
        }), 
        __metadata('design:paramtypes', [router_1.Router, machines_service_1.MachinesService, error_service_1.ErrorService])
    ], ViewAllMachines);
    return ViewAllMachines;
}());
exports.ViewAllMachines = ViewAllMachines;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hY2hpbmVzL3ZpZXdhbGwubWFjaGluZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSw2REFBNkQ7QUFDN0QsOEVBQThFO0FBQzlFLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCx1QkFBaUQsaUJBQWlCLENBQUMsQ0FBQTtBQUNuRSxnREFBa0MsbUNBQW1DLENBQUMsQ0FBQTtBQUN0RSxxQ0FBaUMsNkNBQTZDLENBQUMsQ0FBQTtBQUMvRSxpQ0FBOEIsb0JBQW9CLENBQUMsQ0FBQTtBQUNuRCw4QkFBMkIseUJBQXlCLENBQUMsQ0FBQTtBQVlyRDtJQUtJLHlCQUFvQixPQUFlLEVBQVUsZUFBZ0MsRUFBVSxhQUEyQjtRQUE5RixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFIbEgsc0JBQWlCLEdBQVEsRUFBRSxDQUFDO1FBQzVCLFlBQU8sR0FBYSxFQUFFLENBQUM7SUFFOEYsQ0FBQztJQUV0SCxzQ0FBWSxHQUFaO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBRW5ELENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQUEsaUJBc0JDO1FBcEJHLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUN4QyxVQUFBLElBQUk7WUFDQSxtQ0FBbUM7WUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixLQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1lBRTlCLElBQUksQ0FBQyxDQUFDO1lBQ04sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUMvQixJQUFJLE1BQU0sR0FBRztvQkFDVCxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVE7b0JBQ3JCLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztvQkFDdEIsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO29CQUNsQixTQUFTLEVBQUUsS0FBSztpQkFDbkIsQ0FBQztnQkFDRixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5QixDQUFDO1lBQ0QsbUNBQW1DO1FBQ3ZDLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFyQyxDQUFxQyxDQUNqRCxDQUFDO0lBQ04sQ0FBQztJQTdDTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxXQUFXLEVBQUUsaUNBQWlDO1lBQzlDLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLHFEQUFtQixFQUFFLHlDQUFrQixDQUFDO1lBQ3hFLE1BQU0sRUFBRSxDQUFDLFVBRVIsQ0FBQztTQUNMLENBQUM7O3VCQUFBO0lBdUNGLHNCQUFDO0FBQUQsQ0FyQ0EsQUFxQ0MsSUFBQTtBQXJDWSx1QkFBZSxrQkFxQzNCLENBQUEiLCJmaWxlIjoibWFjaGluZXMvdmlld2FsbC5tYWNoaW5lcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA8cmVmZXJlbmNlIHBhdGg9XCIuL3R5cGluZ3MvZ29vZ2xlbWFwcy9nb29nbGUubWFwcy5kLnRzXCIgLz5cclxuLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi90eXBpbmdzL21hcmtlcmNsdXN0ZXJlcnBsdXMvbWFya2VyY2x1c3RlcmVycGx1cy5kLnRzXCIgLz5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyLCBST1VURVJfRElSRUNUSVZFUywgUm91dGVzfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7Vmlld0FkZHJlc3NNYWNoaW5lc30gZnJvbSBcIi4vdmlldy5hZGRyZXNzLm1hY2hpbmVzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0dvb2dsZU1hcENvbXBvbmVudH0gZnJvbSBcIi4vZ29vZ2xlLm1hcC5jb21wb25lbnQvZ29vZ2xlLm1hcC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtNYWNoaW5lc1NlcnZpY2V9IGZyb20gXCIuL21hY2hpbmVzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtFcnJvclNlcnZpY2V9IGZyb20gXCIuLi9lcnJvcnMvZXJyb3Iuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICd2ZW5kLXZpZXdhbGwtbWFjaGluZXMnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICd2aWV3YWxsLm1hY2hpbmVzLmNvbXBvbmVudC5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgVmlld0FkZHJlc3NNYWNoaW5lcywgR29vZ2xlTWFwQ29tcG9uZW50XSxcclxuICAgIHN0eWxlczogW2BcclxuXHJcbiAgICBgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFZpZXdBbGxNYWNoaW5lcyBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHJcbiAgICBhZGRyZXNzZXNNYWNoaW5lczogYW55ID0gW107XHJcbiAgICBtYXJrZXJzOiBtYXJrZXJbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjogUm91dGVyLCBwcml2YXRlIF9tYWNoaW5lU2VydmljZTogTWFjaGluZXNTZXJ2aWNlLCBwcml2YXRlIF9lcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSkge31cclxuXHJcbiAgICBvbkFkZEFkZHJlc3MoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ09uIGFkZCBhZGRyZXNzJyk7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2FkZGFkZHJlc3NtYWNoaW5lcyddKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuX21hY2hpbmVTZXJ2aWNlLmdldE1hY2hpbmVzKCkuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ1N1YnNjcmliZWQgZGF0YTogJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkcmVzc2VzTWFjaGluZXMgPSBkYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbWFya2VyID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXQ6IGRhdGFbaV0ubGF0aXR1ZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxuZzogZGF0YVtpXS5sb25naXR1ZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGRhdGFbaV0ubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXJrZXJzLnB1c2gobWFya2VyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZVsnL3VzZXJzJ107XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
