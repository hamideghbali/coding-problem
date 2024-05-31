// Given two integers A and B (A < B), find the product of all integers in the
// range A to B inclusive.

function productInRange(A, B) {
    let product = 1;
    for (let i = A; i <= B; i++) {
        product *= i;
    }
    return product;
}

// Example usage:
const A = 2;
const B = 5;
const result = productInRange(A, B);
console.log(`Product of integers from ${A} to ${B} is: ${result}`);
