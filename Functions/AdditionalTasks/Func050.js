
// Write a function TimeToHMS(T) that converts a time interval T (in
//     seconds) into the ―hours H, minutes M, seconds S‖ format and returns the
//     values H, M, S (T, H, M, S are integers). Using this function, find the amount
//     of hours, minutes and seconds for each of five given time intervals T1, T2, ...,
//     // T5.

function TimeToHMS(T) {
    let hours = Math.floor(T / 3600);
    let minutes = Math.floor((T % 3600) / 60);
    let seconds = T % 60;
    return [hours, minutes, seconds];
}

// Example usage
function main() {
    let timeIntervals = [3600, 7200, 10800, 14400, 18000];
    for (let i = 0; i < timeIntervals.length; i++) {
        let [hours, minutes, seconds] = TimeToHMS(timeIntervals[i]);
        console.log(`Time interval ${i + 1}: ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
    }
}

main();
