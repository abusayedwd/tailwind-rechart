import React, { useEffect, useState } from 'react';
import PriceCart from '../PriceCart/PriceCart';

const PriceList = () => {
        const [prices, setPrice] = useState([])

        useEffect(()=> {
                fetch('FakeDB.json')
                .then(res => res.json())
                .then (data => setPrice(data))
                // console.log( prices)
        }, [])
        return (
                <div className='mx-12'>
                        <p className='text-4xl bg-gray-300 p-4 text-center font-semibold'>price List added</p>
              <div className='grid md:grid-cols-3 mt-5 gap-8 px-4'>
              {
                prices.map(price => <PriceCart
                key={price.id}
                price={price}
                >
                </PriceCart>)
                 
              }  
              </div>
 
                
                </div>

        );
};

export default PriceList;