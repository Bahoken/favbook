import React from 'react';

const ImgBlock = ({ source }) => {
  return (
    <div className="flex w-full align-center h-full justify-center">
        <img src={source} alt="image of block" className='w-full object-cover'/>
    </div>
  )
}

export default ImgBlock;