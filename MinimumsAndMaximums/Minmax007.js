// An integer N and a sequence of N integers are given. Find the order
// numbers of the first maximal element and the last minimal element of the
// sequence.

function findMinMaxOrderNumbers(N, sequence) {
    let maxElement = sequence[0];
    let minElement = sequence[0];
    let maxOrderNumber = 1;
    let minOrderNumber = 1;

    for (let i = 1; i < N; i++) {
        if (sequence[i] > maxElement) {
            maxElement = sequence[i];
            maxOrderNumber = i + 1; // Adding 1 to convert from zero-based index to one-based order number
        } else if (sequence[i] <= minElement) {
            minElement = sequence[i];
            minOrderNumber = i + 1; // Adding 1 to convert from zero-based index to one-based order number
        }
    }

    return { maxOrderNumber, minOrderNumber };
}

// Example usage:
const N = 7; // Example value of N
const sequence = [3, 7, 1, 8, 5, 9, 2]; // Example sequence of N integers
const { maxOrderNumber, minOrderNumber } = findMinMaxOrderNumbers(N, sequence);
console.log("Order number of the first maximal element:", maxOrderNumber);
console.log("Order number of the last minimal element:", minOrderNumber);
