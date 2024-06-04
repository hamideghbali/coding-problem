// Integers K, N and K sequences of integers are given. Each given sequence
// contains N elements. Find the total sum of the values of elements of all given
// sequences.

function totalSumOfSequences(K, N, sequences) {
    let totalSum = 0;

    // Iterate through each sequence
    for (let i = 0; i < K; i++) {
        // Sum up the elements of the current sequence
        for (let j = 0; j < N; j++) {
            totalSum += sequences[i][j];
        }
    }

    return totalSum;
}

// Example usage:
const K = 3; // Number of sequences
const N = 4; // Number of elements in each sequence
const sequences = [
    [1, 2, 3, 4], // First sequence
    [5, 6, 7, 8], // Second sequence
    [9, 10, 11, 12] // Third sequence
];

const result = totalSumOfSequences(K, N, sequences);
console.log(result); // Output will be the total sum: 78
