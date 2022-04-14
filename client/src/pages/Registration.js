import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../App.css";
import { useNavigate } from "react-router";

export default function Registration() {
  const nav = useNavigate();
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  

  Axios.defaults.withCredentials = true;

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      name: usernameReg,
      password: passwordReg,
    })
      .then((res) => {
        setUsernameReg("");
        setPasswordReg("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  

  return (
    <div className="App">
      <div className="registration">
        <h1>Registration</h1>
        <label>Username</label>
        <input
          type="text"
          value={usernameReg}
          onChange={(e) => setUsernameReg(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          value={passwordReg}
          onChange={(e) => setPasswordReg(e.target.value)}
        />
        <button onClick={register}> Register </button>
      </div>

      

    
    </div>
  );
}
