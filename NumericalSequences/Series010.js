// An integer N and a sequence of N integers are given. Output the logical
// value True if the sequence contains positive-valued elements, otherwise output
// False.

function containsPositive(N, sequence) {
    // Iterate over the sequence
    for (let i = 0; i < N; i++) {
        // Check if the current element is positive
        if (sequence[i] > 0) {
            return true; // Return true if positive element found
        }
    }
    return false; // Return false if no positive element found
}

// Example usage
const N = 5; // Number of elements in the sequence
const sequence = [-2, 0, 5, -10, 3]; // Example sequence of integers

const hasPositive = containsPositive(N, sequence);
console.log(hasPositive); // Output: true
