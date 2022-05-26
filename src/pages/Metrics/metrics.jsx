import React from "react";
import "./metrics.css";
import { Line } from "react-chartjs-2";
import { Chart, Filler } from "chart.js";
import { MdOutlineDateRange } from "react-icons/md";
import { FiWind } from "react-icons/fi";

function chartData() {
    return {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          fillColor: 'rgba(220,220,220,0.2)',
          strokeColor: 'rgba(220,220,220,1)',
          pointColor: 'rgba(220,220,220,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(220,220,220,1)',
          data: [65, 59, 80, 81, 56, 55, 40],
        }
      ]
    }
  }
  
  const options = {
    scaleShowGridLines: true,
    scaleGridLineColor: 'rgba(0,0,0,.05)',
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
    legendTemplate: '<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
  }
  
  const styles = {
    graphContainer: {
      border: '1px solid black',
      padding: '15px'
    }
  }
  
  class Metrics extends React.Component {
  
    constructor(props) {
      super(props)
      this.state = {
        data: chartData()
      }
    }
  
    render() {
      return (
        <div className="metric-show-page-bg">
        <div className="container-progress-card">
          <div className="progress-card-item">
            <div className="box">
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
                <h2>
                  <a className="text-style" href="/performance">
                    Indoor Air Quality
                  </a>
                </h2>
              </div>
            </div>
            <p className="para-description">
              Indoor air quality within and around buildings and structures. IAQ
              is known to affect the health, confort, and well-being of building
              occupants.
            </p>
          </div>
        </div>
        <div style={styles.graphContainer}>
          <Line data={this.state.data}
            options={options}
            width="600" height="250"/>
        </div>
        </div>
      )
    }
  }


export default Metrics;
