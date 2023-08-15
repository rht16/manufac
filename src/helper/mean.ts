export const calculateMean = (values: string[]) =>{
    const sum = values.reduce((acc, value) => acc + +value, 0);
    return sum / values.length;
  }