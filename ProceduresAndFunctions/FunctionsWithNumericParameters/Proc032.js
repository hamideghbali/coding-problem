// Write a real-valued function DegToRad(D) that converts the angle value D
// in degrees into the one in radians (D is a real number, 0 ≤ D < 360). Note that
// 180° = π radians and use 3.14 for a value of π. Using this function, convert five
// given angles from degrees into radians.

// Function to convert an angle value from degrees to radians
function degToRad(D) {
    const PI = 3.14;
    return (D * Math.PI) / 180;
}

// Example usage:
const anglesInDegrees = [0, 30, 45, 90, 180];
const anglesInRadians = anglesInDegrees.map(degToRad);
console.log("Angles in radians:", anglesInRadians);
