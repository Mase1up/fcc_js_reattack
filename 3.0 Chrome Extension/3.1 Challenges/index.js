// 1. Grab the box from the DOM and store in a var
// 2. Add click event listener to the box
// 3. Log "I want to open the box!" when clicked

const boxEl = document.getElementById("box-el");

// boxEl.addEventListener("click", function () {
//     console.log("I want to open the box!");
// });

// Use .innerHTML to render a Buy! button inside the div.

// When clicked, render a para under the button (in the container), 
// that says "Thank you for buying!"

boxEl.innerHTML = " <button id='buy-btn' onclick='buy()'>Buy!</button> ";

function buy() {
    boxEl.innerHTML += "<p>Thank you for buying!</p>"
}