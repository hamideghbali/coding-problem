// Write a real-valued function RingS(R1, R2) that returns the area of a ring
// bounded by a concentric circles of radiuses R1 and R2 (R1 and R2 are real
// numbers, R1 > R2). Using this function, find the areas of three rings with given
// outer and inner radiuses. Note that the area of a circle of radius R can be found
// by formula S = π·R^2
// . Use 3.14 for a value of π.

function CircleS(R) {
    const pi = 3.14;
    return pi * R * R;
}

function RingS(R1, R2) {
    return CircleS(R1) - CircleS(R2);
}

// Example usage
const outerRadius1 = 8;
const innerRadius1 = 5;
const outerRadius2 = 12;
const innerRadius2 = 9;
const outerRadius3 = 15;
const innerRadius3 = 10;

const area1 = RingS(outerRadius1, innerRadius1);
const area2 = RingS(outerRadius2, innerRadius2);
const area3 = RingS(outerRadius3, innerRadius3);

console.log(`Area of ring with outer radius ${outerRadius1} and inner radius ${innerRadius1}: ${area1}`);
console.log(`Area of ring with outer radius ${outerRadius2} and inner radius ${innerRadius2}: ${area2}`);
console.log(`Area of ring with outer radius ${outerRadius3} and inner radius ${innerRadius3}: ${area3}`);
