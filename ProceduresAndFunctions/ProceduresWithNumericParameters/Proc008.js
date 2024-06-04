// Write a procedure AddRightDigit(D, K) that adds a digit D to the right side of
// the decimal representation of a positive integer K (D is an input integer
// parameter with the value in the range 0 to 9, K is an input and output integer
// parameter). Having input an integer K and two one-digit numbers D1, D2 and
// using two calls of this procedure, sequentially add the given digits D1, D2 to
// the right side of the given K and output the result of each adding.

// Define the AddRightDigit procedure
function AddRightDigit(D, K) {
    return K * 10 + D; // Append the digit D to the right side of K
}

// Example usage:
function testAddRightDigit() {
    let K = 123; // Initial integer
    let D1 = 4; // First digit to add
    let D2 = 7; // Second digit to add
    
    // Add the first digit to the right side of K
    let result1 = AddRightDigit(D1, K);
    console.log("After adding", D1, "to the right side:", result1);

    // Add the second digit to the right side of K
    let result2 = AddRightDigit(D2, result1);
    console.log("After adding", D2, "to the right side:", result2);
}

// Test the procedure
testAddRightDigit();
