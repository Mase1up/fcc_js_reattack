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


let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

function totalTime() {
    let totalTime = lap1 + lap2 + lap3;
    console.log(totalTime);
}

totalTime();
