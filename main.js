// localStorage.setItem("ism", "Doston");
// const result = localStorage.getItem("ism");
// console.log(result);
// // localStorage.removeItem("ism");
// if (localStorage.getItem("ism")) {
//     console.log("Ism mavjud");
// } else {
//     console.log("Ism mavjud emas");
// }
// // const ask = prompt("Sevimli rangingiz: ");
// // localStorage.setItem("favorite color", ask);
// // console.log("Sevimli rangi: " + localStorage.getItem("favorite color"))
// // localStorage.clear();
//
// localStorage.setItem("rang", "qora");
// const len = localStorage.length;
// console.log(len);
//
// const first = localStorage.key(0);
// console.log(first);
//
// localStorage.setItem("shahar", "Samarqand");
// localStorage.setItem("shahar", "Toshkent");
// console.log(localStorage.getItem("shahar"));
//
// if (localStorage.length > 0) {
//     console.log("Kiritilgan");
// } else {
//     console.log("Mehmon");
// }
//
// const user = {
//     name: "Doston",
//     age: 20,
// };
// const result2 = JSON.stringify(user);
// console.log(result2);
//
// const result3 = JSON.parse(result2).name;
// console.log(result3);
//
// const ob = {};
// const js = JSON.stringify(ob);
// localStorage.setItem("ob", js);
//
// const arr = [1, 2, 3, 4, 5];
// const js2 = JSON.stringify(arr);
// localStorage.setItem("arr", js2);
// const arr2 = JSON.parse(localStorage.getItem("arr"));
// arr2.push(6);
// const js3 = JSON.stringify(arr2);
// localStorage.setItem("arr", js3);
// const check = localStorage.getItem("arr");
// console.log(check);
//
// const settings = {
//     theme: "dark",
//     fontSize: "16px",
// };
// localStorage.setItem("settings", JSON.stringify(settings));
// console.log(localStorage.getItem("settings"));
//
// const mahsulotlar = {salom: "alik"};
// localStorage.setItem("mahsulotlar", JSON.stringify(mahsulotlar));
// localStorage.removeItem("mahsulotlar");
//
// const win = window;
// win.addEventListener("load", (e) => {
// });


const List = document.querySelector(".list");
const Ask = new XMLHttpRequest();

Ask.addEventListener("readystatechange", (e) => {
    if (Ask.readyState === 4) {
        const info = JSON.parse(Ask.responseText);
        info.forEach((element) => {
            List.innerHTML += `
                <div class="list-item">
                    <h3 class="title">${element.title}</h3>
                    <p class="number">${element.id}</p>
                    <p class="mes">${element.completed}</p>
                    <button class="add">Add</button>
                </div>
            `;
        });
    }
});

let array = [];
const add = document.querySelectorAll(".add");
const basketList = document.querySelector(".basket-list");
const basketItem = document.querySelector(".basket-item");
Ask.open("GET", "https://jsonplaceholder.typicode.com/todos");
Ask.send();