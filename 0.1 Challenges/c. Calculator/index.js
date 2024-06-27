let num1 = 8;
let num2 = 2;

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

// set variable "result" to the sum-el paragraph
let result = document.getElementById("sum-el")

// Create 4 functions to correspond to the buttons on the calculator
// Inside the function perform the action, then render result in sum-el paragraph.

function add() {
    let total = num1 + num2;
    result.textContent = "Sum: " + total;
}

function subtract() {
    result.textContent = num1 - num2;
}

function divide() {
    result.textContent = num1 / num2;
}

function multiply() {
    result.textContent = num1 * num2;
}