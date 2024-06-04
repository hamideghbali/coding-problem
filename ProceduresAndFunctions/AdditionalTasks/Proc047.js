// Using the GCD2 function from the task Proc46, write a procedure Frac1(a,
//     b, p, q), that simplifies a fraction a/b to the irreducible form p/q (a and b are
//     input integer parameters, p and q are output integer parameters). The sign of a
//     resulting fraction p/q is assigned to its numerator, so q > 0. Using this
//     procedure, find the numerator and the denominator for each of irreducible
//     fractions a/b + c/d, a/b + e/f, a/b + g/h provided that integers a, b, c, d, e, f, g, h
//     are given.

function GCD2(A, B) {
    while (B !== 0) {
        let temp = B;
        B = A % B;
        A = temp;
    }
    return A;
}

function Frac1(a, b) {
    const gcd = GCD2(Math.abs(a), Math.abs(b));
    let p = a / gcd;
    let q = b / gcd;

    // Ensure the denominator is positive
    if (q < 0) {
        p = -p;
        q = -q;
    }

    return { p, q };
}

function addFractions(a, b, c, d) {
    const numerator = a * d + b * c;
    const denominator = b * d;
    return Frac1(numerator, denominator);
}

// Example usage
const a = 2, b = 3;
const c = 4, d = 5;
const e = 6, f = 7;
const g = 8, h = 9;

const result1 = addFractions(a, b, c, d);
const result2 = addFractions(a, b, e, f);
const result3 = addFractions(a, b, g, h);

console.log(`(${a}/${b}) + (${c}/${d}) = ${result1.p}/${result1.q}`);
console.log(`(${a}/${b}) + (${e}/${f}) = ${result2.p}/${result2.q}`);
console.log(`(${a}/${b}) + (${g}/${h}) = ${result3.p}/${result3.q}`);
