import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3BottomLeftIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [isOpenMenu, setIsMenuOpen] = useState(false);
    return (
        <nav className='flex justify-between w-5/6 mx-auto mt-11'>
            <Link className='font-bold text-5xl '>Job Point</Link>
            <div onClick={()=> setIsMenuOpen(!isOpenMenu)} className='cursor-pointer md:hidden'>
                {isOpenMenu?<XMarkIcon className='menu'></XMarkIcon>: <Bars3BottomLeftIcon className="menu"></Bars3BottomLeftIcon> }
                
                
            </div>
            <ul className={`md:items-center md:space-x-8 md:flex text-lg font-medium md:static absolute ${isOpenMenu?'top-24':'-top-40'}`} >
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/statistics'>Statistics</NavLink></li>
                <li><NavLink to='/appliedJob'>Applied Job</NavLink></li>
                <li><NavLink to='/blog'>Blog</NavLink></li>
                <button className='btn-primary'>Start Applying</button>

            </ul>
            
        </nav>
    );
};

export default Header;