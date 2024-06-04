// Write a procedure ShiftRight3(A, B, C) that performs a right cyclic shift by
// assigning the initial values of A, B, C to variables B, C, A respectively (A, B, C
// are input and output real-valued parameters). Using this procedure, perform
// the right cyclic shift for each of two given triples of real numbers: (A1, B1, C1)
// and (A2, B2, C2).

// Define the ShiftRight3 procedure
function ShiftRight3(A, B, C) {
    let temp = A;
    A = C;
    C = B;
    B = temp;
    return [A, B, C];
}

// Example usage:
function testShiftRight3() {
    // First triple of real numbers
    let A1 = 4, B1 = 1, C1 = 3;
    console.log("Before shifting:", A1, B1, C1);
    [A1, B1, C1] = ShiftRight3(A1, B1, C1);
    console.log("After shifting:", A1, B1, C1);

    // Second triple of real numbers
    let A2 = 7, B2 = 2, C2 = 5;
    console.log("Before shifting:", A2, B2, C2);
    [A2, B2, C2] = ShiftRight3(A2, B2, C2);
    console.log("After shifting:", A2, B2, C2);
}

// Test the procedure
testShiftRight3();
