// Given three real numbers, output the value between the minimum and the
// maximum.

function findMiddleValue(a, b, c) {
    let min = Math.min(a, b, c);
    let max = Math.max(a, b, c);
    
    // Calculate the sum of all three numbers
    let sum = a + b + c;
    
    // Subtract the minimum and maximum values from the sum to get the middle value
    let middleValue = sum - min - max;
    
    return middleValue;
}

// Example usage:
console.log(findMiddleValue(5.7, 3.2, 8.1));  // Output: 5.7
console.log(findMiddleValue(-2.4, -3.6, -1.1)); // Output: -2.4
console.log(findMiddleValue(0, 0, 0));  // Output: 0
console.log(findMiddleValue(7, 7, 7));  // Output: 7
console.log(findMiddleValue(-5, 5, 0));  // Output: 0
