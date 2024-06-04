// Using the Leng and Perim functions from the tasks Proc56 and Proc57,
// write a real-valued function Area(xA, yA, xB, yB, xC, yC) that returns the area of a
// triangle ABC:

// SABC = (p·(p−|AB|)·(p−|AC|)·(p−|BC|))^1/2
// ,

// where p is the half-perimeter. Using the Area function, find the areas of
// triangles ABC, ABD, ACD provided that coordinates of points A, B, C, D are
// given.

function Leng(xA, yA, xB, yB) {
    return Math.sqrt(Math.pow(xA - xB, 2) + Math.pow(yA - yB, 2));
}

function Perim(xA, yA, xB, yB, xC, yC) {
    const lengthAB = Leng(xA, yA, xB, yB);
    const lengthBC = Leng(xB, yB, xC, yC);
    const lengthCA = Leng(xC, yC, xA, yA);
    return lengthAB + lengthBC + lengthCA;
}

function Area(xA, yA, xB, yB, xC, yC) {
    const p = Perim(xA, yA, xB, yB, xC, yC) / 2;
    const lengthAB = Leng(xA, yA, xB, yB);
    const lengthBC = Leng(xB, yB, xC, yC);
    const lengthCA = Leng(xC, yC, xA, yA);
    return Math.sqrt(p * (p - lengthAB) * (p - lengthBC) * (p - lengthCA));
}

// Example usage
const xA = 1, yA = 2;
const xB = 4, yB = 6;
const xC = 5, yC = 3;
const xD = -2, yD = 8;

const areaABC = Area(xA, yA, xB, yB, xC, yC);
const areaABD = Area(xA, yA, xB, yB, xD, yD);
const areaACD = Area(xA, yA, xC, yC, xD, yD);

console.log(`Area of triangle ABC: ${areaABC}`);
console.log(`Area of triangle ABD: ${areaABD}`);
console.log(`Area of triangle ACD: ${areaACD}`);
