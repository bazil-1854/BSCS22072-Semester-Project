import React from 'react';

const ListingCard = ({ listing }) => {
    return (
        <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-200">
            <img src={listing.image} alt={listing.title} className="w-full h-40 object-cover" />
            <div className="p-4">
                <h2 className="font-semibold text-lg">{listing.title}</h2>
                <p className="text-gray-500">{listing.type}</p>
                <p className="text-gray-700">Guests: {listing.guests}</p>
                <p className="font-bold text-lg">${listing.price} / night</p>
                <p className="text-yellow-500">Rating: {listing.rating} ⭐</p>
            </div>
        </div>
    );
};

export default ListingCard;
