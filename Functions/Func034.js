// Write a function SortDec3(X) that sorts the list X of three real-valued items
// in descending order (the function returns the None value). Using this function,
// sort each of two given lists X and Y.


function SortDec3(X) {
    X.sort((a, b) => b - a);
}

// Example usage
let X = [3, 1, 2];
let Y = [9, 6, 8];

SortDec3(X);
console.log(`Sorted X: ${X}`);

SortDec3(Y);
console.log(`Sorted Y: ${Y}`);
