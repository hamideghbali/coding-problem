// An integer N (> 1) and a sequence of N real numbers are given. Output 0 if
// the values of elements are in descending order, otherwise output the order
// number of the first element that breaks the required order.

function checkDescending(sequence) {
    for (let i = 0; i < sequence.length - 1; i++) {
        if (sequence[i] < sequence[i + 1]) {
            return i + 1; // Return the order number of the first element breaking the descending order
        }
    }
    return 0; // Return 0 if the sequence is in descending order
}

// Example usage
const N = 5;
const sequence1 = [5, 4, 3, 2, 1]; // Descending order
const sequence2 = [1, 3, 2, 4, 5]; // Not in descending order

console.log("Result for sequence 1:", checkDescending(sequence1)); // Output: 0
console.log("Result for sequence 2:", checkDescending(sequence2)); // Output: 3 (element at index 2 breaks descending order)
