import {Doughnut} from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'
  import { Chart } from 'react-chartjs-2'
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )

function DoughnutChart() {

const data = {
    labels: ['Trees','Native Plants','Shrubs','Prerenials','Birds'],
    datasets: [
        {
            label: 'Attendance for Week 1',
            data: [45,12,11,12,20],
            borderColor: ['rgba(128,128,128,0.2)'],
            backgroundColor: ['rgba(153,0,255,255)',
            'rgba(255,153,0,255)',
            'rgba(255,111,49,255)',
            'rgba(255,0,0,255)',
            'rgba(77,220,139,255)' ],
            pointBackgroundColor: 'rgba(255,206,86,0.2)',
            backgroundImage: 'lightblue url("https://www.chartjs.org/img/chartjs-logo.svgf") no-repeat fixed center'
        }
        
    ]
}

const options = {
    plugins: {
        
        title: {
            display: true,
            drawBorder: true,
            color:'white',
            font: {
                size:34,
            },
            padding:{
                // left:,
            },
            responsive:true,
            animation:{
                animateScale: true,
                color: true            }
        },
        legend: {
            position: 'left',
            labels: {
                usePointStyle: true,
                color: "white",
            }}
    }
    
}
    return (
        <div>
           <Doughnut data={data} options={options} />
        </div>
    )
}

export default DoughnutChart