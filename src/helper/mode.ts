
export const calculateMode = (values: string[]) => {
  // creating the hash map for storing unique dataset as key
  const frequencyMap = new Map();
  let maxFrequency = 0;
  let modeValue = 0;

  values.forEach(value => {
    const frequency = (frequencyMap.get(value) || 0) + 1;
    frequencyMap.set(value, frequency);

    // capturing the max occuring
    if (frequency > maxFrequency) {
      maxFrequency = frequency;
      modeValue = +value;
    }
  });

  // all set to return the calculated mode value
  return modeValue.toFixed(3);
}
