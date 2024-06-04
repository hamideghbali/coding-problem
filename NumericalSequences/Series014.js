// An integer K and a sequence of nonzero integers terminated by zero are
// given (the final zero is not an element of the sequence). Output the amount of
// elements whose value less than K.

function countElementsLessThanK(K, sequence) {
    let count = 0;
    // Iterate over the sequence
    for (let i = 0; i < sequence.length; i++) {
        // Check if the current element is zero
        if (sequence[i] === 0) {
            break; // If zero is found, terminate the loop
        }
        // Check if the current element is less than K
        if (sequence[i] < K) {
            count++; // Increment the count if the element is less than K
        }
    }
    return count; // Return the count of elements less than K
}

// Example usage
const K = 5; // Example value of K
const sequence = [2, 6, 4, 8, 3, 10, 0]; // Example sequence terminated by zero

const count = countElementsLessThanK(K, sequence);
console.log(count); // Output: 3 (there are 3 elements less than K=5 in the sequence)
