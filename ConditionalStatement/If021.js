// Integer coordinates of a point in the coordinate plane are given. If the point
// coincides with the origin of coordinates then output 0, otherwise if the point
// lies on the x-axis or y-axis then output 1 or 2 respectively. If the point does not
// lie on the coordinate axes then output 3.

function determinePointLocation(x, y) {
    if (x === 0 && y === 0) {
        return 0; // Point coincides with the origin
    } else if (x === 0 || y === 0) {
        return x === 0 ? 2 : 1; // Point lies on the y-axis or x-axis respectively
    } else {
        return 3; // Point does not lie on the coordinate axes
    }
}

// Example usage:
console.log(determinePointLocation(0, 0));  // Output: 0
console.log(determinePointLocation(3, 0));  // Output: 1
console.log(determinePointLocation(0, -5)); // Output: 2
console.log(determinePointLocation(2, 4));  // Output: 3
