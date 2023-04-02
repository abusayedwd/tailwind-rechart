import React from 'react';
import Feature from '../Feature/Feature';

const PriceCart = ({price}) => {
        return (
                <div>


<div className=' bg-slate-300 rounded-lg p-4 h-96 relative'>
                     <div className='text-center'>
                     <small className='text-4xl text-purple-400 font-extrabold'>{price.price}</small>
                      <small className='text-3xl  text-yellow-400 font-semibold'>/mon</small>  
                <p className='text-2xl text-orange-700 font-bold'>{price.name}</p> 
                     </div>

                <div>
                        <h1 className='text-2xl text-neutral-500 font-bold underline'>Featur:</h1> 
                {
                 price.features.map((featur,idx) => <Feature
                 key={idx}
                 feature = {featur}
                 ></Feature> )
                 
                } 
                <button className='  bg-green-400 p-3 w-80 mx-auto font-bold absolute  bottom-0 hover:bg-green-500 hover:text-sky-600 text-2xl rounded-md'>Buy Now</button> 
                </div>
                
                </div>
               

  </div>
        );
};

export default PriceCart;