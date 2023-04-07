import React, { useRef, useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';

const Views = () => {
    const chartRef = useRef(null);

    const apiUrl = 'https://fe-task-api.mainstack.io/';

    const [apiData, setApiData] = useState({});
    let apiDataLabels = [];
    let apiDatasets = [];

    useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get(apiUrl);
            setApiData(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    fetchData();
    }, []);

    const views = apiData?.graph_data?.views;

    if (views) {
        apiDataLabels = Object.keys(views).map((dateStr) => {
            const date = new Date(dateStr);
            const day = date.getDate();
            const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date);
            return `${day}${daySuffix(day)} ${month}`;
        });
        console.log('data labels:', apiDataLabels);
    }

    if (views) {
        apiDatasets = Object.values(views);
        console.log('data sets:', apiDatasets);
    }

    useEffect(() => {
        if (apiDataLabels.length > 0 && apiDatasets.length > 0) {
            const chartElement = chartRef.current;

            const chart = new Chart(chartElement, {
                type: 'line',
                data: {
                    labels: apiDataLabels,
                    datasets: [
                        {
                            label: 'Views',
                            data: apiDatasets,
                            borderColor: 'rgba(255, 84, 3, 1)',
                            borderWidth: 1,
                            pointStyle: false,
                            fill: true,
                            backgroundColor: 'rgba(255, 84, 3, 0.2)',
                        },
                    ],
                },
                options: {
                    plugins: {
                        legend: false
                    },
                    scales: {
                        y: {
                            border: {
                                display: false,
                                dash: [4, 4]
                            }
                        },
                        x: {
                            border: {
                                display: false
                            },
                            grid: {
                                display: false,
                            },
                        },
                    },
                },
            });

            return () => {
                chart.destroy();
            };
        }
    }, [apiDataLabels, apiDatasets]);

    return (
        <div className='line-chart'>
            <canvas ref={chartRef} />
        </div>
    );
};

function daySuffix(day) {
    if (day >= 11 && day <= 13) {
    return 'th';
    }
    switch (day % 10) {
        case 1:
            return 'st';
        case 2:
            return 'nd';
        case 3:
            return 'rd';
        default:
            return 'th';
    }
}

export default Views;
