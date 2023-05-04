import React from 'react';
import Logo from '../components/ui/Logo/Logo';

const Home = () => {
  return (
    <div className="flex flex-col h-[90vh] justify-center items-center">
        <Logo />
        <h1 className='text-6xl font-bold text-red-500'>Home</h1>
    </div>
  )
}

export default Home;