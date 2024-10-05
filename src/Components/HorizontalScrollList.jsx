import React from 'react';
import { FaUmbrellaBeach, FaTree, FaStar, FaMoneyBillAlt, FaUsers, FaDog, FaCoffee, FaHome, FaMountain, FaHeart } from 'react-icons/fa';

const categories = [
    { name: 'All', category: '' },
    { name: 'Beachfront', category: 'Beachfront', icon: <FaUmbrellaBeach className='text-[25px] mb-[5px]' /> },
    { name: 'Cabins', category: 'Cabins', icon: <FaTree className='text-[25px] mb-[5px]' /> },
    { name: 'Trending', category: 'Trending', icon: <FaStar className='text-[25px] mb-[5px]' /> },
    { name: 'Luxury', category: 'Luxury', icon: <FaMoneyBillAlt className='text-[25px] mb-[5px]' /> },
    { name: 'Budget', category: 'Budget', icon: <FaHome className='text-[25px] mb-[5px]' /> },
    { name: 'Family-Friendly', category: 'Family-Friendly', icon: <FaUsers className='text-[25px] mb-[5px]' /> },
    { name: 'Pet-Friendly', category: 'Pet-Friendly', icon: <FaDog className='text-[25px] mb-[5px]' /> },
    { name: 'Unique Stays', category: 'Unique Stays', icon: <FaCoffee className='text-[25px] mb-[5px]' /> },
    { name: 'Romantic Getaways', category: 'Romantic Getaways', icon: <FaHeart className='text-[25px] mb-[5px]' /> },
    { name: 'Adventure', category: 'Adventure', icon: <FaMountain className='text-[25px] mb-[5px]' /> },
];

const HorizontalScrollList = ({ setCategory }) => {
    return (
        <div className="flex overflow-x-auto space-x-4 p-4 no-scrollbar">
            {categories.map((category, index) => (
                <button
                    key={index}
                    onClick={() => setCategory(category.category)}
                    className="flex-shrink-0 bg-white py-2 px-4 flex flex-col items-center space-x-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition duration-200"
                >
                    {category.icon}
                    <span>{category.name}</span>
                </button>
            ))}
        </div>
    );
};

export default HorizontalScrollList;
