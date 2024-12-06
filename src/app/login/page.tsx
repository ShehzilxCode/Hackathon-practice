"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars,} from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

const Login = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav className="border-b bg-white">
        <div className="flex justify-between items-center py-4 px-8">
          <div className="text-2xl font-bold">Exclusive</div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Contact</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Sign Up</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-gray-200 border px-4 py-2 text-sm w-64"
              />
              <FontAwesomeIcon icon={faSearch} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black" />
            </div>
          </div>

          <button
            className="md:hidden flex items-center focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FontAwesomeIcon icon={faBars} className="text-2xl" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t px-8 py-4">
            <div className="space-y-4">
              <a href="#" className="block hover:underline">Home</a>
              <a href="#" className="block hover:underline">Contact</a>
              <a href="#" className="block hover:underline">About</a>
              <a href="#" className="block hover:underline">Sign Up</a>
            </div>
            <div className="mt-4">
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="bg-gray-200 border px-4 py-2 text-sm w-full"
                />
                <FontAwesomeIcon icon={faSearch} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black" />
              </div>
            </div>
          </div>
        )}
      </nav>
    <div className="flex items-center justify-center min-h-screen bg-white">
      {/* Login Container */}
      <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden max-w-6xl mx-auto">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src="https://storage.googleapis.com/a1aa/image/BYd2yUEaUeQWfUDtWRWbo1cG11b9Pa9XsEMz03eHU3kkUqvnA.jpg"
            alt="A shopping cart with a smartphone and shopping bags"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold mb-4">Log in to Exclusive</h2>
          <p className="mb-6">Enter your details below</p>

          <form>
            {/* Email/Phone Input */}
            <div className="mb-4">
              <input
                type="text"
                id="email"
                placeholder="Email or Phone Number"
                className="w-full py-2 px-3 border-b border-gray-300 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
              />
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full py-2 px-3 border-b border-gray-300 text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
              />
            </div>

            {/* Login Button and Forget Password */}
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Log In
              </button>
              <a
                href="#"
                className="inline-block align-baseline font-bold text-sm text-red-500 hover:text-red-800"
              >
                Forget Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
