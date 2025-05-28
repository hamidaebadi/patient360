import React from "react";
import {Line} from 'react-chartjs-2'
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    plugins,
    scales,
} from 'chart.js'

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const HeartRateChart = ({data}) => {
    
    const chartData = {
        labels: data.map(d => d.time),
        datasets: [
            {
                label: 'Heart Rate (BPM)',
                data: data.map(d=>d.bpm),
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.1)',
                fill: true,
                tension: 0.4,
                pointRadius: 4,
                pointHoverRadius: 6,
            }
        ]
    }

    const options = {
        responsive: true,
        plugins:{
            legend: {position: 'top'},
            title:{
                display: true,
                text: "Heart Rate Over 24 Hours",
                font: {size: 18}
            }
        },
        scales: {
            y:{
                min: 50,
                max:120,
                title: {
                    display: true,
                    text: 'Beats Per Minute(BPM)'
                }
            },
            x:{
                title:{
                    display: true,
                    text: 'Time (Hour)'
                }
            }
        }
    }

    return(
        <>
        <Line data={chartData} options={options}/>
        </>
    )
}

export default HeartRateChart