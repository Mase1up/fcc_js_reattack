//document.getElementById("count-el").innerText=5

let count = 0;

// Psuedo-code to create incrementing button
// Initialize count @ 0
// Listen for clicks on increment button
// When clicked, increment the count variable
// change the count-el to reflect new count

function increment() {
    count = count + 1;
    console.log(count)
}


let lapsCompleted = 0;

function lapComplete() {
    lapsCompleted = lapsCompleted + 1;
}

lapComplete();
lapComplete();
lapComplete();

console.log(lapsCompleted);