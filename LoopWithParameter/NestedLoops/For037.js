// Given an integer N (> 0), find the sum
// 1^1+ 2^2+ ... + N^N.

// To avoid the integer overflow, compute the sum using real variables and
// output the result as a real number.

function computePowerSum(N) {
    let sum = 0; // Initialize the sum

    for (let i = 1; i <= N; i++) {
        sum += Math.pow(i, i); // Compute and add each term to the sum
    }

    return sum;
}

// Example usage:
let N = 5; // Change N to any positive integer
let result = computePowerSum(N);
console.log("Sum of the series:", result);
