// The values of two real variables A and B are given. Redistribute the values so
// that A and B have the smaller and the larger value respectively. Output the new
// values of the variables A and B.

function redistributeValues(A, B) {
    if (A > B) {
        // Swap A and B if A is greater than B
        let temp = A;
        A = B;
        B = temp;
    }
    return [A, B];
}

// Example usage:
let result1 = redistributeValues(5.7, 3.2);
console.log(`A: ${result1[0]}, B: ${result1[1]}`);  // Output: A: 3.2, B: 5.7

let result2 = redistributeValues(-2.4, -3.6);
console.log(`A: ${result2[0]}, B: ${result2[1]}`); // Output: A: -3.6, B: -2.4

let result3 = redistributeValues(0, 0);
console.log(`A: ${result3[0]}, B: ${result3[1]}`);  // Output: A: 0, B: 0

let result4 = redistributeValues(7, 7);
console.log(`A: ${result4[0]}, B: ${result4[1]}`);  // Output: A: 7, B: 7

let result5 = redistributeValues(-5, 5);
console.log(`A: ${result5[0]}, B: ${result5[1]}`);  // Output: A: -5, B: 5
