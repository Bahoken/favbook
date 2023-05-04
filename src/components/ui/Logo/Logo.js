import React from 'react';
import logo from './book.svg';

const Logo = ({ className }) => {
  return (
    <div className={`flex flex-row ${className}`}>
        <img src={logo} alt="logo" className='w-[2rem]'/>
        <h1 className='text-xl font-bold text-red-500'>Favbook</h1>
    </div>
  )
}

export default Logo;