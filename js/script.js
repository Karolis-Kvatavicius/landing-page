$(document).ready(function() {
    $(document).scroll(function () {
        var scroll = $(this).scrollTop();
        var topDist = $("#navbar").position();
        if (scroll > topDist.top) {
            $('nav').css({"position":"fixed","top":"0", "margin-top": "0", "width": "100%", "z-index": "10"});
        } else {
            $('nav').css({"position":"static","top":"auto", "margin-top": "20px"});
        }
    });
});