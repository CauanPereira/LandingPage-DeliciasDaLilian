const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5000,
    
  },  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-prev", // Botão de avançar
    prevEl: ".swiper-button-next",// Botão de voltar
  },

  breakpoints: {

    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    500: {
      slidesPerView: 2,
      spaceBetween: 25,
    },


  },
});