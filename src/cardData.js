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
    {
        id: 5,
        title: 'Budget Beach Hut',
        type: 'Private Room',
        guests: 3,
        price: 75,
        rating: 4.2,
        image: 'https://via.placeholder.com/400x300?text=Beach+Hut',
        category: 'Budget',
    },
    {
        id: 6,
        title: 'Family-Friendly Cabin in the Woods',
        type: 'Home',
        guests: 8,
        price: 180,
        rating: 4.9,
        image: 'https://via.placeholder.com/400x300?text=Family+Cabin',
        category: 'Family-Friendly',
    },
    {
        id: 7,
        title: 'Pet-Friendly Loft in the City',
        type: 'Apartment',
        guests: 4,
        price: 110,
        rating: 4.5,
        image: 'https://via.placeholder.com/400x300?text=Pet-Friendly+Loft',
        category: 'Pet-Friendly',
    },
    {
        id: 8,
        title: 'Luxury Ocean View Villa',
        type: 'Villa',
        guests: 10,
        price: 500,
        rating: 5.0,
        image: 'https://via.placeholder.com/400x300?text=Ocean+View+Villa',
        category: 'Luxury',
    },
    {
        id: 9,
        title: 'Trendy Tiny House',
        type: 'Tiny Home',
        guests: 2,
        price: 70,
        rating: 4.4,
        image: 'https://via.placeholder.com/400x300?text=Trendy+Tiny+House',
        category: 'Unique Stays',
    },
    {
        id: 10,
        title: 'Chic Studio Near the Beach',
        type: 'Studio',
        guests: 2,
        price: 95,
        rating: 4.6,
        image: 'https://via.placeholder.com/400x300?text=Chic+Studio',
        category: 'Beachfront',
    },
    {
        id: 11,
        title: 'Rustic Farmhouse Getaway',
        type: 'Home',
        guests: 5,
        price: 160,
        rating: 4.7,
        image: 'https://via.placeholder.com/400x300?text=Farmhouse+Getaway',
        category: 'Family-Friendly',
    },
    {
        id: 12,
        title: 'Cozy Treehouse Retreat',
        type: 'Treehouse',
        guests: 4,
        price: 120,
        rating: 4.8,
        image: 'https://via.placeholder.com/400x300?text=Treehouse+Retreat',
        category: 'Cabins',
    },
    {
        id: 13,
        title: 'Lavish Penthouse Suite',
        type: 'Penthouse',
        guests: 3,
        price: 400,
        rating: 4.9,
        image: 'https://via.placeholder.com/400x300?text=Penthouse+Suite',
        category: 'Luxury',
    },
    {
        id: 14,
        title: 'Stylish City Apartment',
        type: 'Apartment',
        guests: 4,
        price: 130,
        rating: 4.6,
        image: 'https://via.placeholder.com/400x300?text=City+Apartment',
        category: 'Unique Stays',
    },
    {
        id: 15,
        title: 'Modern Beachfront Condo',
        type: 'Condo',
        guests: 6,
        price: 250,
        rating: 4.8,
        image: 'https://via.placeholder.com/400x300?text=Beachfront+Condo',
        category: 'Beachfront',
    },
    {
        id: 16,
        title: 'Charming Cabin in the Woods',
        type: 'Cabin',
        guests: 5,
        price: 140,
        rating: 4.7,
        image: 'https://via.placeholder.com/400x300?text=Charming+Cabin',
        category: 'Cabins',
    },
    {
        id: 17,
        title: 'Spacious Family Lodge',
        type: 'Lodge',
        guests: 12,
        price: 300,
        rating: 4.5,
        image: 'https://via.placeholder.com/400x300?text=Family+Lodge',
        category: 'Family-Friendly',
    },
    {
        id: 18,
        title: 'Unique Hobbit House',
        type: 'House',
        guests: 2,
        price: 110,
        rating: 4.9,
        image: 'https://via.placeholder.com/400x300?text=Hobbit+House',
        category: 'Unique Stays',
    },
    {
        id: 19,
        title: 'Budget-Friendly Beach Apartment',
        type: 'Apartment',
        guests: 4,
        price: 85,
        rating: 4.3,
        image: 'https://via.placeholder.com/400x300?text=Budget+Beach+Apartment',
        category: 'Budget',
    },
    {
        id: 20,
        title: 'Luxury Retreat with Pool',
        type: 'Villa',
        guests: 8,
        price: 450,
        rating: 5.0,
        image: 'https://via.placeholder.com/400x300?text=Luxury+Retreat',
        category: 'Luxury',
    },
    {
        id: 21,
        title: 'Pet-Friendly Mountain Lodge',
        type: 'Lodge',
        guests: 6,
        price: 170,
        rating: 4.6,
        image: 'https://via.placeholder.com/400x300?text=Pet-Friendly+Lodge',
        category: 'Pet-Friendly',
    },
    {
        id: 22,
        title: 'Trendy Urban Loft',
        type: 'Loft',
        guests: 3,
        price: 150,
        rating: 4.5,
        image: 'https://via.placeholder.com/400x300?text=Urban+Loft',
        category: 'Unique Stays',
    },
    {
        id: 23,
        title: 'Affordable Studio with Beach Access',
        type: 'Studio',
        guests: 2,
        price: 95,
        rating: 4.4,
        image: 'https://via.placeholder.com/400x300?text=Affordable+Studio',
        category: 'Beachfront',
    },
    {
        id: 24,
        title: 'Luxury Eco-Friendly Cabin',
        type: 'Cabin',
        guests: 4,
        price: 210,
        rating: 4.8,
        image: 'https://via.placeholder.com/400x300?text=Eco-Friendly+Cabin',
        category: 'Cabins',
    },
    {
        id: 25,
        title: 'Family-Friendly Beach House',
        type: 'House',
        guests: 10,
        price: 350,
        rating: 4.7,
        image: 'https://via.placeholder.com/400x300?text=Beach+House',
        category: 'Family-Friendly',
    },
    {
        id: 26,
        title: 'Romantic Getaway Cabin',
        type: 'Cabin',
        guests: 2,
        price: 130,
        rating: 4.8,
        image: 'https://via.placeholder.com/400x300?text=Romantic+Cabin',
        category: 'Romantic Getaways',
    },
    {
        id: 27,
        title: 'Adventure Lodge Near Hiking Trails',
        type: 'Lodge',
        guests: 8,
        price: 190,
        rating: 4.6,
        image: 'https://via.placeholder.com/400x300?text=Adventure+Lodge',
        category: 'Adventure',
    },
];
export default listingsData;