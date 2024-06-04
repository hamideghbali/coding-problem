// Using the Leng function from the task Proc56, write a real-valued function
// Perim(xA, yA, xB, yB, xC, yC) that returns the perimeter of a triangle ABC with
// given coordinates of its vertices (xA, yA, xB, yB, xC, yC are real-valued
// parameters). Using the Perim function, find the perimeters of triangles ABC,
// ABD, ACD provided that coordinates of points A, B, C, D are given.

function Leng(xA, yA, xB, yB) {
    return Math.sqrt(Math.pow(xA - xB, 2) + Math.pow(yA - yB, 2));
}

function Perim(xA, yA, xB, yB, xC, yC) {
    const lengthAB = Leng(xA, yA, xB, yB);
    const lengthBC = Leng(xB, yB, xC, yC);
    const lengthCA = Leng(xC, yC, xA, yA);
    return lengthAB + lengthBC + lengthCA;
}

// Example usage
const xA = 1, yA = 2;
const xB = 4, yB = 6;
const xC = 5, yC = 3;
const xD = -2, yD = 8;

const perimeterABC = Perim(xA, yA, xB, yB, xC, yC);
const perimeterABD = Perim(xA, yA, xB, yB, xD, yD);
const perimeterACD = Perim(xA, yA, xC, yC, xD, yD);

console.log(`Perimeter of triangle ABC: ${perimeterABC}`);
console.log(`Perimeter of triangle ABD: ${perimeterABD}`);
console.log(`Perimeter of triangle ACD: ${perimeterACD}`);
