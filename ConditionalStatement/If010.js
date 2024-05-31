// The values of two integer variables A and B are given. If the values are not
// equal then assign the sum of given values to each variable, otherwise assign
// zero value to each variable. Output the new values of the variables A and B.

function modifyValues(A, B) {
    if (A !== B) {
        const sum = A + B;
        A = sum;
        B = sum;
    } else {
        A = 0;
        B = 0;
    }
    return [A, B];
}

// Example usage:
let result1 = modifyValues(5, 3);
console.log(`A: ${result1[0]}, B: ${result1[1]}`);  // Output: A: 8, B: 8

let result2 = modifyValues(4, 4);
console.log(`A: ${result2[0]}, B: ${result2[1]}`); // Output: A: 0, B: 0

let result3 = modifyValues(-2, 7);
console.log(`A: ${result3[0]}, B: ${result3[1]}`);  // Output: A: 5, B: 5

let result4 = modifyValues(0, 0);
console.log(`A: ${result4[0]}, B: ${result4[1]}`);  // Output: A: 0, B: 0

let result5 = modifyValues(10, -10);
console.log(`A: ${result5[0]}, B: ${result5[1]}`);  // Output: A: 0, B: 0
