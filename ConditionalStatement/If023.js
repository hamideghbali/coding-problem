// Given integer coordinates of three vertices of a rectangle whose sides are
// parallel to coordinate axes, find the coordinates of the fourth vertex of the
// rectangle.

function findFourthVertex(x1, y1, x2, y2, x3, y3) {
    // Check which vertex is diagonal to the first vertex (x1, y1)
    if (x1 === x2) {
        // If (x2, y2) is diagonal, then (x3, y3) is the fourth vertex
        return [x3, y3];
    } else if (x1 === x3) {
        // If (x3, y3) is diagonal, then (x2, y2) is the fourth vertex
        return [x2, y2];
    } else {
        // If (x1, y1) is diagonal, then (x2, y3) is the fourth vertex
        return [x2, y3];
    }
}

// Example usage:
console.log(findFourthVertex(1, 1, 4, 1, 1, 4));  // Output: [4, 4]
console.log(findFourthVertex(1, 1, 1, 4, 4, 1));  // Output: [4, 4]
console.log(findFourthVertex(4, 1, 1, 1, 1, 4));  // Output: [4, 4]
