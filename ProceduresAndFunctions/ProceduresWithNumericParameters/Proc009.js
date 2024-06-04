// Write a procedure AddLeftDigit(D, K) that adds a digit D to the left side of
// the decimal representation of a positive integer K (D is an input integer
// parameter with the value in the range 0 to 9, K is an input and output integer
// parameter). Having input an integer K and two one-digit numbers D1, D2 and
// using two calls of this procedure, sequentially add the given digits D1, D2 to
// the left side of the given K and output the result of each adding.


// Define the AddLeftDigit procedure
function AddLeftDigit(D, K) {
    let sign = Math.sign(K); // Get the sign of K
    if (sign === -1) { // If K is negative, make it positive temporarily
        K = -K;
    }
    let length = Math.floor(Math.log10(K)) + 1; // Get the number of digits in K
    let multiplier = Math.pow(10, length); // Calculate the multiplier for the new digit
    let result = D * multiplier + K; // Add the new digit to the left side of K
    if (sign === -1) { // If K was negative, make the result negative
        result = -result;
    }
    return result;
}

// Example usage:
function testAddLeftDigit() {
    let K = 123; // Initial integer
    let D1 = 4; // First digit to add
    let D2 = 7; // Second digit to add
    
    // Add the first digit to the left side of K
    let result1 = AddLeftDigit(D1, K);
    console.log("After adding", D1, "to the left side:", result1);

    // Add the second digit to the left side of K
    let result2 = AddLeftDigit(D2, result1);
    console.log("After adding", D2, "to the left side:", result2);
}

// Test the procedure
testAddLeftDigit();
