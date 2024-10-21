document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 2,
      spaceBetween: 20,
      autoplay: {
          delay: 2500,
          disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  });
