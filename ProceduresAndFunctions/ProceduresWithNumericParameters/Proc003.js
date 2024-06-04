// Write a procedure Mean(X, Y, AMean, GMean) that computes the
// arithmetical mean AMean = (X+Y)/2 and the geometrical mean
// GMean = (X·Y)

// 1/2 of two positive numbers X and Y (X and Y are input
// parameters, AMean and GMean are output parameters; all parameters are the
// real-valued ones). Using this procedure, find the arithmetical mean and the
// geometrical mean of pairs (A, B), (A, C), (A, D) provided that real
// numbers A, B, C, D are given.

// Define the Mean procedure
function Mean(X, Y, AMean, GMean) {
    AMean.value = (X + Y) / 2; // Compute the arithmetic mean and assign it to AMean
    GMean.value = Math.sqrt(X * Y); // Compute the geometric mean and assign it to GMean
}

// Define a function to use the Mean procedure
function computeMeans(numbers) {
    let results = [];
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            let AMean = {}; // Object to store the arithmetic mean
            let GMean = {}; // Object to store the geometric mean
            Mean(numbers[i], numbers[j], AMean, GMean); // Call the Mean procedure
            results.push({X: numbers[i], Y: numbers[j], AMean: AMean.value, GMean: GMean.value}); // Push the results to the array
        }
    }
    return results;
}

// Example usage:
let numbers = [2, 3, 4, 5]; // Given real numbers
let means = computeMeans(numbers);
console.log("Arithmetic and geometric means:", means);
