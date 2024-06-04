// Integers K, N and K sequences of integers are given. Each given sequence
// contains N elements. Find the sum of the values of all elements for each given
// sequence.

function sumOfEachSequence(K, N, sequences) {
    let sums = [];

    // Iterate through each sequence
    for (let i = 0; i < K; i++) {
        let sum = 0;
        // Sum up the elements of the current sequence
        for (let j = 0; j < N; j++) {
            sum += sequences[i][j];
        }
        sums.push(sum);
    }

    return sums;
}

// Example usage:
const K = 3; // Number of sequences
const N = 4; // Number of elements in each sequence
const sequences = [
    [1, 2, 3, 4], // First sequence
    [5, 6, 7, 8], // Second sequence
    [9, 10, 11, 12] // Third sequence
];

const result = sumOfEachSequence(K, N, sequences);
console.log(result); // Output will be the sum of each sequence: [10, 26, 42]
