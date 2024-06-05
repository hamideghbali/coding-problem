// An integer N and a sequence of N rectangles are given. Each rectangle is
// defined by a pair of its sides (a, b). Find the rectangle with the maximal
// perimeter and output the value of its perimeter.

function findMaxPerimeter(rectangles) {
    if (rectangles.length === 0) {
        return null;
    }
    
    let maxPerimeter = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < rectangles.length; i++) {
        let [a, b] = rectangles[i];
        let perimeter = 2 * (a + b);
        if (perimeter > maxPerimeter) {
            maxPerimeter = perimeter;
        }
    }

    return maxPerimeter;
}

// Example usage:
let rectangles = [[3, 4], [2, 5], [6, 2], [1, 8]];
let maxPerimeter = findMaxPerimeter(rectangles);
console.log("Maximal perimeter:", maxPerimeter);
