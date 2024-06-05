// An integer N and a sequence of N integers are given. Find the order
// // numbers of the first and the last minimal elements of the sequence.

function findMinMaxOrderNumbers(N, sequence) {
    let minElement = sequence[0];
    let minOrderNumbers = [1]; // Initialize with the order number of the first minimal element
    let minOrderNumber = 1;

    for (let i = 1; i < N; i++) {
        if (sequence[i] < minElement) {
            minElement = sequence[i];
            minOrderNumbers = [i + 1]; // Reset the order numbers array with the current minimal element's order number
        } else if (sequence[i] === minElement) {
            minOrderNumbers.push(i + 1); // Add the current minimal element's order number to the array
        }
    }

    // The last minimal element's order number will be the last element of the array
    minOrderNumber = minOrderNumbers[minOrderNumbers.length - 1];

    return { firstMinOrderNumber: minOrderNumbers[0], lastMinOrderNumber: minOrderNumber };
}

// Example usage:
const N = 7; // Example value of N
const sequence = [3, 7, 1, 8, 5, 9, 1]; // Example sequence of N integers
const { firstMinOrderNumber, lastMinOrderNumber } = findMinMaxOrderNumbers(N, sequence);
console.log("Order number of the first minimal element:", firstMinOrderNumber);
console.log("Order number of the last minimal element:", lastMinOrderNumber);
