// Three points A, B, C on the real axis are given. Determine whether B or C is
// closer to A. Output the nearest point and its distance from A.

function closestPointToA(A, B, C) {
    // Calculate distances from A to B and C
    const distanceToB = Math.abs(A - B);
    const distanceToC = Math.abs(A - C);

    // Determine the closest point and its distance from A
    let closestPoint;
    let distance;
    if (distanceToB < distanceToC) {
        closestPoint = 'B';
        distance = distanceToB;
    } else if (distanceToC < distanceToB) {
        closestPoint = 'C';
        distance = distanceToC;
    } else {
        closestPoint = 'Both B and C';
        distance = distanceToB; // Or distanceToC, since they are equal
    }

    return { closestPoint, distance };
}

// Example usage:
const A = 5;
const B = 8;
const C = 3;

const result = closestPointToA(A, B, C);
console.log(`The nearest point to A is ${result.closestPoint} with a distance of ${result.distance}`);
