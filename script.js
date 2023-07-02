const menu = document.querySelector(".container-menu");

window.addEventListener("scroll", () => {
  menu.classList.toggle("disappear", window.scrollY > 0);
});
