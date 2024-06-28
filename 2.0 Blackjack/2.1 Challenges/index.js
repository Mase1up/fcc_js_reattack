// For loop counting 

let messages = [
    "Hey, how's it going?",
    "Great, how about you?",
    "All good, working on portfolio.",
    "Same here!"
]

console.log(messages);

// DRY - Don't Repeat Yourself
// console.log(messages[0]);
// console.log(messages[1]);
// console.log(messages[2]);
// console.log(messages[3]);

for (let i = 0; i < messages.length; i += 1) {
    console.log(messages[i]);
}