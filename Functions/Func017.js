// Write a real-valued function DegToRad(D) that converts the angle value D
// in degrees into the one in radians (D is a real number, 0 ≤ D < 360). Note that
// 180° = π radians and use 3.14 for a value of π. Using this function, convert five
// given angles from degrees into radians.

function DegToRad(D) {
    const pi = 3.14;
    return (D / 180) * pi;
}

// Example usage
const anglesInDegrees = [0, 45, 90, 135, 180];
for (let i = 0; i < anglesInDegrees.length; i++) {
    console.log(`Angle in degrees: ${anglesInDegrees[i]}, Angle in radians: ${DegToRad(anglesInDegrees[i])}`);
}
