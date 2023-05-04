import React, { useCallback, useRef, useState } from "react";
import CustomForm from "../components/CustomForm/CustomForm";
import ImgBlock from "../components/ImgBlock/ImgBlock";
import cover from "../assets/img/lover.png";
import Logo from "../components/ui/Logo/Logo";

const Login = () => {
  const inputs = useRef([]);
  
  const handleUserName = useCallback((e) => {
    const val = inputs[0];
    console.log('val :: ', inputs);
    /*
    setTimeout(() => {
        setUsername(val);
    }, 1000);
*/
  });

  const TextHeader = {
    title: "Get Started",
    contain: "welcome back",
  };


  const handlePassword = useCallback((e) => {
    const val = e.currentTarget.value;

    console.log("::: hey you I change, the password", val);
  });

  
  const addInputs = el => {
    if(el && !inputs.current.includes(el)){
        inputs.current.push(el)
    }
  }
  const InputTexts = [
    {
      key: 1,
      placeholder: "Enter your username",
      type: "text",
      handleChange: handleUserName,
      ref: addInputs,
    },
    {
      key: 2,
      placeholder: "Enter your password",
      type: "password",
      handleChange: handlePassword,
      ref: addInputs,
    },
  ];

  const InputButton = {
    type: 'button',
    text: 'test',
    CustomClass: 'bg-red-400',
    handleClick: () => { console.log('btn :: ', inputs) }
  }

  console.log('ref :: ', inputs)
  const [username, setUsername] = useState("");
  return (
    <div className="login flex flex-row flex-wrap h-[100vh]">

      <div className="max-lg:hidden relative w-1/2 bg-slate-200 h-full">
        <Logo className="gap-2 absolute top-4 left-4" />
        <ImgBlock source={cover} />
      </div>
      <div className="w-[50%] max-lg:w-[100%] pt-[6rem]">
        <CustomForm TextHeader={TextHeader} InputTexts={InputTexts} InputButton={InputButton} />
      </div>
    </div>
  );
};

export default Login;
