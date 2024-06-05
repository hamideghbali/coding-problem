// An integer N and a sequence of N integers are given. Find the amount of
// the minimal elements of the sequence.

function countMinimalElements(N, sequence) {
    let minElement = sequence[0];
    let minCount = 1;

    // Find the minimal element and count its occurrences
    for (let i = 1; i < N; i++) {
        if (sequence[i] < minElement) {
            minElement = sequence[i];
            minCount = 1; // Reset count for the new minimal element
        } else if (sequence[i] === minElement) {
            minCount++;
        }
    }

    return minCount;
}

// Example usage:
const N = 7; // Example value of N
const sequence = [3, 7, 1, 8, 1, 9, 2]; // Example sequence of N integers
const minimalElementCount = countMinimalElements(N, sequence);
console.log("Number of minimal elements in the sequence:", minimalElementCount);
