// Given an integer N (> 0), find the smallest positive integer K such that its
// square is greater than N: K^2> N. 
// Do not use the operation of extracting a root.

function smallestKGreaterThanN(N) {
    let K = 1;

    while (K * K <= N) {
        K++;
    }

    return K;
}

// Example usage:
let N = 20; // Change N to any positive integer
let smallestK = smallestKGreaterThanN(N);
console.log("Smallest K such that K^2 > N:", smallestK);
