import React from 'react';

const ErrorPage = () => {
     return (
          <div className='errPage w-[100%] h-[100vh] flex justify-center items-center'>
               <div>
                    <p className='text-2xl text-gray-500'>404 <span className='text-orange-400'>|</span> Nothing here to see.</p>
                    <p className='text-2xl text-gray-500'>Please, go back.</p>
               </div>
          </div>
     );
};

export default ErrorPage;