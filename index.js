$("#scroll").click(function() {
    alert("#");
    $('html, body').animate({
        scrollTop: $("#next").offset().top
    }, 1000);
});
