"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHouse,
    faDollarSign,
    faShoppingBag,
    faSackDollar,
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
    faShippingFast,
    faHeadset,
    faCheckCircle
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Feature = ({ icon, title, description }) => (
    <div className="flex flex-col items-center text-center p-4 border rounded-lg">
      <div className="bg-gray-200 rounded-full p-4 mb-4">
        <FontAwesomeIcon icon={icon} className="text-3xl text-black" />
      </div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );

const teamMembers = [
    {
        name: "Tom Cruise",
        title: "Founder & Chairman",
        image: "images/about/ourteam1.png",
        social: {
            twitter: "#",
            instagram: "#",
            linkedin: "#"
        }
    },
    {
        name: "Emma Watson",
        title: "Managing Director",
        image: "images/about/ourteam2.png",
        social: {
            twitter: "#",
            instagram: "#",
            linkedin: "#"
        }
    },
    {
        name: "Will Smith",
        title: "Product Designer",
        image: "images/about/ourteam3.png",
        social: {
            twitter: "#",
            instagram: "#",
            linkedin: "#"
        }
    }
];
const About = () => {
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
                    <a href="/about" className="hover:underline border-b-2 border-gray-500">About</a>
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
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h1 className="text-4xl font-bold mb-4">Our Story</h1>
                    <p className="mb-4">
                        Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
                    </p>
                    <p>
                        Exclusive has more than 1 Million products to offer, growing very fast. Exclusive offers a diverse assortment in categories ranging from consumer goods to essentials.
                    </p>
                </div>
                <div className="flex justify-end">
                    <img
                        src="images/about/ourstory.png"
                        alt="Two women shopping with colorful bags"
                        className="h-auto w-full rounded-lg max-w-md"
                    />
                </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
    {[
        { icon: faHouse, count: "10.5k", label: "Sellers active on our site" },
        { icon: faDollarSign, count: "33k", label: "Monthly Product Sales" },
        { icon: faShoppingBag, count: "45.5k", label: "Customers active on our site" },
        { icon: faSackDollar, count: "25k", label: "Annual gross sales on our site" },
    ].map((item, index) => (
        <div
            key={index}
            className="flex flex-col items-center p-6 border rounded-lg group transition duration-200 hover:bg-red-500"
        >
            <div className="w-14 h-14 flex items-center justify-center bg-black border-8 border-gray-400 rounded-full mb-4 group-hover:bg-white">
                <FontAwesomeIcon
                    icon={item.icon}
                    className="text-sm text-white group-hover:text-black" // Adjusted to `text-sm` for smaller size
                />
            </div>
            <p className="text-2xl font-bold text-black group-hover:text-white">{item.count}</p>
            <p className="text-gray-600 text-center group-hover:text-white">{item.label}</p>
        </div>
    ))}
</div>


        </div>
                        <div className="flex flex-col items-center justify-center">
                        <div className="flex flex-wrap justify-center">
                            {teamMembers.map((member, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-lg m-4 p-6 w-80">
                                    <img className="w-full h-80 object-cover rounded-t-lg" src={member.image} alt={`Portrait of ${member.name}`} />
                                    <div className="text-center mt-4">
                                        <h2 className="text-xl font-bold">{member.name}</h2>
                                        <p className="text-gray-600">{member.title}</p>
                                        <div className="flex justify-center mt-4 space-x-4">
                                            <a href={member.social.twitter} className="text-gray-600 hover:text-gray-900"><i className="fab fa-twitter"></i></a>
                                            <a href={member.social.instagram} className="text-gray-600 hover:text-gray-900"><i className="fab fa-instagram"></i></a>
                                            <a href={member.social.linkedin} className="text-gray-600 hover:text-gray-900"><i className="fab fa-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Feature
          icon={faShippingFast}
          title="FREE AND FAST DELIVERY"
          description="Free delivery for all orders over $140"
        />
        <Feature
          icon={faHeadset}
          title="24/7 CUSTOMER SERVICE"
          description="Friendly 24/7 customer support"
        />
        <Feature
          icon={faCheckCircle}
          title="MONEY BACK GUARANTEE"
          description="We return money within 30 days"
        />
      </div>
    </div>
                    </>
    );
};

export default About;
