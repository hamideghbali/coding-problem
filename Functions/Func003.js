// Write a real-valued function CircleS(R) that returns the area of a circle of
// radius R (R is a real number). Using this function, find the areas of three circles
// of given radiuses. Note that the area of a circle of radius R can be found by
// formula S = π·R^2
// . Use 3.14 for a value of π.


function CircleS(R) {
    const pi = 3.14;
    return pi * R * R;
}

// Example usage
const radius1 = 5;
const radius2 = 7;
const radius3 = 10;

const area1 = CircleS(radius1);
const area2 = CircleS(radius2);
const area3 = CircleS(radius3);

console.log(`Area of circle with radius ${radius1}: ${area1}`);
console.log(`Area of circle with radius ${radius2}: ${area2}`);
console.log(`Area of circle with radius ${radius3}: ${area3}`);
