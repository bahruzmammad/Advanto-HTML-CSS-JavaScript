const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

if (menuBtn && navLinks) {
  const menuBtnIcon = menuBtn.querySelector("i");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");

    if (menuBtnIcon) {
      menuBtnIcon.setAttribute(
        "class",
        isOpen ? "ri-close-line" : "ri-menu-3-line",
      );
    }
  });

  navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");

    if (menuBtnIcon) {
      menuBtnIcon.setAttribute("class", "ri-menu-3-line");
    }
  });
}

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header-content h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header-content .description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header-content form", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header-content > img", {
  ...scrollRevealOption,
  origin: "left",
  delay: 1500,
});

ScrollReveal().reveal(".about-content .section-title", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".about-content .description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".signature", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".tour-card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".destination-card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
});

ScrollReveal().reveal(".blog-card", {
  ...scrollRevealOption,
  interval: 500,
});

const banner = document.querySelector(".banner-wrapper");

if (banner) {
  const bannerImages = Array.from(banner.children);

  bannerImages.forEach((image) => {
    const duplicateImage = image.cloneNode(true);

    duplicateImage.setAttribute("aria-hidden", "true");

    banner.appendChild(duplicateImage);
  });
}
