// Write an integer function GCD2(A, B) that returns the greatest common
// divisor (GCD) of two positive integers A and B. Use the Euclidean algorithm:
// GCD(A, B) = GCD(B, A mod B), if B ≠ 0; GCD(A, 0) = A,
// where ―mod‖ denotes the operator of taking the remainder after integer
// division. Using this function, find the greatest common divisor for each of
// pairs (A, B), (A, C), (A, D) provided that integers A, B, C, D are given.

function GCD2(A, B) {
    while (B !== 0) {
        let temp = B;
        B = A % B;
        A = temp;
    }
    return A;
}

// Example usage
const A = 56;
const B = 98;
const C = 42;
const D = 84;

const gcdAB = GCD2(A, B);
const gcdAC = GCD2(A, C);
const gcdAD = GCD2(A, D);

console.log(`GCD(${A}, ${B}) = ${gcdAB}`);
console.log(`GCD(${A}, ${C}) = ${gcdAC}`);
console.log(`GCD(${A}, ${D}) = ${gcdAD}`);
