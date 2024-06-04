
// Write a real-valued function Cos1(x, ε) (x and ε are real numbers, ε > 0) that
// returns an approximate value of the function cos(x) defined as follows:

// cos(x) = 1 − x^2/(2!) + x^4/(4!) − ... + (−1)^n·x^2·n/((2·n)!) + ... .

// Stop adding new terms to the sum when the absolute value of the next term
// will be less than ε. Using this function, find the approximate values of the
// function cos(x) at a given point x for six given ε.

function Cos1(x, ε) {
    let result = 1;
    let term = 1;
    let n = 1;
    let factorial = 1;

    while (Math.abs(term) >= ε) {
        factorial *= n * (n - 1);
        term *= -1 * x * x / factorial;
        result += term;
        n += 2;
    }

    return result;
}

// Example usage
const x = Math.PI / 4; // Given point
const epsilons = [0.1, 0.01, 0.001, 0.0001, 0.00001, 0.000001]; // Given ε values

epsilons.forEach((ε, index) => {
    const approximate_cos_x = Cos1(x, ε);
    console.log(`Approximate value of cos(${x}) with ε = ${ε}: ${approximate_cos_x}`);
});
