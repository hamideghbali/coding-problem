// An integer N and a sequence of N integers are given. The sequence
// contains at least two zero-valued elements. Output the sum of the values of
// elements placed between two last zero-valued elements. If two last zero-valued
// elements are placed side by side then output 0.

function sumBetweenZeros(sequence) {
    let firstZeroIndex = -1;
    let secondZeroIndex = -1;

    // Find the index of the first zero
    for (let i = sequence.length - 1; i >= 0; i--) {
        if (sequence[i] === 0) {
            firstZeroIndex = i;
            break;
        }
    }

    // Find the index of the second zero
    for (let i = firstZeroIndex - 1; i >= 0; i--) {
        if (sequence[i] === 0) {
            secondZeroIndex = i;
            break;
        }
    }

    // If two zeros are not placed side by side, calculate the sum between them
    if (firstZeroIndex - secondZeroIndex > 1) {
        let sum = 0;
        for (let i = secondZeroIndex + 1; i < firstZeroIndex; i++) {
            sum += sequence[i];
        }
        return sum;
    } else {
        return 0;
    }
}

// Example usage
const sequence1 = [1, 2, 0, 3, 4, 0, 5, 6]; // Sum between the last two zeros is 8
const sequence2 = [1, 2, 0, 0, 3, 4, 5, 6]; // Two zeros are placed side by side, output 0

console.log("Sum between zeros in sequence 1:", sumBetweenZeros(sequence1)); // Output: 8
console.log("Sum between zeros in sequence 2:", sumBetweenZeros(sequence2)); // Output: 0

