// Write a procedure IncTime(H, M, S, T) that increases a time interval in
// hours H, minutes M, seconds S on T seconds (H, M, S are input and output
// positive integer parameters, T is an input positive integer parameter). Having
// input hours H, minutes M, seconds S (as integers) and an integer T and using
// the IncTime procedure, increase the given time interval on T seconds and
// output new values of H, M, S.

function IncTime(H, M, S, T) {
    // Convert the total time to seconds
    let totalSeconds = H * 3600 + M * 60 + S + T;

    // Calculate the new hours, minutes, and seconds
    H = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    M = Math.floor(totalSeconds / 60);
    S = totalSeconds % 60;

    // Output the new time
    return { H, M, S };
}

// Example usage
const H = 1;  // initial hours
const M = 30; // initial minutes
const S = 45; // initial seconds
const T = 5000; // seconds to add

const newTime = IncTime(H, M, S, T);

console.log(`New time: ${newTime.H} hours, ${newTime.M} minutes, ${newTime.S} seconds`);
