import React from 'react';
import ListingCard from './ListingCard';

const listingsData = [
    {
        id: 1,
        title: 'Cozy Beachfront Bungalow',
        type: 'Home',
        guests: 4,
        price: 120,
        rating: 4.8,
        image: 'https://via.placeholder.com/400x300?text=Beachfront+Bungalow',
        category: 'Beachfront',
    },
    {
        id: 2,
        title: 'Mountain Cabin Retreat',
        type: 'Private Room',
        guests: 2,
        price: 90,
        rating: 4.7,
        image: 'https://via.placeholder.com/400x300?text=Mountain+Cabin',
        category: 'Cabins',
    },
    {
        id: 3,
        title: 'Luxury City Apartment',
        type: 'Home',
        guests: 5,
        price: 250,
        rating: 5.0,
        image: 'https://via.placeholder.com/400x300?text=Luxury+Apartment',
        category: 'Luxury',
    },
    {
        id: 4,
        title: 'Charming Country House',
        type: 'Home',
        guests: 6,
        price: 150,
        rating: 4.6,
        image: 'https://via.placeholder.com/400x300?text=Country+House',
        category: 'Unique Stays',
    },
    // Add more listings as needed...
];

const ListingsGrid = ({ category }) => {
    const filteredListings = category
        ? listingsData.filter(listing => listing.category === category)
        : listingsData;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {filteredListings.map(listing => (
                <ListingCard key={listing.id} listing={listing} />
            ))}
        </div>
    );
};

export default ListingsGrid;
