// An integer K and K sequences of nonzero integers are given. Each given
// sequence contains at least three elements and is terminated by zero, which is
// not an element of the sequence. Process each sequence as follows: output its
// length if the sequence is a sawtooth one (see Series23), otherwise output the
// order number of its first element that is not a tooth.

function isSawtooth(sequence) {
    for (let i = 1; i < sequence.length - 1; i++) {
        if (!(sequence[i] > sequence[i - 1] && sequence[i] > sequence[i + 1]) &&
            !(sequence[i] < sequence[i - 1] && sequence[i] < sequence[i + 1])) {
            return i + 1; // Order number of the first element that is not a tooth
        }
    }
    return sequence.length; // Indicates that the sequence is a sawtooth one
}

function processSequences(K, sequences) {
    const results = [];

    for (let i = 0; i < K; i++) {
        const sequence = sequences[i];
        const result = isSawtooth(sequence);
        results.push(result);
    }

    return results;
}

// Example usage:
const K = 3; // Number of sequences
const sequences = [
    [1, 3, 2, 5, 4, 6, 0], // Sawtooth sequence
    [5, 3, 6, 7, 8, 9, 0], // Sawtooth sequence
    [2, 3, 1, 5, 4, 6, 0]  // Not a sawtooth sequence, first element breaks the pattern
];

console.log("Results:", processSequences(K, sequences));
