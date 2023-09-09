// what is HOOK at the end of the day :- It's a normal javascript function.

import { useState, useEffect } from "react"

const useRestaurantMenu = (resId) => {
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        getRestaurantInfo();
    }, [])

    async function getRestaurantInfo() {
        try {
            const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId=" + resId + "&catalog_qa=undefined&submitAction=ENTER");

            const resData = await response.json();
            setRestaurant(resData);
        }
        catch (error) {
            console.error("Error occurred while fetching data", error);
        }
    }

    return restaurant;
}

export default useRestaurantMenu