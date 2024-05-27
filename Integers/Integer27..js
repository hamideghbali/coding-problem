// Days of week are numbered as: 1 — Monday, 2 — Tuesday, ..., 6 —
// Saturday, 7 — Sunday. An integer K in the range 1 to 365 is given. Find the
// number of day of week for K-th day of year provided that in this year
// January 1 was Saturday.

// Function to find the number of the day of the week for the K-th day of the year
function dayOfWeek(K) {
    // January 1st was Saturday, so the number of Saturday is 6
    const saturday = 6;
  
    // Find the number of the day of the week for the K-th day of the year
    const dayNumber = ((saturday - 1) + (K - 1)) % 7 + 1;
  
    // Return the result
    return dayNumber;
  }
  
  // Example usage:
  const K = 123; // K-th day of the year
  const dayNumber = dayOfWeek(K);
  
  console.log(`The number of the day of the week for the ${K}-th day of the year is ${dayNumber}.`);
  