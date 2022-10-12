import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Topic from '../Topic/Topic';

const Quiz = () => {

    const {data} = useLoaderData();

    return (
        <div className='mt-12'>
            <p className='text-3xl font-semibold text-success'>Quiz</p>
            <div className='my-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {
                data.map(topic=><Topic topic={topic} key={topic.id}></Topic>)
            }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Quiz;