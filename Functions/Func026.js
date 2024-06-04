// Write a function RectPS(x1, y1, x2, y2) that computes and returns the
// perimeter P and the area S of a rectangle whose opposite vertices have
// coordinates (x1, y1) and (x2, y2) and sides are parallel to coordinate axes (x1, y1,
// x2, y2 are input real-valued parameters). Using this function, find the perimeters
// and the areas of three rectangles with the given opposite vertices.

function RectPS(x1, y1, x2, y2) {
    const length = Math.abs(x2 - x1);
    const width = Math.abs(y2 - y1);
    const perimeter = 2 * (length + width);
    const area = length * width;
    return [perimeter, area];
}

// Example usage
const rectangles = [
    [1, 1, 4, 3],
    [0, 0, 5, 5],
    [-3, -3, 3, 3]
];

for (let i = 0; i < rectangles.length; i++) {
    const [perimeter, area] = RectPS(rectangles[i][0], rectangles[i][1], rectangles[i][2], rectangles[i][3]);
    console.log(`For rectangle with opposite vertices (${rectangles[i][0]}, ${rectangles[i][1]}) and (${rectangles[i][2]}, ${rectangles[i][3]}): Perimeter: ${perimeter}, Area: ${area}`);
}
