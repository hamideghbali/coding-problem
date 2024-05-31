// An integer is given. If the integer is positive then increase it by 1, otherwise
// decrease it by 2. Output the obtained integer.

function adjustInteger(num) {
    if (num > 0) {
        return num + 1;
    } else {
        return num - 2;
    }
}

// Example usage:
console.log(adjustInteger(5));  // Output: 6
console.log(adjustInteger(-3)); // Output: -5
console.log(adjustInteger(0));  // Output: -2
