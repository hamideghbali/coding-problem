// An integer N and a sequence of N integers are given. Find the order
// number of the first extremal (that is, minimal or maximal) element of the
// sequence.

function findFirstExtremalOrderNumber(N, sequence) {
    let minElement = sequence[0];
    let maxElement = sequence[0];
    let minOrderNumber = 1;
    let maxOrderNumber = 1;
    
    for (let i = 1; i < N; i++) {
        if (sequence[i] < minElement) {
            minElement = sequence[i];
            minOrderNumber = i + 1; // Adding 1 to convert from zero-based index to one-based order number
        } else if (sequence[i] > maxElement) {
            maxElement = sequence[i];
            maxOrderNumber = i + 1; // Adding 1 to convert from zero-based index to one-based order number
        }
    }

    // Determine which extremal element occurred first
    if (minOrderNumber < maxOrderNumber) {
        return minOrderNumber;
    } else {
        return maxOrderNumber;
    }
}

// Example usage:
const N = 7; // Example value of N
const sequence = [3, 7, 1, 8, 5, 9, 2]; // Example sequence of N integers
const firstExtremalOrderNumber = findFirstExtremalOrderNumber(N, sequence);
console.log("Order number of the first extremal element:", firstExtremalOrderNumber);
