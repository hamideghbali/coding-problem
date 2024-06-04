// Given an integer N (> 0), output all digits of the number N starting from the
// right digit (a ones digit). Use the operators of integer division and taking the
// remainder after integer division.

function outputDigits(N) {
    let digits = [];

    while (N > 0) {
        let digit = N % 10;
        digits.push(digit);
        N = Math.floor(N / 10);
    }

    return digits.reverse(); // Reverse the array to get the digits in the correct order
}

// Example usage:
let N = 12345; // Change N to any positive integer
let result = outputDigits(N);
console.log("Digits of the number", N, "starting from the right:", result);
