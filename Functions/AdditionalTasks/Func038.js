// Write a real-valued function Power2(A, N) that returns the power A^Ncalculated by the following formulas:
// A^0= 1;
// A^N= A·A·...·A (N factors), if N > 0;
// A^N = 1/(A·A·...·A) (|N| factors), if N < 0

// (A is a real-valued parameter, N is an integer parameter). Having input a real
// number A and integers K, L, M and using this function, find the powers A^K
// , A^L,
// A^M
// .

function Power2(A, N) {
    if (N === 0) {
        return 1;
    } else if (N > 0) {
        let result = 1;
        for (let i = 0; i < N; i++) {
            result *= A;
        }
        return result;
    } else {
        let result = 1;
        for (let i = 0; i < Math.abs(N); i++) {
            result /= A;
        }
        return result;
    }
}

// Example usage
const A = 2;
const K = 3;
const L = -2;
const M = 0;

const result_A_to_K = Power2(A, K);
console.log(`A^K = ${result_A_to_K}`);

const result_A_to_L = Power2(A, L);
console.log(`A^L = ${result_A_to_L}`);

const result_A_to_M = Power2(A, M);
console.log(`A^M = ${result_A_to_M}`);
