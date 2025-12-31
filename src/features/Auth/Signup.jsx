import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create Account
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full mb-4 border-b-2 border-gray-300 py-2 focus:outline-none focus:border-indigo-600"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full mb-4 border-b-2 border-gray-300 py-2 focus:outline-none focus:border-indigo-600"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 border-b-2 border-gray-300 py-2 focus:outline-none focus:border-indigo-600"
        />

        <input
          type="Conform-password"
          placeholder="Conform-Password"
          className="w-full mb-6 border-b-2 border-gray-300 py-2 focus:outline-none focus:border-indigo-600"
        />

        <button
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Sign Up
        </button>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Sign In
          </Link>
        </p>

      </div>
    </div>
  );
}
