import React from 'react';
import './App.css';
import { Logo } from './assets';
import { Views, Locations, Source } from './components';

const App = () => {
  return (
    <div className='app-container'>
      <div className="navbar">
        <div className="logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="navigation">
          <nav>
            <ul>
              <li className='dashboard active'>Dashboard</li>
              <li className='nav1'>Item 1</li>
              <li className='nav2'>Item 2</li>
              <li className='nav3'>Item 3</li>
            </ul>
            <ul>
              <h4>others 1</h4>
              <li className='nav4'>Item 4</li>
              <li className='nav5'>Item 5</li>
            </ul>
            <ul>
              <h4>others 2</h4>
              <li className='nav6'>Item 6</li>
              <li className='nav7'>Item 7</li>
              <li className='nav8'>Item 8</li>
            </ul>
          </nav>
        </div>
        <div className="user">
          <p>Blessing Daniels</p>
        </div>
      </div>
      <div className="body">
        <div className="body-heading">
          <header>Dashboard</header>
          <div className="heading-info">
            <div className="info">
              <h4>Good morning, Blessing ⛅️</h4>
              <p>Check out your dashboard summary.</p>
            </div>
            <p className='analytics'>View Analytics</p>
          </div>
          <div className="days">
            <p className='day'>1 Day</p>
            <p className='day'>3 Days</p>
            <p className='day'>7 Days</p>
            <p className='day'>30 Day</p>
            <p className='day active-day'>All Time</p>
            <p className='day'>Custom Date</p>
          </div>
        </div>
        <Views />
        <div className="base-components">
          <Locations />
          <Source />
        </div>
      </div>
    </div>
  )
}

export default App