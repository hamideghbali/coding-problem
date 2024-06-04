// Write an integer function RootCount(A, B, C) that returns the amount of
// roots of the quadratic equation A·x^2 + B·x + C = 0 (A, B, C are real-valued
// parameters, A ≠ 0). Using this function, find the amount of roots for each of
// three quadratic equations with given coefficients. Note that the amount of roots
// is determined by the value of a discriminant:
// D = B^2 − 4·A·C.

// Define the RootCount function
function RootCount(A, B, C) {
    let discriminant = B * B - 4 * A * C;
    if (discriminant > 0) {
        return 2; // Two distinct real roots
    } else if (discriminant === 0) {
        return 1; // One real root (repeated)
    } else {
        return 0; // No real roots (complex roots)
    }
}

// Calculate the amount of roots for each quadratic equation
function calculateRoots() {
    // Quadratic equation 1: x^2 - 5x + 6 = 0
    let roots1 = RootCount(1, -5, 6);
    console.log("Number of roots for equation 1:", roots1);

    // Quadratic equation 2: 3x^2 + 4x + 1 = 0
    let roots2 = RootCount(3, 4, 1);
    console.log("Number of roots for equation 2:", roots2);

    // Quadratic equation 3: 2x^2 - 7x + 3 = 0
    let roots3 = RootCount(2, -7, 3);
    console.log("Number of roots for equation 3:", roots3);
}

// Calculate the roots
calculateRoots();
