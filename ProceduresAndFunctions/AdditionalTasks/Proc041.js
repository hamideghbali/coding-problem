// Write a real-valued function Sin1(x, ε) (x and ε are real numbers, ε > 0) that
// returns an approximate value of the function sin(x) defined as follows:
// sin(x) = x − x^3/(3!) + x^5  / (5!) − ... + (−1)^n·x^2·n+1/((2·n+1)!) + ... .

// Stop adding new terms to the sum when the absolute value of the next term
// will be less than ε. Using this function, find the approximate values of the
// function sin(x) at a given point x for six given ε.

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

// Function to calculate sin(x) using the given tolerance ε
function Sin1(x, ε) {
    let result = 0;
    let term = x;
    let n = 1;
    while (Math.abs(term) >= ε) {
        result += term;
        n += 2;
        term = (Math.pow(-1, n / 2) * Math.pow(x, n)) / factorial(n);
    }
    return result;
}

// Example usage:
const x = Math.PI / 4; // Angle in radians
const tolerances = [0.1, 0.01, 0.001, 0.0001, 0.00001, 0.000001];
for (const ε of tolerances) {
    const sinValue = Sin1(x, ε);
    console.log(`sin(${x}) with ε = ${ε}: ${sinValue}`);
}
