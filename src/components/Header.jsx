import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        <h1 className="text-xl font-bold">My Website</h1>

        <div className="space-x-6">
          <NavLink to="/" className="hover:text-yellow-300">Home</NavLink>
          <NavLink to="/products" className="hover:text-yellow-300">Products</NavLink>
          <NavLink to="/blog" className="hover:text-yellow-300">Blog</NavLink>
          <NavLink to="/login" className="hover:text-indigo-300">Login</NavLink>
            <NavLink to="/signup" className="hover:text-indigo-300">Signup</NavLink>
        </div>

      </div>
    </nav>
  );
}
