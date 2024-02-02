import { useEffect, useState } from "react";
import { RESTAURANT_DETAILS_D_API, RESTAURANT_DETAILS_M_API } from "../config";

const useRestaurantMenu = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try {
      const data = await fetch(
        RESTAURANT_DETAILS_D_API +
        id +
        "&catalog_qa=undefined&submitAction=ENTER"
      );
      const json = await data.json();
      setRestaurant(json.data);
    } catch (error) {
      console.error("Error fetching restaurant info:", error);
    }
  }

  return restaurant;
};

export default useRestaurantMenu;

