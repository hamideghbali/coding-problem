// A number of month is given (as an integer in the range 1 to 12): 1 —
// January, 2 — February, etc. Output the name of the respective season:
// ―Winter‖, ―Spring‖, ―Summer‖, ―Autumn‖.

function seasonName(month) {
    // Define the seasons based on the months they span
    const seasons = {
        Winter: [12, 1, 2],
        Spring: [3, 4, 5],
        Summer: [6, 7, 8],
        Autumn: [9, 10, 11]
    };

    // Find the season that includes the given month
    for (const [season, months] of Object.entries(seasons)) {
        if (months.includes(month)) {
            return season;
        }
    }

    // If the month is not in the range 1 to 12, or if an invalid month is provided
    return "Invalid month";
}

// Example usage:
console.log(seasonName(1));  // Output: "Winter"
console.log(seasonName(6));  // Output: "Summer"
console.log(seasonName(9));  // Output: "Autumn"
console.log(seasonName(13)); // Output: "Invalid month"
