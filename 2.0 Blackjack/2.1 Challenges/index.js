// Conditional statement to log out the discount the passenger
// will get based on age

// less than 6 years old -> free
// 6-17 -> child discount
// 18-26 -> student discount
// 27-66 -> full price
// over 66 -> senior citizen discount

let age = 69;

function checkDiscount() {
    if (age < 6) {
        return "free";
    } else if (age < 18) {
        return "child discount";
    } else if (age < 27) {
        return "student discount";
    } else if (age < 67) {
        return "full price";
    } else {
        return "senior citizen discount";
    }
}

console.log(checkDiscount());