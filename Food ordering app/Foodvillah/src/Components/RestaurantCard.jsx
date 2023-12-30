import React from "react";

const resData = {
    name: "Burger king",
    imgUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bb7ae131544c7d37e10fc5faf76f09d6",
    cusines: ["Cusines", "Burger", "Pizza"],
    rating: 4.5
}


function RestaurantCard() {
    return (
        <>
            <div className="bg-blue-200 w-72 gap-2 py-3 m-4 flex items-center flex-col cursor-pointer hover:shadow-2xl">
                <img className="h-56 w-64" src={resData.imgUrl} alt="Image is not able to see" />
                <p className="font-bold text-xl">{resData.name}</p>
                <p className="font-bold">{resData.cusines.join(" , ")}</p>
                <p>Rating : {resData.rating}</p>
            </div>
        </> 
    )
}

export default RestaurantCard;