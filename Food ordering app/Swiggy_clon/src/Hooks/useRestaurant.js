import { useEffect, useState } from "react";
import { SWIGGY_D_API_2, SWIGGY_M_API } from "../config";

const useRestaurant = () => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(SWIGGY_D_API_2); // fetching the data from the swiggy api
    const resData = await data.json(); // converting the data to json format
    // console.log(resData);
    setRestaurant(resData); // updating the restaurant
  }

  return restaurant;
};

export default useRestaurant;



