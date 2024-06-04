// Using the Leng and Perim functions from the tasks Func56 and Func57,
// write a real-valued function Area(xA, yA, xB, yB, xC, yC) that returns the area of a
// triangle ABC:

// SABC = (p·(p−|AB|)·(p−|AC|)·(p−|BC|))^1/2
// ,

// where p is the half-perimeter. Using the Area function, find the areas of
// triangles ABC, ABD, ACD provided that coordinates of points A, B, C, D are
// given.

function Area(xA, yA, xB, yB, xC, yC) {
    // Calculate the lengths of the sides of the triangle
    let AB = Leng(xA, yA, xB, yB);
    let BC = Leng(xB, yB, xC, yC);
    let CA = Leng(xC, yC, xA, yA);

    // Calculate the half-perimeter
    let p = (AB + BC + CA) / 2;

    // Calculate the area using Heron's formula
    let area = Math.sqrt(p * (p - AB) * (p - BC) * (p - CA));

    return area;
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
        let area = Area(xA, yA, xB, yB, xC, yC);
        console.log(`Area of triangle ${labels[i]}: ${area}`);
    }
}

main();
