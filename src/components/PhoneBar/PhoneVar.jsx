import React, { useEffect, useState } from 'react';
 
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import axios from 'axios';

const PhoneVar = () => {
        const [phones, setPhones] = useState([])
        useEffect(() => {
      axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
      .then(data =>  {
        const loadedData = data.data.data;
         
        const phoneData = loadedData.map(phone => {
                const parse = phone.slug.split('-')
                const price = parseInt(parse[1])
                // console.log(price)
                const dataInfo = {
                        name: phone.phone_name,
                        price : price,
                } 
                return dataInfo;
        })
        
        setPhones(phoneData)
      })
        },[])
        return (
                <div className=''>
                    <div>
                    <BarChart
                    height={500}
                    width={1000}
                    data={phones}
                    >
                  <Bar dataKey="price" fill="#8884d8" /> 
                  <XAxis dataKey="name"></XAxis>
                  <YAxis></YAxis>
                  <Tooltip></Tooltip>     
                </BarChart>       
                </div>  
                </div>
        );
};

export default PhoneVar;