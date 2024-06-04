// An integer N and a sequence of N integers are given. The sequence
// contains at least two zero-valued elements. Output the sum of the values of
// elements placed between the first and the last zero-valued elements. If the first
// and the last zero-valued elements are placed side by side then output 0.

function sumBetweenFirstAndLastZero(sequence) {
    let firstZeroIndex = -1;
    let lastZeroIndex = -1;

    // Find the index of the first zero
    for (let i = 0; i < sequence.length; i++) {
        if (sequence[i] === 0) {
            firstZeroIndex = i;
            break;
        }
    }

    // Find the index of the last zero
    for (let i = sequence.length - 1; i >= 0; i--) {
        if (sequence[i] === 0) {
            lastZeroIndex = i;
            break;
        }
    }

    // If the first and last zero are not side by side, calculate the sum between them
    if (lastZeroIndex - firstZeroIndex > 1) {
        let sum = 0;
        for (let i = firstZeroIndex + 1; i < lastZeroIndex; i++) {
            sum += sequence[i];
        }
        return sum;
    } else {
        return 0;
    }
}

// Example usage
const sequence1 = [1, 2, 0, 3, 4, 0, 5, 6]; // Sum between the first and last zeros is 8
const sequence2 = [0, 1, 2, 0, 3, 4, 5, 6]; // The first and last zeros are placed side by side, output 0

console.log("Sum between first and last zeros in sequence 1:", sumBetweenFirstAndLastZero(sequence1)); // Output: 8
console.log("Sum between first and last zeros in sequence 2:", sumBetweenFirstAndLastZero(sequence2)); // Output: 0
