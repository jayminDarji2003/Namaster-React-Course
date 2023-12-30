import React from "react";
import RestaurantCard from "./RestaurantCard";

function RestaurantList() {
    return (
        <>
            <div className="flex flex-wrap justify-center">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </>
    )
}

export default RestaurantList;