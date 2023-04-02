import React from 'react';
 
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const DeshBoard = () => {
        const data = [
                {
                  name: 'Page A',
                  physics: 80,
                  math:87,
                  
                },
                {
                  name: 'Page A',
                  physics: 77,
                  math:69,
                  
                },
                {
                  name: 'Page A',
                  physics: 70,
                  math:78,
                  
                },
                {
                  name: 'Page A',
                  physics: 98,
                  math:87,
                  
                },
                {
                  name: 'Page A',
                  physics: 65,
                  math:70,
                  
                },
                {
                  name: 'Page A',
                  physics: 78,
                  math:85,
                  
                },
                {
                  name: 'Page A',
                  physics: 80,
                  math:86,
                  
                },
                {
                  name: 'Page A',
                  physics: 75,
                  math:67,
                  
                },
                {
                  name: 'Page A',
                  physics: 80,
                  math:87,
                  
                }
                  
                  
              ];
        return (
                <div>
          <LineChart
          width={700}
          height={500}
          data={data}
          
        >
           
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
         
           <Line  dataKey="math"  />
           <Line  dataKey="physics"  />
        </LineChart> 
                </div>
        );
};

export default DeshBoard;