import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import { Doughnut } from 'react-chartjs-2';

// importation of flag icons
import { flag1, flag2, flag3, flag4, flag5 } from '../assets'


const Locations = () => {

  const apiUrl = 'https://fe-task-api.mainstack.io/';

  // State to store incoming data from API
  const [apiData, setApiData] = useState({});
  
  // variables to store an array of data from the API
  let apiDataLabels = [];
  let apiDatasets = [];

  
  // useEffect to fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        // Storage of data
        setApiData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // console.log(apiData);

  // Stores data concerned with the component (top_locations)
  const locations = apiData?.top_locations;

  // checks if views exist 
  // maps through views and stores the country array inside "apiDataLabels"
  if (locations) {
    apiDataLabels = locations.map(location => location.country);
  }

  // checks if views exist 
  // maps through views and stores the country array inside "apiDataLabels"
  if (locations) {
    apiDatasets = locations.map(location => location.percent);
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
        <h3>Top Locations</h3>
        <p>View full reports</p>
      </div>
      <div className="doughnut-container">
        <div className="locations">
          {/* Checks if views exists then maps through the data and creates a p tag with countries as it's content and a span tag for it's percentages */}
          {locations?.map((location) => <p className='location'>{location.country}<span className='percent'>{location.percent}%</span></p>)}
        </div>
        {/* Each of the flags */}
        <div className="flags">
          <img src={flag1} alt="" />
          <img src={flag2} alt="" />
          <img src={flag3} alt="" />
          <img src={flag4} alt="" />
          <img src={flag5} alt="" />
        </div>
        <Doughnut style={{margin: '0 auto', width: 250, height: 120}} data={data} options={options}/>
      </div>
    </div>
  );
};

export default Locations;
