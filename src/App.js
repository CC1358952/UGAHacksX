import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import jsonData from './Back-End/apis.json';
import Quiz from './Quiz';

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
  const printArrays = () => {
    if(jsonData) {
      const financialTermsArray = jsonData.financialTerms;
      const financialRatiosArray = jsonData.financialRatios;
      const financialAnalysisArray = jsonData.financialAnalysis;

      console.log("Financial Terms:m ", financialTermsArray);
      console.log("Financial Ratios: ", financialRatiosArray);
      console.log("Financial Analysis: ", financialAnalysisArray);
    }
  };

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
          <Quiz/>
          <p>
            Yo this is a quiz
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
