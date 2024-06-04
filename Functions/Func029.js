// Write a function AddRightDigit(D, K) that adds a digit D to the right side of
// the decimal representation of a positive integer K and returns the obtained
// number (D and K are input integer parameters, the value of D is in the range 0
// to 9). Having input an integer K and two one-digit numbers D1, D2 and using
// two calls of this function, sequentially add the given digits D1, D2 to the right
// side of the given K and output the result of each adding.
function AddRightDigit(D, K) {
    return parseInt(`${K}${D}`, 10);
}

// Example usage
const K = 123;
const D1 = 4;
const D2 = 5;

const result1 = AddRightDigit(D1, K);
console.log(`After adding digit ${D1} to the right side of ${K}: ${result1}`);

const result2 = AddRightDigit(D2, result1);
console.log(`After adding digit ${D2} to the right side of ${result1}: ${result2}`);
