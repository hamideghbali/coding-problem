// Write an integer function Quarter(x, y) that returns the number of a
// coordinate quarter containing a point with nonzero real-valued coordinates
// (x, y). Using this function, find the numbers of coordinate quarters containing
// each of three points with given nonzero coordinates.

function Quarter(x, y) {
    if (x > 0 && y > 0) {
        return 1;
    } else if (x < 0 && y > 0) {
        return 2;
    } else if (x < 0 && y < 0) {
        return 3;
    } else if (x > 0 && y < 0) {
        return 4;
    } else {
        return 0; // Point lies on one of the axes
    }
}

// Example usage
const point1_x = 3, point1_y = 4; // First quadrant
const point2_x = -2, point2_y = 5; // Second quadrant
const point3_x = -3, point3_y = -2; // Third quadrant

const quarter1 = Quarter(point1_x, point1_y);
const quarter2 = Quarter(point2_x, point2_y);
const quarter3 = Quarter(point3_x, point3_y);

console.log(`Point (${point1_x}, ${point1_y}) lies in quarter ${quarter1}`);
console.log(`Point (${point2_x}, ${point2_y}) lies in quarter ${quarter2}`);
console.log(`Point (${point3_x}, ${point3_y}) lies in quarter ${quarter3}`);
