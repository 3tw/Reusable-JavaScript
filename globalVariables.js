/* Active page data */

// Find element with "active-page" class
const activePage = document.getElementsByTagName("body")[0];

// List all page-specific classes and appropriate items to be indexed
const pageIndexesAndItems = [
  { pageIndex: "page-template-about-us", markedItem: ".menu-item-about-us" },
  { pageIndex: "page-template-products", markedItem: ".menu-item-products" },
  { pageIndex: "page-template-delivery", markedItem: ".menu-item-delivery" },
  { pageIndex: "page-template-contact", markedItem: ".menu-item-contact" }
];

// Find active page
// Call function here to get the correct order
determineActivePage(activePage, pageIndexesAndItems);

// Find element with "active-page" class
const activePageItems = document.querySelectorAll(".active-page");

/* Swiper data */

// Add swiper settings

const swiperSettings = {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 10,
  updateOnWindowResize: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
    hide: false,
    snapOnRelease: false
  },
  mousewheel: {
    forceToAxis: true,
    invert: true
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    576: {
      slidesPerView: 3,
    }
  }
};

// Add swiper to array
const allSwipersArray = [
  { class: ".swiper-container", settings: swiperSettings },
];

// Create array of Swiper objects 
// ----- move to seperate file

//  let swiperInstances = allSwipersArray.map((swiper) => {
//   swiper.instance = new Swiper(swiper.class, swiper.settings);
//   return swiper;
// });