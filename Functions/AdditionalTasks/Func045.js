// Write a real-valued function Power4(x, a, ε) (x, a, ε are real numbers,
//     |x| < 1, a, ε > 0) that returns an approximate value of the function (1 + x)^a
    
//     defined as:
//     (1 + x)^a= 1 + a·x + a·(a−1)·x^2/(2!) + ... + a·(a−1)·...·(a−n+1)·x^n/(n!) + ... .
//     Stop adding new terms to the sum when the absolute value of the next term
//     will be less than ε. Using this function, find the approximate values of the
//     function (1 + x)
//     a
//     at a given point x for a given exponent a and six given ε.

function Power4(x, a, ε) {
    if (Math.abs(x) >= 1 || a <= 0 || ε <= 0) {
        throw new Error("Invalid input: x must be in the range (-1, 1), a > 0, and ε > 0");
    }

    let result = 1;
    let term = 1;
    let n = 1;

    while (Math.abs(term) >= ε) {
        term *= a - n + 1;
        term *= x / n;
        result += term;
        n++;
    }

    return result;
}

// Example usage
const x = 0.5; // Given point
const a = 2; // Given exponent
const epsilons = [0.1, 0.01, 0.001, 0.0001, 0.00001, 0.000001]; // Given ε values

epsilons.forEach((ε, index) => {
    const approximate_power = Power4(x, a, ε);
    console.log(`Approximate value of (1 + ${x})^${a} with ε = ${ε}: ${approximate_power}`);
});
