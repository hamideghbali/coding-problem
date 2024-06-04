// Write an integer function SumRange(A, B) that returns a sum of all integers
// in the range A to B inclusively (A and B are integers). In the case of A > B the
// function returns 0. Using this function, find a sum of all integers in the range A
// to B and in the range B to C provided that integers A, B, C are given.

// Define the SumRange function
function SumRange(A, B) {
    // If A > B, return 0
    if (A > B) {
        return 0;
    }
    // Initialize the sum variable
    let sum = 0;
    // Iterate through the range from A to B inclusively
    for (let i = A; i <= B; i++) {
        sum += i; // Add each integer to the sum
    }
    return sum; // Return the total sum
}

// Calculate the sum of integers in the ranges A to B and B to C
function calculateSums() {
    let A = 3, B = 7, C = 12;
    // Sum of integers in the range A to B
    let sumAB = SumRange(A, B);
    console.log("Sum of integers from", A, "to", B, "is:", sumAB);
    
    // Sum of integers in the range B to C
    let sumBC = SumRange(B, C);
    console.log("Sum of integers from", B, "to", C, "is:", sumBC);
}

// Calculate the sums of integers in the specified ranges
calculateSums();
