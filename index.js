let count = 0;
let countEl = document.getElementById("count-el")

console.log(countEl);

// Psuedo-code to create incrementing button

// change the count-el to reflect new count

function increment() {
    count = count + 1;
    countEl.innerText = count;
    console.log(count)
}

