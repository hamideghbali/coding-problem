// Given an integer N (> 0), find the value of the following expression of
// N terms with alternating signs:

// 1.1 − 1.2 + 1.3 − ... .

// Do not use conditional statements.

function alternatingExpression(N) {
    let sum = 0;
    for (let i = 1; i <= N; i++) {
        let term = 1 + (i - 1) * 0.1;
        sum += Math.pow(-1, i + 1) * term;
    }
    return sum;
}

// Example usage:
const N = 5;
const result = alternatingExpression(N);
console.log(`Value of the expression with ${N} terms is: ${result}`);
