// Write a real-valued function Cos1(x, ε) (x and ε are real numbers, ε > 0) that
// returns an approximate value of the function cos(x) defined as follows:

// cos(x) = 1 − x^2 / (2!) + x^4 / (4!) − ... + (−1)n·x^2·n
// /((2·n)!) + ... .
// Stop adding new terms to the sum when the absolute value of the next term
// will be less than ε. Using this function, find the approximate values of the
// function cos(x) at a given point x for six given ε.

// Function to calculate the factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Function to calculate cos(x) using the given tolerance ε
function Cos1(x, ε) {
    let result = 1; // First term of cos(x)
    let term = 1;   // First term
    let n = 1;      // Initial value of n
    while (Math.abs(term) >= ε) {
        term = (Math.pow(-1, n) * Math.pow(x, 2 * n)) / factorial(2 * n);
        result += term;
        n++;
    }
    return result;
}

// Example usage:
const x = Math.PI / 4; // Angle in radians
const tolerances = [0.1, 0.01, 0.001, 0.0001, 0.00001, 0.000001];
for (const ε of tolerances) {
    const cosValue = Cos1(x, ε);
    console.log(`cos(${x}) with ε = ${ε}: ${cosValue}`);
}
