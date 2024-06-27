// 1. Create two variables, firstCard and secondCard
// Set their values to random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards

let firstCard = 9;
let secondCard = 4;

let sum = firstCard + secondCard;

console.log(sum);

if (sum < 21) {
    console.log("Do you want to hit?");
} else if (sum === 21) {
    console.log("Blackjack!  Congratulations!");
} else {
    console.log("Sorry, you busted.  Play again?");
}