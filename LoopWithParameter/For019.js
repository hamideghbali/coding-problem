// Given an integer N (> 0), find the value of a following product:

// N! = 1·2·...·N

// (N–factorial). To avoid the integer overflow, compute the product using a real
// variable and output the result as a real number.

function factorial(N) {
    let result = 1.0; // Initialize result as a real number

    for (let i = 1; i <= N; i++) {
        result *= i;
    }

    return result;
}

// Example usage:
let N = 5; // Change N to any positive integer
let result = factorial(N);
console.log("Factorial of", N + ":", result);
