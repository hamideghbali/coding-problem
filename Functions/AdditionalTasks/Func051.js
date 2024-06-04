// Write a function IncTime(H, M, S, T) that increases a time interval in
// hours H, minutes M, seconds S on T seconds and returns new values of hours,
// minutes, and seconds (all numbers are positive integers). Having input
// hours H, minutes M, seconds S (as integers) and an integer T and using the
// IncTime function, increase the given time interval on T seconds and output
// new values of H, M, S.

function IncTime(H, M, S, T) {
    let totalSeconds = H * 3600 + M * 60 + S + T;
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;
    return [hours, minutes, seconds];
}

// Example usage
function main() {
    let H = 2;
    let M = 30;
    let S = 45;
    let T = 300; // 5 minutes

    let [newH, newM, newS] = IncTime(H, M, S, T);
    console.log(`Original time: ${H} hours, ${M} minutes, ${S} seconds`);
    console.log(`Increased time: ${newH} hours, ${newM} minutes, ${newS} seconds`);
}

main();
