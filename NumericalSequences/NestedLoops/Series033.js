// Integers K, N and K sequences of integers are given. Each given sequence
// contains N elements. Output the order number of the last element with the
// value 2 for each given sequence (if a sequence does not contain elements with
// the required value then output 0).

function lastOccurrenceOfTwo(K, N, sequences) {
    let results = [];

    // Iterate through each sequence
    for (let i = 0; i < K; i++) {
        let foundIndex = 0; // Default value if 2 is not found

        // Iterate through each element in the current sequence in reverse order
        for (let j = N - 1; j >= 0; j--) {
            if (sequences[i][j] === 2) {
                foundIndex = j + 1; // Convert zero-based index to one-based index
                break;
            }
        }

        results.push(foundIndex);
    }

    return results;
}

// Example usage:
const K = 3; // Number of sequences
const N = 4; // Number of elements in each sequence
const sequences = [
    [1, 2, 3, 4], // First sequence
    [5, 6, 7, 8], // Second sequence
    [9, 10, 2, 12] // Third sequence
];

const results = lastOccurrenceOfTwo(K, N, sequences);
console.log(results); // Output will be the order numbers: [2, 0, 3]
