// Write a real-valued function Power1(A, B) that returns the power A^B
// calculated by the formula A^B= exp(B·ln(A)) (A and B are real-valued
// parameters). In the case of zero-valued or negative parameter A the function
// returns 0. Having input real numbers P, A, B, C and using this function, find
// the powers A^P, B^P, C^P
// .

function Power1(A, B) {
    if (A <= 0) {
        return 0;
    } else {
        return Math.exp(B * Math.log(A));
    }
}

// Example usage
const P = 2;
const A = 3;
const B = 4;
const C = -1;

const result_A_to_P = Power1(A, P);
console.log(`A^P = ${result_A_to_P}`);

const result_B_to_P = Power1(B, P);
console.log(`B^P = ${result_B_to_P}`);

const result_C_to_P = Power1(C, P);
console.log(`C^P = ${result_C_to_P}`);
