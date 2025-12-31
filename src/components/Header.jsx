// src/components/Header.jsx
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default function Header({ onCategoryChange }) {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      const res = await axios.get("https://dummyjson.com/products/categories");
      setCategories(res.data);
    }
    getCategories();
  }, []);

  return (
    <header className="bg-gray-900 text-white px-6 py-4">
      <div className="flex items-center max-w-7xl mx-auto">
        {/* Logo */}
      <h1 className="text-2xl font-bold text-indigo-400">MyStore</h1>

        <nav className="hidden md:flex gap-8 text-lg ml-auto">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/product">Product</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/userforms">UserForms</NavLink>

        </nav>
      </div>

      {open && (
        <div className="bg-gray-800 mt-3 p-4 rounded max-w-7xl mx-auto">
          <p
            className="cursor-pointer hover:text-indigo-400 mb-2"
            onClick={() => {
              onCategoryChange && onCategoryChange("");
              setOpen(false);
            }}
          >
            All Products
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
            {categories.map((cat) => (
              <p
                key={cat}
                className="cursor-pointer hover:text-indigo-400 capitalize"
                onClick={() => {
                  onCategoryChange && onCategoryChange(cat);
                  setOpen(false);
                }}
              >
                {cat}
              </p>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
