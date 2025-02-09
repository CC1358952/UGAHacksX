import React, { useState, useEffect } from 'react';
import questions from './Back-End/apis.json';

const Quiz = ({ section, userData, setUserData }) => {
    const [answers, setAnswers] = useState(["A", "B", "C", "D"]);
    const [correctIndex, setCorrectIndex] = useState(0);

    const addBadge = (badgeName) => {
        if (!userData.badges.some(badge => badge.badgeName === badgeName)) {
          setUserData(prevData => ({
            ...prevData,
            badges: [...prevData.badges, { badgeName, dateEarned: new Date().toISOString() }]
          }));
          alert(`Congratulations! You earned the ${badgeName} badge!`);
        }
    };

    const milestone1 = () => addBadge('First Steps - First 5 Points');
    const milestone2 = () => addBadge('Getting Started - First 10 Points');
    const milestone3 = () => addBadge('Learning Finance - First 25 Points');
    const milestone4 = () => addBadge('Finance Master - 50 Points Received');
    const milestone5 = () => addBadge('On A Roll - 3 Correct Answers in a Row');
    const milestone6 = () => addBadge('Cruising - 8 Correct Answers in a Row');
    const milestone7 = () => addBadge('Unstoppable - 15 Correct Answers in a Row');

    const checkForMilestone = (newScore, streak) => {
        if (newScore === 5) milestone1();
        if (newScore === 10) milestone2();
        if (newScore === 25) milestone3();
        if (newScore === 50) milestone4();
        if (streak === 3) milestone5();
        if (streak === 8) milestone6();
        if (streak === 15) milestone7();
    };

    const pickCorrectAnswer = () => {
        const randomIndex = Math.floor(Math.random() * questions[section].length);
        setCorrectIndex(randomIndex);
        pickAnswers(questions[section][randomIndex]);
    };

    const pickAnswers = (correctAnswer) => {
        if (!correctAnswer) return;

        let newAnswers = [correctAnswer.definition];
        const incorrectAnswers = questions[section]
            .filter(term => term.definition !== correctAnswer.definition)
            .sort(() => Math.random() - 0.5)
            .slice(0, 3)
            .map(term => term.definition);
        
        newAnswers = [...newAnswers, ...incorrectAnswers].sort(() => Math.random() - 0.5);
        setAnswers(newAnswers);
    };

    const verifyAnswer = (answer) => {
        if(answer === questions[section][correctIndex].definition) {
            const newScore = userData.score + 1;
            const newQuestionsAttempted = userData.questionsAttempted + 1;
            const newQuestionsCorrect = userData.questionsCorrect + 1;
            const newStreak = userData.streak + 1;
            setUserData(prevData => ({
              ...prevData,
              score: newScore,
              questionsAttempted: newQuestionsAttempted,
              questionsCorrect: newQuestionsCorrect,
              streak: newStreak
            }));
            alert("Correct!");
            checkForMilestone(newScore, newStreak);
            pickCorrectAnswer();
        } else {
            const newQuestionsAttempted = userData.questionsAttempted + 1;
            const newStreak = 0;
            setUserData(prevData => ({
            ...prevData,
            questionsAttempted: newQuestionsAttempted,
            streak: newStreak
            }));
            alert("Incorrect!");
            pickCorrectAnswer();
        }
    };

    return (
        <div className="quiz-box">
            <div className="question-box">    
                <p>
                    {questions[section][correctIndex]?.term}
                </p>
            </div>
            <div className="answer-container">
                <div className='answer-row'>
                    <button className="answer-box" onClick={() => verifyAnswer(answers[0])}>{answers[0]}</button>
                    <button className="answer-box" onClick={() => verifyAnswer(answers[1])}>{answers[1]}</button>
                </div>
                <div className='answer-row'>
                    <button className="answer-box" onClick={() => verifyAnswer(answers[2])}>{answers[2]}</button>
                    <button className="answer-box" onClick={() => verifyAnswer(answers[3])}>{answers[3]}</button>
                </div>
            </div>
            <button onClick={pickCorrectAnswer}>Get Answers</button>
        </div>
    );
};

export default Quiz;