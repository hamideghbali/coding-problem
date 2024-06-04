
// Write a logical function IsSquare(K) that returns True, if an positive integer
// parameter K is a square of some integer, and False otherwise. Using this
// function, find the amount of squares in a given sequence of 10 positive
// integers.

function IsSquare(K) {
    const sqrtK = Math.sqrt(K);
    return Number.isInteger(sqrtK);
}

// Example usage
const sequence = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];
let squareCount = 0;

for (let i = 0; i < sequence.length; i++) {
    if (IsSquare(sequence[i])) {
        squareCount++;
    }
}

console.log(`Amount of squares in the sequence: ${squareCount}`);
