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
var core_2 = require('angular2-google-maps/core');
var machines_service_1 = require("../../machines/machines.service");
var GoogleMapComponent = (function () {
    //    {
    //        name: 'Machine One',
    //        lat: 43.21407078424143,
    //        lng: 27.9132342338562,
    //        draggable: true
    //    }
    //];
    function GoogleMapComponent(_loader, _machinesService) {
        this._loader = _loader;
        this._machinesService = _machinesService;
        this.streetAddress = '';
        this.title = '';
        this.mode = ''; // This will control the mode of the map (addaddress means add only one marker)
        this.currentMarker = {};
        this.newMarkerAdded = false;
        // Zoom level
        this.zoom = 15;
        // Start Position
        this.lat = 43.21407078424143;
        this.lng = 27.9132342338562;
        this.markers = [];
        console.log('Hello from the constructor');
    }
    GoogleMapComponent.prototype.ngOnInit = function () {
        console.log('Google Map On Init hook working');
        console.log('addressesMachines', this.addressesMachines);
        //this._wrapper.getNativeMap().then(m => {
        //    console.log('You\'ve got the map', m);
        //}).catch(error => { console.log("Error: ", error)});
    };
    GoogleMapComponent.prototype.ngAfterContentInit = function () {
        console.log('Google Map On after Init hook working');
        this.autocomplete();
        console.log('addressesMachines', this.addressesMachines);
    };
    GoogleMapComponent.prototype.autocomplete = function () {
        var _this = this;
        this._loader.load().then(function () {
            console.log('From inner');
            var autocomplete = new google.maps.places.Autocomplete(document.getElementById("autocompleteInput"), {});
            google.maps.event.addListener(autocomplete, 'place_changed', function () {
                var place = autocomplete.getPlace();
                console.log(place);
            });
            _this.geoCoder = new google.maps.Geocoder();
        });
    };
    GoogleMapComponent.prototype.clickedMarker = function (marker, index) {
        console.log('Clicked marker: ' + marker.name + ' at index ' + index);
        this._machinesService.handleMarker(marker);
    };
    GoogleMapComponent.prototype.mapClicked = function ($event) {
        this.currentMarker = {
            name: "Untitled",
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: true
        };
        this._machinesService.setLatLng($event.coords.lat, $event.coords.lng);
        if (this.mode == 'addaddress') {
            if (this.newMarkerAdded == true) {
                // delete the last marker
                this.markers.splice(this.markers.length - 1);
            }
            this.markers.push(this.currentMarker);
            this.newMarkerAdded = true;
            var self_1 = this;
            this.geoCoder.geocode({ "latLng": $event.coords }, function (results) {
                self_1.streetAddress = results[0].formatted_address;
                self_1._machinesService.setStreetAddress(results[0].formatted_address);
            });
        }
    };
    GoogleMapComponent.prototype.markerDragEnd = function (marker, $event) {
        console.log('Drag ended at ', marker, $event);
        //var updMarker = {
        //    name: marker.name,
        //    lat: parseFloat(marker.lat),
        //    lng: parseFloat(marker.lng),
        //    draggable: false
        //};
        this.currentMarker.lat = $event.coords.lat;
        this.currentMarker.lng = $event.coords.lng;
        this._machinesService.setLatLng($event.coords.lat, $event.coords.lng);
        var self = this;
        this.geoCoder.geocode({ "latLng": $event.coords }, function (results) {
            self.streetAddress = results[0].formatted_address;
            self._machinesService.setStreetAddress(results[0].formatted_address);
        });
        //var newLat = $event.coords.lat;
        //var newLng = $event.coords.lng;
    };
    GoogleMapComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'vend-google-map-machines',
            templateUrl: 'google.map.component.html',
            directives: [router_1.ROUTER_DIRECTIVES, core_2.GOOGLE_MAPS_DIRECTIVES],
            styleUrls: ['google.map.component.css'],
            inputs: ['title', 'mode', 'markers']
        }), 
        __metadata('design:paramtypes', [core_2.MapsAPILoader, machines_service_1.MachinesService])
    ], GoogleMapComponent);
    return GoogleMapComponent;
}());
exports.GoogleMapComponent = GoogleMapComponent;
// Marker Type
//interface marker {
//    name?:string;
//    lat: number;
//    lng: number;
//    draggable: boolean;
//} 

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hY2hpbmVzL2dvb2dsZS5tYXAuY29tcG9uZW50L2dvb2dsZS5tYXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUMsZUFBZSxDQUFDLENBQUE7QUFDekQsdUJBQWlELGlCQUFpQixDQUFDLENBQUE7QUFDbkUscUJBS2UsMkJBQTJCLENBQUMsQ0FBQTtBQUMzQyxpQ0FBOEIsaUNBQWlDLENBQUMsQ0FBQTtBQWNoRTtJQWdCSSxPQUFPO0lBQ1AsOEJBQThCO0lBQzlCLGlDQUFpQztJQUNqQyxnQ0FBZ0M7SUFDaEMseUJBQXlCO0lBQ3pCLE9BQU87SUFDUCxJQUFJO0lBRUosNEJBQW9CLE9BQXNCLEVBQVUsZ0JBQWlDO1FBQWpFLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBckJyRixrQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUczQixVQUFLLEdBQVUsRUFBRSxDQUFDO1FBQ2xCLFNBQUksR0FBVyxFQUFFLENBQUMsQ0FBQywrRUFBK0U7UUFDM0Ysa0JBQWEsR0FBUSxFQUFFLENBQUM7UUFDL0IsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsYUFBYTtRQUNiLFNBQUksR0FBVSxFQUFFLENBQUM7UUFDakIsaUJBQWlCO1FBQ2pCLFFBQUcsR0FBVSxpQkFBaUIsQ0FBQztRQUMvQixRQUFHLEdBQVUsZ0JBQWdCLENBQUM7UUFDOUIsWUFBTyxHQUFhLEVBQUUsQ0FBQztRQVVuQixPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7UUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUV6RCwwQ0FBMEM7UUFDMUMsNENBQTRDO1FBQzVDLHNEQUFzRDtJ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QUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsQ0FBQztTQUV2QyxDQUFDOzswQkFBQTtJQTJIRix5QkFBQztBQUFELENBekhBLEFBeUhDLElBQUE7QUF6SFksMEJBQWtCLHFCQXlIOUIsQ0FBQTtBQUVELGNBQWM7QUFDZCxvQkFBb0I7QUFDcEIsbUJBQW1CO0FBQ25CLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIseUJBQXlCO0FBQ3pCLEdBQUciLCJmaWxlIjoibWFjaGluZXMvZ29vZ2xlLm1hcC5jb21wb25lbnQvZ29vZ2xlLm1hcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyLCBST1VURVJfRElSRUNUSVZFUywgUm91dGVzfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7XHJcbiAgICAgICAgR09PR0xFX01BUFNfRElSRUNUSVZFUyxcclxuICAgICAgICBNYXBzQVBJTG9hZGVyLFxyXG4gICAgICAgIE5vT3BNYXBzQVBJTG9hZGVyLFxyXG4gICAgICAgIE1vdXNlRXZlbnRcclxuICAgICAgICB9IGZyb20gJ2FuZ3VsYXIyLWdvb2dsZS1tYXBzL2NvcmUnO1xyXG5pbXBvcnQge01hY2hpbmVzU2VydmljZX0gZnJvbSBcIi4uLy4uL21hY2hpbmVzL21hY2hpbmVzLnNlcnZpY2VcIjtcclxuXHJcbmRlY2xhcmUgdmFyIGdvb2dsZTogYW55O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICd2ZW5kLWdvb2dsZS1tYXAtbWFjaGluZXMnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdnb29nbGUubWFwLmNvbXBvbmVudC5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgR09PR0xFX01BUFNfRElSRUNUSVZFU10sXHJcbiAgICBzdHlsZVVybHM6IFsnZ29vZ2xlLm1hcC5jb21wb25lbnQuY3NzJ10sXHJcbiAgICBpbnB1dHM6IFsndGl0bGUnLCAnbW9kZScsICdtYXJrZXJzJ11cclxuXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgR29vZ2xlTWFwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xyXG5cclxuICAgIGdlb0NvZGVyOiBhbnk7XHJcbiAgICBzdHJlZXRBZGRyZXNzOiBzdHJpbmcgPSAnJztcclxuICAgIGFkZHJlc3Nlc01hY2hpbmVzOiBhbnk7XHJcblxyXG4gICAgdGl0bGU6c3RyaW5nID0gJyc7XHJcbiAgICBtb2RlOiBzdHJpbmcgPSAnJzsgLy8gVGhpcyB3aWxsIGNvbnRyb2wgdGhlIG1vZGUgb2YgdGhlIG1hcCAoYWRkYWRkcmVzcyBtZWFucyBhZGQgb25seSBvbmUgbWFya2VyKVxyXG4gICAgcHVibGljIGN1cnJlbnRNYXJrZXI6IGFueSA9IHt9O1xyXG4gICAgbmV3TWFya2VyQWRkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8vIFpvb20gbGV2ZWxcclxuICAgIHpvb206bnVtYmVyID0gMTU7XHJcbiAgICAvLyBTdGFydCBQb3NpdGlvblxyXG4gICAgbGF0Om51bWJlciA9IDQzLjIxNDA3MDc4NDI0MTQzO1xyXG4gICAgbG5nOm51bWJlciA9IDI3LjkxMzIzNDIzMzg1NjI7XHJcbiAgICBtYXJrZXJzOiBtYXJrZXJbXSA9IFtdO1xyXG4gICAgLy8gICAge1xyXG4gICAgLy8gICAgICAgIG5hbWU6ICdNYWNoaW5lIE9uZScsXHJcbiAgICAvLyAgICAgICAgbGF0OiA0My4yMTQwNzA3ODQyNDE0MyxcclxuICAgIC8vICAgICAgICBsbmc6IDI3LjkxMzIzNDIzMzg1NjIsXHJcbiAgICAvLyAgICAgICAgZHJhZ2dhYmxlOiB0cnVlXHJcbiAgICAvLyAgICB9XHJcbiAgICAvL107XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfbG9hZGVyOiBNYXBzQVBJTG9hZGVyLCBwcml2YXRlIF9tYWNoaW5lc1NlcnZpY2U6IE1hY2hpbmVzU2VydmljZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdIZWxsbyBmcm9tIHRoZSBjb25zdHJ1Y3RvcicpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdHb29nbGUgTWFwIE9uIEluaXQgaG9vayB3b3JraW5nJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FkZHJlc3Nlc01hY2hpbmVzJywgdGhpcy5hZGRyZXNzZXNNYWNoaW5lcyk7XHJcblxyXG4gICAgICAgIC8vdGhpcy5fd3JhcHBlci5nZXROYXRpdmVNYXAoKS50aGVuKG0gPT4ge1xyXG4gICAgICAgIC8vICAgIGNvbnNvbGUubG9nKCdZb3VcXCd2ZSBnb3QgdGhlIG1hcCcsIG0pO1xyXG4gICAgICAgIC8vfSkuY2F0Y2goZXJyb3IgPT4geyBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiwgZXJyb3IpfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnR29vZ2xlIE1hcCBPbiBhZnRlciBJbml0IGhvb2sgd29ya2luZycpO1xyXG4gICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FkZHJlc3Nlc01hY2hpbmVzJywgdGhpcy5hZGRyZXNzZXNNYWNoaW5lcyk7XHJcbiAgICB9XHJcblxyXG4gICAgYXV0b2NvbXBsZXRlKCkge1xyXG4gICAgICAgIHRoaXMuX2xvYWRlci5sb2FkKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGcm9tIGlubmVyJyk7XHJcbiAgICAgICAgICAgIGxldCBhdXRvY29tcGxldGUgPSBuZXcgZ29vZ2xlLm1hcHMucGxhY2VzLkF1dG9jb21wbGV0ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1dG9jb21wbGV0ZUlucHV0XCIpLCB7fSk7XHJcbiAgICAgICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKGF1dG9jb21wbGV0ZSwgJ3BsYWNlX2NoYW5nZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGxhY2UgPSBhdXRvY29tcGxldGUuZ2V0UGxhY2UoKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBsYWNlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvQ29kZXIgPSBuZXcgZ29vZ2xlLm1hcHMuR2VvY29kZXIoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmFtZTpzdHJpbmc7XHJcbiAgICBwcml2YXRlIG1hcDphbnk7XHJcbiAgICBwcml2YXRlIG9wdGlvbnM6YW55O1xyXG5cclxuXHJcbiAgICBjbGlja2VkTWFya2VyKG1hcmtlcjptYXJrZXIsIGluZGV4Om51bWJlcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDbGlja2VkIG1hcmtlcjogJyArIG1hcmtlci5uYW1lICsgJyBhdCBpbmRleCAnICsgaW5kZXgpO1xyXG4gICAgICAgIHRoaXMuX21hY2hpbmVzU2VydmljZS5oYW5kbGVNYXJrZXIobWFya2VyKTtcclxuICAgIH1cclxuXHJcbiAgICBtYXBDbGlja2VkKCRldmVudDpNb3VzZUV2ZW50KSB7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudE1hcmtlciA9IHtcclxuICAgICAgICAgICAgbmFtZTogXCJVbnRpdGxlZFwiLFxyXG4gICAgICAgICAgICBsYXQ6ICRldmVudC5jb29yZHMubGF0LFxyXG4gICAgICAgICAgICBsbmc6ICRldmVudC5jb29yZHMubG5nLFxyXG4gICAgICAgICAgICBkcmFnZ2FibGU6IHRydWVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLl9tYWNoaW5lc1NlcnZpY2Uuc2V0TGF0TG5nKCRldmVudC5jb29yZHMubGF0LCAkZXZlbnQuY29vcmRzLmxuZyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1vZGUgPT0gJ2FkZGFkZHJlc3MnKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5ld01hcmtlckFkZGVkID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIC8vIGRlbGV0ZSB0aGUgbGFzdCBtYXJrZXJcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2Vycy5zcGxpY2UodGhpcy5tYXJrZXJzLmxlbmd0aC0xKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm1hcmtlcnMucHVzaCh0aGlzLmN1cnJlbnRNYXJrZXIpO1xyXG4gICAgICAgICAgICB0aGlzLm5ld01hcmtlckFkZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICB0aGlzLmdlb0NvZGVyLmdlb2NvZGUoeyBcImxhdExuZ1wiOiAkZXZlbnQuY29vcmRzIH0sIGZ1bmN0aW9uIChyZXN1bHRzKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnN0cmVldEFkZHJlc3MgPSByZXN1bHRzWzBdLmZvcm1hdHRlZF9hZGRyZXNzO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5fbWFjaGluZXNTZXJ2aWNlLnNldFN0cmVldEFkZHJlc3MocmVzdWx0c1swXS5mb3JtYXR0ZWRfYWRkcmVzcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgbWFya2VyRHJhZ0VuZChtYXJrZXI6IGFueSwgJGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0RyYWcgZW5kZWQgYXQgJywgbWFya2VyLCAkZXZlbnQpO1xyXG5cclxuICAgICAgICAvL3ZhciB1cGRNYXJrZXIgPSB7XHJcbiAgICAgICAgLy8gICAgbmFtZTogbWFya2VyLm5hbWUsXHJcbiAgICAgICAgLy8gICAgbGF0OiBwYXJzZUZsb2F0KG1hcmtlci5sYXQpLFxyXG4gICAgICAgIC8vICAgIGxuZzogcGFyc2VGbG9hdChtYXJrZXIubG5nKSxcclxuICAgICAgICAvLyAgICBkcmFnZ2FibGU6IGZhbHNlXHJcbiAgICAgICAgLy99O1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRNYXJrZXIubGF0ID0gJGV2ZW50LmNvb3Jkcy5sYXQ7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TWFya2VyLmxuZyA9ICRldmVudC5jb29yZHMubG5nO1xyXG5cclxuICAgICAgICB0aGlzLl9tYWNoaW5lc1NlcnZpY2Uuc2V0TGF0TG5nKCRldmVudC5jb29yZHMubGF0LCAkZXZlbnQuY29vcmRzLmxuZyk7XHJcblxyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmdlb0NvZGVyLmdlb2NvZGUoeyBcImxhdExuZ1wiOiAkZXZlbnQuY29vcmRzIH0sIGZ1bmN0aW9uIChyZXN1bHRzKSB7XHJcbiAgICAgICAgICAgIHNlbGYuc3RyZWV0QWRkcmVzcyA9IHJlc3VsdHNbMF0uZm9ybWF0dGVkX2FkZHJlc3M7XHJcbiAgICAgICAgICAgIHNlbGYuX21hY2hpbmVzU2VydmljZS5zZXRTdHJlZXRBZGRyZXNzKHJlc3VsdHNbMF0uZm9ybWF0dGVkX2FkZHJlc3MpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgLy92YXIgbmV3TGF0ID0gJGV2ZW50LmNvb3Jkcy5sYXQ7XHJcbiAgICAgICAgLy92YXIgbmV3TG5nID0gJGV2ZW50LmNvb3Jkcy5sbmc7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbi8vIE1hcmtlciBUeXBlXHJcbi8vaW50ZXJmYWNlIG1hcmtlciB7XHJcbi8vICAgIG5hbWU/OnN0cmluZztcclxuLy8gICAgbGF0OiBudW1iZXI7XHJcbi8vICAgIGxuZzogbnVtYmVyO1xyXG4vLyAgICBkcmFnZ2FibGU6IGJvb2xlYW47XHJcbi8vfSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
