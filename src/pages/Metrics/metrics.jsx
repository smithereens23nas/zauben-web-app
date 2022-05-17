import React from "react";
import "./metrics.css";
import { Line } from "react-chartjs-2";
import { Chart, Filler } from "chart.js";
import { MdOutlineDateRange } from "react-icons/md";
import {FiWind} from "react-icons/fi"
import { CalendarComponent } from "@syncfusion/ej2-react-calendars";
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
      <div className="metric-show-page-bg">
    <div className="container-progress-card">
    <div class="progress-card-item">
      <div class="box">
        <div className="percent-style">
          <svg className="metric-svg">
            <circle cx="70" cy="70" r="70"></circle>
            <circle cx="72" cy="72" r="70"></circle>
          </svg>
          <div className="number-style">
            <h2>
              86<span>%</span>
            </h2>

            <FiWind className="icon-style" />
          </div>
        </div>
        <div>
          <h2><a className="text-style" href="/performance">Indoor Air Quality</a></h2>
        </div>
      </div>
      <p className="para-description">
        Indoor air quality within and around buildings and structures. IAQ
        is known to affect the health, confort, and well-being of building
        occupants.
      </p>
    </div>
    </div>
    
    {/* < CalendarComponent /> */}



    <div className="chart-bg">
      <Line
        data={state}
        options={{
            responsive: true,
            maintainAspectRatio: false,
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
          options: {
          scales: {
            x: {
                  title:  {
                      display: true,
                      text: 'Chart Title',
                      fontColor: 'orange',
                      fontSize: 20
                   },
              grid: {
                display: false,
              },
              ticks: {
                color: 'white'
              },
              
          },
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
    </div>
  );
};

export default Metrics;
