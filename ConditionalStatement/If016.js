// The values of three real variables A, B, C are given. If the values are in
// ascending order then double them, otherwise replace the value of each variable
// by its opposite value. Output the new values of the variables A, B, C.

function transformValues(A, B, C) {
    if (A < B && B < C) {
        // Values are in ascending order, double them
        A *= 2;
        B *= 2;
        C *= 2;
    } else {
        // Values are not in ascending order, replace each with its opposite
        A = -A;
        B = -B;
        C = -C;
    }
    return [A, B, C];
}

// Example usage:
let result1 = transformValues(1, 2, 3);
console.log(`A: ${result1[0]}, B: ${result1[1]}, C: ${result1[2]}`);  // Output: A: 2, B: 4, C: 6

let result2 = transformValues(-3, 0, 5);
console.log(`A: ${result2[0]}, B: ${result2[1]}, C: ${result2[2]}`); // Output: A: 3, B: 0, C: -5

let result3 = transformValues(0, 0, 0);
console.log(`A: ${result3[0]}, B: ${result3[1]}, C: ${result3[2]}`);  // Output: A: 0, B: 0, C: 0

let result4 = transformValues(5, 2, 1);
console.log(`A: ${result4[0]}, B: ${result4[1]}, C: ${result4[2]}`);  // Output: A: -5, B: -2, C: -1

let result5 = transformValues(-10, -5, 0);
console.log(`A: ${result5[0]}, B: ${result5[1]}, C: ${result5[2]}`);  // Output: A: 10, B: 5, C: 0
