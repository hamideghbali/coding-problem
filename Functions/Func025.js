// Write a function TrianglePS(a) that computes the perimeter P = 3·a and the
// area S = a^2c·c(3)^1/2 /4 of an equilateral triangle with the side a and returns the
// result as two real numbers (a is an input real-valued parameter). Using this
// function, find the perimeters and the areas of three triangles with the given
// lengths of the sides.

function TrianglePS(a) {
    const perimeter = 3 * a;
    const area = (a * a * Math.sqrt(3)) / 4;
    return [perimeter, area];
}

// Example usage
const sideLengths = [5, 7, 9];

for (let i = 0; i < sideLengths.length; i++) {
    const [perimeter, area] = TrianglePS(sideLengths[i]);
    console.log(`For side length ${sideLengths[i]}: Perimeter: ${perimeter}, Area: ${area}`);
}
