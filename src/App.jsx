import React from 'react';
import './App.css';
import { Logo } from './assets';

// Imports of the components in the body
import { Views, Locations, Source } from './components';

const App = () => {
  return (
    <div className='app-container'>

      {/* The navbar of the Dashboard */}
      <div className="navbar">

        <div className="logo-container">
          <img src={Logo} alt="" />
        </div>

        {/* The container of the navs */}
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

      {/* --- The body of the Dashboard */}
      <div className="body">

      {/* The heading of the body of the Dashboard */}
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
            <h4 className='day'>1 Day</h4>
            <h4 className='day'>3 Days</h4>
            <h4 className='day'>7 Days</h4>
            <h4 className='day'>30 Day</h4>
            <h4 className='day active-day'>All Time</h4>
            <h4 className='day'>Custom Date</h4>
          </div>
        </div>

        {/* Here is the Views component created with Line chart */}
        <Views />

        {/* Here are the bottom components (Location and Resources Component) */}
        <div className="base-components">
          <Locations />
          <Source />
        </div>

      </div>
    </div>
  )
}

export default App