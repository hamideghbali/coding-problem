// Write a function InvDigits(K) that inverts the order of digits of a positive
// integer K and returns the obtained integer (K is an input parameter). Using this
// // function, invert the order of digits for each of five given integers.

function InvDigits(K) {
    const strK = K.toString();
    const invertedStrK = strK.split('').reverse().join('');
    return parseInt(invertedStrK, 10);
}

// Example usage
const numbers = [12345, 678910, 13579, 24680, 987654321];

for (let i = 0; i < numbers.length; i++) {
    const invertedNumber = InvDigits(numbers[i]);
    console.log(`For number ${numbers[i]}: Inverted number: ${invertedNumber}`);
}
