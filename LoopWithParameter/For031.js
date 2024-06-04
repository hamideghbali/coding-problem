// An integer N (> 0) is given. A sequence of real numbers AK is defined as:

// A0 = 2, AK = 2 + 1/AK−1, K = 1, 2, ... .

// Output terms A1, A2, ..., AN of the sequence.

function generateSequence(N) {
    let sequence = [2]; // Initialize the sequence with A0 = 2

    for (let K = 1; K <= N; K++) {
        sequence.push(2 + 1 / sequence[K - 1]); // Calculate AK and add it to the sequence
    }

    return sequence;
}

// Example usage:
let N = 10; // Change N to any positive integer
let sequence = generateSequence(N);
console.log("Sequence of terms A0 to AN:", sequence);
