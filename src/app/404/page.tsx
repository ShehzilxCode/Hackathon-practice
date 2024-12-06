"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSearch,
    faHeart,
    faShoppingCart,
    faBars,
    faUser,
    faUserCog,
    faBoxOpen,
    faTimesCircle,
    faStar,
    faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

const Page404 = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    return (
    <>
<nav className="border-b bg-white">
            <div className="flex justify-between items-center py-4 px-8">
                <div className="text-2xl font-bold">Exclusive</div>
                <div className="hidden md:flex space-x-8">
                    <a href="/home" className="hover:underline">Home</a>
                    <a href="/contact" className="hover:underline">Contact</a>
                    <a href="/about" className="hover:underline">About</a>
                    <a href="/signup" className="hover:underline">Sign Up</a>
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

                    {/* Heart icon */}
                    <a href="/wishlist" className="relative">
                        <FontAwesomeIcon icon={faHeart} className="text-black text-xl" />
                    </a>

                    {/* Shopping Cart icon */}
                    <a href="/cart" className="relative">
                        <FontAwesomeIcon icon={faShoppingCart} className="text-black text-xl" />
                    </a>

                    {/* User icon */}
                    <div className="relative z-50"> 
    <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className={`focus:outline-none w-10 h-10 flex items-center justify-center rounded-full ${
            isDropdownOpen ? 'bg-red-500 text-white' : 'text-black'
        }`}
    >
        <FontAwesomeIcon icon={faUser} className="text-xl" />
    </button>
    {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-black bg-opacity-90 backdrop-blur-lg rounded-md shadow-lg py-2 z-50"> {/* Ensure dropdown has high z-index */}
            <a
                href="/myaccount"
                className="flex items-center px-4 py-2 text-sm text-white hover:bg-gray-700"
            >
                <FontAwesomeIcon icon={faUserCog} className="mr-3" />
                Manage My Account
            </a>
            <a
                href="/orders"
                className="flex items-center px-4 py-2 text-sm text-white hover:bg-gray-700"
            >
                <FontAwesomeIcon icon={faBoxOpen} className="mr-3" />
                My Orders
            </a>
            <a
                href="/cancellations"
                className="flex items-center px-4 py-2 text-sm text-white hover:bg-gray-700"
            >
                <FontAwesomeIcon icon={faTimesCircle} className="mr-3" />
                My Cancellations
            </a>
            <a
                href="/reviews"
                className="flex items-center px-4 py-2 text-sm text-white hover:bg-gray-700"
            >
                <FontAwesomeIcon icon={faStar} className="mr-3" />
                My Reviews
            </a>
            <a
                href="/logout"
                className="flex items-center px-4 py-2 text-sm text-white hover:bg-gray-700"
            >
                <FontAwesomeIcon icon={faSignOutAlt} className="mr-3" />
                Logout
            </a>
        </div>
    )}
</div>
                </div>

                <button
                    className="md:hidden flex items-center focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <FontAwesomeIcon icon={faBars} className="text-2xl" />
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t px-8 py-4">
                    <div className="space-y-4">
                        <a href="/home" className="block hover:underline">Home</a>
                        <a href="/contact" className="block hover:underline">Contact</a>
                        <a href="/about" className="block hover:underline">About</a>
                        <a href="/signup" className="block hover:underline">Sign Up</a>
                    </div>
                </div>
            )}
        </nav>
        <div className="relative min-h-screen flex flex-col items-center justify-center">
            {/* Top Left Breadcrumb */}
            <div className="absolute top-10 left-10 text-gray-500">
                <span>Home</span> / <span className="text-black">404 Error</span>
            </div>
            {/* Centered Content */}
            <div className="text-center px-4">
                <h1 className="text-6xl md:text-8xl mb-8 mt-8">404 Not Found</h1>
                <p className="text-gray-600 mb-12 text-lg md:text-xl">
                    Your visited page not found. You may go home page.
                </p>
                <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition duration-200">
                    Back to home page
                </button>
            </div>
        </div>
        </>
    );
};

export default Page404;
