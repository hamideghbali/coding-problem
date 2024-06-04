// A real number X (|X| < 1) and an integer N (> 0) are given. Compute the
// expression

// X + 1·X^3 /(2·3) + 1·3·X^5 /(2·4·5) + ... ++ 1·3·...·(2·N−1)·X^2·N+1/(2·4·...·(2·N)·(2·N+1)).
// The result is an approximate value of asin(X).

function computeAsinApprox(X, N) {
    let sum = X; // Initialize sum with the first term X
    let term = X; // Initialize the term X

    for (let i = 1; i <= N; i++) {
        term *= (2 * i - 1) * X * X / ((2 * i) * (2 * i + 1)); // Calculate the next term in the series
        sum += term; // Add the current term to the sum
    }

    return sum;
}

// Example usage:
let X = 0.5; // Change X to any real number in the range (-1, 1)
let N = 10; // Change N to any positive integer
let result = computeAsinApprox(X, N);
console.log("Approximate value of asin(", X, ") for N =", N, "is:", result);
