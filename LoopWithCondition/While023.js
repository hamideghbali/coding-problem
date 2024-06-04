// Two positive integers A and B are given. Find their greatest common
// divisor (GCD) using the Euclidean algorithm:
// GCD(A, B) = GCD(B, A mod B), if B ≠ 0; GCD(A, 0) = A,
// where ―mod‖ denotes the operator of taking the remainder after integer
// division.

function gcd(A, B) {
    while (B !== 0) {
        let temp = B;
        B = A % B;
        A = temp;
    }
    return A;
}

// Example usage:
let A = 24; // Change A and B to any positive integers
let B = 36;
let result = gcd(A, B);
console.log("GCD of", A, "and", B + ":", result);
