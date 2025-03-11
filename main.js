document.addEventListener("DOMContentLoaded", function () {
  const navbarToggle = document.getElementById("navbar");
  const closeButton = document.querySelector("nav .xmark");
  const menu = document.getElementById("menu");

  function toggleNavbar() {
    menu.classList.toggle("active");
  }

  navbarToggle.addEventListener("click", toggleNavbar);
  closeButton.addEventListener("click", toggleNavbar);
});
