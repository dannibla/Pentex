$('#navbar-collapse-1').bind('mousewheel DOMMouseScroll', function (e) {
    var scrollTo = null;

    if (e.type == 'mousewheel') {
        scrollTo = (e.originalEvent.wheelDelta * -1);
    }
    else if (e.type == 'DOMMouseScroll') {
        scrollTo = 40 * e.originalEvent.detail;
    }

    if (scrollTo) {
        e.preventDefault();
        $(this).scrollTop(scrollTo + $(this).scrollTop());
    }
});


function toggleFullScreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) || // alternative standard method
        (!document.mozFullScreen && !document.webkitIsFullScreen)) { // current working methods
        if (document.documentElement.requestFullScreen) {
            document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
}

$("#fullscreen").click(function () {
    toggleFullScreen();
    $("#fullscreen i").toggleClass("fa-expand fa-compress");
});

document.onkeydown = function (e) {
    if (e.which == 122) {
        $("#fullscreen i").toggleClass("fa-expand fa-compress");
    }
}

$(window).load(function () {
    $(document).on('click', '.navbar .dropdown-menu', function (e) { e.stopPropagation(); });
});

$(document).ready(function () {
    $(".toTop").css("display", "none");

    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) { $(".toTop").fadeIn("slow"); } else { $(".toTop").fadeOut("slow"); }
    });

    $(".toTop").click(function () {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });
});

/* fixed - navbar */

$(window).scroll(function () {
    if ($(window).scrollTop() > 40) {
        $('#scroller').addClass('navbar-fixed-top ');
        $('#navbar-collapse .navbar-nav .dropdown').removeClass('open');
        $('#navbar-collapse-1 ul').removeClass('navbar-big-icon');
    } else {
        $('#scroller').removeClass('navbar-fixed-top ');
        $('#navbar-collapse-1 ul').addClass('navbar-big-icon');
    }
});