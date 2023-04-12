import React from 'react';
import { Link } from 'react-router-dom';

const StoreData = ({storeData}) => {
    const {logo, title, owner, job, location, workTime, salary, quantity, id } = storeData;
    return (
        <div className='flex items-center justify-between mt-11 mb-4'>
            <img className='w-1/4 h-1/4' src={logo} alt="" />
           <div>
           <h3 className="font-semibold text-xl">{title}</h3>
            <h5 className="text-slate-400 font-semibold mb-2">{owner}</h5>
            <button className="text-cyan-400 border-cyan-400 border rounded px-2 py-1">{job}</button>
            <button className="ms-3 text-cyan-400 border-cyan-400 border rounded px-2 py-1">{workTime}</button>
            <p className="text-slate-400">{location}</p>
            <p className="text-slate-400">{salary}</p>
           </div>
            <div>
            <Link to={`/details/${id}`}><button className='btn-primary'>View Details</button></Link>
            </div>
        </div>
    );
};

export default StoreData;