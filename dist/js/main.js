const swiper = new Swiper('.top__swiper', {
  // Optional parameters
  effect: 'fade',
  loop: true,
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  // Navigation arrows
  navigation: {
    nextEl: '#top-button-next',
    prevEl: '#top-button-prev',
  },
});

const swiperAbout = new Swiper('.about__slider', {
  slidesPerView: 3,
  spaceBetween: 20,
  freeMode: true,
  navigation: {
    nextEl: '#about-button-next',
    prevEl: '#about-button-prev',
  },
});

const swiperProducts = new Swiper('.products__slider', {
  slidesPerView: 3,
  spaceBetween: 8,
  // slidesPerView: 'auto',
});

document.querySelectorAll('.accordeon__triger').forEach((item) => {
  item.addEventListener('click', () => {
    item.parentNode.classList.toggle('accordeon__item--active');
  });
});
