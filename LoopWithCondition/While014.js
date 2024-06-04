// A real number A (> 1) is given. Find the largest integer K such that the sum
// 1 + 1/2 + ... + 1/K is less than A. Output K and the corresponding sum.

function findLargestK(A) {
    let K = 1;
    let sum = 0;

    while (sum + 1 / K < A) {
        sum += 1 / K;
        K++;
    }

    return [K - 1, sum]; // Decrement K by 1 to get the largest K such that sum < A
}

// Example usage:
let A = 2; // Change A to any real number greater than 1
let [largestK, sum] = findLargestK(A);
console.log("Largest K such that sum < A:", largestK);
console.log("Corresponding sum:", sum);
