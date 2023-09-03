import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import loader from "../Assets/Images/loader_gif.gif"
import "../Assets/CSS/RestaurantMenu.css"
import discountImg from "../Assets/Images/discountImg.png"
import { Link } from "react-router-dom"

const RestaurantMenu = () => {
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
            //console.log("data fetched");
            // console.log(resData);
        }
        catch (error) {
            console.error("Error occurred while fetching data", error);
            setIsLoading(false);
            // console.log("data not fetched");
        }
    }

    // Extract id, name, and avgRating from the object
    const restaurantDetail = restaurantInfo?.data?.cards[0]?.card?.card?.info || {};
    const restaurantMenuDetail = restaurantInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel[0]?.dish?.info || {};
    const IMG_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/";

    // console.log(restaurantMenuDetail);

    return (
        <>
            {
                isLoading ?
                    (
                        <div className="loaderContainer">
                            <img className="menuLoader" src={loader} alt="loader image" />
                        </div>
                    ) : (
                        <>
                            <main className="restaurantContainer">
                                <section className="restaurantDetails">
                                    <div className="resData">
                                        <h2>{restaurantDetail?.name}</h2>
                                        <p>{restaurantDetail?.labels[2]?.message}</p>
                                        <p>{restaurantDetail?.areaName} , {restaurantDetail?.sla?.lastMileTravelString} </p>
                                    </div>
                                    <div className="ratingData">
                                        <p className="firstPara"><i className="fa-solid fa-star star"></i> {restaurantDetail?.avgRating} </p>
                                        <hr className="newHr" />
                                        <p className="ratingCount">{restaurantDetail?.totalRatingsString}</p>
                                    </div>
                                </section>

                                <hr />

                                <section className="restOtherDetails">
                                    <div className="deliveryData">
                                        <h4><i className="fa-solid fa-clock"></i> {restaurantDetail?.sla?.slaString}</h4>
                                        <h4><i className="fa-solid fa-indian-rupee-sign ruppeIcon"></i> {restaurantDetail?.costForTwoMessage}</h4>
                                    </div>

                                    <div className="resAddress">
                                        <h4>Restaurant Address :-  </h4>
                                        <p className="address"> {restaurantDetail?.locality} , {restaurantDetail?.areaName} </p>
                                    </div>
                                </section>

                                <hr />

                                <section className="offers">
                                    <div className="offerContainer">
                                        <img src={discountImg} alt="discount image" />
                                        <h4>{restaurantDetail?.aggregatedDiscountInfo?.descriptionList[0]?.meta}</h4>
                                    </div>

                                    <div className="offerContainer">
                                        <img src={discountImg} alt="discountt image" />
                                        <h4>{restaurantDetail?.aggregatedDiscountInfo?.descriptionList[1]?.meta}</h4>
                                    </div>
                                </section>

                            </main>

                            <section className="restaurantProductsList">
                                <h3>{restaurantMenuDetail?.name}</h3>
                                <h4>{restaurantMenuDetail?.description}</h4>
                                <img src={IMG_URL + restaurantMenuDetail?.imageId} alt="image is here" />
                            </section>
                        </>
                    )
            }
        </>
    )
}

export default RestaurantMenu;



