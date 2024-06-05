// An integer N and a sequence of N rectangles are given. Each rectangle is
// defined by a pair of its sides (a, b). Find the rectangle with the minimal area
// and output the value of its area.

function findMinArea(rectangles) {
    if (rectangles.length === 0) {
        return null;
    }
    
    let minArea = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < rectangles.length; i++) {
        let [a, b] = rectangles[i];
        let area = a * b;
        if (area < minArea) {
            minArea = area;
        }
    }

    return minArea;
}

// Example usage:
let rectangles = [[3, 4], [2, 5], [6, 2], [1, 8]];
let minArea = findMinArea(rectangles);
console.log("Minimal area:", minArea);
