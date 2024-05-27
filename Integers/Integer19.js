// From the beginning of the day N seconds have passed (N is integer). Find
// an amount of full minutes passed from the beginning of the day.

// Function to find the amount of full minutes passed from the beginning of the day
function fullMinutesPassed(N) {
    // Divide the number of seconds by 60 to get the amount of full minutes
    const minutes = Math.floor(N / 60);
    
    // Return the result
    return minutes;
  }
  
  // Example usage:
  const N = 3600; // Number of seconds
  const minutesPassed = fullMinutesPassed(N);
  
  console.log(`The amount of full minutes passed from the beginning of the day is ${minutesPassed}.`);
  