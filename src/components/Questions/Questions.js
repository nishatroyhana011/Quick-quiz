import React from 'react';

const Questions = ({questions}) => {

    const {question, correctAnswer, options} = questions;
    return (
        <div className='card p-5 m-7 bg-base-100 shadow-xl'>
            <p className='text-lg font-semibold text-secondary'>{question}</p>
           {
            options.map(option=><p className='m-2 bg-slate-100 p-5 rounded-md'><input type="radio" name="radio-4" className="radio radio-secondary" />{option}</p>)
           }
            
        </div>
    );
};

export default Questions;
