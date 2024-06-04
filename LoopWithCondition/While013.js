// A real number A (> 1) is given. Find the smallest integer K such that the
// sum 1 + 1/2 + ... + 1/K is greater than A. Output K and the corresponding sum.

function findSmallestK(A) {
    let K = 1;
    let sum = 0;

    while (sum <= A) {
        sum += 1 / K;
        K++;
    }

    return [K - 1, sum]; // Decrement K by 1 to get the smallest K such that sum > A
}

// Example usage:
let A = 2; // Change A to any real number greater than 1
let [smallestK, sum] = findSmallestK(A);
console.log("Smallest K such that sum > A:", smallestK);
console.log("Corresponding sum:", sum);
