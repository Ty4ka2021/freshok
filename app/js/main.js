$(function () {
  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });

  $('.main-slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="images/sprite/arrow-left.svg" alt="стрелка влево"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/sprite/arrow-right.svg" alt="стрелка вправо"></button>',
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          arrows: false,
          dots: true,
        }
      }
    ]
  });

  $('.brands__box').slick({
    slidesToShow: 6,
    arrows: false,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 3000,
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
    $('.list').toggleClass('list--active');
  });

  $('.filter__btn--categories').on('click', function () {
    $('.filter__box-categories').toggleClass('filter__box-categories--active');
    $('.filter__btn--categories').toggleClass('filter__btn--active');
  });
  $('.filter__btn--offers').on('click', function () {
    $('.filter__box-offers').toggleClass('filter__box-offers--active');
    $('.filter__btn--offers').toggleClass('filter__btn--active');
  });
  $('.filter__btn--brand').on('click', function () {
    $('.filter__box-brand').toggleClass('filter__box-brand--active');
    $('.filter__btn--brand').toggleClass('filter__btn--active');
  });
  $('.filter__btn--price').on('click', function () {
    $('.filter__box-price').toggleClass('filter__box-price--active');
    $('.filter__btn--price').toggleClass('filter__btn--active');
  });



  let containerEl1 = document.querySelector('[data-ref="top-products"]');
  let containerEl2 = document.querySelector('[data-ref="promo"]');

  let config = {
    controls: {
      scope: 'local'
    }
  };

  let mixer1 = mixitup(containerEl1, config);
  let mixer2 = mixitup(containerEl2, config);
})