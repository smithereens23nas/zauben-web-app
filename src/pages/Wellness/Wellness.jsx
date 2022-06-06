import React from "react";
import "./Wellness.css"
import WellnessDateNav from "../../components/WellnessDateNav/WellnessDateNav"
import { Bar } from "react-chartjs-2";
import { FiWind } from "react-icons/fi";

function chartData() {
    return {
      labels: ["Productivity", "Creativity", "Stress Levels", "Mood Level"],
      datasets: [
        {
          
          fill: true,
          backgroundColor: ['rgba(77,220,139,255)',
            'rgba(1,180,205,255)',
            'rgba(254,255,0,255)',
            'rgba(153,0,255,255)',
             ],
             hoverBackgroundColor: ['rgba(77,220,139,255)',
             'rgba(1,180,205,255)',
             'rgba(254,255,0,255)',
             'rgba(153,0,255,255)',
              ],          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          borderColor: "rgb(27, 132, 204)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: [21, 18, 32, 38],
          elements: {
            point: {
              radius: 0,
            },
          },
        },
      ],
    };
  }

  const options = {
    indexAxis: 'y',
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      bar: {
        borderWidth: 0,
      }
    },
      plugins: {
          legend: {
             display: false
          }
      },
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
         
        },
      },
    },
    legendTemplate:
      '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
  };
  
  const styles = {
    graphContainer: {
      padding: "25px",
      margin: "50px 100px 15px 100px",
    },
  };
  
  class Wellness extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: chartData(),
      };
    }

render(){
  return (
<div className="energy-page-bg">
        <div className="energy-title-container">
          <h2>Wellness</h2>
        </div>
        <WellnessDateNav />
        <div className="energy-savings-container">
          <div className="energy-title">
            <h3>Health & Wellness</h3>
          </div>
          <div className="savings-items">
            <h4 className="energy-item">
              <span className="savings-num">21%</span>Productivity
            </h4>
            <h4 className="energy-item">
              <span className="savings-num">18%</span>Creativity
            </h4>
            <h4 className="energy-item">
              <span className="savings-num">32%</span>Stress Levels
            </h4>
            <h4 className="energy-item">
              <span className="savings-num">38%</span>Mood Level
            </h4>
          </div>
        </div>
        <div className="est-savings-container">
          <h3 className="est-title">Wellness Surveys</h3>
          <div style={styles.graphContainer}>
            <Bar
              data={this.state.data}
              options={options}
              width="500"
              height="175"
            />
          </div>
          
        </div>
        <div className="urban-ecology-section">
          <div className="urban-ecology-text">
            <h2 className="energy-stats">Indoor Air Quality</h2>
            <div className="num-icon-container">
              <p className="para-styles">
                Indoor air quality within and arouond buildings and structures. IAQ is known to affect the health, comfort, and well-being of building occupants.
              </p>
            </div>
            </div>
            <div class="progress-card air-quality-metric">
          <div class="box">
            <div className="percent">
              <svg className="metric-svg">
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="72" cy="72" r="70"></circle>
              </svg>
              <div className="number">
                <h2>
                  86<span>%</span>
                </h2>

                <FiWind className="icon-style" />
              </div>
            </div>
            <div>
              <h2><a className="text" href="/performance">Indoor Air Quality</a></h2>
            </div>
          </div>

            </div>
          
        </div>
        </div>
  );
}};

export default Wellness;

