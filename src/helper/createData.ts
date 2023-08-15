
import { calculateMean } from "./mean";
import { calculateMedian } from "./median";
import { calculateMode } from "./mode";
import {WineData} from '../const/dataset.interface'
import { ClassStatistics } from '../const/staticData.interface'

  export const getClassWiseStatistics = (
    data: WineData[],
    attribute: string,
  ): ClassStatistics => {
    // initial data decalaration with types
    const calculatedData: ClassStatistics = {
      mean: {},
      median: {},
      mode: {},
      headers:{}
    };
  
    // okay, lets loop through the data
    data.forEach((entry) => {
      // extract the selected property
      const property = entry["Alcohol"].toString();

      // lets check the unique data in calculatedData for headers,mean,median and mode one by one
      // if not present then make one empty arr for the particular property then push others in the same arr
      if(!Object.keys(calculatedData.headers).includes(property.toString())){
        calculatedData.headers[property] = 1
      }
      if (!calculatedData.mean[property]) {
        calculatedData.mean[property] = [];
      }
      calculatedData.mean[property].push(entry[attribute].toString());

      if (!calculatedData.median[property]) {
        calculatedData.median[property] = [];
      }
      calculatedData.median[property].push(entry[attribute].toString());

      if (!calculatedData.mode[property]) {
        calculatedData.mode[property] = [];
      }
      calculatedData.mode[property].push(entry[attribute].toString());
    });
  
    // now lets calucalate mean for each dataset
    for (const property in calculatedData.mean) {
      const classData = calculatedData.mean[property];
      calculatedData.mean[property] = [calculateMean(classData).toFixed(3)];
    }
  
    for (const property in calculatedData.median) {
      const classData = calculatedData.median[property];
      calculatedData.median[property] = [calculateMedian(classData).toString()];
    }
  
    for (const property in calculatedData.mode) {
      const classData = calculatedData.mode[property];
      calculatedData.mode[property] = [calculateMode(classData).toString()];
    }
  
    // we are set to return the created data for the table
    return calculatedData;
  };

