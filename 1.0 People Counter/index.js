let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    newEntry = " " + count + " -";
    saveEl.textContent += newEntry;
    count = 0;
    countEl.textContent = count;
    // console.log(saveEl);

}

