const toggleMenu = document.querySelector(".menu-toggle");
const sideBar = document.querySelector(".side-bar");
const homePage = document.querySelector(".homePage");

toggleMenu.addEventListener("click", function () {
  sideBar.classList.toggle("translate-x-0");
  sideBar.classList.toggle("opacity-100");
});
