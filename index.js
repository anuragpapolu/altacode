$("#scroll").click(function() {
    alert($(".content-section-a").offset().top);
    $('html, body').animate({
        scrollTop: $(".content-section-a").offset().top
    }, 1000);
});
