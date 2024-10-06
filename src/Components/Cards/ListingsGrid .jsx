import React from 'react';
import ListingCard from './ListingCard';
import listingsData from '../../cardData';

const ListingsGrid = ({ category }) => {
    const filteredListings = category
        ? listingsData.filter(listing => listing.category === category)
        : listingsData;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  py-4 xl:px-[75px] px-4">
            {filteredListings.map(listing => (
                <ListingCard key={listing.id} listing={listing} />
            ))}
        </div>
    );
};

export default ListingsGrid;
