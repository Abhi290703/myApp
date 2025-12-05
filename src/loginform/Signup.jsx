import { useState } from "react";
import { regexConditions } from "../Regex/regexConditions";

export default function Signup({ changePage }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errMessage, setErrMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    if (!regexConditions.namePattern.test(formData.name)) {
      setErrMessage("Invalid Name");
      return false;
    }
    if (!regexConditions.emailPattern.test(formData.email)) {
      setErrMessage("Invalid Email");
      return false;
    }
    if (!regexConditions.passPattern.test(formData.password)) {
      setErrMessage("Weak Password");
      return false;
    }

    setErrMessage("");
    return true;
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (validateForm()) {
      localStorage.setItem("user", JSON.stringify(formData));
      alert("Signup Successful! Please Login.");
      changePage(); // switch to login
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-6 py-12">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">

        <h2 className="text-3xl font-bold">Create Account</h2>
        {errMessage && <p className="text-red-600 mt-2">{errMessage}</p>}

        <form className="space-y-6 mt-6" onSubmit={handleSignup}>
          <div>
            <label className="text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="name"
              className="w-full border p-2 rounded mt-1"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border p-2 rounded mt-1"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              className="w-full border p-2 rounded mt-1"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button className="w-full py-2 bg-blue-600 text-white rounded">
            Sign Up
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <span
            className="text-indigo-600 font-semibold cursor-pointer"
            onClick={changePage}
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
}
