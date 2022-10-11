import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-cyan-900 shadow-lg shadow-cyan-500/50 sticky top-0">
                <div className='w-full sm:w-4/5 px-5 sm:px-0 mx-auto flex justify-between'>
                    <h1 className='text-xl md:text-4xl font-bold text-blue-700'>Quize <span className='text-cyan-400'> Hunter</span></h1>
                    <div className="flex gap-3 md:gap-8 font-semibold text-cyan-500  md:text-xl">

                        <NavLink className={({ isActive }) => isActive ? 'underline' : 'hover:text-cyan-400 duration-700'} to="/">Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'underline' : 'hover:text-cyan-400 duration-700'} to="/statistics">Statistics</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'underline' : 'hover:text-cyan-400 duration-700'} to="/blog">Blog</NavLink>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;