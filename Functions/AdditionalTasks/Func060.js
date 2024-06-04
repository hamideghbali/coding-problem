// Using the Dist function from the task Func59, write a function
// Alts(xA, yA, xB, yB, xC, yC) that evaluates and returns the altitudes hA, hB, hC
// drawn from the vertices A, B, C of a triangle ABC (the coordinates of vertices
// are input real-valued parameters). Using this function, evaluate the altitudes of
// each of triangles ABC, ABD, ACD provided that the coordinates of points A, B,
// C, D are given.

function Alts(xA, yA, xB, yB, xC, yC) {
    // Calculate the length of sides AB, BC, and AC
    let AB = Leng(xA, yA, xB, yB);
    let BC = Leng(xB, yB, xC, yC);
    let AC = Leng(xA, yA, xC, yC);

    // Calculate the semiperimeter
    let p = (AB + BC + AC) / 2;

    // Calculate the area of the triangle
    let SABC = Area(xA, yA, xB, yB, xC, yC);

    // Calculate the altitudes hA, hB, and hC
    let hA = (2 * SABC) / BC;
    let hB = (2 * SABC) / AC;
    let hC = (2 * SABC) / AB;

    return [hA, hB, hC];
}

// Example usage
function main() {
    // Example coordinates of points A, B, C, D
    let points = [
        [1, 2, 4, 6, 5, 3], // A, B, C
        [1, 2, 4, 6, 5, 3], // A, B, D
        [1, 2, 4, 6, 5, 3]  // A, C, D
    ];
    let labels = ['ABC', 'ABD', 'ACD'];

    for (let i = 0; i < points.length; i++) {
        let [xA, yA, xB, yB, xC, yC] = points[i];
        let [hA, hB, hC] = Alts(xA, yA, xB, yB, xC, yC);
        console.log(`Altitudes of triangle ${labels[i]}: hA = ${hA}, hB = ${hB}, hC = ${hC}`);
    }
}

main();
