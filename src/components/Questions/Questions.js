import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Questions = ({questions}) => {

    const {id, question, correctAnswer, options} = questions;
    const [answer, setAnswer] = useState(false);

    const getValue = (value) =>{ 
        if(value === correctAnswer){
            toast("Correct Answer !!",{
                theme: "dark",
            });
        }else{
            toast("Wrong Answer :(",{
                theme: "light",
            });
        }
    }

    return (
        <div className='card p-5 m-7 bg-base-100 shadow-md text-left'>
            <p className='text-lg font-semibold text-secondary p-2'>{question}</p>
           {   
            options.map(option=>
                <p className='m-2 bg-slate-100 p-4 rounded-md'>
                    <input type="radio" name={id} className="h-4 w-4 mr-1 radio radio-secondary" onClick={()=>getValue(option)} key={questions.id}/>
                    {option}
                </p>)
           }
           <ToastContainer autoClose={3000}/>
           <button onClick={() => setAnswer(!answer)}><i className="fa-solid fa-eye p-2" ></i>{answer ? 'Hide Answer' : 'Show Answer'} </button> 
           <p>{answer ? correctAnswer : ''}</p>
           
        </div>
    );
};

export default Questions;
