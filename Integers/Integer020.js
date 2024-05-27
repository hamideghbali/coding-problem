// From the beginning of the day N seconds have passed (N is integer). Find
// an amount of full hours passed from the beginning of the day.

// Function to find the amount of full hours passed from the beginning of the day
function fullHoursPassed(N) {
    // Divide the number of seconds by 3600 (number of seconds in an hour) to get the amount of full hours
    const hours = Math.floor(N / 3600);
    
    // Return the result
    return hours;
  }
  
  // Example usage:
  const N = 7200; // Number of seconds
  const hoursPassed = fullHoursPassed(N);
  
  console.log(`The amount of full hours passed from the beginning of the day is ${hoursPassed}.`);
  