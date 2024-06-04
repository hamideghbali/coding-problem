// Taking into account the formula GCD(A, B, C) = GCD(GCD(A, B), C) and
// using the GCD2 function from the task Proc46, write an integer function
// GCD3(A, B, C) that returns the greatest common divisor of three positive
// integers A, B, C. Using this function, find the greatest common divisor for each
// of triples (A, B, C), (A, C, D), (B, C, D) provided that integers A, B, C, D are
// given.

function GCD2(A, B) {
    while (B !== 0) {
        let temp = B;
        B = A % B;
        A = temp;
    }
    return A;
}

function GCD3(A, B, C) {
    return GCD2(GCD2(A, B), C);
}

// Example usage
const A = 36;
const B = 60;
const C = 48;
const D = 72;

const gcdABC = GCD3(A, B, C);
const gcdACD = GCD3(A, C, D);
const gcdBCD = GCD3(B, C, D);

console.log(`GCD(${A}, ${B}, ${C}) = ${gcdABC}`);
console.log(`GCD(${A}, ${C}, ${D}) = ${gcdACD}`);
console.log(`GCD(${B}, ${C}, ${D}) = ${gcdBCD}`);
