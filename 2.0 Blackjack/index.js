// 1. Create two variables, firstCard and secondCard
// Set their values to random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

let firstCard = 10;
let secondCard = 11;
let isAlive = true;
let hasBlackjack = false;
let sum = firstCard + secondCard;
let message = "";

// console.log(sum);

if (sum < 21) {
    message = "Do you want to hit?";
} else if (sum === 21) {
    hasBlackjack = true;
    message = "Blackjack!  Congratulations!";
} else {
    isAlive = false;
    message = "Sorry, you busted.  Play again?";
}

// CASH OUT
// console.log(hasBlackjack);
// console.log(isAlive);
console.log(message);
