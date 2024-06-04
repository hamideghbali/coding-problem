// Write a function SortInc3(X) that sorts the list X of three real-valued items
// in ascending order (the function returns the None value). Using this function,
// sort each of two given lists X and Y.

function SortInc3(X) {
    X.sort((a, b) => a - b);
}

// Example usage
let X = [3, 1, 2];
let Y = [9, 6, 8];

SortInc3(X);
console.log(`Sorted X: ${X}`);

SortInc3(Y);
console.log(`Sorted Y: ${Y}`);
