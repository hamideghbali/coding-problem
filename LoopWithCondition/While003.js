// Two positive integers N and K are given. Using addition and subtraction
// only, find a quotient of the integer division N on K and also a remainder after
// this division.

function integerDivision(N, K) {
    let quotient = 0;
    let remainder = N;

    while (remainder >= K) {
        remainder -= K;
        quotient++;
    }

    return [quotient, remainder];
}

// Example usage:
let N = 17; // Change N to any positive integer
let K = 3; // Change K to any positive integer
let [quotient, remainder] = integerDivision(N, K);
console.log("Quotient of N divided by K:", quotient);
console.log("Remainder of N divided by K:", remainder);
