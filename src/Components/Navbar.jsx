import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdGlobe } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import SearchBar from './SearchBar';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showSearchBar, setShowSearchBar] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = () => {
        // Show or hide the search bar based on scroll position
        if (window.scrollY > 50) {
            setShowSearchBar(true);
        } else {
            setShowSearchBar(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className="bg-white shadow-md fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
                <div className="flex justify-between items-center py-4">
                    <div className="flex-shrink-0">
                        <NavLink to="/" className="text-xl font-bold text-red-500">
                            Airbnb
                        </NavLink>
                    </div>

                    {showSearchBar ? (
                        <div className="hidden sm:flex items-cente border-[2px] xl:mr-[-165px] z-90 rounded-full py-2 px-4 shadow-md">
                            <p className="bg-transparent flex-grow outline-none border-r-[2px] border-gray-200 px-[8px] font-[600] text-gray-700">Anywhere</p>
                            <p className="bg-transparent flex-grow outline-none border-r-[2px] border-gray-200 px-[8px] font-[600] text-[15px] text-gray-700">Any week</p>
                            <p className="bg-transparent flex-grow outline-none px-[8px] font-[600] text-[15px] text-gray-500">Any Guests</p>
                            <AiOutlineSearch className="bg-red-500 text-white rounded-full p-[5.5px] ml-[6px] text-[28px]" />
                        </div>
                    ) : (
                        <div className="hidden sm:flex xl:mr-[-165px] bg-white z-90 space-x-6">
                            <NavLink to="/stays" className="text-gray-600 hover:text-black font-medium">
                                Stays
                            </NavLink>
                            <NavLink to="/experiences" className="text-gray-600 hover:text-black font-medium">
                                Experiences
                            </NavLink>
                        </div>
                    )}

                    {/* Right Side Icons */}
                    <div className="flex items-center space-x-4">
                        <span className='text-gray-700 text-md'>Airbnb Your Home</span>
                        <button className="hidden md:inline-flex items-center text-gray-600 space-x-2 hover:text-black">
                            <IoMdGlobe className="text-xl" />
                        </button>
                        <button onClick={toggleMenu} className="flex items-center space-x-2 border rounded-full px-3 py-2 hover:shadow-lg transition-shadow">
                            <div  className='sm:block hidden'><GiHamburgerMenu className="text-xl text-gray-500" /></div>
                            <div className="sm:hidden">
                            <button onClick={toggleMenu}>
                                {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
                            </button>
                        </div>
                            <FaUserCircle className="text-3xl text-gray-500" />
                        </button> 
                        
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="sm:hidden">
                        <div className="flex flex-col bg-white rounded-lg shadow-md mt-2 p-4">
                            <NavLink to="/" className="block py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                                Sign up
                            </NavLink>
                            <NavLink to="/" className="block py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                                Log in
                            </NavLink>
                            <div className="w-full bg-gray-200 h-[2px] my-2"></div>
                            <NavLink to="/" className="block py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                                Gift Cards
                            </NavLink>
                            <NavLink to="/" className="block py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                                Airbnb Your Home
                            </NavLink>
                            <NavLink to="/" className="block py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                                Host an Experience
                            </NavLink>
                            <NavLink to="/" className="block py-2 text-gray-700 hover:bg-gray-100 rounded-lg">
                                Help Center
                            </NavLink>
                        </div>
                    </div>
                )}
            </div>
            <SearchBar />
        </header>
    );
};

export default Navbar;
