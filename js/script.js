"use strict";

// const btns = document.querySelectorAll("button");

// console.log(btns[0].classList.length); // 2 elementimizi ichida ikkita class borligini anglatadi
// console.log(btns[0].classList.item(1)); // some chiqazib beradi yani clasimizzi ichidagi 2 elementni

// btns[1].classList.add("blue", "some"); // yana bitta class qo'shib qo'yishimiz mumkin
// btns[0].classList.remove("blue");
// btns[0].classList.toggle("blue"); // clasimiz bor bo'lsa yoq qilib beradi yoq bo'lsa esa bor qilib beradi

// if (btns[0].classList.contains("blue")) {
//   console.log("yeap"); // agarda birinchi elementimizi ichida blue degan class bor bo'lsa "Yeap" chiqazib bersin
// }

// btns[0].addEventListener("click", () => {
//   // if (!btns[1].classList.contains("red")) {
//   //   btns[1].classList.add("red");
//   // } else {
//   //   btns[1].classList.remove("red");
//   // }// birinchi elementimizzi click qiganimizda red class bo'lsa yoq qilib berad agarda yoq bo'lsa bor qilib beradi

//   //// bu 4 qator kodimizzi bitta qatorda oson qilib yozamiz
//   btns[1].classList.toggle("red");
// });

/////////////////////////////////////////////////////////////////
//// Delegatsiya

// const wrapper = document.querySelector('.btn-block'),
//   btns = document.querySelectorAll('button')

// btns[0].addEventListener('click', () => {
//   btns[1].classList.toggle('red')
// })

// wrapper.addEventListener('click', (event) => {
//   if (event.target && event.target.matches('button.red')) {
//     console.log('btn click')
//   }
// })

// // btns.forEach((item) => {
// //   item.addEventListener('click', () => {
// //     console.log('clicked')
// //   })
// // })

// const btn = document.createElement('button')
// btn.classList.add('red')
// wrapper.append(btn)
