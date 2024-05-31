// Four integers are given. One of them differs from three other equal integers.
// Output the order number of the integer that differs from the others.

function getOrderOfDifferentInteger(a, b, c, d) {
    if (a !== b && a !== c && a !== d) {
        return 1;
    } else if (b !== a && b !== c && b !== d) {
        return 2;
    } else if (c !== a && c !== b && c !== d) {
        return 3;
    } else {
        return 4;
    }
}

// Example usage:
console.log(getOrderOfDifferentInteger(1, 1, 1, 2));  // Output: 4
console.log(getOrderOfDifferentInteger(2, 3, 2, 2));  // Output: 2
console.log(getOrderOfDifferentInteger(5, 5, 5, 5));  // Output: 4
console.log(getOrderOfDifferentInteger(-3, -3, -3, -2));  // Output: 4
