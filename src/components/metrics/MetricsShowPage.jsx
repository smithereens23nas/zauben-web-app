import React from "react";
import { Line } from "react-chartjs-2";

function LineChart() {
  
  return (
    <div className="chart-positioning">
 <Line
          const options = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: "#ffffff",
                    }
                },
                title: {
                    display: true,
                    text: 'License Usage',
                    color: "#ffffff"
                },
            },
            scales: {
                yAxes: {
                    ticks: {
                        color: "#ffffff"
                    },
                },
                xAxes: {
                    ticks: {
                        color: "#ffffff"
                    },
                }
            },
        };
        />
          datasets: [
    {
      label: "Rainfall",
      fill: true,
      lineTension: 0,
      backgroundColor: "rgb(15, 36, 52)",
      borderColor: "rgb(27, 132, 204)",
      borderWidth: 5,
      fontColor: "orange",
      data: [65, 59, 80, 81, 56, 35, 25, 76, 46, 83, 30, 69],
    },
  ],
};
    </div>
  );
}

export default LineChart;