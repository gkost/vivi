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
var google_map_component_1 = require("./google.map.component/google.map.component");
var forms_1 = require('@angular/forms');
var error_service_1 = require("../errors/error.service");
var machines_service_1 = require("./machines.service");
var MachinesAddress_1 = require("./MachinesAddress");
var AddAddressMachines = (function () {
    function AddAddressMachines(_fb, _errorService, _router, _machinesService) {
        this._fb = _fb;
        this._errorService = _errorService;
        this._router = _router;
        this._machinesService = _machinesService;
        //searchForm: ControlGroup;
        //latitude: string = '';
        //longitude: string = '';
        // addressesMachines: any = [];
        this.markers = [];
    }
    AddAddressMachines.prototype.ngOnInit = function () {
        var _this = this;
        this.myForm = this._fb.group({
            addressName: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(3),
                    forms_1.Validators.maxLength(30)])]
        });
        this._machinesService.getMachines().subscribe(function (data) {
            console.log('BIG DATA: ', data);
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
            console.log('markers: ', _this.markers);
        });
    };
    AddAddressMachines.prototype.onSubmit = function () {
        var _this = this;
        if (!this.myForm.valid) {
            this._errorService.handleError({ title: 'Invalid name', error: { message: 'Please, provide a valid name for the place' } });
            return;
        }
        var latLng = this._machinesService.getLatLng();
        var streetAddress = this._machinesService.getStreetAddress();
        if (latLng.lat == -555 || latLng.lng == -555 || streetAddress == '') {
            this._errorService.handleError({ title: 'Missing coordinates', error: { message: 'Place a marker on the map' } });
            return;
        }
        var newAddress = new MachinesAddress_1.MachinesAddress(this.myForm.value.addressName, latLng.lat, latLng.lng, streetAddress);
        this._machinesService.addAddress(newAddress).subscribe(function (data) {
            //console.log('Subscribed data: ');
            console.log(data);
            _this._router.navigate(['/viewallmachines']);
        }, function (error) { return _this._errorService.handleError(error); });
    };
    AddAddressMachines = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'vend-add-address-machines',
            templateUrl: 'add.address.machines.component.html',
            directives: [router_1.ROUTER_DIRECTIVES,
                forms_1.FORM_DIRECTIVES,
                forms_1.REACTIVE_FORM_DIRECTIVES,
                google_map_component_1.GoogleMapComponent],
            styles: ["\n\n    "],
            providers: [forms_1.FormBuilder],
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, error_service_1.ErrorService, router_1.Router, machines_service_1.MachinesService])
    ], AddAddressMachines);
    return AddAddressMachines;
}());
exports.AddAddressMachines = AddAddressMachines;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hY2hpbmVzL2FkZC5hZGRyZXNzLm1hY2hpbmVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHVCQUFpRCxpQkFBaUIsQ0FBQyxDQUFBO0FBQ25FLHFDQUFtQyw2Q0FBNkMsQ0FBQyxDQUFBO0FBQ2pGLHNCQUMyRCxnQkFBZ0IsQ0FBQyxDQUFBO0FBQzVFLDhCQUE2Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3ZELGlDQUFnQyxvQkFBb0IsQ0FBQyxDQUFBO0FBQ3JELGdDQUFnQyxtQkFBbUIsQ0FBQyxDQUFBO0FBa0JwRDtJQWlCSSw0QkFBb0IsR0FBZ0IsRUFDaEIsYUFBMkIsRUFDM0IsT0FBZSxFQUFVLGdCQUFpQztRQUYxRCxRQUFHLEdBQUgsR0FBRyxDQUFhO1FBQ2hCLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBakI5RSwyQkFBMkI7UUFDM0Isd0JBQXdCO1FBQ3hCLHlCQUF5QjtRQUN6QiwrQkFBK0I7UUFFL0IsWUFBTyxHQUFhLEVBQUUsQ0FBQztJQWN2QixDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUFBLGlCQTJCQztRQTFCRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ3pCLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRSxrQkFBVSxDQUFDLE9BQU8sQ0FBQztvQkFDakMsa0JBQVUsQ0FBQyxRQUFRO29CQUNuQixrQkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZCLGtCQUFVLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNsQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUN6QyxVQUFBLElBQUk7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QUN4Qix5Q0FBa0IsQ0FBQztZQUN2QixNQUFNLEVBQUUsQ0FBQyxVQUVSLENBQUM7WUFDRixTQUFTLEVBQUUsQ0FBQyxtQkFBVyxDQUFDO1NBQzNCLENBQUM7OzBCQUFBO0lBNkVGLHlCQUFDO0FBQUQsQ0ExRUEsQUEwRUMsSUFBQTtBQTFFWSwwQkFBa0IscUJBMEU5QixDQUFBIiwiZmlsZSI6Im1hY2hpbmVzL2FkZC5hZGRyZXNzLm1hY2hpbmVzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgUk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlc30gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBHb29nbGVNYXBDb21wb25lbnQgfSBmcm9tIFwiLi9nb29nbGUubWFwLmNvbXBvbmVudC9nb29nbGUubWFwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBGT1JNX0RJUkVDVElWRVMsIFJFQUNUSVZFX0ZPUk1fRElSRUNUSVZFUyxcclxuICAgIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgIHtFcnJvclNlcnZpY2UgfSBmcm9tIFwiLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTWFjaGluZXNTZXJ2aWNlIH0gZnJvbSBcIi4vbWFjaGluZXMuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBNYWNoaW5lc0FkZHJlc3MgfSBmcm9tIFwiLi9NYWNoaW5lc0FkZHJlc3NcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ3ZlbmQtYWRkLWFkZHJlc3MtbWFjaGluZXMnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdhZGQuYWRkcmVzcy5tYWNoaW5lcy5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVMsXHJcbiAgICAgICAgRk9STV9ESVJFQ1RJVkVTLFxyXG4gICAgICAgIFJFQUNUSVZFX0ZPUk1fRElSRUNUSVZFUyxcclxuICAgICAgICBHb29nbGVNYXBDb21wb25lbnRdLFxyXG4gICAgc3R5bGVzOiBbYFxyXG5cclxuICAgIGBdLFxyXG4gICAgcHJvdmlkZXJzOiBbRm9ybUJ1aWxkZXJdLFxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBBZGRBZGRyZXNzTWFjaGluZXMgaW1wbGVtZW50cyBPbkluaXR7XHJcblxyXG4gICAgLy9zZWFyY2hGb3JtOiBDb250cm9sR3JvdXA7XHJcbiAgICAvL2xhdGl0dWRlOiBzdHJpbmcgPSAnJztcclxuICAgIC8vbG9uZ2l0dWRlOiBzdHJpbmcgPSAnJztcclxuICAgIC8vIGFkZHJlc3Nlc01hY2hpbmVzOiBhbnkgPSBbXTtcclxuXHJcbiAgICBtYXJrZXJzOiBtYXJrZXJbXSA9IFtdO1xyXG4gICAgLy8gICAge1xyXG4gICAgLy8gICAgICAgIG5hbWU6ICdNYWNoaW5lIE9uZScsXHJcbiAgICAvLyAgICAgICAgbGF0OiA0My4yMTQwNzA3ODQyNDE0MyxcclxuICAgIC8vICAgICAgICBsbmc6IDI3LjkxMzIzNDIzMzg1NjIsXHJcbiAgICAvLyAgICAgICAgZHJhZ2dhYmxlOiB0cnVlXHJcbiAgICAvLyAgICB9XHJcbiAgICAvL107XHJcblxyXG4gICAgbXlGb3JtOiBGb3JtR3JvdXA7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mYjogRm9ybUJ1aWxkZXIsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9lcnJvclNlcnZpY2U6IEVycm9yU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLCBwcml2YXRlIF9tYWNoaW5lc1NlcnZpY2U6IE1hY2hpbmVzU2VydmljZVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5teUZvcm0gPSB0aGlzLl9mYi5ncm91cCh7XHJcbiAgICAgICAgICAgIGFkZHJlc3NOYW1lOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5taW5MZW5ndGgoMyksXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLm1heExlbmd0aCgzMCldKV1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9tYWNoaW5lc1NlcnZpY2UuZ2V0TWFjaGluZXMoKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0JJRyBEQVRBOiAnLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbWFya2VyID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfaWQ6IGRhdGFbaV0uX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXQ6IGRhdGFbaV0ubGF0aXR1ZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxuZzogZGF0YVtpXS5sb25naXR1ZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGRhdGFbaV0ubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyZWV0QWRkcmVzczogZGF0YVtpXS5zdHJlZXRBZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcmtlcnMucHVzaChtYXJrZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtYXJrZXJzOiAnLCB0aGlzLm1hcmtlcnMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMubXlGb3JtLnZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcih7dGl0bGU6ICdJbnZhbGlkIG5hbWUnLCBlcnJvcjogeyBtZXNzYWdlOiAnUGxlYXNlLCBwcm92aWRlIGEgdmFsaWQgbmFtZSBmb3IgdGhlIHBsYWNlJyB9fSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGxhdExuZyA9IHRoaXMuX21hY2hpbmVzU2VydmljZS5nZXRMYXRMbmcoKTtcclxuICAgICAgICBsZXQgc3RyZWV0QWRkcmVzcyA9IHRoaXMuX21hY2hpbmVzU2VydmljZS5nZXRTdHJlZXRBZGRyZXNzKCk7XHJcbiAgICAgICAgaWYgKGxhdExuZy5sYXQgPT0gLTU1NSB8fCBsYXRMbmcubG5nID09IC01NTUgfHwgc3RyZWV0QWRkcmVzcyA9PSAnJykge1xyXG4gICAgICAgICAgICB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3Ioe3RpdGxlOiAnTWlzc2luZyBjb29yZGluYXRlcycsIGVycm9yOiB7IG1lc3NhZ2U6ICdQbGFjZSBhIG1hcmtlciBvbiB0aGUgbWFwJyB9fSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG5ld0FkZHJlc3MgPSBuZXcgTWFjaGluZXNBZGRyZXNzKHRoaXMubXlGb3JtLnZhbHVlLmFkZHJlc3NOYW1lLCBsYXRMbmcubGF0LCBsYXRMbmcubG5nLCBzdHJlZXRBZGRyZXNzKTtcclxuICAgICAgICB0aGlzLl9tYWNoaW5lc1NlcnZpY2UuYWRkQWRkcmVzcyhuZXdBZGRyZXNzKS5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnU3Vic2NyaWJlZCBkYXRhOiAnKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL3ZpZXdhbGxtYWNoaW5lcyddKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
