// // Given an integer independent variable x, find the value of an integer function f
// defined as:

// f(x) = 2·x, if x < −2 or x > 2,
// −3·x otherwise.

function evaluateFunction(x) {
    if (x < -2 || x > 2) {
        return 2 * x; // If x < -2 or x > 2, f(x) = 2 * x
    } else {
        return -3 * x; // Otherwise, f(x) = -3 * x
    }
}

// Example usage:
console.log(evaluateFunction(3));  // Output: 6
console.log(evaluateFunction(-3)); // Output: 6
console.log(evaluateFunction(0));  // Output: 0
console.log(evaluateFunction(-1)); // Output: 3
