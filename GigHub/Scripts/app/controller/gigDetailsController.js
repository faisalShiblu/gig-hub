
var GigDetailsController = function (followingService) {

    // Global variable
    var followButton;

    // Should invoked function
    var init = function () {
        $(".js-toggle-follow").click(toggleFollowing);
    };


    // Main function
    var toggleFollowing = function (e) {

        followButton = $(e.target);

        var followeeId = followButton.attr("data-user-id");

        if (followButton.hasClass("btn-default"))
            followingService.createFollowing(followeeId, done, fail);
        else
            followingService.deleteFollowing(followeeId, done, fail);
    };


    // Helping function
    var done = function () {
        var text = (followButton.text() == "Follow") ? "Following" : "Follow";
        followButton.toggleClass("btn-info").toggleClass("btn-default").text(text);
    };

    var fail = function () {
        toastr.error("Something unexpected happened.");
    };

    // Caller side 
    return {
        init: init
    }

}(FollowingService);