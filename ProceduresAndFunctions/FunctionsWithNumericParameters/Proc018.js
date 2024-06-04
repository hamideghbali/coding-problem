// Write a real-valued function CircleS(R) that returns the area of a circle of
// radius R (R is a real number). Using this function, find the areas of three circles
// of given radiuses. Note that the area of a circle of radius R can be found by
// formula S = π·R^2. Use 3.14 for a value of π.

// Define the CircleS function
function CircleS(R) {
    const PI = 3.14;
    return PI * R * R;
}

// Calculate the areas of circles for given radii
function calculateCircleAreas() {
    // Circle 1: Radius = 5
    let area1 = CircleS(5);
    console.log("Area of circle 1:", area1);

    // Circle 2: Radius = 7.5
    let area2 = CircleS(7.5);
    console.log("Area of circle 2:", area2);

    // Circle 3: Radius = 10
    let area3 = CircleS(10);
    console.log("Area of circle 3:", area3);
}

// Calculate the areas of circles
calculateCircleAreas();
