import React, { useState } from 'react';
import RestaurantCard from './RestaurantCard';

function Search({ restaurantData }) {
    const [searchTxt, setSearchTxt] = useState('');
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchPerformed, setSearchPerformed] = useState(false);

    const restaurants =
        restaurantData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    const filterRestaurants = (searchText, restaurants) => {
        return restaurants.filter((restaurant) => {
            const nameMatches = restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
            const cuisineMatches = restaurant.info.cuisines.includes(searchText.toLowerCase());
            return nameMatches || cuisineMatches;
        });
    };

    const handleSearch = (text) => {
        const data = filterRestaurants(text, restaurants);
        setFilteredRestaurants(data);
        setSearchPerformed(true);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch(e.target.value);
        }
    };

    return (
        <>
            <div className='w-96 mt-10 p-5 m-auto flex items-center justify-center bg-orange-400 gap-5 rounded-md'>
                <input
                    className='p-2'
                    type='text'
                    placeholder='search restaurant'
                    value={searchTxt}
                    onChange={(e) => setSearchTxt(e.target.value)}
                    onKeyDown={handleKeyPress}
                />
                <button
                    className='bg-white p-2 w-20 font-bold text-gray-600'
                    onClick={() => handleSearch(searchTxt)}
                >
                    search
                </button>
            </div>

            <div className='flex flex-wrap justify-center'>
                {searchPerformed && filteredRestaurants.length === 0 ? (
                    <h1 className='pt-5'>No restaurant found</h1>
                ) : (
                    filteredRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
                    ))
                )}
            </div>
        </>
    );
}

export default Search;
