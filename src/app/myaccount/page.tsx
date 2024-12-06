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

const MyAccount = () => {
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

        <div className="min-h-screen flex flex-col items-center py-10">
            <div className="w-full max-w-7xl bg-white rounded-lg p-8">
                <div className="flex justify-between items-center mb-20">
                    <div className="text-gray-500">
                        <a href="#" className="hover:underline">Home</a> / <span className="text-black">My Account</span>
                    </div>
                    <div className="text-gray-500">
                        Welcome! <span className="text-red-500">Md Rimel</span>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/4 pr-8 mb-8 md:mb-0">
                        {/* Profile management section */}
                        <div className="mb-6">
                            <h2 className="text-lg font-bold mb-2">Manage My Account</h2>
                            <ul>
                                <li className="text-red-500 mb-2">My Profile</li>
                                <li className="text-gray-500 mb-2">Address Book</li>
                                <li className="text-gray-500">My Payment Options</li>
                            </ul>
                        </div>
                        <div className="mb-6">
                            <h2 className="text-lg font-bold mb-2">My Orders</h2>
                            <ul>
                                <li className="text-gray-500 mb-2">My Returns</li>
                                <li className="text-gray-500">My Cancellations</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-lg font-bold mb-2">My WishList</h2>
                        </div>
                    </div>
                    {/* Profile editing form */}
                    <div className="w-full md:w-3/4 bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-red-500 mb-6">Edit Your Profile</h2>
                        <form>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label className="block text-gray-700 mb-2">First Name</label>
                                    <input
                                        type="text"
                                        value="Md"
                                        className="w-full p-2 border border-gray-300 rounded bg-gray-200 text-gray-700 placeholder-gray-500"
                                        readOnly
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        value="Rimel"
                                        className="w-full p-2 border border-gray-300 rounded bg-gray-200 text-gray-700 placeholder-gray-500"
                                        readOnly
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        value="rimel1111@gmail.com"
                                        className="w-full p-2 border border-gray-300 rounded bg-gray-200 text-gray-700 placeholder-gray-500"
                                        readOnly
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 mb-2">Address</label>
                                    <input
                                        type="text"
                                        value="Kingston, 5236, United State"
                                        className="w-full p-2 border border-gray-300 rounded bg-gray-200 text-gray-700 placeholder-gray-500"
                                        readOnly
                                    />
                                </div>
                            </div>
                            <div className="mb-6">
                                <h3 className="text-lg font-bold text-gray-700 mb-4">Password Changes</h3>
                                <div className="mb-4">
                                    <input
                                        type="password"
                                        placeholder="Current Password"
                                        className="w-full p-2 border border-gray-300 rounded bg-gray-200 text-gray-700 placeholder-gray-500"
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="password"
                                        placeholder="New Password"
                                        className="w-full p-2 border border-gray-300 rounded bg-gray-200 text-gray-700 placeholder-gray-500"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        placeholder="Confirm New Password"
                                        className="w-full p-2 border border-gray-300 rounded bg-gray-200 text-gray-700 placeholder-gray-500"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <button type="button" className="text-gray-500 mr-4">Cancel</button>
                                <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded">Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default MyAccount;
