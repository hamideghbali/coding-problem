// Given two real numbers, output the order number of the smaller of them.

function getOrderNumberOfSmaller(a, b) {
    return a < b ? 1 : 2;
}

// Example usage:
console.log(getOrderNumberOfSmaller(5.7, 3.2));  // Output: 2
console.log(getOrderNumberOfSmaller(-2.4, -3.6)); // Output: 2
console.log(getOrderNumberOfSmaller(0, 0));  // Output: 2 (they are equal, returning 2 as default)
console.log(getOrderNumberOfSmaller(7, 7));  // Output: 2 (they are equal, returning 2 as default)
console.log(getOrderNumberOfSmaller(-5, 5));  // Output: 1
