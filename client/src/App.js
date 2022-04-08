import React from "react";
import {  Route, Routes } from "react-router-dom";
import "./App.css";
import Registration from "./pages/Registration";
import Main from "./pages/Main";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Registration />} />
      <Route path="/" element={<Main />} />
    </Routes>
  );
}

export default App;
