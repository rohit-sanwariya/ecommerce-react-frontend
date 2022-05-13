import React from "react";
import {   Route, Routes } from "react-router-dom";
import "./App.scss";
import Login from "./Components/Login/Login";
import Home from "./Pages/Home";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/" element={<Home/>} />        
       
    
     
    </Routes>
  );
};

export default App;
