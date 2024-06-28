let player1Time = 102;
let player2Time = 107;

// function getFastestRaceTime() {
//     if (player1Time < player2Time) {
//         return player1Time;
//     } else if (player2Time < player1Time) {
//         return player2Time;
//     } else {
//         return "It was a tie at " + player1Time;
//     }
// }

// // This worked, but not the way the function would be used
// // console.log(getFastestRaceTime());

// let fastestRaceTime = getFastestRaceTime();

// console.log(fastestRaceTime);

// Write function that returns total race time
// Invoke func and store return in new var
// Log the var out

function totalRaceTime() {
    return player1Time + player2Time;
}

let totalTime = totalRaceTime();
console.log(totalTime);