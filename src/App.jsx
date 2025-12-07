import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import "./App.css";
import Product from "./pages/Product";


export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product/>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/footer" element={<footer/>} />
      </Route>
    </Routes>
  );
}
