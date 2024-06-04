// Using the Leng function from the task Func56, write a real-valued function
// Perim(xA, yA, xB, yB, xC, yC) that returns the perimeter of a triangle ABC with
// given coordinates of its vertices (xA, yA, xB, yB, xC, yC are real-valued
// parameters). Using the Perim function, find the perimeters of triangles ABC,
// ABD, ACD provided that coordinates of points A, B, C, D are given.

function Perim(xA, yA, xB, yB, xC, yC) {
    // Calculate the lengths of the sides of the triangle
    let AB = Leng(xA, yA, xB, yB);
    let BC = Leng(xB, yB, xC, yC);
    let CA = Leng(xC, yC, xA, yA);

    // Calculate the perimeter
    return AB + BC + CA;
}

// Example usage
function main() {
    // Example coordinates of points A, B, C, D
    let points = [
        [1, 2, 4, 6, 5, 3], // A, B, C
        [1, 2, 4, 6, 7, 1], // A, B, D
        [1, 2, 5, 3, 7, 1]  // A, C, D
    ];
    let labels = ['ABC', 'ABD', 'ACD'];

    for (let i = 0; i < points.length; i++) {
        let [xA, yA, xB, yB, xC, yC] = points[i];
        let perimeter = Perim(xA, yA, xB, yB, xC, yC);
        console.log(`Perimeter of triangle ${labels[i]}: ${perimeter}`);
    }
}

main();
