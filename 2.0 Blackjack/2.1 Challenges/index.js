let player1Time = 102;
let player2Time = 107;

function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time;
    } else if (player2Time < player1Time) {
        return player2Time;
    } else {
        return "It was a tie";
    }
}

// This worked, but not the way the function would be used
// console.log(getFastestRaceTime());

let fastestRaceTime = getFastestRaceTime();

console.log(fastestRaceTime);