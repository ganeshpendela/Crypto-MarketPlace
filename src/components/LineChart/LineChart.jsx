import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';
import './LineChart.css';

const LineChart = ({ historicalData }) => {
  const [data, setData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    let dataCopy = [["Date", "Prices"]];
    if (historicalData.prices) {
      historicalData.prices.map((item) => {
        dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0, -5)}`, item[1]]);
      });
      setData(dataCopy);
    }
  }, [historicalData]);

  return (
    <div className="chart-container">
      <Chart
        chartType='LineChart'
        data={data}
        width="100%"
        height="100%"
        legendToggle
        options={{
          hAxis: {
            textStyle: { fontSize: 12 }
          },
          vAxis: {
            textStyle: { fontSize: 12 }
          },
          legend: {
            position: 'top',
            textStyle: { fontSize: 12 }
          }
        }}
      />
    </div>
  );
};

export default LineChart;
