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

