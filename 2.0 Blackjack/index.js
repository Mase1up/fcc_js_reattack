
let firstCard = 10;
let secondCard = 11;
let isAlive = true;
let hasBlackjack = false;
let sum = firstCard + secondCard;
let message = "";

// console.log(sum);

function startGame() {
    isAlive = true;
    hasBlackjack = false;

    if (sum < 21) {
        message = "Do you want to hit?";
    } else if (sum === 21) {
        hasBlackjack = true;
        message = "Blackjack!  Congratulations!";
    } else {
        isAlive = false;
        message = "Sorry, you busted.  Play again?";
    }

    // console.log(message);
}
