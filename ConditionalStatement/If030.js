// An integer in the range 1 to 999 is given. Output its description string as: ―two-
// digit even number‖, ―three-digit odd number‖, etc.

function describeNumber(number) {
    if (number >= 1 && number <= 9) {
        return "one-digit number";
    } else if (number >= 10 && number <= 99) {
        return number % 2 === 0 ? "two-digit even number" : "two-digit odd number";
    } else {
        return number % 2 === 0 ? "three-digit even number" : "three-digit odd number";
    }
}

// Example usage:
console.log(describeNumber(5));    // Output: one-digit number
console.log(describeNumber(24));   // Output: two-digit even number
console.log(describeNumber(151));  // Output: three-digit odd number
console.log(describeNumber(888));  // Output: three-digit even number
