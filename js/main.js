$(function () {
    "use strict";
    // ===== Scroll to Top ==== 
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200); // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200); // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function () { // When arrow is clicked
        $('body,html').animate({
            scrollTop: 0 // Scroll to top of body
        }, 500);
    });

    /* Offset start */
    var html_body = $('html, body'),
        nav = $('nav'),
        navOffset = nav.offset().top,
        $window = $(window);
    /* offset ends */


    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    $('nav a , #bannar .arrow_btn a').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 30
                }, 1500);
                return false;
            }
        }
    });

    /* navbar fixed js here */
    $window.on('scroll', function () {

        var scrollPos = $window.scrollTop();

        if (scrollPos > navOffset) {
            $('nav').addClass('navbar-fixed');
        } else {
            $('nav').removeClass('navbar-fixed');
        }

    });

    /* scrollspy menu */
    $('body').scrollspy({
        target: '#navbarSupportedContent',
        offset: 80
    });

    //slider jquery
    $(document).ready(function () {

        $("#slider1").sliderResponsive({
            // Using default everything
            // slidePause: 5000,
            // fadeSpeed: 800,
            // autoPlay: "on",
            // showArrows: "off", 
            // hideDots: "off", 
            // hoverZoom: "on", 
            // titleBarTop: "off"
        });
    });

    //chefs_slider jquery
    $('.chefs_slider').owlCarousel({
        loop: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        margin: 10,
        dots: true,
        items: 1,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
    });
   
    //blog_slider jquery
    $('.blog_slider').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            575: {
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    //testiminial_slider jquery
    $('.testiminial_slider').owlCarousel({
        loop: true,
        margin: 10,
        dots: true,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // counter up
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // reservation js
    $('.reservation_inner .time').timepicker({
        'showDuration': true,
        'timeFormat': 'g:ia'
    });
    $('.reservation_inner .date').datepicker({
        'format': 'm/d/yyyy',
        'autoclose': true
    });
    
    //preloader js
    $(window).on('load', function () {
            $("#status").delay(1000).fadeOut();
            $("#preloader").delay(1000).fadeOut("slow");
        });
    
})(jQuery);
