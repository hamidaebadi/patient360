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

const BloodPressureChart = ({data}) => {

    const chartData = {
        labels: data.map(entry => new Date(entry.timestamp).toLocaleString("en-GB", {
            weekday: "short",
            day: "2-digit",
            month: "short"
        })),
        datasets: [
            {
                label: "Systolic (mmHg)",
                data: data.map(entry => entry.systolic),
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                tension: 0.3,
                fill: false,
            },

            {
                label: "Diastolic (mmHg)",
                data: data.map(entry => entry.diastolic),
                borderColor: "rgb(54, 162, 235)",
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                tension: 0.3,
                fill: false,
            },
        ]
    }

    const chartOpetions = {
        responsive: true,
        plugins:{
            legend: {position: 'top'},
            title: {display: true, text:"Blood Pressure Over One Week"}
        },

        scales:{
            x: {
                title: {display: true, text:"Time"},
                ticks: {autoSkip: true, maxRotaition: 45, minRotation:45}
            },

            y: {
                title: { display: true, text: "Pressure (mmHg)" },
                min: 50,
                max: 180,
            },


        }
    }
    return(
        <>
        <Line data={chartData} options={chartOpetions}/>
        </>
    )
}

export default BloodPressureChart