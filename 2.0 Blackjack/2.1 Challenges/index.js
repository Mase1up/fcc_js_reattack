let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

largeCountries.pop();
largeCountries.push("Pakistan");
largeCountries.shift();
largeCountries.unshift("China");
// console.log(largeCountries);

let dayOfMonth = 13;
let dayOfWeek = "Friday";

if (dayOfMonth === 13 && dayOfWeek === "Friday") {
    // console.log("Spooky Emoji");
}

// Create a function that returns a random item from the following array

let hands = ["rock", "paper", "scissors"]

function playGame() {
    //Generate random number 0-2
    let randomNumber = Math.floor(Math.random() * 3);
    console.log(hands[randomNumber]);
}

// playGame();




function altGame() {
    let randomNumber = Math.floor(Math.random() * 3);
    return hands[randomNumber];
}

// console.log(altGame());

// The above is exactly how Per did it, and I was trying so hard to
// figure out how to do it without bracket notation.



let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

// Create a function that puts the apples on the appleshelf
// and the oranges on the orangeshelf.  Use a for loop,
// a conditional statement, and the textContent property.


function fruitSort() {
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "🍎") {
            appleShelf.textContent += "🍎";
        } else if (fruit[i] === "🍊") {
            orangeShelf.textContent += "🍊";
        } else {
            console.log("Error, something other than an apple or orange is in the array");
        }
    }
}

