import { WineData } from '../const/dataset.interface';

export const createGamma = (dataSet: WineData[], Property: string) => {
  dataSet.forEach((entry: WineData) => {
    // lets apply our formula for calucating the gamma using example property
    entry[Property] = (+entry.Ash * entry.Hue) / entry.Magnesium;
  });
  return dataSet
}