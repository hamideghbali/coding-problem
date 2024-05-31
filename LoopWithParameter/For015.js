// Given a real number A and an integer N (> 0), find A raised to the power N
// (i. e., the product of N values of A):
// A^N= A·A· ... ·A.

function powerOfA(A, N) {
    let result = 1;
    for (let i = 0; i < N; i++) {
        result *= A;
    }
    return result;
}

// Example usage:
const A = 2; // The base number
const N = 5; // The exponent
const result = powerOfA(A, N);
console.log(`${A} raised to the power ${N} is: ${result}`);
