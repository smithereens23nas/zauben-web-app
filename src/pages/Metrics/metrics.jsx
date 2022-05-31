import React from "react";
import "./metrics.css";
import { Line } from "react-chartjs-2";
import { Chart, Filler } from "chart.js";
import { MdOutlineDateRange } from "react-icons/md";
import { FiWind } from "react-icons/fi";
import DateNav from "../../components/DateNav/DateNav";

function chartData() {
    return {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          fill: true,
          backgroundColor: "rgb(15, 36, 52)",
          strokeColor: 'rgba(220,220,220,1)',
          pointColor: 'rgba(220,220,220,1)',
          borderColor: "rgb(27, 132, 204)",
          borderWidth: 7,
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(220,220,220,1)',
          data: [65, 59, 80, 81, 56, 55, 40],
          elements: {
            point:{
                radius: 0
            }
        }
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
    scales: {
        x: {
          ticks: {
            color: 'white'
          }
        },
        y: {
          ticks: {
            color: 'white',
            beginAtZero: true
          }
        },

      },
    legendTemplate: '<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
  }
  
  const styles = {
    graphContainer: {
      border: '1px solid black',
      padding: '15px',
      margin: "150px 100px",
      
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
          <DateNav />
        <div className="container-progress-card">
            

              <div>
                <h2>
                  <a className="text-style" href="/performance">
                    Indoor Air Quality
                  </a>
                </h2>
            
            </div>
            <p className="metrics-description">
              Indoor air quality within and around buildings and structures. IAQ
              is known to affect the health, confort, and well-being of building
              occupants.
            </p>
          
        </div>
        <div style={styles.graphContainer}>
          <Line data={this.state.data}
            options={options}
            width="500" height="175"/>
        </div>
        </div>
        
      )
    }
  }


export default Metrics;
