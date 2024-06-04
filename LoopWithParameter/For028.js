// A real number X (|X| < 1) and an integer N (> 0) are given. Compute the
// expression

// 1 + X/2 − 1·X^2 /(2·4) + 1·3·X^3 /(2·4·6) − ... ++ (−1)N−1·1·3·...·(2·N−3)·X^N/(2·4·...·(2·N)).
// The result is an approximate value of the square root of 1 + X.

function computeSqrtApprox(X, N) {
    let sum = 1.0; // Initialize sum with the first term 1
    let term = 1.0; // Initialize the term to 1 (which will be multiplied by X in the loop)
    let sign = 1; // Initialize the sign for alternating terms

    for (let i = 1; i <= N; i++) {
        term *= (2 * i - 3) * X / (2 * i); // Calculate the next term in the series
        sum += sign * term; // Add the current term to the sum
        sign *= -1; // Alternate the sign for the next term
    }

    return sum;
}

// Example usage:
let X = 0.5; // Change X to any real number in the range (-1, 1)
let N = 10; // Change N to any positive integer
let result = computeSqrtApprox(X, N);
console.log("Approximate value of sqrt(1 +", X, ") for N =", N, "is:", result);
