import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { RESTAURANT_MENU_FOOD_IMG } from "../config";
import Loader from "./Loader";

function RestaurantInfo() {
  const { id } = useParams(); // reading a dynamic URL
  const [restaurant, setRestaurant] = useState(null); // creating a state variable
  let restaurantInfo = null;

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.022505&lng=72.5713621&restaurantId=" +
          id +
          "&catalog_qa=undefined&submitAction=ENTER"
      );
      const json = await data.json();
      setRestaurant(json.data);
    } catch (error) {
      console.error("Error fetching restaurant info:", error);
    }
  }

  return !restaurant ? (
    // <Shimmer />
    <Loader />
  ) : (
    <>
      <div className="w-screen flex justify-center">
        <div className="w-1/2  my-7 flex justify-between">
          <div>
            <p className="text-lg font-bold">
              {restaurant?.cards[0]?.card?.card?.info?.name}
            </p>
            <div className="flex mt-2">
              <p className="text-sm text-gray-500">
                {restaurant?.cards[0]?.card?.card?.info?.cuisines[0]}
              </p>
              <p className="text-sm text-gray-500">
                , {restaurant?.cards[0]?.card?.card?.info?.cuisines[1]}
              </p>
            </div>
            <div className="flex gap-2">
              <p className="text-sm text-gray-500">
                {restaurant?.cards[0]?.card?.card?.info?.areaName}
              </p>
              <p className="text-sm text-gray-500">
                {
                  restaurant?.cards[0]?.card?.card?.info?.sla
                    ?.lastMileTravelString
                }
              </p>
            </div>

            <div className="flex items-center mt-3 gap-2">
              <i
                className="fa-solid fa-person-biking"
                style={{ color: "	#808080" }}
              ></i>
              <p className="text-sm text-gray-500">
                {restaurant?.cards[0]?.card?.card?.info?.feeDetails?.message}
              </p>
            </div>
          </div>

          <div className="border-2 h-20 w-36 flex flex-col justify-center items-center rounded-lg ">
            <div>
              <i class="fa-solid fa-star text-orange-400"></i>
              <span className="ml-2 font-bold text-orange-400">
                {restaurant?.cards[0]?.card?.card?.info?.avgRating}
              </span>
            </div>
            <hr />
            <div>
              <p className="text-xs">
                {restaurant?.cards[0]?.card?.card?.info?.totalRatingsString}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* starting the menu  */}
      <h1 className="text-center text-2xl font-bold mb-6">Menu</h1>

      <div className="flex justify-center">
        <div className="w-1/2">
          {restaurant.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
            ?.slice(0, -2)
            ?.map((category, index) => (
              <div key={index}>
                <p className="text-xl p-2 text-center font-bold bg-orange-400">
                  {category?.card?.card?.title}
                </p>
                <ul className="mt-2">
                  {category?.card?.card?.itemCards?.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex justify-between p-5  border-2 rounded-lg m-10"
                    >
                      <div>
                        <p className="text-orange-400 font-bold text-xl">
                          {item?.card?.info?.name}
                        </p>
                        <p className="text-sm w-96">
                          {item?.card?.info?.description}
                        </p>
                        <p className="mt-5 font-bold ">
                          Price : ₹{(item?.card?.info?.price / 100).toFixed(0)}
                        </p>
                      </div>

                      <div className="flex flex-col gap-2">
                        <img
                          className="w-36 h-32"
                          src={
                            RESTAURANT_MENU_FOOD_IMG + item?.card?.info?.imageId
                          }
                          alt="image"
                        />
                        <button className="bg-orange-400 p-1 rounded-md px-3">
                          Add
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default RestaurantInfo;
