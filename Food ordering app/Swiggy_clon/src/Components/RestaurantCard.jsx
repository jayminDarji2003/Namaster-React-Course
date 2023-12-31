import React from "react";



function RestaurantCard({ cloudinaryImageId, name, cuisines, avgRating, sla ,locality}) {
    return (
        <>
            <div className="hover:scale-95 p-2 w-72 gap-1 py-3 m-4 flex  flex-col cursor-pointer rounded-xl ">
                <img className="h-40 rounded-xl w-64" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="Image is not able to see" />
                <div className="pl-2">
                    <p className="font-bold text-2xl text-gray-800">{name}</p>
                    <p className="text-base font-bold text-gray-800">{cuisines?.join(" , ")}</p>
                    <p className="font-bold text-gray-600"><i className="text-green-500 fa-solid fa-star"></i>{avgRating}  <span className="font-extrabold"> . </span>  {sla?.lastMileTravelString}</p>
                    <p className="text-xs font-bold text-gray-600">{locality}</p>
                </div>

            </div>
        </>
    )
}

export default RestaurantCard;