// Given a real independent variable x, find the value of a real function f defined
// as:

// f(x) = 2·sin(x), if x > 0,
// 6 − x, if x ≤ 0.

function evaluateFunction(x) {
    if (x > 0) {
        return 2 * Math.sin(x); // If x > 0, f(x) = 2 * sin(x)
    } else {
        return 6 - x; // If x <= 0, f(x) = 6 - x
    }
}

// Example usage:
console.log(evaluateFunction(2));  // Output: 1.8185948536513636 (approximately)
console.log(evaluateFunction(-1)); // Output: 7
console.log(evaluateFunction(0));  // Output: 6
