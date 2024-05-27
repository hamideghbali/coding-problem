// Days of week are numbered as: 0 — Sunday, 1 — Monday, 2 —
// Tuesday, ..., 6 — Saturday. An integer K in the range 1 to 365 is given. Find
// the number of day of week for K-th day of year provided that in this year
// January 1 was Monday.

// Function to find the number of the day of the week for the K-th day of the year
function dayOfWeek(K) {
    // January 1st was Monday, so the number of Monday is 1
    const monday = 1;
  
    // Find the number of the day of the week for the K-th day of the year
    const dayNumber = (monday + (K - 1)) % 7;
  
    // Return the result
    return dayNumber;
  }
  
  // Example usage:
  const K = 123; // K-th day of the year
  const dayNumber = dayOfWeek(K);
  
  console.log(`The number of the day of the week for the ${K}-th day of the year is ${dayNumber}.`);
  