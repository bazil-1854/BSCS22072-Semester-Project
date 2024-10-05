import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = () => {
    const [location, setLocation] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [guests, setGuests] = useState(1);

    const handleSearch = () => { 
        console.log({
            location,
            checkIn,
            checkOut,
            guests,
        });
    };

    return (
       <div className='w-screen flex'>
         <div className="flex items-center space-x-6 bg-white border-[2px] border-gray-200 rounded-[28px] shadow-lg py-[15px] px-6 mx-auto"> 
            <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-600 mb-1">Location</label>
                <input
                    type="text"
                    placeholder="Where are you going?"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="outline-none px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500"
                />
            </div>
 
            <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-600 mb-1">Check-In</label>
                <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="outline-none px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500"
                />
            </div>
 
            <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-600 mb-1">Check-Out</label>
                <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="outline-none px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500"
                />
            </div>
 
            <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-600 mb-1">Guests</label>
                <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="outline-none px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-500"
                >
                    {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>
                            {num} guest{num > 1 ? 's' : ''}
                        </option>
                    ))}
                </select>
            </div>
 
            <button
                onClick={handleSearch}
                className="mt-4 bg-red-500 text-white text-[28px] p-[5px] rounded-full hover:bg-red-600 transition duration-200"
            >
                <AiOutlineSearch/> 
            </button>
        </div>
       </div>
    );
};

export default SearchBar;
