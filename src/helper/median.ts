export const calculateMedian = (values: string[]) =>{
    // lets sort first the data
    const sortedValues = values.slice().sort((a, b) => +a - +b);

    // find the mid element
    const mid = Math.floor(sortedValues.length / 2);
  
    // lets find the length of the data arr, if its even
    if (sortedValues.length % 2 === 0) {
      return (+sortedValues[mid - 1] + +sortedValues[mid]) / 2;
    } else {
      // odd
      return (+sortedValues[mid]).toFixed(3);
    }
  }