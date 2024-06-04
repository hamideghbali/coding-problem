// A real number ε (> 0) is given. A sequence of real numbers AK is defined
// as:

// A1 = 2, AK = 2 + 1/AK−1, K = 2, 3, ... .

// Find the first index K such that the inequality |AK − AK−1| < ε is fulfilled. Output
// the index K and the terms AK−1 and AK.

function findIndexAndTerms(epsilon) {
    let AKMinus1 = 2; // A1 = 2
    let AK = 0;
    let K = 2; // Start with K = 2

    do {
        AK = 2 + 1 / AKMinus1;
        if (Math.abs(AK - AKMinus1) < epsilon) {
            return [K, AKMinus1, AK];
        }
        AKMinus1 = AK;
        K++;
    } while (true); // Loop indefinitely until the condition is met
}

// Example usage:
let epsilon = 0.01; // Change epsilon to any positive real number
let [index, AKMinus1, AK] = findIndexAndTerms(epsilon);
console.log("Index K:", index);
console.log("Terms AK-1 and AK:", AKMinus1, AK);
