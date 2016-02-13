$(document).ready(function() {
    $('.slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, ]
    });

    $('.request-slider').slick({
        dots: false,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, ]
    });

    $('.carousel').slick({
        prevArrow: "<img class='a-left control-c prev slick-prev' src='img/arrow-left.png'>",
        nextArrow: "<img class='a-right control-c next slick-next' src='img/arrow-right.png'>",
        dots: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: true
            }
        }, {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 481,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 322,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, ]
    });

    // $('.top-slider').slick({
    //     dots: true,
    //     arrows: false,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //     infinite: true,
    //       responsive: [
    //           {
    //             breakpoint: 1024,
    //             settings: {
    //               slidesToShow: 1,
    //               slidesToScroll: 1,
    //               infinite: true,
    //               dots: true
    //             }
    //           },
    //           {
    //             breakpoint: 768,
    //             settings: {
    //               slidesToShow: 1,
    //               slidesToScroll: 1
    //             }
    //           },
    //           {
    //             breakpoint: 480,
    //             settings: {
    //               slidesToShow: 1,
    //               slidesToScroll: 1
    //             }
    //           },
    //           {
    //             breakpoint: 320,
    //             settings: {
    //               slidesToShow: 1,
    //               slidesToScroll: 1
    //             }
    //           },
    //         ]
    // });

    $('.bottom-slider').slick({
        prevArrow: "<img class='a-left control-c prev slick-prev' src='../../media/icons/general-product-left.png'>",
        nextArrow: "<img class='a-right control-c next slick-next' src='../../media/icons/general-product-right.png'>",
        dots: false,
        arrows: true,
        slidesToShow: 3,
        autoplay: false,
        infinite: true,
        centerMode: true,
        centerPadding: '80px',
        variableWidth: true,
        responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ],
		focusOnSelect: true
    });
});
