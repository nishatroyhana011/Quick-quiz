import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1610484826967-09c5720778c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <p>We are</p>
                        <h1 className="mb-5 text-5xl font-bold">Quick Quiz</h1>
                        <p className="mb-5">We are online quiz platform for web developers. Get prepared for interview with quick quiz</p>
                        <Link to='/'><button className="btn btn-success">Get Started</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;