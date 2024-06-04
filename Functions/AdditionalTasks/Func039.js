// Using the Power1 and Power2 functions (see Func37 and Func38), write a
// real-valued function Power3(A, B) that returns the power A^B
// calculated as
// follows (A and B are real-valued parameters): if B has a zero-valued fractional
// part then the function Power2(A, N) is called (an integer variable N is equal to
// B), otherwise the function Power1(A, B) is called. Having input real
// numbers P, A, B, C and using the Power3 function, find the powers A^P, 
// B^P
// , C^P
// .

function Power3(A, B) {
    if (Number.isInteger(B)) {
        return Power2(A, B);
    } else {
        return Power1(A, B);
    }
}

// Example usage
const P = 2;
const A = 3;
const B = 4.5;
const C = -1.5;

const result_A_to_P = Power3(A, P);
console.log(`A^P = ${result_A_to_P}`);

const result_B_to_P = Power3(B, P);
console.log(`B^P = ${result_B_to_P}`);

const result_C_to_P = Power3(C, P);
console.log(`C^P = ${result_C_to_P}`);
