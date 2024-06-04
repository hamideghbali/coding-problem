// Write an integer function DigitN(K, N) that returns the N-th digit in the
// decimal representation of a positive integer K provided that the digits are
// numbered from right to left. If the amount of digits is less than N then the
// function returns −1. Using this function, output sequentially 1st, 2nd, 3rd, 4th,
// 5th digit for each of five given positive integers K1, K2, ..., K5.

function DigitN(K, N) {
    const strK = K.toString();
    if (N > strK.length) {
        return -1;
    }
    return parseInt(strK[strK.length - N], 10);
}

// Example usage
const numbers = [12345, 678910, 13579, 24680, 987654321];
const digitsToExtract = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < digitsToExtract.length; j++) {
        console.log(`Number: ${numbers[i]}, ${digitsToExtract[j]}-th digit: ${DigitN(numbers[i], digitsToExtract[j])}`);
    }
}
