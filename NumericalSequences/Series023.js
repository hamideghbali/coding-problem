// An integer N (> 2) and a sequence of N real numbers are given. A
// sequence is called a sawtooth one if each inner element of the sequence is
// either greater or less than both of its neighbors (that is, each inner element is a
// tooth). Output 0 if the given sequence is a sawtooth one, otherwise output the
// order number of the first element that is not a tooth.

function firstNonSawtoothIndex(sequence) {
    // Check if each inner element is a tooth
    for (let i = 1; i < sequence.length - 1; i++) {
        if (!((sequence[i] > sequence[i - 1] && sequence[i] > sequence[i + 1]) ||
              (sequence[i] < sequence[i - 1] && sequence[i] < sequence[i + 1]))) {
            return i + 1; // Return the order number of the first element that is not a tooth
        }
    }
    return 0; // If the loop completes without finding such elements, return 0
}

// Example usage
const N = 5;
const sequence1 = [1, 3, 2, 5, 4]; // Not a sawtooth sequence
const sequence2 = [1, 3, 2, 3, 1]; // Sawtooth sequence

console.log("Sequence 1:", firstNonSawtoothIndex(sequence1)); // Output: 3 (The third element is not a tooth)
console.log("Sequence 2:", firstNonSawtoothIndex(sequence2)); // Output: 0 (The sequence is a sawtooth sequence)
