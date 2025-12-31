import { Routes, Route, useNavigate } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import "./App.css";
import Product from "./pages/Product";
import UserForms from "./pages/UserForms";
import Footer from "./pages/footer";
import Header from "./components/Header";
import Login from "./features/Auth/Login";
import Signup from "./features/Auth/Signup";

export default function App() {
  let navigate=useNavigate()

  let hidden=navigate.pathname ==='/'
  return (
    <div>
        {!hidden && Header}
      <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product/>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/userforms" element={<UserForms/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>} />
      </Route>
    </Routes>
    <Footer/>
    </div>
  );
}



