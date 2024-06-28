
// Simulate a Die Roll

// let randomNumber = (Math.floor(Math.random() * 6)) + 1;

// console.log(randomNumber);

// Create function to return 1-6 at random

function rollDice() {
    return (Math.floor(Math.random() * 6)) + 1;
}

let randomResult = rollDice();
console.log(randomResult);