// A real number X (|X| < 1) and an integer N (> 0) are given. Compute the
// expression

// X − X^2 / 2 + X^3 / 3 − ... + (−1)^N−1 ·X^N / N.

// The result is an approximate value of ln(1 + X).

function computeLnApprox(X, N) {
    let sum = 0.0; // Initialize sum as 0
    let sign = 1; // Initialize the sign for the first term

    for (let i = 1; i <= N; i++) {
        let term = sign * Math.pow(X, i) / i; // Calculate the current term
        sum += term; // Add the current term to the sum
        sign *= -1; // Alternate the sign for the next term
    }

    return sum;
}

// Example usage:
let X = 0.5; // Change X to any real number in the range (-1, 1)
let N = 10; // Change N to any positive integer
let result = computeLnApprox(X, N);
console.log("Approximate value of ln(1 +", X, ") for N =", N, "is:", result);
