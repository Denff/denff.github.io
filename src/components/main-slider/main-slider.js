(function($) {
  $('.main-slider').slick({
    dots: false,
    arrows: false,
    infinite: false,
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    autoplaySpeed: 9000,
    // variableWidth: true,
    speed: 800,
    fade: false,
    adaptiveHeight: false,
    vertical: false,
    verticalSwiping: false,
    // slidesPerRow: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    // appendDots: $('.st_4__dots'),
    // prevArrow: $('.arrow__prev'),
    // nextArrow: $('.arrow__next'),
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // if ( $('.st_4__dots li').length == 1 ) {
  //   $('.st_4__dots').hide();
  // }
  //
  // $(window).resize(function(){
  //   if ( $('.st_4__dots li').length == 1 ) {
  //     $('.st_4__dots').hide();
  //   }
  //   else {
  //       $('.st_4__dots').show();
  //   }
  // })

})(jQuery);
