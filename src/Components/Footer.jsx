import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-evenly mb-6">
                
                    <div className="flex-1">
                        <h5 className="text-gray-700 font-semibold mb-2">Airbnb</h5>
                        <ul>
                            <li><a href="#!" className="text-gray-600 hover:text-gray-800">About Us</a></li>
                            <li><a href="#!" className="text-gray-600 hover:text-gray-800">Become a Host</a></li>
                            <li><a href="#!" className="text-gray-600 hover:text-gray-800">Host your home</a></li>
                            <li><a href="#!" className="text-gray-600 hover:text-gray-800">Host an Online Experience</a></li>
                            <li><a href="#!" className="text-gray-600 hover:text-gray-800">Resource Center</a></li>
                            <li><a href="#!" className="text-gray-600 hover:text-gray-800">Careers</a></li>
                            <li><a href="#!" className="text-gray-600 hover:text-gray-800">Privacy</a></li>
                            <li><a href="#!" className="text-gray-600 hover:text-gray-800">Terms</a></li>
                            <li><a href="#!" className="text-gray-600 hover:text-gray-800">Help</a></li>
                        </ul>
                    </div>

                    <div className="flex-1">
                        <h5 className="text-gray-700 font-semibold mb-2">Support</h5>
                        <ul>
                            <li><a href="#!" className="text-gray-600 hover:text-gray-800">Help Center</a></li>
                            <li><a href="#!" className="text-gray-600 hover:text-gray-800">Cancellation Options</a></li>
                            <li><a href="#!" className="text-gray-600 hover:text-gray-800">Trust & Safety</a></li>
                            <li><a href="#!" className="text-gray-600 hover:text-gray-800">Accessibility</a></li>
                        </ul>
                    </div>

                    <div className="flex-1">
                        <h5 className="text-gray-700 font-semibold mb-2">Community</h5>
                        <ul>
                            <li><a href="#!" className="text-gray-600 hover:text-gray-800">Diversity & Belonging</a></li>
                            <li><a href="#!" className="text-gray-600 hover:text-gray-800">Airbnb.org</a></li>
                            <li><a href="#!" className="text-gray-600 hover:text-gray-800">Community Center</a></li>
                            <li><a href="#!" className="text-gray-600 hover:text-gray-800">Neighborhood Support</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-wrap justify-between items-center">
                    <div className="text-gray-600">
                        <p>&copy; {new Date().getFullYear()} Airbnb, Inc. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#!" className="text-gray-600 hover:text-gray-800"><FaFacebookF /></a>
                        <a href="#!" className="text-gray-600 hover:text-gray-800"><FaTwitter /></a>
                        <a href="#!" className="text-gray-600 hover:text-gray-800"><FaInstagram /></a>
                        <a href="#!" className="text-gray-600 hover:text-gray-800"><FaPinterestP /></a>
                        <a href="#!" className="text-gray-600 hover:text-gray-800"><FaLinkedinIn /></a>
                    </div>
                    <div className="flex space-x-4">
                        <select className="border border-gray-300 rounded-md p-2 text-gray-600">
                            <option value="en">English (US)</option>
                            <option value="es">Español</option>
                            <option value="fr">Français</option>
                        </select>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
