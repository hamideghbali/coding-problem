// A locator can be focused on the directions ―N‖ (north), ―W‖ (west), ―S‖
// (south), ―E‖ (east) and perform three digital instructions: 1 — ―turn left‖,
// −1 — ―turn right‖, 2 — ―turn on 180°‖). A symbol C (an initial direction of the
// locator) and two integers N1 and N2 (instructions) are given. Output the
// direction of the locator (as symbol) after performing the instructions.

function newLocatorDirection(C, N1, N2) {
    // Define the directions: 0 for North, 1 for East, 2 for South, and 3 for West
    const directions = ['N', 'E', 'S', 'W'];

    // Convert the initial direction to a corresponding number
    let currentDirection = directions.indexOf(C);

    // Update the direction based on the first instruction
    if (N1 === 1) {
        // Turn left (counter-clockwise)
        currentDirection = (currentDirection + 3) % 4;
    } else if (N1 === -1) {
        // Turn right (clockwise)
        currentDirection = (currentDirection + 1) % 4;
    } else if (N1 === 2) {
        // Turn on 180°
        currentDirection = (currentDirection + 2) % 4;
    }

    // Update the direction based on the second instruction
    if (N2 === 1) {
        // Turn left (counter-clockwise)
        currentDirection = (currentDirection + 3) % 4;
    } else if (N2 === -1) {
        // Turn right (clockwise)
        currentDirection = (currentDirection + 1) % 4;
    } else if (N2 === 2) {
        // Turn on 180°
        currentDirection = (currentDirection + 2) % 4;
    }

    // Return the new direction as a symbol
    return directions[currentDirection];
}

// Example usage:
console.log(newLocatorDirection('N', 1, -1));   // Output: 'N' (turn left, turn right)
console.log(newLocatorDirection('W', 2, 1));    // Output: 'E' (turn on 180°, turn left)
console.log(newLocatorDirection('S', -1, 2));   // Output: 'W' (turn right, turn on 180°)
