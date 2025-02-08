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

    const nextPage = () => {
        setPage(page + 1);
    };

    const prevPage = () => {
        setPage(page - 1);
    };

    return (
        <div>
            <h1>Quiz Page {pages[page]}</h1>
            <button onClick={prevPage} disabled={page === 0}>Previous</button>
            <button onClick={nextPage} disabled={page >= 3}>Next</button>
            <p>
                Yo this is a quiz
            </p>
        </div>
    );
};

export default Quiz;