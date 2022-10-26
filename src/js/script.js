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
        prevArrow:
            '<button type="button" class="slick-prev"><img  src="src/img/left-arrow.png" alt="slide"></button>',
        nextArrow:
            '<button type="button" class="slick-next"><img  src="src/img/right-arrow.png" alt="slide"></button>',
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    dots: true,
                },
            },
        ],
    });

    $(".reviews__slider, .watches-new__slider").slick({
        centerPadding: "40px",
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    dots: true,
                },
            },
        ],
    });


    $(".shoes-main__slider").slick({
        centerPadding: "40px",
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow:
        '<button type="button" class="slick-prev"><img  src="src/img/shoes/prev-arrow.png" alt="slide"></button>',
        nextArrow:
        '<button type="button" class="slick-next"><img  src="src/img/shoes/next-arrow.png" alt="slide"></button>',
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    dots: true,
                },
            },
        ],
    });

    $(".shoes-categories__slider, .shoes-bestsellers__slider, .shoes-reviews__slider").slick({
        centerPadding: "40px",
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    dots: true,
                },
            },
        ],
    });

    $('ul.shoes-new__tabs').on('click', 'li:not(.shoes-new__tab-active)', function() {
        $(this).addClass('shoes-new__tab-active')
          .siblings()
          .removeClass('shoes-new__tab-active')
          .closest('div.container')
          .find('div.shoes-new__wrapper')
          .removeClass('shoes-new__wrapper-active')
          .eq($(this).index())
          .addClass('shoes-new__wrapper-active');
      });
});


document.addEventListener('DOMContentLoaded', function() {
    const deadline = '2022-12-01 23:59:59';
    let timerId = null;
    function declensionNum(num, words) {
      return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }
    function countdownTimer() {
      const diff = deadline - new Date();
      if (diff <= 0) {
        clearInterval(timerId);
      }
    const total = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor( (total/1000) % 60 );
    const minutes = Math.floor( (total/1000/60) % 60 );
    const hours = Math.floor( (total/(1000*60*60)) % 24 );
    const days = Math.floor( total/(1000*60*60*24) );
    $days.textContent = days < 10 ? '0' + days : days;
    $hours.textContent = hours < 10 ? '0' + hours : hours;
    $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
    $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
    $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
    $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
    $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
        }
    const $days = document.querySelector('.timer__days');
    const $hours = document.querySelector('.timer__hours');
    const $minutes = document.querySelector('.timer__minutes');
    const $seconds = document.querySelector('.timer__seconds');
    countdownTimer();
    timerId = setInterval(countdownTimer, 1000);
  });


  // Validate form

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
                    required: "Please enter your password",
                }
            }
        });
    };
    valideForms('#registration');
    valideForms('#subscribtion');

});

$(".watches-main__slider").slick({
    centerPadding: "40px",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    variableWidth: true,
    arrows: false,
    dots: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                dots: true,
            },
        },
    ],
});
