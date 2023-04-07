import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import { Doughnut } from 'react-chartjs-2';

// Local importation of the icons for the socials
import { source1, source2, source3 } from '../assets';

// Importation of the google icon from react-icons library
import { FcGoogle } from 'react-icons/fc';

const Locations = () => {

  const apiUrl = 'https://fe-task-api.mainstack.io/';

  // Stores Data coming directly from the API
  const [apiData, setApiData] = useState({});

  // variables to store an array of data from the API
  let apiDataLabels = [];
  let apiDatasets = [];

  
// useEffect to fetch data
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

  // console.log(apiData);

// Stores data concerned with the component (top_sources) in a variable
  const sources = apiData?.top_sources;

  // checks if views exist 
  // maps through views and stores the country array inside "apiDataLabels"
  if (sources) {
    apiDataLabels = sources.map(source => source.source);
  }

  // checks if views exist 
  // maps through views and stores the country array inside "apiDataLabels"
  if (sources) {
    apiDatasets = sources.map(source => source.percent);
  }
  

// ---- Chart Data

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
        weight: 1,
        borderWidth: 0
      },
    ],
  };


  const options = {
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: 'left',
        align: 'center',
        labels: {
          boxWidth: 10,
          boxHeight: 10,
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
        <h3>Top Referral source</h3>
        <p>View full reports</p>
      </div>
      <div className="doughnut-container">
        <div className="locations">
          {/* Checks if views exists then maps through the data and creates a p tag with countries as it's content and a span tag for it's percentages */}
          {sources?.map((source) => <p className='location'>{source.source}<span className='percent'>{source.percent}%</span></p>)}
        </div>
        {/* Each of the icons */}
        <div className="flags">
          <FcGoogle size='1.3em'/>
          <img src={source1} alt="" />
          <img src={source2} alt="" />
          <img src={source3} alt="" />
        </div>
        <Doughnut style={{margin: '0 auto', width: 250, height: 120}} data={data} options={options}/>
      </div>
    </div>
  );
};

export default Locations;
