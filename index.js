$("#scroll").click(function() {
    $('html, body').animate({
        scrollTop: $(".content-section-a").offset().top
    }, 1000);
});
