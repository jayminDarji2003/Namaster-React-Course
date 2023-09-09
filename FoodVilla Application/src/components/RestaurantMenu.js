import { useParams } from "react-router-dom";
import "../Assets/CSS/RestaurantMenu.css"
import discountImg from "../Assets/Images/discountImg.png"
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Loader from "./Loader";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const restaurantInfo = useRestaurantMenu(resId);

    const restaurantDetail = restaurantInfo?.data?.cards[0]?.card?.card?.info || {};
    return (
        <>
            {
                (!restaurantInfo) ?
                    (
                        <Loader />
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

                            {/* <section className="restaurantProductsList">
                                <h3>{restaurantMenuDetail?.name}</h3>
                                <h4>{restaurantMenuDetail?.description}</h4>
                                <img src={IMG_URL + restaurantMenuDetail?.imageId} alt="image is here" />
                            </section> */}
                        </>
                    )
            }
        </>
    )
}

export default RestaurantMenu;


