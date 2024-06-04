// Write a real-valued function Leng(xA, yA, xB, yB) that returns the length of a
// segment AB with given coordinates of its endpoints:

// |AB| = ((xA − xB)^2+ (yA − yB)^2)^1/2

// (xA, yA, xB, yB are real-valued parameters). Using this function, find the lengths
// of segments AB, AC, AD provided that coordinates of points A, B, C, D are
// given.

function Leng(xA, yA, xB, yB) {
    return Math.sqrt(Math.pow(xA - xB, 2) + Math.pow(yA - yB, 2));
}

// Example usage
const xA = 1, yA = 2;
const xB = 4, yB = 6;
const xC = 5, yC = 3;
const xD = -2, yD = 8;

const lengthAB = Leng(xA, yA, xB, yB);
const lengthAC = Leng(xA, yA, xC, yC);
const lengthAD = Leng(xA, yA, xD, yD);

console.log(`Length of segment AB: ${lengthAB}`);
console.log(`Length of segment AC: ${lengthAC}`);
console.log(`Length of segment AD: ${lengthAD}`);
