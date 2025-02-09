import React, { Component, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import jsonData from './Back-End/apis.json';
import Quiz from './Quiz';
import Calculator from './Calculator';

const deviceWidth = window.innerWidth;
const deviceHeight = window.innerHeight;

const colors = {
  purple: '#52006A',
  navy: '#101820',
  lavender: '#A992C2',
  white: '#FFFFFF',
  gray: '#D1D5DB'
}

function App() {
  

  return (
    <div className="App">
      <div className = "App-header">
        <p style = {{fontWeight: 'bold', fontSize: 24, color: colors.white}}>
          Financial Learning
        </p>
      </div>
      <div className = "App-bar">
        <div className = "spacer"/>
        <button className = "button-bar">
          EBITDA Calculator
        </button>
        <button className = "button-bar">
          Financial Terms
        </button>
        <button className = "button-bar">
          Financial Ratios
        </button>
        <button className = "button-bar">
          Financial Analysis
        </button>
        <div className = "spacer"/>
      </div>
      <div className = "App-main">
        <div className = "App-quiz">
          <Calculator/>
        </div>
      </div>
    </div>
  );
}

export default App;
