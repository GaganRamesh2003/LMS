import React, { useEffect, useRef, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './Statistics.css';

ChartJS.register(ArcElement, Tooltip, Legend);

function Statistics({ averageProgress, completedPercentage, totalCourses }) {
    const chartRef = useRef(null);
    const [chartInstance, setChartInstance] = useState(null);

    // Prepare the data for the doughnut chart
    const data = {
        datasets: [{
            data: [completedPercentage, 100 - completedPercentage], // Completed vs Pending
            backgroundColor: ['#F9C748', '#2D3A7C'],
            hoverBackgroundColor: ['#F9C748', '#2D3A7C'],
            borderWidth: 0,
        }],
        labels: ['Completed Courses', 'Pending Courses'],
    };

    const options = {
        cutout: '80%',
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
            },
        },
        maintainAspectRatio: false,
    };

    useEffect(() => {
        const chart = chartRef.current.chart;

        if (chart) {
            setChartInstance(chart);
        }

        return () => {
            if (chartInstance) {
                chartInstance.destroy();
            }
        };
    }, [chartInstance]);

    return (
        <div className="statistics">
            <h2>Statistics</h2>
            <p>Average Progress</p>
            <div className="chart-container">
                <Doughnut ref={chartRef} data={data} options={options} />
                <div className="chart-text">
                    <span>{averageProgress.toFixed(2)}%</span> {/* Show average progress */}
                    <p>Average Progress of {totalCourses} Courses</p>
                </div>
            </div>

            {/* <div className="course-completion">
                <p><strong>{completedPercentage.toFixed(2)}%</strong> of the courses are completed.</p>
            </div> */}
        </div>
    );
}

export default Statistics;
