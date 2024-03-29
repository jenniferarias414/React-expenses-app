import React from 'react';

import { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../store/authContext";
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const AuthScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(true);
  const { dispatch } = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();
    const body = { username, password };
    axios
      .post(register ? "/register" : "/login", body)
      .then((res) => {
        dispatch({ type: "LOGIN", payload: res.data });
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.response.data.error || 'An error occurred');
      });
    console.log("submitHandler called");
  };

  return (
    <main>
      <h1>Welcome!</h1>
      <form className="form auth-form" onSubmit={submitHandler}>
        <input className="form-input" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        <input className="form-input" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button className="form-btn">{register ? "Sign Up" : "Login"}</button>
      </form>
      <button className="form-btn" onClick={() => setRegister(!register)}>
        Need to {register ? "Login" : "Sign Up"}?
      </button>
    </main>
  );
};

export default AuthScreen