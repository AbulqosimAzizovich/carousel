"use strict";

// let text = document.querySelector(".text");
// let p = document.querySelector('p');
// let input = document.querySelector(".form-control");

// let res = input.value;

// console.log(res)
// console.log(input.value)

// console.log(input.getAttribute('value')); // attribute value

// let input = document.querySelector("#password"),
//     res = document.querySelector(".res"),
//     toggleType = document.querySelector("#toggle");

// const selectInputType = () => {
//     if (input.getAttribute('type') === "password") {
//         input.setAttribute('type', 'text');
//         toggleType.innerHTML = '<i class="bi bi-eye-slash-fill"></i>'
//     } else {
//         input.setAttribute('type', 'password');
//         toggleType.innerHTML = '<i class="bi bi-eye-fill"></i>'
//     }
// };

// input.addEventListener('keyup', (e) => {
//     if (e.target.value.length >= 6 && e.target.value.length<=10){
//        input.style.border="4px solid green";
//    }else{
//        input.style.border="4px solid red";
//    }
// })

// input.addEventListener('blur', ()=> {
//         input.style.border = "1px solid #000000";
//     })

//         toggleType.addEventListener('click', () => {
//             selectInputType()

//         })

// let h1=document.querySelector('h1');

// h1.classList.add('text-success','p-3','bg-info')
// // h1.classList.remove('bg-info','p-3','text-success')
// // console.log(h1.classList.contains('text-danger'))\
// h1.classList.toggle('bg-white');

// h1.classList.toggle('bg-white');
// console.log(h1.classList)

let navList = document.querySelector(".list"),
  navMenu = document.querySelector("#menu");

navMenu.addEventListener("click", () => {
  navList.classList.toggle("swipe");
  if (navList.classList.contains("swipe")) {
    navMenu.innerHTML = `<i class="bi bi-list"></i>`;
  } else {
    navMenu.innerHTML = ` <i class="bi bi-x-lg"></i> `;
  }
});

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

  list.style.transform = `translateX(-${count * 800}px)`;
}

next.addEventListener("click", () => {
  count++;
  slider();
});

prev.addEventListener("click", () => {
  count--;
  slider();
});
