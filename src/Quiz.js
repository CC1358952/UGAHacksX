import React, { useState } from 'react';
import questions from './Back-End/apis.json';

const Quiz = () => {
    const [page, setPage] = useState(0);
    const [index, setIndex] = useState(0);
    const [answers, setAnswers] = useState(["A", "B", "C", "D"]);

    const pages = [
        <p>Home</p>,
        <p>Fina Terms</p>,
        <p>Fina Ratios</p>,
        <p>Fina Analysis</p>
    ];

    const pickAnswers = (correctAnswer) => {
        let newAnswers = [correctAnswer.definition];
        const incorrectAnswers = questions.financialTerms
            .filter(term => term.definition !== correctAnswer.definition) // Avoid duplicate correct answer
            .sort(() => Math.random() - 0.5) // Shuffle array
            .slice(0, 3) // Take three incorrect answers
            .map(term => term.definition);
        
        newAnswers = [...newAnswers, ...incorrectAnswers].sort(() => Math.random() - 0.5); // Shuffle all answers
        setAnswers(newAnswers);
    };

    const nextIndex = () => {
        setIndex(prevIndex => prevIndex + 1);
    };

    const nextPage = () => {
        setPage(prevPage => prevPage + 1);
    };

    const prevPage = () => {
        setPage(prevPage => prevPage - 1);
    };

    return (
        <div className="quiz-box">
            <div className="question-box">    
                <p>
                    {questions.financialTerms[index]?.term}
                </p>
            </div>
            <div className="answer-container">
                <div className='answer-row'>
                    <button className="answer-box">{answers[0]}</button>
                    <button className="answer-box">{answers[1]}</button>
                </div>
                <div className='answer-row'>
                    <button className="answer-box">{answers[2]}</button>
                    <button className="answer-box">{answers[3]}</button>
                </div>
            </div>
            <button onClick={() => pickAnswers(questions.financialTerms[index])}>
                Get Answers
            </button>
        </div>
    );
};

export default Quiz;