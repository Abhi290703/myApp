import { useState } from "react";

export default function Login({ changePage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      setErr("No user found! Please sign up first.");
      return;
    }

    if (savedUser.email === email && savedUser.password === password) {
      setErr("");
      alert("Login Successful!");
      window.location.href = "/"; // redirect to home
    } else {
      setErr("Invalid email or password!");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-6 py-12">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        
        <h2 className="text-3xl font-bold">Login</h2>
        {err && <p className="text-red-600 mt-2">{err}</p>}

        <form className="space-y-6 mt-6" onSubmit={handleLogin}>
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full mt-1 border p-2 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full mt-1 border p-2 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="w-full py-2 bg-indigo-600 text-white rounded">
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600">
          Don't have an account?{" "}
          <span
            className="text-indigo-600 font-semibold cursor-pointer"
            onClick={changePage}
          >
            Sign Up
          </span>
        </p>

      </div>
    </div>
  );
}
