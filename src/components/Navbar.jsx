'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
    const [darkMode, setdarkMode] = useState(false);
    const toggleDarkMode =(e)=>{
        e.preventDefault();
        setdarkMode(!darkMode);
        const theme = darkMode ? 'light' : 'dark'
        document.documentElement.setAttribute("data-theme", theme)

    }
  return (
    <div className="navbar bg-base-100 shadow-sm">

        {/* Mobile View */}
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 min-h-screen p-2 shadow">
                <li><Link href='/'>Home</Link></li>
                <li>
                <a>Other Universe</a>
                <ul className="p-2">
                    <li><a>Coming Soon</a></li>
                    <li><a>Coming Soon</a></li>
                </ul>
                </li>
                <li><a>Coming Soon</a></li>
            </ul>
            </div>
            <Link href="/" className="btn btn-ghost text-xl">Nilsankar&apos;s Lab</Link>
        </div>

        {/* Desktop View */}
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            <li><Link href='/'>Home</Link></li>
            <li>
                <details>
                <summary>Other Universe</summary>
                <ul className="p-2 bg-base-100 w-40 z-1">
                    <li><a>Coming Soon</a></li>
                    <li><a>Coming Soon</a></li>
                    <li><a>Coming Soon</a></li>
                </ul>
                </details>
            </li>
            <li><Link href='/about'>About</Link></li>
            </ul>
        </div>
        <div className="navbar-end">
            <button className='btn btn-sm btn-outline' onClick={toggleDarkMode}>
                {darkMode ?  'Light Mode' : 'Dark Mode'}
            </button>
        </div>
        </div>
  );
}

export default Navbar;
