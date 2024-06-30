(function ($) {
    "use strict";


    jQuery(document).ready(function ($) {





        //------------ Hero slider -------------

        $('.card__active').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dot: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        })

        //------------ Hero slider -------------


        $('.bot__active').owlCarousel({
            loop:true,
            nav:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1200:{
                    items:3
                }
            }
        })


        //---owl dots number-----

        var i = 1;

        $('.hero-slier-main.owl-carousel .owl-dot').each(function () {
            $(this).text(i);
            i++;
        });

        //---owl dots number-----




    }); //---document-ready-----





}(jQuery));