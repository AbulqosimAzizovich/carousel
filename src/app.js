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
