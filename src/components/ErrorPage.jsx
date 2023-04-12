import React from 'react';
import { useRouteError } from 'react-router-dom';
import Lottie from "lottie-react";
import errorImg from '../../public/error.json'

const ErrorPage = () => {
    const { error, status, statusText, data } = useRouteError();
    
    console.log(useRouteError())
    return (
        <section className='w-5/6 mx-auto  text-center mt-11'>
           <div>
           <Lottie className='h-44 text-center ' animationData={errorImg} loop={true} />
           </div>
            
            <h3 className='text-5xl font-semibold text-gray-600'>{statusText}</h3>
            <p className='text-3xl my-2'>{error.message}</p>
            <p className='text-2xl '>{data}</p>
      </section>
    );
};

export default ErrorPage;