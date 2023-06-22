let list = document.querySelector(".slide_list"),
  images = document.querySelectorAll(".slide_list img"),
  next = document.querySelector("#right"),
  prev = document.querySelector("#left");

console.log(images.length);
let count = 0;

function slider() {
  if (count > images.length - 2) {
    count = 0;
  }

  if (count < 0) {
    count = images.length - 2;
  }

  list.style.transform = `translateX(-${count * 1360}px)`;
}

next.addEventListener("click", () => {
  count++;
  slider();
});

const navMenuBtn = document.getElementById("nav-menu-btn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-btn");
const reds = document.querySelector(".reds");
const redsBackdrop = document.querySelector(".reds-backdrop");
const torti = document.querySelector(".torti");
const nestedTorti = document.querySelector(".nested-torti");

navMenuBtn.addEventListener("click", () => {
  modal.style.transform = "translateX(0)";
  modal.style.transition = "all 0.2s linear";
  reds.style.transform = "translateX(0)";
  reds.style.transition = "all 0.2s linear";
  redsBackdrop.style.zIndex = "997";
  redsBackdrop.style.backgroundColor = "rgba(0, 0, 0, 0.15)";
  redsBackdrop.style.transition = "all 0.2s linear";
});

closeBtn.addEventListener("click", () => {
  modal.style.transform = "translateX(-100vh)";
  modal.style.transition = "all 0.2s linear";
  reds.style.transform = "translateX(-100vh)";
  reds.style.transition = "all 0.2s linear";
  redsBackdrop.style.zIndex = "-1";
  redsBackdrop.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
  redsBackdrop.style.transition = "all 0.2s linear";
});

const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});