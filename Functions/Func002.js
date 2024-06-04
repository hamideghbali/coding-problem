// Write an integer function RootCount(A, B, C) that returns the amount of roots
// of the quadratic equation A·x^2+ B·x + C = 0 (A, B, C are real-valued
// parameters, A ≠ 0). Using this function, find the amount of roots for each of
// three quadratic equations with given coefficients. Note that the amount of roots
// is determined by the value of a discriminant:
// D = B^2 − 4·A·C.

function RootCount(A, B, C) {
    const discriminant = B * B - 4 * A * C;
    if (discriminant > 0) {
        return 2; // Two distinct real roots
    } else if (discriminant === 0) {
        return 1; // One real root (repeated)
    } else {
        return 0; // No real roots
    }
}

// Example usage
const equations = [
    { A: 1, B: -3, C: 2 }, // x^2 - 3x + 2 = 0 (two distinct real roots)
    { A: 2, B: 4, C: 2 },   // 2x^2 + 4x + 2 = 0 (one real root, repeated)
    { A: 1, B: 2, C: 3 }    // x^2 + 2x + 3 = 0 (no real roots)
];

equations.forEach(eq => {
    console.log(`Equation ${eq.A}x^2 + ${eq.B}x + ${eq.C} = 0 has ${RootCount(eq.A, eq.B, eq.C)} real roots.`);
});
