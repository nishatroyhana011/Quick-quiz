import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Quiz = () => {

    const {data} = useLoaderData();

    return (
        <div>
            <p className='text-4xl text-red-500'>Quiz</p>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5'>
            {
                data.map(topic=><Topic topic={topic} key={topic.id}></Topic>)
            }
            </div>
        </div>
    );
};

export default Quiz;