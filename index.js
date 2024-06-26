// let count = 0;
// let countEl = document.getElementById("count-el");


// function increment() {
//     count = count + 1;
//     countEl.innerText = count;
//     console.log(count)
// }

let count = 0;
let countEl = document.getElementById("count-el");

function increment() {
    count = count + 1;
    countEl.innerText = count;
}

// 1. Create function called save(), which logs out the count when invoked

function save() {
    console.log(count);
}