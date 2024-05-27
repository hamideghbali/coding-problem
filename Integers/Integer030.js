// Given a year (as a positive integer), find the respective number of the
// century. Note that, for example, 20th century began with the year 1901.

// Function to find the century for a given year
function findCentury(year) {
    // Calculate the century
    const century = Math.ceil(year / 100);
  
    // Return the result
    return century;
  }
  
  // Example usage:
  const year = 1901; // Example year
  const century = findCentury(year);
  
  console.log(`The century for the year ${year} is ${century}.`);
  