import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../App.css";
import { useNavigate } from "react-router";
import Validation from "./Validation";
export default function Registration() {
  const nav = useNavigate();
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [telephoneReg, settelephoneReg] = useState("");
  const [societeReg, setSocieteReg] = useState("");
  const [values, setValues] = useState("");
  const [errors, setErrors] = useState("");


  Axios.defaults.withCredentials = true;
 const handleFormSubmit=(event)=>{
   event.preventDefault();
   setErrors(Validation(values))
      register();
    
  }
  const register = () => {
    Axios.post("http://localhost:3001/register", {
      name: usernameReg,
      password: passwordReg,
      email: emailReg,
      telephone: telephoneReg,
      societe: societeReg,
    })
      .then((res) => {
        setUsernameReg("");
        setPasswordReg("");
        setEmailReg("");
        settelephoneReg("");
        setSocieteReg("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <div className="registration">
        <h1>Registration</h1>
        <div className="name">
        <label>username</label>
        <input
          name="username"
          type="text"
          value={usernameReg}
          onChange={(e) => setUsernameReg(e.target.value)}
        />
        {errors.username && <p className="error">{errors.username}</p>}
        </div>
        <div className="email">
        <label>Email</label>
        <input
        name="email"
          type="text"
          value={emailReg}
          onChange={(e) => setEmailReg(e.target.value)}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        </div>
        <div className="societe">
        <label>societe</label>
        <input
          type="text"
          value={societeReg}
          onChange={(e) => setSocieteReg(e.target.value)}
        />
         {errors.societe && <p className="error">{errors.societe}</p>}

      </div>
      <div className="telephone">
        <label>Telephone</label>
        <input
          type="text"
          value={telephoneReg}
          onChange={(e) => settelephoneReg(e.target.value)}
        />
         {errors.telephone && <p className="error">{errors.telephone}</p>}

      </div>
      <div className="password">
        <label>Password</label>
        <input
          type="password"
          value={passwordReg}
          onChange={(e) => setPasswordReg(e.target.value)}
        />
         {errors.password && <p className="error">{errors.password}</p>}

    </div>
        <button onClick={handleFormSubmit}> Register </button>
      </div>
    </div>
  );
}
