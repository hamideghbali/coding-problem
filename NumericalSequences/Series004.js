// An integer N and a sequence of N real numbers are given. Output the sum
// and the product of all elements of this sequence.

function sumAndProduct(N, numbers) {
    let sum = 0;
    let product = 1;

    // Calculate sum and product
    for (let i = 0; i < N; i++) {
        sum += numbers[i];
        product *= numbers[i];
    }

    return { sum, product };
}

// Example usage
const N = 5; // Number of elements in the sequence
const numbers = [1, 2, 3, 4, 5]; // Example sequence of real numbers

const { sum, product } = sumAndProduct(N, numbers);

console.log("Sum:", sum);
console.log("Product:", product);
