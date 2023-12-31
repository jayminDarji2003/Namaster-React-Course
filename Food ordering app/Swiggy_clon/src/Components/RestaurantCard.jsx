import React from "react";



function RestaurantCard({ restaurant }) {
    return (
        <>
            <div className="hover:scale-95 p-2 w-72 gap-1 py-3 m-4 flex  flex-col cursor-pointer rounded-xl ">
                <img className="h-40 rounded-xl w-64" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restaurant?.info?.cloudinaryImageId} alt="Image is not able to see" />
                <div className="pl-2">
                    <p className="font-bold text-2xl text-gray-800">{restaurant?.info?.name}</p>
                    <p className="text-base font-bold text-gray-800">{restaurant?.info?.cuisines?.join(" , ")}</p>
                    <p className="font-bold text-gray-600"><i className="text-green-500 fa-solid fa-star"></i>{restaurant?.info?.avgRating}  <span className="font-extrabold"> . </span>  {restaurant?.info?.sla?.lastMileTravelString}</p>
                    <p className="text-xs font-bold text-gray-600">{restaurant?.info?.locality}</p>
                </div>

            </div>
        </>
    )
}

export default RestaurantCard;