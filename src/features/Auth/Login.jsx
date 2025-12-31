import { Link } from "react-router-dom";

export default function Login() {
  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Sign In
        </h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          className="w-full mb-4 border-b-2 border-gray-300 py-2 focus:outline-none focus:border-indigo-600"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 border-b-2 border-gray-300 py-2 focus:outline-none focus:border-indigo-600"
        />

        {/* Sign In Button */}
        <button
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
        >
          Sign In
        </button>

        {/* Signup Link — ✅ NOW ATTACHED */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>

      </div>
    </div>
  );
}
