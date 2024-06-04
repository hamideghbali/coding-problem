// Using the Dist function from the task Proc59, write a procedure
// Alts(xA, yA, xB, yB, xC, yC, hA, hB, hC) that evaluates the altitudes hA, hB, hC drawn
// from the vertices A, B, C of a triangle ABC (the coordinates of vertices are
// input parameters, the values of altitudes are output parameters). Using this
// procedure, evaluate the altitudes of each of triangles ABC, ABD, ACD
// provided that the coordinates of points A, B, C, D are given.

function Leng(xA, yA, xB, yB) {
    return Math.sqrt(Math.pow(xA - xB, 2) + Math.pow(yA - yB, 2));
}

function Area(xA, yA, xB, yB, xC, yC) {
    const p = Leng(xA, yA, xB, yB) / 2;
    const lengthAB = Leng(xA, yA, xB, yB);
    const lengthBC = Leng(xB, yB, xC, yC);
    const lengthCA = Leng(xC, yC, xA, yA);
    return Math.sqrt(p * (p - lengthAB) * (p - lengthBC) * (p - lengthCA));
}

function Dist(xP, yP, xA, yA, xB, yB) {
    const SPAB = Area(xP, yP, xA, yA, xB, yB);
    const lengthAB = Leng(xA, yA, xB, yB);
    return (2 * SPAB) / lengthAB;
}

function Alts(xA, yA, xB, yB, xC, yC) {
    const areaABC = Area(xA, yA, xB, yB, xC, yC);
    const hA = (2 * areaABC) / Leng(xB, yB, xC, yC);
    const hB = (2 * areaABC) / Leng(xA, yA, xC, yC);
    const hC = (2 * areaABC) / Leng(xA, yA, xB, yB);
    return { hA, hB, hC };
}

// Example usage
const xA = 1, yA = 1;
const xB = 4, yB = 6;
const xC = 5, yC = 3;
const xD = -2, yD = 8;

const altitudesABC = Alts(xA, yA, xB, yB, xC, yC);
const altitudesABD = Alts(xA, yA, xB, yB, xD, yD);
const altitudesACD = Alts(xA, yA, xC, yC, xD, yD);

console.log(`Altitudes of triangle ABC: hA=${altitudesABC.hA}, hB=${altitudesABC.hB}, hC=${altitudesABC.hC}`);
console.log(`Altitudes of triangle ABD: hA=${altitudesABD.hA}, hB=${altitudesABD.hB}, hC=${altitudesABD.hC}`);
console.log(`Altitudes of triangle ACD: hA=${altitudesACD.hA}, hB=${altitudesACD.hB}, hC=${altitudesACD.hC}`);
