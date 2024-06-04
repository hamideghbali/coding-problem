// Write an integer function Sign(X) that returns the following value:
// −1, if X < 0; 0, if X = 0; 1, if X > 0

// (X is a real-valued parameter). Using this function, evaluate an expression
// Sign(A) + Sign(B) for given real numbers A and B.

function Sign(X) {
    if (X < 0) {
        return -1;
    } else if (X === 0) {
        return 0;
    } else {
        return 1;
    }
}

// Example usage
const A = -5;
const B = 10;

const result = Sign(A) + Sign(B);
console.log(`Sign(A) + Sign(B) = ${result}`);
