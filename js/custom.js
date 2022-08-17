jQuery(function ($) {
  'use strict';
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 50) {
      $('.main-nav').addClass('menu-shrink');
    } else {
      $('.main-nav').removeClass('menu-shrink');
    }
  });

  $('.popup-youtube').magnificPopup({
    disableOn: 300,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  $('.home-slider').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    dots: true,
    smartSpeed: 1000,
    autoplay: false,
    autoplayTimeout: 9000,
    autoplayHoverPause: true,
    navText: ["<i class='icofont-simple-left'></i>", "<i class='icofont-simple-right'></i>"],
  });


});