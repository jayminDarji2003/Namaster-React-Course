import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

function RestaurantInfo() {
    const { id } = useParams(); // reading a dynamic URL 
    const [restaurant, setRestaurant] = useState(null);  // creating a state variable 

    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId=" + id + "&catalog_qa=undefined&submitAction=ENTER");
            const json = await data.json();
            setRestaurant(json.data);
        } catch (error) {
            console.error("Error fetching restaurant info:", error);
        }
    }

    return !restaurant ? <Shimmer /> : (
        <div>
            <h1 className="text-xl">Restaurant info page!!</h1>
            <p>Id - {id}</p>
            <p>Name - {restaurant?.cards[0]?.card?.card?.info?.name}</p>
        </div>
    );
}

export default RestaurantInfo;
