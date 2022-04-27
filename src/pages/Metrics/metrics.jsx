import React from "react";
import "./metrics.css";
import { Line } from "react-chartjs-2";
import { Chart, Filler } from "chart.js";
const state = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Rainfall",
      fill: true,
      lineTension: 0,
      backgroundColor: "rgb(15, 36, 52)",
      borderColor: "rgb(27, 132, 204)",
      borderWidth: 5,
      data: [65, 59, 80, 81, 56, 35, 25, 76, 46, 83, 30, 69],
    },
  ],
};

const Metrics = () => {
  return (
    <div className="chart-bg">
      <Line
        data={state}
        options={{
            responsive: true,
          title: {
            display: true,
            text: "Average Rainfall per month",
            fontSize: 20,
            fontColor: "red",
          },
          elements: {
              point:{
                  radius: 0
              }
          }, 
          legend: {
            display: true,
            position: "right",
            fontColor: "orange",

            labels: {
              fontColor: "white",
              fontSize: 18,
            }
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
              ticks: {
                color: 'white'
              }
            },
            y: {
              grid: {
                display: false,
              },
              ticks: {
                color: 'white'
              }
            },
          },
        }}
      />
    </div>
  );
};

export default Metrics;
