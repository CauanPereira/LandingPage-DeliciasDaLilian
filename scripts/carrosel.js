const swiper = new Swiper(".mySwiper", { // Certifique-se que a classe é a mesma do seu HTML
  // Configurações Gerais
  loop: true, // Habilita o loop infinito
  autoplay: {
      delay: 5000,
      disableOnInteraction: false,
  },
  
  // Navegação
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },

  // Paginação
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },

  // --- PONTO CHAVE DA RESPONSIVIDADE ---
  // Define quantos slides e qual o espaçamento em diferentes tamanhos de tela
  
  slidesPerView: 1, // Padrão para telas pequenas (mobile-first)
  spaceBetween: 20,

  breakpoints: {

    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    500: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 25,
      
    }
  },
});