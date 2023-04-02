import React, { useState } from 'react';
import Link from '../Link/Link';
import {  Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'


const Navbar = () => {
        const [open, setOpen] = useState(false)
        let routes = [
                {
                  id: 1,
                  name: 'Home',
                  path: '/',
                },
                {
                  id: 2,
                  name: 'About Us',
                  path: '/about',
                },
                {
                  id: 3,
                  name: 'Contact',
                  path: '/contact',
                },
                {
                  id: 4,
                  name: 'Products',
                  path: '/products',
                },
                {
                  id: 5,
                  name: 'Services',
                  path: '/services',
                },
              ];
              
        return (
                <nav className='  bg-gray-400 py-4'>
             <div onClick={()=> setOpen(!open)} className='md:hidden ms-4'>
                <span >
                        { open== true?<XMarkIcon className='h-6 w-6 text-slate-500' />:<Bars3Icon className="h-6 w-6 text-purple-500" />}
                </span>
             
        
                </div>               
            <ul  className= {`ms-8  bg-gray-400 px-3 text-slate-100 md:flex absolute md:static duration-500 ${open? 'top-10': '-top-56'}`}>
                   {
                        routes.map(item =>
                                
                                <Link
                        key={item.id}
                        item = {item}
                        ></Link>)
                    }        
            </ul>    
                
                </nav>    
        );
};

export default Navbar;