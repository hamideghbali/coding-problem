// Write a function Minmax(X, I, J) that writes the minimal value of items XI
// and XJ of a list X to the item XI and writes the maximal value of these items to
// the item XJ (I and J are input integer parameters, the function returns the None
// value). Using four calls of this function, find the minimal value and the
// maximal value among four given real numbers.


function Minmax(X, I, J) {
    const minValue = Math.min(X[I], X[J]);
    const maxValue = Math.max(X[I], X[J]);
    X[I] = minValue;
    X[J] = maxValue;
}

// Example usage
let list = [4, 2, 7, 5];

Minmax(list, 0, 1);
console.log(`After finding min-max for items 0 and 1: ${list}`);

Minmax(list, 2, 3);
console.log(`After finding min-max for items 2 and 3: ${list}`);

Minmax(list, 0, 2);
console.log(`After finding min-max for items 0 and 2: ${list}`);

Minmax(list, 1, 3);
console.log(`After finding min-max for items 1 and 3: ${list}`);
