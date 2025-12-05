// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Blog from "./pages/Blog";
import Mainlayout from "./layout/mainlayout";
import './App.css';
import { regexConditions } from "./Regex/regexCondition";
import Auth from "./components/Auth";
import Login from "./loginform/login";
import Signup from "./loginform/signup";


export default function App() {
  return (

      
    <Routes>
      
      <Route path="/Auth" element={<Auth/>} />
      <Route element={<Mainlayout />}>
        <Route index element={<Home />} />          
        <Route path="/Products" element={<Product />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
      </Route>
    </Routes>
  );
}
