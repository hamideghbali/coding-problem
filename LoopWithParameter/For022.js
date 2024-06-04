// A real number X and an integer N (> 0) are given. Compute the expression

// 1 + X + X^2 /(2!) + ... + X^N/(N!)
//  (N! = 1·2·...·N). 
//  The result is an approximate value of exp(X).

function computeExpApprox(X, N) {
    let sum = 1.0; // Initialize sum as 1 for the 0th term
    let term = 1.0; // To store the current term X^i / i!

    for (let i = 1; i <= N; i++) {
        term *= X / i; // Calculate the current term X^i / i!
        sum += term; // Add the current term to the sum
    }

    return sum;
}

// Example usage:
let X = 2; // Change X to any real number
let N = 10; // Change N to any positive integer
let result = computeExpApprox(X, N);
console.log("Approximate value of exp(", X, ") for N =", N, "is:", result);
