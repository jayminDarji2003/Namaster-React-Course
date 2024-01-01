import React from "react";
import RestaurantCard from "./RestaurantCard";
import { resData } from "../config";
import Search from "./Search";

const RestaurantsInfo = resData[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

function RestaurantList() {
    return (
        <>
            <Search />
            <p className='text-2xl ml-44 mt-10 mb-3 font-bold'>Top restaurants in Ahmedabad</p>
            <div className="flex flex-wrap justify-center">
                {
                    RestaurantsInfo.map((restaurant) => {
                        return <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />
                    })
                }
            </div>
        </>
    )
}

export default RestaurantList;

