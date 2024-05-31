// A real number A and an integer N (> 0) are given. Using one loop-statement
// compute the sum

// 1 + A + A^2 + A^3 + ... + A^N

function computeSum(A, N) {
    let sum = 0;
    let power = 1;

    for (let i = 0; i <= N; i++) {
        sum += power;
        power *= A;
    }

    return sum;
}

// Example usage:
let A = 2; // Change A to any real number
let N = 5; // Change N to any positive integer
let result = computeSum(A, N);
console.log("Sum:", result);
