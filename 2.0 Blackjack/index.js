
let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard]; // array to hold cards
let isAlive = true;
let hasBlackjack = false;
let sum = firstCard + secondCard;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

// Make this return number between 1 - 13
function getRandomCard() {
    return Math.floor(Math.random() * 13) + 1;
}

function startGame() {
    isAlive = true;
    hasBlackjack = false;
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    // Create for loop to render ALL cards instead of first two
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
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
    let newCard = getRandomCard();
    sum += newCard;
    cards.push(newCard);
    console.log(cards);
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent += ", " + newCard;

    renderGame();
}