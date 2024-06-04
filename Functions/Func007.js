// Write a real-valued function Calc(A, B, Op) that performs an arithmetic
// operation over nonzero real numbers A and B and returns the result value. An
// arithmetic operation is determined by integer parameter Op as follows: 1 —
// subtraction, 2 — multiplication, 3 — division, and addition otherwise. Having
// input real numbers A, B and integers N1, N2, N3 and using this function,
// perform over given A, B three operations determined by given N1, N2, N3.
// Output the result value of each operation.

function Calc(A, B, Op) {
    if (Op === 1) {
        return A - B;
    } else if (Op === 2) {
        return A * B;
    } else if (Op === 3) {
        return A / B;
    } else {
        return A + B; // Addition is the default operation
    }
}

// Example usage
const A = 10;
const B = 5;
const N1 = 1; // Subtraction
const N2 = 2; // Multiplication
const N3 = 3; // Division

const result1 = Calc(A, B, N1);
const result2 = Calc(A, B, N2);
const result3 = Calc(A, B, N3);

console.log(`Result of subtraction: ${result1}`);
console.log(`Result of multiplication: ${result2}`);
console.log(`Result of division: ${result3}`);
