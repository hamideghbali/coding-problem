// An integer is given. If the integer is positive then increase it by 1, if the integer is
// negative then decrease it by 2, if the integer equals 0 then change it to 10.
// Output the obtained integer.

function adjustInteger(num) {
    if (num > 0) {
        return num + 1;
    } else if (num < 0) {
        return num - 2;
    } else {
        return 10;
    }
}

// Example usage:
console.log(adjustInteger(5));  // Output: 6
console.log(adjustInteger(-3)); // Output: -5
console.log(adjustInteger(0));  // Output: 10
