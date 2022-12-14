"use strict";

// Fixed header on scroll
$(window).bind('scroll', function () {
  if ($(window).scrollTop() > 60) {
    $('.header').addClass('fixed');
  } else {
    $('.header').removeClass('fixed');
  }
});
$(document).ready(function () {
  $(".products__slider").slick({
    centerPadding: "40px",
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev"><img  src="src/img/left-arrow.png" alt="slide"></button>',
    nextArrow: '<button type="button" class="slick-next"><img  src="src/img/right-arrow.png" alt="slide"></button>',
    dots: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        dots: true
      }
    }]
  });
  $(".reviews__slider").slick({
    centerPadding: "40px",
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    dots: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        dots: true
      }
    }]
  });
  $(".shoes-main__slider").slick({
    centerPadding: "40px",
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev"><img  src="src/img/shoes/prev-arrow.png" alt="slide"></button>',
    nextArrow: '<button type="button" class="slick-next"><img  src="src/img/shoes/next-arrow.png" alt="slide"></button>',
    dots: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        dots: true
      }
    }]
  });
  $(".shoes-categories__slider, .shoes-bestsellers__slider, .shoes-reviews__slider").slick({
    centerPadding: "40px",
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
    arrows: false,
    dots: true,
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        dots: true
      }
    }]
  });
  $('ul.shoes-new__tabs').on('click', 'li:not(.shoes-new__tab-active)', function () {
    $(this).addClass('shoes-new__tab-active').siblings().removeClass('shoes-new__tab-active').closest('div.container').find('div.shoes-new__wrapper').removeClass('shoes-new__wrapper-active').eq($(this).index()).addClass('shoes-new__wrapper-active');
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var deadline = '2022-09-29 23:59:59';
  var timerId = null;

  function declensionNum(num, words) {
    return words[num % 100 > 4 && num % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]];
  }

  function countdownTimer() {
    var diff = deadline - new Date();

    if (diff <= 0) {
      clearInterval(timerId);
    }

    var total = Date.parse(deadline) - Date.parse(new Date());
    var seconds = Math.floor(total / 1000 % 60);
    var minutes = Math.floor(total / 1000 / 60 % 60);
    var hours = Math.floor(total / (1000 * 60 * 60) % 24);
    var days = Math.floor(total / (1000 * 60 * 60 * 24));
    $days.textContent = days < 10 ? '0' + days : days;
    $hours.textContent = hours < 10 ? '0' + hours : hours;
    $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
    $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    $days.dataset.title = declensionNum(days, ['????????', '??????', '????????']);
    $hours.dataset.title = declensionNum(hours, ['??????', '????????', '??????????']);
    $minutes.dataset.title = declensionNum(minutes, ['????????????', '????????????', '??????????']);
    $seconds.dataset.title = declensionNum(seconds, ['??????????????', '??????????????', '????????????']);
  }

  var $days = document.querySelector('.timer__days');
  var $hours = document.querySelector('.timer__hours');
  var $minutes = document.querySelector('.timer__minutes');
  var $seconds = document.querySelector('.timer__seconds');
  countdownTimer();
  timerId = setInterval(countdownTimer, 1000);
}); // Validate form

$(document).ready(function () {
  function valideForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        // phone: "required",
        email: {
          required: true,
          email: true
        },
        phone: {
          required: true,
          minlength: 10
        },
        password: {
          required: true,
          minlength: 5
        },
        password_confirm: {
          required: true,
          minlength: 5,
          equalTo: '[name="password"]'
        }
      },
      messages: {
        name: {
          required: "Please enter your name",
          minlength: jQuery.validator.format("Enter {0} character!")
        },
        phone: {
          required: "Please enter your phone number",
          minlength: jQuery.validator.format("Enter {0} character!")
        },
        email: {
          required: "Please enter your email",
          email: "Incorrectly entered email address"
        },
        password: {
          required: "Please enter your password"
        }
      }
    });
  }

  ;
  valideForms('#registration');
  valideForms('#subscribtion');
});