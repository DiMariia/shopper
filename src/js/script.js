$(document).ready(function () {
    $(".products__slider").slick({
        centerPadding: "40px",
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow:
            '<button type="button" class="slick-prev"><img  src="src/img/left-arrow.png" alt="slide"></button>',
        nextArrow:
            '<button type="button" class="slick-next"><img  src="src/img/right-arrow.png" alt="slide"></button>',
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    dots: true,
                },
            },
        ],
    });

    $(".reviews__slider").slick({
        centerPadding: "40px",
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    dots: true,
                },
            },
        ],
    });
});