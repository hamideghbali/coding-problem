// An integer N and a sequence of N integers are given. Find the total
// amount of all extremal (that is, minimal or maximal) elements of the sequence.

function countExtremalElements(N, sequence) {
    let minElement = sequence[0];
    let maxElement = sequence[0];
    let minCount = 0;
    let maxCount = 0;

    // Find the minimal and maximal elements and count their occurrences
    for (let i = 0; i < N; i++) {
        if (sequence[i] < minElement) {
            minElement = sequence[i];
            minCount = 1;
        } else if (sequence[i] === minElement) {
            minCount++;
        }

        if (sequence[i] > maxElement) {
            maxElement = sequence[i];
            maxCount = 1;
        } else if (sequence[i] === maxElement) {
            maxCount++;
        }
    }

    return minCount + maxCount;
}

// Example usage:
const N = 7; // Example value of N
const sequence = [3, 7, 1, 8, 1, 9, 2]; // Example sequence of N integers
const extremalElementCount = countExtremalElements(N, sequence);
console.log("Total number of extremal elements in the sequence:", extremalElementCount);
