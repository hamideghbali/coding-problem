// Given three real numbers, output the minimal value of them.

function findMinimalValue(a, b, c) {
    return Math.min(a, b, c);
}

// Example usage:
console.log(findMinimalValue(5.7, 3.2, 8.1));  // Output: 3.2
console.log(findMinimalValue(-2.4, -3.6, -1.1)); // Output: -3.6
console.log(findMinimalValue(0, 0, 0));  // Output: 0
console.log(findMinimalValue(7, 7, 7));  // Output: 7
console.log(findMinimalValue(-5, 5, 0));  // Output: -5
