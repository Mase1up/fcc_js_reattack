// 1. Grab the box from the DOM and store in a var
// 2. Add click event listener to the box
// 3. Log "I want to open the box!" when clicked

const boxEl = document.getElementById("box-el");

boxEl.addEventListener("click", function () {
    console.log("I want to open the box!");
});

