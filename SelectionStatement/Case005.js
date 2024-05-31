// The arithmetic operations are numbered as: 1 — addition, 2 — subtraction,
// 3 — multiplication, 4 — division. The order number N of an operation and two
// real numbers A and B are given (N is an integer in the range 1 to 4, В is not
// equal to 0). Perform the operation with the operands A and B and output the
// result.

function performOperation(N, A, B) {
    let result;

    // Perform the arithmetic operation based on the order number N
    switch (N) {
        case 1:
            result = A + B; // Addition
            break;
        case 2:
            result = A - B; // Subtraction
            break;
        case 3:
            result = A * B; // Multiplication
            break;
        case 4:
            result = A / B; // Division
            break;
        default:
            result = "Invalid operation";
    }

    return result;
}

// Example usage:
console.log(performOperation(1, 5, 3));  // Output: 8
console.log(performOperation(3, 5, 3));  // Output: 15
console.log(performOperation(4, 10, 2)); // Output: 5
console.log(performOperation(2, 7, 4));  // Output: 3
