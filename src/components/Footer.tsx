import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return ( 
        <footer className="py-10 px-5 md:px-20 bg-black text-white">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            <div>
                <h2 className="text-xl font-bold mb-4">Exclusive</h2>
                <h3 className="text-lg mb-2">Subscribe</h3>
                <p className="mb-4">Get 10% off your first order</p>
                <div className="flex items-center border border-white overflow-hidden w-full md:w-40">
                    <input type="email" placeholder="Enter your email" className="bg-black text-white text-sm px-4 py-2 outline-none flex-grow" />
                    <FontAwesomeIcon icon={faPaperPlane} className="text-white px-4" />
                </div>
            </div>
            <div>
                <h2 className="text-lg mb-4">Support</h2>
                <p className="mb-4">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                <p className="mb-4">exclusive@gmail.com</p>
                <p>+88015-88888-9999</p>
            </div>
            <div>
                <h2 className="text-lg mb-4">Account</h2>
                <ul>
                    <li className="mb-2">
                        <a href="/myaccount" className="hover:underline">My Account</a>
                    </li>
                    <li className="mb-2">
                        <a href="/signup" className="hover:underline">Login / Register</a>
                    </li>
                    <li className="mb-2">
                        <a href="/cart" className="hover:underline">Cart</a>
                    </li>
                    <li className="mb-2">
                        <a href="/wishlist" className="hover:underline">Wishlist</a>
                    </li>
                    <li className="mb-2">
                        <a href="/home" className="hover:underline">Shop</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="text-lg mb-4">Quick Link</h2>
                <ul>
                    <li className="mb-2"><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
                    <li className="mb-2"><a href="/terms-of-use" className="hover:underline">Terms Of Use</a></li>
                    <li className="mb-2"><a href="/faq" className="hover:underline">FAQ</a></li>
                    <li className="mb-2"><a href="/contact" className="hover:underline">Contact</a></li>
                </ul>
            </div>
            <div>
                <h2 className="text-lg mb-4">Download App</h2>
                <p className="mb-4">Save $3 with App New User Only</p>
                <div className="flex items-center mb-4">
                    <img src="images/footer/qrcode.png" alt="QR Code" className="mr-4" />
                    <div>
                        <img src="images/footer/google.png" alt="Google Play" className="mb-2" />
                        <img src="images/footer/appstore.png" alt="App Store" />
                    </div>
                </div>
                <div className="flex space-x-8">
                    <FontAwesomeIcon icon={faFacebook} className="text-white" />
                    <FontAwesomeIcon icon={faTwitter} className="text-white" />
                    <FontAwesomeIcon icon={faInstagram} className="text-white" />
                    <FontAwesomeIcon icon={faLinkedin} className="text-white" />
                </div>
            </div>
        </div>
        <div className="mt-10 pt-4 text-center w-full">
            <div className="border-t border-gray-600 mx-auto w-full"></div>
            <p className="text-gray-400 mt-4">© Copyright Rimel 2022. All rights reserved</p>
        </div>
    </footer>
    );
}

export default Footer;
