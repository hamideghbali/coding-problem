// A real number X and an integer N (> 0) are given. Compute the expression

// 1 − X^2/(2!) + X^4/(4!) − ... + (−1)^N·X^2·N /((2·N)!) (N! = 1·2·...·N). The result is an approximate value of cos(X).

function computeCosApprox(X, N) {
    let sum = 1.0; // Initialize sum as 1 for the 0th term
    let term = 1.0; // To store the current term X^(2i) / (2i)!

    for (let i = 1; i <= N; i++) {
        term *= -X * X / (2 * i * (2 * i - 1)); // Calculate the current term
        sum += term; // Add the current term to the sum
    }

    return sum;
}

// Example usage:
let X = Math.PI / 3; // Change X to any real number
let N = 10; // Change N to any positive integer
let result = computeCosApprox(X, N);
console.log("Approximate value of cos(", X, ") for N =", N, "is:", result);
