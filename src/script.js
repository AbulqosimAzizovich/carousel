let list = document.querySelector(".slide_list"),
  images = document.querySelectorAll(".slide_list img"),
  next = document.querySelector("#right"),
  prev = document.querySelector("#left");

console.log(images.length);
let count = 0;

function slider() {
  if (count > images.length - 1) {
    count = 0;
  }

  if (count < 0) {
    count = images.length - 1;
  }

  list.style.transform = `translateX(-${count * 1360}px)`;
}

next.addEventListener("click", () => {
  count++;
  slider();
});

prev.addEventListener("click", () => {
  count--;
  slider();
});

let lst = document.querySelector(".slide_list_1")
let rr = document.querySelector("#card_right");
let a = document.querySelectorAll(".slide_list_1 #lsc");
console.log(a.length);
let count1 = 0;

function card() {
    if(count1 > a.length-1){
        count1 = 0;
    }

    lst.style.transform = `translateX(-${count1 * 385}px)`

}

rr.addEventListener("click", ()=>{
    count1++;
    card();
})