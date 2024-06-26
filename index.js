let count = 0;
let countEl = document.getElementById("count-el");

function increment() {
    count = count + 1;
    countEl.innerText = count;
}

function save() {
    console.log(count);
}


// Create a variable, message storing a string....

let username = "Mason";

let message = "You have three new notifications";

let fullMessage = message + ", " + username + "!";
console.log(fullMessage);

