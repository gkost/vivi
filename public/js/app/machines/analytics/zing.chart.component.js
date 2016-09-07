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
var ZingChart = (function () {
    function ZingChart(zone) {
        this.zone = zone;
    }
    ZingChart.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () { return zingchart.render(_this.chart); });
    };
    ZingChart.prototype.rerender = function () {
        var _this = this;
        console.log('Refresh ZingChart Component');
        this.zone.runOutsideAngular(function () { return zingchart.render(_this.chart); });
    };
    ZingChart.prototype.ngOnDestroy = function () {
        zingchart.exec(this.chart.id, 'destroy');
    };
    ZingChart = __decorate([
        core_1.Component({
            selector: 'zingchart',
            inputs: ['chart'],
            template: '<div id="{{chart.id}}"></div>'
        }), 
        __metadata('design:paramtypes', [core_1.NgZone])
    ], ZingChart);
    return ZingChart;
}());
exports.ZingChart = ZingChart;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hY2hpbmVzL2FuYWx5dGljcy96aW5nLmNoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTRELGVBQWUsQ0FBQyxDQUFBO0FBUTVFO0lBR0ksbUJBQXFCLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO0lBQUksQ0FBQztJQUV0QyxtQ0FBZSxHQUFmO1FBQUEsaUJBRUM7UUFERyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQU0sT0FBQSxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRCw0QkFBUSxHQUFSO1FBQUEsaUJBR0M7UUFGRyxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFNLE9BQUEsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsK0JBQVcsR0FBWDtRQUNJLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQXJCTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDakIsUUFBUSxFQUFFLCtCQUErQjtTQUM1QyxDQUFDOztpQkFBQTtJQWtCRixnQkFBQztBQUFELENBakJBLEFBaUJDLElBQUE7QUFqQlksaUJBQVMsWUFpQnJCLENBQUEiLCJmaWxlIjoibWFjaGluZXMvYW5hbHl0aWNzL3ppbmcuY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBOZ1pvbmUsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDaGFydCB9IGZyb20gJy4vY2hhcnRtb2RlbHMvY2hhcnQubW9kZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3ppbmdjaGFydCcsXHJcbiAgICBpbnB1dHM6IFsnY2hhcnQnXSxcclxuICAgIHRlbXBsYXRlOiAnPGRpdiBpZD1cInt7Y2hhcnQuaWR9fVwiPjwvZGl2PidcclxufSlcclxuZXhwb3J0IGNsYXNzIFppbmdDaGFydCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgICBjaGFydDogQ2hhcnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgem9uZTogTmdab25lKSB7IH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQgKCkge1xyXG4gICAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB6aW5nY2hhcnQucmVuZGVyKHRoaXMuY2hhcnQpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXJlbmRlcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnUmVmcmVzaCBaaW5nQ2hhcnQgQ29tcG9uZW50Jyk7XHJcbiAgICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHppbmdjaGFydC5yZW5kZXIodGhpcy5jaGFydCkpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95ICgpIHtcclxuICAgICAgICB6aW5nY2hhcnQuZXhlYyh0aGlzLmNoYXJ0LmlkLCAnZGVzdHJveScpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
