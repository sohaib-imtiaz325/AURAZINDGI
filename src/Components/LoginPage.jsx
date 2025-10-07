// src/Components/LoginPage.jsx
import React, { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, facebookProvider } from "./firebaseConfig";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logged in as: ${formData.email}`);
  };

  // Google login
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      alert(`Welcome ${user.displayName || user.email}!`);
    } catch (error) {
      console.error(error);
      alert("Google login failed");
    }
  };

  // Facebook login
  const handleFacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      const user = result.user;
      alert(`Welcome ${user.displayName || user.email}!`);
    } catch (error) {
      console.error(error);
      alert("Facebook login failed");
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

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-400">
              <input type="checkbox" className="accent-yellow-500" />
              Remember me
            </label>
            <a href="#" className="text-yellow-400 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-black font-semibold py-2.5 rounded-lg hover:bg-yellow-400 transition-colors shadow-[0_0_10px_rgba(255,215,0,0.4)]"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-center my-6">
          <span className="h-px bg-yellow-500/30 w-1/4"></span>
          <span className="text-gray-400 text-sm px-3">or continue with</span>
          <span className="h-px bg-yellow-500/30 w-1/4"></span>
        </div>

        {/* Social Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleGoogleLogin}
            className="flex-1 flex items-center justify-center gap-2 border border-yellow-500/30 py-2 rounded-lg bg-black/40 hover:bg-yellow-500/10 transition"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="w-5 h-5"
            />
            <span className="text-gray-200">Google</span>
          </button>

          <button
            onClick={handleFacebookLogin}
            className="flex-1 flex items-center justify-center gap-2 border border-yellow-500/30 py-2 rounded-lg bg-black/40 hover:bg-yellow-500/10 transition"
          >
            <img
              src="https://www.svgrepo.com/show/448224/facebook.svg"
              alt="facebook"
              className="w-5 h-5"
            />
            <span className="text-gray-200">Facebook</span>
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-400 mt-8">
          Don’t have an account?{" "}
          <a href="#" className="text-yellow-400 font-medium hover:underline">
            Create one
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
