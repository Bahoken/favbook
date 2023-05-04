import React from 'react';

const Card = ({ children, CustomClass }) => {
  return (
    <div className={'bg-white p-[2rem] '+CustomClass}>
        { children }
    </div>
  )
}

export default Card;