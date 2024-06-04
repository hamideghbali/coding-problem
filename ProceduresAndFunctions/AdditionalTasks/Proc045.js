// Write a real-valued function Power4(x, a, ε) (x, a, ε are real numbers, |x| < 1,
//     a, ε > 0) that returns an approximate value of the function (1 + x)^a
//     defined as:
    
//     (1 + x)^a= 1 + a·x + a·(a−1)·x^2 /(2!) + ... + a·(a−1)·...·(a−n+1)·x^n /(n!) + ... .
//     Stop adding new terms to the sum when the absolute value of the next term
//     will be less than ε. Using this function, find the approximate values of the
//     function (1 + x)^a
//     at a given point x for a given exponent a and six given ε.

function Power4(x, a, epsilon) {
    if (Math.abs(x) >= 1 || a <= 0 || epsilon <= 0) {
        throw new Error("Invalid input: |x| must be less than 1, a and ε must be greater than 0.");
    }

    let term = 1; // Initial term (1)
    let sum = 1;  // Initial sum
    let n = 1;

    while (Math.abs(term) >= epsilon) {
        term *= (a - (n - 1)) * x / n;
        sum += term;
        n++;
    }

    return sum;
}

// Function to test the approximation with given x, a, and array of epsilons
function testPower4(x, a, epsilons) {
    const results = epsilons.map(epsilon => {
        return { epsilon: epsilon, value: Power4(x, a, epsilon) };
    });
    return results;
}

// Example usage
const x = 0.5;
const a = 2;
const epsilons = [0.1, 0.01, 0.001, 0.0001, 0.00001, 0.000001];
const approximations = testPower4(x, a, epsilons);

approximations.forEach(approximation => {
    console.log(`ε = ${approximation.epsilon}: (1 + ${x})^${a} ≈ ${approximation.value}`);
});
