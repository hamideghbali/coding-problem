// An integer N (> 0) is given. Using one loop-statement compute the sum

// 1 + 1/(1!) + 1/(2!) + 1/(3!) + ... + 1/(N!),

// where N! (N–factorial) is the product of all integers in the range 1 to N:
// N! = 1·2·...·N. The result is an approximate value of the constant e = exp(1).

function computeApproxE(N) {
    let sum = 1.0; // Initialize sum as 1 for the 0! term
    let factorial = 1.0; // Initialize factorial as 1 for 0!

    for (let i = 1; i <= N; i++) {
        factorial *= i; // Compute i!
        sum += 1 / factorial; // Add the term 1/(i!) to the sum
    }

    return sum;
}

// Example usage:
let N = 10; // Change N to any positive integer
let result = computeApproxE(N);
console.log("Approximate value of e for N =", N, "is:", result);
