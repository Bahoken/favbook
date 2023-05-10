import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from "../context/AuthContext";
import Logo from "../components/ui/Logo/Logo";
import ImgBlock from "../components/ImgBlock/ImgBlock";
import CustomForm from "../components/CustomForm/CustomForm";
import cover from "../assets/img/lover.png";

const Signup = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser } = UserAuth();
  const navigate = useNavigate();

  const handleemail = (e) => {
    const val = e.currentTarget.value;
    setEmail(val);
    console.log(":: text value ::", val);
  };

  const handlePassword = (e) => {
    const val = e.currentTarget.value;
    setPassword(val);
    console.log(":: pass ::", val);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      navigate('/home')
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  const TextHeader = {
    title: "Get Started",
    contain: "Subscribe to get acces to Favbook",
  };

  const InputTexts = [
    {
      key: 1,
      placeholder: "Enter your email",
      type: "email",
      handleChange: handleemail,
    },
    {
      key: 2,
      placeholder: "Enter your password",
      type: "password",
      handleChange: handlePassword,
    },
  ];

  const InputButton = {
    type: "submit",
    text: "subscribe",
    CustomClass: "bg-red-500",
  };

  return (
    <div className="login flex flex-row flex-wrap h-[100vh]">
      <div className="max-lg:hidden relative w-1/2 bg-slate-200 h-full">
        <Logo className="gap-2 absolute top-4 left-4" />
        <ImgBlock source={cover} />
      </div>
      <div className="w-[50%] max-lg:w-[100%] pt-[6rem]">
        <CustomForm
          TextHeader={TextHeader}
          InputTexts={InputTexts}
          InputButton={InputButton}
          SubmitAction={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Signup;
