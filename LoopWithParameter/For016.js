// A real number A and an integer N (> 0) are given. Using one loop-statement
// compute and output powers A^K
// for all integer exponents K in the range 1 to N.

function computePowers(A, N) {
    for (let K = 1; K <= N; K++) {
        let result = Math.pow(A, K);
        console.log(`${A}^${K} = ${result}`);
    }
}

// Example usage:
let A = 2; // Change A to any real number
let N = 5; // Change N to any positive integer
computePowers(A, N);
