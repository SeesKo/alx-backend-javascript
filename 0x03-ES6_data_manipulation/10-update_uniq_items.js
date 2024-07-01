export default function updateUniqueItems(map) {
  // Check if map is an instance of Map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate through the map entries
  for (const [key, value] of map.entries()) {
    if (value === 1) {
      map.set(key, 100); // Update quantity to 100 for items with initial quantity of 1
    }
  }
}
