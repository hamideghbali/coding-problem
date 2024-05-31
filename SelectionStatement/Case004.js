// A number of month is given (as an integer in the range 1 to 12): 1 —

// January, 2 — February, etc. Output the amount of days in the month for a non-
// leap year.

function daysInMonth(month) {
    // Define the number of days in each month for a non-leap year
    const days = {
        1: 31, // January
        2: 28, // February
        3: 31, // March
        4: 30, // April
        5: 31, // May
        6: 30, // June
        7: 31, // July
        8: 31, // August
        9: 30, // September
        10: 31, // October
        11: 30, // November
        12: 31 // December
    };

    // Return the number of days for the given month
    return days[month] || "Invalid month";
}

// Example usage:
console.log(daysInMonth(2));  // Output: 28
console.log(daysInMonth(4));  // Output: 30
console.log(daysInMonth(9));  // Output: 30
console.log(daysInMonth(13)); // Output: Invalid month
