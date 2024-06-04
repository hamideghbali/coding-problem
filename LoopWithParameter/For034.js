// An integer N (> 1) is given. A sequence of real numbers AK is defined as:
// A1 = 1, A2 = 2, AK = (AK−2 + 2·AK−1)/3, K = 3, 4, ... .
// Output terms A1, A2, ..., AN of the sequence.

function generateSequence(N) {
    let sequence = [1, 2]; // Initialize the sequence with A1 = 1 and A2 = 2

    for (let K = 3; K <= N; K++) {
        let AK = (sequence[K - 3] + 2 * sequence[K - 2]) / 3; // Calculate AK based on the recursive formula
        sequence.push(AK); // Add AK to the sequence
    }

    return sequence;
}

// Example usage:
let N = 10; // Change N to any positive integer
let sequence = generateSequence(N);
console.log("Sequence of terms A1 to AN:", sequence);
