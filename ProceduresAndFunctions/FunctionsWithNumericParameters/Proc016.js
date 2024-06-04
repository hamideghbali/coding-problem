// Write an integer function Sign(X) that returns the following value:
// −1, if X < 0; 0, if X = 0; 1, if X > 0

// (X is a real-valued parameter). Using this function, evaluate an expression
// Sign(A) + Sign(B) for given real numbers A and B.

// Define the Sign function
function Sign(X) {
    if (X < 0) {
        return -1;
    } else if (X === 0) {
        return 0;
    } else {
        return 1;
    }
}

// Evaluate the expression Sign(A) + Sign(B) for given real numbers A and B
function evaluateSignExpression(A, B) {
    return Sign(A) + Sign(B);
}

// Example usage:
function testEvaluateSignExpression() {
    let A = -5, B = 2;
    console.log("Sign(A) + Sign(B) =", evaluateSignExpression(A, B));
    
    A = 0;
    console.log("Sign(A) + Sign(B) =", evaluateSignExpression(A, B));
    
    B = 0;
    console.log("Sign(A) + Sign(B) =", evaluateSignExpression(A, B));
    
    A = 3;
    console.log("Sign(A) + Sign(B) =", evaluateSignExpression(A, B));
}

// Test the evaluation of the expression
testEvaluateSignExpression();
