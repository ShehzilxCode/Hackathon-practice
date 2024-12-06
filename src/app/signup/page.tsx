"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars,} from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

const SignUp = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
      <nav className="border-b bg-white">
        <div className="flex justify-between items-center py-4 px-8">
          <div className="text-2xl font-bold">Exclusive</div>
          <div className="hidden md:flex space-x-8">
          <a href="/home" className="hover:underline">Home</a>
            <a href="/contact" className="hover:underline">Contact</a>
            <a href="/about" className="hover:underline">About</a>
            <a href="/signup" className="hover:underline border-b-2 border-gray-500">Sign Up</a>
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
              <a href="/home" className="block hover:underline">Home</a>
              <a href="/contact" className="block hover:underline">Contact</a>
              <a href="/about" className="block hover:underline">About</a>
              <a href="/signup" className="block hover:underline">Sign Up</a>
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
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white rounded-lg flex flex-col md:flex-row w-full max-w-6xl">
                {/* Left Section: Image */}
                <div className="md:w-1/2 p-6 flex items-center justify-center">
                    <img
                        src="https://storage.googleapis.com/a1aa/image/BYd2yUEaUeQWfUDtWRWbo1cG11b9Pa9XsEMz03eHU3kkUqvnA.jpg"
                        alt="A smartphone leaning against a shopping cart with shopping bags"
                        className="w-full h-auto rounded-lg object-cover"
                    />
                </div>
                {/* Right Section: Form */}
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-4">Create an account</h2>
                    <p className="text-gray-600 mb-6">Enter your details below</p>
                    <form>
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-gray-500"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Email or Phone Number"
                                className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-gray-500"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-gray-500"
                            />
                        </div>
                        <button className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition duration-200">
                            Create Account
                        </button>
                        <div className="flex items-center justify-center my-6">
                            <hr className="w-full border-gray-300" />
                            <span className="px-2 text-gray-500">or</span>
                            <hr className="w-full border-gray-300" />
                        </div>
                        <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg flex items-center justify-center hover:bg-gray-100 transition duration-200">
                            <img
                                src="images/login/Icon-Google.png"
                                alt="Google logo"
                                className="w-5 h-5 mr-2"
                            />
                            Sign up with Google
                        </button>
                    </form>
                    <p className="text-gray-600 mt-6 text-center">
                        Already have an account?{" "}
                        <a href="/login" className="text-black underline">
                            Log in
                        </a>
                    </p>
                </div>
            </div>
        </div>
        </>
    );
};

export default SignUp;
