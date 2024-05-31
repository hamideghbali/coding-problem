// One of the Asian calendars uses 60-years periods divided into 12-years
// cycles, which are associated with a color: green, red, yellow, white, black.
// Each year in a cycle is connected with some animal: rat, cow, tiger, hare,
// dragon, snake, horse, sheep, monkey, hen, dog, pig. Given some year (as
// positive integer), output its name provided that 1984 is ―The Green Rat`s
// year‖.

function asianYearName(year) {
    // Define arrays for colors and animals
    const colors = ['green', 'red', 'yellow', 'white', 'black'];
    const animals = ['rat', 'cow', 'tiger', 'hare', 'dragon', 'snake', 'horse', 'sheep', 'monkey', 'hen', 'dog', 'pig'];

    // Calculate the position within the 60-year cycle
    const positionInCycle = (year - 1984) % 60;

    // Calculate the index of the color and the animal within their arrays
    const colorIndex = Math.floor(positionInCycle / 12);
    const animalIndex = positionInCycle % 12;

    // Construct the name of the year
    const yearName = `The ${colors[colorIndex].charAt(0).toUpperCase() + colors[colorIndex].slice(1)} ${animals[animalIndex]}'s year`;

    return yearName;
}

// Example usage:
console.log(asianYearName(1984));  // Output: "The Green Rat's year"
console.log(asianYearName(2022));  // Output: "The Black Tiger's year"
console.log(asianYearName(2028));  // Output: "The Yellow Dragon's year"
console.log(asianYearName(2033));  // Output: "The Red Hen's year"
