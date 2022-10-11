import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Quiz = () => {

    const {data} = useLoaderData();

    return (
        <div>
            <p className='text-4xl text-red-500'>Quiz</p>
            {
                data.map(topic=><Topic topic={topic} key={topic.id}></Topic>)
            }
        </div>
    );
};

export default Quiz;