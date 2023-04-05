import React from 'react';
import './App.css';
import { Logo } from './assets';

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
              <li>Dashboard</li>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
            <ul>
              <li>others 1</li>
              <li>Item 4</li>
              <li>Item 5</li>
            </ul>
            <ul>
              <li>others 2</li>
              <li>Item 6</li>
              <li>Item 7</li>
              <li>Item 8</li>
            </ul>
          </nav>
        </div>
        <div className="user">
          <p>Blessing Daniels</p>
        </div>
      </div>
      <div className="body">
      </div>
    </div>
  )
}

export default App