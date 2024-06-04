// Write a function Swap(X, I, J) that exchanges the values of items XI and XJ
// of a list X of real numbers (I and J are input integer parameters, the function
// returns the None value). Having input a list of four real numbers and using
// three calls of this function, sequentially exchange the values of the two first,
// two last, and two middle items of the given list. Output the new values of the
// list.

function Swap(X, I, J) {
    const temp = X[I];
    X[I] = X[J];
    X[J] = temp;
}

// Example usage
let list = [1, 2, 3, 4];

Swap(list, 0, 1);
console.log(`After swapping the two first items: ${list}`);

Swap(list, 2, 3);
console.log(`After swapping the two last items: ${list}`);

Swap(list, 1, 2);
console.log(`After swapping the two middle items: ${list}`);
