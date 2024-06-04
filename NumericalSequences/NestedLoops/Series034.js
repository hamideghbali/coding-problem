// Integers K, N and K sequences of integers are given. Each given sequence
// contains N elements. Process each sequence as follows: output the sum of the
// values of all its elements if the sequence contains an element with the value 2,
// otherwise output 0.

function sumIfContainsTwo(K, N, sequences) {
    let results = [];

    // Iterate through each sequence
    for (let i = 0; i < K; i++) {
        let sum = 0;
        let containsTwo = false;

        // Iterate through each element in the current sequence
        for (let j = 0; j < N; j++) {
            if (sequences[i][j] === 2) {
                containsTwo = true;
            }
            sum += sequences[i][j];
        }

        // If the sequence contains the value 2, push the sum, otherwise push 0
        if (containsTwo) {
            results.push(sum);
        } else {
            results.push(0);
        }
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

const results = sumIfContainsTwo(K, N, sequences);
console.log(results); // Output will be the sums: [10, 0, 33]
