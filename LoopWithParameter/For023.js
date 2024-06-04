// A real number X and an integer N (> 0) are given. Compute the expression

// X − X^3 / (3!) + X^5 /(5!) − ... + (−1)^N·X^2·N+1 / ((2·N+1)!) (N! = 1·2·...·N). The result is an approximate value of sin(X).

function computeSinApprox(X, N) {
    let sum = 0.0; // Initialize sum as 0
    let term = X; // The first term is X
    let sign = 1; // The first term has a positive sign

    for (let i = 0; i <= N; i++) {
        let factorial = 1;
        let power = 2 * i + 1; // The power of X in the current term
        for (let j = 1; j <= power; j++) {
            factorial *= j;
        }

        term = sign * Math.pow(X, power) / factorial; // Calculate the current term
        sum += term; // Add the current term to the sum
        sign *= -1; // Alternate the sign for the next term
    }

    return sum;
}

// Example usage:
let X = Math.PI / 2; // Change X to any real number
let N = 10; // Change N to any positive integer
let result = computeSinApprox(X, N);
console.log("Approximate value of sin(", X, ") for N =", N, "is:", result);
