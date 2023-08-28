import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import loader from "../Assets/Images/loader_gif.gif"
import "../Assets/CSS/RestaurantMenu.css"
import discountImg from "../Assets/Images/discountImg.png"

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
                                        <p className="firstPara"><i className="fa-solid fa-star star"></i> {restaurantDetail.avgRating} </p>
                                        <hr className="newHr" />
                                        <p className="ratingCount">{restaurantDetail.totalRatingsString}</p>
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
                                        <img src={discountImg} alt="discount image" />
                                        <h4>{restaurantDetail?.aggregatedDiscountInfo?.descriptionList[1]?.meta}</h4>
                                    </div>
                                </section>

                            </main>

                            <section className="searchBox">
                                <section className="searchContainer">
                                    <input type="text" placeholder="search your favourite item" />
                                    <i className="fa-brands fa-searchengin searchIcon"></i>
                                </section>
                            </section>


                            <section className="restaurantProductsList">
                                this restaurant product data
                            </section>
                        </>
                    )
            }
        </>
    )
}

export default RestaurantMenu;
