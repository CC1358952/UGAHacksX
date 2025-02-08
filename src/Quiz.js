import React, { useState } from 'react';
import questions from './Back-End/apis.json';


const Quiz = () => {
    const [page, setPage] = useState(0);

    const pages = [
        <p>Home</p>,
        <p>Fina Terms</p>,
        <p>Fina Ratios</p>,
        <p>Fina Analysis</p>
    ];

    let index = 0;

    let answers = [ "", "", "", "" ];
    const pickAnswers = (correctAnswer) => {
        answers[0] = correctAnswer.definition;
        for (let i = 1; i < 4; i++){
            answers[i] = questions.financialTerms[Math.floor(Math.random() * questions.financialTerms.length)].definition;
        }
    };

    const nextPage = () => {
        setPage(page + 1);
    };

    const prevPage = () => {
        setPage(page - 1);
    };

    return (
        <div className = "quiz-box">
            <div className = "question-box">    
                <p>
                    {questions.financialTerms[index].term}
                </p>
            </div>
            <div className = "answer-container">
                <div className='answer-row'>
                    <button className = "answer-box">
                        {answers[0]}
                    </button>
                    <button className = "answer-box">
                        {answers[1]}
                    </button>
                </div>
                <div className='answer-row'>
                    <button className = "answer-box">
                        {answers[2]}
                    </button>
                    <button className = "answer-box">
                        {answers[3]}
                    </button>
                </div>
            </div>
            <button onClick={() => index+=1 }>Button</button>
        </div>
    );
};

export default Quiz;