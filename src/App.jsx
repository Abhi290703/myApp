// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Blog from "./pages/Blog";
import Auth from "./components/Auth"; // if Auth stays in components
import Mainlayout from "./layout/mainlayout";
import './App.css';

export default function App() {
  return (
    <Routes>
      
      <Route path="/auth" element={<Auth />} />
      <Route element={<Mainlayout />}>
        <Route index element={<Home />} />           {/* path="/" */}
        <Route path="products" element={<Product />} />
        <Route path="blog" element={<Blog />} />
      </Route>
    </Routes>
  );
}

