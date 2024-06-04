// An integer N (> 1) and a sequence of N real numbers are given. Output the
// logical value True if the values of elements are in ascending order, otherwise
// // output False.

function isAscending(sequence) {
    // Check if each element is less than or equal to the next element
    for (let i = 0; i < sequence.length - 1; i++) {
        if (sequence[i] > sequence[i + 1]) {
            return false; // If any element is greater than the next one, return false
        }
    }
    return true; // If all elements are in ascending order, return true
}

// Example usage
const N = 5;
const sequence1 = [1, 2, 3, 4, 5]; // Ascending order
const sequence2 = [5, 4, 3, 2, 1]; // Not in ascending order

console.log("Sequence 1 is in ascending order:", isAscending(sequence1)); // Output: true
console.log("Sequence 2 is in ascending order:", isAscending(sequence2)); // Output: false
