// An integer N and a sequence of N integers are given. The sequence
// contains elements of values 0 and 1 only. Find the longest subsequence of the
// successive elements with equal values, and output the order number of its
// initial element and the amount of its elements. If there are several such
// subsequences then output the order number of the first one.

function longestEqualSubsequence(N, sequence) {
    let maxCount = 0;
    let currentCount = 1;
    let initialIndex = 0;

    // Iterate through the sequence and find the longest subsequence of equal elements
    for (let i = 1; i < N; i++) {
        if (sequence[i] === sequence[i - 1]) {
            currentCount++;
            if (currentCount > maxCount) {
                maxCount = currentCount;
                initialIndex = i - maxCount + 1; // Update initialIndex if a longer subsequence is found
            }
        } else {
            currentCount = 1; // Reset the count if the current element is different from the previous one
        }
    }

    return [initialIndex + 1, maxCount]; // Adding 1 to convert from zero-based index to one-based order number
}

// Example usage:
const N = 10; // Example value of N
const sequence = [0, 1, 1, 1, 0, 0, 1, 1, 1, 1]; // Example sequence of N integers containing only 0s and 1s
const [initialElementOrderNumber, subsequenceLength] = longestEqualSubsequence(N, sequence);
console.log("Order number of initial element of the longest equal subsequence:", initialElementOrderNumber);
console.log("Length of the longest equal subsequence:", subsequenceLength);
