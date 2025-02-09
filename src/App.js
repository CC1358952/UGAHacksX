import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Quiz from './Quiz';
import Calculator from './Calculator';
import UserProfile from './UserProfile';

const colors = {
  purple: '#52006A',
  navy: '#101820',
  lavender: '#A992C2',
  white: '#FFFFFF',
  gray: '#D1D5DB'
}

const FinancialTerms = () => <Quiz section="financialTerms" />;
const FinancialRatios = () => <Quiz section="financialRatios" />;
const Home = () => <div>Home Page</div>;

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <p style={{ fontWeight: 'bold', fontSize: 24, color: colors.white }}>
            Financial Learning
          </p>
        </div>
        <div className="App-bar">
          <div className="spacer" />
          <Link to="/profile" className="button-bar">Profile</Link>
          <Link to="/financial-terms" className="button-bar">Financial Terms</Link>
          <Link to="/financial-ratios" className="button-bar">Financial Ratios</Link>
          <Link to="/ebitda-calculator" className="button-bar">EBITDA Calculator</Link>
          <div className="spacer" />
        </div>
        <div className="App-main">
          <div className="App-quiz">
            <Routes>
              <Route path="/profile" element={<Profile />} />
              <Route path="/financial-terms" element={<FinancialTerms />} />
              <Route path="/financial-ratios" element={<FinancialRatios />} />
              <Route path="/ebitda-calculator" element={<Calculator />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;