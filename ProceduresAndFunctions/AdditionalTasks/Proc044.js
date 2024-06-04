// Write a real-valued function Atan1(x, ε) (x and ε are real numbers, |x| < 1,
//     ε > 0) that returns an approximate value of the function atan(x) defined as
//     follows:
    
//     atan(x) = x − x^3 /3 + x^5 /5 − ... + (−1)^n·x^2·n+1 /(2·n+1) + ... .

//     Stop adding new terms to the sum when the absolute value of the next term
//     will be less than ε. Using this function, find the approximate values of the
//     function atan(x) at a given point x for six given ε.

function Atan1(x, epsilon) {
    if (Math.abs(x) >= 1 || epsilon <= 0) {
        throw new Error("Invalid input: |x| must be less than 1 and ε must be greater than 0.");
    }

    let term = x;
    let sum = x;
    let n = 1;

    while (Math.abs(term) >= epsilon) {
        term = Math.pow(-1, n) * Math.pow(x, 2 * n + 1) / (2 * n + 1);
        sum += term;
        n++;
    }

    return sum;
}

// Function to test the approximation with given x and array of epsilons
function testAtan1(x, epsilons) {
    const results = epsilons.map(epsilon => {
        return { epsilon: epsilon, value: Atan1(x, epsilon) };
    });
    return results;
}

// Example usage
const x = 0.5;
const epsilons = [0.1, 0.01, 0.001, 0.0001, 0.00001, 0.000001];
const approximations = testAtan1(x, epsilons);

approximations.forEach(approximation => {
    console.log(`ε = ${approximation.epsilon}: atan(${x}) ≈ ${approximation.value}`);
});
