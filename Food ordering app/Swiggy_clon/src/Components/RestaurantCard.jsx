import React from "react";



function RestaurantCard({ restaurant }) {
    return (
        <>
            <div className="bg-blue-200 w-72 gap-2 py-3 m-4 flex items-center flex-col cursor-pointer hover:shadow-2xl">
                <img className="h-56 w-64" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restaurant?.info?.cloudinaryImageId} alt="Image is not able to see" />
                <p className="font-bold text-xl">{restaurant?.info?.name}</p>
                <p className="font-bold">{restaurant?.info?.cuisines?.join(" , ")}</p>
                <p>Rating : {restaurant?.info?.avgRating}</p>
            </div>
        </>
    )
}

export default RestaurantCard;