// Three positive real numbers A, B, C are given. A rectangle of size A × B
// contains the greatest possible amount of squares with side C (without
// overlaps). Find the amount of squares placed on the rectangle. Do not use the
// operators of multiplication and division.

function findNumberOfSquares(A, B, C) {
    // Calculate the maximum number of squares along the length (A) without multiplication
    let squaresAlongLength = Math.floor(A / C);
    
    // Calculate the maximum number of squares along the width (B) without multiplication
    let squaresAlongWidth = Math.floor(B / C);

    // Calculate the total number of squares without multiplication
    let totalSquares = 0;
    for (let i = 0; i < squaresAlongLength; i++) {
        for (let j = 0; j < squaresAlongWidth; j++) {
            totalSquares++;
        }
    }

    return totalSquares;
}

// Example usage:
let A = 6; // Length of the rectangle
let B = 8; // Width of the rectangle
let C = 2; // Side of the square
let numberOfSquares = findNumberOfSquares(A, B, C);
console.log("Number of squares:", numberOfSquares);
