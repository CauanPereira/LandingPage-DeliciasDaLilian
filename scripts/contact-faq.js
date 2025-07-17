// --- CONTACT FAQ FUNCTIONALITY ---

document.addEventListener("DOMContentLoaded", function () {
  // Botão WhatsApp
  const whatsappBtn = document.querySelector(".accordion__btn");
  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", function () {
      const phone = "7798420884";
      const message = "Olá! Gostaria de fazer uma encomenda.";
      const whatsappUrl = `https://api.whatsapp.com/send?phone=55${phone}&text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappUrl, "_blank");
    });
  }

  // Animações de reveal
  const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    reveals.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add("visible");
      }
    });
  }

  // Executa na primeira vez
  revealOnScroll();

  // Executa no scroll
  window.addEventListener("scroll", revealOnScroll);
});
