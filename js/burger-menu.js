const burgerMenu = document.querySelector(".burger-menu");
const headerContent = document.querySelector(".header-container");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  headerContent.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  burgerMenu.classList.remove("active");
  headerContent.classList.remove("active");
}))