// Given coordinates of a point that does not lie on the coordinate axes, find the
// number of a coordinate quarter containing the point.

function findCoordinateQuarter(x, y) {
    if (x > 0 && y > 0) {
        return 1; // First quadrant
    } else if (x < 0 && y > 0) {
        return 2; // Second quadrant
    } else if (x < 0 && y < 0) {
        return 3; // Third quadrant
    } else {
        return 4; // Fourth quadrant
    }
}

// Example usage:
console.log(findCoordinateQuarter(3, 5));  // Output: 1
console.log(findCoordinateQuarter(-3, 5));  // Output: 2
console.log(findCoordinateQuarter(-3, -5)); // Output: 3
console.log(findCoordinateQuarter(3, -5));  // Output: 4
