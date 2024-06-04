// Taking into account that the least common multiple of two positive integers
// A and B equals A·(B/GCD(A, B)), where GCD(A, B) is the greatest common
// divisor of A and B, and using the GCD2 function from the task Func46, write
// an integer function LCM2(A, B) that returns the least common multiple of A
// and B. Using this function, find the least common multiple for each of pairs
// (A, B), (A, C), (A, D) provided that integers A, B, C, D are given.

function GCD2(A, B) {
    if (B === 0) {
        return A;
    } else {
        return GCD2(B, A % B);
    }
}

function LCM2(A, B) {
    return (A * B) / GCD2(A, B);
}

// Example usage
function main() {
    let A = 12, B = 18, C = 15, D = 20;
    let lcm_AB = LCM2(A, B);
    let lcm_AC = LCM2(A, C);
    let lcm_AD = LCM2(A, D);

    console.log(`LCM of A and B: ${lcm_AB}`);
    console.log(`LCM of A and C: ${lcm_AC}`);
    console.log(`LCM of A and D: ${lcm_AD}`);
}

main();
