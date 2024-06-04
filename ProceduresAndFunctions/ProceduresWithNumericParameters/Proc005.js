// Write a procedure RectPS(x1, y1, x2, y2, P, S) that computes the perimeter P
// and the area S of a rectangle whose opposite vertices have coordinates (x1, y1)
// and (x2, y2) and sides are parallel to coordinate axes (x1, y1, x2, y2 are input
// parameters, P and S are output parameters, all parameters are the real-valued
// ones). Using this procedure, find the perimeters and the areas of three
// rectangles with the given opposite vertices.

// Define the RectPS procedure
function RectPS(x1, y1, x2, y2, P, S) {
    let length = Math.abs(x2 - x1); // Calculate the length of the rectangle
    let width = Math.abs(y2 - y1); // Calculate the width of the rectangle
    P.value = 2 * (length + width); // Compute the perimeter and assign it to P
    S.value = length * width; // Compute the area and assign it to S
}

// Define a function to use the RectPS procedure
function computeRectProperties(rectangles) {
    let results = [];
    for (let i = 0; i < rectangles.length; i++) {
        let P = {}; // Object to store the perimeter
        let S = {}; // Object to store the area
        RectPS(rectangles[i].x1, rectangles[i].y1, rectangles[i].x2, rectangles[i].y2, P, S); // Call the RectPS procedure
        results.push({vertices: rectangles[i], perimeter: P.value, area: S.value}); // Push the results to the array
    }
    return results;
}

// Example usage:
let rectangles = [
    {x1: 1, y1: 1, x2: 4, y2: 3}, // Opposite vertices of rectangle 1
    {x1: 0, y1: 0, x2: 5, y2: 2}, // Opposite vertices of rectangle 2
    {x1: -2, y1: -2, x2: 3, y2: 1} // Opposite vertices of rectangle 3
];
let properties = computeRectProperties(rectangles);
console.log("Rectangle properties:", properties);
