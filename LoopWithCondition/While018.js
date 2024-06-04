// Given an integer N (> 0), find the amount and the sum of its digits. Use the
// // operators of integer division and taking the remainder after integer division.

function findDigitCountAndSum(N) {
    let digitCount = 0;
    let digitSum = 0;

    while (N > 0) {
        let digit = N % 10;
        digitSum += digit;
        digitCount++;
        N = Math.floor(N / 10);
    }

    return [digitCount, digitSum];
}

// Example usage:
let N = 12345; // Change N to any positive integer
let [digitCount, digitSum] = findDigitCountAndSum(N);
console.log("Amount of digits in", N + ":", digitCount);
console.log("Sum of digits in", N + ":", digitSum);
