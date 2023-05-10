import React, { useCallback, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from "../context/AuthContext";
import CustomForm from "../components/CustomForm/CustomForm";
import ImgBlock from "../components/ImgBlock/ImgBlock";
import cover from "../assets/img/lover.png";
import Logo from "../components/ui/Logo/Logo";

const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn } = UserAuth();
  const navigate = useNavigate();


  const handleUserName = (e) => {

    const val = e.currentTarget.value;
    setEmail(val);
    console.log(':: text value ::', val);
  
  };

  const handlePassword = (e) => {
    
      const val = e.currentTarget.value;
      setPassword(val);
      console.log(":: pass ::", val);

  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signIn(email, password);
      setLoading(false);
      navigate('/home');
    } catch (error) {
      setError(error.message);
      setLoading(false);
      console.log(":: error ::", error.message);
    }

  } 

  const TextHeader = {
    title: "Get Started",
    contain: "welcome back",
  };

  const InputTexts = [
    {
      key: 1,
      placeholder: "Enter your email",
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
        { loading && 
          <div className="
          bg-red-400 w-fit p-[1rem] 
          rounded text-white font-bold
          fixed top-32 right-10">
            Loading ...
          </div>}
        <CustomForm TextHeader={TextHeader} InputTexts={InputTexts} InputButton={InputButton} SubmitAction={handleSubmit} CustomClass="flex flex-col justify-center align-center gap-6" />
        { error && 
          <div className="p-[2rem] bg-red-400 rounded m-[2rem] text-white font-bold">
            ! { error }
          </div>      
        }
      </div>
    </div>
  );
};

export default Login;
