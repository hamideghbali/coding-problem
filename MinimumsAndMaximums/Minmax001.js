// An integer N and a sequence of N real numbers are given. Find the
// minimal element and the maximal element of the sequence (that is, elements
// with the minimal value and the maximal value respectively).

function findMinMax(numbers) {
    if (numbers.length === 0) {
        return [null, null];
    }
    
    let minElement = maxElement = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        let num = numbers[i];
        if (num < minElement) {
            minElement = num;
        } else if (num > maxElement) {
            maxElement = num;
        }
    }

    return [minElement, maxElement];
}

// Example usage:
let numbers = [3, 1, 4, 1, 5];
let [minElement, maxElement] = findMinMax(numbers);
console.log("Min element:", minElement);
console.log("Max element:", maxElement);
