"use client";

import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="border-b bg-white">
            <div className="flex justify-between items-center py-4 px-8">
                <div className="text-2xl font-bold">Exclusive</div>
                <div className="hidden md:flex space-x-8">
                    <a href="#" className="hover:underline border-b-2 border-gray-500">
                        Home
                    </a>
                    <a href="#" className="hover:underline">
                        Contact
                    </a>
                    <a href="#" className="hover:underline">
                        About
                    </a>
                    <a href="#" className="hover:underline">
                        Sign Up
                    </a>
                </div>

                <div className="hidden md:flex items-center space-x-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            className="bg-gray-200 border px-4 py-2 text-sm w-64"
                        />
                        <i className="fas fa-search absolute right-3 top-1/2 transform -translate-y-1/2 text-black"></i>
                    </div>
                    <i className="far fa-heart text-black"></i>
                    <i className="fas fa-shopping-cart text-black"></i>
                </div>
                <button
                    className="md:hidden flex items-center focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <i className="fas fa-bars text-2xl"></i>
                </button>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-white border-t px-8 py-4">
                    <div className="space-y-4">
                        <a href="#" className="block hover:underline">
                            Home
                        </a>
                        <a href="#" className="block hover:underline">
                            Contact
                        </a>
                        <a href="#" className="block hover:underline">
                            About
                        </a>
                        <a href="#" className="block hover:underline">
                            Sign Up
                        </a>
                    </div>
                    <div className="mt-4">
                        <div className="relative mb-4">
                            <input
                                type="text"
                                placeholder="What are you looking for?"
                                className="bg-gray-200 border px-4 py-2 text-sm w-full"
                            />
                            <i className="fas fa-search absolute right-3 top-1/2 transform -translate-y-1/2 text-black"></i>
                        </div>
                        <div className="flex items-center space-x-4">
                            <i className="far fa-heart text-black"></i>
                            <i className="fas fa-shopping-cart text-black"></i>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
