// Given a real independent variable x, find the value of a real function f defined
// as:

// −x, if x ≤ 0,
// f(x) = x
// 2
// , if 0 < x < 2,
// 4, if x ≥ 2.

function evaluateFunction(x) {
    if (x <= 0) {
        return -x; // If x <= 0, f(x) = -x
    } else if (x < 2) {
        return Math.pow(x, 2); // If 0 < x < 2, f(x) = x^2
    } else {
        return 4; // If x >= 2, f(x) = 4
    }
}

// Example usage:
console.log(evaluateFunction(-1)); // Output: 1
console.log(evaluateFunction(1.5)); // Output: 2.25
console.log(evaluateFunction(3)); // Output: 4
