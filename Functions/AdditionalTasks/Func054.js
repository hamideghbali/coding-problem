// Using the MonthDays function from the task Func53, write a function
// PrevDate(D, M, Y) that changes a correct date, represented at the ―day D,
// month number M, year Y‖ format, to a previous one and returns new values of
// day, month, and year (all numbers are integers). Apply this function to three
// given dates and output resulting previous ones.
function MonthDays(M, Y) {
    switch (M) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            return 31;
        case 4: case 6: case 9: case 11:
            return 30;
        case 2:
            return IsLeapYear(Y) ? 29 : 28;
        default:
            return -1; // Invalid month
    }
}

function IsLeapYear(Y) {
    if ((Y % 4 === 0 && Y % 100 !== 0) || Y % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

function PrevDate(D, M, Y) {
    // Check if it's the first day of the year
    if (D === 1 && M === 1) {
        return [31, 12, Y - 1]; // Go back to the last day of the previous year
    }
    
    // Check if it's the first day of the month
    if (D === 1) {
        // Go back to the last day of the previous month
        return [MonthDays(M - 1, Y), M - 1, Y];
    }
    
    // Just go back by one day
    return [D - 1, M, Y];
}

// Example usage
function main() {
    let dates = [[1, 1, 2024], [15, 3, 2022], [28, 2, 2023]]; // Example dates
    for (let date of dates) {
        let [prevDay, prevMonth, prevYear] = PrevDate(date[0], date[1], date[2]);
        console.log(`Previous date of ${date[0]}/${date[1]}/${date[2]}: ${prevDay}/${prevMonth}/${prevYear}`);
    }
}

main();
