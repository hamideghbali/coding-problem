// From the beginning of the day N seconds have passed (N is integer). Find
// an amount of full minutes passed from the beginning of the last hour.

// Function to find the amount of full minutes passed from the beginning of the last hour
function fullMinutesPassedFromLastHour(N) {
    // Find the total seconds passed from the beginning of the day
    const totalSecondsPassed = N;
  
    // Find the seconds passed in the current hour
    const secondsInCurrentHour = totalSecondsPassed % 3600;
  
    // Find the amount of full minutes passed from the beginning of the last hour
    const fullMinutes = Math.floor(secondsInCurrentHour / 60);
  
    // Return the result
    return fullMinutes;
  }
  
  // Example usage:
  const N = 4500; // Number of seconds
  const minutesPassed = fullMinutesPassedFromLastHour(N);
  
  console.log(`The amount of full minutes passed from the beginning of the last hour is ${minutesPassed}.`);
  