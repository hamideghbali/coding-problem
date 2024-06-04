// Write a real-valued function Calc(A, B, Op) that performs an arithmetic
// operation over nonzero real numbers A and B and returns the result value. An
// arithmetic operation is determined by integer parameter Op as follows: 1 —
// subtraction, 2 — multiplication, 3 — division, and addition otherwise. Having
// input real numbers A, B and integers N1, N2, N3 and using this function,
// perform over given A, B three operations determined by given N1, N2, N3.
// Output the result value of each operation.
// Define the Calc function
function Calc(A, B, Op) {
    // Perform arithmetic operations based on Op
    switch (Op) {
        case 1: // Subtraction
            return A - B;
        case 2: // Multiplication
            return A * B;
        case 3: // Division
            return A / B;
        default: // Addition (for any other value of Op)
            return A + B;
    }
}

// Perform arithmetic operations based on given parameters
function performOperations() {
    let A = 10, B = 5;
    let N1 = 1, N2 = 2, N3 = 3;

    // Perform the first operation
    let result1 = Calc(A, B, N1);
    console.log("Result of subtraction:", result1);

    // Perform the second operation
    let result2 = Calc(A, B, N2);
    console.log("Result of multiplication:", result2);

    // Perform the third operation
    let result3 = Calc(A, B, N3);
    console.log("Result of addition:", result3);
}

// Execute the arithmetic operations
performOperations();
