// Log out "Button clicked!" when user clicks SAVE btn

let saveBtn = document.getElementById("save-btn");

saveBtn.addEventListener("click", function () {
    console.log("Button clicked from addEventListener");
});