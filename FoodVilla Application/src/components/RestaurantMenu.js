import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import loader from "../Assets/Images/loader_gif.gif"
import "../Assets/CSS/RestaurantMenu.css"

// Call API :- 
// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId={id}&catalog_qa=undefined&submitAction=ENTER

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [restaurantInfo, setRestaurantInfo] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getRestaurantInfo();
    }, [])

    async function getRestaurantInfo() {
        try {
            // const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId=52630&catalog_qa=undefined&submitAction=ENTER");

            const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId=" + resId + "&catalog_qa=undefined&submitAction=ENTER");

            const resData = await response.json();
            setRestaurantInfo(resData);
            setIsLoading(false);
            console.log(resData.data.cards[0].card.card.info.name);
            console.log("data fatch successfully");
            // console.table(resData);
        }
        catch (error) {
            console.error("Error occure while fetching data", error);
            console.log(resId);
            setIsLoading(false);
        }
    }


    return (
        <>
            {
                isLoading ?
                    (
                        <div className="loaderContainer">
                            <img className="menuLoader" src={loader} alt="loader image" />
                        </div>
                    ) : (
                        <div>
                            <img width={"200px"} src={IMG_CDN_URL + restaurantInfo.data.cards[0].card.card.info.cloudinaryImageId} alt="image is not able to see." />
                            <h1>Restaurant id: {restaurantInfo.data.cards[0].card.card.info.id}</h1>
                            <h3>Restaurant name is : {restaurantInfo.data.cards[0].card.card.info.name} </h3>
                            <h3>Restaurant rating is : {restaurantInfo.data.cards[0].card.card.info.avgRating} </h3>
                            <h3>Restaurant locality is : {restaurantInfo.data.cards[0].card.card.info.locality} </h3>
                            <h3>Restaurant city is : {restaurantInfo.data.cards[0].card.card.info.city} </h3>
                            <h3>Restaurant cuisines is : {restaurantInfo.data.cards[0].card.card.info.cuisines.join(", ")} </h3>
                        </div>
                    )
            }
        </>
    )
}

export default RestaurantMenu;









// id - 70177
// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId=70177&catalog_qa=undefined&submitAction=ENTER

// id - 653663
// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId=653663&catalog_qa=undefined&submitAction=ENTER

// id - 147742
// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId=147742&catalog_qa=undefined&submitAction=ENTER