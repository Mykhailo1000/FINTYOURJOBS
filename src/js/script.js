window.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".header_menu");
    const hamburger = document.querySelector(".hamburger");
  
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger_active");
      menu.classList.toggle("menu_active");
    });
  });

