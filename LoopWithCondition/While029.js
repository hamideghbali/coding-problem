// A real number ε (> 0) is given. A sequence of real numbers AK is defined
// as:
// A1 = 1, A2 = 2, AK = (AK−2 + 2·AK−1)/3, K = 3, 4, ... .
// Find the first index K such that the inequality |AK − AK−1| < ε is fulfilled. Output
// the index K and the terms AK−1 and AK.

function findIndexAndTerms(epsilon) {
    let AKMinus2 = 1; // A1 = 1
    let AKMinus1 = 2; // A2 = 2
    let AK = 0;
    let K = 3; // Start with K = 3

    do {
        AK = (AKMinus2 + 2 * AKMinus1) / 3;
        if (Math.abs(AK - AKMinus1) < epsilon) {
            return [K, AKMinus1, AK];
        }
        AKMinus2 = AKMinus1;
        AKMinus1 = AK;
        K++;
    } while (true); // Loop indefinitely until the condition is met
}

// Example usage:
let epsilon = 0.01; // Change epsilon to any positive real number
let [index, AKMinus1, AK] = findIndexAndTerms(epsilon);
console.log("Index K:", index);
console.log("Terms AK-1 and AK:", AKMinus1, AK);
