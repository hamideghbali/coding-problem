// An integer N (> 0) is given. A sequence of real numbers AK is defined as:

// A0 = 1, AK = (AK−1 + 1)/K, K = 1, 2, ... .

// Output terms A1, A2, ..., AN of the sequence.

function generateSequence(N) {
    let sequence = [1]; // Initialize the sequence with A0 = 1

    for (let K = 1; K <= N; K++) {
        sequence.push((sequence[K - 1] + 1) / K); // Calculate AK and add it to the sequence
    }

    return sequence;
}

// Example usage:
let N = 10; // Change N to any positive integer
let sequence = generateSequence(N);
console.log("Sequence of terms A1 to AN:", sequence);
