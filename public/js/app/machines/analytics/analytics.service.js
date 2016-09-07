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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
require('rxjs/Rx');
var Observable_1 = require("rxjs/Observable");
var AnalyticsService = (function () {
    function AnalyticsService(_http) {
        this._http = _http;
        this.path = 'http://localhost:3000/analytics/';
    }
    AnalyticsService.prototype.getSalesByMachine = function (queryObj) {
        var body = JSON.stringify(queryObj);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var token = localStorage.getItem('vendingToken') ? '?token=' + localStorage.getItem('vendingToken') : '';
        return this._http.post(this.path + 'salesbymachine' + token, body, { headers: headers })
            .map(function (response) {
            var data = response.json().obj;
            return data;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    AnalyticsService.prototype.getDate = function (date) {
        var d = new Date(date);
        var dd = d.getDate();
        var days = dd.toString();
        var mm = d.getMonth() + 1; // January is 0
        var months = mm.toString();
        var yyyy = d.getFullYear();
        if (dd < 10)
            days = '0' + dd;
        if (mm < 10)
            months = '0' + mm;
        return days + '/' + months + '/' + yyyy;
    };
    AnalyticsService.prototype.getTime = function (date) {
        var d = new Date(date);
        var hh = d.getHours();
        var hours = hh.toString();
        var mm = d.getMinutes();
        var minutes = mm.toString();
        if (hh < 10)
            hours = '0' + hh;
        if (mm < 10)
            minutes = '0' + mm;
        return hours + ':' + minutes;
    };
    AnalyticsService.prototype.getDayOfTheWeek = function (date) {
        var d = new Date(date);
        var dw = d.getDay();
        var dayOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return dayOfTheWeek[dw];
    };
    AnalyticsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AnalyticsService);
    return AnalyticsService;
}());
exports.AnalyticsService = AnalyticsService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hY2hpbmVzL2FuYWx5dGljcy9hbmFseXRpY3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQThCLGVBQWUsQ0FBQyxDQUFBO0FBQzlDLHFCQUF5QyxlQUFlLENBQUMsQ0FBQTtBQUN6RCxRQUFPLFNBQVMsQ0FBQyxDQUFBO0FBQ2pCLDJCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBRzdDO0lBQ0ksMEJBQW9CLEtBQVU7UUFBVixVQUFLLEdBQUwsS0FBSyxDQUFLO1FBRTlCLFNBQUksR0FBRyxrQ0FBa0MsQ0FBQztJQUQxQyxDQUFDO0lBR0QsNENBQWlCLEdBQWpCLFVBQWtCLFFBQWE7UUFDM0IsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QyxJQUFNLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBQyxDQUFDLENBQUM7UUFDbEUsSUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxTQUFTLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDM0csTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsZ0JBQWdCLEdBQUcsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQzthQUNqRixHQUFHLENBQUMsVUFBQSxRQUFRO1lBQ1QsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQztZQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFBO1FBQ2YsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQTlCLENBQThCLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsa0NBQU8sR0FBUCxVQUFRLElBQVM7UUFDYixJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDckIsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3pCLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxlQUFlO1FBQzFDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMzQixJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDM0IsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztZQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQzdCLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7WUFBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUMvQixNQUFNLENBQUMsSUFBSSxHQUFDLEdBQUcsR0FBQyxNQUFNLEdBQUMsR0FBRyxHQUFDLElBQUksQ0FBQztJQUNwQyxDQUFDO0lBRUQsa0NBQU8sR0FBUCxVQUFRLElBQVM7UUFDYixJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdEIsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzFCLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN4QixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUIsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztZQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQzlCLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7WUFBQyxPQUFPLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNoQyxNQUFNLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxPQUFPLENBQUM7SUFDakMsQ0FBQztJQUVELDBDQUFlLEdBQWYsVUFBZ0IsSUFBUztRQUNyQixJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDcEIsSUFBSSxZQUFZLEdBQWEsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUM1RyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUE5Q0w7UUFBQyxpQkFBVSxFQUFFOzt3QkFBQTtJQStDYix1QkFBQztBQUFELENBOUNBLEFBOENDLElBQUE7QUE5Q1ksd0JBQWdCLG1CQThDNUIsQ0FBQSIsImZpbGUiOiJtYWNoaW5lcy9hbmFseXRpY3MvYW5hbHl0aWNzLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwLCBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICdyeGpzL1J4JztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFuYWx5dGljc1NlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDpIdHRwKSB7XHJcbiAgICB9XHJcbiAgICBwYXRoID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hbmFseXRpY3MvJztcclxuXHJcbiAgICBnZXRTYWxlc0J5TWFjaGluZShxdWVyeU9iajogYW55KSB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KHF1ZXJ5T2JqKTtcclxuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd2ZW5kaW5nVG9rZW4nKSA/ICc/dG9rZW49JyArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd2ZW5kaW5nVG9rZW4nKSA6ICcnO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QodGhpcy5wYXRoICsgJ3NhbGVzYnltYWNoaW5lJyArIHRva2VuLCBib2R5LCB7aGVhZGVyczogaGVhZGVyc30pXHJcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKS5vYmo7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREYXRlKGRhdGU6IGFueSkge1xyXG4gICAgICAgIGxldCBkID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICAgICAgbGV0IGRkID0gZC5nZXREYXRlKCk7XHJcbiAgICAgICAgbGV0IGRheXMgPSBkZC50b1N0cmluZygpO1xyXG4gICAgICAgIGxldCBtbSA9IGQuZ2V0TW9udGgoKSArIDE7IC8vIEphbnVhcnkgaXMgMFxyXG4gICAgICAgIGxldCBtb250aHMgPSBtbS50b1N0cmluZygpO1xyXG4gICAgICAgIGxldCB5eXl5ID0gZC5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIGlmIChkZCA8IDEwKSBkYXlzID0gJzAnICsgZGQ7XHJcbiAgICAgICAgaWYgKG1tIDwgMTApIG1vbnRocyA9ICcwJyArIG1tO1xyXG4gICAgICAgIHJldHVybiBkYXlzKycvJyttb250aHMrJy8nK3l5eXk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGltZShkYXRlOiBhbnkpIHtcclxuICAgICAgICBsZXQgZCA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgICAgIGxldCBoaCA9IGQuZ2V0SG91cnMoKTtcclxuICAgICAgICBsZXQgaG91cnMgPSBoaC50b1N0cmluZygpO1xyXG4gICAgICAgIGxldCBtbSA9IGQuZ2V0TWludXRlcygpO1xyXG4gICAgICAgIGxldCBtaW51dGVzID0gbW0udG9TdHJpbmcoKTtcclxuICAgICAgICBpZiAoaGggPCAxMCkgaG91cnMgPSAnMCcgKyBoaDtcclxuICAgICAgICBpZiAobW0gPCAxMCkgbWludXRlcyA9ICcwJyArIG1tO1xyXG4gICAgICAgIHJldHVybiBob3VycyArICc6JyArIG1pbnV0ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGF5T2ZUaGVXZWVrKGRhdGU6IGFueSkge1xyXG4gICAgICAgIGxldCBkID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICAgICAgbGV0IGR3ID0gZC5nZXREYXkoKTtcclxuICAgICAgICBsZXQgZGF5T2ZUaGVXZWVrOiBbc3RyaW5nXSA9IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXTtcclxuICAgICAgICByZXR1cm4gZGF5T2ZUaGVXZWVrW2R3XTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
