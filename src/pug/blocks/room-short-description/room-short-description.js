$(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        // margin: 0,
        nav: true,
        navText: "",
        // autoplay: true,
        // autoplayHoverPause: true,
        // autoWidth: true,
        // items: 1,
        responsive: {
            0: {
                items: 1
            }
        }
    });


    $('.slider-button-prev').click(function () {
        $(this).parent().children('.owl-carousel').trigger("prev.owl");
        // $('.owl-carousel').trigger("prev.owl");
    });

    $('.slider-button-next').click(function () {
        $(this).parent().children('.owl-carousel').trigger("next.owl");
        // $('.owl-carousel').trigger("next.owl");
    });
});