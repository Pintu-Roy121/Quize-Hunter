import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-cyan-900 shadow-lg shadow-cyan-500/50">
                <div className='w-full sm:w-4/5 px-5 sm:px-0 mx-auto flex justify-between'>
                    <h1 className='text-xl md:text-4xl font-bold text-blue-700'>Quize <span className='text-red-600'> Hunter</span></h1>
                    <div className="flex gap-4 md:gap-8 font-semibold text-cyan-500 text-base md:text-xl">
                        <Link className='hover:text-cyan-400 duration-700' to="/">Home</Link>
                        <Link className='hover:text-cyan-400 duration-700' to="/statistics">Statistics</Link>
                        <Link className='hover:text-cyan-400 duration-700' to="/blog">Blog</Link>
                        {/* <ul className="menu menu-horizontal p-0"> */}
                        {/* <li><a>Item 1</a></li>
                            <li tabIndex={0}>
                                <a>
                                    Parent
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </a>
                                <ul className="p-2 bg-base-100">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li> */}
                        {/* </ul> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;