import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Backend ke login route par request bhej rahe hain
      const response = await axios.post(
        "https://oxege-backend.onrender.com/api/auth/login",
        {
          email,
          password,
        },
      );

      // Agar login successful ho gaya, toh token ko local storage mein save kar lo
      localStorage.setItem("adminToken", response.data.token);

      // Aur seedha dashboard par bhej do
      navigate("/admin/dashboard");
    } catch (err) {
      // Agar email/password galat hua toh error show karo
      setError(
        err.response?.data?.message || "Invalid credentials. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] font-sans px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#00A8A8]/10 text-[#00A8A8] rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7a4 4 0 00-8 0v4h8z"
              ></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-[#0F172A]">Admin Portal</h2>
          <p className="text-[#64748B] text-sm mt-2 font-medium">
            Please sign in to manage your website
          </p>
        </div>

        {/* Error Message Display */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 text-sm font-semibold rounded-xl text-center">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-[#0F172A] mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00A8A8]/50 focus:border-[#00A8A8] transition-all"
              placeholder="admin@oxege.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-[#0F172A] mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00A8A8]/50 focus:border-[#00A8A8] transition-all"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full text-white font-bold py-3.5 rounded-xl transition-all duration-300 shadow-[0_4px_14px_rgba(0,168,168,0.25)] ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#00A8A8] hover:bg-[#008c8c] hover:-translate-y-0.5"
            }`}
          >
            {loading ? "Signing In..." : "Sign In to Dashboard"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
