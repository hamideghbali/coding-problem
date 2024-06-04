// An integer N and a sequence of N positive real numbers are given. Output
// in the same order the integer parts of all elements of this sequence (as real
// numbers with zero fractional part). Also output the sum of all integer parts.

function integerPartsAndSum(N, numbers) {
    let sumOfIntegerParts = 0;
    const integerParts = [];

    // Calculate integer parts and sum
    for (let i = 0; i < N; i++) {
        const integerPart = Math.floor(numbers[i]);
        integerParts.push(integerPart);
        sumOfIntegerParts += integerPart;
    }

    return { integerParts, sumOfIntegerParts };
}

// Example usage
const N = 5; // Number of elements in the sequence
const numbers = [1.5, 2.7, 3.2, 4.8, 5.1]; // Example sequence of positive real numbers

const { integerParts, sumOfIntegerParts } = integerPartsAndSum(N, numbers);

console.log("Integer parts:", integerParts);
console.log("Sum of integer parts:", sumOfIntegerParts);
