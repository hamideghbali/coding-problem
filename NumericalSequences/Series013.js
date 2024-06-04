// A sequence of nonzero integers terminated by zero is given. Output the
// sum of all positive-valued elements of the sequence. If the sequence does not
// contain the required elements then output 0.


function sumOfPositive(sequence) {
    let sum = 0;
    // Iterate over the sequence
    for (let i = 0; i < sequence.length; i++) {
        // Check if the current element is zero
        if (sequence[i] === 0) {
            break; // If zero is found, terminate the loop
        }
        // Check if the current element is positive
        if (sequence[i] > 0) {
            sum += sequence[i]; // Add the positive element to the sum
        }
    }
    return sum; // Return the sum of positive elements
}

// Example usage
const sequence = [1, -2, 3, 4, 0]; // Example sequence terminated by zero

const sum = sumOfPositive(sequence);
console.log(sum); // Output: 8
