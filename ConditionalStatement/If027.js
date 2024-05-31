// Given a real independent variable x, find the value of an integer function f
// defined as:

// 0, if x < 0,

// f(x) = 1, if x belongs to [0, 1), [2, 3), ...,
// −1, if x belongs to [1, 2), [3, 4), ... .

function evaluateFunction(x) {
    if (x < 0) {
        return 0; // If x < 0, f(x) = 0
    } else {
        // Calculate the integer part of x
        let integerPart = Math.floor(x);
        // Determine whether the integer part is even or odd
        if (integerPart % 2 === 0) {
            return 1; // If the integer part is even, f(x) = 1
        } else {
            return -1; // If the integer part is odd, f(x) = -1
        }
    }
}

// Example usage:
console.log(evaluateFunction(-1)); // Output: 0
console.log(evaluateFunction(0.5)); // Output: 1
console.log(evaluateFunction(1.5)); // Output: -1
console.log(evaluateFunction(3)); // Output: 1
