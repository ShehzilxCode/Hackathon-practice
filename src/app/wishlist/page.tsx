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
  faTrash,
  faEye,
 } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

const Wishlist = () => {
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
                        <span className="absolute top-0 left-0 bg-red-500 text-white text-xs font-bold rounded-full w-3 h-3 flex items-center justify-center">
                            4
                        </span>
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

      <div className="p-4">
        <div className="max-w-screen-xl mx-auto">
          {/* Wishlist Header */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-semibold">Wishlist (4)</h1>
            <button className="border border-gray-900 px-4 py-2">Move All To Bag</button>
          </div>

          {/* Wishlist Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[{
              id: 1,
              discount: "35%",
              image: "/images/wishlist/wishlist1.png",
              name: "Gucci duffle bag",
              price: "$960",
              oldPrice: "$1160",
            },
            {
              id: 2,
              image: "/images/wishlist/wishlist2.png",
              name: "RGB Liquid CPU Cooler",
              price: "$1960",
            },
            {
              id: 3,
              image: "/images/wishlist/wishlist3.png",
              name: "GP11 Shooter USB Gamepad",
              price: "$550",
            },
            {
              id: 4,
              image: "/images/wishlist/wishlist4.png",
              name: "Quilted Satin Jacket",
              price: "$750",
            }].map((item) => (
              <div key={item.id} className="border p-4 relative">
                {item.discount && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs">
                    {item.discount}
                  </span>
                )}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover mb-4"
                />
                <button className="absolute top-2 right-2 text-gray-500 bg-white rounded-full p-1">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
                <button className="w-full bg-black text-white py-2 mb-2">
                  Add To Cart
                </button>
                <h2 className="text-lg">{item.name}</h2>
                <div className="flex items-center">
                  <span className="text-red-500 text-xl">{item.price}</span>
                  {item.oldPrice && (
                    <span className="text-gray-500 line-through ml-2">
                      {item.oldPrice}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Just For You Section */}
          <div className="flex items-center mb-4">
            <div className="w-2 h-8 bg-red-500 mr-2"></div>
            <h2 className="text-2xl font-semibold">Just For You</h2>
            <button className="ml-auto border border-gray-900 px-4 py-2">
              See All
            </button>
          </div>

          {/* Recommended Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[{
              id: 1,
              discount: "35%",
              image: "/images/wishlist/justforyou1.png",
              name: "ASUS FHD Gaming Laptop",
              price: "$960",
              oldPrice: "$1160",
              rating: 65,
            },
            {
              id: 2,
              image: "/images/wishlist/justforyou2.png",
              name: "IPS LCD Gaming Monitor",
              price: "$1160",
              rating: 65,
            },
            {
              id: 3,
              new: true,
              image: "/images/wishlist/justforyou3.png",
              name: "HAVIT HV-G92 Gamepad",
              price: "$560",
              rating: 65,
            },
            {
              id: 4,
              image: "/images/wishlist/justforyou4.png",
              name: "AK-900 Wired Keyboard",
              price: "$200",
              rating: 65,
            }].map((item) => (
              <div key={item.id} className="border p-4 relative">
                {item.discount && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs">
                    {item.discount}
                  </span>
                )}
                {item.new && (
                  <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs">
                    NEW
                  </span>
                )}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover mb-4"
                />
                <a href="/productdetail" className="absolute top-2 right-2 text-gray-500 bg-white rounded-full p-1">
                  <FontAwesomeIcon icon={faEye} />
                </a>
                <button className="w-full bg-black text-white py-2 mb-2">
                  Add To Cart
                </button>
                <h2 className="text-lg">{item.name}</h2>
                <div className="flex items-center">
                  <span className="text-red-500 text-xl">{item.price}</span>
                  {item.oldPrice && (
                    <span className="text-gray-500 line-through ml-2">
                      {item.oldPrice}
                    </span>
                  )}
                </div>
                <div className="flex items-center mt-2">
                  {[...Array(5)].map((_, index) => (
                    <FontAwesomeIcon key={index} icon={faStar} className="text-yellow-500" />
                  ))}
                  <span className="text-gray-500 ml-2">({item.rating})</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
