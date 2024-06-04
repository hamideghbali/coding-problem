
// Write a real-valued function Exp1(x, ε) (x and ε are real numbers, ε > 0) that
// returns an approximate value of the function exp(x) defined as follows:

// exp(x) = 1 + x + x^2/(2!) + x^3/(3!) + ... + x^n/(n!) + ... (n! = 1·2·...·n). Stop adding new terms to the sum when the value of the next
// term will be less than ε. Using this function, find the approximate values of the
// function exp(x) at a given point x for six given ε.

function Exp1(x, ε) {
    let result = 1;
    let term = 1;
    let n = 1;

    while (Math.abs(term) >= ε) {
        term *= x / n;
        result += term;
        n++;
    }

    return result;
}

// Example usage
const x = 1; // Given point
const epsilons = [0.1, 0.01, 0.001, 0.0001, 0.00001, 0.000001]; // Given ε values

epsilons.forEach((ε, index) => {
    const approximate_exp_x = Exp1(x, ε);
    console.log(`Approximate value of exp(${x}) with ε = ${ε}: ${approximate_exp_x}`);
});
