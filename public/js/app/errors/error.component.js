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
var error_service_1 = require('./error.service');
var ErrorComponent = (function () {
    function ErrorComponent(_errorService) {
        this._errorService = _errorService;
        this.errorDisplay = 'none';
    }
    ErrorComponent.prototype.onErrorHandled = function () {
        this.errorDisplay = 'none';
    };
    ErrorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._errorService.errorOccurred.subscribe(function (errorData) {
            _this.errorData = errorData;
            _this.errorDisplay = 'block';
        });
    };
    ErrorComponent = __decorate([
        core_1.Component({
            selector: 'vend-error',
            template: "\n        <div class=\"backdrop\" [ngStyle]=\"{'display': errorDisplay}\"></div>\n        <div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display': errorDisplay}\">\n            <div class=\"modal-dialog\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"onErrorHandled()\"><span aria-hidden=\"true\">&times;</span></button>\n                        <h4 class=\"modal-title\">{{errorData?.title}}</h4>\n                    </div>\n                    <div class=\"modal-body\">\n                     <p>{{errorData?.message}}</p>\n                    </div>\n                    <div class=\"modal-footer\">\n                        <button type=\"button\" class=\"btn btn-default\" (click)=\"onErrorHandled()\">Close</button>\n                    </div>\n                </div><!-- /.modal-content -->\n            </div><!-- /.modal-dialog -->\n        </div><!-- /.modal -->\n    ",
            styles: ["\n        .backdrop {\n            background-color: rgba(0,0,0,0.6);\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100vh;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [error_service_1.ErrorService])
    ], ErrorComponent);
    return ErrorComponent;
}());
exports.ErrorComponent = ErrorComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9ycy9lcnJvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUVsRCw4QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQW1DL0M7SUFJSSx3QkFBb0IsYUFBMkI7UUFBM0Isa0JBQWEsR0FBYixhQUFhLENBQWM7UUFIL0MsaUJBQVksR0FBRyxNQUFNLENBQUM7SUFHNEIsQ0FBQztJQUVuRCx1Q0FBYyxHQUFkO1FBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUM7SUFDL0IsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5HLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FDdEMsVUFBQSxTQUFTO1lBQ0wsS0FBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7WUFDM0IsS0FBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUM7UUFDaEMsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBbERMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSx5aENBa0JUO1lBQ0QsTUFBTSxFQUFFLENBQUMsdU5BU1IsQ0FBQztTQUNMLENBQUM7O3NCQUFBO0lBb0JGLHFCQUFDO0FBQUQsQ0FsQkEsQUFrQkMsSUFBQTtBQWxCWSxzQkFBYyxpQkFrQjFCLENBQUEiLCJmaWxlIjoiZXJyb3JzL2Vycm9yLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEVycm9yIH0gZnJvbSAnLi9lcnJvcic7XHJcbmltcG9ydCB7IEVycm9yU2VydmljZSB9IGZyb20gJy4vZXJyb3Iuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndmVuZC1lcnJvcicsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJiYWNrZHJvcFwiIFtuZ1N0eWxlXT1cInsnZGlzcGxheSc6IGVycm9yRGlzcGxheX1cIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxcIiB0YWJpbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIFtuZ1N0eWxlXT1cInsnZGlzcGxheSc6IGVycm9yRGlzcGxheX1cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiAoY2xpY2spPVwib25FcnJvckhhbmRsZWQoKVwiPjxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+e3tlcnJvckRhdGE/LnRpdGxlfX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxwPnt7ZXJyb3JEYXRhPy5tZXNzYWdlfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIChjbGljayk9XCJvbkVycm9ySGFuZGxlZCgpXCI+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PjwhLS0gLy5tb2RhbC1jb250ZW50IC0tPlxyXG4gICAgICAgICAgICA8L2Rpdj48IS0tIC8ubW9kYWwtZGlhbG9nIC0tPlxyXG4gICAgICAgIDwvZGl2PjwhLS0gLy5tb2RhbCAtLT5cclxuICAgIGAsXHJcbiAgICBzdHlsZXM6IFtgXHJcbiAgICAgICAgLmJhY2tkcm9wIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYpO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgfVxyXG4gICAgYF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBFcnJvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBlcnJvckRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBlcnJvckRhdGE6IEVycm9yO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Vycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlKSB7fVxyXG5cclxuICAgIG9uRXJyb3JIYW5kbGVkKCkge1xyXG4gICAgICAgIHRoaXMuZXJyb3JEaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuX2Vycm9yU2VydmljZS5lcnJvck9jY3VycmVkLnN1YnNjcmliZShcclxuICAgICAgICAgICAgZXJyb3JEYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JEYXRhID0gZXJyb3JEYXRhO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvckRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
