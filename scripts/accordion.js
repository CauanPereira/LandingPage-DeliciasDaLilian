// --- ACCORDION FUNCTIONALITY ---

console.log("Accordion script file loaded");

document.addEventListener("DOMContentLoaded", function () {
  console.log("Accordion script loaded successfully");

  // Aguarda um pouco para garantir que o DOM está completamente carregado
  setTimeout(function () {
    initializeAccordion();
  }, 100);
});

function initializeAccordion() {
  console.log("Initializing accordion...");

  const accordionItems = document.querySelectorAll(".accordion-item");
  console.log("Found accordion items:", accordionItems.length);

  if (accordionItems.length === 0) {
    console.warn(
      "No accordion items found. Check if the HTML structure is correct."
    );
    console.log(
      "Available elements with 'accordion' in class:",
      document.querySelectorAll("[class*='accordion']")
    );
    return;
  }

  accordionItems.forEach((item, index) => {
    const header = item.querySelector(".accordion-header");
    const content = item.querySelector(".accordion-content");

    if (!header) {
      console.error(`No header found for accordion ${index + 1}`);
      return;
    }

    if (!content) {
      console.error(`No content found for accordion ${index + 1}`);
      return;
    }

    console.log(
      `Setting up accordion ${index + 1}:`,
      header.textContent.trim()
    );

    // Remove event listeners anteriores para evitar duplicação
    header.removeEventListener("click", handleAccordionClick);

    // Adiciona o event listener
    header.addEventListener("click", handleAccordionClick);

    function handleAccordionClick(e) {
      e.preventDefault();
      e.stopPropagation();

      console.log(`Accordion ${index + 1} clicked:`, header.textContent.trim());

      // Fecha todos os outros acordeões
      accordionItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
          const otherContent = otherItem.querySelector(".accordion-content");
          if (otherContent) {
            otherContent.style.maxHeight = "0";
          }
        }
      });

      // Alterna o estado do acordeão atual
      const isActive = item.classList.contains("active");

      if (isActive) {
        item.classList.remove("active");
        content.style.maxHeight = "0";
        console.log(`Accordion ${index + 1} closed`);
      } else {
        item.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px";
        console.log(`Accordion ${index + 1} opened`);
      }
    }

    // Inicializa o estado (fechado)
    content.style.maxHeight = "0";
  });

  console.log("Accordion initialization completed");
}
