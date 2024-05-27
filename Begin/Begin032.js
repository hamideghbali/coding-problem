// A centigrade temperature T is given. Convert it into a Fahrenheit
// temperature. The centigrade temperature TC and the Fahrenheit temperature TF
// are connected as:

// TC = (TF − 32)·5/9.

// Function to convert a temperature from Celsius to Fahrenheit
function celsiusToFahrenheit(TC) {
    // Convert Celsius to Fahrenheit using the conversion factor (9/5) and the offset (32)
    const TF = (TC * 9/5) + 32;
    
    // Return the value in Fahrenheit
    return TF;
  }
  
  // Example usage:
  const TC = 37; // You can change this value to any temperature in Celsius
  const TF = celsiusToFahrenheit(TC);
  
  console.log(`For T_C = ${TC}°C, the value in Fahrenheit is ${TF.toFixed(2)}°F.`);
  