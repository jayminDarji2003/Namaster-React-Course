import "../Assets/CSS/RestaurantFoodMenu.css"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RestaurantFoodMenu = () => {
    const { resId } = useParams();
    const [restaurantInfo, setRestaurantInfo] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getRestaurantInfo();
    }, [])

    async function getRestaurantInfo() {
        try {
            const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId=" + resId + "&catalog_qa=undefined&submitAction=ENTER");

            const resData = await response.json();
            setRestaurantInfo(resData);
            setIsLoading(false);
            console.log(resId);
        }
        catch (error) {
            console.error("Error occurred while fetching data", error);
            setIsLoading(false);
        }
    }

    // Extract id, name, and avgRating from the object
    const restaurantDetail = restaurantInfo.data?.cards[0]?.card?.card?.info || {};


    return (
        <>
            <section className="searchBox">
                <section className="searchContainer">
                    <input type="text" placeholder="search your favourite item" />
                    <i className="fa-brands fa-searchengin searchIcon"></i>
                </section>
            </section>


            <section className="restaurantProductsList">
                <h2>{restaurantDetail?.name}</h2>
            </section>
        </>
    )
}

export default RestaurantFoodMenu

