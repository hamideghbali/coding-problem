// An integer N (> 0) is given. An integer-valued sequence of the Fibonacci
// numbers FK is defined as:

// F1 = 1, F2 = 1, FK = FK−2 + FK−1, K = 3, 4, ... .

// Output terms F1, F2, ..., FN of the sequence.

function generateFibonacciSequence(N) {
    let sequence = [1, 1]; // Initialize the sequence with F1 = 1 and F2 = 1

    for (let K = 3; K <= N; K++) {
        let FK = sequence[K - 3] + sequence[K - 2]; // Calculate FK based on the recursive formula
        sequence.push(FK); // Add FK to the sequence
    }

    return sequence;
}

// Example usage:
let N = 10; // Change N to any positive integer
let sequence = generateFibonacciSequence(N);
console.log("Sequence of terms F1 to FN:", sequence);
