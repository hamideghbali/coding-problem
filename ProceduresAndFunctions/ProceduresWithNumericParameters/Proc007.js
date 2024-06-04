// Write a procedure InvDigits(K) that inverts the order of digits of a positive
// integer K (K is an input and output integer parameter). Using this procedure,
// invert the order of digits for each of five given integers.

// Define the InvDigits procedure
function InvDigits(K) {
    let reversed = 0; // Initialize variable to store reversed number
    while (K > 0) {
        reversed = reversed * 10 + K % 10; // Append the last digit of K to reversed
        K = Math.floor(K / 10); // Remove the last digit from K
    }
    return reversed; // Return the inverted number
}

// Define a function to use the InvDigits procedure
function invertDigits(numbers) {
    let results = [];
    for (let i = 0; i < numbers.length; i++) {
        let inverted = InvDigits(numbers[i]); // Call the InvDigits procedure
        results.push({number: numbers[i], inverted: inverted}); // Push the results to the array
    }
    return results;
}

// Example usage:
let numbers = [123, 4567, 89012, 345678, 9012345]; // Given integers
let invertedNumbers = invertDigits(numbers);
console.log("Inverted numbers:", invertedNumbers);
