// Write a procedure PowerA3(A, B) that computes the third degree of a real
// number A and assigns the result to a real variable B (A is an input parameter,
// B is an output parameter). Using this procedure, find the third degree of five
// given real numbers.

// Define the PowerA3 procedure
function PowerA3(A, B) {
    B.value = A * A * A; // Compute the third degree of A and assign it to B
}

// Define a function to use the PowerA3 procedure
function computeThirdDegree(numbers) {
    let results = [];
    for (let i = 0; i < numbers.length; i++) {
        let result = {}; // Object to store the result
        PowerA3(numbers[i], result); // Call the PowerA3 procedure
        results.push(result.value); // Push the result to the array
    }
    return results;
}

// Example usage:
let numbers = [2, 3, 4, 5, 6]; // Given real numbers
let thirdDegrees = computeThirdDegree(numbers);
console.log("Third degrees:", thirdDegrees);
