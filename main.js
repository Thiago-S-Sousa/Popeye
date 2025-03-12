class Navbar {
  constructor() {
    this.menu = document.querySelector("nav");
    this.navbarToggle = document.querySelector(".navbar");
    this.closeButton = document.querySelector("nav #xmark");

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
  }
}

// Inicializa a classe quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", () => new Navbar());
