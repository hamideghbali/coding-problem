// Given two integers A and B (A < B), find the sum of squares of all integers in
// the range A to B inclusive.

function sumOfSquaresInRange(A, B) {
    let sum = 0;
    for (let i = A; i <= B; i++) {
        sum += i * i;
    }
    return sum;
}

// Example usage:
const A = 1;
const B = 5;
const result = sumOfSquaresInRange(A, B);
console.log(`Sum of squares of integers from ${A} to ${B} is: ${result}`);
