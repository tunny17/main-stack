import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const Views = () => {
    const chartRef = useRef(null);

    useEffect(() => {

        const chartElement = chartRef.current;

        const chart = new Chart(chartElement, {
            type: 'line',
            data: {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                datasets: [
                    {
                        label: 'Sales',
                        data: [150, 200, 100, 250, 175],
                        borderColor: 'rgba(255, 84, 3, 1)',
                        borderWidth: 1,
                        pointStyle: false,
                        fill: true,
                        backgroundColor: 'rgba(255, 84, 3, 0.2)'
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        grid: {
                            borderDash: [10]
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                    },
                },
            },
        });

        return () => {
            chart.destroy();
        };

    }, []);

    return (
        <div>
            <canvas ref={chartRef} />
        </div>
    );
};

export default Views;
