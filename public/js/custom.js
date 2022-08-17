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



});