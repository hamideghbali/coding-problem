// Three integers are given. Find the amount of positive integers in the input data.

function countPositiveIntegers(a, b, c) {
    let count = 0;

    if (a > 0) {
        count++;
    }
    if (b > 0) {
        count++;
    }
    if (c > 0) {
        count++;
    }

    return count;
}

// Example usage:
console.log(countPositiveIntegers(1, -2, 3));  // Output: 2
console.log(countPositiveIntegers(-1, -2, -3)); // Output: 0
console.log(countPositiveIntegers(0, 0, 5));  // Output: 1
