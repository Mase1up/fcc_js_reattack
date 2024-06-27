let myPoints = 3;

function add3Points() {
    myPoints += 3;
}

function subtract1Point() {
    myPoints -= 1;
}

add3Points();
add3Points();
add3Points();
subtract1Point();
subtract1Point();

console.log(myPoints);