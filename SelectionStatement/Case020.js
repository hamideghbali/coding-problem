// Given two integers D (day) and M (month) that represent a correct date,
// output the zodiacal name corresponding to this date: ―Aquarius‖ 20.1–18.2,
// ―Pisces‖ 19.2–20.3, ―Aries‖ 21.3–19.4, ―Taurus‖ 20.4–20.5, ―Gemini‖ 21.5–
// 21.6, ―Cancer‖ 22.6–22.7, ―Leo‖ 23.7–22.8, ―Virgo‖ 23.8–22.9, ―Libra‖ 23.9–
// 22.10, ―Scorpio‖ 23.10–22.11, ―Sagittarius‖ 23.11–21.12, ―Capricorn‖ 22.12–
// 19.1.

function zodiacSign(D, M) {
    // Define the ranges for each zodiac sign
    const zodiacRanges = [
        { name: 'Capricorn', start: [22, 12], end: [19, 1] },
        { name: 'Aquarius', start: [20, 1], end: [18, 2] },
        { name: 'Pisces', start: [19, 2], end: [20, 3] },
        { name: 'Aries', start: [21, 3], end: [19, 4] },
        { name: 'Taurus', start: [20, 4], end: [20, 5] },
        { name: 'Gemini', start: [21, 5], end: [21, 6] },
        { name: 'Cancer', start: [22, 6], end: [22, 7] },
        { name: 'Leo', start: [23, 7], end: [22, 8] },
        { name: 'Virgo', start: [23, 8], end: [22, 9] },
        { name: 'Libra', start: [23, 9], end: [22, 10] },
        { name: 'Scorpio', start: [23, 10], end: [22, 11] },
        { name: 'Sagittarius', start: [23, 11], end: [21, 12] }
    ];

    // Find the zodiac sign corresponding to the given date
    for (const sign of zodiacRanges) {
        const startDay = sign.start[0];
        const startMonth = sign.start[1];
        const endDay = sign.end[0];
        const endMonth = sign.end[1];

        if ((M === startMonth && D >= startDay) || (M === endMonth && D <= endDay)) {
            return sign.name;
        }
    }

    return "Invalid date";
}

// Example usage:
console.log(zodiacSign(20, 1));  // Output: "Aquarius"
console.log(zodiacSign(18, 2));  // Output: "Aquarius"
console.log(zodiacSign(19, 2));  // Output: "Pisces"
console.log(zodiacSign(20, 3));  // Output: "Pisces"
console.log(zodiacSign(21, 3));  // Output: "Aries"
console.log(zodiacSign(19, 4));  // Output: "Aries"
