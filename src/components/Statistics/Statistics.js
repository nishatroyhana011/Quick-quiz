import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {

    const { data } = useLoaderData()




    return (
        <div className='flex flex-col md:flex-row m-8 md:m-10 justify-between gap-4'>
            <div>
                <p className='text-6xl font-semibold'>Daily practice makes you more <span className='text-success font-bold'>confident</span> </p>
                <p className='text-lg my-5'>We provide daily quizes to make your preparation better. Try out  our  pro subscription.</p>
                <button className='btn btn-success'> Go Pro</button>
            </div>

            <div className='w-full md:w-1/2 h-96'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart  data={data}>
                        <XAxis dataKey="name" />
                        <YAxis dataKey="total" />
                        <Tooltip />
                        <Bar dataKey='total' fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>


        </div>
    );
};

export default Statistics;