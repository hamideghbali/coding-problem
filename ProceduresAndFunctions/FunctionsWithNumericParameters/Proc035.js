// Write a real-valued function Fact2(N) that returns a double factorial N!!:

// N!! = 1·3·5·...·N, if N is an odd number;
// N!! = 2·4·6·...·N otherwise
// (N is a positive integer; the real return type allows to avoid the integer
// overflow during the calculation of the double factorials for large values of N).
// Using this function, find the double factorials of five given integers.

// Function to calculate the double factorial of a positive integer N
function fact2(N) {
    if (N <= 0) {
        return 1;
    }
    let factorial = 1;
    for (let i = N; i > 0; i -= 2) {
        factorial *= i;
    }
    return factorial;
}

// Example usage:
const numbers = [5, 7, 10, 15, 20];
const doubleFactorials = numbers.map(fact2);
console.log("Double Factorials:", doubleFactorials);
