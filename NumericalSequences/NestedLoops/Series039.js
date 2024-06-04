// An integer K and K sequences of nonzero integers are given. Each given
// sequence contains at least three elements and is terminated by zero, which is
// not an element of the sequence. Output the amount of the sawtooth sequences
// (see the definition of a sawtooth sequence in Series23).
// Output 0 if the given sequence is a sawtooth one, otherwise output the
// order number of the first element that is not a tooth.

function isSawtooth(sequence) {
    for (let i = 1; i < sequence.length - 1; i++) {
        if (!(sequence[i] > sequence[i - 1] && sequence[i] > sequence[i + 1]) &&
            !(sequence[i] < sequence[i - 1] && sequence[i] < sequence[i + 1])) {
            return i + 1; // Order number of the first element that is not a tooth
        }
    }
    return 0; // Indicates that the sequence is a sawtooth one
}

function countSawtoothSequences(K, sequences) {
    let sawtoothCount = 0;
    let firstNonToothOrder = 0;

    for (let i = 0; i < K; i++) {
        const sequence = sequences[i];
        const result = isSawtooth(sequence);
        
        if (result === 0) {
            sawtoothCount++;
        } else if (firstNonToothOrder === 0) {
            firstNonToothOrder = result;
        }
    }

    if (firstNonToothOrder !== 0) {
        return firstNonToothOrder;
    } else {
        return sawtoothCount;
    }
}

// Example usage:
const K = 3; // Number of sequences
const sequences = [
    [1, 3, 2, 5, 4, 6, 0], // Sawtooth sequence
    [5, 3, 6, 7, 8, 9, 0], // Sawtooth sequence
    [2, 3, 1, 5, 4, 6, 0]  // Not a sawtooth sequence, first element breaks the pattern
];

console.log("Result:", countSawtoothSequences(K, sequences));
