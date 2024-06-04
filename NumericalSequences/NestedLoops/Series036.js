// An integer K and K sequences of nonzero integers are given. Each given
// sequence contains at least two elements and is terminated by zero, which is not
// an element of the sequence. Output the amount of the sequences whose
// element values are in ascending order.

function countAscendingSequences(K, sequences) {
    let count = 0;

    for (let i = 0; i < K; i++) {
        let isAscending = true;
        for (let j = 0; j < sequences[i].length - 1; j++) {
            if (sequences[i][j] === 0) {
                break;
            }
            if (sequences[i][j] >= sequences[i][j + 1]) {
                isAscending = false;
                break;
            }
        }
        if (isAscending) {
            count++;
        }
    }

    return count;
}

// Example usage:
const K = 3; // Number of sequences
const sequences = [
    [1, 2, 3, 0],      // First sequence (ascending)
    [4, 5, 3, 0],      // Second sequence (not ascending)
    [6, 7, 8, 9, 0]    // Third sequence (ascending)
];

const result = countAscendingSequences(K, sequences);
console.log('Amount of ascending sequences:', result); // Output: 2
