// Write a procedure DigitCountSum(K, C, S) that finds the amount C of digits
// in the decimal representation of a positive integer K and also the sum S of its
// digits (K is an input parameter, C and S are output parameters, all parameters
// are the integer ones). Using this procedure, find the amount and the sum of
// digits for each of five given integers.

// Define the DigitCountSum procedure
function DigitCountSum(K, C, S) {
    let sum = 0; // Initialize sum variable
    let count = 0; // Initialize count variable
    let num = K; // Temporary variable to store K
    while (num > 0) {
        sum += num % 10; // Add the last digit to the sum
        num = Math.floor(num / 10); // Remove the last digit from num
        count++; // Increment count for each digit
    }
    C.value = count; // Assign the count of digits to C
    S.value = sum; // Assign the sum of digits to S
}

// Define a function to use the DigitCountSum procedure
function computeDigitCountSum(numbers) {
    let results = [];
    for (let i = 0; i < numbers.length; i++) {
        let C = {}; // Object to store the count of digits
        let S = {}; // Object to store the sum of digits
        DigitCountSum(numbers[i], C, S); // Call the DigitCountSum procedure
        results.push({number: numbers[i], digitCount: C.value, digitSum: S.value}); // Push the results to the array
    }
    return results;
}

// Example usage:
let numbers = [123, 4567, 89012, 345678, 9012345]; // Given integers
let digitCountsSums = computeDigitCountSum(numbers);
console.log("Digit counts and sums:", digitCountsSums);
