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
import { useState } from "react";

const Cart = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [quantities, setQuantities] = useState({
    lcdMonitor: 1,
    hiGamepad: 2,
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleQuantityChange = (product: string, value: number) => {
    setQuantities((prev) => ({
      ...prev,
      [product]: value,
    }));
  };

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
                        <span className="absolute top-0 left-0 bg-red-500 text-white text-xs font-bold rounded-full w-3 h-3 flex items-center justify-center">
                            4
                        </span>
                    </a>

                    {/* Shopping Cart icon */}
                    <a href="/cart" className="relative">
                        <FontAwesomeIcon icon={faShoppingCart} className="text-black text-xl" />
                        <span className="absolute top-0 left-0 bg-red-500 text-white text-xs font-bold rounded-full w-3 h-3 flex items-center justify-center">
                            2
                        </span>
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

    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6">
      {/* Breadcrumb Navigation */}
      <nav className="text-sm mb-6">
        <a href="#" className="text-gray-500">Home</a> / <span className="text-gray-700">Cart</span>
      </nav>

      {/* Headings Tab */}
      <div className="bg-white shadow-md overflow-hidden mb-6">
        <table className="w-full bg-white">
          <thead>
            <tr>
              <th className="py-4 px-4 border-b text-left w-1/4">Product</th>
              <th className="py-4 px-4 border-b text-center w-1/4">Price</th>
              <th className="py-4 px-4 border-b text-center w-1/4">Quantity</th>
              <th className="py-4 px-4 border-b text-right w-1/4">Subtotal</th>
            </tr>
          </thead>
        </table>
      </div>

      {/* Items Tab */}
      <div className="space-y-4">
        {/* LCD Monitor Row */}
        <div className="bg-white shadow-md p-4 flex items-center relative">
          {/* Cross Icon */}
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-red-500 text-white text-xs flex items-center justify-center rounded-full cursor-pointer">
            ✕
          </div>
          <img
            src="images/cart/Monitor-Cart-Small.png"
            alt="LCD Monitor"
            className="w-12 h-12 mr-4"
          />
          <div className="flex-1">
            <span className="block text-gray-800 font-medium">LCD Monitor</span>
          </div>
          <div className="text-center w-1/4">$650</div>
          <div className="text-center w-1/4">
            <input
              type="number"
              value={quantities.lcdMonitor}
              onChange={(e) =>
                handleQuantityChange("lcdMonitor", parseInt(e.target.value) || 0)
              }
              className="border border-gray-300 w-16 text-center"
            />
          </div>
          <div className="text-right w-1/4">${quantities.lcdMonitor * 650}</div>
        </div>

        {/* HI Gamepad Row */}
        <div className="bg-white shadow-md p-4 flex items-center relative">
          {/* Cross Icon */}
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-red-500 text-white text-xs flex items-center justify-center rounded-full cursor-pointer">
            ✕
          </div>
          <img
            src="images/cart/HI Gamepad-Cart.png"
            alt="HI Gamepad"
            className="w-12 h-12 mr-4"
          />
          <div className="flex-1">
            <span className="block text-gray-800 font-medium">HI Gamepad</span>
          </div>
          <div className="text-center w-1/4">$550</div>
          <div className="text-center w-1/4">
            <input
              type="number"
              value={quantities.hiGamepad}
              onChange={(e) =>
                handleQuantityChange("hiGamepad", parseInt(e.target.value) || 0)
              }
              className="border border-gray-300 w-16 text-center"
            />
          </div>
          <div className="text-right w-1/4">${quantities.hiGamepad * 550}</div>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="flex justify-between items-center mt-4">
        <button className="bg-white border border-gray-300 text-black py-3 px-6">
          Return To Shop
        </button>
        <button className="bg-white border border-gray-300 text-black py-3 px-6">
          Update Cart
        </button>
      </div>

      {/* Coupon and Cart Total Section */}
      <div className="flex flex-col md:flex-row justify-between items-start mt-8">
        {/* Coupon Input */}
        <div className="flex items-center mb-4 md:mb-0">
          <input
            type="text"
            placeholder="Coupon Code"
            className="border border-black py-2 px-4"
          />
          <button className="bg-red-500 text-white py-2 px-4 ml-2 rounded">
            Apply Coupon
          </button>
        </div>

        {/* Cart Total */}
        <div className="border border-black p-4 w-full md:w-1/3">
          <h2 className="text-lg font-semibold mb-4">Cart Total</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>${quantities.lcdMonitor * 650 + quantities.hiGamepad * 550}</span>
          </div>
          <hr className="border-gray-300" />
          <div className="flex justify-between mb-2 mt-2">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <hr className="border-gray-300" />
          <div className="flex justify-between mb-4 mt-2">
            <span>Total:</span>
            <span>${quantities.lcdMonitor * 650 + quantities.hiGamepad * 550}</span>
          </div>
          <button className="bg-red-500 text-white py-2 px-4 w-full rounded">
            <a href="/checkout">
            Proceed to checkout
            </a>
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Cart;
