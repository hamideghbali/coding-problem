// Write a function PowerA234(A) that computes the second, the third, and the
// fourth degrees of a real number A and returns these degrees as three real
// numbers (A is an input parameter). Using this function, find the second, the
// third, and the fourth degrees of five given real numbers.

function PowerA234(A) {
    return [A * A, A * A * A, A * A * A * A];
}

// Example usage
const numbers = [2, 3, 4, 5, 6];
for (let i = 0; i < numbers.length; i++) {
    const [secondDegree, thirdDegree, fourthDegree] = PowerA234(numbers[i]);
    console.log(`For number ${numbers[i]}: Second degree: ${secondDegree}, Third degree: ${thirdDegree}, Fourth degree: ${fourthDegree}`);
}
