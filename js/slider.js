// Init Swiper
var swiper = new Swiper('.swiper', {
  // Install Plugin To Swiper
  modules: [myPlugin],
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets',
  },
  // Optional Parameter
  spaceBetween: 5,
  slidesPerView: 2,
  loop: false,
  freeMode: true,
  loopAdditionalSlides: 5,
  speed: 600,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
          // when window width is >= 540px
          540: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              freeMode: false
          },
          // when window width is >= 640px
          640: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              freeMode: false
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 5,
            slidesPerGroup: 5,
            freeMode: false
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 6,
            slidesPerGroup: 6,
            freeMode: false
          }
      },
  // Enable debugger
  debugger: true,
});