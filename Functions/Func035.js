// Write a function ShiftRight3(X) that performs a right cyclic shift of a list X
// of three real-valued items: the value ot each item should be assigned to the
// next item and the value of the last item should be assigned to the first item (the
// function returns the None value). Using this function, perform the right cyclic
// shift for each of two given lists X and Y.

function ShiftRight3(X) {
    const lastItem = X.pop();
    X.unshift(lastItem);
}

// Example usage
let X = [1, 2, 3];
let Y = [4, 5, 6];

ShiftRight3(X);
console.log(`Shifted X: ${X}`);

ShiftRight3(Y);
console.log(`Shifted Y: ${Y}`);
