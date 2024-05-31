// Given three real numbers, output the sum of two largest values.

function sumOfTwoLargest(a, b, c) {
    // Find the two largest values
    let largest1 = Math.max(a, b, c);
    let largest2 = Math.min(Math.max(a, b), Math.max(b, c), Math.max(a, c));
    
    // Sum the two largest values
    let sum = largest1 + largest2;
    
    return sum;
}

// Example usage:
console.log(sumOfTwoLargest(5.7, 3.2, 8.1));  // Output: 13.8
console.log(sumOfTwoLargest(-2.4, -3.6, -1.1)); // Output: -3.5
console.log(sumOfTwoLargest(0, 0, 0));  // Output: 0
console.log(sumOfTwoLargest(7, 7, 7));  // Output: 14
console.log(sumOfTwoLargest(-5, 5, 0));  // Output: 0
