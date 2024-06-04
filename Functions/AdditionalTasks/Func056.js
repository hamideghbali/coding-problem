// Write a real-valued function Leng(xA, yA, xB, yB) that returns the length of a
// segment AB with given coordinates of its endpoints:

// |AB| = ((xA − xB)^2 + (yA − yB)^2)^1/2

// (xA, yA, xB, yB are real-valued parameters). Using this function, find the lengths
// of segments AB, AC, AD provided that coordinates of points A, B, C, D are
// given.

function Leng(xA, yA, xB, yB) {
    return Math.sqrt(Math.pow(xA - xB, 2) + Math.pow(yA - yB, 2));
}

// Example usage
function main() {
    // Example coordinates of points
    let points = [[1, 2, 4, 6], [1, 2, 5, 8], [1, 2, 7, 3], [1, 2, -1, 5]];
    let labels = ['AB', 'AC', 'AD'];

    for (let i = 0; i < points.length; i++) {
        let [xA, yA, xB, yB] = points[i];
        let length = Leng(xA, yA, xB, yB);
        console.log(`Length of segment ${labels[i]}: ${length}`);
    }
}

main();
