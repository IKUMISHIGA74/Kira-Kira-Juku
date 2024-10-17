$(document).ready(function () {
  if (window.matchMedia('(max-width: 767px)').matches) {
    $('#js-hamburger-menu').on('click', function () {
      $('.navigation').toggleClass('open');
      $('.hamburger-menu').toggleClass('hamburger-menu--open');
    });
    $('.navigation__link').on('click', function () {
      var target = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 500);
    });
  }
});

$(document).ready(function () {
  if (window.matchMedia('(min-width: 768px)').matches) {
  $('.navigation__link').on('click', function (event) {
    event.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 500);
  });
}
});


$(function(){
  $('.tab-list-item').on('click', function(){
    let index = $('.tab-list-item').index(this);
    $('.tab-list-item').removeClass('is-tab-active');
    $(this).addClass('is-tab-active');
    $('.tab-contents').removeClass('is-contents-active');
    $('.tab-contents').eq(index).addClass('is-contents-active');
  });
}); 