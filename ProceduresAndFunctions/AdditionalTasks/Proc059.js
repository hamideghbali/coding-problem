// Using the Leng and Area functions from the tasks Proc56 and Proc58, write
// a real-valued function Dist(xP, yP, xA, yA, xB, yB) that returns the distance D(P,
// AB) between a point P and a line AB:

// D(P, AB) = 2·SPAB/|AB|,

// where SPAB is the area of the triangle PAB. Using this function, find the
// distance between a point P and each of lines AB, AC, BC provided that
// coordinates of points P, A, B, C are given.

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

// Example usage
const xP = 2, yP = 3;
const xA = 1, yA = 1;
const xB = 4, yB = 6;
const xC = 5, yC = 3;

const distPAB = Dist(xP, yP, xA, yA, xB, yB);
const distPAC = Dist(xP, yP, xA, yA, xC, yC);
const distPBC = Dist(xP, yP, xB, yB, xC, yC);

console.log(`Distance between point P and line AB: ${distPAB}`);
console.log(`Distance between point P and line AC: ${distPAC}`);
console.log(`Distance between point P and line BC: ${distPBC}`);
