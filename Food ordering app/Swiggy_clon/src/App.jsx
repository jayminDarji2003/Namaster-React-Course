import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Search from "./Components/Search";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { SWIGGY_API } from "./config";
import Shimmer from "./Components/Shimmer";
import Error from "./Components/Error";
import Offers from "./Components/Offers";
import Help from "./Components/Help";
import Authentication from "./Components/Authentication";
import Cart from "./Components/Cart";
import RestaurantInfo from "./Components/RestaurantInfo";

function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

function App() {
  const [allRestaurant, setAllRestaurant] = useState([]);

  useEffect(() => {
    // api call here
    getRestaurant(); // function call
  }, []);

  async function getRestaurant() {
    const data = await fetch(SWIGGY_API); // fetching the data from the swiggy api
    const resData = await data.json(); // converting the data to json format
    // console.log(resData);
    setAllRestaurant(resData); // updating the restaurant
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            {/* Rendering body component on '/' path with restaurantData props  */}
            <Route index element={<Body restaurantData={allRestaurant} />} />

            {/* Rendering search component on '/search' path */}
            <Route
              path="search"
              element={<Search restaurantData={allRestaurant} />}
            />

            {/* Rendering offers page  */}
            <Route path="offers" element={<Offers />} />

            {/* Rendering help page */}
            <Route path="help" element={<Help />} />

            {/* Rendering authentication page */}
            <Route path="auth" element={<Authentication />} />

            {/* Rendering cart page */}
            <Route path="cart" element={<Cart />} />

            {/* Dynamic routes  */}
            <Route path="restaurant/:id" element={<RestaurantInfo />} />
          </Route>
          <Route
            path="*"
            element={
              <Error
                name={"Opps!!, something went wrong. Please go to home page."}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
