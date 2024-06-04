// Using the Leng and Area functions from the tasks Func56 and Func58,
// write a real-valued function Dist(xP, yP, xA, yA, xB, yB) that returns the distance
// D(P, AB) between a point P and a line AB:

// D(P, AB) = 2·SPAB/|AB|,

// where SPAB is the area of the triangle PAB. Using this function, find the
// distance between a point P and each of lines AB, AC, BC provided that
// coordinates of points P, A, B, C are given.

function Dist(xP, yP, xA, yA, xB, yB) {
    // Calculate the area of triangle PAB
    let SPAB = Area(xP, yP, xA, yA, xB, yB);

    // Calculate the length of segment AB
    let AB = Leng(xA, yA, xB, yB);

    // Calculate the distance D(P, AB)
    let distance = (2 * SPAB) / AB;

    return distance;
}

// Example usage
function main() {
    // Example coordinates of points P, A, B, C
    let points = [
        [1, 2, 4, 6, 5, 3], // P, A, B, C
        [1, 2, 4, 6, 5, 3], // P, A, B, C
        [1, 2, 4, 6, 5, 3]  // P, A, B, C
    ];
    let labels = ['P-AB', 'P-AC', 'P-BC'];

    for (let i = 0; i < points.length; i++) {
        let [xP, yP, xA, yA, xB, yB] = points[i];
        let distance = Dist(xP, yP, xA, yA, xB, yB);
        console.log(`Distance between point P and line ${labels[i]}: ${distance}`);
    }
}

main();
