// An integer N and a sequence of N positive real numbers are given. Output
// in the same order the fractional parts of all elements of this sequence (as real
// numbers with zero integer part). Also output the product of all fractional parts.

function fractionalPartsAndProduct(N, numbers) {
    let productOfFractionalParts = 1;
    const fractionalParts = [];

    // Calculate fractional parts and product
    for (let i = 0; i < N; i++) {
        const fractionalPart = numbers[i] - Math.floor(numbers[i]);
        fractionalParts.push(fractionalPart);
        productOfFractionalParts *= fractionalPart;
    }

    return { fractionalParts, productOfFractionalParts };
}

// Example usage
const N = 5; // Number of elements in the sequence
const numbers = [1.5, 2.7, 3.2, 4.8, 5.1]; // Example sequence of positive real numbers

const { fractionalParts, productOfFractionalParts } = fractionalPartsAndProduct(N, numbers);

console.log("Fractional parts:", fractionalParts);
console.log("Product of fractional parts:", productOfFractionalParts);
