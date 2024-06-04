// Write a real-valued function Exp1(x, ε) (x and ε are real numbers, ε > 0) that
// returns an approximate value of the function exp(x) defined as follows:

// exp(x) = 1 + x + x^2/(2!) + x^3/(3!) + ... + x^n/(n!) + ... (n! = 1·2·...·n). Stop adding new terms to the sum when the value of the next
// term will be less than ε. Using this function, find the approximate values of the
// function exp(x) at a given point x for six given ε.

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

// Function to calculate exp(x) using the given tolerance ε
function Exp1(x, ε) {
    let result = 1;
    let term = 1;
    let n = 1;
    while (Math.abs(term) >= ε) {
        term = Math.pow(x, n) / factorial(n);
        result += term;
        n++;
    }
    return result;
}

// Example usage:
const x = 2;
const tolerances = [0.1, 0.01, 0.001, 0.0001, 0.00001, 0.000001];
for (const ε of tolerances) {
    const expValue = Exp1(x, ε);
    console.log(`exp(${x}) with ε = ${ε}: ${expValue}`);
}
