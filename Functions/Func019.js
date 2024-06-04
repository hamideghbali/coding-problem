// Write a real-valued function Fact(N) that returns a factorial of a positive
// integer N: N! = 1·2·...·N (the real return type allows to avoid the integer
// overflow during the calculation of the factorials for large values of the
// parameter N). Using this function, find the factorials of five given integers.

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
