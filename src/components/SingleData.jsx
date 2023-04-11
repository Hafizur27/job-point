import React from 'react';

const SingleData = ({singleData}) => {
   const {logo, title, vacancy} = singleData;
    return (
        <div className='border-2 rounded-lg p-4 mb-11'>
               <img src={logo} alt="" /> 
               <h3 className='font-semibold text-xl'>{title}</h3>
               <p className='font-thin'>{vacancy} Jobs Available</p>
        </div>
    );
};

export default SingleData;