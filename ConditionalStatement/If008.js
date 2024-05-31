// Given two real numbers, output the larger value and then the smaller value of
// them.


function outputLargerAndSmaller(a, b) {
    if (a > b) {
        return [a, b];
    } else {
        return [b, a];
    }
}

// Example usage:
console.log(outputLargerAndSmaller(5.7, 3.2));  // Output: [5.7, 3.2]
console.log(outputLargerAndSmaller(-2.4, -3.6)); // Output: [-2.4, -3.6]
console.log(outputLargerAndSmaller(0, 0));  // Output: [0, 0]
console.log(outputLargerAndSmaller(7, 7));  // Output: [7, 7]
console.log(outputLargerAndSmaller(-5, 5));  // Output: [5, -5]
