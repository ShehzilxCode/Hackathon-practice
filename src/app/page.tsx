"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faHeart,
  faEye,
  faShoppingCart,
  faBars,
  faStar,
  faStarHalfAlt,
  faChevronLeft,
  faChevronRight,
  faShippingFast, 
  faHeadset, 
  faCheckCircle,
  faMobileAlt,
  faDesktop,
  faClock,
  faCamera,
  faHeadphones,
  faGamepad,
} from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { useState } from 'react';

interface FeatureProps {
    icon: IconDefinition; 
    title: string;          
    description: string;    
}

interface Product {
    id: number;
    image: string;
    name: string;
    price: string;
    rating: number;
    reviews: number;
    isNew: boolean;
    colors: string[];
}

const Feature = ({ icon, title, description }: FeatureProps) => (
    <div className="flex flex-col items-center text-center p-4 border rounded-lg">
      <div className="bg-gray-200 rounded-full p-4 mb-4">
        <FontAwesomeIcon icon={icon} className="text-3xl text-black" />
      </div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
  


const categories = [
    { name: 'Phones', icon: faMobileAlt },
    { name: 'Computers', icon: faDesktop },
    { name: 'SmartWatch', icon: faClock },
    { name: 'Camera', icon: faCamera, active: true },
    { name: 'HeadPhones', icon: faHeadphones },
    { name: 'Gaming', icon: faGamepad },
  ];

const bestsellingproducts = [
    {
        image: "images/homepage/thismonth1.png",
        name: "The north coat",
        price: "$260",
        oldPrice: "$360",
        rating: 5,
        reviews: 65
    },
    {
        image: "images/homepage/thismonth2.png",
        name: "Gucci duffle bag",
        price: "$960",
        oldPrice: "$1160",
        rating: 5,
        reviews: 65
    },
    {
        image: "images/homepage/thismonth3.png",
        name: "RGB liquid CPU Cooler",
        price: "$160",
        oldPrice: "$170",
        rating: 5,
        reviews: 65
    },
    {
        image: "images/homepage/thismonth4.png",
        name: "Small BookSelf",
        price: "$360",
        oldPrice: "",
        rating: 5,
        reviews: 65
    }
];

const products = [
    {
        id: 1,
        image: "images/homepage/product1.png",
        name: "Breed Dry Dog Food",
        price: "$100",
        rating: 3,
        reviews: 35,
        isNew: false,
        colors: []
    },
    {
        id: 2,
        image: "images/homepage/product2.png",
        name: "CANON EOS DSLR Camera",
        price: "$360",
        rating: 4,
        reviews: 95,
        isNew: false,
        colors: []
    },
    {
        id: 3,
        image: "images/homepage/product3.png",
        name: "ASUS FHD Gaming Laptop",
        price: "$700",
        rating: 5,
        reviews: 325,
        isNew: false,
        colors: []
    },
    {
        id: 4,
        image: "images/homepage/product4.png",
        name: "Curology Product Set",
        price: "$500",
        rating: 4,
        reviews: 145,
        isNew: false,
        colors: []
    },
    {
        id: 5,
        image: "images/homepage/product5.png",
        name: "Kids Electric Car",
        price: "$960",
        rating: 5,
        reviews: 65,
        isNew: true,
        colors: ["red", "black"]
    },
    {
        id: 6,
        image: "images/homepage/product6.png",
        name: "Jr. Zoom Soccer Cleats",
        price: "$1160",
        rating: 5,
        reviews: 35,
        isNew: false,
        colors: ["yellow", "black"]
    },
    {
        id: 7,
        image: "images/homepage/product7.png",
        name: "GP11 Shooter USB Gamepad",
        price: "$660",
        rating: 5,
        reviews: 55,
        isNew: true,
        colors: []
    },
    {
        id: 8,
        image: "images/homepage/product8.png",
        name: "Quilted Satin Jacket",
        price: "$660",
        rating: 5,
        reviews: 55,
        isNew: false,
        colors: ["black", "red"]
    }
];

const ProductCard = ({ product }: { product: Product }) => (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md relative group">
      {product.isNew && (
        <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
          NEW
        </span>
      )}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover mb-4 rounded"
      />
      <div className="absolute top-2 right-2 flex space-x-2">
        <a href="/wishlist" className="bg-white p-2 rounded-full">
          <FontAwesomeIcon icon={faHeart} className="text-gray-800" />
        </a>
        <a href="/productdetail" className="bg-white p-2 rounded-full">
          <FontAwesomeIcon icon={faEye} className="text-gray-800" />
        </a>
      </div>
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">{product.name}</h3>
      </div>
      <p className="text-red-500 font-bold">{product.price}</p>
      <div className="flex items-center mb-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <FontAwesomeIcon
            key={`${product.id}-star-${i}`}
            icon={faStar}
            className={i < product.rating ? 'text-yellow-500' : 'text-gray-300'}
          />
        ))}
        <span className="ml-2 text-gray-500">({product.reviews})</span>
      </div>
      {product.colors.length > 0 && (
        <div className="flex space-x-2 mb-2">
          {product.colors.map((color, index) => (
            <span
              key={index}
              className={`w-4 h-4 rounded-full bg-${color}-500`}
            ></span>
          ))}
        </div>
      )}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="bg-black text-white py-2 px-4 rounded w-full">
          Add To Cart
        </button>
      </div>
    </div>
  );
  



const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav className="border-b bg-white">
        <div className="flex justify-between items-center py-4 px-8">
          <div className="text-2xl font-bold">Exclusive</div>
          <div className="hidden md:flex space-x-8">
            <a href="/home" className="hover:underline border-b-2 border-gray-500">
              Home
            </a>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
            <a href="/about" className="hover:underline">
              About
            </a>
            <a href="/signup" className="hover:underline">
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
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black cursor-pointer"
              />
            </div>

            {/* Heart icon */}
            <a href="#" className="relative">
              <FontAwesomeIcon icon={faHeart} className="text-black text-xl cursor-pointer" />
            </a>

            {/* Shopping Cart icon */}
            <a href="#" className="relative">
              <FontAwesomeIcon icon={faShoppingCart} className="text-black text-xl cursor-pointer" />
            </a>

            {/* User icon */}
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
              <a href="/home" className="block hover:underline">
                Home
              </a>
              <a href="/contact" className="block hover:underline">
                Contact
              </a>
              <a href="/about" className="block hover:underline">
                About
              </a>
              <a href="/signup" className="block hover:underline">
                Sign Up
              </a>
            </div>
          </div>
        )}
      </nav>
      <div className="flex flex-wrap">
    <div className="max-w-7xl mx-auto w-full sm:w-1/3 md:w-1/4 lg:w-1/5 p-4 border-r border-gray-200">
      <ul className="space-y-4">
        <li className="flex justify-between items-center">
          <span>Womens Fashion</span>
          <FontAwesomeIcon icon={faChevronRight} className="text-gray-500" />
        </li>
        <li className="flex justify-between items-center">
          <span>Mens Fashion</span>
          <FontAwesomeIcon icon={faChevronRight} className="text-gray-500" />
        </li>
        <li>Electronics</li>
        <li>Home & Lifestyle</li>
        <li>Medicine</li>
        <li>Sports & Outdoor</li>
        <li>Babys & Toys</li>
        <li>Groceries & Pets</li>
        <li>Health & Beauty</li>
      </ul>
    </div>

    <div className="w-full sm:w-2/3 md:w-3/4 lg:w-4/5 p-4">
      <div className="relative">
        <img
          src="images/homepage/homehero.png"
          alt="iPhone 14 Series"
          className="w-full h-auto"
        />
      </div>
    </div>
  </div>
  <div className="p-4 max-w-7xl mx-auto">
  <div className="flex items-center mb-4">
    <div className="bg-red-500 h-2 w-8 mr-2"></div>
    <h2 className="text-red-500 text-lg font-medium">Todays</h2>
  </div>
  <div className="flex items-center justify-between mb-8">
    <h1 className="text-4xl font-bold">Flash Sales</h1>
    <div className="flex items-center">
      <div className="text-center mx-2">
        <div className="text-3xl font-bold">03</div>
        <div className="text-sm">Days</div>
      </div>
      <div className="text-center mx-2">
        <div className="text-3xl font-bold">23</div>
        <div className="text-sm">Hours</div>
      </div>
      <div className="text-center mx-2">
        <div className="text-3xl font-bold">19</div>
        <div className="text-sm">Minutes</div>
      </div>
      <div className="text-center mx-2">
        <div className="text-3xl font-bold">56</div>
        <div className="text-sm">Seconds</div>
      </div>
    </div>
    <div className="flex items-center space-x-2">
      <button className="bg-gray-200 text-gray-500 rounded-full p-2">
      <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button className="bg-gray-200 text-gray-500 rounded-full p-2">
      <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
    {/* Product Card */}
    <div className="border p-4 relative group">
      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-40%</div>
      <div className="absolute top-2 right-2">
        <FontAwesomeIcon icon={faStar} className="text-gray-400" />
      </div>
      <img src="images/homepage/flashsale1.png" alt="Red gamepad" className="w-full mb-4" />
      <div className="absolute top-2 right-2 flex space-x-2">
                                    <a href="/wishlist" className="bg-white p-2 rounded-full">
                                    <FontAwesomeIcon icon={faHeart} className="text-gray-800" />
                                    </a>
                                    <a href="/productdetail" className="bg-white p-2 rounded-full">
                                    <FontAwesomeIcon icon={faEye} className="text-gray-800" />
                                    </a>
                                </div>
      <h3 className="text-lg font-medium">HAVIT HV-G92 Gamepad</h3>
      <div className="text-red-500 text-lg font-bold">$120 <span className="text-gray-500 line-through">$160</span></div>
      <div className="text-yellow-500">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalfAlt} />
        <span className="text-gray-500">(88)</span>
      </div>
      <button className="bg-black text-white py-2 px-4 mt-4 w-full opacity-0 group-hover:opacity-100 transition-opacity">
        Add To Cart
      </button>
    </div>
    <div className="border p-4 relative group">
      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-35%</div>
      <div className="absolute top-2 right-2">
        <FontAwesomeIcon icon={faStar} className="
        text-gray-400" />
      </div>
      <img src="images/homepage/flashsale2.png" alt="Wired keyboard" className="w-full mb-4" />
      <div className="absolute top-2 right-2 flex space-x-2">
                                    <a href="/wishlist" className="bg-white p-2 rounded-full">
                                    <FontAwesomeIcon icon={faHeart} className="text-gray-800" />
                                    </a>
                                    <a href="/productdetail" className="bg-white p-2 rounded-full">
                                    <FontAwesomeIcon icon={faEye} className="text-gray-800" />
                                    </a>
                                </div>
      <h3 className="text-lg font-medium">AK-900 Wired Keyboard</h3>
      <div className="text-red-500 text-lg font-bold">$960 <span className="text-gray-500 line-through">$1160</span></div>
      <div className="text-yellow-500">
      <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalfAlt} />
        <span className="text-gray-500">(75)</span>
      </div>
      <button className="bg-black text-white py-2 px-4 mt-4 w-full opacity-0 group-hover:opacity-100 transition-opacity">
        Add To Cart
      </button>
    </div>
    <div className="border p-4 relative group">
      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-30%</div>
      <div className="absolute top-2 right-2">

      </div>
      <img src="images/homepage/flashsale3.png" alt="Gaming monitor" className="w-full mb-4" />
      <div className="absolute top-2 right-2 flex space-x-2">
                                    <a href="/wishlist" className="bg-white p-2 rounded-full">
                                    <FontAwesomeIcon icon={faHeart} className="text-gray-800" />
                                    </a>
                                    <a href="/productdetail" className="bg-white p-2 rounded-full">
                                    <FontAwesomeIcon icon={faEye} className="text-gray-800" />
                                    </a>
                                </div>
      <h3 className="text-lg font-medium">IPS LCD Gaming Monitor</h3>
      <div className="text-red-500 text-lg font-bold">$370 <span className="text-gray-500 line-through">$400</span></div>
      <div className="text-yellow-500">
      <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalfAlt} />
        <span className="text-gray-500">(99)</span>
      </div>
      <button className="bg-black text-white py-2 px-4 mt-4 w-full opacity-0 group-hover:opacity-100 transition-opacity">
        Add To Cart
      </button>
    </div>
    <div className="border p-4 relative group">
      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-25%</div>
      <div className="absolute top-2 right-2">

      </div>
      <img src="images/homepage/flashsale4.png" alt="Comfort chair" className="w-full mb-4" />
      <div className="absolute top-2 right-2 flex space-x-2">
                                    <a href="/wishlist" className="bg-white p-2 rounded-full">
                                    <FontAwesomeIcon icon={faHeart} className="text-gray-800" />
                                    </a>
                                    <a href="/productdetail" className="bg-white p-2 rounded-full">
                                    <FontAwesomeIcon icon={faEye} className="text-gray-800" />
                                    </a>
                                </div>
      <h3 className="text-lg font-medium">S-Series Comfort Chair</h3>
      <div className="text-red-500 text-lg font-bold">$375 <span className="text-gray-500 line-through">$400</span></div>
      <div className="text-yellow-500">
      <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalfAlt} />
        <span className="text-gray-500">(99)</span>
      </div>
      <button className="bg-black text-white py-2 px-4 mt-4 w-full opacity-0 group-hover:opacity-100 transition-opacity">
        Add To Cart
      </button>
    </div>
    <div className="border p-4 relative group">
      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-25%</div>
      <div className="absolute top-2 right-2">
      </div>
      <img src="images/homepage/flashsale4.png" alt="Comfort chair" className="w-full mb-4" />
      <div className="absolute top-2 right-2 flex space-x-2">
                                    <a href="/wishlist" className="bg-white p-2 rounded-full">
                                    <FontAwesomeIcon icon={faHeart} className="text-gray-800" />
                                    </a>
                                    <a href="/productdetail" className="bg-white p-2 rounded-full">
                                    <FontAwesomeIcon icon={faEye} className="text-gray-800" />
                                    </a>
                                </div>
      <h3 className="text-lg font-medium">S-Series Comfort Chair</h3>
      <div className="text-red-500 text-lg font-bold">$375 <span className="text-gray-500 line-through">$400</span></div>
      <div className="text-yellow-500">
      <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalfAlt} />
        <span className="text-gray-500">(99)</span>
      </div>
      <button className="bg-black text-white py-2 px-4 mt-4 w-full opacity-0 group-hover:opacity-100 transition-opacity">
        Add To Cart
      </button>
    </div>
  </div>
  <div className="text-center">
    <button className="bg-red-500 text-white py-2 px-8 rounded">View All Products</button>
  </div>
</div>

<div className="p-6 max-w-7xl px-4 mx-auto">
  {/* Section Header */}
  <div className="flex items-center mb-4">
    <div className="w-2 h-6 bg-red-500 mr-2"></div>
    <span className="text-red-500 font-semibold">Categories</span>
  </div>

  {/* Title and Navigation */}
  <div className="flex justify-between items-center mb-6">
    <h1 className="text-2xl font-bold">Browse By Category</h1>
    <div className="flex space-x-2">
      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300">
        <FontAwesomeIcon icon={faChevronRight} className="text-gray-500" />
      </div>
      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300">
        <FontAwesomeIcon icon={faChevronLeft} className="text-gray-500" />
      </div>
    </div>
  </div>

  {/* Category List */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
    {categories.map((category, index) => (
      <div
        key={index}
        className={`flex flex-col items-center justify-center p-6 border rounded-lg transition-all duration-300 ${
          category.active
            ? 'bg-red-500 text-white shadow-lg'
            : 'bg-white text-black hover:bg-gray-100'
        }`}
      >
        <div className="flex items-center justify-center w-16 h-16 mb-4 bg-gray-100 rounded-full">
          <FontAwesomeIcon
            icon={category.icon}
            className={`text-2xl ${
              category.active ? 'text-white' : 'text-gray-700'
            }`}
          />
        </div>
        <span className="text-center text-sm font-medium">{category.name}</span>
      </div>
    ))}
  </div>
</div>;

<div className="container max-w-7xl mx-auto p-4">
  <div className="flex justify-between items-center mb-4">
    <div className="flex items-center">
      <div className="w-2 h-8 bg-red-500 mr-2"></div>
      <span className="text-red-500 font-semibold">This Month</span>
    </div>
    <button className="bg-red-500 text-white px-4 py-2 rounded">View All</button>
  </div>
  <h1 className="text-2xl font-bold mb-4">Best Selling Products</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
    {bestsellingproducts.map((product, index) => (
      <div key={`product-${index}-${product.name}`} className="bg-white p-4 rounded shadow">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover mb-4"
          />
          <div className="absolute top-2 right-2 flex space-x-2">
            <a href="/wishlist" className="bg-white p-2 rounded-full">
              <FontAwesomeIcon icon={faHeart} className="text-gray-800" />
            </a>
            <a href="/productdetail" className="bg-white p-2 rounded-full">
              <FontAwesomeIcon icon={faEye} className="text-gray-800" />
            </a>
          </div>
        </div>
        <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
        <div className="flex items-center mb-2">
          <span className="text-red-500 text-lg font-bold mr-2">
            {product.price}
          </span>
          {product.oldPrice && (
            <span className="text-gray-500 line-through">
              {product.oldPrice}
            </span>
          )}
        </div>
        <div className="flex items-center">
          <div className="flex text-yellow-500 mr-2">
            {Array.from({ length: product.rating }).map((_, i) => (
              <FontAwesomeIcon
                key={`star-${product.name}-${i}`}  // Use unique key for each star
                icon={faStar}
              />
            ))}
          </div>
          <span className="text-gray-500">({product.reviews})</span>
        </div>
      </div>
    ))}
  </div>
</div>


                <div className="bg-white p-4 md:p-8 lg:p-16 rounded-lg max-w-7xl mx-auto">
                    <div className="bg-black text-white rounded-lg flex flex-col md:flex-row items-center p-8">
                        <div className="md:w-1/2">
                            <p className="text-green-500 mb-2">Categories</p>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">Enhance Your Music Experience</h1>
                            <div className="flex space-x-4 mb-6">
                                <div className="text-center">
                                    <p className="text-3xl font-bold">23</p>
                                    <p>Hours</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-3xl font-bold">05</p>
                                    <p>Days</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-3xl font-bold">59</p>
                                    <p>Minutes</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-3xl font-bold">35</p>
                                    <p>Seconds</p>
                                </div>
                            </div>
                            <button className="bg-green-500 text-white py-2 px-4 rounded-lg text-lg font-semibold">Buy Now!</button>
                        </div>
                        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                            <img src="images/homepage/music.png" alt="A high-quality speaker with a sleek design" className="rounded-lg shadow-lg"/>
                        </div>
                    </div>
                </div>

                <div className="container max-w-7xl mx-auto p-4">
                <div className="flex items-center mb-4">
                    <div className="w-2 h-8 bg-red-500 mr-2"></div>
                    <h2 className="text-red-500 text-lg font-semibold">Our Products</h2>
                </div>
                <h1 className="text-3xl font-bold mb-8">Explore Our Products</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map(product => (
                <ProductCard key={product.id} product={product} />
                ))}
                </div>
                <div className="flex justify-center mt-8">
                    <button className="bg-red-500 text-white py-2 px-6 rounded">View All Products</button>
                </div>
            </div>

            <div className="p-8 max-w-7xl mx-auto">
                    <div className="flex items-center mb-4">
                        <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
                        <span className="text-red-500 font-bold">Featured</span>
                    </div>
                    <h1 className="text-3xl font-bold mb-8">New Arrival</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="relative col-span-1">
                            <img src="images/homepage/newarrival1.png" alt="PlayStation 5" className="w-full h-full object-cover"/>
                            <div className="absolute bottom-4 left-4 text-white">
                                <h2 className="text-xl font-bold">PlayStation 5</h2>
                                <p className="text-sm">Black and White version of the PS5 coming out on sale.</p>
                                <button className="mt-2 px-4 py-2 bg-black text-white font-bold">Shop Now</button>
                            </div>
                        </div>
                        <div className="grid grid-rows-2 gap-8">
                            <div className="relative row-span-1">
                                <img src="images/homepage/newarrival2.png" alt="Women's Collections" className="w-full h-full object-cover"/>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <h2 className="text-xl font-bold">Women’s Collections</h2>
                                    <p className="text-sm">Featured woman collections that give you another vibe.</p>
                                    <button className="mt-2 px-4 py-2 bg-black text-white font-bold">Shop Now</button>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-8">
                                <div className="relative col-span-1">
                                    <img src="images/homepage/newarrival3.png" alt="Speakers" className="w-full h-full object-cover"/>
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <h2 className="text-xl font-bold">Speakers</h2>
                                        <p className="text-sm">Amazon wireless speakers</p>
                                        <button className="mt-2 px-4 py-2 bg-black text-white font-bold">Shop Now</button>
                                    </div>
                                </div>
                                <div className="relative col-span-1">
                                    <img src="images/homepage/newarrival4.png" alt="Perfume" className="w-full h-full object-cover"/>
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <h2 className="text-xl font-bold">Perfume</h2>
                                        <p className="text-sm">GUCCI INTENSE OUD EDP</p>
                                        <button className="mt-2 px-4 py-2 bg-black text-white font-bold">Shop Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
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

export default HomePage;
