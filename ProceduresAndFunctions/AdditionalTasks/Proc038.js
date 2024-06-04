// Write a real-valued function Power2(A, N) that returns the power A^N
// calculated by the following formulas:A^0= 1;
// A^N= A·A·...·A (N factors), if N > 0;
// A^N= 1/(A·A·...·A) (|N| factors), if N < 0

// (A is a real-valued parameter, N is an integer parameter). Having input a real
// number A and integers K, L, M and using this function, find the powers
//  A^K
// , A^L
// ,A^M

// Function to calculate the power A^N using recursive approach
function power2(A, N) {
    // Base case: if N is 0, return 1
    if (N === 0) {
        return 1;
    }
    // Recursive case: if N is positive
    else if (N > 0) {
        // Multiply A by itself (N - 1) times
        let result = A;
        for (let i = 1; i < N; i++) {
            result *= A;
        }
        return result;
    }
    // If N is negative, calculate the power with the absolute value of N and return the reciprocal
    else {
        let result = A;
        for (let i = 1; i < Math.abs(N); i++) {
            result *= A;
        }
        return 1 / result;
    }
}

// Example usage:
const A = 2;
const K = 3;
const L = -2;
const M = 0;
const resultK = power2(A, K);
const resultL = power2(A, L);
const resultM = power2(A, M);
console.log(`A^K: ${resultK}`);
console.log(`A^L: ${resultL}`);
console.log(`A^M: ${resultM}`);
