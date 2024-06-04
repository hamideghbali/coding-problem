// Given ten real numbers, find their product.

// Given ten real numbers
const numbers = [1.5, 2.3, 4.7, 6.1, 3.4, 5.2, 7.9, 8.6, 9.0, 10.5];

// Calculate the product
const product = numbers.reduce((acc, curr) => acc * curr, 1);

// Print the result
console.log("The product of the ten real numbers is:", product);
