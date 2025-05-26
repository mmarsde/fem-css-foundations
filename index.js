const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu");
const close_icon = document.querySelector(".close");
const body = document.querySelector(".body");

menu.addEventListener("click", () => {
  nav.classList.add("nav--visible");
  menu.classList.add("menu--hide");
  close_icon.classList.add("close--show");
  body.classList.add("body--no-scroll");
});

close_icon.addEventListener("click", () => {
  nav.classList.remove("nav--visible");
  menu.classList.remove("menu--hide");
  close_icon.classList.remove("close--show");
  body.classList.remove("body--no-scroll");
});
