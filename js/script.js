$(document).ready(function(){
  $('.reviews-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: true,
    infinite: true,
    adaptiveHeight: false,
  });

  $('.regions-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: true,
    infinite: true,
    adaptiveHeight: false,

  });

  $('.resorts-slider').slick({
        slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      dots: true,
      infinite: true,
      adaptiveHeight: false,
  });
});