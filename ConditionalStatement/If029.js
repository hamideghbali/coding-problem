// Given an integer, output its description string as: ―negative even number‖, ―zero
// number‖, ―positive odd number‖, etc.

function describeNumber(number) {
    if (number === 0) {
        return "zero number";
    } else if (number < 0) {
        return number % 2 === 0 ? "negative even number" : "negative odd number";
    } else {
        return number % 2 === 0 ? "positive even number" : "positive odd number";
    }
}

// Example usage:
console.log(describeNumber(-4)); // Output: negative even number
console.log(describeNumber(0));  // Output: zero number
console.log(describeNumber(7));  // Output: positive odd number
console.log(describeNumber(-9)); // Output: negative odd number
