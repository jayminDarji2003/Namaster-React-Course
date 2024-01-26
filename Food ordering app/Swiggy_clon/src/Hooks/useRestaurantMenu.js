import { useEffect, useState } from "react";

const useRestaurantMenu = (id) => {
  const [restaurant, setRestaurant] = useState(null);

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

  return restaurant;
};

export default useRestaurantMenu;
