// Write a procedure TimeToHMS(T, H, M, S) that converts a time interval T
// (in seconds) into the ―hours H, minutes M, seconds S‖ format (T is an input
// integer parameter, H, M, S are output integer parameters). Using this
// procedure, find the amount of hours, minutes and seconds for each of five
// given time intervals T1, T2, ..., T5.

function TimeToHMS(T) {
    const hours = Math.floor(T / 3600);
    const minutes = Math.floor((T % 3600) / 60);
    const seconds = T % 60;
    return { H: hours, M: minutes, S: seconds };
}

// Example usage
const T1 = 3661; // 1 hour, 1 minute, and 1 second
const T2 = 7200; // 2 hours, 0 minutes, and 0 seconds
const T3 = 180;  // 0 hours, 3 minutes, and 0 seconds
const T4 = 86400; // 24 hours, 0 minutes, and 0 seconds
const T5 = 12345; // 3 hours, 25 minutes, and 45 seconds

const result1 = TimeToHMS(T1);
const result2 = TimeToHMS(T2);
const result3 = TimeToHMS(T3);
const result4 = TimeToHMS(T4);
const result5 = TimeToHMS(T5);

console.log(`T1 = ${result1.H} hours, ${result1.M} minutes, ${result1.S} seconds`);
console.log(`T2 = ${result2.H} hours, ${result2.M} minutes, ${result2.S} seconds`);
console.log(`T3 = ${result3.H} hours, ${result3.M} minutes, ${result3.S} seconds`);
console.log(`T4 = ${result4.H} hours, ${result4.M} minutes, ${result4.S} seconds`);
console.log(`T5 = ${result5.H} hours, ${result5.M} minutes, ${result5.S} seconds`);
