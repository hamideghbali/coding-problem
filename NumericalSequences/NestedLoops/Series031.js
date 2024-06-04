// Integers K, N and K sequences of integers are given. Each given sequence
// contains N elements. Find the amount of the sequences containing an element
// with the value 2.

function countSequencesWithTwo(K, N, sequences) {
    let count = 0;

    // Iterate through each sequence
    for (let i = 0; i < K; i++) {
        // Check if the current sequence contains the value 2
        if (sequences[i].includes(2)) {
            count++;
        }
    }

    return count;
}

// Example usage:
const K = 3; // Number of sequences
const N = 4; // Number of elements in each sequence
const sequences = [
    [1, 2, 3, 4], // First sequence
    [5, 6, 7, 8], // Second sequence
    [9, 10, 2, 12] // Third sequence
];

const result = countSequencesWithTwo(K, N, sequences);
console.log(result); // Output will be the count of sequences containing the value 2: 2
