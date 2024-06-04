// Write an integer function DigitCount(K) that returns the amount of digits in
// the decimal representation of a positive integer K. Using this function, find the
// amount of digits for each of five given positive integers.

function DigitCount(K) {
    return K.toString().length;
}

// Example usage
const numbers = [123, 4567, 8910, 12345, 678910];
for (let i = 0; i < numbers.length; i++) {
    console.log(`Number: ${numbers[i]}, Digit count: ${DigitCount(numbers[i])}`);
}
