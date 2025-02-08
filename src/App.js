import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
        <p>
          Yo whats good?
        </p>
      </div>
      <div className = "App-main">
        <p>
          This is the main content
        </p>
      </div>
    </div>
  );
}

export default App;
