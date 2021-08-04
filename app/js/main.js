$(function () {
  $('.main-slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="images/sprite/arrow-left.svg" alt="стрелка влево"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/sprite/arrow-right.svg" alt="стрелка вправо"></button>',
    // responsive: [
    //   {
    //     breakpoint: 1400,
    //     settings: {
    //       arrows: false,
    //       dots: true,
    //     }
    //   }
    // ]
    // ломает изображения в слайдере при размере указаной ширине
  });

  $('.brands__box').slick({
    slidesToShow: 6,
    arrows: false,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });

  $('.user__link--cart').on('click', function () {
    $('.cart').toggleClass('cart--active'),
    $('body').addClass('body--lock');
  });

  $('.close--cart').on('click', function () {
    $('.cart').toggleClass('cart--active'),
    $('body').removeClass('body--lock');
  });

  $('.header__burger').on('click', function () {
    $('.menu').addClass('menu--active'),
    $('body').addClass('body--lock');
  });

  $('.close--menu').on('click', function () {
    $('.menu').removeClass('menu--active'),
    $('body').removeClass('body--lock');
  });

  $('.user__item--search').on('click', function () {
    $('.search').toggleClass('search--active');
  });

  $('.header__catalog').hover(function () {
    $('.catalog').toggleClass('catalog--active');
  });



  var containerEl1 = document.querySelector('[data-ref="top-products"]');
  var containerEl2 = document.querySelector('[data-ref="promo"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);
})