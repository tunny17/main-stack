import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const Source = () => {
  const chartRef = useRef(null);

  useEffect(() => {

    const chartElement = chartRef.current;

    const chart = new Chart(chartElement, {
      type: 'doughnut',
      data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        datasets: [
          {
            label: 'Sales',
            data: [150, 200, 100, 250, 175],
            backgroundColor: [
              'rgba(89, 158, 234, 1)',
              'rgba(132, 79, 246, 1)',
              'rgba(240, 148, 104, 1)',
              'rgba(250, 183, 10, 1)',
              'rgba(15, 183, 122, 1)'
            ],
            hoverOffset: 4
          },
        ],
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

export default Source;
