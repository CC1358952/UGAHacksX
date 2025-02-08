import React, { Component, useState, useEffect } from 'react';
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


  const [userData, setUserData] = useState(() => {
    const savedData = localStorage.getItem('userData');
    if (savedData) {
      return JSON.parse(savedData);
    } else {
      return { 
        score: 0,
        badges: [],
        questionsAttempted: 0,
        questionsCorrect: 0
      };
    }
  });

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userData));
  }, [userData]);

  const addBadge = (badgeName) => {
    if (!userData.badges.some(badge => badge.badgeName === badgeName)) {
      setUserData(prevData => ({
        ...prevData,
        badges: [...prevData.badges, { badgeName, dateEarned: new Date().toISOString() }]
      }));
      alert('Congratulations! You earned the ${badgeName} badge!');
    } //if
  }

  //individual milestones
  const milestone1 = () => addBadge('First Steps - First 5 Points');
  const milestone2 = () => addBadge('Getting Started - First 10 Points');
  const milestone3 = () => addBadge('Learning Finance - First 25 Points');
  const milestone4 = () => addBadge('Finance Master - 50 Points Received');
  const milestone5 = () => addBadge('On A Roll - 3 Correct Answers in a Row');
  const milestone6 = () => addBadge('Cruising - 8 Correct Answers in a Row');
  const milestone7 = () => addBadge('Unstoppable - 15 Correct Answers in a Row');
  
  const checkForMilestone = (newScore, streak) => {
    // Check for badge milestones
    if (newScore === 5) milestone1();
    if (newScore === 10) milestone2();
    if (newScore === 25) milestone3();
    if (newScore === 50) milestone4();
    if (streak === 3) milestone5();
    if (streak === 8) milestone6();
    if (streak === 15) milestone7();
  };

  const handleCorrectAnswer = () => {
    const newScore = userData.score + 1;
    const newQuestionsAttempted = userData.questionsAttempted + 1;
    const newQuestionsCorrect = userData.questionsCorrect + 1;
    setUserData(prevData => ({
      ...prevData,
      score: newScore,
      questionsAttempted: newQuestionsAttempted,
      questionsCorrect: newQuestionsCorrect
    }));
    alert('Correct answer!');
    //checkForMilestone(newScore);
  };

  const handleIncorrectAnswer = () => {
    const newQuestionsAttempted = userData.questionsAttempted + 1;
    setUserData(prevData => ({
      ...prevData,
      questionsAttempted: newQuestionsAttempted
    }));
    alert('Incorrect answer!');
  };


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
