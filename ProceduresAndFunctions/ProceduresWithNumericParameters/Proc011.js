// Write a procedure Minmax(X, Y) that exchanges, if necessary, the values of
// two variables X and Y so that X ≤ Y (X and Y are input and output real-valued
// parameters). Using four calls of this procedure, find the minimal value and the
// maximal value among given real numbers A, B, C, D.

// Define the Minmax procedure
function Minmax(X, Y) {
    if (X > Y) { // If X is greater than Y, exchange their values
        let temp = X;
        X = Y;
        Y = temp;
    }
    return [X, Y]; // Return the values of X and Y, ensuring X <= Y
}

// Example usage:
function testMinmax() {
    let A = 4, B = 2, C = 7, D = 1; // Given real numbers
    // Find the minimal and maximal values among A, B, C, D
    [A, B] = Minmax(A, B);
    [C, D] = Minmax(C, D);
    [A, C] = Minmax(A, C);
    [B, D] = Minmax(B, D);
    console.log("Minimal value:", A);
    console.log("Maximal value:", D);
}

// Test the procedure
testMinmax();
