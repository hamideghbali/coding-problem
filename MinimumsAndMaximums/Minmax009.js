// An integer N and a sequence of N integers are given. Find the order
// numbers of the first and the last maximal elements of the sequence.

function findMinMaxOrderNumbers(N, sequence) {
    let maxElement = sequence[0];
    let maxOrderNumbers = [1]; // Initialize with the order number of the first maximal element
    let maxOrderNumber = 1;

    for (let i = 1; i < N; i++) {
        if (sequence[i] > maxElement) {
            maxElement = sequence[i];
            maxOrderNumbers = [i + 1]; // Reset the order numbers array with the current maximal element's order number
        } else if (sequence[i] === maxElement) {
            maxOrderNumbers.push(i + 1); // Add the current maximal element's order number to the array
        }
    }

    // The last maximal element's order number will be the last element of the array
    maxOrderNumber = maxOrderNumbers[maxOrderNumbers.length - 1];

    return { firstMaxOrderNumber: maxOrderNumbers[0], lastMaxOrderNumber: maxOrderNumber };
}

// Example usage:
const N = 7; // Example value of N
const sequence = [3, 7, 1, 8, 5, 9, 8]; // Example sequence of N integers
const { firstMaxOrderNumber, lastMaxOrderNumber } = findMinMaxOrderNumbers(N, sequence);
console.log("Order number of the first maximal element:", firstMaxOrderNumber);
console.log("Order number of the last maximal element:", lastMaxOrderNumber);
