// Check if person is old enough to get bday card from the king (100)
let age = 101;

// if less than 100 -> Not eligible
// else if greater than 100 -> Not eligible, already rx'd
// else -> Here is your bday card

if (age < 100) {
    console.log("Not eligible, too young");
} else if (age > 100) {
    console.log("Not eligible, you already received one");
} else {
    console.log("Here is your birthday card from the king!");
}

