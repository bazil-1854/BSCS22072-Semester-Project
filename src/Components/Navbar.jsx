import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { IoMdGlobe } from 'react-icons/io';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold text-gray-800">
              Airbnb
            </a>
          </div>

          {/* Search Bar */}
          <div className="hidden sm:flex items-center bg-gray-100 rounded-full py-2 px-4 shadow-md">
            <input
              type="text"
              placeholder="Start your search"
              className="bg-transparent flex-grow outline-none text-sm text-gray-600"
            />
            <AiOutlineSearch className="text-red-500 text-lg" />
          </div>

          {/* User and Language Icons */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:inline-flex items-center text-gray-600 space-x-2 hover:text-black">
              <IoMdGlobe className="text-xl" />
            </button>
            <button className="flex items-center space-x-2 border rounded-full px-3 py-2 hover:shadow-lg transition-shadow">
              <FaUserCircle className="text-xl text-gray-500" />
              <span className="hidden md:inline-block text-sm font-medium text-gray-600">Login</span>
            </button>

            {/* Mobile Menu Button */}
            <div className="sm:hidden">
              <button onClick={toggleMenu}>
                {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="sm:hidden">
            <div className="flex flex-col bg-white rounded-lg shadow-md mt-2 p-4">
                
              <a href="/" className="block py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Sign up</a>
              <a href="/" className="block py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Log in</a>
              <p className='w-full bg-gray-200 h-[2px]'></p>
              <a href="/" className="block py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Gift Cards</a>
              <a href="/" className="block py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Airbnb Your home</a>
              <a href="/" className="block py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Host an Experince</a>
              <a href="/" className="block py-2 text-gray-700 hover:bg-gray-100 rounded-lg">Help Center</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
