// An integer K and K sequences of nonzero integers are given. Each given
// sequence contains at least two elements and is terminated by zero, which is not
// an element of the sequence. Output the amount of sequences whose element
// values are in ascending or in descending order.

function countOrderedSequences(K, sequences) {
    let count = 0;

    for (let i = 0; i < K; i++) {
        let isAscending = true;
        let isDescending = true;
        let seq = sequences[i];

        for (let j = 0; j < seq.length - 1; j++) {
            if (seq[j] === 0) {
                break;
            }
            if (seq[j] >= seq[j + 1]) {
                isAscending = false;
            }
            if (seq[j] <= seq[j + 1]) {
                isDescending = false;
            }
        }

        if (isAscending || isDescending) {
            count++;
        }
    }

    return count;
}

// Example usage:
const K = 4; // Number of sequences
const sequences = [
    [1, 2, 3, 0],       // First sequence (ascending)
    [5, 4, 3, 0],       // Second sequence (descending)
    [6, 7, 5, 0],       // Third sequence (not ordered)
    [9, 8, 7, 6, 0]     // Fourth sequence (descending)
];

const result = countOrderedSequences(K, sequences);
console.log('Amount of ordered sequences:', result); // Output: 3
