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
var info_service_1 = require('./info.service');
var InfoSmallComponent = (function () {
    function InfoSmallComponent(_infoService) {
        this._infoService = _infoService;
        this.infoDisplay = 'none';
    }
    InfoSmallComponent.prototype.onInfoHandled = function () {
        this.infoDisplay = 'none';
    };
    InfoSmallComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._infoService.infoOccurred.subscribe(function (infoData) {
            _this.infoData = infoData;
            _this.infoDisplay = 'block';
        });
    };
    InfoSmallComponent = __decorate([
        core_1.Component({
            selector: 'vend-info-small',
            template: "\n        <div class=\"backdrop\" [ngStyle]=\"{'display': infoDisplay}\"></div>\n        <div id=\"informationDialog\" class=\"modal bs-example-modal-sm\" role=\"dialog\" [ngStyle]=\"{'display': infoDisplay}\">\n            <div class=\"modal-dialog modal-sm\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"onInfoHandled()\">&times;</button>\n                        <h4 class=\"modal-title\">{{ infoData?.title }}</h4>\n                    </div>\n                    <div class=\"modal-body\" id=\"informationContent\">\n                        <p>{{ infoData?.message }}</p>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-custom btn-sm\" data-dismiss=\"modal\" id=\"btnInformationOK\" (click)=\"onInfoHandled()\"><span\n                                class=\"glyphicon glyphicon-ok\"></span> OK\n                        </button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ",
            styles: ["\n        .backdrop {\n            background-color: rgba(0,0,0,0.6);\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100vh;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [info_service_1.InfoService])
    ], InfoSmallComponent);
    return InfoSmallComponent;
}());
exports.InfoSmallComponent = InfoSmallComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZ3MvaW5mby9pbmZvLnNtYWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBRWxELDZCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBcUM3QztJQUlJLDRCQUFvQixZQUF5QjtRQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUg3QyxnQkFBVyxHQUFHLE1BQU0sQ0FBQztJQUcyQixDQUFDO0lBRWpELDBDQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztJQUM5QixDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUNwQyxVQUFBLFFBQVE7WUFDSixLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUN6QixLQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztRQUMvQixDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFwREw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixRQUFRLEVBQUUsdXBDQW9CVDtZQUNELE1BQU0sRUFBRSxDQUFDLHVOQVNSLENBQUM7U0FDTCxDQUFDOzswQkFBQTtJQW9CRix5QkFBQztBQUFELENBbEJBLEFBa0JDLElBQUE7QUFsQlksMEJBQWtCLHFCQWtCOUIsQ0FBQSIsImZpbGUiOiJkaWFsb2dzL2luZm8vaW5mby5zbWFsbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbmZvIH0gZnJvbSAnLi8uLi9pbmZvJztcclxuaW1wb3J0IHsgSW5mb1NlcnZpY2UgfSBmcm9tICcuL2luZm8uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndmVuZC1pbmZvLXNtYWxsJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJhY2tkcm9wXCIgW25nU3R5bGVdPVwieydkaXNwbGF5JzogaW5mb0Rpc3BsYXl9XCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cImluZm9ybWF0aW9uRGlhbG9nXCIgY2xhc3M9XCJtb2RhbCBicy1leGFtcGxlLW1vZGFsLXNtXCIgcm9sZT1cImRpYWxvZ1wiIFtuZ1N0eWxlXT1cInsnZGlzcGxheSc6IGluZm9EaXNwbGF5fVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nIG1vZGFsLXNtXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgKGNsaWNrKT1cIm9uSW5mb0hhbmRsZWQoKVwiPiZ0aW1lczs8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIj57eyBpbmZvRGF0YT8udGl0bGUgfX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCIgaWQ9XCJpbmZvcm1hdGlvbkNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3sgaW5mb0RhdGE/Lm1lc3NhZ2UgfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tY3VzdG9tIGJ0bi1zbVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgaWQ9XCJidG5JbmZvcm1hdGlvbk9LXCIgKGNsaWNrKT1cIm9uSW5mb0hhbmRsZWQoKVwiPjxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLW9rXCI+PC9zcGFuPiBPS1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICAgICAgLmJhY2tkcm9wIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYpO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgfVxyXG4gICAgYF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBJbmZvU21hbGxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgaW5mb0Rpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBpbmZvRGF0YTogSW5mbztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9pbmZvU2VydmljZTogSW5mb1NlcnZpY2UpIHt9XHJcblxyXG4gICAgb25JbmZvSGFuZGxlZCgpIHtcclxuICAgICAgICB0aGlzLmluZm9EaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuX2luZm9TZXJ2aWNlLmluZm9PY2N1cnJlZC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIGluZm9EYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5mb0RhdGEgPSBpbmZvRGF0YTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5mb0Rpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
