
// An integer N and a sequence of N integers are given. Output the order
// number of the first maximal odd number contained in the sequence. If the
// sequence does not contain odd numbers then output 0.

function findFirstMaximalOddOrder(N, sequence) {
    let maxOdd = -Infinity; // Initialize with negative infinity to ensure any odd number found will be larger
    let maxOddOrderNumber = 0;

    for (let i = 0; i < N; i++) {
        if (sequence[i] % 2 !== 0 && sequence[i] > maxOdd) {
            maxOdd = sequence[i];
            maxOddOrderNumber = i + 1; // Adding 1 to convert from zero-based index to one-based order number
        }
    }

    return maxOddOrderNumber;
}

// Example usage:
const N = 7; // Example value of N
const sequence = [3, 7, 1, 8, 5, 9, 2]; // Example sequence of N integers
const firstMaximalOddOrder = findFirstMaximalOddOrder(N, sequence);
console.log("Order number of the first maximal odd number:", firstMaximalOddOrder);
