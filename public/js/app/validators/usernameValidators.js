"use strict";
var UsernameValidators = (function () {
    function UsernameValidators() {
    }
    UsernameValidators.shouldBeUnique = function (control) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (control.value == "goshkin")
                    resolve({ shouldBeUnique: true });
                else
                    resolve(null);
            }, 1000);
        });
    };
    UsernameValidators.cannotContainSpace = function (control) {
        if (control.value.indexOf(' ') >= 0)
            return { cannotContainSpace: true };
        return null;
    };
    return UsernameValidators;
}());
exports.UsernameValidators = UsernameValidators;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbGlkYXRvcnMvdXNlcm5hbWVWYWxpZGF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQTtJQUFBO0lBaUJBLENBQUM7SUFoQlUsaUNBQWMsR0FBckIsVUFBc0IsT0FBb0I7UUFDdEMsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDaEMsVUFBVSxDQUFDO2dCQUNQLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksU0FBUyxDQUFDO29CQUM5QixPQUFPLENBQUMsRUFBQyxjQUFjLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDbEMsSUFBSTtvQkFDSixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1osQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0scUNBQWtCLEdBQXpCLFVBQTBCLE9BQW9CO1FBQzFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQyxNQUFNLENBQUMsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDTCx5QkFBQztBQUFELENBakJBLEFBaUJDLElBQUE7QUFqQlksMEJBQWtCLHFCQWlCOUIsQ0FBQSIsImZpbGUiOiJ2YWxpZGF0b3JzL3VzZXJuYW1lVmFsaWRhdG9ycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IHsgQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJuYW1lVmFsaWRhdG9ycyB7XHJcbiAgICBzdGF0aWMgc2hvdWxkQmVVbmlxdWUoY29udHJvbDogRm9ybUNvbnRyb2wpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICBpZiAoY29udHJvbC52YWx1ZSA9PSBcImdvc2hraW5cIilcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoe3Nob3VsZEJlVW5pcXVlOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNhbm5vdENvbnRhaW5TcGFjZShjb250cm9sOiBGb3JtQ29udHJvbCkge1xyXG4gICAgICAgIGlmIChjb250cm9sLnZhbHVlLmluZGV4T2YoJyAnKSA+PSAwKVxyXG4gICAgICAgICAgICByZXR1cm4geyBjYW5ub3RDb250YWluU3BhY2U6IHRydWUgfTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
