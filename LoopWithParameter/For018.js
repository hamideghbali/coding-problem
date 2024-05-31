// A real number A and an integer N (> 0) are given. Using one loop-statement
// compute the expression
// 1 − A + A^2 − A^3 + ... + (−1)^N * A^N
// Do not use conditional statements.

function computeExpression(A, N) {
    let result = 0;
    let power = 1;

    for (let i = 0; i <= N; i++) {
        result += power;
        power *= -A;
    }

    return result;
}

// Example usage:
let A = 2; // Change A to any real number
let N = 5; // Change N to any positive integer
let expressionResult = computeExpression(A, N);
console.log("Expression Result:", expressionResult);
