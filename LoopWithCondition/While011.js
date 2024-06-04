// An integer N (> 1) is given. Find the smallest integer K such that the sum
// 1 + 2 + ... + K is greater than or equal to N. Output K and the corresponding
// sum.

function findSmallestK(N) {
    let K = 1;
    let sum = 0;

    while (sum < N) {
        sum += K;
        K++;
    }

    return [K - 1, sum]; // Decrement K by 1 to get the smallest K such that sum >= N
}

// Example usage:
let N = 20; // Change N to any positive integer
let [smallestK, sum] = findSmallestK(N);
console.log("Smallest K such that sum >= N:", smallestK);
console.log("Corresponding sum:", sum);
