'use client'
import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Day", "", "", "", ""],
  ["Mon", 20, 28, 38, 45],
  ["Tue", 31, 38, 55, 66],
  ["Wed", 50, 55, 77, 80],
  ["Thu", 77, 77, 66, 50],
  ["Fri", 68, 66, 22, 15],
  ["Sat", 50, 55, 77, 80],
  ["Sun", 50, 95, 27, 12],
  ["Mon", 20, 28, 38, 45],
  ["Tue", 31, 38, 55, 66],
  ["Wed", 50, 55, 77, 80],
  ["Thu", 77, 77, 66, 50],
  ["Fri", 68, 66, 22, 15],
  ["Sat", 50, 55, 77, 80],
  ["Sun", 50, 95, 27, 12],
  ["Mon", 20, 28, 38, 45],
  ["Tue", 31, 38, 55, 66],
  ["Wed", 50, 55, 77, 80],
  ["Thu", 77, 77, 66, 50],
  ["Fri", 68, 66, 22, 15],
  ["Sat", 50, 55, 77, 80],
  ["Sun", 50, 95, 27, 12],
  ["Mon", 20, 28, 38, 45],
  ["Tue", 31, 38, 55, 66],
  ["Wed", 50, 55, 77, 80],
  ["Thu", 77, 77, 66, 50],
  ["Fri", 68, 66, 22, 15],
  ["Sat", 50, 55, 77, 80],
  ["Sun", 50, 95, 27, 12],
  ["Mon", 20, 28, 38, 45],
  ["Tue", 31, 38, 55, 66],
  ["Wed", 50, 55, 77, 80],
  ["Thu", 77, 77, 66, 50],
  ["Fri", 68, 66, 22, 15],
  ["Sat", 50, 55, 77, 80],
  ["Sun", 50, 95, 27, 12],
  ["Mon", 20, 28, 38, 45],
  ["Tue", 31, 38, 55, 66],
  ["Wed", 50, 55, 77, 80],
  ["Thu", 77, 77, 66, 50],
  ["Fri", 68, 66, 22, 15],
  ["Sat", 50, 55, 77, 80],
  ["Sun", 50, 95, 27, 12],
  ["Mon", 20, 28, 38, 45],
  ["Tue", 31, 38, 55, 66],
  ["Wed", 50, 55, 77, 80],
  ["Thu", 77, 77, 66, 50],
  ["Fri", 68, 66, 22, 15],
  ["Sat", 50, 55, 77, 80],
  ["Sun", 50, 95, 27, 12],
  ["Mon", 20, 28, 38, 45],
  ["Tue", 31, 38, 55, 66],
  ["Wed", 50, 55, 77, 80],
  ["Thu", 77, 77, 66, 50],
  ["Fri", 68, 66, 22, 15],
  ["Sat", 50, 55, 77, 80],
  ["Sun", 50, 95, 27, 12],
  ["Mon", 20, 28, 38, 45],
  ["Tue", 31, 38, 55, 66],
  ["Wed", 50, 55, 77, 80],
  ["Thu", 77, 77, 66, 50],
  ["Fri", 68, 66, 22, 15],
  ["Sat", 50, 55, 77, 80],
  ["Sun", 50, 95, 27, 12],
  ["Mon", 20, 28, 38, 45],
  ["Tue", 31, 38, 55, 66],
  ["Wed", 50, 55, 77, 80],
  ["Thu", 77, 77, 66, 50],
  ["Fri", 68, 66, 22, 15],
  ["Sat", 50, 55, 77, 80],
  ["Sun", 50, 95, 27, 12],
  ["Mon", 20, 28, 48, 76],
  ["Tue", 31, 38, 55, 556],
  ["Wed", 50, 55, 507, 80],
  ["Thu", 77, 77, 66, 50],
  ["Fri", 68, 66, 22, 15],
  ["Sat", 50, 55, 77, 100],
  ["Sun", 50, 95, 27, 12],
];

export const options = {
  legend: "none",
  bar: { groupWidth: "100%" },
  candlestick: {
    fallingColor: { strokeWidth: 0, fill: "#a52714" },
    risingColor: { strokeWidth: 0, fill: "#0f9d58" }, 
  },
  backgroundColor: 'none',
  hAxis: {
    
    textStyle: { color: 'white' }, 
  },
  vAxis: {
    textStyle: { color: 'white' }, 
    gridlines: { count: 0 },
  },
};
const DataChart = () => {
  return (
    <div>
       <Chart
      chartType="CandlestickChart"
      height="350px"
      data={data}
      options={options}
      className="border-b mt-[-2em] w-full "
    />
    </div>
  )
}

export default DataChart
