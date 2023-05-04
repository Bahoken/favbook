import React from 'react'

const TextBlock = ({ title,contain,url }) => {
  return (
    <div className="flex flex-col">
        <h1 className='text-3xl font-bold m-0 p-0'>{ title }</h1>
        <p className='text-small font-normal mt-2'>{ contain }{ url && url }</p>
    </div>
  )
}

export default TextBlock