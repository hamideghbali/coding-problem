// A file size is given in bytes. Find the amount of full Kbytes of this size
// (1 K = 1024 bytes). Use the operator of integer division.

// Function to find the amount of full kilobytes in a file size given in bytes
function fullKilobytes(F) {
    // Use integer division to find the number of full kilobytes
    const kilobytes = Math.floor(F / 1024);
    
    // Return the result
    return kilobytes;
  }
  
  // Example usage:
  const F = 56789; // File size in bytes
  const kilobytes = fullKilobytes(F);
  
  console.log(`The amount of full kilobytes in ${F} bytes is ${kilobytes} kilobytes.`);
  