
var GigsController = function (attendaceService) {

    var button;

    // Should invoked function 

    var init = function (container) {
        $(container).on("click", ".js-toggle-attendace", toggleAttendance);
    };

    // Main function

    var toggleAttendance = function (e) {

        button = $(e.target);
        var gigId = button.attr("data-gig-id");
        if (button.hasClass("btn-default"))
            attendaceService.createAttendace(gigId, done, fail);
        else
            attendaceService.deleteAttendance(gigId, done, fail);
    };

    // Helping functions

    var done = function () {
        var text = (button.text() == "Going") ? "Going?" : "Going";

        button.toggleClass("btn-info").toggleClass("btn-default").text(text);
    };

    var fail = function () {
        toastr.error("Something unexpected happened.");
    };

    // Return by caller

    return {
        init: init
    }

}(AttendanceService);

