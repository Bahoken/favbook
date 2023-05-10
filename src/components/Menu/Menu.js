import React from 'react'; 
import Logo from '../ui/Logo/Logo';
import CustomForm from '../CustomForm/CustomForm';
import CustomButton from '../ui/CustomButton/CustomButton';
import CustomSearch from '../CustomSearch/CustomSearch';
import Profile from '../Profile/Profile';

const Menu = () => {

  return (
    <div className="m-[1.25rem] justify-between rounded-xl flex flex-row items-center shadow-2xl px-[1.5rem]">
        
        <div className="logo">
            <Logo className="" />
        </div>
        
        <div className="search">
            <CustomSearch />
        </div>

        <div className="className">
            <Profile name="olivera" />
        </div>

    </div>
  )
}

export default Menu;