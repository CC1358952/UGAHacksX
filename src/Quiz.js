import React, { useState } from 'react';
import questions from './Back-End/apis.json';

const Quiz = () => {
    const [answers, setAnswers] = useState(["A", "B", "C", "D"]);
    const [correctIndex, setCorrectIndex] = useState(0);

    const pickCorrectAnswer = () => {
        const randomIndex = Math.floor(Math.random() * questions.financialTerms.length);
        setCorrectIndex(randomIndex);
        pickAnswers(questions.financialTerms[randomIndex]);
    };

    const pickAnswers = (correctAnswer) => {
        if (!correctAnswer) return;

        let newAnswers = [correctAnswer.definition];
        const incorrectAnswers = questions.financialTerms
            .filter(term => term.definition !== correctAnswer.definition) // Avoid duplicate correct answer
            .sort(() => Math.random() - 0.5) // Shuffle array
            .slice(0, 3) // Take three incorrect answers
            .map(term => term.definition);
        
        newAnswers = [...newAnswers, ...incorrectAnswers].sort(() => Math.random() - 0.5); // Shuffle all answers
        setAnswers(newAnswers);
    };

    const verifyAnswer = (answer) => {
        if(answer === questions.financialTerms[correctIndex].definition) {
            alert("Correct!");
            pickCorrectAnswer();
        } else {
            alert("Incorrect!");
            pickCorrectAnswer();
        }
    };

    return (
        <div className="quiz-box">
            <div className="question-box">    
                <p>
                    {questions.financialTerms[correctIndex]?.term}
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
