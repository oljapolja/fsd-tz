$(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: "",
        // autoplay: true,
        autoplayHoverPause: true,
        smartSpeed: 500,
        responsive: {
            0: {
                items: 1
            }
        }
    });


    $('.slider-button-prev').click(function () {
        $('.owl-carousel').trigger("prev.owl");
    });

    $('.slider-button-next').click(function () {
        $('.owl-carousel').trigger("next.owl");
    });
});