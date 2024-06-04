// Write a procedure ShiftLeft3(A, B, C) that performs a left cyclic shift by
// assigning the initial values of A, B, C to variables C, A, B respectively (A, B, C
// are input and output real-valued parameters). Using this procedure, perform
// the left cyclic shift for each of two given triples of real numbers: (A1, B1, C1)
// and (A2, B2, C2).

// Define the ShiftLeft3 procedure
function ShiftLeft3(A, B, C) {
    let temp = A;
    A = B;
    B = C;
    C = temp;
    return [A, B, C];
}

// Example usage:
function testShiftLeft3() {
    // First triple of real numbers
    let A1 = 4, B1 = 1, C1 = 3;
    console.log("Before shifting:", A1, B1, C1);
    [A1, B1, C1] = ShiftLeft3(A1, B1, C1);
    console.log("After shifting:", A1, B1, C1);

    // Second triple of real numbers
    let A2 = 7, B2 = 2, C2 = 5;
    console.log("Before shifting:", A2, B2, C2);
    [A2, B2, C2] = ShiftLeft3(A2, B2, C2);
    console.log("After shifting:", A2, B2, C2);
}

// Test the procedure
testShiftLeft3();
