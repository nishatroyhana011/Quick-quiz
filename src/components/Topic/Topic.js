import React from 'react';
import { useNavigate } from 'react-router-dom';

const Topic = ({ topic }) => {

  const { id, name, logo, total } = topic;
  const navigate = useNavigate();
  const showQuestions = () => {
    navigate(`/topic/${id}`);
  }
  return (
    <div><div className="card bg-base-100 shadow-md">
      <figure><img className='bg-emerald-50' src={logo} alt="Shoes" /></figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>Number of quizes:{total}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-success" onClick={showQuestions}>Start Now</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Topic;