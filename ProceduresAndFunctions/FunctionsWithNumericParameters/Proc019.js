// Write a real-valued function RingS(R1, R2) that returns the area of a ring
// bounded by a concentric circles of radiuses R1 and R2 (R1 and R2 are real
// numbers, R1 > R2). Using this function, find the areas of three rings with given
// outer and inner radiuses. Note that the area of a circle of radius R can be found
// by formula S = π·R^2
// . Use 3.14 for a value of π.

// Define the RingS function
function RingS(R1, R2) {
    const PI = 3.14;
    let areaOuter = PI * R1 * R1;
    let areaInner = PI * R2 * R2;
    return areaOuter - areaInner;
}

// Calculate the areas of rings for given outer and inner radii
function calculateRingAreas() {
    // Ring 1: Outer Radius = 8, Inner Radius = 6
    let area1 = RingS(8, 6);
    console.log("Area of ring 1:", area1);

    // Ring 2: Outer Radius = 12.5, Inner Radius = 9
    let area2 = RingS(12.5, 9);
    console.log("Area of ring 2:", area2);

    // Ring 3: Outer Radius = 20, Inner Radius = 15
    let area3 = RingS(20, 15);
    console.log("Area of ring 3:", area3);
}

// Calculate the areas of rings
calculateRingAreas();
