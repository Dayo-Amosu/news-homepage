const closeMenu = document.querySelector(".menu-close");
const openMenu = document.querySelector(".menu-open");
const links = document.querySelector(".nav-links");
const menu = document.querySelector(".menu");

openMenu.addEventListener("click", () => {
  openMenu.classList.add("hidden");
  menu.classList.remove("hidden");
});

closeMenu.addEventListener("click", () => {
  menu.classList.add("hidden");
  openMenu.classList.remove("hidden");
});
