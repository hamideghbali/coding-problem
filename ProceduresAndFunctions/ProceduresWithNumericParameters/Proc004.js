// Write a procedure TrianglePS(a, P, S) that computes the perimeter P = 3·a
// and the area S = a^2
// ·(3)1/2/4 of an equilateral triangle with the side a (a is aninput parameter, P and S are output parameters, all parameters are the real-
// valued ones). Using this procedure, find the perimeters and the areas of three

// triangles with the given lengths of the sides.
// Define the TrianglePS procedure
function TrianglePS(a, P, S) {
    P.value = 3 * a; // Compute the perimeter and assign it to P
    S.value = (Math.sqrt(3) / 4) * a * a; // Compute the area and assign it to S
}

// Define a function to use the TrianglePS procedure
function computeTriangleProperties(sideLengths) {
    let results = [];
    for (let i = 0; i < sideLengths.length; i++) {
        let P = {}; // Object to store the perimeter
        let S = {}; // Object to store the area
        TrianglePS(sideLengths[i], P, S); // Call the TrianglePS procedure
        results.push({side: sideLengths[i], perimeter: P.value, area: S.value}); // Push the results to the array
    }
    return results;
}

// Example usage:
let sideLengths = [2, 3, 4]; // Given side lengths of triangles
let properties = computeTriangleProperties(sideLengths);
console.log("Triangle properties:", properties);
