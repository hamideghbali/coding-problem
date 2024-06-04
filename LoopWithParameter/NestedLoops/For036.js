// Given positive integers N and K, find the sum

// 1^K+ 2^K+ ... + N^K.

// To avoid the integer overflow, compute the sum using real variables and
// output the result as a real number.

function computePowerSum(N, K) {
    let sum = 0; // Initialize the sum

    for (let i = 1; i <= N; i++) {
        sum += Math.pow(i, K); // Compute and add each term to the sum
    }

    return sum;
}

// Example usage:
let N = 5; // Change N to any positive integer
let K = 2; // Change K to any positive integer
let result = computePowerSum(N, K);
console.log("Sum of the series:", result);
