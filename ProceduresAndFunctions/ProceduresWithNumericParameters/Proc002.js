// Write a procedure PowerA234(A, B, C, D) that computes the second, the
// third, and the fourth degrees of a real number A and assigns the results to real
// variables B, C, and D respectively (A is an input parameter, B, C, D are output
// parameters). Using this procedure, find the second, the third, and the fourth
// degrees of five given real numbers.

// Define the PowerA234 procedure
function PowerA234(A, B, C, D) {
    B.value = A * A; // Compute the second degree of A and assign it to B
    C.value = A * A * A; // Compute the third degree of A and assign it to C
    D.value = A * A * A * A; // Compute the fourth degree of A and assign it to D
}

// Define a function to use the PowerA234 procedure
function computeDegrees(numbers) {
    let results = [];
    for (let i = 0; i < numbers.length; i++) {
        let result = {}; // Object to store the results
        PowerA234(numbers[i], result, result, result); // Call the PowerA234 procedure
        results.push(result); // Push the results to the array
    }
    return results;
}

// Example usage:
let numbers = [2, 3, 4, 5, 6]; // Given real numbers
let degrees = computeDegrees(numbers);
console.log("Second, third, and fourth degrees:", degrees);
