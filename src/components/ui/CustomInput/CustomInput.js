import React, { forwardRef } from 'react';

const CustomInput = forwardRef((props, ref) => {
  return (
    <input type={props.type} onChange={props.handleChange} placeholder={props.placeholder} className="p-4 border-solid border-2 border-slate-400 rounded-lg focus:border-red-500 w-full" ref={ref}/>
  )
});

export default CustomInput;