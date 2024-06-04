// Write a real-valued function Sin1(x, ε) (x and ε are real numbers, ε > 0) that
// returns an approximate value of the function sin(x) defined as follows:
// sin(x) = x − x^3 /(3!) + x^5 /(5!) − ... + (−1)^n·x^2·n+1/((2·n+1)!) + ... .

// Stop adding new terms to the sum when the absolute value of the next term
// will be less than ε. Using this function, find the approximate values of the
// function sin(x) at a given point x for six given ε.

function Sin1(x, ε) {
    let result = 0;
    let term = x;
    let n = 1;
    let factorial = 1;

    while (Math.abs(term) >= ε) {
        result += term;
        n += 2;
        factorial *= n * (n - 1);
        term *= -1 * x * x / factorial;
    }

    return result;
}

// Example usage
const x = Math.PI / 4; // Given point
const epsilons = [0.1, 0.01, 0.001, 0.0001, 0.00001, 0.000001]; // Given ε values

epsilons.forEach((ε, index) => {
    const approximate_sin_x = Sin1(x, ε);
    console.log(`Approximate value of sin(${x}) with ε = ${ε}: ${approximate_sin_x}`);
});
