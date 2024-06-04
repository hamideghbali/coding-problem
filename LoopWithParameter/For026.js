// A real number X (|X| < 1) and an integer N (> 0) are given. Compute the
// expression

// X − X^3 / 3 + X^5 /5 − ... + (−1)^N·X^2·N+1 / (2·N+1).

// The result is an approximate value of atan(X).

function computeArctanApprox(X, N) {
    let sum = 0.0; // Initialize sum as 0
    let sign = 1; // Initialize the sign for the first term

    for (let i = 0; i <= N; i++) {
        let power = 2 * i + 1; // The power of X in the current term
        let term = sign * Math.pow(X, power) / power; // Calculate the current term
        sum += term; // Add the current term to the sum
        sign *= -1; // Alternate the sign for the next term
    }

    return sum;
}

// Example usage:
let X = 0.5; // Change X to any real number in the range (-1, 1)
let N = 10; // Change N to any positive integer
let result = computeArctanApprox(X, N);
console.log("Approximate value of atan(", X, ") for N =", N, "is:", result);
