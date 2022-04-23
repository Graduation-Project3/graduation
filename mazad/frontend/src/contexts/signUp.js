import React, { useState } from "react";
import axios from "axios";
import { createContext } from "react";
 export const SignUpContext = createContext(' ');

const RegisterProvider = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const state = {
    setFirstName,
    setLastName,
    setCountry,
    setEmail,
    setPassword,
    setConfirmPassword,
    addNewUser,
    setPhone,
    setLocation,
    setMessage,
    phone,
    message,
    firstName,
    lastName,
    country,
    email,
    location,
    password,
    confirmPassword,
  };

  function addNewUser() {
    axios
      .post("/signUp", {
        firstName,
        lastName,
        country,
        email,
        password,
        confirmPassword,
        location,
        phone,
      })
      .then((result) => {
        if (result.status === 201) {
          setMessage("Your Account Is Ready");
        }
        else {
          setMessage(result.data)
        }
      })
      .catch((err) => {
        console.log(err);
        if (!firstName) {
          setMessage("please enter your first name");
        } else if (!lastName) {
          setMessage("please enter your last name");
        } else if (!location) {
          setMessage("please enter your location");
        } else if (!email) {
          setMessage("please enter your e-mail");
        } else if (!password) {
          setMessage("please enter your password");
        } else if (!confirmPassword) {
          setMessage("please confirm your password here");
        } else if (password !== confirmPassword) {
          setMessage("password does not match");
        } else {
          setMessage("the e-mail already exist");
        }
      });

  }

  return (
    <SignUpContext.Provider value={state}>
      {props.children}
    </SignUpContext.Provider>
  );
};

export default RegisterProvider;