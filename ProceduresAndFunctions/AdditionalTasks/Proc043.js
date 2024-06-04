// Write a real-valued function Ln1(x, ε) (x and ε are real numbers, |x| < 1,
//     ε > 0) that returns an approximate value of the function ln(1 + x) defined as
//     follows:
    
//     ln(1 + x) = x − x^2 /2 + x^3 /3 − ... + (−1)^n·x^n+1/(n+1) + ... .
    
//     Stop adding new terms to the sum when the absolute value of the next term
//     will be less than ε. Using this function, find the approximate values of the
//     function ln(1 + x) at a given point x for six given ε.

function Ln1(x, epsilon) {
    if (Math.abs(x) >= 1 || epsilon <= 0) {
        throw new Error("Invalid input: |x| must be less than 1 and ε must be greater than 0.");
    }

    let term = x;
    let sum = x;
    let n = 1;

    while (Math.abs(term) >= epsilon) {
        term *= -x * n / (n + 1);
        sum += term;
        n++;
    }

    return sum;
}

// Function to test the approximation with given x and array of epsilons
function testLn1(x, epsilons) {
    const results = epsilons.map(epsilon => {
        return { epsilon: epsilon, value: Ln1(x, epsilon) };
    });
    return results;
}

// Example usage
const x = 0.5;
const epsilons = [0.1, 0.01, 0.001, 0.0001, 0.00001, 0.000001];
const approximations = testLn1(x, epsilons);

approximations.forEach(approximation => {
    console.log(`ε = ${approximation.epsilon}: ln(1 + ${x}) ≈ ${approximation.value}`);
});
