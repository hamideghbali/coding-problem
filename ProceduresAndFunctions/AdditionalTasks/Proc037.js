// Write a real-valued function Power1(A, B) that returns the power A^Bcalculated by the formula A^B= exp(B·ln(A)) (A and B are real-valuedparameters). In the case of zero-valued or negative parameter A the functionreturns 0. Having input real numbers P, A, B, C and using this function, find
// the powers A^P, B^P, C^P
// .

// Function to calculate the power A^B using A^B = exp(B * ln(A))
function power1(A, B) {
    // Return 0 if A is zero or negative
    if (A <= 0) {
        return 0;
    }
    // Calculate and return A^B
    return Math.exp(B * Math.log(A));
}

// Example usage:
const P = 2; // Power
const A = 3;
const B = 4;
const C = 5;
const resultA = power1(A, P);
const resultB = power1(B, P);
const resultC = power1(C, P);
console.log(`A^P: ${resultA}`);
console.log(`B^P: ${resultB}`);
console.log(`C^P: ${resultC}`);
