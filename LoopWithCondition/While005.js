// Given an integer N (> 0) that equals 2 raised to some integer power: N = 2^K,

// find the exponent K of the power.

function findExponent(N) {
    let exponent = 0;

    while (N > 1) {
        if (N % 2 !== 0) {
            return null; // N is not a power of 2
        }
        N /= 2;
        exponent++;
    }

    return exponent;
}

// Example usage:
let N = 64; // Change N to any positive integer that is a power of 2
let exponent = findExponent(N);
if (exponent !== null) {
    console.log("Exponent K of 2^K:", exponent);
} else {
    console.log("N is not a power of 2.");
}
