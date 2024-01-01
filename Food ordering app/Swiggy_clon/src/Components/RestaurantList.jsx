import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { resData } from "../config";

const RestaurantsInfo = resData[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;


const filterRestaurants = (searchTxt, restaurants) => {
    restaurants = RestaurantsInfo;
    return restaurants.filter((restaurant) => {
        return restaurant.info.name.toLowerCase().includes(searchTxt.toLowerCase()) || restaurant.info.cuisines.includes(searchTxt);
    });
}

function RestaurantList() {
    const [searchTxt, setSearchTxt] = useState("");
    const [restaurants, setRestaurants] = useState(RestaurantsInfo);

    const setInputValue = (e) => {
        setSearchTxt(e.target.value);
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            const data = filterRestaurants(e.target.value, restaurants);
            setRestaurants(data);
        }
    }


    return (
        <>
            {/* Search box  */}
            <div className='w-96 mt-10 p-5 m-auto flex items-center justify-center bg-orange-400 gap-5 rounded-md'>
                <input
                    className='p-2'
                    type="text"
                    placeholder='search restaurant'
                    value={searchTxt}
                    onChange={setInputValue}
                    onKeyDown={handleKeyPress}
                />
                <button
                    className='bg-white p-2 w-20 font-bold text-gray-600'
                    onClick={() => {
                        const data = filterRestaurants(searchTxt, restaurants);
                        setRestaurants(data);
                    }}
                >search</button>
            </div>
            

            {/* Restaurants here  */}
            <p className='text-2xl ml-44 mt-10 mb-3 font-bold'>Top restaurants in Ahmedabad</p>
            <div className="flex flex-wrap justify-center">
                {
                    restaurants.map((restaurant) => {
                        return <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />
                    })
                }
            </div>
        </>
    )
}

export default RestaurantList;



