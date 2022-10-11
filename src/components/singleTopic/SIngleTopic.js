import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SIngleTopic = () => {

   const {data} = useLoaderData();
   const {name, total, questions} = data;
console.log(questions)
    return (
        <div>
            <p className='text-xl text-red-500 font-bold'>{name}</p>
            <p>Number of questions: {total}</p>
            {
                questions.map(q=><p>{q.correctAnswer}</p>)
            }
        </div>
    );
};

export default SIngleTopic;