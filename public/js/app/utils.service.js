/**
 * Created by Georgi Kostadinov on 8/20/2016.
 */
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
// import { Http, Headers } from "@angular/http";
var core_1 = require("@angular/core");
// import 'rxjs/Rx';
// import { Observable } from "rxjs/Observable";
var UtilsService = (function () {
    function UtilsService() {
    }
    UtilsService.prototype.convertToState = function (value) {
        switch (value) {
            case 0:
                return 'acitve';
            case 1:
                return 'deactivated';
            case 2:
                return 'deleted';
        }
    };
    UtilsService.prototype.convertToRole = function (value) {
        switch (value) {
            case 0:
                return 'administrator';
            case 1:
                return 'planing technician';
            case 2:
                return 'driver';
            case 3:
                return 'inventorist';
            default:
                return '';
        }
    };
    UtilsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UtilsService);
    return UtilsService;
}());
exports.UtilsService = UtilsService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7Ozs7Ozs7Ozs7O0FBRUgsaURBQWlEO0FBQ2pELHFCQUF5QyxlQUFlLENBQUMsQ0FBQTtBQUN6RCxvQkFBb0I7QUFDcEIsZ0RBQWdEO0FBR2hEO0lBRUk7SUFBZ0IsQ0FBQztJQUVqQixxQ0FBYyxHQUFkLFVBQWUsS0FBYTtRQUN4QixNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1osS0FBSyxDQUFDO2dCQUNGLE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDcEIsS0FBSyxDQUFDO2dCQUNGLE1BQU0sQ0FBQyxhQUFhLENBQUM7WUFDekIsS0FBSyxDQUFDO2dCQUNGLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDekIsQ0FBQztJQUNMLENBQUM7SUFFRCxvQ0FBYSxHQUFiLFVBQWMsS0FBYTtRQUN2QixNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1osS0FBSyxDQUFDO2dCQUNGLE1BQU0sQ0FBQyxlQUFlLENBQUM7WUFDM0IsS0FBSyxDQUFDO2dCQUNGLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztZQUNoQyxLQUFLLENBQUM7Z0JBQ0YsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUNwQixLQUFLLENBQUM7Z0JBQ0YsTUFBTSxDQUFDLGFBQWEsQ0FBQztZQUN6QjtnQkFDSSxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ2xCLENBQUM7SUFDTCxDQUFDO0lBN0JMO1FBQUMsaUJBQVUsRUFBRTs7b0JBQUE7SUFnQ2IsbUJBQUM7QUFBRCxDQS9CQSxBQStCQyxJQUFBO0FBL0JZLG9CQUFZLGVBK0J4QixDQUFBIiwiZmlsZSI6InV0aWxzLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBHZW9yZ2kgS29zdGFkaW5vdiBvbiA4LzIwLzIwMTYuXHJcbiAqL1xyXG5cclxuLy8gaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbi8vIGltcG9ydCAncnhqcy9SeCc7XHJcbi8vIGltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVdGlsc1NlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgY29udmVydFRvU3RhdGUodmFsdWU6IE51bWJlcikge1xyXG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdhY2l0dmUnO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2RlYWN0aXZhdGVkJztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdkZWxldGVkJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnZlcnRUb1JvbGUodmFsdWU6IE51bWJlcikge1xyXG4gICAgICAgIHN3aXRjaCAodmFsdWUpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdhZG1pbmlzdHJhdG9yJztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdwbGFuaW5nIHRlY2huaWNpYW4nO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2RyaXZlcic7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnaW52ZW50b3Jpc3QnO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
