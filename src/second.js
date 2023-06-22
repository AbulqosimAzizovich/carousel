const lsc = document.getElementById("lsc");
const lsc1 = document.getElementById("lsc1");
const aksiya = document.getElementById("aksiya");

function render() {
    let res = "";
    data.map((value) => {
        res += `
                <div class="card__item w-[350px] bg-[#eee] h-[510px] rounded-[15px]">
                  <img class="w-[350px]" src="${value.image}" alt="${value.title}" />
                  <h3 class="text-center text-[20px] text-[#3A3A3A] mt-[10px]  py-4">
                    ${value.title}
                  </h3>

                  <div class="flex justify-between mt-4 text-[#BABABA] px-4">
                    <p>${value.title1}</p>
                    <p>${value.title2}</p>
                  </div>

                  <div class="flex items-center gap-4 mt-[12px] mb-3 px-4">
                    <h2 class="font-semibold text-[26px] text-[#3A3A3A]">
                      ${value.price}
                    </h2>
                    <p class="text-[#BABABA]">${value.mass}</p>
                  </div>
                </div>
        `;

       
    });
    let ds = ""
    data_1.map((e) => {
        ds += `
        <div class="container">
            <div class="wrapper h-435px pt-[30px] ps-[30px] bg-[#F4EBCF]">
                <p class="text-[34px] text-[#3A3A3A]">${e.title}</p>
                <div class="flex items-center gap-[150px] font-medium text-[60px] text-[#3A3A3A]">
                    <h2 class="h-[240px] w-[882px] flex items-center">${e.h2}</h2>
                    <img class="w-[245px] h-[245px]" src="${e.img}" alt="${e.title}">
                </div>
            </div>
           
        </div>
        `;
    });
    
    
    lsc.innerHTML = res;
    lsc1.innerHTML = res;
    aksiya.innerHTML = ds;
}

render();





// const res = `

//     <div class="card__item w-[350px] h-[420px] px-6 py-4">
//                   <img src="./assets/images/t1.png" alt="tort1" />
//                   <h3 class="text-center text-[20px] text-[#3A3A3A]">
//                     Торт "Наполеон" классический
//                   </h3>

//                   <div class="flex justify-between mt-4 text-[#BABABA]">
//                     <p>Купили более 300 раз</p>
//                     <p>(96)❤️</p>
//                   </div>

//                   <div class="flex items-center gap-4">
//                     <h2 class="font-semibold text-[26px] text-[#3A3A3A]">
//                       1 600 ₽
//                     </h2>
//                     <p class="text-[#BABABA]">1,25 кг.</p>
//                   </div>
//                 </div>

// `;
let z = `<section id="aksiya">
        <p class="text-[34px] text-[#3A3A3A]">Акция дня</p>
        <div>
          <h2>ТРИ ШОКОЛАДА В БАНОЧКЕ СО СКИДКОЙ 30%</h2>
          <img src="./assets/images/Group 101.png" alt="">
        </div>
</section>`