class Navbar {
  constructor() {
    this.menu = document.querySelector("nav");
    this.navbarToggle = document.querySelector(".navbar");
    this.closeButton = document.querySelector("nav #xmark");
    this.navLinks = document.querySelectorAll("header nav a");

    this.addEventListeners();
  }

  toggleNavbar() {
    this.menu.classList.toggle("active");
  }

  addEventListeners() {
    if (this.navbarToggle) {
      this.navbarToggle.addEventListener("click", () => this.toggleNavbar());
    }
    if (this.closeButton) {
      this.closeButton.addEventListener("click", () => this.toggleNavbar());
    }
    this.navLinks.forEach((link) => {
      link.addEventListener("click", () => this.toggleNavbar());
    });
  }
}

// Inicializa a classe quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", () => new Navbar());

class ScrollSpy {
  constructor(sectionsSelector, navLinksSelector, offset = 150) {
    this.sections = document.querySelectorAll(sectionsSelector);
    this.navLinks = document.querySelectorAll(navLinksSelector);
    this.offset = offset;
    this.init();
  }

  init() {
    window.addEventListener("scroll", () => this.onScroll());
  }

  onScroll() {
    let top = window.scrollY;

    this.sections.forEach((sec) => {
      let offsetTop = sec.offsetTop - this.offset;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offsetTop && top < offsetTop + height) {
        this.navLinks.forEach((link) => link.classList.remove("active"));
        let activeLink = document.querySelector(`header nav a[href*="${id}"]`);
        if (activeLink) activeLink.classList.add("active");
      }
    });
  }
}

// Inicializando a funcionalidade
new ScrollSpy("section", "header nav a");
