// An integer N and a sequence of N real numbers are given. Output in the
// same order the rounded values of all elements of this sequence to the nearest
// whole number (as integers). Also output the sum of all rounded values.

function roundedValuesAndSum(N, numbers) {
    let sumOfRoundedValues = 0;
    const roundedValues = [];

    // Calculate rounded values and sum
    for (let i = 0; i < N; i++) {
        const roundedValue = Math.round(numbers[i]);
        roundedValues.push(roundedValue);
        sumOfRoundedValues += roundedValue;
    }

    return { roundedValues, sumOfRoundedValues };
}

// Example usage
const N = 5; // Number of elements in the sequence
const numbers = [1.5, 2.7, 3.2, 4.8, 5.1]; // Example sequence of real numbers

const { roundedValues, sumOfRoundedValues } = roundedValuesAndSum(N, numbers);

console.log("Rounded values:", roundedValues);
console.log("Sum of rounded values:", sumOfRoundedValues);
