import React from 'react';

const SingleJob = ({singleJob}) => {
    const {id, logo, title, owner, job, location, workTime, salary} = singleJob;
    
    return (
        <div className='border-2 rounded-lg p-3 border-zinc-400'>
            <img src={logo} alt="" />
            <h3>{title}</h3>
            <h5>{owner}</h5>
            <button>{job}</button>
            <button>{workTime}</button>
            <p>{location}</p>
            <p>{salary}</p>
            <button>View Details</button>
        </div>
    );
};

export default SingleJob;