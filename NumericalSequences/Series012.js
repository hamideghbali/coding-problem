// A sequence of nonzero integers terminated by zero is given (the final zero
//     is not an element of the sequence). Output the length of the sequence.

function sequenceLength(sequence) {
    let length = 0;
    // Iterate over the sequence
    for (let i = 0; i < sequence.length; i++) {
        // Check if the current element is zero
        if (sequence[i] === 0) {
            break; // If zero is found, terminate the loop
        }
        length++; // Increment the length for each non-zero element
    }
    return length; // Return the length of the sequence
}

// Example usage
const sequence = [1, 2, 3, 4, 5, 0]; // Example sequence terminated by zero

const length = sequenceLength(sequence);
console.log(length); // Output: 5
