import React from 'react';

const Link = ({item}) => {
        return (
                <li className='mr-8 hover:bg-orange-300 p-2 rounded-lg'>
                        <a href={item.path}>{item.name}</a>
                </li>
        );
};

export default Link;