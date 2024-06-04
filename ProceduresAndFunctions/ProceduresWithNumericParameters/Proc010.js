// Write a procedure Swap(X, Y) that exchanges the values of variables X
// and Y (X and Y are input and output real-valued parameters). Having input
// integers A, B, C, D and using three calls of this procedure, sequentially
// exchange the values of the pairs A and B, C and D, B and C. Output the new
// values of A, B, C, D.

// Define the Swap procedure
function Swap(X, Y) {
    let temp = X; // Store the value of X in a temporary variable
    X = Y; // Assign the value of Y to X
    Y = temp; // Assign the value stored in the temporary variable to Y
    return [X, Y]; // Return the new values of X and Y
}

// Example usage:
function testSwap() {
    let A = 1, B = 2, C = 3, D = 4; // Initial values of variables
    // Sequentially exchange the values of pairs A and B, C and D, B and C
    [A, B] = Swap(A, B);
    [C, D] = Swap(C, D);
    [B, C] = Swap(B, C);
    console.log("New values of A, B, C, D:", A, B, C, D);
}

// Test the procedure
testSwap();
