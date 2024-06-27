// Grab the welcome-el paragraph and store it in a variable called welcomeEl
// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the screen

// Render the message using .innerText

// We want it to say "Welcome back, Mason Keith!"

let welcomeEl = document.getElementById("welcome-el"); //Grab the piece I want to work on
let name = "Mason Keith";
let greeting = "Welcome back, " + name + "!";

// console.log(greeting) Checked to make sure greeting is logging correctly

welcomeEl.innerText = greeting;

welcomeEl.innerText += " emoji";