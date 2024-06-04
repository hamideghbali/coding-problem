// An integer N (> 2) is given. A sequence of integers AK is defined as:
// A1 = 1, A2 = 2, A3 = 3, AK = AK−1 + AK−2 − 2·AK−3, K = 4, 5, ... .
// Output terms A1, A2, ..., AN of the sequence.

function generateSequence(N) {
    let sequence = [1, 2, 3]; // Initialize the sequence with A1 = 1, A2 = 2, and A3 = 3

    for (let K = 4; K <= N; K++) {
        let AK = sequence[K - 1] + sequence[K - 2] - 2 * sequence[K - 3]; // Calculate AK based on the recursive formula
        sequence.push(AK); // Add AK to the sequence
    }

    return sequence;
}

// Example usage:
let N = 10; // Change N to any integer greater than 2
let sequence = generateSequence(N);
console.log("Sequence of terms A1 to AN:", sequence);
