// Write a function DigitCS(K) that finds and returns the amount C of digits in
// the decimal representation of a positive integer K and also the sum S of its
// digits (K is an input integer parameter). Using this function, find the amount
// // and the sum of digits for each of five given integers.

function DigitCS(K) {
    const strK = K.toString();
    const digitCount = strK.length;
    let digitSum = 0;
    for (let i = 0; i < strK.length; i++) {
        digitSum += parseInt(strK[i], 10);
    }
    return [digitCount, digitSum];
}

// Example usage
const numbers = [12345, 678910, 13579, 24680, 987654321];

for (let i = 0; i < numbers.length; i++) {
    const [digitCount, digitSum] = DigitCS(numbers[i]);
    console.log(`For number ${numbers[i]}: Digit count: ${digitCount}, Digit sum: ${digitSum}`);
}
