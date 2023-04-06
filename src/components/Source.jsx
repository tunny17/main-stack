import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import { Doughnut } from 'react-chartjs-2';

const apiUrl = 'https://fe-task-api.mainstack.io/';



const Source = () => {
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


  const views = apiData?.top_sources;


  if (views) {
    apiDataLabels = views.map(info => info.source);
  }

  if (views) {
    apiDatasets = views.map(info => info.percent);
  }
  


  const data = {
    labels: apiDataLabels,
    datasets: [
      {
        label: 'Views',
        data: apiDatasets,
        backgroundColor: [
          'rgba(89, 158, 234, 1)',
          'rgba(132, 79, 246, 1)',
          'rgba(240, 148, 104, 1)',
          'rgba(250, 183, 10, 1)',
          'rgba(15, 183, 122, 1)'
        ],
        hoverOffset: 4,
        borderWidth: 0
      },
    ],
  };


  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'left',
        align: 'center',
        labels: {
          'fontSize': 30,
          boxWidth: 10,
          boxHeight: 10,
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle',
          generateLabels: function(chart) {
            const { data } = chart;
            if (data.labels.length && data.datasets.length) {
              return data.labels.map(function(label, i) {
                const meta = chart.getDatasetMeta(0);
                const ds = data.datasets[0];
                const arc = ds.backgroundColor[i]; // get background color from _view property
                const custom = {
                  text: label + " " + ds.data[i],
                  fillStyle: arc,
                  strokeStyle: '#fff',
                  lineWidth: 2,
                  hidden: isNaN(ds.data[i]) || meta.data[i].hidden,
                  backgroundColor: arc,
                };
                return custom;
              });
            }
            return [];
          },
        }
      }
    }
  };

  return (
    <div className='locations-container'>
      <div className="location-header">
        <h3>Top Referral Source</h3>
        <p>View full reports</p>
      </div>
      <div className="doughnut-container">
        <Doughnut style={{margin: '0 auto', width: 500, height: 200}} data={data} options={options}/>
      </div>
    </div>
  );
};

export default Source;
