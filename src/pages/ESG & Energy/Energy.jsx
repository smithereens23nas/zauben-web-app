import React from "react";
import "./Energy.css";
import DoughnutChart from "./DonutGraph";
import EnergyDateNav from "../../components/EnergyDateNav/EnergyDateNav";
import EnergyBarChart from "./EnergyBarChart";
import { Bar, Doughnut } from "react-chartjs-2";
import { GiCircleForest } from "react-icons/gi";
import { FaSwimmer } from "react-icons/fa";

function chartData() {
  return {
    labels: ["Energy Savings", "Winter Savings", "AC Savings", "Gas"],
    datasets: [
      {
        label: "My First dataset",
        fill: true,
        backgroundColor: "rgba(77,220,139,255)",
        hoverBackgroundColor: "rgba(77,220,139,255)",
        strokeColor: "rgba(220,220,220,1)",
        pointColor: "rgba(220,220,220,1)",
        borderColor: "rgb(27, 132, 204)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(220,220,220,1)",
        data: [3.2, 5, 11.1, 0.4],
        elements: {
          point: {
            radius: 0,
          },
        },
      },
    ],
  };
}
const decimals = 0;
const options = {
  scaleShowGridLines: true,
  scaleGridLineColor: "rgba(0,0,0,.05)",
  scaleGridLineWidth: 1,
  scaleShowHorizontalLines: true,
  scaleShowVerticalLines: true,
  bezierCurve: true,
  bezierCurveTension: 0.4,
  pointDot: true,
  pointDotRadius: 4,
  pointDotStrokeWidth: 1,
  pointHitDetectionRadius: 20,
  datasetStroke: true,
  datasetStrokeWidth: 2,
  datasetFill: true,
  borderColor: "blue",
  scales: {
    x: {
      ticks: {
        color: "white",
      },
    },
    y: {
      ticks: {
        color: "white",
        beginAtZero: true,
        // Include a dollar sign in the ticks
        callback: function (value, index, values) {
          return "$" + value.toFixed(decimals);
        },
      },
    },
  },
  legendTemplate:
    '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
};

const styles = {
  graphContainer: {
    padding: "25px",
    margin: "50px 200px 15px 200px",
  },
};

class Energy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: chartData(),
    };
  }

  render() {
    return (
      <div className="energy-page-bg">
        <div className="energy-title-container">
          <h2>ESG & Energy</h2>
        </div>
        <EnergyDateNav />
        <div className="energy-savings-container">
          <div className="energy-title">
            {" "}
            <h3>Energy Savings</h3>
          </div>
          <div className="savings-items">
            <h4 className="energy-item">
              <span>75%</span>AC Savings
            </h4>
            <h4 className="energy-item">
              <span>25%</span>Heat Savings
            </h4>
            <h4 className="energy-item">
              <span>11%</span>Gas Savings
            </h4>
            <h4 className="energy-item">
              <span>2%</span>Electric Savings
            </h4>
          </div>
        </div>
        <div className="est-savings-container">
          <h3 className="est-title">Estimated Savings</h3>
          <div style={styles.graphContainer}>
            <Bar
              data={this.state.data}
              options={options}
              width="500"
              height="175"
            />
          </div>
          <div className="price-container">
            <h1 className="price">$19.70</h1>
            <h5 className="sq-foot">Per Square Foot</h5>
          </div>
        </div>
        <div className="energy-stats-section">
          <h2 className="energy-stats">Carbon Offset</h2>
          <div className="num-icon-container">
            <h1 className="num-styles">10</h1>
            <div className="icon-item">
              <GiCircleForest />
            </div>
          </div>
          <h4 className="despcription-savings-item">Acres of forest worth</h4>
        </div>
        <div className="energy-stats-section">
          <h2 className="energy-stats">Biodiversity</h2>
          <div className="num-icon-container">
            <h1 className="num-styles">56,382</h1>
          </div>
          <h4 className="despcription-savings-item">Native Plants</h4>
        </div>

        <div className="energy-stats-section">
          <h2 className="energy-stats">Stormwater Retention</h2>
          <div className="num-icon-container">
            <h1 className="num-styles">281</h1>
            <div className="icon-item swimming-icon">
              <FaSwimmer />
            </div>
          </div>

          <h4 className="description-savings-item">Olympic Pools</h4>
        </div>
        <div className="energy-stats-section">
          <h2 className="energy-stats">Urban Ecology</h2>
          <div className="num-icon-container">
            <p className="para-styles">Westbank Campus hosts about 100 different plant species, including 15 species of trees, 45 shrubs and 34 types of perennials.</p>
            <div className="donut-legend">
            <DoughnutChart />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Energy;
