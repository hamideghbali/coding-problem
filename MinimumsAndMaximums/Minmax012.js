// An integer N and a sequence of N real numbers are given. Output the
// minimal positive number contained in the sequence. If the sequence does not
// contain positive numbers then output 0.

function findMinimalPositive(N, sequence) {
    let minimalPositive = Infinity; // Initialize with positive infinity to ensure any positive number found will be smaller
    let foundPositive = false;

    for (let i = 0; i < N; i++) {
        if (sequence[i] > 0 && sequence[i] < minimalPositive) {
            minimalPositive = sequence[i];
            foundPositive = true;
        }
    }

    return foundPositive ? minimalPositive : 0;
}

// Example usage:
const N = 5; // Example value of N
const sequence = [-3, -1, 2, 4, -2]; // Example sequence of N real numbers
const minimalPositive = findMinimalPositive(N, sequence);
console.log("Minimal positive number contained in the sequence:", minimalPositive);
