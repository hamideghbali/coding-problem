// Write an integer function GCD2(A, B) that returns the greatest common
// divisor (GCD) of two positive integers A and B. Use the Euclidean algorithm:
// GCD(A, B) = GCD(B, A mod B), if B ≠ 0; GCD(A, 0) = A,
// where ―mod‖ denotes the operator of taking the remainder after integer
// division. Using this function, find the greatest common divisor for each of
// pairs (A, B), (A, C), (A, D) provided that integers A, B, C, D are given.

function GCD2(A, B) {
    if (B === 0) {
        return A;
    } else {
        return GCD2(B, A % B);
    }
}

// Example usage
const pairs = [[25, 15], [25, 35], [25, 50]];  // Given pairs of integers

pairs.forEach(pair => {
    const [A, B] = pair;
    const gcd = GCD2(A, B);
    console.log(`GCD of ${pair}: ${gcd}`);
});
