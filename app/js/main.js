$(function () {
  $('.main-slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="images/sprite/arrow-left.svg" alt="стрелка влево"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/sprite/arrow-right.svg" alt="стрелка вправо"></button>'
  });

  $('.brands__box').slick({
    slidesToShow: 6,
    arrows: false,
    cssEase: 'linear'
  });


  


  var mixer = mixitup('.top-products');
  var mixer = mixitup('.promo');
})