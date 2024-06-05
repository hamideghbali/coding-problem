// Minmax4. An integer N and a sequence of N real numbers are given. Find the order
// number of the minimal element of the sequence.

function findMinOrderNumber(N, sequence) {
    let minElement = sequence[0];
    let minIndex = 0;

    for (let i = 1; i < N; i++) {
        if (sequence[i] < minElement) {
            minElement = sequence[i];
            minIndex = i;
        }
    }

    // Adding 1 to minIndex to convert from zero-based index to one-based order number
    return minIndex + 1;
}

// Example usage:
const N = 5; // Example value of N
const sequence = [3.5, 2.8, 1.2, 4.1, 0.9]; // Example sequence of N real numbers
const minOrderNumber = findMinOrderNumber(N, sequence);
console.log("Order number of the minimal element:", minOrderNumber);
