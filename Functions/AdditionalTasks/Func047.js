// Using the GCD2 function from the task Func46, write a procedure Frac1(a,
//     b, p, q), that simplifies a fraction a/b to the irreducible form p/q (a and b are
//     input integer parameters, p and q are output integer parameters). The sign of a
//     resulting fraction p/q is assigned to its numerator, so q > 0. Using this
//     procedure, find the numerator and the denominator for each of irreducible
//     fractions a/b + c/d, a/b + e/f, a/b + g/h provided that integers a, b, c, d, e, f, g, h
//     are given.

function GCD2(A, B) {
    if (B === 0) {
        return A;
    } else {
        return GCD2(B, A % B);
    }
}

function Frac1(a, b, p, q) {
    const gcd = GCD2(Math.abs(a), Math.abs(b));
    p = a / gcd;
    q = b / gcd;
    if (q < 0) {
        p = -p;
        q = -q;
    }
}

// Example usage
function main() {
    let a = 1, b = 2, c = 1, d = 3, e = 3, f = 4, g = 5, h = 6;
    let p1, q1, p2, q2, p3, q3;

    Frac1(a, b, p1, q1);
    Frac1(c, d, p2, q2);
    Frac1(e, f, p3, q3);

    console.log(`Fraction 1: ${p1}/${q1}`);
    console.log(`Fraction 2: ${p2}/${q2}`);
    console.log(`Fraction 3: ${p3}/${q3}`);
}

main();
