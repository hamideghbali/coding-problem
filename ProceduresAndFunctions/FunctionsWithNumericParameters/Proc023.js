// Write an integer function Quarter(x, y) that returns the number of a
// coordinate quarter containing a point with nonzero real-valued coordinates
// (x, y). Using this function, find the numbers of coordinate quarters containing
// each of three points with given nonzero coordinates.

// Define the Quarter function
function Quarter(x, y) {
    // Check the signs of x and y to determine the quarter
    if (x > 0 && y > 0) {
        return 1; // First quarter
    } else if (x < 0 && y > 0) {
        return 2; // Second quarter
    } else if (x < 0 && y < 0) {
        return 3; // Third quarter
    } else if (x > 0 && y < 0) {
        return 4; // Fourth quarter
    } else {
        return 0; // Points on axis or at origin
    }
}

// Function to determine the quarter for three points
function determineQuarters() {
    let points = [
        { x: 3, y: 4 },
        { x: -2, y: 5 },
        { x: -1, y: -1 }
    ];

    // Determine the quarter for each point and log the result
    for (let point of points) {
        let quarter = Quarter(point.x, point.y);
        console.log(`Point (${point.x}, ${point.y}) is in quarter ${quarter}`);
    }
}

// Execute the function to determine quarters for given points
determineQuarters();
