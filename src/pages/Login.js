import React, { useCallback, useState } from "react";
import CustomForm from "../components/CustomForm/CustomForm";
import ImgBlock from "../components/ImgBlock/ImgBlock";
import cover from "../assets/img/lover.png";
import Logo from "../components/ui/Logo/Logo";

const Login = () => {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleUserName = (e) => {

    const val = e.currentTarget.value;
    setUsername(val);
    console.log(':: text value ::', val);
  
  };

  const handlePassword = (e) => {
    
      const val = e.currentTarget.value;
      setPassword(val);
      console.log(":: pass ::", val);

  };

  const handleSubmit = () => {

  } 

  const TextHeader = {
    title: "Get Started",
    contain: "welcome back",
  };

  const InputTexts = [
    {
      key: 1,
      placeholder: "Enter your username",
      type: "text",
      handleChange: handleUserName,
    },
    {
      key: 2,
      placeholder: "Enter your password",
      type: "password",
      handleChange: handlePassword,
    },
  ];

  const InputButton = {
    type: 'submit',
    text: 'Authenticate',
    CustomClass: 'bg-red-500',
  }



  return (
    <div className="login flex flex-row flex-wrap h-[100vh]">

      <div className="max-lg:hidden relative w-1/2 bg-slate-200 h-full">
        <Logo className="gap-2 absolute top-4 left-4" />
        <ImgBlock source={cover} />
      </div>
      <div className="w-[50%] max-lg:w-[100%] pt-[6rem]">
        <CustomForm TextHeader={TextHeader} InputTexts={InputTexts} InputButton={InputButton} SubmitAction={handleSubmit} />
      </div>
    </div>
  );
};

export default Login;
