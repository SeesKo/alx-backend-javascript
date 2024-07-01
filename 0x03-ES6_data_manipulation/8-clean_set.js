export default function cleanSet(set, startString) {
  const parts = [];

  // Check for valid input parameters
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  // Iterate through each value in the Set
  for (const value of set.values()) {
    // Check if the value is a string and starts with startString
    if (typeof value === 'string' && value.startsWith(startString)) {
      // Extract the substring after startString
      const valueSubStr = value.substring(startString.length);

      // Check if the extracted substring is not empty and not equal to the original value
      if (valueSubStr && valueSubStr !== value) {
        parts.push(valueSubStr);
      }
    }
  }

  // Join parts array into a single string separated by '-'
  return parts.join('-');
}
