// Write a real-valued function RadToDeg(R) that converts the angle value R
// in radians into the one in degrees (R is a real number, 0 ≤ R < 2·π). Note that
// 180° = π radians and use 3.14 for a value of π. Using this function, convert five
// given angles from radians into degrees.

function RadToDeg(R) {
    const pi = 3.14;
    return (R * 180) / pi;
}

// Example usage
const anglesInRadians = [0, Math.PI / 4, Math.PI / 2, (3 * Math.PI) / 4, Math.PI];
for (let i = 0; i < anglesInRadians.length; i++) {
    console.log(`Angle in radians: ${anglesInRadians[i]}, Angle in degrees: ${RadToDeg(anglesInRadians[i])}`);
}
