
// Simulate a Die Roll

// let randomNumber = Math.random() * 6;

// console.log(randomNumber);

/*
What does Math.random() actually do?

Your answer:
Should return a random number between 0 and 5.999 repeating


*/

let flooredNumber = Math.floor(3.45632);
console.log(flooredNumber);

// It truncates everthing to the right of the decimal.  
// This isn't quite accurate, it actually moves to the leftmost possible integer
// on the number line.  If it were -2.36 it would become -3