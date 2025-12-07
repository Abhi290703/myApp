import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-indigo-400 font-semibold"
      : "hover:text-indigo-300 transition";

  return (
    <header className="bg-gray-900 text-white px-6 py-4 shadow-lg">
      <div className="flex justify-between items-center max-w-7xl mx-auto">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-indigo-400">MyStore</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-lg">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/products" className={linkClass}>Products</NavLink>
          <NavLink to="/blog" className={linkClass}>Blog</NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden mt-4 flex flex-col gap-4 px-6 text-lg">
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/products" onClick={() => setOpen(false)}>Products</NavLink>
          <NavLink to="/blog" onClick={() => setOpen(false)}>Blog</NavLink>
        </nav>
      )}
    </header>
  );
}
