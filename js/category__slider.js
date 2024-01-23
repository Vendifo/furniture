$(document).ready(function () {
    $('.chead__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: false,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1099,
                settings: {
                    centerPadding: '30px'
                }
            },
            {
                breakpoint: 9999, // значение должно быть больше максимальной ширины, чтобы параметры применялись всегда
                settings: {
                    centerPadding: '300px'
                }
            }
        ]
    });



    $('.clist__item__group__img').slick ({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
    });
});