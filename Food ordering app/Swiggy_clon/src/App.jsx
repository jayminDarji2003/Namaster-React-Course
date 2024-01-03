import React, { useState, useEffect } from "react";
import Header from "./Components/Header"
import Body from "./Components/Body"
import Search from "./Components/Search";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import { SWIGGY_API } from "./config";
import Shimmer from "./Components/Shimmer";

function App() {
  const [allRestaurant, setAllRestaurant] = useState([]);

  useEffect(() => {
    // api call here
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(SWIGGY_API); // fetching the data from the swiggy api
    const resData = await data.json(); // converting the data to json format
    // console.log(resData);
    setAllRestaurant(resData);
  }


  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Use the Outlet component to render nested routes */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Outlet />
              </>
            }
          >
            <Route index element={<Body restaurantData={allRestaurant} />} />
          </Route>

          <Route
            path="/search"
            element={
              <>
                <Header />
                <Outlet />
              </>
            }
          >
            <Route index element={<Search restaurantData={allRestaurant} />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

