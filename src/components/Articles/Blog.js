import React from 'react';

const Blog = () => {
    return (
        <div>
            <p className='text-success text-3xl font-semibold my-5'>Blog Section</p>
            <div>
            <p className='text-success text-xl font-semibold text-start'>What is the purpose of react router?</p>
            <p className='text-start mb-10'>React Router is used to define multiple routes in the application. When a user looks for a specific URL, react router tries to match
                same route in the router file. If it matches, the user is redirected to the particular page. Without React Router, we can't display multiple views in React applications.
                It connets the navbar with all pages of an applicaton.
            </p>
            </div>
            <div>
            <p className='text-success text-xl font-semibold text-start'>How does contextApI works?</p>
            <p className='text-start mb-10'>
                ContextAPI is an alternative system of props drilling. It passes props from grandparent to grandchild component. we use createContext hook to set initial value. Then set a provider and pass value to it. 
                We can receive this value to any child component using useContext hook.
            </p>
            </div>
            <div>
            <p className='text-success text-xl font-semibold text-start'> Write something about UseRef hook</p>
            <p className='text-start'>The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.
            If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.To avoid this, we can use the useRef Hook.
            Like useState, useRef also takes an initail value.

            </p>
            </div>
        </div>
        
    );
};

export default Blog;