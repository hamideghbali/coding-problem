// Days of week are numbered as: 1 — Monday, 2 — Tuesday, ..., 6 —
// Saturday, 7 — Sunday. An integer K in the range 1 to 365 and an integer N in
// the range 1 to 7 are given. Find the number of day of week for K-th day of year
// provided that in this year January 1 was N-th day of week.

// Function to find the number of the day of the week for the K-th day of the year
function dayOfWeek(K, N) {
    // Find the number of the day of the week for January 1st
    const january1st = N;
  
    // Find the number of the day of the week for the K-th day of the year
    const dayNumber = ((january1st - 1) + (K - 1)) % 7 + 1;
  
    // Return the result
    return dayNumber;
  }
  
  // Example usage:
  const K = 123; // K-th day of the year
  const N = 3;   // January 1st was the 3rd day of the week (Tuesday)
  const dayNumber = dayOfWeek(K, N);
  
  console.log(`The number of the day of the week for the ${K}-th day of the year is ${dayNumber}.`);
  