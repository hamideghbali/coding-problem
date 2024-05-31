// Three integers are given. One of them differs from two other equal integers.
// Output the order number of the integer that differs from the others.

function getOrderOfDifferentInteger(a, b, c) {
    if (a !== b && a !== c) {
        return 1;
    } else if (b !== a && b !== c) {
        return 2;
    } else {
        return 3;
    }
}

// Example usage:
console.log(getOrderOfDifferentInteger(1, 1, 2));  // Output: 3
console.log(getOrderOfDifferentInteger(2, 3, 2));  // Output: 1
console.log(getOrderOfDifferentInteger(5, 5, 5));  // Output: 3
console.log(getOrderOfDifferentInteger(-3, -2, -2));  // Output: 1
