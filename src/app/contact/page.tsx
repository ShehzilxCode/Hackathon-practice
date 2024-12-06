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
    faPhoneAlt,
    faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Contact = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    return (
    <>
<nav className="border-b bg-white">
            <div className="flex justify-between items-center py-4 px-8">
                <div className="text-2xl font-bold">Exclusive</div>
                <div className="hidden md:flex space-x-8">
                    <a href="/home" className="hover:underline">Home</a>
                    <a href="/contact" className="hover:underline border-b-2 border-gray-500">Contact</a>
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
        <div className="container mx-auto p-6 my-28 max-w-7xl">
            <div className="text-sm text-gray-500 mb-28">
                <a href="#" className="hover:underline">Home</a> / <span className="text-black">Contact</span>
            </div>
            <div className="flex flex-col md:flex-row gap-6">
                {/* Contact Information Section */}
                <div className="bg-white p-6 rounded-lg shadow-md flex-1 md:w-1/4">
                    <div className="flex items-center mb-6">
                        <div className="bg-red-500 text-white rounded-full p-4 mr-4">
                            <FontAwesomeIcon icon={faPhoneAlt} className="text-2xl" />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-black mb-2">Call To Us</h2>
                            <p className="text-black mb-2">We are available 24/7, 7 days a week.</p>
                            <p className="text-black mb-2">Phone: +8801611112222</p>
                        </div>
                    </div>
                    <hr className="my-6 border-black" />
                    <div className="flex items-center">
                        <div className="bg-red-500 text-white rounded-full p-4 mr-4">
                            <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-black mb-2">Write To Us</h2>
                            <p className="text-black mb-2">Fill out our form and we will contact you within 24 hours.</p>
                            <p className="text-black mb-2">Emails: customer@exclusive.com</p>
                            <p className="text-black mb-2">Emails: support@exclusive.com</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className="bg-white p-6 rounded-lg shadow-md flex-1 md:w-3/4">
                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            <input
                                type="text"
                                placeholder="Your Name *"
                                className="border border-gray-300 p-3 rounded-md w-full bg-gray-100 placeholder-gray-500"
                            />
                            <input
                                type="email"
                                placeholder="Your Email *"
                                className="border border-gray-300 p-3 rounded-md w-full bg-gray-100 placeholder-gray-500"
                            />
                            <input
                                type="text"
                                placeholder="Your Phone *"
                                className="border border-gray-300 p-3 rounded-md w-full bg-gray-100 placeholder-gray-500"
                            />
                        </div>
                        <textarea
                            placeholder="Your Message"
                            className="border border-gray-300 p-3 rounded-md w-full h-32 mb-6 bg-gray-100 placeholder-gray-500"
                        ></textarea>
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition duration-200"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default Contact;
