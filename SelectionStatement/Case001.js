// An integer in the range 1 to 7 is given. Output the name of the respective day
// of week: 1 — ―Monday‖, 2 — ―Tuesday‖, ..., 7 — ―Sunday‖.

function getDayOfWeek(number) {
    switch (number) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return "Invalid day number";
    }
}

// Example usage:
console.log(getDayOfWeek(1)); // Output: Monday
console.log(getDayOfWeek(3)); // Output: Wednesday
console.log(getDayOfWeek(6)); // Output: Saturday
console.log(getDayOfWeek(8)); // Output: Invalid day number
