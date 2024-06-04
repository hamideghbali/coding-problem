// An integer K and K sequences of nonzero integers are given. Each given
// sequence is terminated by zero, which is not an element of the sequence.
// Output the length of each given sequence. Also output the total length of all
// given sequences.

function sequenceLengths(K, sequences) {
    let totalLength = 0;
    let lengths = [];

    for (let i = 0; i < K; i++) {
        let length = 0;

        // Iterate through the sequence until the terminating zero
        for (let j = 0; j < sequences[i].length; j++) {
            if (sequences[i][j] === 0) {
                break;
            }
            length++;
        }

        lengths.push(length);
        totalLength += length;
    }

    return {
        lengths: lengths,
        totalLength: totalLength
    };
}

// Example usage:
const K = 3; // Number of sequences
const sequences = [
    [1, 2, 3, 0],      // First sequence
    [4, 5, 0],         // Second sequence
    [6, 7, 8, 9, 0]    // Third sequence
];

const result = sequenceLengths(K, sequences);
console.log('Lengths of each sequence:', result.lengths); // Output: [3, 2, 4]
console.log('Total length of all sequences:', result.totalLength); // Output: 9
