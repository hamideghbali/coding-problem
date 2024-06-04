// Write an integer function DigitCount(K) that returns the amount of digits in
// the decimal representation of a positive integer K. Using this function, find the
// amount of digits for each of five given positive integers.

// Function to count the number of digits in a positive integer
function digitCount(K) {
    if (K === 0) {
        return 1; // If K is 0, it has one digit
    }
    let count = 0;
    while (K !== 0) {
        count++;
        K = Math.floor(K / 10); // Remove the last digit by integer division
    }
    return count;
}

// Example usage:
const numbers = [123, 4567, 89012, 345678, 9012345];
for (let num of numbers) {
    console.log(`Number of digits in ${num}:`, digitCount(num));
}
