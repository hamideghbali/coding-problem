// Write a real-valued function Fact2(N) that returns a double factorial N!!:

// N!! = 1·3·5·...·N, if N is an odd number;
// N!! = 2·4·6·...·N otherwise
// (N is a positive integer; the real return type allows to avoid the integer
// overflow during the calculation of the double factorials for large values of N).
// Using this function, find the double factorials of five given integers.

function Fact(N) {
    if (N === 0 || N === 1) {
        return 1;
    }
    let factorial = 1;
    for (let i = 2; i <= N; i++) {
        factorial *= i;
    }
    return factorial;
}

// Example usage
const numbers = [5, 7, 10, 15, 20];
for (let i = 0; i < numbers.length; i++) {
    console.log(`Factorial of ${numbers[i]}: ${Fact(numbers[i])}`);
}
