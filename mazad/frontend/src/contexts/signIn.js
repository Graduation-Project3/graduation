import React, { useState } from "react";
import Axios from "axios";
import { createContext } from "react";
 export const SignInContext = createContext(' ');

const LoginProvider = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const state = {
    setEmail,
    setPassword,
    login,
    setMessage,
    email,
    password,
    message
  };

  function login() {
      console.log(email);
    Axios.post("/sign-in", {
        email: email,
        password: password 
    })
      .then((result) => {
        if (result.status === 200) {
          setMessage("Valid Login");
        }
        else {
          setMessage(result.data)
        }
      })
      .catch((err) => {
       if (!email) {
          setMessage("please enter your e-mail");
        } else if (!password) {
          setMessage("please enter your password");
        }
         else {
          setMessage("the e-mail or password  ");
        }
      });

  }

  return (
    <SignInContext.Provider value={state}>
      {props.children}
    </SignInContext.Provider>
  );
};

export default LoginProvider;