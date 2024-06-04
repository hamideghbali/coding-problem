// Write an integer function DigitN(K, N) that returns the N-th digit in the
// decimal representation of a positive integer K provided that the digits are
// numbered from right to left. If the amount of digits is less than N then the
// function returns −1. Using this function, output sequentially 1st, 2nd, 3rd, 4th,
// 5th digit for each of five given positive integers K1, K2, ..., K5.

// Function to return the N-th digit in the decimal representation of a positive integer K
function digitN(K, N) {
    const str = String(K);
    const len = str.length;
    if (N > len) {
        return -1; // Return -1 if N is greater than the number of digits in K
    }
    return parseInt(str[len - N]); // Return the N-th digit from the right
}

// Example usage:
const numbers = [12345, 67890, 13579, 24680, 987654321];
const positions = [1, 2, 3, 4, 5];
for (let num of numbers) {
    for (let pos of positions) {
        console.log(`Digit at position ${pos} in ${num}:`, digitN(num, pos));
    }
}
