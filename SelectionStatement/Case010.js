// A robot can move in four directions (―N‖ — north, ―W‖ — west, ―S‖ —
//     south, ―E‖ — east) and perform three digital instructions: 0 — ―move in the
//     former direction‖, 1 — ―turn left‖, −1 — ―turn right‖. A symbol C (an initial
//     direction of the robot) and an integer N (an instruction) are given. Output the
//     direction of the robot (as symbol) after performing the instruction.

function newDirection(C, N) {
    // Define the directions: 0 for North, 1 for East, 2 for South, and 3 for West
    const directions = ['N', 'E', 'S', 'W'];

    // Convert the initial direction to a corresponding number
    let currentDirection = directions.indexOf(C);

    // Update the direction based on the instruction
    if (N === 1) {
        // Turn left (counter-clockwise)
        currentDirection = (currentDirection + 3) % 4;
    } else if (N === -1) {
        // Turn right (clockwise)
        currentDirection = (currentDirection + 1) % 4;
    }

    // Return the new direction as a symbol
    return directions[currentDirection];
}

// Example usage:
console.log(newDirection('N', 0));   // Output: 'N' (move in the former direction)
console.log(newDirection('W', 1));   // Output: 'S' (turn left)
console.log(newDirection('S', -1));  // Output: 'E' (turn right)
