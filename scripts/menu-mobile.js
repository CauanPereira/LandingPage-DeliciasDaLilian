 // Script para o menu mobile
 const mobileMenuButton = document.getElementById('mobile-menu-button');
 const mobileMenu = document.getElementById('mobile-menu');

 mobileMenuButton.addEventListener('click', () => {
     mobileMenu.classList.toggle('hidden');
 });
 
 // Fecha o menu mobile ao clicar em um link
 const mobileMenuLinks = mobileMenu.getElementsByTagName('a');
 for (let link of mobileMenuLinks) {
     link.addEventListener('click', () => {
         mobileMenu.classList.add('hidden');
     });
 }