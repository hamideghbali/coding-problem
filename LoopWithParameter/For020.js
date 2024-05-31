// An integer N (> 0) is given. Using one loop-statement compute the sum

// 1! + 2! + 3! + ... + N!,

// where N! (N–factorial) is the product of all integers in the range 1 to N:
// N! = 1·2·...·N. To avoid the integer overflow, compute the sum using real
// variables and output the result as a real number.

function factorial(N) {
    let result = 1.0; // Initialize result as a real number

    for (let i = 1; i <= N; i++) {
        result *= i;
    }

    return result;
}

function computeFactorialSum(N) {
    let sum = 0.0; // Initialize sum as a real number

    for (let i = 1; i <= N; i++) {
        sum += factorial(i);
    }

    return sum;
}

// Example usage:
let N = 5; // Change N to any positive integer
let result = computeFactorialSum(N);
console.log("Sum of factorials up to", N + ":", result);
