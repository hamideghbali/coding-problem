// An integer N (> 1) and a sequence of N real numbers are given. Find the
// maximal sum of two adjacent elements of the sequence.

function findMaxSumOfAdjacent(N, sequence) {
    let maxSum = -Infinity;

    // Iterate through the sequence and find the maximal sum of two adjacent elements
    for (let i = 0; i < N - 1; i++) {
        const sum = sequence[i] + sequence[i + 1];
        if (sum > maxSum) {
            maxSum = sum;
        }
    }

    return maxSum;
}

// Example usage:
const N = 5; // Example value of N
const sequence = [3, 7, 1, 8, 5]; // Example sequence of N real numbers
const maxSumOfAdjacent = findMaxSumOfAdjacent(N, sequence);
console.log("Maximal sum of two adjacent elements:", maxSumOfAdjacent);
