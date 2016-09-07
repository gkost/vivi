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
var planograms_service_1 = require("./planograms.service");
var error_service_1 = require("../errors/error.service");
var info_service_1 = require("../dialogs/info/info.service");
var confirmation_service_1 = require("../dialogs/confirmation/confirmation.service");
var ViewPlanograms = (function () {
    function ViewPlanograms(_router, _planogramsService, _errorService, _infoService, _confirmationService) {
        this._router = _router;
        this._planogramsService = _planogramsService;
        this._errorService = _errorService;
        this._infoService = _infoService;
        this._confirmationService = _confirmationService;
    }
    ViewPlanograms.prototype.ngOnInit = function () {
        var _this = this;
        this.getPlanograms();
        this._confirmationService.responseOccured
            .subscribe(function (data) {
            _this._callback(data);
        }, function (error) { return _this._errorService.handleError(error); });
    };
    ViewPlanograms.prototype.onCreatePlanogram = function () {
        this._router.navigate(['/createplanogram']);
    };
    ViewPlanograms.prototype.getPlanograms = function () {
        var _this = this;
        this._planogramsService.getAllPlanograms()
            .subscribe(function (data) {
            // console.log(data);
            _this.planograms = data.obj.planograms;
            _this._planogramsService.planograms = _this.planograms;
            console.log('Planograms: ', _this.planograms);
        }, function (error) { return _this._errorService.handleError(error); });
    };
    ViewPlanograms.prototype.onEdit = function (planogram) {
        console.log('Edit planogram:', planogram);
        this._router.navigate(['/createplanogram', planogram._id]);
    };
    ViewPlanograms.prototype.onActivate = function (planogram) {
        if (planogram.activeState == 2) {
            // Inform the logged user that selected user is already deleted
            this._infoService.handleInfo({ 'title': 'Operation information', 'message': 'You cannot activate/deactivate already deleted planogram' });
            return;
        }
        this._confirmationService.handleInfo({ 'title': 'Operation information', 'message': 'trying to activate/deactivate id: ' + planogram._id });
        this._callback = function (responseValue) {
            var _this = this;
            if (responseValue.response == true) {
                // The logged user has agreed to activate/deactivate the selected planogram from the list
                this._planogramsService.updatePlanogram(planogram._id, 1)
                    .subscribe(function (data) {
                    planogram.activeState = data;
                }, function (error) { return _this._errorService.handleError(error); });
                if (planogram.activeState == 0)
                    planogram.activeState = 1;
                else if (planogram.activeState == 1)
                    planogram.activeState = 0;
            }
        };
    };
    ViewPlanograms.prototype.onDelete = function (planogram) {
        if (planogram.activeState == 2) {
            // Inform the logged user that selected user is already deleted
            this._infoService.handleInfo({ 'title': 'Operation information', 'message': 'You cannot delete already deleted planogram' });
            return;
        }
        this._confirmationService.handleInfo({ 'title': 'Operation information', 'message': 'trying to delete id: ' + planogram._id });
        this._callback = function (responseValue) {
            var _this = this;
            if (responseValue.response == true) {
                // The logged user has agreed to delete the selected planogram from the list
                this._planogramsService.updatePlanogram(planogram._id, 2)
                    .subscribe(function (data) {
                    planogram.activeState = data;
                }, function (error) { return _this._errorService.handleError(error); });
                planogram.activeState = 2;
            }
        };
    };
    ViewPlanograms.prototype.convertToState = function (value) {
        switch (value) {
            case 0:
                return 'acitve';
            case 1:
                return 'deactivated';
            case 2:
                return 'deleted';
        }
    };
    ViewPlanograms = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'vend-viewall-planograms',
            templateUrl: 'view.planograms.component.html',
            directives: [router_1.ROUTER_DIRECTIVES],
            styles: ["\n\n    "]
        }), 
        __metadata('design:paramtypes', [router_1.Router, planograms_service_1.PlanogramsService, error_service_1.ErrorService, info_service_1.InfoService, confirmation_service_1.ConfirmationService])
    ], ViewPlanograms);
    return ViewPlanograms;
}());
exports.ViewPlanograms = ViewPlanograms;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYW5vZ3JhbXMvdmlldy5wbGFub2dyYW1zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHVCQUFpRCxpQkFBaUIsQ0FBQyxDQUFBO0FBQ25FLG1DQUFnQyxzQkFBc0IsQ0FBQyxDQUFBO0FBQ3ZELDhCQUEyQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3JELDZCQUEwQiw4QkFBOEIsQ0FBQyxDQUFBO0FBQ3pELHFDQUFrQyw4Q0FBOEMsQ0FBQyxDQUFBO0FBWWpGO0lBS0ksd0JBQW9CLE9BQWUsRUFDZixrQkFBcUMsRUFDckMsYUFBMkIsRUFDM0IsWUFBeUIsRUFDekIsb0JBQXlDO1FBSnpDLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQ3JDLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3pCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBcUI7SUFBRyxDQUFDO0lBR2pFLGlDQUFRLEdBQVI7UUFBQSxpQkFTQztRQVJHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZTthQUNwQyxTQUFTLENBQ04sVUFBQSxJQUFJO1lBQ0EsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixDQUFDLEVBQ0QsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBckMsQ0FBcUMsQ0FDakQsQ0FBQztJQUNWLENBQUM7SUFFRCwwQ0FBaUIsR0FBakI7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQTtJQUMvQyxDQUFDO0lBRUQsc0NBQWEsR0FBYjtRQUFBLGlCQVdDO1FBVkcsSUFBSSxDQUFD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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIFJPVVRFUl9ESVJFQ1RJVkVTLCBSb3V0ZXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtQbGFub2dyYW1zU2VydmljZX0gZnJvbSBcIi4vcGxhbm9ncmFtcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7RXJyb3JTZXJ2aWNlfSBmcm9tIFwiLi4vZXJyb3JzL2Vycm9yLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtJbmZvU2VydmljZX0gZnJvbSBcIi4uL2RpYWxvZ3MvaW5mby9pbmZvLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtDb25maXJtYXRpb25TZXJ2aWNlfSBmcm9tIFwiLi4vZGlhbG9ncy9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAndmVuZC12aWV3YWxsLXBsYW5vZ3JhbXMnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICd2aWV3LnBsYW5vZ3JhbXMuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXSxcclxuICAgIHN0eWxlczogW2BcclxuXHJcbiAgICBgXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFZpZXdQbGFub2dyYW1zIGltcGxlbWVudHMgT25Jbml0e1xyXG5cclxuICAgIHByaXZhdGUgcGxhbm9ncmFtczogW2FueV07XHJcbiAgICBfY2FsbGJhY2s6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3BsYW5vZ3JhbXNTZXJ2aWNlOiBQbGFub2dyYW1zU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2Vycm9yU2VydmljZTogRXJyb3JTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfaW5mb1NlcnZpY2U6IEluZm9TZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfY29uZmlybWF0aW9uU2VydmljZTogQ29uZmlybWF0aW9uU2VydmljZSkge31cclxuXHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRQbGFub2dyYW1zKCk7XHJcbiAgICAgICAgdGhpcy5fY29uZmlybWF0aW9uU2VydmljZS5yZXNwb25zZU9jY3VyZWRcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNyZWF0ZVBsYW5vZ3JhbSgpIHtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvY3JlYXRlcGxhbm9ncmFtJ10pXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGxhbm9ncmFtcygpIHtcclxuICAgICAgICB0aGlzLl9wbGFub2dyYW1zU2VydmljZS5nZXRBbGxQbGFub2dyYW1zKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxhbm9ncmFtcyA9IGRhdGEub2JqLnBsYW5vZ3JhbXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGxhbm9ncmFtc1NlcnZpY2UucGxhbm9ncmFtcyA9IHRoaXMucGxhbm9ncmFtcztcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUGxhbm9ncmFtczogJywgdGhpcy5wbGFub2dyYW1zKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB0aGlzLl9lcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FZGl0KHBsYW5vZ3JhbTogYW55KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0VkaXQgcGxhbm9ncmFtOicsIHBsYW5vZ3JhbSk7XHJcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2NyZWF0ZXBsYW5vZ3JhbScsIHBsYW5vZ3JhbS5faWRdKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkFjdGl2YXRlKHBsYW5vZ3JhbTogYW55KSB7XHJcblxyXG4gICAgICAgIGlmIChwbGFub2dyYW0uYWN0aXZlU3RhdGUgPT0gMikge1xyXG4gICAgICAgICAgICAvLyBJbmZvcm0gdGhlIGxvZ2dlZCB1c2VyIHRoYXQgc2VsZWN0ZWQgdXNlciBpcyBhbHJlYWR5IGRlbGV0ZWRcclxuICAgICAgICAgICAgdGhpcy5faW5mb1NlcnZpY2UuaGFuZGxlSW5mbyh7J3RpdGxlJzogJ09wZXJhdGlvbiBpbmZvcm1hdGlvbicsICdtZXNzYWdlJzogJ1lvdSBjYW5ub3QgYWN0aXZhdGUvZGVhY3RpdmF0ZSBhbHJlYWR5IGRlbGV0ZWQgcGxhbm9ncmFtJ30pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2NvbmZpcm1hdGlvblNlcnZpY2UuaGFuZGxlSW5mbyh7J3RpdGxlJzogJ09wZXJhdGlvbiBpbmZvcm1hdGlvbicsICdtZXNzYWdlJzogJ3RyeWluZyB0byBhY3RpdmF0ZS9kZWFjdGl2YXRlIGlkOiAnICsgcGxhbm9ncmFtLl9pZH0pO1xyXG4gICAgICAgIHRoaXMuX2NhbGxiYWNrID0gZnVuY3Rpb24gKHJlc3BvbnNlVmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlVmFsdWUucmVzcG9uc2UgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gVGhlIGxvZ2dlZCB1c2VyIGhhcyBhZ3JlZWQgdG8gYWN0aXZhdGUvZGVhY3RpdmF0ZSB0aGUgc2VsZWN0ZWQgcGxhbm9ncmFtIGZyb20gdGhlIGxpc3RcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BsYW5vZ3JhbXNTZXJ2aWNlLnVwZGF0ZVBsYW5vZ3JhbShwbGFub2dyYW0uX2lkLCAxKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhbm9ncmFtLmFjdGl2ZVN0YXRlID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gdGhpcy5fZXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBpZiAocGxhbm9ncmFtLmFjdGl2ZVN0YXRlID09IDApIHBsYW5vZ3JhbS5hY3RpdmVTdGF0ZSA9IDE7XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwbGFub2dyYW0uYWN0aXZlU3RhdGUgPT0gMSkgcGxhbm9ncmFtLmFjdGl2ZVN0YXRlID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgb25EZWxldGUocGxhbm9ncmFtOiBhbnkpIHtcclxuICAgICAgICBpZiAocGxhbm9ncmFtLmFjdGl2ZVN0YXRlID09IDIpIHtcclxuICAgICAgICAgICAgLy8gSW5mb3JtIHRoZSBsb2dnZWQgdXNlciB0aGF0IHNlbGVjdGVkIHVzZXIgaXMgYWxyZWFkeSBkZWxldGVkXHJcbiAgICAgICAgICAgIHRoaXMuX2luZm9TZXJ2aWNlLmhhbmRsZUluZm8oeyd0aXRsZSc6ICdPcGVyYXRpb24gaW5mb3JtYXRpb24nLCAnbWVzc2FnZSc6ICdZb3UgY2Fubm90IGRlbGV0ZSBhbHJlYWR5IGRlbGV0ZWQgcGxhbm9ncmFtJ30pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2NvbmZpcm1hdGlvblNlcnZpY2UuaGFuZGxlSW5mbyh7J3RpdGxlJzogJ09wZXJhdGlvbiBpbmZvcm1hdGlvbicsICdtZXNzYWdlJzogJ3RyeWluZyB0byBkZWxldGUgaWQ6ICcgKyBwbGFub2dyYW0uX2lkfSk7XHJcbiAgICAgICAgdGhpcy5fY2FsbGJhY2sgPSBmdW5jdGlvbiAocmVzcG9uc2VWYWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2VWYWx1ZS5yZXNwb25zZSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUaGUgbG9nZ2VkIHVzZXIgaGFzIGFncmVlZCB0byBkZWxldGUgdGhlIHNlbGVjdGVkIHBsYW5vZ3JhbSBmcm9tIHRoZSBsaXN0XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wbGFub2dyYW1zU2VydmljZS51cGRhdGVQbGFub2dyYW0ocGxhbm9ncmFtLl9pZCwgMilcclxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYW5vZ3JhbS5hY3RpdmVTdGF0ZSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0+IHRoaXMuX2Vycm9yU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcilcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIHBsYW5vZ3JhbS5hY3RpdmVTdGF0ZSA9IDI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb252ZXJ0VG9TdGF0ZSh2YWx1ZTogTnVtYmVyKSB7XHJcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2FjaXR2ZSc7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnZGVhY3RpdmF0ZWQnO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2RlbGV0ZWQnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
