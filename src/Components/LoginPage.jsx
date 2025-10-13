// src/Components/LoginPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ React Router hook

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate(); // ✅ to navigate to Dashboard after login

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic check (you can replace with real auth)
    if (formData.email && formData.password) {
      alert(`Logged in as: ${formData.email}`);
      navigate("/Dashboard"); // ✅ Redirect to Dashboard page
    } else {
      alert("Please enter both email and password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 p-4">
      <div className="w-full max-w-md bg-gradient-to-b from-gray-900 to-black border border-yellow-500/30 rounded-3xl shadow-[0_0_25px_rgba(255,215,0,0.15)] p-8 text-gray-100">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-wide text-yellow-400">
            Welcome Back ✨
          </h1>
          <p className="text-gray-400 text-sm mt-2">Sign in to your account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2 bg-black/40 border border-yellow-500/30 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="••••••••"
              className="w-full px-4 py-2 bg-black/40 border border-yellow-500/30 rounded-lg text-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-black font-semibold py-2.5 rounded-lg hover:bg-yellow-400 transition-colors shadow-[0_0_10px_rgba(255,215,0,0.4)]"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
