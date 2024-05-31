// Given two integers A and B (A < B), find the sum of all integers in the range A
// to B inclusive.

function sumInRange(A, B) {
    // Formula for the sum of an arithmetic series: sum = (n/2) * (first term + last term)
    // Here, n is the number of terms in the series (B - A + 1)
    const n = B - A + 1;
    const sum = (n / 2) * (A + B);
    return sum;
}

// Example usage:
const A = 1;
const B = 5;
const result = sumInRange(A, B);
console.log(`Sum of integers from ${A} to ${B} is: ${result}`);
