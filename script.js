// select element function
const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(`Error wrong with ${selector}`);
};
// toggle body theme
const toggleThemeBtn = selectElement(".toggle-theme");
const body = document.body;
// check default theme
if (localStorage.getItem("theme")) {
  body.classList.add("theme");
}
// toggle theme evenet listener
toggleThemeBtn.addEventListener("click", () => {
  toggleThemeBtn.classList.toggle("actived");
  body.classList.toggle("theme");
  if (body.classList.contains("theme")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.removeItem("theme");
  }
});
// open menu
const links = selectElement(".links");
const openLinksBtn = selectElement(".open-menu");

openLinksBtn.addEventListener("click", () => {
  links.classList.toggle("actived");
});
// open and close search
const closeSearchBtn = selectElement(".close-search-btn");
const search = selectElement(".search-section");
const opneSearchBtn = selectElement(".open-search");

opneSearchBtn.addEventListener("click", () => {
  search.classList.add("actived");
});

closeSearchBtn.addEventListener("click", () => {
  search.classList.remove("actived");
});

window.addEventListener("keyup", (e) => {
  if (e.key === "Escape" && search.classList.contains("actived")) {
    search.classList.remove("actived");
  }
});

// swiper

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    700: {
      slidesPerView: 2,
    },
  },
});

// scrol change nav box shadow
const header = selectElement(".header");
window.addEventListener("scroll", () => {
  if (this.scrollY > 10) {
    header.classList.add("actived");
  } else {
    header.classList.remove("actived");
  }
});
