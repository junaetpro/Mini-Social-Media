const swiper = new Swiper('.event_box .swiper', {
  loop: true,


  spaceBetween: 5,
  mousewheel: true,
  keyboard: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

});

const swiper2 = new Swiper('.story_box .swiper', {
  mousewheel: true,
  keyboard: true,
  loop: true,
  slidesPerView: 6,
  spaceBetween: 5,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
el: ".swiper-pagination",
type: "progressbar"
}

  

});

