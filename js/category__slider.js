$(document).ready(function() {
    $('.chead__slider').slick ({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: false,
        centerMode: true,
        centerPadding: '30px',
    });

    // $('.clist__item__group__img').slick ({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: true,
    //     dots: false,
    // });
});