// Write a procedure SortDec3(A, B, C) that interchanges, if necessary, the
// values of three variables A, B, C so that A ≥ B ≥ C (A, B, C are input and output
// real-valued parameters). Using this procedure, sort each of two given triples of
// real numbers (A1, B1, C1) and (A2, B2, C2) in descending order.

// Define the SortDec3 procedure
function SortDec3(A, B, C) {
    if (A < B) {
        let temp = A;
        A = B;
        B = temp;
    }
    if (B < C) {
        let temp = B;
        B = C;
        C = temp;
    }
    if (A < B) {
        let temp = A;
        A = B;
        B = temp;
    }
    return [A, B, C];
}

// Example usage:
function testSortDec3() {
    // First triple of real numbers
    let A1 = 4, B1 = 1, C1 = 3;
    console.log("Before sorting:", A1, B1, C1);
    [A1, B1, C1] = SortDec3(A1, B1, C1);
    console.log("After sorting:", A1, B1, C1);

    // Second triple of real numbers
    let A2 = 7, B2 = 2, C2 = 5;
    console.log("Before sorting:", A2, B2, C2);
    [A2, B2, C2] = SortDec3(A2, B2, C2);
    console.log("After sorting:", A2, B2, C2);
}

// Test the procedure
testSortDec3();
