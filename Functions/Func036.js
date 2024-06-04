// Write a function ShiftLeft3(X) that performs a left cyclic shift of a list X of
// three real-valued items: the value ot each item should be assigned to the
// previous item and the value of the first item should be assigned to the last item
// (the function returns the None value). Using this function, perform the left
// cyclic shift for each of two given lists X and Y.

function ShiftLeft3(X) {
    const firstItem = X.shift();
    X.push(firstItem);
}

// Example usage
let X = [1, 2, 3];
let Y = [4, 5, 6];

ShiftLeft3(X);
console.log(`Shifted X: ${X}`);

ShiftLeft3(Y);
console.log(`Shifted Y: ${Y}`);
