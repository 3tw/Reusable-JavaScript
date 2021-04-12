/* Swiper props */

const defaultSliderProps = {
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 10,
  updateOnWindowResize: true,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    hide: false,
    snapOnRelease: false
  },
  mousewheel: {
    forceToAxis: true,
    invert: true
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    576: {
      slidesPerView: 3
    }
  }
}
