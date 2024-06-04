// Using the Power1 and Power2 functions (see Proc37 and Proc38), write a
// real-valued function Power3(A, B) that returns the power A^B
// calculated as
// follows (A and B are real-valued parameters): if B has a zero-valued fractional
// part then the function Power2(A, N) is called (an integer variable N is equal to
// B), otherwise the function Power1(A, B) is called. Having input real
// numbers P, A, B, C and using the Power3 function, find the powers A^P
// , B^P
// , C^P
// .

// Function to calculate the power A^B using Power1 and Power2 functions
function Power3(A, B) {
    // Check if B has a zero-valued fractional part
    if (B % 1 === 0) {
        // If B is an integer, call Power2 function
        return Power2(A, B);
    } else {
        // If B is not an integer, call Power1 function
        return Power1(A, B);
    }
}

// Example usage:
const P = 2;
const A = 3;
const B = 2.5;
const C = -1;
const resultAP = Power3(A, P);
const resultBP = Power3(B, P);
const resultCP = Power3(C, P);
console.log(`A^P: ${resultAP}`);
console.log(`B^P: ${resultBP}`);
console.log(`C^P: ${resultCP}`);
