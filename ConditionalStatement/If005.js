// Three integers are given. Find the amount of positive and amount of negative
// integers in the input data.

function countPositivesAndNegatives(a, b, c) {
    let positiveCount = 0;
    let negativeCount = 0;

    if (a > 0) {
        positiveCount++;
    } else if (a < 0) {
        negativeCount++;
    }

    if (b > 0) {
        positiveCount++;
    } else if (b < 0) {
        negativeCount++;
    }

    if (c > 0) {
        positiveCount++;
    } else if (c < 0) {
        negativeCount++;
    }

    return {
        positives: positiveCount,
        negatives: negativeCount
    };
}

// Example usage:
console.log(countPositivesAndNegatives(1, -2, 3));  // Output: { positives: 2, negatives: 1 }
console.log(countPositivesAndNegatives(-1, -2, -3)); // Output: { positives: 0, negatives: 3 }
console.log(countPositivesAndNegatives(0, 0, 5));  // Output: { positives: 1, negatives: 0 }
