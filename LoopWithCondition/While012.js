// An integer N (> 1) is given. Find the largest integer K such that the sum
// // 1 + 2 + ... + K is less than or equal to N. Output K and the corresponding sum.

function findLargestK(N) {
    let K = 1;
    let sum = 0;

    while (sum + K <= N) {
        sum += K;
        K++;
    }

    return [K - 1, sum]; // Decrement K by 1 to get the largest K such that sum <= N
}

// Example usage:
let N = 20; // Change N to any positive integer
let [largestK, sum] = findLargestK(N);
console.log("Largest K such that sum <= N:", largestK);
console.log("Corresponding sum:", sum);
