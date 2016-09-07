"use strict";
var core_1 = require("@angular/core");
var info_1 = require("./../info");
var InfoService = (function () {
    function InfoService() {
        this.infoOccurred = new core_1.EventEmitter();
    }
    InfoService.prototype.handleInfo = function (info) {
        var infoData = new info_1.Info(info.title, info.message);
        this.infoOccurred.emit(infoData);
    };
    return InfoService;
}());
exports.InfoService = InfoService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZ3MvaW5mby9pbmZvLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFCQUE2QixlQUFlLENBQUMsQ0FBQTtBQUU3QyxxQkFBcUIsV0FBVyxDQUFDLENBQUE7QUFHakM7SUFBQTtRQUNJLGlCQUFZLEdBQUcsSUFBSSxtQkFBWSxFQUFRLENBQUM7SUFNNUMsQ0FBQztJQUpHLGdDQUFVLEdBQVYsVUFBVyxJQUFTO1FBQ2hCLElBQU0sUUFBUSxHQUFHLElBQUksV0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDTCxrQkFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFksbUJBQVcsY0FPdkIsQ0FBQSIsImZpbGUiOiJkaWFsb2dzL2luZm8vaW5mby5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IEluZm8gfSBmcm9tIFwiLi8uLi9pbmZvXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEluZm9TZXJ2aWNlIHtcclxuICAgIGluZm9PY2N1cnJlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SW5mbz4oKTtcclxuXHJcbiAgICBoYW5kbGVJbmZvKGluZm86IGFueSkge1xyXG4gICAgICAgIGNvbnN0IGluZm9EYXRhID0gbmV3IEluZm8oaW5mby50aXRsZSwgaW5mby5tZXNzYWdlKTtcclxuICAgICAgICB0aGlzLmluZm9PY2N1cnJlZC5lbWl0KGluZm9EYXRhKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
