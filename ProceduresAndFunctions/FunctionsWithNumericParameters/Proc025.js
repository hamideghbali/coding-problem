// Write a logical function IsSquare(K) that returns True, if an positive integer
// parameter K is a square of some integer, and False otherwise. Using this
// function, find the amount of squares in a given sequence of 10 positive
// integers.

// Define the IsSquare function
function IsSquare(K) {
    // Check if K is a square of some integer
    let sqrt = Math.sqrt(K);
    return sqrt === Math.floor(sqrt);
}

// Function to count square numbers in a sequence
function countSquareNumbers(sequence) {
    let count = 0;
    // Iterate over the sequence
    for (let i = 0; i < sequence.length; i++) {
        // Check if the current number is a square using the IsSquare function
        if (IsSquare(sequence[i])) {
            count++;
        }
    }
    return count;
}

// Example: Find the amount of square numbers in a given sequence of 10 positive integers
let sequence = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let squareCount = countSquareNumbers(sequence);
console.log("Number of square numbers:", squareCount);
