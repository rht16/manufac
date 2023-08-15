import React, { useEffect, useState } from 'react';
import '../styles/table.css'
import dataSet from '../assets/data.json'
import { getClassWiseStatistics } from '../helper/createData';
import { createGamma } from '../helper/gamma';
import { anlysisData } from '../const/anlysisData.interface'

const Table: React.FC = () => {
  // lets declare required states
  const [data, setData] = useState<Record<string, anlysisData>>({});;
  const [gammaData, setGammaData] = useState<Record<string, anlysisData>>({});;
  const [tableHeaders, setTableHeaders] = useState<any[]>([])
  useEffect(() => {
    // calling the getClassWiseStatistics for getting the data for table
    const flavanoidsData: anlysisData = getClassWiseStatistics(dataSet, 'Flavanoids')
    const gamaInsertedData = createGamma(dataSet, 'Gamma')

    // lets store tables header using dataset
    const tableHeaders = Object.keys(flavanoidsData.headers || {});

    // trying to create data after inserting new property named as Gamma in each dataset
    const caluculatedGama: anlysisData = getClassWiseStatistics(gamaInsertedData, 'Gamma')

    // delete the unwanted attribute
    delete caluculatedGama.headers

    // set the states
    setGammaData(caluculatedGama)
    setTableHeaders(tableHeaders)

    // delete the unwanted attribute
    delete flavanoidsData.headers
    setData(flavanoidsData)
  }, []);

  return (
    <div className='App-header'>
      <h3>Flavanoids Table</h3>
      <div className="table-box">
        <table>
          <thead>
            <tr>
              <th>Measure</th>
              {tableHeaders.map((name) => (
                <>
                  <th key={name}>{name}</th>
                </>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.keys(data).map((row) => (
              <tr key={row}>
                <td>Flavanoids {row}</td>
                {tableHeaders.map((value, index) => (
                  <td key={index}>{data[row][value]}</td>
                ))}
              </tr>
            ))}

          </tbody>

        </table>
      </div>

      <h3>Gamma Table</h3>
      <div className="table-box">
        <table>
          <thead>
            <tr>
              <th>Measure</th>
              {tableHeaders.map((name) => (
                <>
                  <th key={name}>{name}</th>
                </>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.keys(gammaData).map((row) => (
              <tr key={row}>
                <td>Gamma {row}</td>
                {tableHeaders.map((value, index) => (
                  <td key={index}>{gammaData[row][value]}</td>
                ))}
              </tr>
            ))}

          </tbody>

        </table>
      </div>
    </div>
  );
};

export default Table;
