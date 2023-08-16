import React, { useState } from 'react';
import '../App.css';
import Card from './Card';
import { restaurantList } from '../config';


function filterData(searchTxt, restaurants) {
  const filterRes = restaurants.filter((restaurant) => {
    return restaurant.data.name.includes(searchTxt);
  });

  return filterRes;
}


function Body() {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchTxt, setSearchTxt] = useState("");

  return (
    <>
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
          const data = filterData(searchTxt, restaurants);
          // update the state
          setRestaurants(data);
        }}>Search</button>
      </div>


      <div className='main'>
        {restaurants.map((restaurant) => (
          <Card {...restaurant.data} key={restaurant.data.id} />
        ))}
      </div>
    </>
  );
}

export default Body;


