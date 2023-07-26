import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
     const [open, setOpen] = useState(false);

     return (
          <nav className="bg-slate-800">
              <div className='container mx-auto px-5 py-2 flex justify-between items-center'>
                    <a href="#" className='text-lg font-medium text-white'>Ema-John</a>

                    <ul className={`text-white lg:flex lg:justify-center lg:items-center lg:relative lg:top-0 lg:w-fit absolute bg-slate-600 lg:bg-transparent w-full left-0 ${open ? 'top-10' : 'top-[-350px]'}`}>
                         <li className='px-2 py-1'><Link to='/order'>Order</Link></li>
                         <li className='px-2 py-1'><Link to='/review'>Order Review</Link></li>
                         <li className='px-2 py-1'><Link to='/inventory'>Manage Inventory</Link></li>
                         <li className='px-2 py-1'><Link to='/login'>Login</Link></li>
                    </ul>

                    <div className='w-6 h-6 text-white lg:hidden' onClick={() => setOpen(!open)}>
                         {
                              open ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>
                         }
                    </div>
               </div> 
          </nav>
     );
};

export default Navbar;