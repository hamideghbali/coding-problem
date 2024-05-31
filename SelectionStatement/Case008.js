// Given two integers D (day) and M (month) representing a correct date of a
// non-leap year, output values D and M for the previous date.

function previousDate(D, M) {
    // Define the number of days in each month for a non-leap year
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Check if it's the beginning of the year
    if (D === 1 && M === 1) {
        // If it's January 1st, the previous date is December 31st
        return [31, 12];
    }

    // Check if it's the beginning of a month
    if (D === 1) {
        // If it's the beginning of a month, go to the previous month
        M--;
        // Adjust the day to the last day of the previous month
        D = daysInMonth[M - 1];
    } else {
        // If it's not the beginning of a month, simply decrement the day
        D--;
    }

    return [D, M];
}

// Example usage:
console.log(previousDate(1, 3));  // Output: [28, 2] (February 28th)
console.log(previousDate(15, 6)); // Output: [14, 6] (June 14th)
console.log(previousDate(1, 1));  // Output: [31, 12] (December 31st)
