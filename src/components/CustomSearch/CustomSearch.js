import React from 'react';

const CustomSearch = () => {
  return (
    <form className='flex flex-row my-[.95rem]'>
        <input type="text" className='p-2' style={{ border: "1px solid #eee", borderRadius: ".5rem 0 0 .5rem" }}/>
        <button className='bg-red-400 px-2 font-semibold text-white' style={{ borderRadius: " 0 .5rem .5rem 0" }}>
            search
        </button>
    </form>
  )
}

export default CustomSearch;