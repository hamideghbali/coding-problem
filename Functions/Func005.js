// Write a real-valued function TriangleP(a, h) that returns the perimeter of an
// isosceles triangle with given base a and altitude h (a and h are real numbers).
// Using this function, find the perimeters of three triangles with given bases and
// altitudes. Note that the leg b of an isosceles triangle can be found by the
// Pythagorean theorem:

// b^2= (a/2)^2+ h^2.

function TriangleP(a, h) {
    const b = Math.sqrt(Math.pow(a / 2, 2) + Math.pow(h, 2));
    return 2 * b + a;
}

// Example usage
const base1 = 6;
const altitude1 = 4;
const base2 = 8;
const altitude2 = 5;
const base3 = 10;
const altitude3 = 6;

const perimeter1 = TriangleP(base1, altitude1);
const perimeter2 = TriangleP(base2, altitude2);
const perimeter3 = TriangleP(base3, altitude3);

console.log(`Perimeter of triangle with base ${base1} and altitude ${altitude1}: ${perimeter1}`);
console.log(`Perimeter of triangle with base ${base2} and altitude ${altitude2}: ${perimeter2}`);
console.log(`Perimeter of triangle with base ${base3} and altitude ${altitude3}: ${perimeter3}`);
