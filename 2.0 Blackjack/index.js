
let firstCard = 10;
let secondCard = 6;
let isAlive = true;
let hasBlackjack = false;
let sum = firstCard + secondCard;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
// let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");

// console.log(sum);

function startGame() {
    isAlive = true;
    hasBlackjack = false;
    cardsEl.textContent = "Cards: " + firstCard + ", " + secondCard;
    sumEl.textContent = "Sum: " + sum;
    renderGame();
}

function renderGame() {

    if (sum < 21) {
        message = "Do you want to hit?";
    } else if (sum === 21) {
        hasBlackjack = true;
        message = "Blackjack!  Congratulations!";
    } else {
        isAlive = false;
        message = "Sorry, you busted.  Play again?";
    }
    messageEl.textContent = message;
    // console.log(message);
}

function newCard() {
    let newCard = 5
    sum += newCard;
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent += ", " + newCard;

    renderGame();
}