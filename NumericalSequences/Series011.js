// Integers K, N and a sequence of N integers are given. Output the logical
// value False if the sequence contains elements of value less than K, otherwise
// output False.

function containsLessThanK(K, N, sequence) {
    // Iterate over the sequence
    for (let i = 0; i < N; i++) {
        // Check if the current element is less than K
        if (sequence[i] < K) {
            return true; // Return true if an element less than K is found
        }
    }
    return false; // Return false if no element less than K is found
}

// Example usage
const K = 5; // Value of K
const N = 5; // Number of elements in the sequence
const sequence = [2, 8, 6, 4, 9]; // Example sequence of integers

const hasLessThanK = containsLessThanK(K, N, sequence);
console.log(hasLessThanK); // Output: true
