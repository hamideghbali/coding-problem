// Using the MonthDays function from the task Func53, write a function
// NextDate(D, M, Y) that changes a correct date, represented at the ―day D,
// month number M, year Y‖ format, to a next one and returns new values of day,
// month, and year (all numbers are integers). Apply this function to three given
// dates and output resulting next ones.

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

function NextDate(D, M, Y) {
    let daysInMonth = MonthDays(M, Y);

    // Check if it's the last day of the year
    if (D === 31 && M === 12) {
        return [1, 1, Y + 1]; // Go to the first day of the next year
    }

    // Check if it's the last day of the month
    if (D === daysInMonth) {
        // Go to the first day of the next month
        return [1, M === 12 ? 1 : M + 1, M === 12 ? Y + 1 : Y];
    }

    // Just go forward by one day
    return [D + 1, M, Y];
}

// Example usage
function main() {
    let dates = [[31, 1, 2023], [28, 2, 2022], [30, 4, 2024]]; // Example dates
    for (let date of dates) {
        let [nextDay, nextMonth, nextYear] = NextDate(date[0], date[1], date[2]);
        console.log(`Next date of ${date[0]}/${date[1]}/${date[2]}: ${nextDay}/${nextMonth}/${nextYear}`);
    }
}

main();
