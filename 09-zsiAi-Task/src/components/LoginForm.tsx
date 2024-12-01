/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { AppDispatch, RootState } from "@/redux/store";
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "@/redux/slice/authSlice";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const LoginForm = () => {
  const [email, setEmail] = useState("testuser@gmail.com");
  const [password, setPassword] = useState("testuser@gmail.com");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, error } = useSelector((state: RootState) => state.auth);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const response = await axios.post(
        "https://api.zsimarketing.com/api/auth/user/login",
        {
          email,
          password,
        }
      );
      //   console.log(response)
      // Show response in an alert
      alert(
        `Login Successful!\n\nResponse:\n${JSON.stringify(
          response.data,
          null,
          2
        )}`
      );
      dispatch(
        loginSuccess({
          token: response.data.data.token,
          user: response.data.data.user,
        })
      );
    } catch (err: any) {
      dispatch(loginFailure(err.response?.data?.error || "Login failed"));
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded"
    >
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded pr-10" // Add 'pr-10' for icon space
            required
          />
          {/* Icon inside the input field */}
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2/4 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            {showPassword ? (
              <AiOutlineEyeInvisible size={20} />
            ) : (
              <AiOutlineEye size={20} />
            )}
          </button>
        </div>
      </div>

      <button
        type="submit"
        className={`w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${
          isLoading && "opacity-50 cursor-not-allowed"
        }`}
        disabled={isLoading}
      >
        {isLoading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
};

export default LoginForm;
