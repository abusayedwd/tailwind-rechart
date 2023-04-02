import React from 'react';
import {  CheckCircleIcon } from '@heroicons/react/24/solid'


const Feature = ({feature}) => {
        // console.log(feature)
        return (
                <div className='flex items-center'>
         < CheckCircleIcon className="h-5 w-5 text-blue-500" />

           <p className='p-2'>{feature}</p>  
                </div>
        );
};

export default Feature;