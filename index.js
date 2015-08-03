$("#scroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#next").offset().top
    }, 1000);
});
