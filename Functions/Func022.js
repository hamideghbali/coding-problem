// Write a function PowerA3(A) that returns the third degree of a real
// number A (A is an input parameter). Using this function, find the third degree
// of five given real numbers.

function PowerA3(A) {
    return A * A * A;
}

// Example usage
const numbers = [2, 3, 4, 5, 6];
for (let i = 0; i < numbers.length; i++) {
    console.log(`Third degree of ${numbers[i]}: ${PowerA3(numbers[i])}`);
}
