// Given an integer N (> 0), find the largest integer K such that its square is not
// greater than N: K^2 ≤ N.
//  Do not use the operation of extracting a root.

function largestKNotGreaterThanN(N) {
    let K = Math.floor(Math.sqrt(N));

    while (K * K > N) {
        K--;
    }

    return K;
}

// Example usage:
let N = 20; // Change N to any positive integer
let largestK = largestKNotGreaterThanN(N);
console.log("Largest K such that K^2 ≤ N:", largestK);
