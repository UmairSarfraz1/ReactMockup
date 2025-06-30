import React from "react";
import { HiLockClosed, HiMail } from "react-icons/hi";
import { Link } from "react-router-dom";

const Login = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary p-4">
    <div className="w-full max-w-md dark:bg-gray-200 rounded-2xl shadow-xl overflow-hidden">
      <div className="dark:bg-gray-800 text-gray-900 p-8 text-center">
        <h1 className="text-3xl font-bold text-white">Mockup Portal</h1>
        <p className="text-white mt-2">Premium Web Design</p>
      </div>

      <div className="p-8">
        <div className="space-y-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiMail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              placeholder="Email address"
              className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiLockClosed className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div className="flex items-center justify-between py-2">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-700"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-primary hover:text-primary-dark"
              >
                Forgot password?
              </a>
            </div>
          </div>
          <Link to="/dashboard">
            <button className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 px-4 rounded-lg transition duration-300 transform hover:-translate-y-0.5">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Login;
