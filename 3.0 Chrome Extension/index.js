// Log out "Button clicked!" when user clicks SAVE btn

let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const inputEl = document.getElementById("input-el");
const saveBtn = document.getElementById("save-btn");
const listEl = document.getElementById("list-el");

saveBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    console.log(myLeads);
});

for (let i = 0; i < myLeads.length; i++) {
    listEl.innerHTML += "<li>" + myLeads[i] + "</li>";
}


