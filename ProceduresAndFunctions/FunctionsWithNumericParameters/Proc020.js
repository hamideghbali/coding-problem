// Write a real-valued function TriangleP(a, h) that returns the perimeter of an
// isosceles triangle with given base a and altitude h (a and h are real numbers).
// Using this function, find the perimeters of three triangles with given bases and
// altitudes. Note that the leg b of an isosceles triangle can be found by the
// Pythagorean theorem:
// b^2= (a/2)^2+ h^2


// Define the TriangleP function
function TriangleP(a, h) {
    // Calculate the length of the leg b using the Pythagorean theorem
    let b = Math.sqrt((a/2) * (a/2) + h * h);
    // Calculate the perimeter of the triangle
    let perimeter = 2 * b + a;
    return perimeter;
}

// Calculate the perimeters of triangles for given bases and altitudes
function calculateTrianglePerimeters() {
    // Triangle 1: Base = 8, Altitude = 6
    let perimeter1 = TriangleP(8, 6);
    console.log("Perimeter of triangle 1:", perimeter1);

    // Triangle 2: Base = 12.5, Altitude = 9
    let perimeter2 = TriangleP(12.5, 9);
    console.log("Perimeter of triangle 2:", perimeter2);

    // Triangle 3: Base = 20, Altitude = 15
    let perimeter3 = TriangleP(20, 15);
    console.log("Perimeter of triangle 3:", perimeter3);
}

// Calculate the perimeters of triangles
calculateTrianglePerimeters();
