import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { SWIGGY_API } from "../config";

const filterRestaurants = (searchTxt, restaurants) => {
    return restaurants.filter((restaurant) => {
        return restaurant.info.name.toLowerCase().includes(searchTxt.toLowerCase()) || restaurant.info.cuisines.includes(searchTxt);
    });
}

function RestaurantList() {
    const [searchTxt, setSearchTxt] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const setInputValue = (e) => {
        setSearchTxt(e.target.value);
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            const data = filterRestaurants(e.target.value, allRestaurants);
            setFilteredRestaurants(data);
        }
    }

    useEffect(() => {
        getRestaurants(); // API called here
    }, []);

    async function getRestaurants() {
        try {
            const data = await fetch(SWIGGY_API);
            const json = await data.json();
            const resData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setAllRestaurants(resData);
            setFilteredRestaurants(resData);
            console.log("restaurants loaded");
            console.log(resData);
        } catch (e) {
            console.log("Error occurred while fetching the restaurant data.");
            console.log(e);
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
                        const data = filterRestaurants(searchTxt, allRestaurants);
                        setFilteredRestaurants(data);
                    }}
                >search</button>
            </div>


            {/* Restaurants here  */}
            {
                allRestaurants.length === 0 ? <h1>Feching the data</h1> : <>
                    <p className='text-2xl ml-44 mt-10 mb-3 font-bold'>Top restaurants in Ahmedabad</p>
                    <div className="flex flex-wrap justify-center">
                        {
                            filterRestaurants?.length === 0 ? <h1>Not restaurant found</h1> : filteredRestaurants.map((restaurant) => {
                                return <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />
                            })
                        }
                    </div>
                </>
            }
        </>
    )
}

export default RestaurantList;





