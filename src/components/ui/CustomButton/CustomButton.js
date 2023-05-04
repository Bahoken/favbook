import React from 'react';

const CustomButton = ({ text,handleClick,CustomClass,type }) => {
  return (
    <button type={type} onClick={handleClick} className={`p-[1.5rem] text-white font-bold shadow-xl hover:shadow-none text-xl font- border-none rounded-lg ${CustomClass}`}>
        { text.toUpperCase() }
    </button>
  )
}

export default CustomButton;