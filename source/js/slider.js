// слайдер рехабов
$(document).ready(function () {

  let doctorsSwiper = new Swiper('#doctors-swiper', {
    slidesPerView: '2',
    spaceBetween: 25,
    touchRatio: 1,

    watchSlidesVisibility: true, // удаляем тень у слайдов вне поля видимости

    navigation: {
      nextEl: '.doctors-swiper__button-next',
      prevEl: '.doctors-swiper__button-prev',
    },

    breakpoints: {
      756: {
        slidesPerView: '3',
        spaceBetween: 20,
      },
      // 550: {
      //   slidesPerView: '3',
      //   spaceBetween: 30,
      // }
    }
  });
});
