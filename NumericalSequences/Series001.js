// Given ten real numbers, find their sum.

// Given ten real numbers
const numbers = [1.5, 2.3, 4.7, 6.1, 3.4, 5.2, 7.9, 8.6, 9.0, 10.5];

// Calculate the sum
const total = numbers.reduce((acc, curr) => acc + curr, 0);

// Print the result
console.log("The sum of the ten real numbers is:", total);
