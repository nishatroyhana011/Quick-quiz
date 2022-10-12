import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const SIngleTopic = () => {

   const {data} = useLoaderData();
   const {name, total, questions} = data;
   
    return (
        <div>
            <p className='text-2xl text-success font-bold'>Topic Name: {name}</p>
            <p>Number of questions: {total}</p>
            <div className='grid md:grid-cols-2 mt-5'>
            {
                questions.map(question=><Questions key={question.id} questions={question}></Questions>)
            }
            </div>
            
        </div>
    );
};

export default SIngleTopic;