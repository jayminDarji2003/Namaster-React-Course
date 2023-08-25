import React, { useEffect, useState } from 'react';
import '../App.css';
import Card from './Card'; 
import { restaurantList } from '../config';
import Shimmer from './Shimmer';


function filterData(searchTxt, restaurants) {
  const filterRes = restaurants.filter((restaurant) => {
    return restaurant?.info?.name?.toLowerCase()?.includes(searchTxt?.toLowerCase());
  });

  return filterRes;
}


function Body() {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");

useEffect(() => {
  // api call here
  getRestaurants();
}, []);

async function getRestaurants() {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.022505&lng=72.5713621&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  const json = await data.json();

  setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

}


  // not render component (Early return)
  if (!allRestaurants) return null;

  // filtered restaurants not found
  if (filteredRestaurants?.length === 0) {
    return (
      <>
        <h3>Please Enter Valid input!!</h3>
      </>
    )
  }

  return (filteredRestaurants.length === 0) ? <Shimmer /> : (
    <>

      {/* search component start here  */}
      <div className='search-container'>
        <input
          type="text"
          className='search-input'
          placeholder='Search Any Restaurant'
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />
        <button onClick={() => {
          // need to filter data 
          const data = filterData(searchTxt, allRestaurants);
          // update the state
          setFilteredRestaurants(data);
        }}>Search</button>
      </div>
      {/* search component ends here  */}

      {/* main/body component start here  */}
      <div className='main'>
        {filteredRestaurants.map((restaurant) => (
          <Card {...restaurant.info} key={restaurant.info.id} />
        ))}
      </div>
      {/* main/body component ends here  */}

    </>
  );
}

export default Body;
