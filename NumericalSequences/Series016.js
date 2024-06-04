// An integer K and a sequence of nonzero integers terminated by zero are
// given (the final zero is not an element of the sequence). Output the order
// number of the last element whose value greater than K. If the sequence does
// not contain the required elements then output 0.

function findLastElementGreaterThanK(K, sequence) {
    let orderNumber = 0;
    // Iterate over the sequence in reverse order
    for (let i = sequence.length - 1; i >= 0; i--) {
        // Check if the current element is zero
        if (sequence[i] === 0) {
            continue; // If zero is found, continue to the next iteration
        }
        // Check if the current element is greater than K
        if (sequence[i] > K) {
            orderNumber = i + 1; // Set the order number and terminate the loop
            break;
        }
    }
    return orderNumber; // Return the order number of the last element greater than K
}

// Example usage
const K = 5; // Example value of K
const sequence = [2, 6, 4, 8, 3, 10, 0]; // Example sequence terminated by zero

const orderNumber = findLastElementGreaterThanK(K, sequence);
console.log(orderNumber); // Output: 6 (the last element greater than K=5 is at order number 6)
