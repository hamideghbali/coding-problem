// Given two integers D (day) and M (month) representing a correct date of a
// non-leap year, output values D and M for the next date.

function nextDate(D, M) {
    // Define the number of days in each month for a non-leap year
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Check if it's the end of the year
    if (D === 31 && M === 12) {
        // If it's December 31st, the next date is January 1st
        return [1, 1];
    }

    // Check if it's the end of a month
    if (D === daysInMonth[M - 1]) {
        // If it's the end of a month, go to the next month
        M++;
        // Adjust the day to the first day of the next month
        D = 1;
    } else {
        // If it's not the end of a month, simply increment the day
        D++;
    }

    return [D, M];
}

// Example usage:
console.log(nextDate(28, 2));   // Output: [1, 3] (March 1st)
console.log(nextDate(31, 7));   // Output: [1, 8] (August 1st)
console.log(nextDate(31, 12));  // Output: [1, 1] (January 1st)
