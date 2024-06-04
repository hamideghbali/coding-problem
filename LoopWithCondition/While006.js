// Given an integer N (> 0), compute the double factorial of N:

// N!! = N·(N−2)·(N−4)·...,

// where the last factor equals 2 if N is an even number, and 1 otherwise. To
// avoid the integer overflow, compute the double factorial using a real variable
// and output the result as a real number.

function doubleFactorial(N) {
    let result = 1;

    // Start from N and decrement by 2 until reaching either 2 or 1
    for (let i = N; i > 1; i -= 2) {
        result *= i;
    }

    // For odd N, multiply by 1 (last factor)
    if (N % 2 !== 0) {
        result *= 1;
    }

    return result;
}

// Example usage:
let N = 7; // Change N to any positive integer
let doubleFactorialResult = doubleFactorial(N);
console.log("Double factorial of", N, ":", doubleFactorialResult);
