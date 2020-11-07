/*************  burger   *************/
let user_icon = document.querySelector('.burger');
user_icon.addEventListener("click", function (e) {
  let user_menu = document.querySelector('.main-menu');
  user_menu.classList.toggle('show');
  user_icon.classList.toggle('active');
});

document.documentElement.addEventListener("click", function (e) {
  if (!e.target.closest('.burger')) {
    let user_menu = document.querySelector('.main-menu');
    user_menu.classList.remove('show');
    user_icon.classList.remove('active');
  }
});

$('.main-menu a').click(function () {
  $('.main-menu').removeClass('show');
  $('.burger').removeClass('active');
});

/****************     popup video   *************/
jQuery('a.popup-video').YouTubePopUp();

/*******    heroes slick    **************/
$('.heroes-slider-img').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  prevArrow: $('.heroes-arrow-left'),
  nextArrow: $('.heroes-arrow-right'),
  asNavFor: '.heroes-slider-content',
  autoplay: true,
  speed: 1500
});

$('.heroes-slider-content').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.heroes-slider-img',
  dots: false,
  arrows: false,
  fade: true
});
