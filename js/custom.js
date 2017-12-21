'use strict';

$('.about-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    items: 1,
});

$('.teacher').owlCarousel({
  loop:true,
  // margin:90,
  responsiveClass:true,
  autoplay: true,
  smartSpeed:1000,
  dots: false,
  autoplayTimeout:2000,
  responsive:{
      0:{
          items:1
      },
      500:{
          items:2
      },
      767:{
          items:3
      },
      1000:{
          items:4
      },
      1300:{
          items:5
      },
      1600:{
          items:6
      }
    }
});

$('#slider-news').owlCarousel({
  loop:true,
  margin: 0,
  responsiveClass:true,
  smartSpeed:1000,
  nav: true,
  autoplayTimeout:2000,
  responsive:{
    0:{
        items:1,
        dots: false
    },
    767:{
        items:2,
        dots: false
    },
    992:{
        items:3,
        dots: true
    }
  },
  onInitialized: function() {
    var dot = document.querySelectorAll('.all-news__row .owl-dot');

    for (var i = 0; i < dot.length; i++) {
      dot[i].innerHTML = i + 1;
    }
  }
});


