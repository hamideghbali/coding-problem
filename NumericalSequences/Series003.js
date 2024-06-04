// Series3.Given ten real numbers, find their average.

// Given ten real numbers
const numbers = [1.5, 2.3, 4.7, 6.1, 3.4, 5.2, 7.9, 8.6, 9.0, 10.5];

// Calculate the sum of the numbers
const sum = numbers.reduce((acc, curr) => acc + curr, 0);

// Calculate the average
const average = sum / numbers.length;

// Print the result
console.log("The average of the ten real numbers is:", average);
