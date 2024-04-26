const listFruits = ["anguria", "pomodori", "mandarini", "arance", "uva"];

let fruits = 0;
let shopList = "";
let ulList = document.getElementById("list");

while (fruits < listFruits.length) {
    console.log(listFruits[fruits]);
    let li = `<li>${listFruits[fruits]}</li>`;
    shopList += li;
    fruits++;
}
ulList.innerHTML = shopList;
console.log(shopList);