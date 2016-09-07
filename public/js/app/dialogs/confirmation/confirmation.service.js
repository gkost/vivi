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
var core_1 = require("@angular/core");
var info_1 = require("./../info");
require('rxjs/Rx');
var ConfirmationService = (function () {
    function ConfirmationService() {
        this.infoOccurred = new core_1.EventEmitter();
        this.responseOccured = new core_1.EventEmitter();
    }
    ConfirmationService.prototype.handleInfo = function (info) {
        var infoData = new info_1.Info(info.title, info.message);
        this.infoOccurred.emit(infoData);
    };
    ConfirmationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ConfirmationService);
    return ConfirmationService;
}());
exports.ConfirmationService = ConfirmationService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZ3MvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUMsZUFBZSxDQUFDLENBQUE7QUFFekQscUJBQXFCLFdBQVcsQ0FBQyxDQUFBO0FBRWpDLFFBQU8sU0FBUyxDQUFDLENBQUE7QUFJakI7SUFBQTtRQUNJLGlCQUFZLEdBQUcsSUFBSSxtQkFBWSxFQUFRLENBQUM7UUFDeEMsb0JBQWUsR0FBRyxJQUFJLG1CQUFZLEVBQVksQ0FBQztJQU9uRCxDQUFDO0lBTEcsd0NBQVUsR0FBVixVQUFXLElBQVM7UUFDaEIsSUFBTSxRQUFRLEdBQUcsSUFBSSxXQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQVJMO1FBQUMsaUJBQVUsRUFBRTs7MkJBQUE7SUFVYiwwQkFBQztBQUFELENBVEEsQUFTQyxJQUFBO0FBVFksMkJBQW1CLHNCQVMvQixDQUFBIiwiZmlsZSI6ImRpYWxvZ3MvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IEluZm8gfSBmcm9tIFwiLi8uLi9pbmZvXCI7XHJcbmltcG9ydCB7UmVzcG9uc2V9IGZyb20gXCIuLy4uL3Jlc3BvbnNlXCI7XHJcbmltcG9ydCAncnhqcy9SeCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDb25maXJtYXRpb25TZXJ2aWNlIHtcclxuICAgIGluZm9PY2N1cnJlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SW5mbz4oKTtcclxuICAgIHJlc3BvbnNlT2NjdXJlZCA9IG5ldyBFdmVudEVtaXR0ZXI8UmVzcG9uc2U+KCk7XHJcblxyXG4gICAgaGFuZGxlSW5mbyhpbmZvOiBhbnkpIHtcclxuICAgICAgICBjb25zdCBpbmZvRGF0YSA9IG5ldyBJbmZvKGluZm8udGl0bGUsIGluZm8ubWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5pbmZvT2NjdXJyZWQuZW1pdChpbmZvRGF0YSk7XHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
