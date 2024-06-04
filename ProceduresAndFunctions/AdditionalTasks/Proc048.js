// Taking into account that the least common multiple of two positive integers
// A and B equals A·(B/GCD(A, B)), where GCD(A, B) is the greatest common
// divisor of A and B, and using the GCD2 function from the task Proc46, write
// an integer function LCM2(A, B) that returns the least common multiple of A
// and B. Using this function, find the least common multiple for each of pairs
// (A, B), (A, C), (A, D) provided that integers A, B, C, D are given.

function GCD2(A, B) {
    while (B !== 0) {
        let temp = B;
        B = A % B;
        A = temp;
    }
    return A;
}

function LCM2(A, B) {
    return (A * B) / GCD2(A, B);
}

// Example usage
const A = 12;
const B = 15;
const C = 20;
const D = 25;

const lcmAB = LCM2(A, B);
const lcmAC = LCM2(A, C);
const lcmAD = LCM2(A, D);

console.log(`LCM(${A}, ${B}) = ${lcmAB}`);
console.log(`LCM(${A}, ${C}) = ${lcmAC}`);
console.log(`LCM(${A}, ${D}) = ${lcmAD}`);
