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

// ----- SCROLLREVEAL -----

window.reveals = ScrollReveal({ reset: true });

// ----- HEADER -----

reveals.reveal(".logo", {
  duration: "2000",
  distance: "80px",
  delay: "150",
  origin: "top",
});

reveals.reveal("#icon", {
  duration: "2000",
  distance: "80px",
  delay: "150",
  origin: "right",
});

// reveals.reveal(".internal-links, .external-links", {
//   duration: "2000",
//   distance: "80px",
//   delay: "150",
//   origin: "right",
// });

// ----- BANNER -----

reveals.reveal(".banner img, .banner #hash-text", {
  duration: "2000",
  distance: "80px",
  delay: "150",
  origin: "bottom",
});

// ----- BENEFIT -----

reveals.reveal(".benefit .card", {
  duration: "2000",
  distance: "80px",
  delay: "150",
  origin: "bottom",
});

reveals.reveal(".benefit .intro span", {
  duration: "2000",
  distance: "80px",
  delay: "150",
  origin: "top",
});

// ----- PRODUCT -----

reveals.reveal(".product .text .title", {
  duration: "2000",
  distance: "80px",
  delay: "150",
  origin: "left",
});

reveals.reveal(".product .text .subtitle, .product p, .product .img", {
  duration: "2000",
  distance: "80px",
  delay: "150",
  origin: "right",
});

// ----- SHOPPING -----

reveals.reveal(".back-shopp .buy", {
  duration: "2000",
  distance: "80px",
  delay: "150",
  origin: "left",
});

reveals.reveal(".back-shopp .resale", {
  duration: "2000",
  distance: "80px",
  delay: "150",
  origin: "right",
});

// ----- CONTACT -----

reveals.reveal(".address .title, .address .subtitle, .address p", {
  duration: "2000",
  distance: "80px",
  delay: "150",
  origin: "right",
});

// ----- FOOTER -----

reveals.reveal("footer .box", {
  duration: "2000",
  distance: "80px",
  delay: "150",
  origin: "bottom",
});
