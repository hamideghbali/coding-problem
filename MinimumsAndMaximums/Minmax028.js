// An integer N and a sequence of N integers are given. The sequence
// contains elements of values 0 and 1 only. Find the longest subsequence of the
// successive elements of value 1, and output the order number of its initial
// element and the amount of its elements. If there are several such subsequences
// then output the order number of the first one. If the sequence does not contain
// elements of value 1 then output 0 twice.

function longestSubsequenceOfOnes(N, sequence) {
    let maxCount = 0;
    let currentCount = 0;
    let initialIndex = -1;

    // Iterate through the sequence and find the longest subsequence of ones
    for (let i = 0; i < N; i++) {
        if (sequence[i] === 1) {
            currentCount++;
            if (currentCount > maxCount) {
                maxCount = currentCount;
                initialIndex = i - maxCount + 1; // Update initialIndex if a longer subsequence is found
            }
        } else {
            currentCount = 0; // Reset the count if the current element is not 1
        }
    }

    if (maxCount === 0) {
        return [0, 0]; // If there are no elements of value 1, return [0, 0]
    } else {
        return [initialIndex + 1, maxCount]; // Adding 1 to convert from zero-based index to one-based order number
    }
}

// Example usage:
const N = 10; // Example value of N
const sequence = [0, 1, 1, 1, 0, 0, 1, 1, 1, 1]; // Example sequence of N integers containing only 0s and 1s
const [initialElementOrderNumber, subsequenceLength] = longestSubsequenceOfOnes(N, sequence);
console.log("Order number of initial element of the longest subsequence of ones:", initialElementOrderNumber);
console.log("Length of the longest subsequence of ones:", subsequenceLength);
