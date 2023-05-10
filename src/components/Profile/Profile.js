import React from 'react';
import image from '../../assets/img/profile.jpg';

const Profile = ({ name }) => {
  return (
    <div className="flex flex-col">
        <div className="profile--img">
            <img src={image}  className="w-[3rem] h-[3rem] object-cover border-4 border-red-300 rounded-3xl" alt="" />
        </div>
        <div className="profile--body flex flex-col gap-2 items-center bg-white border-2 border-red-300 rounded-xl shadow-xl p-[1rem]">
            <h1>welcome {name}</h1>
            <button className='p-[.5rem] bg-red-500 w-full text-white font-bold'> 
                disconnect
            </button>
        </div>
    </div>
  )
}

export default Profile;