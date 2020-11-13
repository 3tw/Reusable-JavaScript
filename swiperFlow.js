/* Swiper */

// Add swiper settings

const swiperSettings = {
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

// Add swiper to array
const allSwipersArray = [{ class: '.swiper-container', settings: swiperSettings }]

// Create array of Swiper objects

let swiperInstances = allSwipersArray.map((swiper) => {
  swiper.instance = new Swiper(swiper.class, swiper.settings)
  return swiper
})
