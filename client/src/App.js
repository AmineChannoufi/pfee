import React from "react";
import {  Route, Routes } from "react-router-dom";
import "./App.css";
import Registration from "./pages/Registration";
import Main from "./pages/Main";
import Home from "./pages/Home";
import Adherent from "./pages/Adherent";
import Pres from "./pages/Pres";
import Login from "./pages/Login";
import Admin from "./dashboard/Admin";
import Normal from "./dashboard/Normal";
import Contact from "./pages/Contact";


function App() {
  return (
    <Routes>
      <Route path="/Registration" element={<Registration />} />
      <Route path="/" element={<Main />} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/Pres" element={<Pres/>} />
      <Route path="/Adherent" element={<Adherent/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Login/Admin" element={<Admin/>} />
      <Route path="/Login/Normal" element={<Normal/>} />
      <Route path="/Contact" element={<Contact/>} />




    </Routes>
  );
}

export default App;
