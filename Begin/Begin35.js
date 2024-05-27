// A boat velocity in still water is V km/h, river flow velocity is U km/h
// (U < V). The boat goes along the lake during T1 h and then goes against stream
// of the river during T2 h. Positive numbers V, U, T1, T2 are given. Find the
// distance S covered by the boat (distance = time · velocity).

// Function to calculate the distance covered by the boat
function calculateDistance(V, U, T1, T2) {
    // Calculate the distance covered along the lake
    const S1 = V * T1;
    
    // Calculate the distance covered against the stream
    const S2 = (V - U) * T2;
    
    // Calculate the total distance covered
    const S = S1 + S2;
    
    // Return the total distance
    return S;
  }
  
  // Example usage:
  const V = 10; // Velocity of the boat in still water (km/h)
  const U = 5; // Velocity of the river flow (km/h)
  const T1 = 2; // Time spent going along the lake (hours)
  const T2 = 1; // Time spent going against the stream (hours)
  const distance = calculateDistance(V, U, T1, T2);
  
  console.log(`The distance covered by the boat is ${distance} km.`);
  