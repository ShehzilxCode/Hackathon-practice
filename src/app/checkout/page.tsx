"use client";

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
import { useState } from 'react';

const Checkout = () => {
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
                    <div className="relative z-50"> {/* Add z-50 to set a high stacking context */}
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
    <div className="container mx-auto p-4 mt-5">
      <div className="flex flex-col md:flex-row justify-between max-w-7xl mx-auto">
        {/* Billing Details Section */}
        <div className="w-full md:w-1/2 p-4">
          <nav className="text-sm text-gray-600 mb-8">
            <a href="#" className="hover:underline">Account</a> / 
            <a href="#" className="hover:underline"> My Account</a> / 
            <a href="#" className="hover:underline"> Product</a> / 
            <a href="#" className="hover:underline"> View Cart</a> / 
            <span className="font-bold"> CheckOut</span>
          </nav>
          <h2 className="text-2xl font-bold mb-4">Billing Details</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-500">First Name*</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded bg-gray-200" />
            </div>
            <div>
              <label className="block text-gray-500">Company Name</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded bg-gray-200" />
            </div>
            <div>
              <label className="block text-gray-500">Street Address*</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded bg-gray-200" />
            </div>
            <div>
              <label className="block text-gray-500">Apartment, floor, etc. (optional)</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded bg-gray-200" />
            </div>
            <div>
              <label className="block text-gray-500">Town/City*</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded bg-gray-200" />
            </div>
            <div>
              <label className="block text-gray-500">Phone Number*</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded bg-gray-200" />
            </div>
            <div>
              <label className="block text-gray-500">Email Address*</label>
              <input type="email" className="w-full p-2 border border-gray-300 rounded bg-gray-200" />
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <label className="text-gray-500">Save this information for faster check-out next time</label>
            </div>
          </form>
        </div>

        {/* Order Summary Section */}
        <div className="w-full md:w-1/2 p-4 bg-white shadow-md rounded">
          <div className="flex items-center mb-4">
            <img src="images/cart/Monitor-Cart-Small.png" alt="LCD Monitor" className="w-12 h-12 mr-4" />
            <span className="flex-1">LCD Monitor</span>
            <span>$650</span>
          </div>
          <div className="flex items-center mb-4">
            <img src="images/cart/HI Gamepad-Cart.png" alt="HI Gamepad" className="w-12 h-12 mr-4" />
            <span className="flex-1">HI Gamepad</span>
            <span>$1100</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>$1750</span>
          </div>
          <div className="border-t border-gray-300 my-4"></div>
          <div className="flex justify-between mb-2">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="border-t border-gray-300 my-4"></div>
          <div className="flex justify-between font-bold mb-4">
            <span>Total:</span>
            <span>$1750</span>
          </div>
          <div className="flex items-center mb-4">
            <input type="radio" name="payment" className="mr-2" />
            <span>Bank</span>
            <img src="images/checkout/bank.png" alt="Bank logos" className="ml-2" />
          </div>
          <div className="flex items-center mb-4">
            <input type="radio" name="payment" className="mr-2" />
            <span>Cash on delivery</span>
          </div>
          <div className="flex mb-4">
            <input type="text" placeholder="Coupon Code" className="flex-1 p-2 border border-gray-300 rounded-l bg-white" />
            <button className="bg-red-500 text-white p-2 rounded-r">Apply Coupon</button>
          </div>
          <button className="w-full bg-red-500 text-white p-2 rounded">Place Order</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Checkout;
