// An integer K and a sequence of nonzero integers terminated by zero are
// given (the final zero is not an element of the sequence). Output the order
// number of the first element whose value greater than K. If the sequence does
// not contain the required elements then output 0.


function findFirstElementGreaterThanK(K, sequence) {
    let orderNumber = 0;
    // Iterate over the sequence
    for (let i = 0; i < sequence.length; i++) {
        // Check if the current element is zero
        if (sequence[i] === 0) {
            break; // If zero is found, terminate the loop
        }
        // Check if the current element is greater than K
        if (sequence[i] > K) {
            orderNumber = i + 1; // Set the order number and terminate the loop
            break;
        }
    }
    return orderNumber; // Return the order number of the first element greater than K
}

// Example usage
const K = 5; // Example value of K
const sequence = [2, 6, 4, 8, 3, 10, 0]; // Example sequence terminated by zero

const orderNumber = findFirstElementGreaterThanK(K, sequence);
console.log(orderNumber); // Output: 2 (the first element greater than K=5 is at order number 2)
