function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("open");
}

const toggleButton = document.getElementById("toggle-button");
const hiddenContent = document.getElementById("hidden-content");
const arrowImg = document.getElementById("arrow-img");
const personalTexts = document.querySelector(".personal-texts");
const openTexts = document.querySelector(".open-texts");

toggleButton.addEventListener("click", () => {
  hiddenContent.classList.toggle("active");
  personalTexts.classList.toggle("open");

  const isActive = hiddenContent.classList.contains("active");
  arrowImg.style.transform = isActive ? "rotate(180deg)" : "rotate(0deg)";
  openTexts.classList.toggle("orange", isActive);
});

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY;

  sections.forEach((section, index) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    const buffer = window.innerHeight / 3;

    if (scrollPos >= top - buffer && scrollPos < top + height - buffer) {
      navLinks.forEach((link) => link.classList.remove("active"));

      const activeLink = document.querySelector(`nav ul li a[href="#${id}"]`);
      if (activeLink) activeLink.classList.add("active");
    }

    if (
      index === sections.length - 1 &&
      scrollPos + window.innerHeight >= document.body.scrollHeight
    ) {
      navLinks.forEach((link) => link.classList.remove("active"));
      const activeLink = document.querySelector(`nav ul li a[href="#${id}"]`);
      if (activeLink) activeLink.classList.add("active");
    }
  });
});

const mobileLinks = document.querySelectorAll(".Mobile_Menu a");

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("mobileMenu");
    menu.classList.remove("open");
  });
});
