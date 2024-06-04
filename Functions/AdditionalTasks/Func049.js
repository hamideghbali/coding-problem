// Taking into account the formula GCD(A, B, C) = GCD(GCD(A, B), C) and
// using the GCD2 function from the task Func46, write an integer function
// GCD3(A, B, C) that returns the greatest common divisor of three positive
// integers A, B, C. Using this function, find the greatest common divisor for each
// of triples (A, B, C), (A, C, D), (B, C, D) provided that integers A, B, C, D are
// given.

function GCD2(A, B) {
    if (B === 0) {
        return A;
    } else {
        return GCD2(B, A % B);
    }
}

function GCD3(A, B, C) {
    return GCD2(GCD2(A, B), C);
}

// Example usage
function main() {
    let A = 12, B = 18, C = 24, D = 36;

    let gcd_ABC = GCD3(A, B, C);
    let gcd_ACD = GCD3(A, C, D);
    let gcd_BCD = GCD3(B, C, D);

    console.log(`GCD of A, B, C: ${gcd_ABC}`);
    console.log(`GCD of A, C, D: ${gcd_ACD}`);
    console.log(`GCD of B, C, D: ${gcd_BCD}`);
}

main();
