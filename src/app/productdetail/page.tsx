"use client"

import { useState } from 'react';
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
    faStarHalfAlt,
    faTruck,
    faUndo
} from '@fortawesome/free-solid-svg-icons';

const products = [
    {
        id: 1,
        discount: "-40%",
        image: "images/productdetails/relateditem1.png",
        name: "HAVIT HV-G92 Gamepad",
        price: "$120",
        oldPrice: "$160",
        rating: 5,
        reviews: 88
    },
    {
        id: 2,
        discount: "-35%",
        image: "images/productdetails/relateditem2.png",
        name: "AK-900 Wired Keyboard",
        price: "$960",
        oldPrice: "$1160",
        rating: 4,
        reviews: 75
    },
    {
        id: 3,
        discount: "-30%",
        image: "images/productdetails/relateditem3.png",
        name: "IPS LCD Gaming Monitor",
        price: "$370",
        oldPrice: "$400",
        rating: 5,
        reviews: 99
    },
    {
        id: 4,
        discount: "-30%",
        image: "images/productdetails/relateditem4.png",
        name: "RGB liquid CPU Cooler",
        price: "$160",
        oldPrice: "$170",
        rating: 4,
        reviews: 65
    }
];
const ProductCard = ({ product }) => (
    <div className="bg-white p-4 rounded-lg shadow-md relative group">
        <div className="relative">
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">{product.discount}</span>
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-t-lg" />
            <div className="absolute top-2 right-2 flex space-x-2">
                <button className="bg-white p-1 rounded-full shadow">
                    <i className="far fa-heart"></i>
                </button>
                <button className="bg-white p-1 rounded-full shadow">
                    <i className="far fa-eye"></i>
                </button>
            </div>
        </div>
        <h3 className="mt-4 text-sm font-semibold">{product.name}</h3>
        <div className="flex items-center mt-2">
            <span className="text-red-500 text-lg font-bold">{product.price}</span>
            <span className="text-gray-500 line-through ml-2">{product.oldPrice}</span>
        </div>
        <div className="flex items-center mt-2">
            <div className="flex text-yellow-400">
                {Array.from({ length: product.rating }).map((_, index) => (
                    <FontAwesomeIcon icon={faStar} key={index} />
                ))}
                {Array.from({ length: 5 - product.rating }).map((_, index) => (
                    <FontAwesomeIcon icon={faStar} key={index} />
                ))}
            </div>
            <span className="text-gray-500 text-sm ml-2">({product.reviews})</span>
        </div>
        
        {/* Add to Cart Button appears on hover */}
        <button className="absolute bottom-4 left-0 right-0 mx-auto w-3/4 bg-black text-white py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Add To Cart
        </button>
    </div>
);


const ProductDetail = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('images/productdetails/mainimg.png');

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
        <div className="max-w-6xl mx-auto p-4">
            <nav className="text-sm text-gray-500 mb-4">
                <a href="#" className="hover:underline">Account</a> / 
                <a href="#" className="hover:underline"> Gaming</a> / 
                <span className="text-gray-800"> Havic HV G-92 Gamepad</span>
            </nav>
            <div className="flex flex-col lg:flex-row bg-white p-6 rounded-lg">
                {/* Left Column */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:w-1/2">
                    <div className="flex flex-col space-y-4 mr-4">
                        <img 
                            src="images/productdetails/shortimg1.png" 
                            alt="Product image 1" 
                            className="w-20 h-20 rounded-lg cursor-pointer" 
                            onClick={() => setSelectedImage('images/productdetails/shortimg1.png')} 
                        />
                        <img 
                            src="images/productdetails/shortimg2.png" 
                            alt="Product image 2" 
                            className="w-20 h-20 rounded-lg cursor-pointer" 
                            onClick={() => setSelectedImage('images/productdetails/shortimg2.png')} 
                        />
                        <img 
                            src="images/productdetails/shortimg3.png" 
                            alt="Product image 3" 
                            className="w-20 h-20 rounded-lg cursor-pointer" 
                            onClick={() => setSelectedImage('images/productdetails/shortimg3.png')} 
                        />
                        <img 
                            src="images/productdetails/shortimg4.png" 
                            alt="Product image 4" 
                            className="w-20 h-20 rounded-lg cursor-pointer" 
                            onClick={() => setSelectedImage('images/productdetails/shortimg4.png')} 
                        />
                    </div>
                    <img 
                        src={selectedImage} 
                        alt="Main product image" 
                        className="w-full h-auto rounded-lg"
                    />
                </div>

                {/* Right Column */}
                <div className="lg:w-1/2 lg:pl-8 mt-6 lg:mt-0">
                    <h1 className="text-2xl font-bold text-gray-800">Havic HV G-92 Gamepad</h1>
                    <div className="flex items-center mt-2">
                        <div className="flex items-center text-yellow-500">
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarHalfAlt} />
                        </div>
                        <span className="text-gray-500 ml-2">(150 Reviews)</span>
                        <span className="text-green-500 ml-4">In Stock</span>
                    </div>
                    <div className="text-3xl font-bold text-gray-800 mt-4">$192.00</div>
                    <p className="text-gray-600 mt-4">PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                    <div className="mt-6">
                        <div className="flex items-center mb-4">
                            <span className="text-gray-800 font-medium mr-4">Colours:</span>
                            <div className="flex space-x-2">
                                <button className="w-6 h-6 rounded-full bg-gray-800 border-2 border-gray-300"></button>
                                <button className="w-6 h-6 rounded-full bg-red-500 border-2 border-gray-300"></button>
                            </div>
                        </div>
                        <div className="flex items-center mb-4">
                            <span className="text-gray-800 font-medium mr-4">Size:</span>
                            <div className="flex space-x-2">
                                <button className="px-3 py-1 border border-gray-300 rounded">XS</button>
                                <button className="px-3 py-1 border border-gray-300 rounded">S</button>
                                <button className="px-3 py-1 border border-gray-300 rounded bg-red-500 text-white">M</button>
                                <button className="px-3 py-1 border border-gray-300 rounded">L</button>
                                <button className="px-3 py-1 border border-gray-300 rounded">XL</button>
                            </div>
                        </div>
                        <div className="flex items-center mb-4">
                            <button className="px-3 py-1 border border-gray-300 rounded">-</button>
                            <span className="px-4">2</span>
                            <button className="px-3 py-1 border border-gray-300 rounded">+</button>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className="px-6 py-2 bg-red-500 text-white rounded">Buy Now</button>
                            <button className="px-3 py-2 border border-gray-300 rounded">
                                <FontAwesomeIcon icon={faHeart} />
                            </button>
                        </div>
                    </div>
                    <div className="mt-6">
                        <div className="flex items-center mb-4 border p-4 rounded-lg">
                            <FontAwesomeIcon icon={faTruck} className="text-gray-500 mr-2" />
                            <div>
                                <div className="text-gray-800 font-medium">Free Delivery</div>
                                <div className="text-gray-500 text-sm">Enter your postal code for Delivery Availability</div>
                            </div>
                        </div>
                        <div className="flex items-center border p-4 rounded-lg">
                            <FontAwesomeIcon icon={faUndo} className="text-gray-500 mr-2" />
                            <div>
                                <div className="text-gray-800 font-medium">Return Delivery</div>
                                <div className="text-gray-500 text-sm">Free 30 Days Delivery Returns. <a href="#" className="text-blue-500">Details</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="max-w-6xl mx-auto p-4">
            <div className="flex items-center mb-4">
                <div className="w-2 h-8 bg-red-500 mr-2"></div>
                <h2 className="text-xl font-semibold text-red-500">Related Items</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
        </>
    );
}
 
export default ProductDetail;
