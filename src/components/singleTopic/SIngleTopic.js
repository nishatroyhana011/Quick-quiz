import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const SIngleTopic = () => {

   const {data} = useLoaderData();
   const {name, total, questions} = data;
    console.log(questions)
    return (
        <div>
            <p className='text-xl text-secondary font-bold'>Topic Name: {name}</p>
            <p>Number of questions: {total}</p>
            <div className='grid grid-cols-2'>
            {
                questions.map(question=><Questions key={question.id} questions={question}></Questions>)
            }
            </div>
            
        </div>
    );
};

export default SIngleTopic;