// A real number B, an integer N and a sequence of N real numbers are given.
// The values of elements of the sequence are in ascending order. Output the
// number B jointly with the elements of the sequence so that all output numbers
// were in ascending order.

function insertValueInAscendingOrder(B, sequence) {
    // Find the index where the new value B should be inserted to maintain ascending order
    let index = 0;
    while (index < sequence.length && sequence[index] < B) {
        index++;
    }
    // Insert the value B at the correct index in the sequence
    sequence.splice(index, 0, B);
    return sequence;
}

// Example usage
const B = 3.5; // Example value of B
const sequence = [1.2, 2.0, 4.1, 5.6]; // Example sequence in ascending order

const updatedSequence = insertValueInAscendingOrder(B, sequence);
console.log(updatedSequence); // Output: [1.2, 2.0, 3.5, 4.1, 5.6]
